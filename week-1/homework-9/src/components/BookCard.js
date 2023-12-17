import { useNavigate } from "react-router-dom";
import rightIcon from "../assets/icons/right.svg";

const BookCard = ({ book }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-auto md:w-56 md:h-96 shadow-sm hover:animate-pulse">
        <img
          src={book.volumeInfo.imageLinks?.smallThumbnail}
          className="w-full h-56"
          alt={book.volumeInfo.title}
        />
        <div className="p-4">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 truncate">
            {book.volumeInfo.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700">
            {book.volumeInfo.authors && book.volumeInfo.authors.join(", ")}
          </p>
        </div>
      </div>
      <button
        onClick={() => navigate(`/${book.id}`)}
        className="flex gap-2 items-center bg-gray-500 hover:bg-gray-600 rounded-md px-4 py-2 text-white mb-12 mx-auto"
      >
        Detail
        <img className="w-6 h-6" src={rightIcon} alt="right" />
      </button>
    </>
  );
};

export default BookCard;
