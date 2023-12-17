import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookDetailCard from "../components/BookDetailCard";
import leftIcon from "../assets/icons/left.svg";

const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const apiKey = process.env.REACT_APP_API_KEY;

  const [book, setBook] = useState();

  const details = [
    {
      name: "Title",
      value: "title",
    },
    {
      name: "Publisher",
      value: "publisher",
    },
    {
      name: "Published Date",
      value: "publishedDate",
    },
    {
      name: "Description",
      value: "description",
    },
    {
      name: "Page Count",
      value: "pageCount",
    },
    {
      name: "Preview Link",
      value: "previewLink",
    },
  ];

  const getBookDetail = async () => {
    try {
      await axios
        .get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${apiKey}`)
        .then((res) => setBook(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookDetail();
  }, [id]);

  return (
    book && (
      <div className="m-20">
        <button
          onClick={() => navigate(-1)}
          className="flex gap-2 items-center bg-gray-500 hover:bg-gray-600 rounded-md px-4 py-2 text-white mb-12"
        >
          <img className="w-6 h-6" src={leftIcon} alt="left" />
          Go back
        </button>
        <BookDetailCard book={book} details={details} />
      </div>
    )
  );
};

export default Details;
