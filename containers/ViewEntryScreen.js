import React from 'react';

import Container from '../components/Container';
import EntryList from '../components/EntryList';

//Added onRemoveEntry which we assume comes from screenProps
const ViewEntryScreen = ({screenProps}) => <Container>
    <EntryList entries={screenProps.entries} onRemoveEntry={screenProps.removeEntry} />
</Container>

export default ViewEntryScreen
