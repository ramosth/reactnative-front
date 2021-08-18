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
  justifyContent: 'space-between',
  paddingHorizontal: 20,
  paddingTop: 30,
  alignItems: 'center',
 },
 titlesWrapper: {
  marginTop: 30,
  marginBottom: 20,
  paddingHorizontal: 20,
 },
 titlesTitle: {
  fontFamily: 'Georama-Bold',
  fontSize: 24,
  color: colors.textDark,
 },
 inputsWrapper: {
  paddingHorizontal: 20,
 },
 inputItemWrapper: {
  marginBottom: 20,
  marginHorizontal: 10,
 },
 inputItemTitle: {
  fontFamily: 'Georama-Regular',
  fontSize: 14,
  marginBottom: 5,
  marginHorizontal: 5,
 },
 buttonCreate: {
  marginTop: 50,
  borderRadius: 20,
  elevation: 8,
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
 selectItem: {
  borderRadius: 15,
  borderColor: colors.inputTextColor,
  borderWidth: 1,
  backgroundColor: colors.white,
 },
 selectItemText: {
  fontFamily: 'Georama-Regular',
  fontSize: 16,
  color: colors.textDark,
 },
});
