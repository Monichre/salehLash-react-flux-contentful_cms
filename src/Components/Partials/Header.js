import React, { Component } from 'react'
import AppStore from '../../Stores/AppStore'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        
    }
    render() {

        const LOGO = AppStore.data.logo[0].fields.photo.fields.file.url
        const logo_style = {
            height: '75px',
            display: 'inline',
            marginRight: '10px'

        }
        const social_nav_style = {
            textAlign: 'right',
            marginTop: '10px'
        }
        const link_style = {
            margin: '0 10px'
        }
        const icon_style = {
            height: '15px',
            width: '15px'
        }
        

        return (
            
            
                <div className="header">
                    <div id="upperNav">
                        <div className="logo">
                           <img src={LOGO} alt="" style={logo_style} />
                           <span className="logo_title">Selah Lash & Co</span>
                        </div>
                        <ul className="inline-list list-inline social_nav" style={social_nav_style}>
                            <li><a href="" style={link_style}><img src="icons/facebook.svg" style={icon_style} alt=""/></a></li>
                            <li><a href="" style={link_style}><img src="icons/instagram.svg" style={icon_style} alt=""/></a></li>
                            <li><a href="" style={link_style}><img src="icons/mail.svg" style={icon_style} alt=""/></a></li>
                        </ul>
                    </div>
                    <div className="container">
                       
                        <ul id="Nav" className="inline-list list-inline">
                            <li className="">
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about'>About Selah</Link>
                            </li>
                            <li className="">
                                <Link to='/portfolio'>Portfolio</Link>
                            </li>
                            <li className="">
                                <Link to='/beauty'>Beauty Tips</Link>
                            </li>
                            <li className="">
                                <Link to='/faq'>FAQ</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
           

                )
    }
}