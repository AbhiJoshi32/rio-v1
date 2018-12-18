import React, {Component} from 'react'

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Card} from 'reactstrap'
import SimpleMap from '../components/SimpleMap';
export default class Contact extends Component{
    render() {
        return(
            <div style={{marginTop:'100px'}}>
                <div>       
                    <h4 className="text-warning" style={{fontFamily:'Roboto Condensed',fontWeight:'bold'}}>Contact Us</h4>
                </div>
                <div className="container">
                    <div className="row" style = {{marginTop:'24px'}}>
                        <div className="col-md-6">
                            <div style={{padding:'30px'}}>
                                We are available 24/7. Contact us anytime for a comfortable ride.
                            </div>
                            <Card style = {{textAlign:'left',padding:'30px 12px',fontWeight:'bold',fontSize:'1.2em',fontFamily:'Roboto Condensed'}}>
                                <div>
                                <span className="fa fa-phone" style={{color:'#ffc107',padding:'8px',}}></span>
                                <span>9999050903, 9910994216</span>
                                </div>
                                <div>
                                <span className="fa fa-map-marker" style={{color:'#ffc107',padding:'8px'}}></span>
                                <span>97 G Gyan Khand 4 Indirapuram Ghaziabad Uttar Pradesh India</span>
                                </div>
                                <div>
                                <span className="fa fa-envelope" style={{color:'#ffc107',padding:'8px'}}></span>
                                <span>riotravels.india@gmail.com</span>
                                </div>
                            </Card>
                            <div style={{textAlign:'left',fontWeight:'bold'}}>
                                GST: 09AQKPP2830D1ZX
                            </div>
                        </div>
                        <div className="col-md-6">
                        <Form style={{background:'#F5F5F5',padding:'36px',margin:'0 36px 36px'}}>
                            <h3 style={{marginBottom:'30px',fontFamily:'Roboto Condensed',fontWeight:'bold'}}>SEND <span className="text-warning">MESSAGE</span></h3>
                            <div className="labels" >
                                <div>
                                    <FormGroup>
                                    <Input type="text" name="name" placeholder="Your Name" />
                                    </FormGroup>
                                </div>
                                <div>
                                    <FormGroup>
                                    <Input type="text" name="name" placeholder="Email" />
                                    </FormGroup>
                                </div>
                                <div>
                                    <FormGroup>
                                    <Input type="textarea" name="message" placeholder="Message" />
                                    </FormGroup>
                                </div>
                                <Button color="warning">Submit</Button>
                            </div>
                        </Form>        
                        </div>
                        <SimpleMap />
                    </div>
                </div>
            </div>
        )
    }
}