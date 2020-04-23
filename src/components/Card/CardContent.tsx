import React from 'react';

interface Props {
  children: JSX.Element[] | JSX.Element;
};

const CardContent: React.FC<Props> = ({ children }) => (
  <div className="card-content d-flex flex-column align-items-center p-3">
    {children}
  </div>
);

export default CardContent;
