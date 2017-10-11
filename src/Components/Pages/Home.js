import React, { Component } from 'react'
import AppDispatcher from '../../Dispatcher/AppDispatcher'
import AppStore from '../../Stores/AppStore'

import OwlCarousel from 'react-owl-carousel2'
import Masonry from 'react-masonry-component'

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
        const slider_photos = page.Main.fields.siteComponentPhotos.map((component) => component.fields.file.url)
        const about_component_text = page.About.fields.content
        const about_component_images = page.About.fields.siteComponentPhotos.map((photo) => photo.fields.file.url)
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
        const heart_style = {
            padding: '5px',
            margin: 0
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
                    <div className="container margin-top">
                        <div className="main-title">
                            <h1>Our Philosophy</h1>
                            <hr/>
                            <h6>qui dolorem ipsum quia dolor sit amet</h6>
                        </div>
                        <div className="services-home-page">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="services-icon">
                                        <img src="img/icons/girl.svg" alt="" height="30px;"/>
                                        
                                    </div>
                                    <h4>Beauty</h4>
                                    <p>Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because procure him.</p>
                                </div>
                                <div className="col-md-4">
                                    <div className="services-icon">
                                        <img src="img/icons/cosmetics.svg" alt="" height="30px;"/>
                                        
                                    </div>
                                    <h4>Leisure</h4>
                                    <p>Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because procure him.</p>
                                </div>
                                <div className="col-md-4">
                                    <div className="services-icon">
                                        <img src="img/icons/shampoo.svg" alt="" height="30px;"/>
                                        
                                    </div>
                                    <h4>Relaxation</h4>
                                    <p>Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because procure him.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container margin-top">
                        <div className="main-title">
                            <h1>{page.Gallery.fields.title}</h1>
                            <hr/>
                            <h5>{page.Gallery.fields.subHeader}</h5>
                        </div>
                        <div className="portfolio-wrapper">
                            <button className="nav">
                                <span className="icon-container">
                                    <span className="line line01"></span>
                                    <span className="line line02"></span>
                                    <span className="line line03"></span>
                                    <span className="line line04"></span>
                                </span>
                            </button>
                            <div className="works-filter">
                                <a href="javascript:void(0)" className="filter active" data-filter="mix">All</a>
                                <a href="javascript:void(0)" className="filter" data-filter="branding">Lashes</a>
                                <a href="javascript:void(0)" className="filter" data-filter="web">Facials</a>
                                <a href="javascript:void(0)" className="filter" data-filter="graphic">Buttholes</a>
                            </div>
                            <div className="js-masonry">
                                
                                        <Masonry
                                            className={"row"} 
                                            id={"work-grid"}>
                                            
                                            {page.Gallery.fields.siteComponentPhotos.map((portfolio_item) => {
                                                
                                                    return (
                                                        <div className="col-md-4 col-sm-4 col-xs-12 mix branding">
                                                            <div className="img home-portfolio-image">
                                                                <img className="heart_icon" src={portfolio_item.fields.file.url} alt="Portfolio Item"/>
                                                                <div className="overlay-thumb">
                                                                    <a href="javascript:void(0)" className="like-product">
                                                                        <img src='icons/heart.svg' alt="Heart Icon"/>
                                                                        <span className="like-product">Liked</span>
                                                                        <span className="output">250</span>
                                                                    </a>
                                                                    <div className="details">
                                                                        <span className="title">Saleh Lash</span>
                                                                        <span className="info">NEW LOOK & Saleh Lash</span>
                                                                    </div>
                                                                    <span className="btnBefore"></span>
                                                                    <span className="btnAfter"></span>
                                                                    <a className="main-portfolio-link" href="single-project.html"></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )    
                                                })}
                                        </Masonry>          
                                </div>
                        
                            <div className="load-more">
                                <a href="javascript:void(0)" id="load-more"><img src='icons/arrow-up.svg' alt="Arrow Up Icon"/></a>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}