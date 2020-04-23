import React from 'react';

interface Props {
  children: JSX.Element[];
};

const CardFooter: React.FC<Props> = ({ children }) => (
  <div className="card-footer d-flex justify-content-between">
    {children}
  </div>
);

export default CardFooter;
