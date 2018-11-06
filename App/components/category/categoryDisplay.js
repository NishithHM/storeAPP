import React, {Component} from 'react';
import {View, Text,Image} from 'react-native';
import { Provider as PaperProvider, List,} from 'react-native-paper';
const CategoryDisplay=(props) =>{

    let categoryList=[]    
         for(let i=0; i<props.categoryArray.length;i++)
         {
        let subCategoryList=[]
        for(let j=0; j<props.subCategoryArray[i].length;j++ )
        {
        subCategoryList.push( <List.Item title={props.subCategoryArray[i][j]} 
        left={()=> <Image source={require('../assets/05.jpg')} />} key={i+j} onPress={props.onPress}/>)
        }
                
         categoryList.push(
                <PaperProvider>
               <List.Accordion key={i}
                 title={props.categoryArray[i]} 
                 left={()=> <Image source={require('../assets/05.jpg')}/>} >
                 {subCategoryList}
                </List.Accordion>
            </PaperProvider>
            )
         }
        return(
            <View>
            {categoryList}
            </View>
        )
    }
export default CategoryDisplay