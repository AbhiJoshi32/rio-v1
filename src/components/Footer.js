import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return(
            <div style={{background:'black',marginTop:'20px',padding:'10px',color:'white'}}>
                <div className="container">
                    <div>
                        <span className="fa fa-copyright"></span> A developers 2018
                    </div>
                </div>
            </div>
        )
    }
}