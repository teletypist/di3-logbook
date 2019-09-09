
/*
 * Basic input field
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Button as RNButton, StyleSheet } from 'react-native';

import styles from '../style';

const Button = ({onClick, title="Start", style=styles.button}) => <View style={styles.button}>
    <RNButton title={title} color={StyleSheet.flatten(style).backgroundColor} onPress={onClick} />
</View>

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string,
}

export default Button
