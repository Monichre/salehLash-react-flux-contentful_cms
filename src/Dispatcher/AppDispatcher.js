// AppDispatcher.js
import { Dispatcher } from 'flux'
import { getStore, getPageData } from '../Actions/actions'

const AppDispatcher = new Dispatcher()

// Register callback with AppDispatcher
AppDispatcher.register((payload) => {

  let action = payload.action

  switch(action) {

    case 'get-app-store':
      getStore()
      break

    case 'get-page-data':
      getPageData(payload.page_slug, payload.post_slug)
      break

    default:
      return true

  }

  return true

})

export default AppDispatcher
