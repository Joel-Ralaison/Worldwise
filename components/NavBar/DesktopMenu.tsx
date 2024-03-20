import Link from "next/link";

const links = [
  { name: "Pricing", href: "pricing" },
  { name: "Product", href: "product" },
  { name: "App", href: "application" },
];

export default function DesktopMenu() {
  return (
    <article className="mx-auto hidden h-12 justify-between overflow-hidden rounded-lg bg-teal-500 shadow-md shadow-black/10 md:flex md:w-[50vw] lg:w-[40vw]">
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
