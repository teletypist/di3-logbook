/*
 * TextArea input widget
 */
import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

import styles from '../style';

const TextArea = ({value, onChange, label, style=styles.textarea}) =>  <TextInput value={value} style={style} onChange={onChange} placeholder={label} />

TextArea.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string,
}

export default TextArea;
