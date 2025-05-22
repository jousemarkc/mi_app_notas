import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { View,Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, ScrollView, ImageBackground } from 'react-native';
const estilos = StyleSheet.create({
  contenedor:{
    opacity: 1
  },
  texto:{
    fontSize:20,
    color:'yellow',
    backgroundColor:'black',
    textAlign:'center',
    borderRadius:30,
    shadowColor: 'red',
    margin: '5%',
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
  },
  imagen:{
    width:'100%',
    height:'100%',
    opacity: 0.5,
    flex: 1
  }
})
export default function Registro(){
   return(
    <ScrollView>
        <ImageBackground source={require('./image/twelight.jpg')} imageStyle={estilos.imagen} width={100} height={500}>
            <View>
                <Text style={estilos.texto}>Nombre</Text>
                <TextInput placeholder='Nombre' style={estilos.input}></TextInput>
                <Text style={estilos.texto}>Correo</Text>
                <TextInput placeholder='Correo' style={estilos.input} keyboardType='email-address'></TextInput>
                <Text style={estilos.texto}>TD</Text>
                <Picker style={estilos.input}>
                    <Picker.Item label='Cedula'/>
                    <Picker.Item label='Tarjeta Identidad'/>
                    <Picker.Item label='Pasaporte'/>
                </Picker>
                <Text style={estilos.texto}>Documento</Text>
                <TextInput placeholder='Documento' style={estilos.input}></TextInput>
                <Text style={estilos.texto}>Telefono</Text>
                <TextInput placeholder='Telefono' style={estilos.input}></TextInput>
                <Text style={estilos.texto}>Usuario</Text>
                <TextInput placeholder='Usuario' style={estilos.input}></TextInput>
                <Text style={estilos.texto}>Clave</Text>
                <TextInput placeholder='Clave' style={estilos.input}></TextInput>
                <TouchableOpacity style={estilos.texto}>
                <Text style={estilos.input}>Registrar</Text>
                </TouchableOpacity>
            </View>  
      </ImageBackground>
    </ScrollView>
      
   )
}