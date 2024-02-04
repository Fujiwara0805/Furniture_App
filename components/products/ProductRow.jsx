import { FlatList, View, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import styles from './ProductRow.style';
import { COLORS, SIZES } from '../../constants';
import ProductCardView from './ProductCardView';
import useFetch from '../../hook/useFetch';

const ProductRow = () => {
  const products = [1, 2, 3, 4];
  // const {data, isLoading, error} = useFetch();

  return (
    <View style={styles.container}>
      {/* {isLoading ? <ActivityIndicator size={SIZES.xLarge} color={COLORS.primary} /> 
      : error ? <Text>Error</Text> :
    } */}
    <FlatList
      data={products}
      keyExtractor={(item)=> item._id }
      renderItem={(item) => {return(<ProductCardView item={item}/>)}}
      horizontal
      contentContainerStyle={{columnGap: SIZES.medium}}
    />
    </View>
  )
}

export default ProductRow