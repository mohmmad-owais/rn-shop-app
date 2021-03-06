import React from "react";
import { View, Text, Image, StyleSheet, Button,TouchableNativeFeedback } from "react-native";
import Colors from "../../constants/Colors";

function ProductItems(props) {
  return (
      <TouchableNativeFeedback useForeground onPress={props.onViewDetail}>
           <View style={styles.product}>
        <View style={styles.imgContainer}>
      <Image style={styles.img} source={{ uri: props.image }} />

        </View>
      <View style={styles.details}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>{props.price.toFixed(2)}</Text>
      </View>
      <View style={styles.actions}>
        <Button color={Colors.primary} title="View Details" onPress={props.onViewDetail} />
        <Button color={Colors.primary} title="Add To Cart" onPress={props.onAddToCart} />
      </View>
    </View>
      </TouchableNativeFeedback>

   
  );
}

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
  },
  imgContainer:{
    width:'100%',
    height:'60%',
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    overflow:'hidden'
  },  
  img: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal:20
  },
  details:{
      alignItems:'center',
      height:'15%',
      padding:10
  },
});

export default ProductItems;
