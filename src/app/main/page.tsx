export default function Home() {
  return (
    <div className="h-screen p-full">
      <div className="flex items-center justify-center h-screen">
        <div className="flex h-1/4 z-1 w-1/3 bg-alabaster justify-center">
          <div className="flex flex-auto p-6 justify-center">
            <div className="text-1xl md:text-2xl lg:text-4xl ">
              <h1 >Haskils Library</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed h-5/12 w-screen inset-x-0 bottom-1 bg-prussian"></div>
    </div>
  );
}