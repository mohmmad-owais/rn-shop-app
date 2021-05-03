import React, { useEffect, useState } from 'react';
import { FlatList,View, Text, StyleSheet, Alert} from 'react-native';
import {useSelector} from 'react-redux'
import ProductItems from '../../components/shop/ProductItems';

import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import {loggingOut} from '../../API/firebaseMethods';






function ProductsOverviewScreen(props) {
    let currentUserUID = firebase.auth().currentUser.uid;
  const [firstName, setFirstName] = useState('');
    
    useEffect(() => {
        async function getUserInfo(){
          try {
            let doc = await firebase
              .firestore()
              .collection('users')
              .doc(currentUserUID)
              .get();
    
            if (!doc.exists){
              Alert.alert('No user data found!')
            } else {
              let dataObj = doc.data();
              setFirstName(dataObj.firstName)
            }
          } catch (err){
          Alert.alert('There is an error.', err.message)
          }
        }
        getUserInfo();
      },[])

    const handlePress = () => {
        loggingOut();
        props.navigation.replace('Home');
      };

   const products = useSelector(state => state.products.availableProducts)
    return (

        <View style={styles.container}>
      <Text style={styles.titleText}>Dashboard</Text>
      <Text style={styles.text}>Hi {firstName}</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    
    
        <FlatList 
         data={products}
         renderItem={
            itemData => <ProductItems
             title={itemData.item.title}
             price={itemData.item.price} 
             image={itemData.item.imageUrl} 
             onViewDetail={()=>{
                 props.navigation.navigate('ProductsDetailScreen',{productId: itemData.item.id})
             }}
             onAddToCart={()=> {}}

             />
             
            }
        
        />
        </View>

    )
}
const styles = StyleSheet.create({
    button: {
      width: 100,
      alignSelf:'center',
      marginTop:10
     
    },
    buttonText: {
      fontSize:15,
      color: 'black',
      textAlign:'center',
      fontWeight: 'bold',
    },
    container: {
      height: '100%',
      width: '100%',
    },
    text: {
      textAlign: 'center',
      fontSize: 20,
      marginTop: '2%',
      fontWeight: 'bold',
      color: 'black',
    },
    titleText: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      color: '#2E6194',
    },
  });
export default ProductsOverviewScreen
