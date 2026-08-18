// card interface
import Link from "next/link";
import Image from "next/image";

interface Card {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  link: string;
}

export default function CardComponent({ card }: { card: Card }) {
  return (
    <div className="mt-2 p-2 w-full md:w-[calc(50%-0.75rem)] rounded-md bg-alabaster shadow-2xl">
      <Link href={card.link}>
        <div className="flex flex-col">
          <Image
            src={card.thumbnail}
            // src={`/Haskils-Library${card.thumbnail}`}
            alt={`Thumbnail Image of ${card.title}`}
            className="h-40 w-full object-cover rounded-md"
            loading="lazy"
          />
          <div className="mt-2 text-black">
            <h1 className="text-2xl py-2 capitalize font-extrabold antialiased">
              {card.title}
            </h1>
            <p className="mt-0.5 text-sm line-clamp-4 antialiased">
              {" "}
              {card.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
