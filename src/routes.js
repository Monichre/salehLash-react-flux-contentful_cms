// routes.js
import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

// Store
import AppDispatcher from './Dispatcher/AppDispatcher'
import AppStore from './Stores/AppStore'

// Pages
import App from './App'
import Home from './Components/Pages/Home'
import Portfolio from './Components/Pages/Portfolio'
import About from './Components/Pages/About'
import FAQ from './Components/Pages/FAQ'
import Beauty from './Components/Pages/Beauty'
import Contact from './Components/Pages/Contact'

let routes_with_sub = [
    {
        path: '/',
		exact: true,
        component: Home
    }, {
        path: '/about',
		exact: true,
        component: About
    },
	{
		path: '/portfolio',
		component: Portfolio
    },
    {
        path: '/beauty',
		exact: true,
        component: Beauty
    },
	{
        path: '/faq',
		exact: true,
        component: FAQ
    },
	{
		path: '/contact',
		component: Contact
    }
]

export default (
    
        <div>
            {routes_with_sub.map((route, i) => (
                <Route exact path={route.path} render={(props) => (
                    <route.component key={i} data={AppStore.data} {...props} />
                    )}
                />
            ))}
        </div>
    )
       