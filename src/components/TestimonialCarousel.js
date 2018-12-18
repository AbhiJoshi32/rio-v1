import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './testinomial_carousel.css'
import Slider from "react-slick";
import Photo1 from '../assets/img/cl1.jpg'
import Photo2 from '../assets/img/cl2.jpg'
import Photo3 from '../assets/img/cl3.jpg'
import Photo4 from '../assets/img/cl4.jpg'
import Photo5 from '../assets/img/cl5.jpg'

import TestinomialCard from './TestimonialCard'

const items = [{
    'review':'Used their services to travel to Shimla.Very professional drivers and hygienic cars.Fair pricing and honest billing.Great experience.',
    'image':Photo1,
    'name':'UTKARSH RAJGARHIA'
},{
    'review':'This one is the best travel agency in Indirapuram. They provide very nice and well maintained cabs at a very low price. The owner is a very nice man and treats his clients with with ultimate priority and professionalism.',
    'image':Photo2,
    'name':'mayank tripathi'
},{
    'review':'Excellent conversation and very neat and clean cars. I have been travelling with them from last 5years  and they have amazing car service.',
    'image':Photo3,
    'name':'Simpi Singh'
},{
    'review':'The drivers is extremely courteous and keeps you entertained.he knows the places well and can show the Knicks and knacks kf every place.',
    'image':Photo5,
    'name':'P.R. Subramanian'
},{
    'review':'Best service... very comfortable and helpful drivers ... would strongly recommend for all outstation and local travel.',
    'image':Photo4,
    'name':'Govindan Pt'
}]

export default class TestimonialCarousel extends Component{
    render() {
        var settings = {
            autoplay:true,
            dots: true,
            infinite: true,
            speed: 200,
            slidesToShow: 3,
            slidesToScroll: 1,
          };

        const slides = items.map((item,i) => {
            return (
                <TestinomialCard
                obj = {item}
                key={i}/>
            );
        })
        return (
            <div id="testimonial-slide">
                <Slider {...settings}>{slides}</Slider>
            </div>
        )
    }
}