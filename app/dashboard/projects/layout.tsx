import NavbarComponent from "../../components/navbarComponent";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavbarComponent />
      <div className="min-h-svh flex bg-prussian justify-center">
        <div className="min-h-svh flex mt-3 p-6 content-center bg-alabaster w-6/10 rounded-md">
          <article className="prose w-full py-4 px-8 md:w-4/5 lg:w-3/5 text-alabaster">
            {children}
          </article>
        </div>
      </div>
    </div>
  );
}
