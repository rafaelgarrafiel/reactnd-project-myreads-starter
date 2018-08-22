import React from 'react'
import { Route } from "react-router-dom"
import ListPage from "./ListPage";
import SearchPage from "./SearchPage";
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
    state = {
        books: [],
        showingBooks: []
    }
    // componentDidMount() {
    //     BooksAPI.getAll().then((books) => {
    //         this.setState({ books })
    //     })
    // }
    async componentDidMount() {
        const books = await BooksAPI.getAll()
        this.setState({ books })
    }


    updateBook = (book, shelf) => {
        BooksAPI.update(book, shelf).then((data) => {
            const updatedBook = {
                ...book,
                shelf
            }
            this.setState(state => ({
                books: state.books.filter(b => b.id !== updatedBook.id).concat([updatedBook])
            }))
        })
    }

    

    searchBook = (query) => {
        if (query) {
            BooksAPI.search(query).then((showingBooks) => {

                if (showingBooks && showingBooks.error) {
                    this.setState({ showingBooks: []})
                } else {
                    this.setState(state => ({
                        showingBooks: showingBooks
                    }))
                }
            })
        }
    }

    render() {
        return (
            <div className="app">
            <Route path="/" exact render={() => (
                <ListPage 
                updateBook={this.updateBook}
                books={this.state.books}
                />
                )} />
            <Route path="/search" render={({history})=>(
                <SearchPage 
                books={this.state.books}
                showingBooks={this.state.showingBooks}
                updateBook={this.updateBook}
                searchBook={this.searchBook}
                />
                )} />
            </div>
            )
    }
}

export default BooksApp
