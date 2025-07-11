import React, {useState, useEffect} from "react";
import Inicio from "./inicio";
import Registro from "./registro";
import Tareas from "./Tareas";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type RootList = {
  Inicio: undefined
  Registro: undefined
  Tareas: undefined
}

const Ruta = createStackNavigator<RootList>();

export default function App(){
  const [initialRoute, setInitialRoute] = useState<'Inicio' | 'Tareas'>('Tareas')
  const [checkSesion, setCheckSesion] = useState(true)
  useEffect(()=>{
    const vS = async()=>{
      try {
        const usuario = await AsyncStorage.getItem('usuario')
        if(usuario){
          setInitialRoute('Tareas')
        }
      } catch (error) {
        Alert.alert("No se pudo conectar al servidor")
      }
      finally{
        setCheckSesion(false)
      }
    }
    vS()
  },[])
  if(checkSesion) {return null}
  return(
    <NavigationContainer>
      <Ruta.Navigator
      initialRouteName={initialRoute}
      screenOptions={{
        headerStyle:{
          backgroundColor:'red'
        },
        headerTintColor:'black',
        headerTitleStyle:{
          fontWeight:'bold'
        }
      }}
      >
        <Ruta.Screen
        name="Inicio"
        component={Inicio}
        options={{title:'Frame de inicio'}}
        />
        <Ruta.Screen
        name="Registro"
        component={Registro}
        options={{title:'Frame de registro'}}
        />
        <Ruta.Screen
        name="Tareas"
        component={Tareas}
        options={{title:'Frame de tareas'}}
        />
      </Ruta.Navigator>
    </NavigationContainer>
  )
}