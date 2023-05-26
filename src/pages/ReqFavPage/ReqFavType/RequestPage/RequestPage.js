import React from 'react';
import './RequestPage.scss';
const RequestPage = () => {
  const receiveRequests = [
    { id: 1, name: 'Hurin Seary', age: 24 },
    { id: 2, name: 'John Doe', age: 32 },
    { id: 3, name: 'Jane Smith', age: 27 },
  ];

  const spendRequests = [
    { id: 1, name: 'Hurin Seary', age: 24 },
    { id: 2, name: 'John Doe', age: 32 },
    { id: 3, name: 'Jane Smith', age: 27 },
  ];

  return (
    <div className="requestContainer">
      <div className="section">
        <div className="reciveRequestList">
          <div classname="reciveRequestHeader">
            <div className="reciveRequestHeader__text">받은 요청</div>
          </div>
          {receiveRequests.map(request => (
            <div className="reciveRequestItem" key={request.id}>
              <div className="reciveRequestItem__image">
                <img src="assets/images/user.png" alt="user" />
              </div>
              <div className="reciveRequestItem__text">
                <div className="reciveRequestItem__name">{request.name}</div>
                <div className="reciveRequestItem__age">{request.age}</div>
              </div>
              <div className="reciveRequestItem__button">
                <button className="acceptBtn">수락</button>
                <button className="denyBtn">거절</button>
              </div>
            </div>
          ))}
        </div>
        <div className="spendRequestList">
          <div classname="spendRequestHeader">
            <div className="spendRequestHeader__text">보낸 요청</div>
          </div>
          {spendRequests.map(request => (
            <div className="spendRequestItem" key={request.id}>
              <div className="spendRequestItem__image">
                <img src="assets/images/user.png" alt="user" />
              </div>
              <div className="spendRequestItem__text">
                <div className="spendRequestItem__name">{request.name}</div>
                <div className="spendRequestItem__age">{request.age}</div>
              </div>
              <div className="spendRequestItem__button">
                <button className="cancelBtn">취소</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RequestPage;
