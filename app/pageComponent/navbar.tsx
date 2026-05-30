import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const navbarItems = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Resources", href: "#" },
    { name: "About us", href: "#" },
  ];
  return (
    <nav className="bg-white p-4  font-black justify-between w-350 border border-gray-100/60 mt-10 rounded-2xl">
      <div className="container mx-auto flex items-center justify-between">
        <div className=" text-2xl font-medium font-archivo ">Skribl</div>
        <div className="text-gray-400 font-archivo font-medium ml-20">
          {navbarItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className=" hover:text-gray-900 px-3 py-2 rounded-md text-sm "
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="font-open-sans font-medium">
          <Button variant="outline" size="sm" className="px-5 py-5 rounded-xl">
            Sign In
          </Button>
          <Button
            variant="default"
            size="sm"
            className="ml-2 px-5 py-5 rounded-xl"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};
