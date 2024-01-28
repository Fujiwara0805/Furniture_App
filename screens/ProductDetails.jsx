import {  Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './ProductDetails.style'
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import { COLORS } from '../constants'

const ProductDetails = ({navigation}) => {
  const [count, setCount] =useState(1)

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
        source={{uri: 'https://source.unsplash.com/1024x768/?house'}}
        style={styles.image}
      />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$100</Text>
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
          <Text style={styles.descriptionText}>
          On a bright spring day, in a small school on the outskirts of Tokyo, a special class was about to begin. That day, the school welcomed a new student, Yuuki, who had just transferred. Yuuki was shy and struggled to adapt to the new environment.
          </Text>
      </View>
    </View>
  )
}

export default ProductDetails