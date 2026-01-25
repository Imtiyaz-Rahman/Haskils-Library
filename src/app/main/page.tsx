import SvgComponent from "../components/svgComponent";

export default function main() {
  return (
    <div className="h-screen p-full">
      <div className="flex items-center justify-center h-screen">
        {/* Title Box */}
        <div className="flex h-1/4 z-1 w-1/3 bg-alabaster justify-center rounded-md">
          <div className="flex flex-col p-6 justify-between">
            <div className="text-lg md:text-2xl lg:text-4xl ">
              <h1>Haskils Library</h1>
            </div>
            {/* Logo Options */}
            <div>
              <SvgComponent />
            </div>
          </div>
        </div>
      </div>
      {/* Prussian lower Bar */}
      <div className="fixed h-5/12 w-screen inset-x-0 bottom-1 bg-prussian"></div>
    </div>
  );
}
