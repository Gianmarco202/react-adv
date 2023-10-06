import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom"
import logo from "../logo.svg"

import { routes } from "./router"
import { Suspense } from "react"
//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages"


export const Navigation = () => {
  return (
    
    <Suspense fallback={ <span>Loading... </span>} > 

      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="react"/>
            <ul>
              {
                routes.map( route  =>(
                  <li>
                    <NavLink
                      key={route.to}
                      to={route.path} 
                      className={({isActive}) => isActive ? 'nav-active' : ''}>
                      {route.name}</NavLink>
                  </li>
                
                ))
              }
              
            </ul>
          </nav>  

          <Routes>
            {
              routes.map( route => (
                <Route 
                key={route.path}
                path={route.path} 
                element={<route.Component/>}/>
                ))
              }
            
            <Route path="/*" element={<Navigate to={routes[0].to} replace/>}/>
          </Routes>

        </div>
      </BrowserRouter>
    </Suspense>
    
  )
}
