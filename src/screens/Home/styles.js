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
 profileImage: {
  resizeMode: 'contain',
  marginBottom: -15,
 },
 headerRight: {
  backgroundColor: colors.white,
  paddingVertical: 5,
  borderRadius: 15,
  borderColor: colors.white,
  borderWidth: 1,
 },
 titlesWrapper: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 30,
  paddingHorizontal: 20,
 },
 titlesTitle: {
  fontFamily: 'Georama-Bold',
  fontSize: 24,
  color: colors.textDark,
 },
 perfil: {
  justifyContent: 'center',
 },
 perfilText: {
  fontFamily: 'Georama-Regular',
  fontSize: 18,
  color: colors.textDark,
 },
 skillsWrapper: {
  marginTop: 10,
  height: 600,
  paddingVertical: 10,
  backgroundColor: colors.white,
 },
 skillItemWrapper: {
  marginHorizontal: 20,
  marginBottom: 5,
  elevation: 2,
 },
 skillsItemWrapper: {
  flexDirection: 'row',
  paddingVertical: 5,
  paddingHorizontal: 5,
 },
 skillItemImage: {
  width: 40,
  height: 40,
  alignSelf: 'center',
  resizeMode: 'contain',
  marginHorizontal: 10,
 },
 skillItemTitle: {
  fontFamily: 'Georama-Regular',
  fontSize: 16,
 },
 skillItemDescription: {
  fontFamily: 'Georama-Light',
  fontSize: 15,
  maxWidth: 200,
 },
 profileImage1: {
  resizeMode: 'contain',
 },
 skillItemImageIcons: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  position: 'absolute',
  right: 10,
  alignSelf: 'center',
 },
 skillItemImageIcon: {
  marginHorizontal: 5,
  width: 40,
  height: 40,
 },
 skillItemIconPlus: {
  backgroundColor: '#ffddc1',
  borderRadius: 15,
  width: 40,
  height: 40,
  alignItems: 'center',
 },
 skillItemIconPlusText: {
  fontWeight: 'bold',
  fontSize: 24,
  color: colors.textDark,
 },
});
