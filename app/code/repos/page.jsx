import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
async function fetchRepo() {
  //if the below endpoint is updated often or at anytime we need to add on to endpoint
  //an object next which takes a value of revalidate, here it checks for new updates on the endpoint and keeps
  // it updated on refresh.. revalidate @60 means it updates new data every 60seconds.
  const response = await fetch(
    "https://api.github.com/users/bradtraversy/repos",
    {
      next: {
        revalidate: 60,
      },
    }
  );
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return await response.json();
}
const ReposPage = async () => {
  const repos = await fetchRepo();
  // console.log(repos);
  return (
    <div>
      <h2 className="lg:py-10 p-6 lg:text-center text-left font-bold lg:text-2xl text-lg">REPOSITORIES</h2>
      <ul className="p-3 space-y-3">
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="border rounded shadow-md hover:shadow-none transition-shadow p-3 lg:w-1/2 lg:m-auto container"
          >
            <Link href={`/code/repos/${repo.name}`}>
              <h3 className="font-thin text-xl py-3">{repo.name.toUpperCase()}</h3>
              <p>{repo.descripton}</p>
              <div className="flex items-center justify-between">
                <div className="flex justify-center space-x-1 items-center">
                  <FaStar size={12}/>
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex justify-center items-center space-x-1">
                  <FaCodeBranch size={12} />
                  <span>{repo.forks_count}</span>
                </div>
                <div className="flex justify-center items-center space-x-1">
                  <FaEye size={12} />
                  <span>{repo.watchers_count}</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
