import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: 182,
    height: 240,
    marginEnd: 22,
    marginHorizontal: SIZES.medium,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary
  },
  imageContainer: {
    flex: 1,
    width: 170,
    marginLeft: SIZES.medium/2,
    marginTop: SIZES.medium/2,
    borderRadius: SIZES.small,
    overflow: 'hidden'
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'cover'
  },
  details: {
    padding: SIZES.small
  },
  title: {
    fontFamily: 'bold',
    fontSize: SIZES.large,
  },
  supplier: {
    marginTop: 2,
    fontFamily: 'regular',
    fontSize: SIZES.small,
    color: COLORS.gray
  },
  price: {
    marginTop: 2,
    fontFamily: 'bold',
    fontSize: SIZES.medium,
  },
  addBtn: {
    position: 'absolute',
    bottom: SIZES.xSmall,
    right: SIZES.xSmall
  }
})

export default styles