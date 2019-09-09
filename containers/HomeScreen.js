import React from 'react';
import { Button, View, Text } from 'react-native';

import Container from '../components/Container';

const HomeScreen = ({navigation, screenProps}) => <Container>
    <View><Text>There are {screenProps.entries.length} entries</Text></View>
    <Button title="New Entry" onPress={() => navigation.navigate('NewEntry')}/>
    <Button title="Show Entries" onPress={() => navigation.navigate('ViewEntries')}/>
</Container>

export default HomeScreen
