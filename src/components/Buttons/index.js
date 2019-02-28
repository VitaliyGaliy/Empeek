import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from "./styles";

const Buttons = ({ handler, children }) => {
    return (
        <TouchableOpacity
            onPress={() => handler && handler()}
            style={styles.btnWrapper}
        >
            <Text style={styles.roundBtn}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

export default Buttons;