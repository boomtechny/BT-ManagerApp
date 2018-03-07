import React from 'react'; 
import { Scene, Router, ActionConst, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm'; 
import EmployeeList from './components/EmployeeList'; 
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit'; 
const RouterComponent = () => {

  return(
    <Router >
   <Scene key = "root">
    <Scene key = "auth" sceneStyle={{paddingTop: 65}}>
      <Scene key = "login" component={LoginForm} title = "Please Login" />
      </Scene>
     
      <Scene key = "main" sceneStyle={{paddingTop: 65}} type={ActionConst.RESET}>
      <Scene onRight = {() => Actions.employeeCreate()} rightTitle="Add" key="employeeList" component={EmployeeList} title = "Employees"/> 
      

      <Scene key = "employeeCreate" component={EmployeeCreate} title = "Create Employee"/>
    
      <Scene key="employeeEdit" component={EmployeeEdit} title = "Edit Employee" />
      </Scene>
      </Scene>
      </Router>
  );
}

export default RouterComponent; 