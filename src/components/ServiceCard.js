import React, { Component } from 'react';
import {Card, CardBody, CardTitle, CardText} from 'reactstrap';

export default class ServiceCard extends Component {
    render() {
        return( 
            
            <Card>
                <CardBody>
                <div style={{padding:'5px 0'}}>
                    <div style={{
                            height: '70px',
                            lineHeight: '70px'}}>
                    <img src={this.props.obj.image} alt={this.props.obj.alt}/>
                    </div>
                    <CardTitle style={{paddingTop:'10px',fontFamily:'Roboto'}}>{this.props.obj.heading}</CardTitle>
                    <CardText style={{fontSize:'.9em'}}>{this.props.obj.content}</CardText>
                </div>
                </CardBody>
            </Card>
        )
    }
}