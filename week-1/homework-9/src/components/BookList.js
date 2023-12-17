import BookCard from "./BookCard";

const BookList = ({ book }) => {
  return (
    <div
      key={book.id}
      className="w-2/3 justify-around  md:w-fit md:max-w-xs bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden flex flex-col md:justify-between pb-4"
    >
      <BookCard book={book} />
    </div>
  );
};

export default BookList;
