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
      <Text style={ styles.title }>Show Screen</Text>
      <Text style={ styles.blogTitle }>{ blogPost.title }</Text>
      <Text style={ styles.blogContent }>{ blogPost.content }</Text>
    </View>
  )
}

ShowScreen.navigationOptions = ( { navigation } ) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={ () => navigation.navigate( 'Edit', { id: navigation.getParam( 'id' ) } ) }>
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
  title: {
    textAlign: 'center',
    fontSize: 30,
    margin: 10,
    marginBottom: 15,
    fontWeight: 'bold'
  },
  blogTitle: {
    fontSize: 22,
    margin: 10,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  blogContent: {
    fontSize: 18,
    margin: 10,
    marginBottom: 5,
  }

} )

export default ShowScreen

