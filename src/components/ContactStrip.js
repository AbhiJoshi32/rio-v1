import React, { Component } from 'react';

export default class ContactStrip extends Component {
    render() {
        return(
            <div style={{boxShadow:'2px 2px 8px #e6e6e6'}}>
                <div style={{background:'#FFC61A'}}>
                    <div style={{
                        textAlign:'center',
                        padding:'20px',
                        fontSize:'1.3em',
                        fontFamily:'Roboto',
                        fontWeight:'bolder',
                        letterSpacing:'2px'}}>
                        <span className='fa fa-phone' style={{paddingRight:'20px',paddingTop:'10px'}}></span>
                        Call Taxi Now 
                        <span style={{paddingLeft:'50px'}}>9999050903</span></div>
                </div>
            </div>
        )
    }
}