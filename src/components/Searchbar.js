import React, { useState } from 'react';

const Searchbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    setSearchTerm('');
  };

  return (
    <form onSubmit={handleSubmit} className='flex ml-4'>
      <input
        type='text'
        placeholder='Search...'
        value={searchTerm}
        onChange={handleChange}
        className='border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
      />
      <button
        type='submit'
        className='relative z-2 flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg'
      >
        Search
      </button>
    </form>
  );
};

export default Searchbar;
