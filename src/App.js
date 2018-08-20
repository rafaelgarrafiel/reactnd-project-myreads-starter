import React from 'react'
import { Route } from "react-router-dom"
import ListPage from "./ListPage";
import SearchPage from "./SearchPage";
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }


  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/" exact render={() => (
          <ListPage 
            books={this.state.books}
            updateBook={this.updateBook}/>
        )} />
        <Route path="/search" render={()=>(
          <SearchPage/>
        )} />
      </div>
    )
  }
}

export default BooksApp
