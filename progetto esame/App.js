import React from 'react';
import {Text, View,StyleSheet ,Alert, FlatList, Image, ScrollView} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import { Constants } from 'expo';
//import { List, ListItem } from 'react-native-elements'
import {Ionicons} from '@expo/vector-icons'



class Men extends React.Component{

  constructor(props){
    super(props);
    this.state={dataSource:[]};
  }


  componentDidMount(){

     return fetch('http://www.dmi.unict.it/~calanducci/LAP2/food.json')
     .then( (response)=> response.json())
     .then( (responseJson)=> {
       this.setState({dataSource:responseJson.data})
     })
  }

  renderRow ({ item }) {

    return (

      <View style={styles.containerLista}>
        <Image source={{uri:item.image}} style={styles.imgLista}/>
          <Text style={styles.textContainer}>
            <Text style={styles.testoTitoloLista}> {item.name} </Text>
            <Text style={styles.testoSubLista}> {item.info} </Text>
            <Text style={styles.prezzoLista}> {item.price} € </Text>
        </Text>


      </View>

    )
  }
  


  render(){
    return(
    <View>
      <Text style={styles.paragraph}> Menù </Text>
      <FlatList
        data={this.state.dataSource}
        renderItem={this.renderRow}
        keyExtractor={item => item.name}
              />
    </View>
    )}
};


//CSS
const styles= StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  containerLista:{
    padding:5,
    borderBottomWidth:1,
    flexDirection:'row',
  },

  imgLista:{
     width: 70,
     height: 70,
     borderRadius:100,
     borderWidth:1,
     borderColor:'black',
     marginRight:10,
    
  },
  

  textContainer:{
    flexDirection:'column',
    marginRight :10,
    flex:1

  },
  testoTitoloLista:{
    
    fontWeight:'bold',
    fontSize:15
  },
  testoSubLista:{
    
  },
  prezzoLista:{
    fontWeight:'bold',

  },
});



//non è necessario il completamento di questa classe,lasciare in bianco
class Carr extends React.Component{
  render(){
    return(
      <Text> ok </Text>
    );
  }
}



//Bottom nav
export default createBottomTabNavigator({
  Menu:Men,
  Chart:Carr
},
{
  navigationOptions:({navigation})=>({

    headerTitle: 'ciao' 
  }),

  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    fontWeight: 'bold'
  },
}
);
