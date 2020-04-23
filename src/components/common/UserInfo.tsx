import React from 'react';

interface Props {
  name: string;
  photoUrl: string;
  title: string;
  city: string;
  country: string;
};

const UserInfo: React.FC<Props> = ({
  photoUrl,
  name,
  title,
  city,
  country
}) => (
  <div className="d-flex flex-column align-items-center">
    <img
      className="rounded-circle mb-2"
      src={photoUrl}
      width="105"
      height="105"
      alt={`${name}_avatar`}
    />
    <div className="text-semi-bold">{name}</div>
    <div className="grey-text">{title}</div>
    <div className="grey-text">{`${city}, ${country}`}</div>
  </div>
);

export default UserInfo;
