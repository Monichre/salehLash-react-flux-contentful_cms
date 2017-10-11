import React, { Component } from 'react'
import AppDispatcher from '../../Dispatcher/AppDispatcher'
import AppStore from '../../Stores/AppStore'
import ReactMarkdown from 'react-markdown'



export default class Beauty extends Component {
    componentDidMount() {

    }
    componentWillMount() {
        this.getPageData()
    }
    getPageData() {
        AppDispatcher.dispatch({
            action: 'get-page-data',
            page_slug: 'Beauty Tips'
        })
    }
    render() {
        const page = AppStore.data.page
        console.log(page)
        
        const title = page.fields.pageTitle
        const subTitle = page.fields.subTitle
        const content = page.fields.pageContent
        const quote = page.fields.quote
        const image = page.fields.mainImage.fields.file.url
        const image2 = page.fields.photos[0].fields.file.url
        const header_style = {
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }
        const image2_style = {
            height: '100%',
            width: '100%'

        }
        const icon_style = {
            height: '15px',
            width: '15px',
            color: '#fff'
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
                    <div className="single-blog-wrapper">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="quote">
                                    <ReactMarkdown source={quote} className="quote"/>
                                </div>
                                
                            </div>
                        </div>
                        <div className="blog-post">
                            <div className="blog-front-image">
                                <div className="row">
                                    <div className="col-md-6 wow animated fadeInUp" data-wow-delay="0.10s">
                                        <img src={image2} alt="Blog Image" style={image2_style} />
                                    </div>
                                    <div className="col-md-5 col-md-offset-1">
                                        <div className="blog-front-content wow animated fadeInUp" data-wow-delay="0.20s">
                                            <div className="blog-front-content-inner">
                                            <span className="post-single-date">14 Jun - 2015</span>
                                            <div className="share-buttons">
                                                <span className="info-title">Share:</span>   
                                                <ul>
                                                    <li><a href="#"><img style={icon_style} src="icons/facebook.svg" alt="" /></a></li>
                                                    <li><a href="#"><img style={icon_style} src="icons/instagram.svg" alt="" /></a></li>
                                                    <li><a href="#"><img style={icon_style} src="icons/mail.svg" alt="" /></a></li>
                                                </ul>
                                            </div>                               
                                            <div className="blog-tags">
                                                <span className="info-title">Tags:</span>   
                                                <ul>
                                                    <li><a href="#">clean</a></li>
                                                    <li><a href="#">modern</a></li>
                                                    <li><a href="#">beauty</a></li>
                                                    <li><a href="#">fashion</a></li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="full-blog-content">
                                    <ReactMarkdown source={content} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}