import React, { useContext, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { Context } from '../context/BlogContext'

const EditScreen = ( { navigation } ) => {
  const { state } = useContext( Context )
  const blogPostId = navigation.getParam( 'id' )

  const blogPostToEdit = state.find( ( blogPost ) => blogPost.id === blogPostId )

  const [ title, setTitle ] = useState( blogPostToEdit.title )
  const [ content, setContent ] = useState( blogPostToEdit.content )

  return (
    <View>
      <Text style={ styles.label }>Edit Title:</Text>
      <TextInput
        value={ title }
        onChangeText={ newTitle => setTitle( newTitle ) }
        style={ styles.input }
        autoCapitalize="none"
      />
      <Text style={ styles.label }>Edit Content:</Text>
      <TextInput
        value={ content }
        onChangeText={ newContent => setContent( newContent ) }
        style={ styles.input }
        autoCapitalize="none"
      />
      <Button title="Save Changes" onPress={ () => {
        navigation.navigate( 'Show', { id: blogPostId } )
      } } />
    </View>
  )
}

const styles = StyleSheet.create( {
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    padding: 5,
    borderRadius: 5,
  },
  label: {
    fontSize: 24,
    margin: 10,
    marginBottom: 5,
  }
} )

export default EditScreen