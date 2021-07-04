import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'


import Login from './pages/Login'
import AdminIndex from './pages/AdminIndex'

export default function App() {

    return (
        <div>
            <BrowserRouter>
                <Route path='/' component={Login} />
                {/* <Route path='/' exact component={Login} /> */}
                <Route path='/index' component = {AdminIndex} />
            </BrowserRouter>
        </div>
    )
}
