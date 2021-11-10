import { StyleSheet, View } from 'react-native'

import React from 'react'
import theme from '../../contants/theme';

interface HeaderProps{
    
}

const Header: React.FC<HeaderProps> = ({ children }) => (
  <View style={styles.header}>
      { children }
  </View>
)

const styles = StyleSheet.create({
    header: {
      backgroundColor: theme.header.background,
      color: theme.header.color,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-start',
      height: 96,
      paddingVertical: 16,
      width: '100%'
    },
  });

export default Header