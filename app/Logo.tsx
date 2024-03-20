import Image from "next/image";
import { logo } from "@/constants/images";

export default function Logo() {
  return (
    <div className="fixed left-3 top-2 z-20 w-[150px] rounded-md bg-black/20 px-2 pb-[10px] pt-2 backdrop-blur-md">
      <Image
        src={logo}
        alt="Worldwise logo"
        style={{ height: "30px", objectFit: "contain" }}
      />
    </div>
  );
}
