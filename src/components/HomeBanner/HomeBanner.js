import React from 'react';
import {Carousel} from 'react-bootstrap';


function HomeBanner() {
    return (
        <div style={{ backgroundColor: "black" }}>
            <Carousel>
                <Carousel.Item interval={5000} className="mx-auto col-10">
                    
                    <Carousel.Caption className="col-5" style={{ top: '40%' }}>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    <div className="col-5 ml-auto">
                    <img
                        className="w-100"
                        src="https://media1.popsugar-assets.com/files/thumbor/JhWnT0vhNmv7Ie6CxCThVmAaBGo/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/10/13/960/n/1922507/9b46ae508c936f82_iPhone_12_Pro_Max_iPhone_12_Pro_pacific_blue/i/iPhone-12-Pro-Max.png"
                        alt="First slide"
                    /></div>
                </Carousel.Item>
                <Carousel.Item interval={5000} className="mx-auto col-10">
                    <div className="col-5 ml-auto">
                    <img
                        className="w-100"
                        src="https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-12-Pro-Max/Pacific-Blue/Apple-iPhone-12-Pro-Max-Pacific-Blue-backimage.png"
                        alt="Second slide"
                    />
                    </div>
                    <Carousel.Caption className="col-5 my-auto" style={{ top: '40%' }}>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000} className="mx-auto col-10">
                    <div className="col-5 ml-auto">
                    <img
                            className="w-100"
                        src="https://media1.popsugar-assets.com/files/thumbor/bC6YEFs4vS8YRhqnwKOMD2VoJ70/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/10/13/970/n/1922507/5db69505e0e190d5_iPhone_12_Pro_pacific_blue/i/iPhone-12-Pro.png"
                        alt="Third slide"
                        />
                    </div>
                    <Carousel.Caption className="col-5 my-auto" style={{ top: '40%'}}>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HomeBanner
