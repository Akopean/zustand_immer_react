import useStore from './store/Index'
import './App.css'

function Counter() {

  const count = useStore((state) =>  state.cart)
  const increase = useStore((state) =>  state.increase)
  console.log("🚀 ~ file: App.tsx:9 ~ App ~ clear", count)

  return (
        <button onClick={() => { increase(1)}}>
          count is {count}
        </button>
  )
}

export default Counter
