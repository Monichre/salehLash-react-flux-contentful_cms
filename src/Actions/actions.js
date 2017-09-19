// actions.js

import Cosmic from 'cosmicjs'
import _ from 'lodash'

// AppStore
import AppStore from '../Stores/AppStore'
var config = require('../config').config

export function getStore(callback) {

    let pages = {}

    Cosmic.getObjects(config, function(err, response) {

        let objects = response.objects

        /* Globals
        ======================== */
        let globals = AppStore.data.globals
        


        // globals.text.menu_title = menu_title.value

        // let footer_text = _.find(metafields, {
        //     key: 'footer-text'
        // })
        // globals.text.footer_text = footer_text.value

        // let site_title = _.find(metafields, {
        //     key: 'site-title'
        // })
        // globals.text.site_title = site_title.value

        // // Social
        // globals.social = response.object['social']
        // metafields = globals.social.metafields
        // let twitter = _.find(metafields, {
        //     key: 'twitter'
        // })
        // globals.social.twitter = twitter.value
        // let facebook = _.find(metafields, {
        //     key: 'facebook'
        // })
        // globals.social.facebook = facebook.value
        // let github = _.find(metafields, {
        //     key: 'github'
        // })
        // globals.social.github = github.value

        // Nav
        const nav_items = response.object['navigation'].metafields
        console.log(nav_items)

        globals.nav_items = nav_items

        AppStore.data.globals = globals

        /* Pages
        ======================== */
        let pages = objects.type.page
        AppStore.data.pages = pages

       

        
        // Emit change
        AppStore.data.ready = true
        AppStore.emitChange()

        // Trigger callback (from server)
        if (callback) {
            callback(false, AppStore)
        }

    })
}

export function getPageData(page_slug, post_slug) {

    if (!page_slug)
        page_slug = 'home'

    // Get page info
    const data = AppStore.data
    const pages = data.pages
    const page = _.find(pages, {
        slug: page_slug
    })

	console.log(AppStore.data)
    AppStore.data.page = page
    AppStore.emitChange()
}

