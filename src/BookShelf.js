import React, { Component } from "react";
import Book from "./Book";

class BookShelf extends Component {

    render(){
        const {title, books, updateBook} = this.props
        return(
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{title}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {books
                                .map(book => (
                                    <li key={book.id}>
                                        <Book book={book} updateBook={updateBook}></Book>
                                    </li>
                                ))}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookShelf