import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, Linking } from 'react-native'

const Button = ({children, onPress}) => {
  const { buttonStyle, textStyle } = styles

  function handlePress() {
    console.log('pressed');
  }

  return (
    <TouchableOpacity style={buttonStyle} onPress={handlePress}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  children: PropTypes.string,
  onPress: PropTypes.func,
}

Button.defaultProps = {
  children: 'Click me',
}

const styles = {
  textStyle: {
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }
}

Button.displayName = 'Button'

export default Button
