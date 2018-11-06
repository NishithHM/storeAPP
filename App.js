/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import{createDrawerNavigator} from 'react-navigation';
import Login from './App/components/login/index_login';
import Category from './App/components/category/index_category';
import Example from './App/components/assets/ex'
export default class App extends Component{
    render(){
        return(
          <DrawerStack />
        )
    }
}
const DrawerStack = createDrawerNavigator({
 //Home: Home,
 Login: Login,
 Category : Category,
 List : Example,
 
 })