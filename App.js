import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Header} from 'react-native-elements'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          style = {styles.header}
          backgroundColor = '#ff6961'
          leftComponent={{icon: 'menu', color: '#fff'}}
          centerComponent={{text: 'BloodHaxs', style: {color: '#fff'}}}
        />
        <Image source={require('./assets/logo.png')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    top : '0'
  }
});
