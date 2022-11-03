import React, { createContext, useState } from 'react'
// import ProductsAPI from './api/ProductsAPI'
import UserAPI from './api/userAPI'
// import CategoriesAPI from './api/CategoriesAPI'

import axios from 'axios'

export const GlobalState = createContext()


export const DataProvider = ({ children }) => {

    return (
        <GlobalState.Provider value={"value in Global"}>
            {children}
        </GlobalState.Provider>
    )
}