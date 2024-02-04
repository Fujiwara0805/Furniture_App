import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import styles from './ProductCardView.style'
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const ProductCardView = ({item}) => {
  const navigation = useNavigation();
  const navigateDetail = () => {navigation.navigate("ProductDetails", {item})}

  useEffect(() => {
  }, [])

  return (
    <TouchableOpacity onPress={navigateDetail}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image 
            source={{uri: 'https://source.unsplash.com/1024x768/?house'}}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
          <Text style={styles.supplier} numberOfLines={1}>{item.supplier}</Text>
          <Text style={styles.price} numberOfLines={1}>{item.price}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.addBtn}>
        <Ionicons name='add-circle' size={32} color={COLORS.primary}/>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default ProductCardView
