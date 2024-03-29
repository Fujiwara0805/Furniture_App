import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite
  },
  upperRow :{
    marginHorizontal: SIZES.medium,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: SIZES.xxLarge,
    width: SIZES.width -44,
    zIndex: 1
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'cover'
  },
  details: {
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    width: SIZES.width,
    borderTopLeftRadius: SIZES.medium,
    borderTopRadius: SIZES.medium,
  },
  titleRow: {
    marginHorizontal: SIZES.medium,
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',alignItems: 'center',
    width: SIZES.width -40,
    top: SIZES.medium
  },
  title: {
    fontFamily: 'bold',
    fontSize: SIZES.large
  },
  ratingRow: {
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',alignItems: 'center',
    width: SIZES.width -10,
    top: 5
  },
  rating: {
    top: SIZES.large,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: SIZES.large
  },
  ratingText: {
    color: COLORS.gray,
    fontFamily: 'medium'
  },
  price: {
    fontFamily: 'bold',
    fontSize: SIZES.large
  },
  priceWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large
  },
  descriptionWrapper: {
    marginTop: SIZES.large*2,
    marginHorizontal: SIZES.large
  },
  description: {
    fontFamily: 'bold',
    fontSize: SIZES.large -2,
  },
  descriptionText: {
    fontFamily:'regular',
    fontSize: SIZES.small,
    textAlign: 'justify',
    marginBottom: SIZES.small
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:COLORS.secondary,
    marginHorizontal: SIZES.medium,
    padding: SIZES.xSmall,
    borderRadius: SIZES.large
  },
  cartRow: {
    marginTop: SIZES.small,
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',alignItems: 'center',
    width: SIZES.width,
  },
  cartBtn: {
    width: SIZES.width*0.7,
    backgroundColor: COLORS.black,
    padding: SIZES.small/2,
    marginLeft: 16,
    borderRadius: SIZES.large
  },
  cartTitle: {
    marginLeft: SIZES.medium,
    fontSize: SIZES.medium,
    fontFamily: 'bold',
    color: COLORS.lightWhite,
  },
  addCart: {
    width:  32,
    height: 24,
    borderRadius: 50,
    margin: SIZES.small,
    backgroundColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default styles