import React from 'react'
import Book from './component/Book.jsx/Book'
import Header from './component/Book.jsx/Header'
import footer from './component/Book.jsx/footer'

const App = () => {
  return (
    <div>
      <Header></Header>
      <div className = "linear">
      <Book/>
       <Book/>
        <Book/></div>
        <footer></footer>
    </div>
  )
}

export default App
