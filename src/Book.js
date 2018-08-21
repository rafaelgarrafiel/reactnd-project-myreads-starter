import React, { Component } from "react";

class Book extends Component {

    updateBook = (book, shelf) => {
        this.props.updateBook(book, shelf)
    }

    render(){
        const { book } = this.props
        let thumbnail
        if (book.imageLinks) {
            thumbnail = book.imageLinks.thumbnail
        }
        return(
            <div>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select value={book.shelf} onChange={(e)=>{this.updateBook(book, e.target.value)}}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.author}</div>
                </div>
            </div>
        )
    }
}

export default Book