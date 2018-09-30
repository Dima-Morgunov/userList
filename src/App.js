import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import { UserCart } from './component/UserCart'
import {getNewData} from "./actions/PageActions";
import axios from 'axios'
import dataReducers from "./reducers/data";

class App extends Component {
    state ={
        data: [],
    }


    getData = () =>{
         axios.get("http://jsonplaceholder.typicode.com/users")
             .then(result => {
                 this.setState({
                     data: result.data
                 })
             })
    }


    render() {

      const {data} = this.props

/*
        console.log(data)
*/

    return (
        <div className="app">
            <UserCart />
            <button onClick={this.getData}>button</button>
            {
                data && <div>{`${data}`}</div>
            }
        </div>
    );
  }
}

const mapStateToProps = store =>{
    console.log(store)
    return{
        data: store.dataReducers.data
    }
}

const mapDispatchToProps = dispatch =>{
    console.log(dispatch)
    return{
        getData: data => getNewData(data),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
