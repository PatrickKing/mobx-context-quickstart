import { observable } from "mobx"

const MakeStore = () => {

  return observable({
    foo: 'bar',
  })

}

export default MakeStore
