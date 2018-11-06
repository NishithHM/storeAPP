import React, {Component} from 'react';
import {View, TextInput,Text, Button, Alert, Image} from 'react-native';
import styles from '../login/styles_login';
import Swiper from 'react-native-swiper';
import UpperBar from '../common/upperBar';

class Login extends Component{ 
    static navigationOptions={
        header:null
    } 
    state={
        userName:'',
        password:'',
    }

    checkLogin(){
        const{userName,password}=this.state
        if(userName=='admin'&& password=='admin')
        this.props.navigation.navigate('category')
        else
        Alert.alert('Error','Username/Password Mismatch',[{
            text:'Okay'
        }])
    
    }
    _goBack = () => {
        this.props.navigation.goBack();
    };

  _onSearch = () => console.log('Searching');

  _onMore = () => {
      this.props.navigation.openDrawer();
  };
    render(){
        const {heading, input, parent, imageBox, loginBox, button}=styles
        const imageSources=[require('../assets/01.jpg'),require('../assets/02.jpg'),
        require('../assets/03.jpg'), require('../assets/04.jpg')]
        let imageViewer=[]
        for(let i=0;i<imageSources.length;i++){
            imageViewer.push(<View key={i}>
                <Image source={imageSources[i]}/>
            </View>)
        }
        return(
            <View style={parent}>
            <UpperBar moreBar={this._onMore} backBar={this._goBack} searchBar={this._onSearch} title={"Select Categories"}
           />
            <View style={imageBox}>
            <Swiper showsButtons={true} autoplay={true}>
               {imageViewer}
            </Swiper>
            </View>
            <View style={loginBox}>
                <Text style={heading}>Login to Stores</Text>
                <TextInput style={input} 
                onChangeText={text =>this.setState({userName:text})}></TextInput>
                <TextInput style={input} secureTextEntry={true}
                onChangeText={text => this.setState({password:text})}></TextInput>
                <View style={button}>
                <Button title="Login" onPress={()=>this.checkLogin()}></Button>
                </View>
            </View>                 
            </View>
        )
    }
}

export default Login