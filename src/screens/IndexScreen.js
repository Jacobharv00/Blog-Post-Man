import React, { useContext, useEffect } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { Context } from '../context/BlogContext'

const IndexScreen = ( { navigation } ) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext( Context )

  useEffect( () => {
    getBlogPosts()

    // Fetch again when screen is revisted
    const listener = navigation.addListener( 'didFocus', () => {
      getBlogPosts()
    } )
    // cleanup function (can prevent memory leak)
    return () => {
      listener.remove()
    }
  }, [] )

  return (
    <View>
      <Text style={ styles.screenTitle }>Blogs</Text>
      <FlatList
        data={ state }
        keyExtractor={ ( blogPost ) => blogPost.id }
        renderItem={ ( { item } ) => {
          return (
            <TouchableOpacity onPress={ () => navigation.navigate( 'Show', { id: item.id } ) }>
              <View style={ styles.row }>
                <Text style={ styles.blogTitle }>{ item.title } - { item.id }</Text>
                <TouchableOpacity onPress={ () => deleteBlogPost( item.id ) }>
                  <Feather style={ styles.icon } name='trash' />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        } }
      />
    </View>
  )
}

IndexScreen.navigationOptions = ( { navigation } ) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={ () => navigation.navigate( 'Create' ) } style={ styles.plusIcon }>
        <Feather name="plus" size={ 30 } />
      </TouchableOpacity>
    ),
  }
}

const styles = StyleSheet.create( {
  screenTitle: {
    padding: 10,
    marginBottom: 10,
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  blogTitle: {
    padding: 5,
    fontSize: 20,
    textAlign: 'center'
  },
  icon: {
    padding: 5,
    fontSize: 24,
    textAlign: 'center',
    color: '#265664'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  plusIcon: {
    marginRight: 5
  }
} )

export default IndexScreen

