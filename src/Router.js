import React from 'react'; 
import { Scene, Router, ActionConst } from 'react-native-router-flux';
import LoginForm from './components/LoginForm'; 
import EmployeeList from './components/EmployeeList'; 

const RouterComponent = () => {

  return(
    <Router >
   <Scene key = "root">
    <Scene key = "auth" sceneStyle={{paddingTop: 65}}>
      <Scene key = "login" component={LoginForm} title = "Please Login" />
      </Scene>
     
      <Scene key = "main" sceneStyle={{paddingTop: 65}} type={ActionConst.RESET}>
      <Scene onRight = {() => console.log('right!!')} rightTitle="Add" key = "employeeList" component={EmployeeList} title = "Employees" type={ActionConst.RESET}/> 
      </Scene>
      </Scene>
      </Router>
  );
}

export default RouterComponent; 