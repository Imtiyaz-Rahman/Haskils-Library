// card interface
import Link from "next/link";

interface Card {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  link: string;
}

export default function cardComponent({ Card }: { Card: Card }) {
  return (
    <div className="h-3px">
      <Link href={Card.link}>
        <img
          src={Card.thumbnail}
          alt={`Thumbnail Image of ${Card.title}`}
          className="h-full w-full"
          loading="lazy"
        />
        <div>
          <h1> {Card.title}</h1>
          <p> {Card.description}</p>
        </div>
        <h1> Hello Pain </h1>
      </Link>
    </div>
  );
}
