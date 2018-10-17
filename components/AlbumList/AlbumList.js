import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Album from '../Album'

class AlbumList extends Component {
  state = {
      albums: [],
  }

  componentWillMount () {
    fetch('http://vascosilva.site/cms/api/collections/get/albums?token=6b51bd66a3c69d41bdb2ac0f63de66')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ albums: responseJson.entries })
      })
      .catch((error) => {
        console.error(error)
        throw error
      });
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <Album
        album={album}
        key={album.title} />
    )
  }

  render () {
    console.log(this.state)

    return (
      <View>
        {this.renderAlbums()}
      </View>
    )
  }
}

export default AlbumList
