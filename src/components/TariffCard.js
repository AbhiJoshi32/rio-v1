import React, {Component} from 'react';
import {Card, CardBody, CardTitle, CardImg,CardText} from 'reactstrap';

export default class TarrifCard extends Component{
    render() {
        return( 
                <Card>
                    <CardBody>
                    <div style={{padding:'5px 0'}}>
                        <div style={{
                                height: '170px',
                                lineHeight: '170px'}}>
                        <img src={this.props.obj.image} alt={this.props.obj.alt}/>
                        </div>
                        <CardTitle style={{paddingTop:'10px',fontFamily:'Roboto'}}>{this.props.obj.heading}</CardTitle>
                        <p style={{fontSize:'.9em'}}>{this.props.obj.content}</p>
                        <div>{this.props.obj.price}</div>
                    </div>
                    </CardBody>
                </Card>
        )
    }
}