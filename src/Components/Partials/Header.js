import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props){
        super(props)

        const navigationRight = document.querySelector('menu-wrap')
        const bodyEl = document.body
        const content = document.querySelector('#close-button')
        const openbtn = document.getElementById('open-button')
        const closebtn = document.getElementById('close-button')
        const isOpen = false
    }
    // escape(elem, callback) {
    //     return elem.each(function() {
    //         document.on("keydown", this, function(e) {
    //             let keycode = ((typeof e.keyCode != 'undefined' && e.keyCode) ? e.keyCode : e.which);
    //             if (keycode === 27) {
    //                 callback.call(elem, e);
    //             }
    //         })
    //     })
    // }
    // init() {
    //     this.initEvents()
    // }
    // initEvents() {
    //     if (this.openbtn) {
    //         this.openbtn.addEventListener('click', this.toggleMenu())
    //     }
    //     if (this.closebtn) {
    //         this.closebtn.addEventListener('click', this.toggleMenu())
    //     }

    //     this.content.addEventListener('click', function(ev) {
    //         var target = ev.target;
    //         if (this.isOpen && target !== this.openbtn) {
    //             this.toggleMenu()
    //         }
    //     })
    // }
    // toggleMenu() {
    //     if (this.isOpen) {
    //         this.bodyEl.classList.remove('show-menu')
    //     } else {
    //         this.bodyEl.classList.add('show-menu')
    //     }
    //     this.isOpen = !this.isOpen
    // }
    
    
    //  navigation() {
             
    //     this.navigationRight.escape(function() {
    //         if (this.isOpen) {
    //             this.bodyEl.classList.remove('show-menu')
    //             this.openbtn.classList.remove('active')
    //         }
    //         this.isOpen = !this.isOpen
    //     })
    
    // }
    componentDidMount(){
        // this.init()
    }
    render() {
        return (
            
            
                <div className="header">
                    <div className="container">
                        <div className="logo">
                            <a href="index.html" className="site-title">
                                Selah <span>Lash</span>
                            </a>
                        </div>

                        <ul id="Nav" className="inline-list list-inline">
                            <li className=""><a href="#">Home</a>
                                
                            </li>
                            <li><a href="#">About Selah</a></li>
                            <li className=""><a href="#">Portfolio</a>
                            </li>
                            <li className=""><a href="#">Beauty Tips</a></li>
                            <li className=""><a href="#">FAQ</a>
                            
                            </li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
           

                )
    }
}