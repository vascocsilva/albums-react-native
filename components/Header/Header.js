import React from 'react'
import { Text, View } from 'react-native'

const Header = (props) => {
  const { textStyle, viewStyle } = styles

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{ props.title }</Text>
    </View>
  )
}

const styles = {
  viewStyle: {
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    display: 'flex',
    elevation: 2,
    height: 70,
    justifyContent: 'center',
    paddingTop: 25,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  textStyle: {
    fontSize: 20,
  }
}

export default Header
