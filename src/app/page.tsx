import Image from "next/image";
import Hero from "./components/Hero";
import Editorpic from "./components/Editorpic";
import Products from "./components/Products";
import Classic from "./components/Classic";
import Asian from "./components/Asian";
import Feature1 from "./components/Feature1";



export default function Home() {
  return (
    <div>
      <Hero />
      <Editorpic />
      <Products />
      <Classic />
      < Asian />
      <Feature1 />
    </div>
  );
}
