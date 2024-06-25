import LeftBody from "@/components/LeftBody";
import Navbar from "@/components/Navbar";
import RightBody from "@/components/RightBody";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="flex ">
        <LeftBody/>
        <RightBody/>
      </div>
    </div>
  );
}
