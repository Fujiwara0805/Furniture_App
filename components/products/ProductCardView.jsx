import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './ProductCardView.style'
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const ProductCardView = () => {
  const navigation = useNavigation();
  const handleClick = () => {navigation.navigate("ProductDetails")}

  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image 
            source={{uri: 'https://source.unsplash.com/1024x768/?house'}}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>コアラのマーチ</Text>
          <Text style={styles.supplier} numberOfLines={1}>Lotte</Text>
          <Text style={styles.price} numberOfLines={1}>200円</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.addBtn}>
        <Ionicons name='add-circle' size={32} color={COLORS.primary}/>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default ProductCardView
