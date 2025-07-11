import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RoomStackParamList } from "../App";

type HomeProps = NativeStackScreenProps<RoomStackParamList, 'Home'>

const Home = ({navigation}:HomeProps) => {
  return (
    <View style = {styles.container}>
      <Text>Home Screen</Text>
      <Button
      title='Go to details'
      onPress={() => navigation.push('Details', {productId:"86"})}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

})