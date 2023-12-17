import axios from "axios";
import { useEffect, useState } from "react";
import BookList from "../components/BookList";

const Home = () => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const [searchText, setSearchText] = useState();
  const [books, setBooks] = useState([]);

  /**
   * The function `getBooks` makes an asynchronous request to the Google Books API to retrieve a list of
   * books based on a search query, and then sets the retrieved books in the state.
   */
  const getBooks = async () => {
    try {
      await axios
        .get(
          `https://www.googleapis.com/books/v1/volumes/?q=intitle:${encodeURIComponent(
            searchText
          )}&printType=books&orderBy=newest&maxResults=30&key=${apiKey}`
        )
        .then((res) => setBooks(res.data.items));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks();
  }, [searchText]);

  return (
    <div className="h-screen w-3/4 flex flex-col mx-auto gap-10 mt-16">
      <input
        placeholder="Search Book..."
        className="w-full h-12 border-gray-400 border rounded-lg p-3"
        onChange={(e) => setSearchText(e.target.value)}
      />

      <div className="flex flex-wrap justify-center md:justify-around xl:justify-between gap-24 w-full h-full">
        {/* The code is mapping over the `books` array and rendering a `BookList` component
        for each book in the array.  */}
        {books &&
          books.map((book) => {
            return book.volumeInfo.imageLinks && <BookList book={book} />;
          })}
      </div>
    </div>
  );
};

export default Home;
