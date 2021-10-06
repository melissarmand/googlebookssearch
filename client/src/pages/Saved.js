import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Container, Row, Col } from "../components/Grid";


function Saved() {
  const [savedBooks, setSavedBooks] = useState([])

  // When component mounts calls loaded books
  useEffect(() => {
    loadBooks()
  }, [])

  // Load all saved books
  function loadBooks() {
    API.getSavedBooks()
        .then(res => 
        setSavedBooks(res.data)
        )
        .catch(err => console.log(err));
    };

  //Remove book
  const handleRemoveBook = event => {
      event.preventDefault();

      API.deleteBook(event.target.id)
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }


  return (
    <div>
        <Container>
            <Row>
                <Col size="md-12">
                    {!savedBooks.length ? (
                        <h1 className="text-center">No Books Saved</h1>
                    ) : (
                        <List type='Saved Books:'>
                            {savedBooks.map(book => {
                                return ( 
                                <ListItem
                                    key={book._id}
                                    title={book.title}
                                    description={book.description}
                                    link={book.link}
                                    authors={book.authors}
                                    thumbnail={book.image}
                                    index={book._id}
                                    onclick={handleRemoveBook}
                                    btnName='Remove'
                                />
                                );
                            })}
                        </List>
                    )}
                </Col>
            </Row>
      </Container>
    </div>
  )
}

export default Saved;