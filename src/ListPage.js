import React, { Component } from "react";
import { Link } from 'react-router-dom'
import BookShelf from "./BookShelf";

class ListPage extends Component {
    render(){
        const { books, updateBook } = this.props
        return(
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            <BookShelf 
                                title="Currently Reading" 
                                updateBook={updateBook}
                                books={books.filter(book=>(book.shelf==="currentlyReading"))}>
                            </BookShelf>
                            <BookShelf 
                                title="Want to Read" 
                                updateBook={updateBook}
                                books={books.filter(book => (book.shelf ==="wantToRead"))}>
                            </BookShelf>
                            <BookShelf 
                                title="Read" 
                                updateBook={updateBook}
                                books={books.filter(book => (book.shelf ==="read"))}>
                            </BookShelf>
                        </div>
                    </div>
                    <div className="open-search">
                        <Link
                            to="/search">Add a book</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListPage