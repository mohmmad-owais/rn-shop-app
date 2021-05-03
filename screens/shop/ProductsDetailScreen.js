import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";
function ProductsDetailScreen(props) {
  const { productId } = props.route.params;

  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );

  return (
    <ScrollView>
      <Image style={styles.img} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.actions}>
        <Button color={Colors.primary} title="Add to Cart" onPress={() => {}} />
      </View>
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.des}>{selectedProduct.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 300,
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
  },
  des: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal:20
  },
  actions:{
      marginVertical:10,
      alignItems:'center'
  }
});

export default ProductsDetailScreen;
