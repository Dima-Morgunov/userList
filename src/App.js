import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import UserCart from './component/UserCart'
import {getNewData} from "./actions/PageActions";

class App extends Component {
    getData = () =>{
        this.props.getNewData()
        console.log(this.props.data);
    }
    render() {
      const {data} = this.props
    return (
        <div className="app">
            {data && <UserCart data = {data}/>}

            <button onClick={this.getData}>button</button>
            {
                data && <div>{`${data[0].id}`}</div>
            }
        </div>
    );
  }
}
const mapStateToProps = store =>{
    return{
        data: store.dataReducers.data
    }
}


export default connect(mapStateToProps, { getNewData })(App);
