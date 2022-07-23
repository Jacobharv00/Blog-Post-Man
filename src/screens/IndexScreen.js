import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'

import { Context } from '../context/BlogContext'

const IndexScreen = () => {
  const { data, addBlogPost } = useContext( Context )

  return (
    <View>
      <Text style={ styles.screenTitle }>Index Screen</Text>
      <Button title='Add A Post' onPress={ addBlogPost } />
      <FlatList
        data={ data }
        keyExtractor={ ( blogPost ) => blogPost.title }
        renderItem={ ( { item } ) => (
          <Text style={ styles.blogTitle }>{ item.title }</Text>
        ) }
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
  }
} )

export default IndexScreen