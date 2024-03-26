import { img2 } from "@/constants/images";
import Image from "next/image";
import BodyBackground from "@/components/Reusables/BodyBackground";

export default function PricingPage() {
  return (
    <main className="flex items-center justify-center pt-[20vh]">
      <section className="w-[60%] md:w-[40%] md:max-w-[450px]">
        <div className="text-zinc-100">
          <h2 className="text-3xl font-bold text-teal-200">PRICING</h2>

          <p className="mt-4 flex  w-full flex-col gap-2 text-2xl md:flex-row">
            <span className="">
              Embark on your global journey for just{" "}
              <strong className="text-teal-200">$9</strong>/year
            </span>
          </p>

          <p className="mt-8 text-lg">
            Explore the world with ease as WorldWise meticulously records your
            travels. With our interactive world map, trace your path through
            countless cities and cherish every memorable moment. Share your
            wanderlust tales with friends and relive the magic of your
            adventures.
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
