import React,{Component} from 'react'

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class GalleryCard extends Component {
    render() {
        return (
        <div className="col-md-6" style={{padding:'36px'}}>
            <Card style={{padding:'40px'}}>
                <CardImg top width="100%" src={this.props.obj.image} alt="Card image cap" />
                <CardBody>
                <CardTitle>{this.props.obj.name}</CardTitle>
                </CardBody>
            </Card>
        </div>
        )
    }
}