import Link from "next/link";
//if the below endpoint is updated often or at anytime we need to add on to endpoint
//an object next which takes a value of revalidate, here it checks for new updates on the endpoint and keeps
// it updated on refresh.. revalidate @60 means it updates new data every 60seconds.
async function fetchRepoContents(name) {
  // await new Promise((resolve) => setTimeout(resolve, 6000));
  const response = await fetch(
    `https://api.github.com/repos/bradtraversy/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  // console.log(response);
  return await response.json();
}
const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  const dirs = await contents.filter((content) => content.type === "dir");
  console.log(contents)
  return (
    <>
      <div>
        <h3>Directories</h3>
        <ul>
          {dirs?.map((dir) => (
            <li key={dir.path}>
              <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RepoDirs;
