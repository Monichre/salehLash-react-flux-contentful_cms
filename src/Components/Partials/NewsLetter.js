import React, {Component} from 'react'

export default className NewsLetter extends Component {
    render() {
        <div className="container margin-top">
        <div className="newsletter">
            <div className="col-md-6">
                <div className="row">
                    <div className="newsletter-left">
                        <div className="newsletter-left-inner">
                            <h1>STAY INFORMED <br> WITH OUR <b>NEWSLETTER</b></h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="row">
                    <div className="newsletter-right" style="background: url(img/newsletter-bg.jpg)">
                        <div className="newsletter-right-inner">
                            <form>
                                <input type="text" name="newsletter" placeholder="ENTER YOUR EMAIL"/>
                                <input type="submit" value="SUBSCRIBE"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    }
}