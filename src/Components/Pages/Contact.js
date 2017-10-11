import React, { Component } from 'react'
import AppDispatcher from '../../Dispatcher/AppDispatcher'
import AppStore from '../../Stores/AppStore'
import ReactMarkdown from 'react-markdown'

export default class Contact extends Component {
    componentWillMount(){

        this.getPageData()
    }
    getPageData() {
        AppDispatcher.dispatch({
            action: 'get-page-data',
            page_slug: 'Contact'
        })
    }

    render(){
        const page = AppStore.data.page
        
        const title = page.fields.pageTitle
        const subTitle = page.fields.subTitle
        
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
                    <div className="contact-wrapper">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="contact-info">
                                    <span className="icon-info">
                                    <i className="pe-7s-phone"></i>
                                </span>
                                    <span className="title-info">CALL US:</span>
                                    <span className="description-info">+001 123 222</span>
                                </div>

                                <div className="contact-info">
                                    <span className="icon-info">
                                    <i className="pe-7s-map-marker"></i>
                                </span>
                                    <span className="title-info">ADDRESS:</span>
                                    <span className="description-info">Street 23, CITY p.n 300 Canada</span>
                                </div>

                                <div className="contact-info">
                                    <span className="icon-info">
                                    <i className="pe-7s-mail"></i>
                                </span>
                                    <span className="title-info">EMAIL:</span>
                                    <span className="description-info">info@gmail.com</span>
                                </div>
                            </div>

                            <form method="GET">
                                <div className="contact-form">

                                    <div className="col-md-4">
                                        <input type="text" placeholder="NAME *" />
                                        <input type="text" placeholder="E-MAIL *" />
                                        <input type="text" placeholder="SUBJECT" />
                                    </div>
                                    <div className="col-md-5">
                                        <textarea placeholder="MESSAGE"></textarea>
                                        <input type="submit" value="SEND" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}