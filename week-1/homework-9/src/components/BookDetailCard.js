const BookDetailCard = ({ book, details }) => {
  /* The code is defining a functional component called `BookDetailCard` that takes two props: `book`
  and `details`. */
  return (
    <div className="flex gap-20 w-full items-center flex-col xl:flex-row xl:w-3/4 h-auto border border-gray-400 rounded-md p-10">
      <img
        src={book.volumeInfo.imageLinks?.thumbnail}
        className="w-1/3 xl:w-full"
        alt={book.volumeInfo.title}
      />
      <div className="flex flex-col">
        {/* The code block is using the `map` function to iterate over
       an array called `details` */}
        {details.map((detail) => (
          <div className="flex flex-col  gap-1">
            <span className="text-lg font-bold text-gray-700 ">
              {detail.name}
            </span>
            {detail.value === "previewLink" ? (
              <a
                className="text-blue-600"
                href={book?.volumeInfo[detail.value]}
              >
                {book?.volumeInfo[detail.value]}
              </a>
            ) : (
              <p>{book?.volumeInfo[detail.value]}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookDetailCard;
