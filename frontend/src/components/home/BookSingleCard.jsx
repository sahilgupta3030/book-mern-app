import { Link } from "react-router-dom";
import { MdMenuBook } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="border-2 border-gray-500 rounded-lg p-4 m-4 relative hover:shadow-xl">
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-blue-300 rounded-lg">
        {book.publishYear}
      </h2>
      <h4 className="my-1 mt-8 text-gray-500">{book._id}</h4>
      <div className="flex items-center gap-x-2">
        <MdMenuBook className="text-shadow-300 text-3xl ml-6" />
        <h2 className="my-1">{book.title}</h2>
      </div>
      <div className="flex items-center gap-x-2 ml-6">
        <IoPersonCircleOutline className="text-black-300 text-4xl" />
        <h2 className="my-1">{book.author}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <BiShow
          className="text-4xl text-blue-800 hover:text-black cursor-pointer rounded-full bg-blue-200 p-2"
          onClick={() => setShowModal(true)}
        />
        <Link
          to={`/books/details/${book._id}`}
          className="text-green-800 hover:text-black"
        >
          <BsInfoCircle className="text-4xl rounded-full bg-green-200 p-2" />
        </Link>
        <Link
          to={`/books/edit/${book._id}`}
          className="text-yellow-600 hover:text-black"
        >
          <AiOutlineEdit className="text-4xl rounded-full bg-yellow-200 p-2" />
        </Link>
        <Link
          to={`/books/delete/${book._id}`}
          className="text-red-600 hover:text-black"
        >
          <MdOutlineDelete className="text-4xl rounded-full bg-red-200 p-2" />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
