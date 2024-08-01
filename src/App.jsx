import {Routes,Route} from 'react-router-dom'
import Home from './component/Home'
export default function App() {
  return (
   <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
   </>
  )
}