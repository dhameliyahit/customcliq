import {Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import {Toaster} from 'react-hot-toast'
import NotFound from './component/NotFound'

export default function App() {
  return (
   <>
    <Toaster/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/*' element={<NotFound/>}></Route>
    </Routes>
   </>
  )
}