import React, {Component} from 'react';
import {View, Text} from 'react-native';
import UpperBar from '../common/upperBar'
class Example extends Component{
    _goBack = () => {
        this.props.navigation.goBack();
    };

  _onSearch = () => console.log('Searching');

  _onMore = () => {
      this.props.navigation.openDrawer();
  }
    render(){
        const { navigation } = this.props;
        const name = navigation.getParam('name');
        return(
            <View>
            <UpperBar moreBar={this._onMore} backBar={this._goBack} searchBar={this._onSearch} title={"Select Categories"}
           />
                <Text>
                    {name} Yet to be developed
                </Text>
            </View>
        )
    }
}

export default Example