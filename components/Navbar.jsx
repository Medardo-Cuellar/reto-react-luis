import Image from "next/image";
import Button from "./Button";
import devto from "../assets/devto.svg";

function Navbar(){
return(
    <nav className=" col-start-1 col-end-4 bg-white flex flex-row">
    <div className="flex flex-row">
      <Image src={devto} alt="devto" width="40" height="40" className="hover:cursor-pointer" />
      <div className="flex items-center justify-center">
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
        <Button caption="log-in" color="bg-purple-500"/>
        <Button caption="sign-up" color="bg-purple-100"/>
    </div>
  </nav>
)
}

export default Navbar;