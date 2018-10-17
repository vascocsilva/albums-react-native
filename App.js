import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Greet from './components/Greet'
import Header from './components/Header'
import AlbumList from './components/AlbumList'

// rallycoding.herokuapp.com/api/music_albums
// http://vascosilva.site/cms/api/collections/get/albums?token=6b51bd66a3c69d41bdb2ac0f63de66

export default class App extends Component {
  render () {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <View style={styles.container}>
        <Header title={'App Header'} />
        {/* <Greet name="sd" /> */}
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
