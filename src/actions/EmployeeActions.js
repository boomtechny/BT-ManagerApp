import firebase from 'firebase'; 
import { EMPLOYEE_UPDATE } from './types'; 
import { Actions, ActionConst } from 'react-native-router-flux';



export const employeeUpdate = ({ prop, value})=>{
return{
  type: EMPLOYEE_UPDATE, 
  payload:{prop, value}
}
};

export const employeeCreate = ({ name, phone, shift})=>{
  const { currentUser } = firebase.auth();

  return() =>{
 firebase.database().ref(`/users/${currentUser.uid}/employees`)
 .push({ name, phone, shift})
 .then(()=> Actions.main({type: ActionConst.RESET}) ); 
  };  
}