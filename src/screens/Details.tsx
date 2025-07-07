import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//navigation
import {NativeStackScreenProps } from "@react-navigation/native-stack";
import { RoomStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

type DetailsProps = NativeStackScreenProps<RoomStackParamList, 'Details'>
const Details = ({route}: DetailsProps) => {

    const{productId} = route.params

    const navigation = useNavigation<NativeStackNavigationProp<RoomStackParamList>>()

  return (
    <View style = {styles.container}>
      <Text>Details:{productId}</Text>
      <Button
      title='Go to Home'
    //   onPress={()=> navigation.navigate('Home')}
    onPress={()=> navigation.popToTop()} />
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

})