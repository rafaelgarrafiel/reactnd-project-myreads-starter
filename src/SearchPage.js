import React, { Component } from "react";
import {Link} from 'react-router-dom'
import Book from "./Book";

class SearchPage extends Component {
    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
        this.props.searchBook(query)
    } 

    render(){
        const { updateBook, showningBooks } = this.props
        const { query } = this.state

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
                                        <Book book={book} updateBook={updateBook}></Book>
                                    </li>
                                ))}
                            </ol>
                        )}
                        {showningBooks.length === 0 && query && (
                            <div className="search-books-results">
                                <span>Exibindo {showningBooks.length} Livros</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchPage