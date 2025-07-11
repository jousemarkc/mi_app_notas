import { StyleSheet, Dimensions } from "react-native";

const estilos = StyleSheet.create({
    contenedor:{
    flexDirection:'row',
    marginTop: 20
    },
    texto:{
        fontSize:20,
        color:'yellow',
        backgroundColor:'black',
        borderRadius:10,
        alignSelf:'center',
        padding: 10,
        margin: 10
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
        textAlign:'center',
        width:'65%',
        height: 60,
        margin: 10
    },
    imagen:{
        opacity: 0.75,
        height: 900
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
        padding: 10,
        margin: 10
    },
    contenedorini:{
    opacity: 1
    },
    textoini:{
        fontSize:50,
        color:'yellow',
        backgroundColor:'black',
        textAlign:'center',
        borderRadius:30,
        shadowColor: 'red',
        margin: '15%',
        opacity: 1
    },
    textoini2:{
        fontSize:40,
        color:'blue',
        backgroundColor:'grey',
        textAlign:'center',
        borderRadius:30
    },
    inputini:{
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
    imagenini:{
        width:'100%',
        height:'100%',
        opacity: 0.5
    },
    contenedorApp:{
    width:'100%',
    padding:20,
    backgroundColor:'orange',
    rowGap:70,
    },
    imagenApp:{
        width:'100%',
        height:'50%',
        borderRadius:100,
        marginBottom: 0
    },
    textoApp:{
        fontSize:50,
        color:'yellow',
        backgroundColor:'black',
        textAlign:'center',
        borderRadius:30,
        shadowColor: 'red',
    },
    textoApp2:{
        fontSize:40,
        color:'blue',
        backgroundColor:'grey',
        textAlign:'center',
        borderRadius:30
    },
    textoApp3:{
        fontSize:40,
        color:'red',
        backgroundColor:'black',
        textAlign:'center',
        borderRadius:30
    },
    inputApp:{
        fontSize:20,
        backgroundColor:'yellow',
        borderColor: 'black',
        borderBlockColor: 'black',
        borderWidth: 3,
        borderRadius: 20,
        marginTop: 10,
        textAlign:'center'
    },
    botonApp:{
        fontSize: 20,
        textAlignVertical:'center',
        alignContent:'center',
        display:'flex',
        marginTop: 7
    },
    textoApp4:{
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
        padding: 10,
        marginBottom: 10
    },
    textoApp5:{
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
    },
    textDone:{
        textDecorationLine:'line-through',
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
    },
    botonEliminar:{
        fontSize:20,
        color:'rgba(0, 0, 0, 0.72)',
        backgroundColor:'rgba(255, 0, 0, 0.76)',
        textAlign:'center',
        borderRadius:20,
        justifyContent:'center',
        textAlignVertical:'center',
        display:'flex',
        alignItems:'center',
        alignSelf: 'center',
        padding: 10,
        margin:5
    },
    DTC:{
        backgroundColor:'yellow',
        fontSize:100,
        display:'flex',
        alignContent:'center',
        alignSelf:'flex-start',
        padding:10,
        borderCurve:'continuous',
        borderRadius:10
    },
    Completed:{

    },
    dataTasks:{

    },
    overT:{

    },
    taskContent:{

    },
    statustext:{

    },
    Overdue:{

    },
    Pendiente:{
        
    }
});
export default estilos;