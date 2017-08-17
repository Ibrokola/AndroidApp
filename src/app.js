import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDKfA13nmrA4Do2Zt8H2Rw80cSQTMCuypU",
            authDomain: "auth-7aed9.firebaseapp.com",
            databaseURL: "https://auth-7aed9.firebaseio.com",
            projectId: "auth-7aed9",
            storageBucket: "auth-7aed9.appspot.com",
            messagingSenderId: "583326505728"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>An App</Text>
            </View>
        );
    }
}

export default App;