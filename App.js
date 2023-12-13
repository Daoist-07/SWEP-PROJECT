import React,{useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './Components/Tasks';
export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = ()=> {
    setTaskItems([...taskItems, task])
    setTask(null);
    }

    const completeTask  = (index) => {
      let itemsCopy = [...taskItems];
      itemsCopy.splice(index, 1);
      setTaskItems(itemsCopy);
    }
  return (
    <View style={styles.container}>

      {/* Today's Tasks */}
      <View style={styles.styleWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}>
          {/* This is where the tasks will go*/}
          {
            taskItems.map((item, index) => {
             return(
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
             )
             
            })
          }
{/*<Task text={'Task 1'}/>
<Task text={'Task 2'}/> */}
        </View>
        
      </View>
      


{/* Write a task*/}
<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
style={styles.writeTaskWrapper}
>
<TextInput style={styles.input} placeholder={'What is your task?'} value={task} onChangeText={text => setTask(text)} />

<TouchableOpacity onPress={() => handleAddTask()}> 
  <View style={styles.addWrapper}>
    <Text style={styles.addText}>+</Text>
  </View>
</TouchableOpacity>
</KeyboardAvoidingView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
   
  },
  tasksWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize:30,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,

  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth:1,
    width : 250,
  },
  addWrapper: {
    width: 80,
    height: 80,
    backgroundColor: 'FFF',
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});
