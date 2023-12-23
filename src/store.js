import { makeAutoObservable } from "mobx"

const MakeStore = () => {

  return makeAutoObservable({
    foo: 'bar',
  })

}

export default MakeStore
