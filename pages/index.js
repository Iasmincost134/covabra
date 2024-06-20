import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons/';

export default function Inicial({ navigation }) {

    const NavigaHome = () => {
        navigation.navigate('homeScreen');
    }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={require('./../assets/Inicial.png')}
        style={styles.Fundo}>
        {/* <Text>dssssssss</Text> */}
        <View style={(styles.Subcontainer)}>
        <Ionicons name="arrow-forward-outline" size={32} color={"#4B4B4B"} onPress={(NavigaHome)} style={styles.icon}/>
        <Image source={require('./../assets/Covabra_Logo.png')}
                            style={{width:100,height:100, left:80, marginBottom: 15}}
                            />
        
          <Text style={styles.welcomeText}>
          COVABRA
          </Text>
          <Text style={styles.subtitleText}>
          Transforme sua ida ao supermercado em uma jornada de economia inteligente!</Text>
        </View>
        <Image source={require('./../assets/icone.png')} style={{width:300,height:350, left:80,resizeMode: 'cover', marginBottom:200}}/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Fundo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  Subcontainer: {
    margin: 60
 
   },
 
   welcomeText: {
     fontSize: 32,
     color: '#038C4C',
     fontWeight: 'bold',
     // fontFamily: 'Baloo',
     letterSpacing: 4,
     textAlign: 'center',
     marginBottom: 10
 
   },
   subtitleText: {
     fontSize: 14,
     color: '#000000',
     textAlign: 'center',
     // fontFamily: 'Poppins',
     // marginTop: 20,
   },

   icon: {
    position: 'absolute',
    right: -10,
    // right: 50,
}
});
