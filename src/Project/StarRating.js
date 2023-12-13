import React from 'react';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star-review">&#9733;</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star-review">&#9734;</span>);
    }

    return stars;
  };

  return <div className="star-rating px-3">{renderStars()}</div>;
};

export default StarRating;