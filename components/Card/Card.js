import React from 'react'
import { View } from 'react-native'

const Card = (props) => {
  const { containerStyle } = styles

  return (
    <View style={ containerStyle }>
      { props.children }
    </View>
  )
}

const styles = {
  containerStyle: {
    borderBottomWidth: 0,
    borderColor: '#ddd',
    borderRadius: 2,
    borderWidth: 1,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  }
}

export default Card
