import AddCityForm from "@/components/CityManager/AddCityForm";

export default function AddCityPage() {
  return (
    <article className="z-[17] flex h-full w-full">
      <Heading />
      <AddCityForm />
    </article>
  );
}

function Heading() {
  return (
    <div className="flex h-full w-[50%] items-center">
      <h2 className="h-full w-full bg-gradient-to-r from-teal-500 to-green-500 bg-clip-text px-2 font-black text-transparent">
        <div className="flex h-full w-full flex-col justify-center gap-2 text-[22px] md:text-3xl 2xl:text-5xl">
          <span>SHARE</span>
          <span>YOUR</span>
          <span>ADVENTURE</span>
          <span>WITH</span>
          <span>WORLDWISE.</span>
        </div>
      </h2>
    </div>
  );
}
