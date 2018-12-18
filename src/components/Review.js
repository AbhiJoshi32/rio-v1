import React, {Component} from 'react'
import {Card} from 'reactstrap'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';

export default class Review extends Component {
    constructor() {
        super();
     
        this.state = {
          rating: 0
        };
      }
    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }
    render() {
        const { rating } = this.state;
        return (
            <div style={{width:'50%',margin:'0 auto'}}>
                <Card>
                    <div className="container" style={{padding:'12px'}}>
                    <Form>
                        <StarRatingComponent
                            name="rate1" 
                            starCount={5}
                            value={rating}
                            onStarClick={this.onStarClick.bind(this)}
                            />
                            <FormGroup>
                                <Input type="textarea" name="message" placeholder="Comment" />
                            </FormGroup>
                            <Button color="warning">Submit</Button>
                    </Form>
                    </div>
                </Card>
            </div>
        )
    }
}