import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./src/components/header";
import AlbumList from "./src/components/AlbumList";
// import AlbumDetail from './src/components/AlbumDetail';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Albums'}/>
        <AlbumList />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


