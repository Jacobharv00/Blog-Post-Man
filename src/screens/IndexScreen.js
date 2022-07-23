import React, { useContext } from 'react'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { Context } from '../context/BlogContext'

const IndexScreen = ( { navigation } ) => {
  const { state, addBlogPost, deleteBlogPost } = useContext( Context )

  return (
    <View>
      <Text style={ styles.screenTitle }>Index Screen</Text>
      <Button title='Add A Post' onPress={ addBlogPost } />
      <FlatList
        data={ state }
        keyExtractor={ ( blogPost ) => blogPost.id }
        renderItem={ ( { item } ) => {
          return (
            <TouchableOpacity onPress={ () => navigation.navigate( 'Show' ) }>
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

const styles = StyleSheet.create( {
  screenTitle: {
    padding: 10,
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center'
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
    color: 'red'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray'
  }
} )

export default IndexScreen