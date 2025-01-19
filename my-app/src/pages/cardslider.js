import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CardSlider = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1200 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1200, min: 992 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 992, min: 768 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1
        }
    };

    const cards = [
        {
            icon: "fa-plane",
            title: "Immigration Fraud",
            description: "Immigration fraud includes the offences like using a false or altered document to support a visa application."
        },
        {
            icon: "fa-house",
            title: "Real Estate",
            description: "Real estate law deals with legal matters related to the ownership, use, and transfer of land and properties."
        },
        {
            icon: "fa-hand-holding-usd",
            title: "Banking & Finance",
            description: "Banking and finance is a diverse field, which primarily leads to sub-areas of disputes even at basic level."
        },
        {
            icon: "fa-sun-plant-wilt",
            title: "Land Acquisition",
            description: "Illegal land acquisition refers to the acquisition of land by unlawful means such as through fraud or without the consent of the owner."
        },
        {
            icon: "fa-gavel",
            title: "Criminal Law",
            description: "In criminal matters, wide range of crimes fall such as murder, forgery, defamation, economic offences, theft etc."
        },
        {
            icon: "fa-cart-shopping",
            title: "Consumer Rights",
            description: "Consumer protection is the practice of safeguarding buyers of goods and services, and the public, against unfair practices in the marketplace."
        }
    ];

    return (
        <div className="container py-5">
            <h1 className="mb-4">Our Practice Areas</h1>
            <Carousel responsive={responsive} infinite={true} className="py-4">
                {cards.map((card, index) => (
                    <div key={index} className="card mx-2" style={{ minHeight: '300px' }}>
                        <div className="card-body text-center">
                            <div className="icon-box bg-secondary text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '60px', height: '60px' }}>
                                <i className={`fa-solid ${card.icon}`} style={{ fontSize: '24px' }}></i>
                            </div>
                            <h5 className="card-title">{card.title}</h5>
                            <p className="card-text">{card.description}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default CardSlider;
