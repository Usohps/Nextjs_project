import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import Link from "next/link";
import { Suspense } from "react";
//Suspense help to load up items that are ready to be displayed and also helps to insert a placeholder where most times take a while to display
const RepoPage = ({params}) => {
  const {name}= params
  console.log(name)
  return (
    <div>
      <Link href={"/code/repos"}>
       <div><p>Back to Repository </p></div>
        </Link>
      <Suspense fallback={<div><p>Loading repositories....</p></div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div><p> Loading directories... </p></div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
