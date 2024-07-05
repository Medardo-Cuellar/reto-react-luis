import Image from "next/image";
import devToLogo from "../assets/devto.svg"

export default function Enter() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center justify-center gap-4" >
      <Image src={devToLogo} alt="Dev.to Logo" width={100} height={100} className="place-self-center"/>
        <h1 className="text-3xl font-bold">Join the DEV Community</h1>
      </div>
    </main>
  );
}
