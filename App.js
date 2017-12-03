import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, FormLabel, FormInput, Header} from 'react-native-elements'

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Image style={{ alignSelf: 'center' }} source={require('./assets/logo.png')}/>
        <FormLabel>E-mail Address</FormLabel>
        <FormInput />
        <FormLabel>Password</FormLabel>
        <FormInput secureTextEntry />
        <Button title="Submit" backgroundColor="#cd5c5c" />
      </View>
    );
  }
}
