import React from 'react';
import { StyleSheet, WebView } from 'react-native';

export default class App extends React.Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
      <WebView
          source={{uri:"http://www.strategy4me.com/pc/"}}
          style={{flex:1,marginTop:20}}
          scalesPageToFit={true}
          startInLoadingState={true}
          javaScriptEnabled={true}
          mixedContentMode={'never'}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
