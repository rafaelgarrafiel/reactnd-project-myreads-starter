import React, { Component } from "react";
import {Link} from 'react-router-dom'
import { Debounce } from 'react-throttle';
import Book from "./Book";

class SearchPage extends Component {
    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
        this.props.searchBook(query)
    }

    verifyBook = (searchedBook) => {
        const findedBook = this.props.books.find(book=>book.id===searchedBook.id)
        findedBook ? searchedBook.shelf = findedBook.shelf : searchedBook.shelf = 'none'
        return searchedBook
    }

    render(){
        const { updateBook, showingBooks } = this.props
        const { query } = this.state

        return(
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/" className="close-search">Close</Link>
                        <div className="search-books-input-wrapper">
                            <Debounce time="400" handler="onChange">
                                <input 
                                    type="text" 
                                    placeholder="Search by title or author" 
                                    onChange={(event) => this.updateQuery(event.target.value)}/>
                            </Debounce>
                        </div>
                    </div>
                    <div className="search-books-results">
                        {query && (
                            <ol className="books-grid">
                                {showingBooks.map( book => {
                                    this.verifyBook(book)
                                    return(
                                        <li key={book.id}>
                                            <Book book={book} updateBook={updateBook}></Book>
                                        </li>
                                    )
                                })}
                            </ol>
                        )}
                        {showingBooks.length === 0 && query && (
                            <div className="search-books-results">
                                <span>Exibindo {showingBooks.length} Livros</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchPage