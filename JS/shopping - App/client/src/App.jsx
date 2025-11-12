import React from 'react'
import {BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter></BrowserRouter>
      <Routes>
        <Route path = '/' element = {<h1> Home page </h1>}/>
        <Route path = '/about' element = {<h1> About page </h1>}/>
        <Route path = '/contact' element = {<h1> Contact page </h1>}/>
        <Route path = '/login' element = {<h1> Login page </h1>}/>
        <Route path = '/Register' element = {<h1> Register page </h1>}/>
        <Route path = '/cart' element = {<h1> Cart page </h1>}/>
      </Routes>
      
    </div>
  )
}

export default App
