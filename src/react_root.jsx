import { observer } from "mobx-react-lite"
import { useContext } from 'react'

import StoreContext from './context.js'

const ReactRoot = () => {
  const store = useContext(StoreContext)

  return <p>{store.foo}</p>
}


export default observer(ReactRoot)