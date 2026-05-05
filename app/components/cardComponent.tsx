// card interface
interface Card {
    id: number
    title: string
    thumbnail: string
    description: string
    link: string
}

export default function carcComponent() {
  
  // card interface
  interface Card {
    id: number
    title: string
    thumbnail: string
    description: string
    link: string
  }

  // variables
  const foo = "bar";
  
  return (
    <div className="h-3px">
    <link href={Card.link}>
    <img 
    url={Card.thumbnail} 
    alt="Thumbnail Image of "+ {Card.title}
    className="h-full w-full"
    loading="lazy"
    />
      <div> 
        <h1> {Card.title}</h1>
        <p> {Card.description}</p>
      </div>
      <h1> Hello Pain </h1>
    </link>
    </div>
  );
} 
