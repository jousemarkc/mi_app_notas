import React from 'react';
import { View,Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
const estilos = StyleSheet.create({
  contenedor:{
    width:'100%',
    padding:20,
    backgroundColor:'orange',
    rowGap:70,
  },
  imagen:{
    width:'100%',
    height:'50%',
    borderRadius:100,
    marginBottom: 0
  },
  texto:{
    fontSize:50,
    color:'yellow',
    backgroundColor:'black',
    textAlign:'center',
    borderRadius:30,
    shadowColor: 'red',
  },
  texto2:{
    fontSize:40,
    color:'blue',
    backgroundColor:'grey',
    textAlign:'center',
    borderRadius:30
  },
  texto3:{
    fontSize:40,
    color:'red',
    backgroundColor:'black',
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
    marginTop: 10,
    textAlign:'center'
  },
  boton:{
    fontSize: 20,
    textAlignVertical:'center',
    alignContent:'center',
    display:'flex',
    marginTop: 7
  },
  texto4:{
    fontSize:30,
    color:'rgba(0, 0, 0, 0.72)',
    backgroundColor:'rgba(40, 238, 22, 0.57)',
    textAlign:'center',
    borderRadius:20,
    justifyContent:'center',
    textAlignVertical:'center',
    display:'flex',
    alignItems:'center',
    alignSelf: 'center',
    padding: 10
  },
  texto5:{
    fontSize:30,
    color:'rgba(0, 0, 0, 0.72)',
    backgroundColor:'rgba(51, 138, 252, 0.86)',
    textAlign:'center',
    borderRadius:20,
    justifyContent:'center',
    textAlignVertical:'center',
    display:'flex',
    alignItems:'center',
    alignSelf: 'center',
    padding: 10,
    margin:5
  }
})
const tasks = [
  { titulo:"Estudiar",
    done:false,
    date:new Date()
  },
  { titulo:"Jugar",
    done:false,
    date:new Date()
  },
  { titulo:"Caminar",
    done:false,
    date:new Date()
  },
  {
    titulo:"Comer",
    done:false,
    date:Date()
  }
]
interface Task{
  titulo:string,
  done:boolean,
  date:Date
}
function renderItem({item}:{item:Task}){
  return <Text style={estilos.texto5}>{item.titulo}</Text>
}
export default function App(){
  return(
    <View style={estilos.contenedor}>
      <ScrollView>
        <Text style={estilos.texto}>Tareas🗒️</Text>
      <View>
        <TextInput placeholder='Escribe' style={estilos.input}></TextInput>
        <TouchableOpacity style={estilos.boton}>
          <Text style={estilos.texto4}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList renderItem={renderItem} data={tasks}/>
      </View>
      </ScrollView>
    </View>
  )
}

