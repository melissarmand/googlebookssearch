import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Btn from "../components/Btn";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Container, Row, Col } from "../components/Grid";

function Search() {
  // need state for books when using throughout functions and render  
  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState("");

  const handleInputChange = event => {
    const { value } = event.target;
    setBookSearch(value);
  };

  const handleSaveBook = event => {
    //When the button is clicked, prevent its default behavior
    event.preventDefault();
    
    
    API.saveBook({
      id: books[event.target.id].id,
      title: books[event.target.id].volumeInfo.title,
      authors: books[event.target.id].volumeInfo.authors,
      description: books[event.target.id].volumeInfo.description,
      image: books[event.target.id].volumeInfo.imageLinks.thumbnail,
      link: books[event.target.id].volumeInfo.link
    })
      .then(() => alert('Book saved!'))
      .catch(err => console.log(err));
  }

  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get books update the books state
    event.preventDefault();
    API.getBooks(bookSearch)
      .then( 
        res =>{
          console.log(res.data.items);
          setBooks(res.data.items)
        }) 
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Container>
        <Row>
          <Col size="md-12">
            <form>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <SearchBar
                      name="BookSearch"
                      value={bookSearch}
                      onChange={handleInputChange}
                      placeholder="Search Here"
                    />
                  </Col>
                  <Col size="xs-3 sm-2">
                    <Btn
                      onClick={handleFormSubmit}
                      size='lg'
                      className="search-btn"
                    >
                        Search
                    </Btn>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="xs-10">
            {!books.length ? (
              <h1 className="text-center">No Books Searched</h1>
            ) : (
              <List type={'Search Results:'}>
                {books.map((book, index) => {
                  return (
                    <ListItem
                      key={book.id}
                      title={book.volumeInfo.title}
                      description={book.volumeInfo.description}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors}
                      thumbnail={!book.volumeInfo.imageLinks ? (
                        "https://uhcl-ir.tdl.org/bitstream/handle/10657.1/2217/not-available.jpg.jpg?sequence=3&isAllowed=y"
                      ) : (book.volumeInfo.imageLinks.thumbnail)} 
                      index={index}
                      onclick={handleSaveBook}
                      btnName='Save Book'
                    />
                  )
                })}
              </List>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Search;