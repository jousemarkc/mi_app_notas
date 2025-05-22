import React from 'react';
import { View,Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, ScrollView, ImageBackground } from 'react-native';
const estilos = StyleSheet.create({
  contenedor:{
    opacity: 1
  },
  texto:{
    fontSize:50,
    color:'yellow',
    backgroundColor:'black',
    textAlign:'center',
    borderRadius:30,
    shadowColor: 'red',
    margin: '15%',
    opacity: 1
  },
  texto2:{
    fontSize:40,
    color:'blue',
    backgroundColor:'grey',
    textAlign:'center',
    borderRadius:30
  },
  input:{
    fontSize:20,
    backgroundColor:'yellow',
    borderColor: 'black',
    borderBlockColor: 'black',
    borderWidth: 3,
    borderRadius: 20,
    marginTop: '0%',
    marginLeft: '10%',
    marginRight: '10%',
    textAlign:'center',
    opacity: 1
  },
  imagen:{
    width:'100%',
    height:'100%',
    opacity: 0.5
  }
})
export default function Inicio(){
   return(
      <ImageBackground source={require('./image/twelight.jpg')} imageStyle={estilos.imagen} width={100} height={500}>
        <View>
          <Text style={estilos.texto}>Usuario</Text>
          <TextInput placeholder='Usuario' style={estilos.input}></TextInput>
          <Text style={estilos.texto}>Password</Text>
          <TextInput placeholder='Password' style={estilos.input}></TextInput>
            <TouchableOpacity style={estilos.texto}>
              <Text style={estilos.input}>Ingresar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.texto}>
              <Text style={estilos.input}>Registrar</Text>
            </TouchableOpacity>
       </View>
      </ImageBackground>
   )
  }