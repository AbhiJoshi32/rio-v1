import React, { Component } from 'react';
import GalleryCard from '../components/GalleryCard';
import Photo1 from "../assets/img/c1.jpg"
import Photo2 from "../assets/img/c2.jpeg"
import Photo3 from "../assets/img/c3.jpeg"

const cardObj = [
    {image:Photo1,
    name:'Innova'},
    {image:Photo2,
    name:'Swift Dezire'},
    {image:Photo3,
    name:'Innova'}                
]
export default class Gallery extends Component {

    render() {
        const cards = cardObj.map((item,i) => {
            return (
                <GalleryCard
                obj = {item}
                key={i}/>
            );
        })
        return (
            <div className="container" style={{marginTop:'100px'}}>
                <div>       
                    <h4 className="text-warning" style={{fontFamily:'Roboto Condensed',fontWeight:'bold'}}>Car Fleet</h4>
                </div>
                <div className="container" style={{marginTop:'20px'}}>
                    <div className="row">
                        {cards}
                    </div>
                </div>
            </div>
        )
    }
}