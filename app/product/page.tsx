import BodyBackground from "@/components/Reusables/BodyBackground";
import { img1 } from "@/constants/images";
import Image from "next/image";

export default function ProductPage() {
  return (
    <main className="flex items-center justify-center gap-6 pt-[20vh]">
      <div className="h-[60vh] w-[40vw] max-w-[350px] overflow-hidden rounded-lg sm:hidden md:block">
        <Image
          src={img1}
          alt="Track beatiful cities by pointing their location"
        />
      </div>

      <section className="flex w-[80vw] flex-col gap-5 text-lg text-zinc-100 md:w-[50vw]">
        <h2 className="text-2xl text-teal-200">About WorldWide.</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
          dicta illum vero culpa cum quaerat architecto sapiente eius non
          soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
          perspiciatis?
        </p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          doloribus libero sunt expedita ratione iusto, magni, id sapiente sequi
          officiis et.
        </p>
      </section>

      <BodyBackground imgSrc={img1} />
    </main>
  );
}
