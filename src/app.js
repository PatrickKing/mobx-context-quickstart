import ReactDOM from 'react-dom/client'

import ReactRoot from './react_root.jsx'
import MakeStore from './store.js'
import StoreContext from './context.js'

const store = MakeStore()

const container = document.getElementById('react-root')
const root = ReactDOM.createRoot(container)
root.render(<StoreContext.Provider value={store}>
  <ReactRoot/>
</StoreContext.Provider>)

