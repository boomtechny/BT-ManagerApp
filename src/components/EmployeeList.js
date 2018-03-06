import _ from 'lodash';
import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import {View, Text, ListView } from 'react-native'; 
import { employeesFetch } from '../actions'

class EmployeeList extends Component {
  
  componentWillMount(){
    this.props.employeesFetch();
    this.createDataSoure(this.props);
  }

  componentWillReceiveProps(nextProps){

this.createDataSoure(nextProps);

  }
  
  createDataSoure({employees}){
    const ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2 }); 
   
    this.dataSource = ds.cloneWithRows(this.props.employees); 
  }

  render(){
    console.log(this.props); 
    return (
      <View>
        <Text> Employee List</Text>
        <Text> Employee List</Text>
        <Text> Employee List</Text>
        <Text> Employee List</Text>
        <Text> Employee List</Text>
        <Text> Employee List</Text>
        <Text> Employee List</Text>
        </View>
    );
  }
}
const mapStateToProps = state => {
const employees = _.map(state.employees, (val,uid) =>
{
return{...val, uid
};
});
return {employees};
}; 
export default connect(mapStateToProps, { employeesFetch})(EmployeeList); 