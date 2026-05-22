import { useFonts } from 'expo-font'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
const app = () => {
  const [fontsLoaded] = useFonts({
    'PlayfairDisplay-Bold': require('../../assets/fonts/PlayfairDisplay-Bold.ttf'),
  })
  if (!fontsLoaded) return null
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Le Petit Souk</Text>
      <Image 
        source={require("../images/main.jpg")} 
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.box}>
        <Text style={styles.boxTitle}>Bienvenue au Petit Souk</Text>
        <Text style={styles.boxSubtitle}>Découvrez les saveurs authentiques de Beni Mellal</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Voir le Menu</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text style={styles.rowLeft}>Inspiration du Moment</Text>
        <Text style={styles.rowRight}>Voir tout</Text>
      </View>
      <View style={styles.secondContainer}>
        <Image 
          source={require("../images/main2.jpg")}  
          style={styles.secondImage}
          resizeMode="cover"
        />
        <View style={styles.badge}>
          <Text style={styles.badgeSmall}>Chef's Special</Text>
          <Text style={styles.badgeBig}>Le Tagine Royale</Text>
        </View>
      </View>

    </View>  
  )
}
export default app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontFamily: 'PlayfairDisplay-Bold',  
    fontSize: 16,
    color: '#5D4DCA',
    textAlign: 'center',
    paddingTop: 50,
    paddingBottom: 10,
  },
  image: {
    width: '100%',
    height: 400,
  },
  box: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: -120,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    zIndex: 1,
  },
  boxTitle: {
    fontFamily: 'PlayfairDisplay-Bold', 
    fontSize: 18,
    color: '#5D4DCA',
    textAlign: 'center',
    marginBottom: 8,
  },
  boxSubtitle: {
    fontFamily: 'PlayfairDisplay-Bold',
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#5D4DCA',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  rowLeft: {
    color: '#5D4DCA',
    fontSize: 14,
  },
  rowRight: {
    color: '#5D4DCA',
    fontSize: 14,
  },
  secondContainer: {
    marginHorizontal: 0,
    height: 250,
    overflow: 'hidden',
  },
  secondImage: {
    width: '100%',
    height: '100%',
  },
  badge: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: '#2D6A4F',
    borderRadius: 8,
    padding: 8,
  },
  badgeSmall: {
    color: '#fff',
    fontSize: 11,
  },
  badgeBig: {
    fontFamily: 'PlayfairDisplay-Bold',
    color: '#fff',
    fontSize: 14,
  },
})