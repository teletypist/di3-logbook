/*
 * TextArea input widget
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import styles from '../style';

//Entry accepts a onRemove function which can be called with no arguments, since
//Everything the function needs to know has been encoded at the entry list stage
const Entry = ({name, message, onRemove}) => <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
    <Text>{name} | {message}</Text>
    <Text onPress={onRemove} style={{color: 'red', fontWeight: 'bold'}}>X</Text>
</View>

Entry.propTypes = {
    name: PropTypes.string,
    message: PropTypes.string,
}

export default Entry;
