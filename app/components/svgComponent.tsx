// Limited about
import Image from "next/image";
import Link from "next/link";

export default function SvgComponent() {
  // classname styling
  const stylingSpacing = "px-2 sm:px-3";
  const stylingAnimation =
    "hover:opacity-80 hover:scale-110 duration-500 ease-in-out";
  const iconSize = 100;

  return (
    <div>
      <div className="flex flex-row justify-center items-center">
        {/* Linkedin Logo */}
        <div className={stylingSpacing}>
          <div className={stylingAnimation}>
            <Link
              href={"https://www.linkedin.com/in/imtiyazrahman"}
              target="_blank"
              className="block"
            >
              <Image
                src="./linkedin.svg"
                alt="Linkedin logo"
                width={iconSize}
                height={iconSize}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                priority
              />
            </Link>
          </div>
        </div>

        {/* Github Logo */}
        <div className={stylingSpacing}>
          <div className={stylingAnimation}>
            <Link
              href={"https://github.com/Imtiyaz-Rahman"}
              target="_blank"
              className="block"
            >
              <Image
                src="./github.svg"
                alt="Github logo"
                width={iconSize}
                height={iconSize}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                priority
              />
            </Link>
          </div>
        </div>

        {/* Apps Logo */}
        <div className={stylingSpacing}>
          <div className={stylingAnimation}>
            <Link href={"/options"} target="_blank" className="block">
              <Image
                src="./apps.svg"
                alt="Apps logo"
                width={iconSize}
                height={iconSize}
                className="w-9 h-9 sm:w-11 sm:h-11 md:w-13 md:h-13"
                priority
              />
            </Link>
          </div>
        </div>

        {/* End Of Icons */}
      </div>
    </div>
  );
}
