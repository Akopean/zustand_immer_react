import useStore from './store/Index'
import './App.css'

function Bears() {

  const bears = useStore((state) =>  state.bears)
  const addBear = useStore((state) =>  state.addBear)
  console.log("🚀 ~ file: App.tsx:9 ~ App ~ clear", bears)

  return (
        <button onClick={() => { addBear()}}>
          bears is {bears}
        </button>
  )
}

export default Bears
