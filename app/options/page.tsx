import CardComponent from "../components/cardComponent";
import cards from "./data/data.json";

export default function options() {
  return (
    <div className="min-h-svh bg-black flex justify-center items-start">
      <div className="flex flex-wrap gap-3 md:gap-5 w-full px-4 md:w-4/5 lg:w-3/5">
        {cards.map((card) => (
          <CardComponent key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
