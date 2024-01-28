import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from '../home/Welcome.style'
import { COLORS, SIZES } from '../../constants'
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const navigation =useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>Tokyo</Text>
        <Text style={styles.welcomeTxt(COLORS.red )}>Osaka</Text>
        {/* <Text style={styles.welcomeTxt(COLORS.tertiary)}>Fukuoka</Text> */}
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name='search' size={16} style={styles.searchIcon}/>
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput} 
            value=''
            placeholder='検索して下さい'
            onPressIn={() => {navigation.navigate('Search')}}
            onChangeText={() => {}}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Ionicons name='camera-outline' size={SIZES.large} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Welcome