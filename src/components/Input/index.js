import React from 'react';
import { TextInput } from 'react-native';

import styles from "./styles";

const Input = renderInput = ({ input: { onChange, ...restInput }, meta: { error, touched } }) => {
    return <TextInput
        style={touched && error ? styles.errInput : styles.input}
        onChangeText={onChange}
        {...restInput}
    />
}

export default Input;