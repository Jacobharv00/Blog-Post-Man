import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'
import { Context } from '../context/BlogContext'

const ShowScreen = ( { navigation } ) => {
  const { state } = useContext( Context )
  const blogPostId = navigation.getParam( 'id' )

  const blogPost = state.find( ( blogPost ) => blogPost.id === blogPostId )

  return (
    <View>
      <Text>{ blogPost.title }</Text>
      <Text>{ blogPost.content }</Text>
    </View>
  )
}

ShowScreen.navigationOptions = ( { navigation } ) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={ () => navigation.navigate( 'Edit' ) }>
        <EvilIcons name="pencil" size={ 30 } style={ styles.pencilIcon } />
      </TouchableOpacity>
    ),
  }
}

const styles = StyleSheet.create( {
  pencilIcon: {
    padding: 10,
    marginRight: 10,
    fontSize: 30,
    color: '#265664'
  },
} )

export default ShowScreen

