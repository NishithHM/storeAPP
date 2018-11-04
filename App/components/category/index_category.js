import React, {Component} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import { Provider as PaperProvider, List} from 'react-native-paper';
import CategoryDisplay from './categoryDisplay'

import  Styles from './styles_category';
class Category extends Component{
  
    static navigationOptions={
        header:null
    } 

    navigateToList(groupName){
        this.props.navigation.navigate('List',{name: groupName})
        
    }
    
     

    render(){
        const {mainView,mainCategoryHolder, categoryListHolder,heading,categoryText} =Styles
        let categoryListElements=['Grocery','Beverages','Personal Care','Breakfast','Biscuits Snacks & Chocolates','Noodles & Packed Food'
         ,'Baby and Kids', 'Pet Care','Vegetables & Fruits']

         let subCategoryArray=[['Pulses', 'Rice', 'Sugar','Atta','Dry Fruits','Oils','Ghee','Salt','Spices'],
         ['Soft Drinks','Juices','Tea/Coffee','Healthy Drinks','Water/Soda'],
         ['Bath and Body ','Hair Care','Skin Care','Oral Care','Perfumes','Face Care','Feminine Hygiene','Shaving needs','Health','Cosmetics'],
         ['Bread','Eggs','Paneer','Curd','Butter/Cheese','Breakfast Mix', 'Jams and Honey','Batter'],
         ['Biscuits & Cookies','Namkeen/Snacks','Chips','Chocolates', 'Sweets'],
         ['Noodeles','Sauces and Ketchups','Pasta','Soups','Instant Mix','Pickles','Desert'],
         ['Baby Food','Diapers & Wipes','Baby Skin and Hair Care'],
         ['Dog Food','Fish Foods'],
         ['Potato','Tomato','Onion','Fruits']]

        return(
            
           <ScrollView>
           
           <View style={mainView}>
            <View style={mainCategoryHolder}>
            <View style={heading}>
            <Text style={categoryText}>Check out new Categories</Text>
            </View>
            <View style={categoryListHolder}>
            <CategoryDisplay categoryArray={categoryListElements} subCategoryArray={subCategoryArray} onPress={()=>this.navigateToList()}/>
                
            </View>
            
            </View>
            </View>
            </ScrollView>
        )
    }

}


export default Category