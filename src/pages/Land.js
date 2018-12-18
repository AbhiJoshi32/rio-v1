import React, { Component } from 'react';
import CustomCarousel from '../components/CustomCarousel'
import CarForm from '../components/CarForm'
import ContactStrip from '../components/ContactStrip'
import ServiceCard from '../components/ServiceCard'
import TariffCard from '../components/TariffCard'
import TestimonialCarousel from '../components/TestimonialCarousel'
import {CardDeck} from 'reactstrap'
import S1 from '../assets/img/_services-1.png'
import S2 from '../assets/img/_services-2.png'
import S3 from '../assets/img/_services-3.png'
import S4 from '../assets/img/_services-4.png'
import T1 from '../assets/img/_tariff-1.png'
import T2 from '../assets/img/_tariff-2.png'
import T3 from '../assets/img/_tariff-3.png'
import T4 from '../assets/img/_tariff-4.png'
import Review from '../components/Review'

export default class Land extends Component {
    
    render() {
        const serviceContent = [{
            'image': S1,
            'heading':'LOCAL DELHI DARSHAN',
            'content':'Special offer for Delhi sightseeing of local tour.'
        },{
            'image': S2,
            'heading':'BOOKING A HOTEL',
            'content':'If you need a comfortable hotel, our operators will book it for you, and take a taxi to the address'
        },{
            'image': S3,
            'heading':'AIRPORT TRANSFER',
            'content':'We provide airport/railway station pick up and drop.'
        },{
            'image': S4,
            'heading':'OUT OF STATION TOUR',
            'content':'Out of station tours for vacation. Packages for hilly areas like Uttrakhand, Himachal Pradesh.'
        }];
        const tariffContent = [{
            'image': T1,
            'heading':'MINI',
            'content':'Mini car like Swift',
            'price': '10/km'
        },{
            'image': T2,
            'heading':'SEDAN',
            'content':'Standard sedan like Etios, Dezire, Honda Amaze and Breeza',
            'price':'10-11/km'
        },{
            'image': T3,
            'heading':'SUV',
            'content':'Inoova, Innova Crista, Fortuner, Scorpio',
            'price':'14/km'
        },{
            'image': T4,
            'heading':'Tempo Travel',
            'content':'Standard Tempo travel.',
            'price':'19/km'
        }];
        
        return(
            <div>
                <div style={{position:'relative',height:'700px'}}>
                    <div style={{position:'absolute',width:'100%'}}>
                        <CustomCarousel/>
                    </div>
                    <div className="container" style={{paddingTop:'80px'}}>
                        <section style={{marginBottom: '90px'}}>
                            <div className="container" style={{zIndex:2,position:'relative'}}>
                            <CarForm/>
                            </div>
                        </section>        
                    </div>
                </div>
                <ContactStrip />
                <section id="services" style={{marginTop:'50px',fontFamily:'Roboto'}}>
		            <div className="container">
                        <h4 className="text-warning" style={{fontFamily:'Roboto Condensed',fontWeight:'bold'}}>WELCOME</h4>
                        <h2 className="h1">OUR SERVICES</h2>
                        <CardDeck>
                            {serviceContent.map((object, i) => <ServiceCard obj={object} key={i} />)}
                        </CardDeck>
                    </div>
                </section>
                <div id="tariffs" style={{backgroundColor:'#F5F5F5', paddingTop:'36px', marginTop:'48px',paddingBottom:'54px'}}>
                    <div className="container">
                        <h4 className="text-warning" style={{fontFamily:'Roboto Condensed',fontWeight:'bold'}}>See Our</h4>
                        <h2 className="h1">PRICES</h2>
                        <CardDeck>
                            {tariffContent.map((object, i) => <TariffCard obj={object} key={i} />)}
                        </CardDeck>
                    </div>
                </div>
                <div id="testimonial" style={{marginTop:'36px',paddingBottom:'36px'}}>
                    <h4 className="text-warning" style={{fontFamily:'Roboto Condensed',fontWeight:'bold'}}>Happy Clients</h4>
                    <h2 className="h1">Testinomial</h2>
                    <div className="container">
                        <TestimonialCarousel/>
                    </div>
                </div>
                
                <div id="review" style={{marginTop:'36px',backgroundColor:'#F5F5F5',padding:'36px'}}>
                    <h4 className="text-warning" style={{fontFamily:'Roboto Condensed',fontWeight:'bold'}}>
                    Tell us
                    </h4>
                        <h2 className="h1"  style={{marginBottom:'24px'}}>Your Review</h2>
                    <div className="container">
                        <Review/>
                    </div>
                </div>
            </div>
        )
    }
}