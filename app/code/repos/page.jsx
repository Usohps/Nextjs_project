import React from 'react'
 async function fetchRepo(){
    const response = await fetch("https://api.github.com/users/verekia/repos");
    return await response.json()
 }
const RepoPage = async() => {
    const repos = await fetchRepo()
    console.log(repos)
  return (
    <div>{}</div>
  )
}

export default RepoPage