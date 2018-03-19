import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';


class DetailScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>Details</Text>
            </View>
        );
    }
}


export default StackNavigator({
    Detail: {
        screen: DetailScreen,
    },  
});