import Link from "next/link";

async function fetchRepo() {
  //if the below endpoint is updated often or at anytime we need to add on to endpoint
  //an object next which takes a value of revalidate, here it checks for new updates on the endpoint and keeps
  // it updated on refresh.. revalidate @60 means it updates new data every 60seconds.
  const response = await fetch("https://api.github.com/users/bradtraversy/repos",{
    next:{
      revalidate: 60
    }
  });
    await new Promise((resolve)=>setTimeout(resolve,5000))
  return await response.json();
}
const ReposPage = async () => {
    const repos = await fetchRepo();
    // console.log(repos);
  return (
    <div>
      <h2 className="py-10 lg:text-center text-left">Repositories</h2>
       <ul className="border border-red-500 p-3 space-y-3">
        {repos.map((repo) => (
          <li key={repo.id} className="border rounded shadow-md hover:shadow-none transition-shadow p-3 lg:w-1/2 lg:m-auto container">
            <Link href={`/code/repos/${repo.name}`}>
              <h3 className="font-bolder text-2xl py-3">{repo.name}</h3>
              <p>{repo.descripton}</p>
              <div className="flex items-center justify-between">
                <span>{repo.stargazers_count}</span>
                <span>{repo.forks_count}</span>
                <span>{repo.watchers_count}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {/* <h3>Repositories</h3>
      <div className="border border-red-500 p-3">
        <h1 className="font-bolder text-2xl">Web development</h1>
        <p>List of repositories</p>
        <div className="flex items-center justify-between">
          <span>counts</span>
          <span>counts</span>
          <span>counts</span>
        </div>
      </div> */}
    </div>
  );
};

export default ReposPage;
