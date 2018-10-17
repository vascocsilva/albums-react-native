import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Card from '../Card'
import CardSection from '../CardSection'
import Image from 'react-native-scalable-image'

const Album = ({ album }) => {
  const { title, artist, image } = album
  const {
    imageStyle,
    viewStyle,
    artistImageStyle,
    imageContainerStyle,
    headerStyle,
    titleStyle,
  } = styles

  return (
    <Card>
      <CardSection>
        <View>
          <Image
            source={{uri: 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/singer.png'}}
            width={20}
          />
        </View>
        <View style={headerStyle}>
          <Text style={titleStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <View style={imageContainerStyle}>
          <Image source={{uri: image}} width={Dimensions.get('window').width / 2} />
        </View>
      </CardSection>
    </Card>
  )
}

const styles = {
  imageContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  imageStyle: {
    width: '100%',
    height: 200,
  },
  artistImageStyle: {
    width: 40,
    height: 40,
  },
  viewStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    marginTop: 15,
  },
  headerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  }
}

export default Album
