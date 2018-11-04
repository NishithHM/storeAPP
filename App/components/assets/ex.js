import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Provider as PaperProvider, List} from 'react-native-paper';
class Example extends Component{
    render(){
        const { navigation } = this.props;
        const name = navigation.getParam('name');
        return(
            <View>
                <Text>
                    {name} Yet to be developed
                </Text>
            </View>
        )
    }
}

export default Example