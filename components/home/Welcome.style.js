import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 16
  },
  welcomeTxt: (color, top) => (
    {
      fontFamily: 'bold',
      fontSize: SIZES.xLarge -5,
      marginTop: top,
      color: color,
      marginHorizontal: 16
    }
  ),
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondary,
    height: 32,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium
  },
  searchIcon: {
    marginHorizontal: 16,
    color: COLORS.gray
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small
  },
  searchInput: {
    fontFamily: 'regular',
    width: '100%',
    height:'100%',
    paddingHorizontal: SIZES.small
  },
  searchBtn: {
    width: 50,
    height:'100%',
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  }
})

export default styles