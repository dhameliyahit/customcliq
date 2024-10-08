import {Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import {Toaster} from 'react-hot-toast'
import NotFound from './component/NotFound'
import { Admin } from './component/admin/Admin'
import LoginForm from './component/admin/LoginForm'

export default function App() {
  return (
   <>
    <Toaster/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/admin/login' element={<LoginForm/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/*' element={<NotFound/>}></Route>
    </Routes>
   </>
  )
}