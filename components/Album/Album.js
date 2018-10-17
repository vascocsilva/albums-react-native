import React from 'react'
import { StyleSheet, Text, Image } from 'react-native'
import Card from '../Card'
import CardSection from '../CardSection'

const Album = ({ album: {title, artist, image} }) => {
  const { imageStyle, viewStyle } = styles

  return (
    <Card>
      <CardSection>
      </CardSection>
      <CardSection>
        <Image source={{uri: image}} style={imageStyle} />
        <Text>{title} - {artist}</Text>
      </CardSection>
    </Card>
  )
}

const styles = {
  imageStyle: {
    width: 200,
    height: 200,
  },
  viewStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    marginTop: 15,
  }
}

export default Album
