import Image, { type StaticImageData } from "next/image";

type Props = { imgSrc: StaticImageData };

export default function BodyBackground({ imgSrc }: Props) {
  return (
    <div className="fixed inset-0 -z-[1]">
      <span className="fixed inset-0 bg-gradient-to-b from-black/70 to-black/60" />
      <Image
        src={imgSrc}
        alt="background"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}
