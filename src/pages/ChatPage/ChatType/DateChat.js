import React from 'react';
import { Link } from 'react-router-dom';
import './DateChat.scss';

const chatMember = [
  {
    imageUrl: 'user.png',
    name: 'Hurin Seary',
    status: 'bg-success',
  },
  {
    imageUrl: 'user.png',
    name: 'Victor Exrixon',
    status: 'bg-success',
  },
  {
    imageUrl: 'user.png',
    name: 'Surfiya Zakir',
    status: 'bg-warning',
  },
  {
    imageUrl: 'user.png',
    name: 'Goria Coast',
    status: 'bg-danger',
  },
  {
    imageUrl: 'user.png',
    name: 'Hurin Seary',
    status: 'bg-success',
  },
  {
    imageUrl: 'user.png',
    name: 'David Goria',
    status: 'bg-success',
  },
  {
    imageUrl: 'user.png',
    name: 'Seary Victor',
    status: 'bg-success',
  },
  {
    imageUrl: 'user.png',
    name: 'Ana Seary',
    status: 'bg-success',
  },
  {
    imageUrl: 'user.png',
    name: 'Hurin Seary',
    status: 'bg-success',
  },
  {
    imageUrl: 'user.png',
    name: 'Victor Exrixon',
    status: 'bg-success',
  },
  {
    imageUrl: 'user.png',
    name: 'Surfiya Zakir',
    status: 'bg-warning',
  },
  {
    imageUrl: 'user.png',
    name: 'Goria Coast',
    status: 'bg-danger',
  },
  {
    imageUrl: 'user.png',
    name: 'Victor Exrixon',
    status: 'bg-success',
  },
  {
    imageUrl: 'user.png',
    name: 'Surfiya Zakir',
    status: 'bg-warning',
  },
  {
    imageUrl: 'user.png',
    name: 'Goria Coast',
    status: 'bg-danger',
  },
  {
    imageUrl: 'user.png',
    name: 'Victor Exrixon',
    status: 'bg-success',
  },
  {
    imageUrl: 'user.png',
    name: 'Surfiya Zakir',
    status: 'bg-warning',
  },
  {
    imageUrl: 'user.png',
    name: 'Goria Coast',
    status: 'bg-danger',
  },
];

const DateChat = () => {
  return (
    <>
      <ul className="listGroup list-group-flush">
        {chatMember.map((value, index) => (
          // Start Single Demo
          <li className="bgTransparent" key={index}>
            <figure className="avatar">
              <img
                src={`assets/images/${value.imageUrl}`}
                alt="avater"
                className="roundedCircle"
              />
            </figure>
            <Link to={`/chatRoom/${index}`} className="chatBox">
              <h3 className="fw-700 mb-0 mt-1">
                <span className="nameText">{value.name}</span>
              </h3>
              <span className="msgText">What's up, how are you?</span>
            </Link>

            <span className={`${value.status}`} />
          </li>
          // End Single Demo
        ))}
      </ul>
    </>
  );
};

export default DateChat;
