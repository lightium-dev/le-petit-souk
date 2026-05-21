import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
const app = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Le petite souk</Text>
      < Image source={require("../images/main.jpg")} style={styles.image}
       />
    </View>
  )
}
export default app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    color: '#5D4DCA',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image: {
    width: "100%",
    height: 200,
    alignItems: "center",
    
  },
})
