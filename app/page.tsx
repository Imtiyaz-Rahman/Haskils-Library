import SvgComponent from "./components/svgComponent";

export default function main() {
  return (
    <div className="h-screen p-full">
      <div className="flex items-center justify-center h-screen px-4">
        {/* Title Box */}
        {/* w-[clamp(16rem,40vw,28rem)] w-11/12 sm:w-3/4 lg:w-1/3*/}
        <div className="flex h-1/4 z-1 w-[clamp(22rem,40vw,36rem)] bg-[#e5e5e5] justify-center rounded-md shadow-2xl/60 drop-shadow-xl/40">
          <div className="flex flex-col p-6 justify-between align-middle">
            <div className="text-xl text-black md:text-2xl lg:text-4xl text-center text-shadow-sm">
              <h1>Haskils Library</h1>
            </div>
            <div className="text-base text-black md:text-lg lg:text-2xl text-center opacity-50 text-shadow-xs">
              <h2>Imtiyaz's Portfolio</h2>
            </div>
            {/* Logo Options */}
            <div>
              <SvgComponent />
            </div>
          </div>
        </div>
      </div>
      {/* Prussian lower Bar */}
      <div className="fixed h-11/24 w-screen inset-x-0 bottom-0 bg-prussian"></div>
    </div>
  );
}
