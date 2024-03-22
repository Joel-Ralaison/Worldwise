import Link from "next/link";

const links = [
  { name: "Pricing", href: "pricing" },
  { name: "Product", href: "product" },
  { name: "Map", href: "application" },
];

export default function DesktopMenu() {
  return (
    <article className="mx-auto hidden h-12 justify-between overflow-hidden rounded-lg bg-black/40 text-white shadow-md shadow-black/15 backdrop-blur-md transition-all duration-500 hover:bg-black/50 md:flex md:w-[50vw]">
      <div className="flex justify-center">
        <Link href="/" className="flex h-full w-full items-center px-5">
          Home
        </Link>
      </div>

      <nav className="flex justify-center">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex h-full w-full items-center rounded-lg px-5"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="flex justify-center">
        <Link
          href="login"
          className="flex h-full w-full items-center rounded-lg px-5"
        >
          Login
        </Link>
      </div>
    </article>
  );
}
