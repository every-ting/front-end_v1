import React from 'react';
import { useNavigate } from 'react-router-dom';

const GroupItem = ({ group }) => {
  const navigate = useNavigate();
  const { name, description, id } = group;
  return (
    <div
      className="groupItem"
      onClick={() => navigate(`/groupQR/${id}`)}
      key={id}
    >
      <div className="groupItemHeader">
        <h1 className="groupItemName">{name}</h1>
      </div>
      <div className="groupItemDescription">{description}</div>
    </div>
  );
};

export default GroupItem;
