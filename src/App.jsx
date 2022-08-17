import { Provider } from 'react-redux'
import store from './modules'
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Provider store={store}></Provider>
    </Routes>
  )
}

export default App
