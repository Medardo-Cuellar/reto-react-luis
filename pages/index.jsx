import Navbar from "../components/Navbar";
import LeftAside from "../components/LeftAside";
import Content from "../components/Content";
import RightAside from "../components/RightAside";


export default function Home() {
  return (
    <main className="w-full min-h-screen grid grid-cols-[3rem_1fr] md:grid-cols-[13rem_1fr_13rem] grid-rows-[3.5rem_1fr]">
      <Navbar />
      <LeftAside />
      <Content />
      <RightAside />
    </main>
  );
}
