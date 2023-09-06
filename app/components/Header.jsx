import Link from "next/link";

const Header = () => {
  return (
    <header className="p-2">
      <div className="flex flex-col items-center justify-between space-y-2">
        <div>
          <Link href={"/"}>
          <h1 className="text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-extrabold">
            COZYDEV~
          </h1>
          </Link>
        </div>
        <div className=" space-x-7">
          <Link href={"/about"}>About</Link>
          <Link href={"/about/team"} >Our Team</Link>
          <Link href={"/code/repos"}>Code</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
