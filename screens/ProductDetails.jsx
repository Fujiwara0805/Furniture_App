import {  Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import styles from './ProductDetails.style'
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons'
import { COLORS } from '../constants'

const ProductDetails = ({navigation}) => {
  const [count, setCount] =useState(1);
  const route = useRoute();
  const {item} = route.params;

  const navigateBack = () => {
    navigation.goBack()
  }
  const countIncrement =() => {
    if(count > 4){
      return
    }
   setCount(prevCount => prevCount + 1)
  }
  const countDecrement =() => {
    if(count < 1) {
      return
    }
    setCount(prevCount => prevCount - 1)
  }
  const productBuy = () => {}
  const productAdd = () => {}

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={navigateBack}>
          <Ionicons name='chevron-back-circle' size={32}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name='heart' size={32} color={COLORS.primary}/>
        </TouchableOpacity>
      </View>
      <Image
        source={{uri: item.imageUrl}}
        style={styles.image}
      />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
      </View>
      <View style={styles.ratingRow}>
        <View style={styles.rating}>
          {[1, 2, 3, 4, 5].map((index) => {
            return (
            <Ionicons
              key={index}
              name='star'
              size={24}
              color={'gold'}
              style={styles.iconStar}
            />)
          })}
          <Text style={styles.ratingText}>{count}</Text>
        </View>
        <View style={styles.rating}>
          <TouchableOpacity onPress={() => {countIncrement()}}>
            <SimpleLineIcons name='plus' size={16} style={{paddingRight: 8}}/>
          </TouchableOpacity>
          <Text style={styles.ratingText}>{count}</Text>
          <TouchableOpacity onPress={() => {countDecrement()}}>
            <SimpleLineIcons name='minus' size={16} style={{paddingLeft: 8}}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Foo</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
      </View>
      <View style={{marginTop: 8}}>
        <View style={styles.location}>
          <View style={{flexDirection:'row'}}>
            <Ionicons name='location-outline' size={16}/>
            <Text>{item.product_location}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <MaterialCommunityIcons name='truck-delivery-outline' size={16}/>
            <Text>Free Delivery</Text>
          </View>
        </View>
      </View>
      <View style={styles.cartRow}>
        <TouchableOpacity style={styles.cartBtn} onPress={() => {productBuy}}>
          <Text style={styles.cartTitle}>BUY NOW</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addCart} onPress={() => {productAdd}}>
          <Fontisto name='shopping-bag' size={16} color={COLORS.lightWhite}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProductDetails