// Limited about
import Image from "next/image";
import Link from "next/link";

export default function SvgComponent() {
  // classname styling
  const stylingSpacing = "px-3";
  const stylingAnimation =
    "hover:opacity-80 hover:scale-115  duration-500 ease-in-out";
  const widthValue = 40;
  const heightValue = 8;

  return (
    <div>
      <div className="flex flex-row justify-center">
        {/* Linkedin Logo */}
        <div className={stylingSpacing}>
          <div className={stylingAnimation}>
            <Link
              href={"https://www.linkedin.com/in/imtiyazrahman"}
              target="_blank"
            >
              <Image
                className="dark:invert"
                src="./linkedin.svg"
                alt="Linkedin logo"
                width={widthValue}
                height={heightValue}
                priority
              />
            </Link>
          </div>
        </div>

        {/* Github Logo */}
        <div className={stylingSpacing}>
          <div className={stylingAnimation}>
            <Link href={"https://github.com/Imtiyaz-Rahman"} target="_blank">
              <Image
                className="dark:invert"
                src="./github.svg"
                alt="Linkedin logo"
                width={widthValue}
                height={heightValue}
                priority
              />
            </Link>
          </div>
        </div>

        {/* Apps Logo */}
        <div className={stylingSpacing}>
          <div className={stylingAnimation}>
            <Link href={"/main/options"} target="_blank">
              <Image
                className="dark:invert"
                src="./apps.svg"
                alt="Linkedin logo"
                width={widthValue}
                height={heightValue}
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

//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
