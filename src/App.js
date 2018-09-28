import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import { UserCart } from './component/UserCart'
import {getPhoto} from "./actions/PageActions";
import axios from 'axios'

class App extends Component {
    state ={
        data: [],
    }

    getData = () =>{
        return axios.get("http://jsonplaceholder.typicode.com/users")
    }
    componentDidMount(){
        this.getData()
            .then(result => {
                console.log(result.data)
                this.setState({
                    data: result.data
                })
            })
        console.log(this.state.data)
    }

  render() {

      const {page, user, getPhoto} = this.props


    return (
        <div className="app">
            <UserCart />
        </div>
    );
  }
}

const mapStateToProps = store =>{
    console.log(store)
    return{
        user: store.user,
        page: store.page
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        getPhoto: year => dispatch(getPhoto(year)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
