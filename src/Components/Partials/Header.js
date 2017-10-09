import React, { Component } from 'react'
import AppStore from '../../Stores/AppStore'

export default class Header extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        
    }
    render() {

        const LOGO = AppStore.data.logo[0].fields.photo.fields.file.url
        const logo_style = {
            height: '100px',
            marginBottom: '20px',
            marginTop: '20px'
        }
        console.log(AppStore.data.logo)

        return (
            
            
                <div className="header">
                    <div className="container">
                        <div className="logo">
                           <img src={LOGO} alt="" style={logo_style} />
                        </div>

                        <ul id="Nav" className="inline-list list-inline">
                            <li className="">
                                <a href="#">Home</a>    
                            </li>
                            <li>
                                <a href="#">About Selah</a>
                            </li>
                            <li className="">
                                <a href="#">Portfolio</a>
                            </li>
                            <li className="">
                                <a href="#">Beauty Tips</a></li>
                            <li className="">
                                <a href="#">FAQ</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
           

                )
    }
}