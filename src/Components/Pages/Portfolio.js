import React, { Component } from 'react'
import AppDispatcher from '../../Dispatcher/AppDispatcher'
import AppStore from '../../Stores/AppStore'
import ReactMarkdown from 'react-markdown'

export default class Portfolio extends Component {
    componentDidMount() {

    }
    componentWillMount() {
        this.getPageData()
    }
    getPageData() {
        AppDispatcher.dispatch({
            action: 'get-page-data',
            page_slug: 'Portfolio'
        })
    }
    render(){
        const page = AppStore.data.page
        console.log(page)
        const title = page.fields.pageTitle
        const subTitle = page.fields.subTitle
        const photos = page.fields.photos
        const image = page.fields.mainImage.fields.file.url
        const header_style = {
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }
        return (
            <div>
                
                    <div className="container">
                        <div className="header-page ef-parallax-bg" style={header_style}>
                            <div className="col-md-6 col-md-offset-6">
                                <div className="row">
                                    <div className="inner-content">
                                        <div className="header-content">
                                            <h1>{title}</h1>
                                            <hr/>
                                            <p>{subTitle}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container margin-top">
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
                                <a href="javascript:void(0)" className="filter" data-filter="branding">Branding</a>
                                <a href="javascript:void(0)" className="filter" data-filter="web">Web Design</a>
                                <a href="javascript:void(0)" className="filter" data-filter="graphic">Graphic Design</a>
                            </div>
                            <div className="js-masonry">
                                <div className="row" id="work-grid">
                                    {photos.map(photo => {
                                        return (
                                            <div className="col-md-4 col-sm-4 col-xs-12 mix branding">
                                                <div className="img home-portfolio-image">
                                                    <img src={photo.fields.file.url} alt="Portfolio Item" />
                                                    <div className="overlay-thumb">
                                                        <a href="javascript:void(0)" className="like-product">
                                                            <i className="ion-ios-heart-outline"></i>
                                                            <span className="like-product">Liked</span>
                                                            <span className="output">250</span>
                                                        </a>
                                                        <div className="details">
                                                            <span className="title">STYLE FASHION</span>
                                                            <span className="info">NEW BAG & STYLE FASHION</span>
                                                        </div>
                                                        <span className="btnBefore"></span>
                                                        <span className="btnAfter"></span>
                                                        <a className="main-portfolio-link" href="single-project.html"></a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    
                                </div>
                            </div>
                            <div className="load-more">
                                <a href="javascript:void(0)" id="load-more"><i className="icon-refresh"></i></a>
                            </div>
                        </div>
                    </div>
                    
            </div>
        )
    }
}