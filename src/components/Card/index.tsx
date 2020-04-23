import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaHeart, FaHeartBroken } from 'react-icons/fa';
import numeral from 'numeral';

import CardHeader from './CardHeader';
import CardContent from './CardContent';
import CardFooter from './CardFooter';
import StarRating from '../common/StarRating';
import UserInfo from '../common/UserInfo';

export interface ProfileProps {
  name: string;
  photoUrl: string;
  title: string;
  city: string;
  country: string;
  profileViews: number;
  websiteViews: number;
  avgRating: number;
  isFavorite: boolean;
};

const Card: React.FC<ProfileProps> = ({
  name,
  photoUrl,
  title,
  city,
  country,
  profileViews,
  websiteViews,
  avgRating,
  isFavorite
}) => {
  const [favorite, setFavorite] = useState(isFavorite);
  const toggleFavoriteStateChange = () => {
    setFavorite(!favorite);
  };

  return (
    <div className="card d-flex flex-column">
      <CardHeader>
        <span>Developer Profile</span>
        <Button className="border-0" color="red" variant="outline-info" onClick={toggleFavoriteStateChange}>
          {favorite ? <FaHeart /> : <FaHeartBroken />}
        </Button>
      </CardHeader>
      <CardContent>
        <UserInfo
          name={name}
          photoUrl={photoUrl}
          title={title}
          city={city}
          country={country}
        />
      </CardContent>
      <CardFooter>
        <div className="text-align-center">
          <span className="text">{numeral(profileViews).format('0,0')}</span>
          <span className="caption">Profile Views</span>
        </div>
        <div>
          <span className="text">{numeral(websiteViews).format('0,0')}</span>
          <span className="caption">Website Views</span>
        </div>
        <div>
          <StarRating rate={avgRating} />
          <span className="caption">Avg.Rating</span>
        </div>
      </CardFooter>
    </div>
  )
}

export default Card;
