import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="container">
      <div className="flex justify-between items-center py-2">
        <h1>piere willy</h1>
        <ul className="flex gap-4 text-sm items-center">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/skill"}>Skill</Link>
          </li>
          <li className="py-1 px-3 bg-blue-600 rounded-md text-white">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
