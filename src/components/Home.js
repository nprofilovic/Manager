import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from './common/Header';
import LoginForm from './LoginForm';

export class Home extends Component {
    render() {
        return (
            <View>
                <Header title={"Manager"} />
                <LoginForm />
            </View>
        )
    }
}

export default Home
