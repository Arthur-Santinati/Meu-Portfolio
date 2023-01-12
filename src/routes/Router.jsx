import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from '../screens/Home/index'
// import { Careers } from '../screens/Careers/index'
// import { Blog } from '../screens/Blog/index'
// import { Login } from '../screens/Login'
// import { Dashboard } from '../screens/Dashboard'
// import { SignUp } from '../screens/SignUp'
// import { CreatePassword } from '../components/CreatePassword'
// import { ForgotPassword } from '../components/ForgotPassword'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                {/* <Route exact path='/careers' element={<Careers />} /> */}
                {/* <Route exact path='/blog' element={<Blog/>} />  */}
                {/* <Route exact path='/login' element={<Login/>} />  */}
                {/* <Route exact path='/dashboard' element={<Dashboard/>} />  */}
                {/* <Route exact path='/signup' element={<SignUp/>} />  */}
                {/* <Route exact path='/signup/create-password' element={<CreatePassword/>} />  */}
                {/* <Route exact path='/login/forgot-password' element={<ForgotPassword/>} /> */}
            </Routes>
        </BrowserRouter>
    )
}