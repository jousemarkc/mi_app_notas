import React, {useState} from 'react';
import { View,Text, TextInput, TouchableOpacity, ScrollView, ImageBackground, Alert } from 'react-native';
import estilos from './Style';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootList } from './App';
import AsyncStorage from '@react-native-async-storage/async-storage';

type InicioScreen = StackNavigationProp<RootList, 'Inicio'>
type Props = {
  navigation: InicioScreen
}
export default function Inicio({navigation}:Props){
  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState('')
  if(!usuario && !clave){
    Alert.alert("Error en credenciales")
    return
  }
  const handleIniciar= async ()=>{
    if(!usuario && !clave){
    Alert.alert("Error en credenciales")
    return
  }
  try {
    const res = await fetch('/',{
      method:'POST',
      headers:{'Content-Type':'Aplication/json'},
      body:JSON.stringify({usuario, clave})
    })
    const data = await res.json()
    if(res.ok && data.success){
      await AsyncStorage.setItem('usuario',JSON.stringify(data))
      navigation.replace('Tareas')
    }else{
      Alert.alert("Acceso denagado")
    }
  } catch (error) {
    Alert.alert("No se pudo conectar al servidor")
  }
  }
  const handleRegistro=()=>{
    navigation.navigate('Registro')
  }
   return(
    <ScrollView>
      <ImageBackground source={require('../image/twelight.jpg')} imageStyle={estilos.imagenini} width={100} height={500}>
        <View>
          <Text style={estilos.textoini}>Usuario</Text>
          <TextInput 
          placeholder='Usuario' 
          style={estilos.inputini}
          value={usuario}
          onChangeText={setUsuario}
          />
          <Text style={estilos.textoini}>Password</Text>
          <TextInput 
          placeholder='Password' 
          style={estilos.inputini}
          secureTextEntry={true}
          value={clave}
          onChangeText={setClave}
          />
            <TouchableOpacity 
            style={estilos.textoini} 
            onPress={handleIniciar}>
              <Text style={estilos.inputini}>Ingresar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={estilos.textoini} 
            onPress={handleRegistro}>
              <Text style={estilos.inputini}>Registrar</Text>
            </TouchableOpacity>
       </View>
      </ImageBackground>
    </ScrollView>
      
   )
  }