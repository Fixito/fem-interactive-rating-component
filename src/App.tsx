import { useState } from "react";
import RatingCard from "./components/RatingCard.tsx";
import ThankYouCard from "./components/ThankYouCard.tsx";

export default function App() {
  const [isSent, setIsSent] = useState(false);
  const [rating, setRating] = useState(0);

  const handleSubmit = (rating: number) => {
    setIsSent(true);
    setRating(rating);
  };

  return (
    <main className="flex min-h-dvh items-center justify-center px-6">
      {!isSent ? (
        <RatingCard onSubmit={handleSubmit} />
      ) : (
        <ThankYouCard rating={rating} />
      )}
    </main>
  );
}
