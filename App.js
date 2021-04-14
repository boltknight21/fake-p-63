import * as React from 'react';
import { Text, View, StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = { text:'',displayText:'' };
  }
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            backgroundColor={'#e1ad01'}
            centerComponent={{
              text: 'DICTIONARY - Online version 2.0',
              style: { fontSize: 22 },
            }}
          />
          <TextInput
            placeholder="Enter The Word"
            style={styles.box}
            onChangeText={(t)=>{
              this.setState({text:t})
            }}
            value={this.state.text}
          /> 
          <TouchableOpacity>
          <Text style={{color:'#e1ad09',alignSelf:'center',marginTop:15,fontWeight:'Bold'}}>
           SEARCH 🔍
          </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  box: {
    marginTop: 100,
    color: 'white',
    borderColor: '#e1ad09',
    borderWidth: 1,
    textAlign: 'center',
    height: 40,
    width:170,
    alignSelf:'center'
  },
});

