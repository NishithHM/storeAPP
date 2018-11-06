import React from 'react'
import {StyleSheet,View,Image} from 'react-native'
import { Appbar, Searchbar } from 'react-native-paper';


const UpperBar =(props)=>{
   
   
        return(
            <View>
            <Appbar.Header>
            <Appbar.Action icon="more-vert" onPress={props.moreBar} />
        <Appbar.BackAction
          onPress={props.backBar}
        />
        <Appbar.Content
          title={props.title}
          subtitle="Shop with us here"
        />
        <Appbar.Action icon={require('../assets/06.jpg')}/>
      </Appbar.Header>
      <Searchbar
        placeholder="Search"
      />
      </View>
        )
    }
export default UpperBar

const styles = StyleSheet.create({
    bottom: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },
  });