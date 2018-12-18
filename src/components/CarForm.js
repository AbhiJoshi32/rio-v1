import React, { Component } from 'react';
import './car-form.css';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import firebase from 'firebase/app'
import 'firebase/database'

export default class CarForm extends Component {
    constructor(props) {
        super(props);    
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        // const data = new FormData(event.target);
        // console.log(event.target.from.value);
        // console.log(data);
        event.preventDefault();        
        let obj = {}
        obj['from'] = event.target.from.value;
        obj['to'] = event.target.to.value;
        obj['phone'] = event.target.phone.value;
        obj['date'] = event.target.date.value;
        console.log(obj)
        firebase.database().ref('queue').push(obj);
    }
    render() {
        return(
            <div>
                <Form className="car-form" onSubmit = {this.handleSubmit}>
                    <h3 style={{marginBottom:'30px',fontFamily:'Roboto Condensed',fontWeight:'bold'}}>GET TAXI <span className="text-warning">ONLINE</span></h3>
                    <div className="row labels" >
                        <div className="col-md-6">
                            <FormGroup>
                            <Input type="text" name="from" placeholder="From" /><span className="fa fa-map-marker form-icons"></span>
                            </FormGroup>
                        </div>
                        <div className="col-md-6">                        
                            <FormGroup>
                            <Input type="text" name="to" placeholder="To" /><span className="fa fa-map-marker form-icons"></span>
                            </FormGroup>
                        </div>
                        <div className="col-md-6">
                            <FormGroup>
                            <Input type="phone" name="phone" placeholder="Phone" /><span className="fa fa-phone form-icons"></span>
                            </FormGroup>
                        </div>
                        <div className="col-md-6">                        
                            <FormGroup>
                            <Input type="text" name="date" placeholder="Date" /><span className="fa fa-calendar form-icons"></span>
                            </FormGroup>
                        </div>
                    </div>
                    <Button color="warning" size="lg">Get Taxi</Button>
                </Form>
            </div>
        )
    }
}