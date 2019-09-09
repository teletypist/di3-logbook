/*
 * TextArea input widget
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import Entry from './Entry'

import styles from '../style';

//Add on remove argument. onRemoveEntry, which must be called with the index of the entry
const EntryList = ({entries=[], onRemoveEntry}) => <View style={styles.entrylist}>
    {   /*Add onRemove as a function which calls onRemoveEntry with the Entry's index implicitly*/
        entries.map( (entry, index) => <Entry {...entry} onRemove={() => onRemoveEntry(index)} key={index}/> )
    }
    {entries.length === 0 && <Text>No entries ATM</Text>}
</View>

EntryList.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.object)
}

export default EntryList;
