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
      <Link href={"/code/repos"}>Back to Repository</Link>
      <Suspense fallback={<div><div className="spinner"></div></div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
