import React from "react";
import { View, TouchableOpacity, Text} from "react-native";
import estilos from "./Style";

export interface Task{
  titulo:string,
  done:boolean,
  date:Date,
  id:string,
  notificationId?: number
}

interface ItemProps{
    item:Task
    markDone: (task:Task) => void
    deleteF: () => void
}
export default function RenderItem({item,markDone,deleteF}:ItemProps){
  const formatDateTime=(date:Date)=>{
    return date.toLocaleString('es-Es',{
      year:'numeric',
      month:'short',
      day:'numeric',
      hour:'2-digit',
      minute:'2-digit'
    })
  }
  const isOverdue=()=>{
    return new Date() > item.date && !item.done
  }
  const getStatusText=()=>{
    if(item.done){
      return 'Completada ✅'
    }
    if(isOverdue()){
      return '⏰ Vencida'
    }
    return '⌛ Pendiente'
  }

  const getStatusStyle=()=>{
    if(item.done){
      return estilos.Completed
    }
    if(isOverdue()){
      return estilos.Overdue
    }
    return estilos.Pendiente
  }

  return (
    <View style={[estilos.dataTasks, isOverdue() && estilos.overT]}>
      <TouchableOpacity 
      style={estilos.taskContent}
      onPress={() => markDone(item)}>
        <Text style={item.done ? estilos.textDone : estilos.textoApp5}>
          {item.titulo}
        </Text>
        <Text 
        style={estilos.textoApp5}>
        {formatDateTime(item.date)}
      </Text>
      <Text
        style={[estilos.statustext,getStatusStyle()]}>
        {getStatusText()}
      </Text>
      {!item.done && item.date > new Date() && (
        <Text>Notificacion Programada</Text>
      )}
      </TouchableOpacity>

      {item.done && (
        <TouchableOpacity 
        onPress={deleteF}>
          <Text style={estilos.botonEliminar}>🗑️Eliminar</Text>
        </TouchableOpacity>
      )}
    </View>
);}