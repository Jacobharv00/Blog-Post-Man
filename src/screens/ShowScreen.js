import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Context } from '../context/BlogContext'

const ShowScreen = ( { navigation } ) => {
  const { state } = useContext( Context )
  const blogPostId = navigation.getParam( 'id' )

  const blogPost = state.find( ( blogPost ) => blogPost.id === blogPostId )

  return (
    <View>
      <Text>Show Screen</Text>
      <Text>{ blogPost.title }</Text>
    </View>
  )
}

const styles = StyleSheet.create( {} )

export default ShowScreen