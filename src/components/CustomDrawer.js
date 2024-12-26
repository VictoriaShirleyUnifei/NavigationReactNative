import React from 'react';
import {View, Text, Image} from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawer(props) {
  return (
   <DrawerContentScrollView {...props}>
    <View style={{
        width: '100%',
        height: 85,
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <Image 
            source={require('../assets/favicon.png')}
            style={{width: 65, height: 65}}
        />
        <Text style={{color: '#000', fontSize: 20, marginTop: 5, marginBottom: 35}}>Bem-vindo!</Text>
    </View>

    <DrawerItemList {...props}/>

   </DrawerContentScrollView>
  )
}
