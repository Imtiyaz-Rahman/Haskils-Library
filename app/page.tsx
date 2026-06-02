import SvgComponent from "./components/svgComponent";

export default function main() {
  return (
    <div className="h-screen p-full">
      <div className="flex items-center justify-center h-screen px-4">
        {/* Title Box */}
        <div className="flex h-1/4 z-1 w-11/12 sm:w-3/4 lg:w-1/3 bg-[#e5e5e5] justify-center rounded-md">
          <div className="flex flex-col p-6 justify-between align-middle">
            <div className="text-lg text-black md:text-2xl lg:text-4xl text-center">
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
      <div className="fixed h-1/3 md:h-11/24 w-screen inset-x-0 bottom-0 bg-prussian"></div>
    </div>
  );
}
