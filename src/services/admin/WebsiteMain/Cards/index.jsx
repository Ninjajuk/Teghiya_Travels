import React, { useState } from "react";

const CardsHome = () => {
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [editing, setEditing] = useState(false);

  const handleInputChange = (e) => {
    setCurrentCard({ ...currentCard, [e.target.name]: e.target.value });
  };

  const handleSaveCard = () => {
    if (editing) {
      setCards(
        cards.map((card) => (card.id === currentCard.id ? currentCard : card))
      );
      setEditing(false);
    } else {
      setCards([...cards, { ...currentCard, id: Date.now() }]);
    }
    setCurrentCard({ title: "", description: "", image: "" });
  };

  const handleEditCard = (card) => {
    setCurrentCard(card);
    setEditing(true);
  };

  const handleDeleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };
  return (
    <div className="flex gap-2  mb-4">
      <div className="w-full p-4 bg-gray-100 shadow-md rounded-md">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold mb-4">Manage Cards</h2>
          <button
            onClick={handleSaveCard}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {editing ? "Update Card" : "Add Card"}
          </button>
        </div>

        {/* Card Form */}
        <div className="mb-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={currentCard.title}
            onChange={handleInputChange}
            className="block w-full p-2 mb-2 border rounded"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={currentCard.description}
            onChange={handleInputChange}
            className="block w-full p-2 mb-2 border rounded"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={currentCard.image}
            onChange={handleInputChange}
            className="block w-full p-2 mb-2 border rounded"
          />
          <button
            onClick={handleSaveCard}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {editing ? "Update Card" : "Add Card"}
          </button>
        </div>

        {/* Card Preview */}
        <div className="p-4 border rounded mb-4">
          <h3 className="text-lg font-bold mb-2">
            {currentCard.title || "Card Title"}
          </h3>
          <p className="mb-2">
            {currentCard.description || "Card description goes here."}
          </p>
          {currentCard.image && (
            <img
              src={currentCard.image}
              alt="Card"
              className="w-full h-48 object-cover"
            />
          )}
        </div>

        {/* Card List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div key={card.id} className="p-4 border rounded shadow">
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <p className="mb-2">{card.description}</p>
              {card.image && (
                <img
                  src={card.image}
                  alt="Card"
                  className="w-full h-32 object-cover mb-2"
                />
              )}
              <div className="flex justify-between">
                <button
                  onClick={() => handleEditCard(card)}
                  className="text-blue-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteCard(card.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsHome;
