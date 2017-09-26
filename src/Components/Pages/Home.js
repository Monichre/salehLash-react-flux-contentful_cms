import React, { Component } from 'react'
import AppDispatcher from '../../Dispatcher/AppDispatcher'
import AppStore from '../../Stores/AppStore'

import OwlCarousel from 'react-owl-carousel2'

export default class Home extends Component {
    componentDidMount(){

    }
    componentWillMount(){
        this.getPageData()
    }
    getPageData(){
        AppDispatcher.dispatch({
            action: 'get-page-data',
            page_slug: 'Home'
		})
    }
    render(){
        const data = AppStore.data
        const page = data.page
        const slider_photos = page.components[1].fields.siteComponentPhotos.map((component) => component.fields.file.url)
        const about_component_text = page.components[0].fields.content
        const about_component_images = page.components[0].fields.siteComponentPhotos.map((photo) => photo.fields.file.url)
        const photos_html = slider_photos.map((photo_url) => {
            return <img className="img-responsive" src={photo_url} alt=""/>
        })
        const options = {
            items: 1,
            nav: true,
			navText : ["<i class='fa fa-lg fa-chevron-left'></i>","<i class='fa fa-lg fa-chevron-right'></i>"],
			dots: false,
            lazyLoad: true,
            autoplay: true,
            loop: true
        }

        const events = {
            onDragged: function(event) {
                
            },
            onChanged: function(event) {
                
            }
        }

        return (
            <div>
                  <div className="container">
                        <div className="slider-wrapper">
                            <div className="slider-description">
                                <div className="slider-description-inner">
                                    <h1>Selah<span>Lash</span></h1>
                                </div>
                                <div className="cd-intro">
                                    <div className="cd-headline clip">
                                        <span className="cd-words-wrapper">
                                            <b className="is-visible">Beauty here</b>
                                            <b className="">Beauty there</b>
                                            <b className="">Beauty everywhere</b>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <OwlCarousel id="slider-ef" ref="owl" options={options} events={events}>
                            {slider_photos.map((photo_url) => {
                                    return (
                                        <div className="main-slider-image-wrap">
                                            <img className="main-slider-image" src={photo_url} alt=""/>
                                        </div>
                                    )
                                })}
                            </OwlCarousel>
                        </div>
                    </div>
                    <div className="container margin-top">
                        <div className="history-wrapper">
                            <div className="col-md-6 wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.5s">
                                <div className="row">
                                    <article>
                                        <h1>About Saleh</h1>
                                        <p>{about_component_text}</p>
                                    </article>
                                </div>
                            </div>
                            <div className="col-md-5 col-md-offset-1 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                                <div className="row">
                                    <OwlCarousel id="history-images" className="owl-carousel owl-theme" ref="owl" options={options} events={events}>
                                            {about_component_images.map((photo_url) => {
                                                return (
                                                    
                                                        <div className="about_slider_img">
                                                            <img className="img-responsive center-block" src={photo_url} alt="About"/>
                                                        </div>
                                                    
                                                    ) 
                                            })}
                                    </OwlCarousel>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}