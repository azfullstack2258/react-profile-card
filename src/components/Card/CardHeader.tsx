import React from 'react';

interface Props {
  children: JSX.Element[];
};

const CardHeader: React.FC<Props> = ({ children }) => (
  <div className="card-header d-flex justify-content-between align-items-center">
    {children}
  </div>
);

export default CardHeader;
