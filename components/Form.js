/*
 * TextArea input widget
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import Input from './Input'
import TextArea from './TextArea'
import Button from './Button'

import styles from '../style';

const Form = ({message, name, onNameChange, onMessageChange, onSubmit}) => <View style={styles.form}>
    <Input value={name} onChange={onNameChange} label="Name" />
    <TextArea value={message} onChange={onMessageChange} label="Leave a message" />
    <Button onClick={onSubmit}/>
</View>

Form.propTypes = {
    message: PropTypes.string,
    name: PropTypes.string,
    onNameChange: PropTypes.func.isRequired,
    onMessageChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default Form;
