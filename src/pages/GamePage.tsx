
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

// Define our event type
interface TimelineEvent {
  id: number;
  text: string;
}

const GamePage: React.FC = () => {
  // Sample timeline events (You should replace these with your own 15 relationship events)
  const [events, setEvents] = useState<TimelineEvent[]>([
    { id: 1, text: "First date at the coffee shop" },
    { id: 2, text: "Movie night under the stars" },
    { id: 3, text: "First trip to the beach together" },
    { id: 4, text: "Surprise birthday celebration" },
    { id: 5, text: "Cooking class adventure" },
    { id: 6, text: "Hiking trip to the mountains" },
    { id: 7, text: "Meeting each other's families" },
    { id: 8, text: "Weekend getaway to the countryside" },
    { id: 9, text: "First argument and making up" },
    { id: 10, text: "Adoption of our pet" },
    { id: 11, text: "Celebrating six months together" },
    { id: 12, text: "Dance class we took together" },
    { id: 13, text: "Holiday celebration together" },
    { id: 14, text: "Valentine's Day special date" },
    { id: 15, text: "Our one year anniversary trip" },
  ]);

  const [shuffledEvents, setShuffledEvents] = useState<TimelineEvent[]>([]);
  const [slots, setSlots] = useState<(TimelineEvent | null)[]>(Array(15).fill(null));
  const [showSuccess, setShowSuccess] = useState(false);
  const [draggedEvent, setDraggedEvent] = useState<TimelineEvent | null>(null);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  // Shuffle events when component mounts
  useEffect(() => {
    const shuffled = [...events].sort(() => Math.random() - 0.5);
    setShuffledEvents(shuffled);
  }, []);

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
      <div className="bg-white/80 rounded-xl p-6 shadow-md mb-8">
        <h2 className="text-xl font-semibold text-dustyblue-700 mb-4">Events to Place:</h2>
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
      <div className="bg-white/80 rounded-xl p-6 shadow-md">
        <h2 className="text-xl font-semibold text-dustyblue-700 mb-4">Our Timeline:</h2>
        <div className="flex flex-col gap-3">
          {slots.map((slot, index) => (
            <div
              key={index}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              className={cn(
                "flex border-2 rounded-lg p-3 min-h-[48px] transition-colors",
                slot ? (slot.id === index + 1 ? "border-green-400 bg-green-50" : "border-red-400 bg-red-50") : "border-dashed border-dustyblue-300"
              )}
            >
              <div className="w-8 h-8 rounded-full bg-dustyblue-500 text-white flex items-center justify-center mr-3">
                {index + 1}
              </div>
              {slot ? (
                <div 
                  className="flex-grow flex items-center"
                  draggable
                  onDragStart={(e) => handleDragStart(e, slot, index)}
                >
                  {slot.text}
                </div>
              ) : (
                <div className="flex-grow flex items-center text-dustyblue-400">
                  Drop an event here...
                </div>
              )}
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md shadow-xl animate-fade-in">
            <h2 className="text-3xl font-bold text-dustyblue-700 mb-4">You did it! 🎉</h2>
            <p className="text-lg text-dustyblue-600 mb-6">
              Amazing job remembering our special moments in order!
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
