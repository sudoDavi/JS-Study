import React, { Component } from 'react';

import { BrowserRouter, Link, Switch } from 'react-router-dom';

import "./styles.css";

export default class Header extends Component{
    state = {
        path: window.location.pathname,
    }

    componentDidMount(){
        const currentPath = window.location.pathname;

        const path = currentPath;

        this.setState({path});
    }

    render(){
        const { path } = this.state;

        return( 
            <header id="main-header">
                    <BrowserRouter>
                        <Switch>
                            <Link to={(path !== "/") ? "/":""}>JSHunt</Link> 
                        </Switch> 
                    </BrowserRouter>
            </header>
        );
    }
    

}




