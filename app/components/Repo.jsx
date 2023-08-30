import Link from "next/link";
//if the below endpoint is updated often or at anytime we need to add on to endpoint
  //an object next which takes a value of revalidate, here it checks for new updates on the endpoint and keeps
  // it updated on refresh.. revalidate @60 means it updates new data every 60seconds.
async function fetchRepo(name) {
  const response = await fetch(`https://api.github.com/repos/bradtraversy${name}`,{
    next:{
      revalidate: 60
    }
  });
  return response.json();
}
const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);
  return <>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div>
        <div>
          <span>{repo.forks_count}</span>
        </div>
        <div>
          <span>{repo.stargazers_count}</span>
        </div>
        <div>
          <span>{repo.watchers_count}</span>
        </div>
      </div>
  </>
};

export default Repo;
