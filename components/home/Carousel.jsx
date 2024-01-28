import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from '../../constants';

const Carousel = () => {
  const slides = [
    "https://source.unsplash.com/1024x768/?house",
    "https://source.unsplash.com/1024x768/?space",
    "https://source.unsplash.com/1024x768/?japan",
  ]
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{borderRadius: 16, width: '92%', marginTop: 16}}
        autoPlay
        circleLoop
      />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: 'center'
  }
})