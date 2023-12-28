import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useGlobal } from "../context/Global";

const Header = ({setRendered}) => {

  const {searchGiffs} = useGlobal()
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    searchGiffs(query)
    setRendered('search')
    setQuery('')

    if(query === ''){
      setRendered('trending')
    }
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <>
    
        <form className="flex gap-4 m-3 ml-52" action="" onSubmit={handleSubmit} >

          <IoSearchOutline className="search-icon text-xl relative left-24 top-4" />
          <input
            className="search1 ml-10 border-2 py-3 w-2/3 pl-12 rounded"
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search Gif"
          />

          <button className="btn btn-primary bg-black text-white px-6 py-3 rounded">
            Search
          </button>

        </form>

    </>
  );
};

export default Header;
