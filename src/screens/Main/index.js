import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import Swipeout from 'react-native-swipeout';
import { connect } from "react-redux"

import * as actions from "../../actions/items";
import Button from "../../components/Buttons";
import styles from "./styles";

const CustomHeader = () => (
    <View style={styles.container}>
        <Text style={styles.bigTitle}>Sayer</Text>
        <Text style={styles.smallTitle}>World`s most used time waster</Text>
    </View>
);

renderSeparator = () => {
    return (
        <View
            style={{
                height: 1,
                width: "86%",
                backgroundColor: "#CED0CE",
                marginLeft: "14%"
            }}
        />
    );
};

class Main extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <CustomHeader />,
            headerStyle: {
                backgroundColor: '#080082',
            },
            headerTintColor: '#fff',
        }
    };

    keyExtractor = (item, index) => item.id;
    renderItem = ({ item }) => {

        return (
            <Swipeout
                right={this.swipeoutBtns(item.id)}
                id={item.id}
            >
                <TouchableOpacity
                    style={styles.itemWrapper}
                    onPress={() => this.props.navigation.navigate('Comments', { item })}
                >
                    <Text>{item.text}</Text>
                    <Button
                        handler={() => null}
                    >
                        <Text style={{ fontSize: 14 }}>{item.comments.length}</Text>
                    </Button>
                </TouchableOpacity>
            </Swipeout>
        )
    }

    swipeoutBtns = (id) => ([
        {
            text: 'Delete',
            type: "delete",
            onPress: () => {
                const { removeItem } = this.props
                removeItem(id);

            }
        }
    ])

    render() {
        const { navigation, items } = this.props

        return (
            <FlatList
                data={items}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
                ItemSeparatorComponent={this.renderSeparator}
                ListFooterComponent={
                    <View style={styles.footerBtnWrapper}>
                        <Button
                            handler={() => {
                                navigation.navigate('NewItem')
                            }}
                        >
                            <Text style={{ fontSize: 14 }}>+</Text>
                        </Button>
                    </View>
                }
            />
        );
    }
}

const mapStateToProps = ({ items }) => ({
    items: items.items
})

export default connect(mapStateToProps, actions)(Main)