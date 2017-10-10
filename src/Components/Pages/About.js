import React, { Component } from 'react'
import AppDispatcher from '../../Dispatcher/AppDispatcher'
import AppStore from '../../Stores/AppStore'
import ReactMarkdown from 'react-markdown'

// style="background-image:url(img/about-header.jpg)">
// style="font-size: 18px; line-height: 26px;"
// style="background: url(img/our-story.jpg) no-repeat" 


export default class About extends Component {
    componentDidMount() {

    }
    componentWillMount() {
        this.getPageData()
    }
    getPageData() {
        AppDispatcher.dispatch({
            action: 'get-page-data',
            page_slug: 'About'
        })
    }
    render() {
        const page = AppStore.data.page
        console.log(page)
        const title = page.fields.pageTitle
        const subTitle = page.fields.subTitle
        const content = page.fields.pageContent
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
                                        <hr />
                                        <p>{subTitle}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container margin-top">
                    <div className="main-title near-content">
                        <h1>WELCOME TO SELAH LASH</h1>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <p >Who loves or pursues or desires to <b>DESIGN</b> pain of itself,but because and occasionally circumstances occur pain can procure him some great easure of the past.</p>
                        </div>
                        <div className="col-md-4">
                            <p>THE CREATIVE qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima quis nostrum exercitationem ullam corporis suscipit aliquid.</p>
                        </div>
                        <div className="col-md-4">
                            <p><strong>WEB DESIGN</strong> qui dolorem ipsum quia dolor sit amet, MINIMALISM adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam</p>
                        </div>
                    </div> 
                </div>

                <div className="container margin-top">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="our-story wow fadeInUp" style={header_style} data-wow-duration="0.5s" data-wow-delay="0.2s">
                                <div className="col-md-6 col-md-offset-6">
                                    <div className="our-story-content wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.5s">
                                        <div className="our-story-content-inner">
                                            <h1>OUR STORY</h1>
                                            <hr />
                                            <p>
                                                Great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally
                                                        encounter consequences that are extremely painful. <br />
                                                Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example.
                                                    </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            
            </div>
        )
    }
}