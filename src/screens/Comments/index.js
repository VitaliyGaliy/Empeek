import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Field, reduxForm } from 'redux-form'
import { connect } from "react-redux"
import uuidv4 from "uuid/v4";

import * as actions from "../../actions/items";
import Button from "../../components/Buttons";
import Input from "../../components/Input";

import styles from "./styles";

class Comments extends Component {
    static navigationOptions = ({ navigation, navigation: { state } }) => {

        return {
            title: `${state.params.item.text}`,
            headerStyle: {
                backgroundColor: '#080082',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerLeft: (
                <View style={{ marginLeft: 15 }}>
                    <Button
                        handler={() => navigation.goBack()}
                    >
                        <Text>{"<"}</Text>
                    </Button >
                </View>
            )
        }
    };

    constructor(params) {
        super()
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        const { navigation: { state } } = this.props

        const { item: { comments } } = state.params
        this.setState({
            comments
        });
    }

    componentWillReceiveProps(nextProps) {
        const { navigation: { state }, items } = this.props
        const { item: { id } } = state.params
        const newItemWithCommets = nextProps.items.filter(item => item.id === id)
        const newCommets = newItemWithCommets && newItemWithCommets[0].comments
        this.setState({
            comments: newCommets
        });
    }

    submit = ({ newComment }) => {
        const { addComment, navigation, navigation: { state } } = this.props
        const { item: { id } } = state.params

        addComment({ text: newComment, itemId: id, commentId: uuidv4() })

    }

    keyExtractor = (item, index) => item.id;
    renderItem = ({ item }) => {

        return (
            <View key={item.itemId} style={styles.commentsContainer}>
                <View style={styles.lefttPart}>
                    <View style={styles.avatar} />
                </View>
                <View style={styles.rightPart}>
                    <Text>{item && item.text}</Text>
                </View>
            </View>
        )
    }

    render() {
        const { handleSubmit } = this.props
        const { comments } = this.state

        return (
            <View style={styles.container}
            >
                <FlatList
                    data={comments}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.renderSeparator}
                />
                <View style={styles.footer}>
                    <Field name="newComment" component={Input} />
                    <Button
                        handler={handleSubmit(this.submit)}
                    >
                        <Text>{"<"}</Text>
                    </Button >
                </View>
            </View>
        );
    }
}

const validate = values => {
    const errors = {}

    if (!values.newComment) {
        errors.newComment = 'First name is required.'
    }
    return errors
}

const form = reduxForm({
    form: 'comments',
    validate
})(Comments)

const mapStateToProps = ({ items }) => ({
    items: items.items
})

export default connect(mapStateToProps, actions)(form)