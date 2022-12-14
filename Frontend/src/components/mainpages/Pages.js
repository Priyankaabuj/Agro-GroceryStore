import React from 'react'
import { Routes, Route } from 'react-router-dom'
import mainCategories from '../mainpages/mainCategories/mainCategories'
import Products from '../mainpages/products/Products'
import Login from './auth/Login'
import Register from './auth/Register'
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'

function Pages() {
    return (
        <Routes>
            <Route path="/" exact component={Products} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/cart" exact component={Cart} />
            <Route path="*" exact component={NotFound} />
            {/* <Route path="/category" exact component={mainCategories} /> */}
        </Routes>
    )
}

export default Pages