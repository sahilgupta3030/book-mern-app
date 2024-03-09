import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`https://book-mern-backend.vercel.app/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Deleted successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };
  
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className="text-3xl my-8 text-indigo-900 font-bold">Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='p-10 flex flex-col border-2 border-black-400 rounded-xl w-fit p-4 mx-auto'>
        <h3 className='p-10 text-2xl'>Are you sure you want to delete this book?</h3>

        <button
  className="block focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2 w-28 mx-auto my-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
  onClick={handleDeleteBook}
>
  Yes, Delete it
</button>





      </div>
    </div>
  )
}

export default DeleteBook;
