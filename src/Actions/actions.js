// actions.js

import * as Contentful from 'contentful'
import _ from 'lodash'

// AppStore
import AppStore from '../Stores/AppStore'
var config = require('../config').config

export function getStore(callback) {

    let pages = {}

    const cms_client = Contentful.createClient({
        space: config.auth.space,
        accessToken: config.auth.accessToken
    })
    cms_client.getEntries()
        .then((response) => {
            console.log(response)
            let response_items = response.items

            let pages = _.filter(response_items, (item) => item.sys.contentType.sys.id === 'page')
            let site_components = _.filter(response_items, (item) => item.sys.contentType.sys.id === 'siteComponent')

            console.log(pages)
            console.log(site_components)

            AppStore.data.pages = pages
            AppStore.data.site_components = site_components

            AppStore.data.ready = true
            AppStore.emitChange()
    
            // Trigger callback (from server)
            if (callback) {
                callback(false, AppStore)
            }
        })
}

export function getPageData(page_slug, post_slug) {
    const isForThisPage = (page_slug, component) => component.fields.page.fields.pageTitle === page_slug

    if (!page_slug) {
        page_slug = 'Home'
    }
    // Get page info
    console.log(page_slug)
    const data = AppStore.data
    const pages = data.pages
    console.log(data)
    
    const page = _.find(pages, (p) => p.fields.pageTitle === page_slug)
    
    page.components = _.filter(data.site_components, (component) => isForThisPage(page_slug, component))
    page.components.forEach(function(component){
        page[`${component.fields.siteComponentTitle.split(' ')[0]}`] = component
    }) 
    console.log(page)

	console.log(AppStore.data)
    AppStore.data.page = page
    AppStore.emitChange()
}

