import React from 'react';
import { Text, View } from 'react-native';
import { Field, reduxForm } from 'redux-form'
import uuidv4 from "uuid/v4";
import { connect } from "react-redux"

import Button from "../../components/Buttons";
import Input from "../../components/Input";
import * as actions from "../../actions/items";
import styles from "./styles";

class NewItems extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Create new items',
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

    submit = ({ newItem }) => {

        const { addItem, navigation } = this.props
        addItem({ text: newItem, id: uuidv4(), comments: [] })
        navigation.navigate('Main')
    }

    render() {
        const { handleSubmit } = this.props

        return (
            <View style={styles.container}>
                <Field name="newItem" component={Input} />
                <Button
                    handler={handleSubmit(this.submit)}
                >
                    <Text>></Text>
                </Button >
            </View>
        );
    }
}

const validate = values => {
    const errors = {}

    if (!values.newItem) {
        errors.newItem = 'First name is required.'
    }
    return errors
}

const form = reduxForm({
    form: 'items',
    validate,
})(NewItems)

export default connect(null, actions)(form)