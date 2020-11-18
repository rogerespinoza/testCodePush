import React from 'react'
import { View, Text } from 'react-native'

export default () => {
  return (
    <View style={{justifyContent:'center',alignItems:'center', flex:1}}>
      <View style={{height:200, width:200, backgroundColor:'red', borderRadius:100, marginBottom: 20}} />
      <View style={{height:200, width:200, backgroundColor:'yellow', borderRadius:100, marginBottom: 20}} />
      <Text>Version 2</Text>
    </View>
  )
}
