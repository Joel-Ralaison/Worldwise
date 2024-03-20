import BodyBackground from "@/components/Reusables/BodyBackground";
import { img2 } from "@/constants/images";
import Image from "next/image";

export default function PricingPage() {
  return (
    <main className="flex items-center justify-center pt-[20vh]">
      <section className="w-[60%] md:w-[40%] md:max-w-[450px]">
        <div className="text-zinc-100">
          <h2 className="flex w-full flex-col gap-2 text-3xl md:flex-row">
            <span className="">Pricing</span>
            <span className="">
              | Just <strong className="text-teal-200">$9</strong>/year
            </span>
          </h2>

          <p className="mt-8 text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
      </section>

      <div className="w-[40vw] max-w-[350px] overflow-hidden rounded-lg sm:hidden md:block">
        <Image
          src={img2}
          alt="Track beatiful cities by pointing their location"
        />
      </div>

      <BodyBackground imgSrc={img2} />
    </main>
  );
}
