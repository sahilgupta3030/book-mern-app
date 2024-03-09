import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
        <thead className="text-xs bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 text-lg">
              No
            </th>
            <th scope="col" className="px-6 py-3 text-lg">
              Title
            </th>
            <th scope="col" className="px-6 py-3 max-md:hidden text-lg">
              Author
            </th>
            <th scope="col" className="px-6 py-3 max-md:hidden text-lg">
              Publish Year
            </th>
            <th scope="col" className="px-6 py-3 text-lg">
              Operations
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr
              key={book._id}
              className={`${
                index % 2 === 0
                  ? "even:bg-gray-50 even:dark:bg-gray-800"
                  : "odd:bg-white odd:dark:bg-gray-900"
              } border-b dark:border-gray-700`}
            >
              <td className="px-6 py-4 font-medium text-gray-900 text-lg">
                {index + 1}
              </td>
              <td className="px-6 py-4 text-lg">{book.title}</td>
              <td className="px-6 py-4 max-md:hidden text-lg">{book.author}</td>
              <td className="px-6 py-4 max-md:hidden text-lg">
                {book.publishYear}
              </td>
              <td className="px-6 py-4">
                <div className="flex justify-center space-x-4">
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
