
import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';


class LoginScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>Hello User</Text>
            </View>
        );
    }
}



export default StackNavigator({
    Login: {
        screen: LoginScreen,
    },  
});