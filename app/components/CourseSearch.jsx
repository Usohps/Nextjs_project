"use client";
import { useState } from "react";

function  CourseSearch ({getSearchResults}) {
    const [query,setQuery]= useState("")
    const handleSearch = async(e)=>{
        e.preventDefault();
        // console.log(query)
        const res = await fetch(`/api/courses/search?query=${query}`)
        const data = await res.json()
        getSearchResults(data)
    }
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
        type="text"
        value={query}
        placeholder="Search by title"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default CourseSearch;
