import Counter from "@/components/Counter/Counter";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";

export default function Home() {
  console.log('this is main page from server')
  return (
    <div>
      <h1>this is heading of main page</h1>
      {/* <Header/> */}
      {/* <Counter/> */}
      {/* <Footer/> */}
    </div>
  );
}
