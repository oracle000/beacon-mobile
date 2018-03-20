import React from 'react';
import { StyleSheet, Text, View, Button  } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native'

class Login extends React.Component {
    render() {
        return (
            <View>
                <Text>Login</Text>
                <Text>User</Text>
                <Link   
                    to="/main">
                    <Text>Go to Main</Text>
                </Link>
                

            </View>
        )
    }
}

export default Login;