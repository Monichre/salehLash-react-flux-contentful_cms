import React, { Component } from 'react'

export default class Footer extends Component {
    render(){
        return (
            <div>
                <div className="footer margin-top">
                        <div className="container">
                            <div className="row">
                                    <div className="col-md-2 col-sm-4 col-xs-12">
                                        <div className="footer-inner">
                                            <div className="footer-content">
                                                <h4>Saleh Lash</h4>
                                                    <address>City 35 AM <br/>Street 1395 p.n <br/> Your Address</address>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-2 col-md-push-8 col-sm-4 col-xs-12">
                                        <div className="footer-inner">
                                            <div className="footer-content">
                                            <h4>CONTACT INFO</h4>
                                                <p>
                                                    T:003 124 115 <br/>
                                                    E:info@mail.com <br/>
                                                    W:www.website.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4 col-sm-4 col-xs-12">
                                        <div className="footer-inner">
                                            <div className="footer-content">
                                            <ul className="social-media">
                                               
                                            </ul>
                                            <span className="copyright-mark">© 2017 Saleh Lash, ALL RIGHTS RESERVED</span>
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