import Image from "next/image";
import Button from "./Button";
import devto from "../assets/devto.svg";
import Link from "next/link";

function Navbar() {
  return (
    <nav className=" col-start-1 col-end-4 bg-white flex flex-row">
      <div className="flex flex-row">
        <div className="flex items-center justify-center">
          <Link href="/">
            <Image src={devto} alt="devto" width="40" height="40" />
          </Link>
          <div className="ms-2">
            <input
              type="text"
              placeholder="Search"
              class="w-96 h-8 rounded-md border-2 border-gray-400 p-1"
              spellcheck="false"
              data-ms-editor="true"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:grow md:me-4 gap-4 items-center justify-end">
        <Button caption="log-in" href="/enter" />
        <Button caption="sign-up" href="/enter?state=new-user" />
      </div>
    </nav>
  );
}

export default Navbar;
