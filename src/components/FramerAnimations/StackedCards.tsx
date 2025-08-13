export default function StackingCards() {
  const cards = [
    { id: 1, text: "Card One" },
    { id: 2, text: "Card Two" },
    { id: 3, text: "Card Three" },
    { id: 4, text: "Card Four" },
  ];

  return (
    <div className="h-[400vh] bg-gray-100 py-40 px-4">
      <div className="max-w-md mx-auto relative">
        {cards.map((card, i) => (
          <div
            key={card.id}
            className={`sticky top-0 z-[${i + 1}]`}
            style={{ marginTop: i === 0 ? 0 : "-100px" }}
          >
            <div className="bg-white shadow-xl p-8 rounded-xl text-center text-xl font-semibold border border-gray-300">
              {card.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
