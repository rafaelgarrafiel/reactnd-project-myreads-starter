import React, { Component } from "react";
import {Link} from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import Book from "./Book";
// import sortyBy from 'sort-by'

class SearchPage extends Component {
    state = {
        query: ''
    }
    
    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }

    render(){
        const { books } = this.props
        const { query } = this.state
        let showningBooks
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            showningBooks = books.filter((book) => match.test(book.title))
        } else {
            showningBooks = books
        }
        console.log(showningBooks)

        return(
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/" className="close-search">Close</Link>
                        <div className="search-books-input-wrapper">
                            <input 
                                type="text" 
                                placeholder="Search by title or author" 
                                onChange={(event) => this.updateQuery(event.target.value)}/>
                        </div>
                    </div>
                    <div className="search-books-results">
                        {query && (
                            <ol className="books-grid">
                                {showningBooks.map((book) => (
                                    <li key={book.id}>
                                        <Book book={book} updateBook={this.props.updateBook}></Book>
                                    </li>
                                ))}
                            </ol>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchPage