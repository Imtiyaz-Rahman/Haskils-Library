import Link from "next/link";

export default function NavbarComponent() {
  const opacityAnimation = "";

  return (
    <div className="min-w-dvw transition-opacity bg-black flex p-1 justify-center items-center">
      <Link
        className="text-xl text-orange p-3 hover:scale-110 duration-300 ease-in-out"
        href="/dashboard"
      >
        {" "}
        Go To Dashboard
      </Link>
    </div>
  );
}
