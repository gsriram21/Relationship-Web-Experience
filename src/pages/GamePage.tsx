import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

// Define our event type
interface TimelineEvent {
  id: number;
  text: string;
}

const GAME_EVENTS: TimelineEvent[] = [
  { id: 1, text: "La Fontana: Will you be my...?" },
  { id: 2, text: "Walk in Bellevue Park + Mod" },
  { id: 3, text: "Ashford WA Cabin trip" },
  { id: 4, text: "Skagit Valley, part 1!" },
  { id: 5, text: "K1 Speed, Char-lotte" },
  { id: 6, text: "Disney, Universal, Miami!" },
  { id: 7, text: "SeaPlane, Mustang, John Legend night" },
  { id: 8, text: "Ferragamo Gancini gift" },
  { id: 9, text: "Bainbridge Island getaway" },
  { id: 10, text: "Lazy day in, UTI oops" },
  { id: 11, text: "Facetime dates, Namu in Chicago" },
  { id: 12, text: "EnchantMaze + Christmas fun" },
  { id: 13, text: "Colorado trip!" },
  { id: 14, text: "Voodoo naughty donuts" },
  { id: 15, text: "Flower bouquets of LOVE!" },
];

const GamePage: React.FC = () => {
  const [events, setEvents] = useState<TimelineEvent[]>(GAME_EVENTS);
  const [shuffledEvents, setShuffledEvents] = useState<TimelineEvent[]>([]);
  const [slots, setSlots] = useState<(TimelineEvent | null)[]>(Array(15).fill(null));
  const [showSuccess, setShowSuccess] = useState(false);
  const [draggedEvent, setDraggedEvent] = useState<TimelineEvent | null>(null);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  // Shuffle events when component mounts
  useEffect(() => {
    const shuffled = [...events].sort(() => Math.random() - 0.5);
    setShuffledEvents(shuffled);
  }, [events]);

  // Handle drag start
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, item: TimelineEvent, index: number | null = null) => {
    setDraggedEvent(item);
    setDraggedIndex(index);
    event.dataTransfer.setData("text/plain", item.id.toString());
  };

  // Handle drag over
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  // Handle drop into a slot
  const handleDrop = (event: React.DragEvent<HTMLDivElement>, slotIndex: number) => {
    event.preventDefault();
    if (draggedEvent) {
      const newSlots = [...slots];

      // If the dragged event is from the slots, clear its previous position
      if (draggedIndex !== null) {
        newSlots[draggedIndex] = null;
      } else {
        // If it's from the top options, remove it from shuffled events
        setShuffledEvents(shuffledEvents.filter(e => e.id !== draggedEvent.id));
      }

      // Set the event in the new slot
      newSlots[slotIndex] = draggedEvent;
      setSlots(newSlots);

      // Reset dragged state
      setDraggedEvent(null);
      setDraggedIndex(null);

      // Check if all slots are filled correctly
      checkSuccess(newSlots);
    }
  };

  // Check if the game is completed successfully
  const checkSuccess = (currentSlots: (TimelineEvent | null)[]) => {
    const allFilled = currentSlots.every(slot => slot !== null);
    if (allFilled) {
      const allCorrect = currentSlots.every((slot, index) => slot?.id === index + 1);
      if (allCorrect) {
        setShowSuccess(true);
      }
    }
  };

  // Reset the game
  const resetGame = () => {
    const shuffled = [...events].sort(() => Math.random() - 0.5);
    setShuffledEvents(shuffled);
    setSlots(Array(15).fill(null));
    setShowSuccess(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-dustyblue-700 font-serif">Timeline Shuffle Game</h1>
        <p className="text-lg text-dustyblue-600 mt-2 font-handwritten">
          Drag and drop the events in chronological order!
        </p>
      </div>

      {/* Available events to drag */}
      <div className="bg-dustyblue-50 rounded-xl p-6 shadow-md mb-8">
        <h2 className="text-xl font-semibold text-dustyblue-700 mb-4 text-center">Events to Place:</h2>
        <div className="flex flex-wrap gap-3">
          {shuffledEvents.map((event, index) => (
            <div
              key={event.id}
              draggable
              onDragStart={(e) => handleDragStart(e, event)}
              className="bg-dustyblue-100 text-dustyblue-800 rounded-lg px-4 py-2 cursor-move shadow-sm hover:shadow-md transition-shadow flex-grow md:flex-grow-0"
            >
              {event.text}
            </div>
          ))}
        </div>
      </div>

      {/* Timeline slots */}
      <div className="bg-dustyblue-50 rounded-xl p-6 shadow-md">
        <h2 className="text-xl font-semibold text-dustyblue-700 mb-4 text-center">Our Timeline:</h2>
        <div className="flex flex-col gap-3 items-center max-h-[60vh] overflow-y-auto">
          {slots.map((slot, index) => (
            <div
              key={index}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              className={cn(
                "flex border-2 rounded-lg p-3 min-h-[48px] transition-colors w-full max-w-md",
                slot
                  ? (slot.id === index + 1
                      ? "border-green-500 bg-dustyblue-100"
                      : "border-red-500 bg-dustyblue-100")
                  : "border-dashed border-dustyblue-300 bg-dustyblue-50"
              )}
            >
              <div className="w-8 h-8 rounded-full bg-dustyblue-400 text-white flex items-center justify-center self-center">
                {index + 1}
              </div>
              {slot ? (
                <div 
                  className="flex-grow flex items-center justify-center text-center cursor-move"
                  draggable
                  onDragStart={(e) => handleDragStart(e, slot, index)}
                >
                  {slot.text}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-between">
          <button
            onClick={resetGame}
            className="btn-outline text-sm"
          >
            Reset Game
          </button>

          <Link
            to="/"
            className="btn-secondary text-sm"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Success modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-dustyblue-700/40 flex items-center justify-center p-4 z-50">
          <div className="bg-dustyblue-50 rounded-2xl p-8 max-w-md shadow-xl animate-fade-in border border-dustyblue-200">
            <h2 className="text-3xl font-bold text-dustyblue-700 mb-4">🎉🎉🎉AWW YOU DID THATATATAT!!? 🎉🎉🎉</h2>
            <p className="text-lg text-dustyblue-600 mb-6">
              I'm so proud of you for doing this ACCCHXXXITTTIVITYYY!
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={resetGame}
                className="btn-outline"
              >
                Play Again
              </button>
              <Link
                to="/"
                className="btn-primary"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamePage;

