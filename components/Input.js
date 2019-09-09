
/*
 * Basic input field
 */
import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

import styles from '../style';

const Input = ({ value, onChange, label, style=styles.input }) => <TextInput value={value} type="text" style={style} onChange={onChange} placeholder={label} />

Input.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string,
}

export default Input
