import React, {useState, useEffect} from 'react';
import { View,Text, TextInput, TouchableOpacity, FlatList, ScrollView, Alert, AppState } from 'react-native';
import estilos from './Style';
import RenderItem from './Funcionalidades';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import PushNotification from 'react-native-push-notification';
// const tasks = [
// ];
export interface Task{
  titulo:string,
  done:boolean,
  date:Date,
  id:string,
  notificationId?: number
}
export default function Tareas(){
  const [text, setText]=useState('')
  const [tasks,setTasks]=useState<Task[]>([])
  const [showDatePicker,setshowDatePicker]=useState(false)
  const [showTimePicker,setshowTimePicker]=useState(false)
  const [selectedDate,setselectedDate]=useState(new Date)
  useEffect(()=>{
    PushNotification.configure({
      onNotification: function(notification:any){
        console.log('NOTIFICATION', notification)
        if(notification.data && notification.data.taskId){
          checkAndUpdateOverdueTasks()
        }
      },
      requestPermissions:false
    })
    PushNotification.createChannel({
      channelId:"task-reminders",
      channelName:"Recordatorio de Tareas",
      channelDescription:"Noificaciones para Tareas Programadas",
      playSound:true,
      soundName:"default",
      importance:4,
      vibrate:true
    },
    (created:boolean)=>console.log(`Canal ${created? 'creado' : 'ya existia o fallo al crearse'}`)
  )
  getData()
  const handleAppStateChange=(nextAppState:string)=>{
    if(nextAppState==='active'){
      checkAndUpdateOverdueTasks()
    }
  }
  const subscription = AppState.addEventListener('change',handleAppStateChange)
  return ()=>{
    subscription?.remove()
  }
  },[])
  const checkAndUpdateOverdueTasks = async ()=>{
    try {
      const value = await AsyncStorage.getItem('Todo')
      if(value !== null){
        const storedTasks = JSON.parse(value)
        const tasksWithDates = storedTasks.map((task:any)=>({
          ...task,
          date:new Date(task.date)
        }))
        setTasks([...tasksWithDates])
      }
    } catch (e) {
      console.log('Error checking overdue tasks: ',e)      
    }
  }
  const storeData = async (value:Task[])=>{
    try {
      await AsyncStorage.setItem('Todo',JSON.stringify(value))
    } 
    catch (error) {
      console.log('Error storing data: ', error)
    }
  }
  const getData = async()=>{
    try {
      const value = await AsyncStorage.getItem('Todo')
      if (value !== null) {
        const Tlocals = JSON.parse(value)
        const tasksWithDates=Tlocals.map((j:any)=>({
          ...j,
          date:new Date(j.date)
        }))
        setTasks(tasksWithDates)
      }
    } catch (error) {
      console.log('Error getting data: ', error)
    }
  }
  const scheduleNotification = (task:Task)=>{
    const now = new Date()
    const taskDate = task.date
    if(taskDate > now){
      const notificationId = Math.floor(Math.random()*1000000)
      PushNotification.localNotificationSchedule({
        id:notificationId,
        channelId:"task-reminders",
        title:"Recordatorio de Tarea",
        message:`Es hora de ${task.titulo}`,
        date:taskDate,
        userInfo:{
          taskId:task.id,
          taskTitle:task.titulo
        },
        allowWhileIdle:true,
        repeatType:undefined
      })
      return notificationId
    }
    return undefined
  }
  const cancelNotification=(notificationId:number)=>{
    PushNotification.cancelLocalNotification(notificationId.toString())
  }
  const generateTaskId=()=>{
    return Date.now().toString() + Math.random().toString(36).substr(2,9)
  }
  const addTask=()=>{
    if(text.trim() === ''){
      Alert.alert('Error','Por favor ingrese una Tarea');
      return;
    }
    const tmp=[...tasks]
    const taskId=generateTaskId()
    const newTask: Task = {
      id:taskId,
      titulo:text.trim(),
      done:false,
      date:selectedDate
    }
    const notificationId = scheduleNotification(newTask)
    if(notificationId){
      newTask.notificationId = notificationId
    }
    tmp.push(newTask)
    setTasks(tmp)
    storeData(tmp)
    setText('')
    setselectedDate(new Date())
    if(notificationId){
      Alert.alert(
        'Tarea Agregada',
        `La tarea "${newTask.titulo}" ha sido programda para ${formatDateTime(selectedDate)}`
      )
    }
  }
  const markDone=(task:Task)=>{
    const tmp = [...tasks]
    const index=tmp.findIndex(tu=>tu.id===task.id)
    if(index !== -1){
      tmp[index].done = !tmp[index].done
      if(tmp[index].done && tmp[index].notificationId){
        cancelNotification(tmp[index].notificationId)
      }else if (!tmp[index].done) {
        const notificationId = scheduleNotification(tmp[index])
        if (notificationId) {
          tmp[index].notificationId = notificationId
        }
      }
      setTasks(tmp)
      storeData(tmp)
    }
  }
  const deleteF=(task:Task)=>{
    Alert.alert(
      '¿Desea Eliminar?',
      'Eliminar la tarea',
      [
        {text:'Cancelar',style:'cancel'},
        { text:'Eliminar',
          style:'destructive',
          onPress:()=>{
            const tmp = [...tasks]
            const index= tmp.findIndex(tu=>tu.id===task.id)
            if (index !==-1) {
              if (task.notificationId) {
                cancelNotification(task.notificationId)
              }
              tmp.splice(index, 1)
              setTasks(tmp)
              storeData(tmp)              
            }
          }
        }
      ]
    )
    
  }
  const onDateChange=(event:any,date?:Date)=>{
    setshowDatePicker(false)
    if(date){
      setselectedDate(date)
    }
  }
  const onTimeChange=(event:any,time?:Date)=>{
    setshowTimePicker(false)
    if(time){
      const newDateTime=new Date(selectedDate)
      newDateTime.setHours(time.getHours())
      newDateTime.setMinutes(time.getMinutes())
      setselectedDate(newDateTime)
    }
  }
  const formatDateTime=(date:Date)=>{
    return date.toLocaleString('es-Es',{
      year:'numeric',
      month:'short',
      day:'numeric',
      hour:'2-digit',
      minute:'2-digit'
    })
  }
  const testNotification=()=>{
    PushNotification.localNotification({
      channelId:"task-reminders",
      title:"Prueba OK",
      message:"Las Notificaciones Funcionan OK!"
    })
  }
  return(
    <View style={estilos.contenedorApp}>
      <ScrollView>
        <Text style={estilos.textoApp}>Tareas🗒️</Text>
      <View>
        <TextInput 
        placeholder='Escribe' 
        style={estilos.inputApp} 
        value={text} 
        onChangeText={(t:string)=>setText(t)}
        multiline={true}
        numberOfLines={2}>
        </TextInput>
        <TouchableOpacity 
        style={estilos.botonApp} 
        onPress={addTask}>
          <Text style={estilos.textoApp4}>
            Agregar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={testNotification}>
          <Text>
            Probar
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={estilos.DTC}>
          <TouchableOpacity onPress={()=>setshowDatePicker(true)}>
            <Text>Fecha</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setshowTimePicker(true)}>
            <Text>Hora</Text>
          </TouchableOpacity>
        </View>
        <Text>
          Programado para: {formatDateTime(selectedDate)}
        </Text>
        <FlatList
        data={tasks}
        keyExtractor={(item)=>item.id} 
        renderItem={({item})=>(
          <RenderItem
          item={item}
          markDone={markDone}
          deleteF={()=>deleteF(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        />
      </View>
      {showDatePicker &&(
        <DateTimePicker
        value={selectedDate}
        mode="date"
        display="default"
        onChange={onDateChange}
        minimumDate={new Date()}
        />
      )}
      {showTimePicker &&(
        <DateTimePicker
        value={selectedDate}
        mode="time"
        display='default'
        onChange={onTimeChange}
        is24Hour={true}
        />
      )}
      </ScrollView>
    </View>
  ) 
}