import React from 'react';
import { StyleSheet, Text, View, Button  } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { NativeRouter, Route, Link } from 'react-router-native'

import Login from './app/login/login';
import Main from './app/main/main';


class App extends React.Component {
  render() {
    return (

      <NativeRouter>
        <View>
          <Route exact path="/" component={Login}/>
          <Route path="/main" component={Main}/>        
        </View>
      </NativeRouter>
    );
  }
}

export default  App;


// import Login from './app/login';
// // import Details from './app/detail';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//         <Button
//           title="Go to Details... again"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//         <Button
//           title="Go back"
//           onPress={() => this.props.navigation.goBack()}
//         />
//       </View>
//     );
//   }
// }



// const RootStack = StackNavigator(
//   {
//     Login: {
//       screen: LoginScreen,
//     },
//     Details: {
//       screen: DetailsScreen,
//     },
//   },
//   {
//     initialRouteName: 'Login',
//   }
// );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

