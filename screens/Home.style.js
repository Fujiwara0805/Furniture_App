import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'bold',
    fontSize: 40
  },
  appBarWrapper: {
    marginHorizontal: 16,
    marginTop: SIZES.small,
  },
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  location: {
    fontFamily: 'semibold',
    fontSize: SIZES.medium,
    color: COLORS.gray
  },
  cartCount: {
    position: 'absolute',
    bottom: 16,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: 'blue',
    justifyContent: 'center',
    zIndex: 999
  },
  cartNumber: {
    fontFamily: 'regular',
    fontWeight: '600',
    fontSize: 8,
    color: COLORS.lightWhite,
  },
})

export default styles