import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, SafeAreaView, View, Platform, Image } from 'react-native';
import { useFonts } from 'expo-font';

export default function HomeScreen() {
    useFonts({ 'Bolota': require('./../assets/Bolota_Bold.ttf') });
  return (
    <SafeAreaView  style={{ paddingTop: Platform.OS === "android" ? 40 : 0, flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <StatusBar style="auto" />
        <View>
        <View style={{width:'100%', backgroundColor:"#9BC638", flexDirection: "row", height:130}}>
        <Image style={{ width: 50, height: 50, margin:20}} source={require('./../assets/Covabra_Logo.png')} />
        <Text style={{ marginTop:30, fontSize: 18, color:"#FFF", width:90, fontFamily: 'Bolota'}} >COVABRA</Text>
        </View>

        <View style={{ height:100, width:'100%', backgroundColor:"#EAE7E7", borderTopLeftRadius: 60,
  borderTopRightRadius: 60, marginTop:-50}}>
            <Text>ssssssssss</Text>
        </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

