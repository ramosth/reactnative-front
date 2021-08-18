/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import colors from '../../assets/colors/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  headerWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  headerLogo: {
    marginLeft: 130,
  },
  headerLink: {
    // alignSelf: 'flex-start',
  },
  headerTextLink: {
    color: colors.primaryColor,
    fontFamily: 'Georama-Regular',
    fontSize: 14,
  },
  titlesWrapper: {
    marginTop: 55,
    alignItems: 'center',
  },
  titlesSubtitle: {
    fontFamily: 'Georama-Bold',
    fontSize: 24,
    color: colors.textDark,
  },
  titlesTitle: {
    fontFamily: 'Georama-Regular',
    fontSize: 14,
    color: colors.textDark,
    marginTop: 15,
    maxWidth: 280,
  },
  inputsWrapper: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  inputItemWrapper: {
    marginBottom: 20,
  },
  inputItemTitle: {
    fontFamily: 'Georama-Regular',
    fontSize: 14,
    marginBottom: 5,
    marginHorizontal: 5,
  },
  buttonCreate: {
    marginTop: 20,
    marginHorizontal: 22,
    borderRadius: 20,
  },
  buttonCreateStyles: {
    backgroundColor: 'transparent',
    shadowColor: colors.textDark,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.05,
    shadowRadius: 50,
  },
});
