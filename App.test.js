import React from 'react';
import renderer from 'react-test-renderer';


import App from './App';

jest.mock('./components/AppNavigator', () => {
    const Fake = function(props) {
        return <div>
        </div>;
    }
    Fake.router = {}
    return Fake;
});

jest.mock('react-native-web/dist/exports/AsyncStorage', () => {
    return {
        getItem: function() {return new Promise((resolve, reject) => resolve('{"entries":[]}'))},
        setItem: function() {return new Promise((resolve, reject) => resolve())}
    }
})

test('That we can get a test to run', () => {
    expect(1).toBe(1);
})
