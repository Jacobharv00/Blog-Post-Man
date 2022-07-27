import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const BlogPostForm = ( { onSubmit, initialValues } ) => {
  const [ title, setTitle ] = useState( initialValues.title )
  const [ content, setContent ] = useState( initialValues.content )

  return (
    <View>
      <Text style={ styles.label }>Enter Title:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={ false }
        onChangeText={ text => setTitle( text ) }
        placeholder='Enter a title'
        style={ styles.input }
        value={ title }
      />
      <Text style={ styles.label }>Enter Content:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={ false }
        onChangeText={ text => setContent( text ) }
        placeholder='Enter Content'
        style={ styles.input }
        value={ content }
      />
      <Button
        title='Save Blog Post'
        onPress={ () => onSubmit( title, content ) }
      />
    </View>
  )
}

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
}

const styles = StyleSheet.create( {
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    margin: 12,
    marginLeft: 15,
    padding: 5,
    width: '80%'
  },
  label: {
    fontSize: 20,
    margin: 10,
    marginLeft: 15,
    marginBottom: 2
  }
} )

export default BlogPostForm