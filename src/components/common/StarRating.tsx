import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

interface Props {
  rate: number;
};

const StarRating: React.FC<Props> = ({ rate }) => {
  const stars = [1, 2, 3, 4, 5];
  return (

    <div className="d-flex">
    {stars.slice(0, rate)
      .map((_, index) => <FaStar key={index} />)
    }
    {stars.slice(rate, 5)
      .map((_, index) => <FaRegStar key={index} />)
    }
    </div>
  )  
};

export default StarRating;
