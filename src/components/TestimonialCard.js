import React,{Component} from 'react'
import {Card, CardBody, CardTitle, CardText} from 'reactstrap';

export default class TestimonialCard extends Component {
    render() {
        return (
            <Card className="testinomial-card" style = {{margin:'0 10px',height:'100%',padding: '35px 35px 120px 35px'}}>
                <div className="text" style={{fontStyle:'italic'}}>
                    <p>{this.props.obj.review} </p>
                </div>				
                <div className="quote" style={{position: 'absolute',
                    bottom: '0',
                    left:'0',
                    right: '0',
                    textAlign: 'center'}}>		
                    <span className="fa fa-quote-left" style={{    
                        color: '#E6E6E6',
                        fontSize: '36px',
                        margin: '35px 0 15px'}}></span>
                    <div className="name" style={{
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        fontSize: '14px',
                        marginBottom: '10px'
                    }}>{this.props.obj.name}</div>
                    <img src={this.props.obj.image} style = {{
                            width: '46px',
                            height: '46px',
                            borderRadius: '50%',
                            backgroundClip: 'padding-box',
                            margin: '0 auto -23px', 
                            zIndex: '2'
                    }} alt="Client"/>
                </div>
            </Card>
        )
    }
}