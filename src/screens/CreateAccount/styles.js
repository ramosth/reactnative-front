/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import colors from '../../assets/colors/colors';

export const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: colors.backgroundColor,
 },
 headerWrapper: {
  paddingTop: 30,
  alignItems: 'center',
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
  marginTop: 64,
  marginHorizontal: 22,
  borderRadius: 20,
 },
 buttonForgot: {
  marginTop: -20,
  marginLeft: 240,
 },
 buttonSigIn: {
  marginTop: 40,
    marginHorizontal: 22,
 },
 buttonStyles: {
  backgroundColor: colors.white,
  shadowColor: '#AAACAE',
  shadowOffset: {
   width: 0,
   height: 20,
  },
  shadowOpacity: 0.05,
  shadowRadius: 50,
  elevation: 8,
 },
 buttonForgotStyles: {
  backgroundColor: 'transparent',
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
 tituloStyles: {
  color: colors.textDark,
 },
 tituloForgotStyles: {
  color: colors.textDark,
  fontFamily: 'Georama-Regular',
  fontSize: 12,
  borderBottomColor: colors.textDark,
  borderBottomWidth: 1,
 },
 buttonLogin: {
  marginTop: 20,
  marginHorizontal: 20,
 },
 buttonLoginStyles: {
  backgroundColor: 'transparent',
 },
 tituloLoginStyles: {
  color: colors.primaryColor,
  fontFamily: 'Sk-Modernist-Regular',
  fontSize: 16,
 },
});
