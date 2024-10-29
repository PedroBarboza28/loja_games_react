import React from "react";

interface RatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({ rating, onRatingChange }) => {
  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => (
        <label key={index}>
          <input
            type="radio"
            value={index + 1}
            checked={rating === index + 1}
            onChange={() => onRatingChange(index + 1)}
            style={{ display: 'none' }} // Oculta o input radio
          />
          <span
            onClick={() => onRatingChange(index + 1)}
            style={{
              cursor: 'pointer',
              fontSize: '24px',
              color: index < rating ? '#FFD700' : '#ccc',
            }}
          >
            ★
          </span>
        </label>
      ))}
    </div>
  );
};

export default Rating;
