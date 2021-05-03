import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";

import Colors from "../constants/Colors";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductsDetailScreen from "../screens/shop/ProductsDetailScreen";

import LoadingScreen from '../screens/others/Loading';
import Home from '../screens/others/WelcomeScreen';
import SignUp from '../screens/others/SignUp';
import SignIn from '../screens/others/SignIn';


const ProductsNavigator = createStackNavigator();

function RootNav() {
  
  


  return (
    <NavigationContainer>
      <ProductsNavigator.Navigator

        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS == "android" ? Colors.primary : "",
          },
          headerTintColor: Platform.OS == "android" ? "white" : Colors.primary,
        }}
      >
        <ProductsNavigator.Screen
          name="Loading"
          component={LoadingScreen}
          options={{ headerShown: false }}
          
        />
        <ProductsNavigator.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}

        />
        <ProductsNavigator.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}

        />
        <ProductsNavigator.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}

        />

        
        <ProductsNavigator.Screen
          name="ProductsOverviewScreen"
          component={ProductsOverviewScreen}
          options={{ title: "All Products" }}
        />
        <ProductsNavigator.Screen
          name="ProductsDetailScreen"
          component={ProductsDetailScreen}
          options={{ title: "Product Details" }}
        />
      </ProductsNavigator.Navigator>
    </NavigationContainer>
  );
}



export default RootNav;

