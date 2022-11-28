import React, { Component } from "react";
import NavBar from "./Navbar";
import ShoppingCart from "./ShoppingCart";
import Login from "./Login";
import Dashboard from "./Dashboard";
import CustomersList from "./CustomersList";
import {Route,Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";

export default class App extends 
Component{
    render(){
        return(
        <BrowserRouter>
            <Switch>
            <NavBar />
          
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/customers" exact component={CustomersList} />
          <Route path="/cart" exact component={ShoppingCart} />

       
            </Switch>
             
             

        </BrowserRouter>
        );
       }
}

