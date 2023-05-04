import React from 'react';
import './ChatRoomPage.scss';

const ChatRoomPage = () => {
  return (
    <div className="chatRoomContainer">
      <div className="chat-wrapper pt-0 w-100 position-relative scroll-bar bg-white theme-dark-bg">
        <div className="chat-body p-3 ">
          <div className="messages-content pb-5">
            <div className="message-item">
              <div className="message-user">
                <figure className="avatar">
                  <img src="assets/images/user.png" alt="avater" />
                </figure>
                <div>
                  <h5>Byrom Guittet</h5>
                  <div className="time">01:35 PM</div>
                </div>
              </div>
              <div className="message-wrap">I'm fine, how are you.</div>
            </div>

            <div className="message-item outgoing-message">
              <div className="message-user">
                <div>
                  <div className="time">
                    01:35 PM
                    <i className="ti-double-check text-info" />
                  </div>
                </div>
              </div>
              <div className="message-wrap">
                I want those files for you. I want you to send 1 PDF and 1 image
                file.
              </div>
            </div>

            <div className="message-item">
              <div className="message-user">
                <figure className="avatar">
                  <img src="assets/images/user.png" alt="avater" />
                </figure>
                <div>
                  <h5>Byrom Guittet</h5>
                  <div className="time">01:35 PM</div>
                </div>
              </div>
              <div className="message-wrap">
                I've found some cool photos for our travel app.
              </div>
            </div>

            <div className="message-item outgoing-message">
              <div className="message-user">
                <div>
                  <div className="time">
                    01:35 PM
                    <i className="ti-double-check text-info" />
                  </div>
                </div>
              </div>
              <div className="message-wrap">
                Hey mate! How are things going ?
              </div>
            </div>

            <div className="message-item">
              <div className="message-user">
                <figure className="avatar">
                  <img src="assets/images/user.png" alt="avater" />
                </figure>
                <div>
                  <h5>Byrom Guittet</h5>
                  <div className="time">01:35 PM</div>
                </div>
              </div>
              <figure>
                <img
                  src="https://via.placeholder.com/270x150.png"
                  className="w-75 img-fluid rounded-lg"
                  alt="avater"
                />
              </figure>
            </div>

            <div className="message-item outgoing-message">
              <div className="message-user">
                <div>
                  <div className="time">
                    01:35 PM
                    <i className="ti-double-check text-info" />
                  </div>
                </div>
              </div>
              <div className="message-wrap" style={{ marginBottom: '90px' }}>
                Hey mate! How are things going ?
              </div>
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </div>
      <div
        className="chat-bottom dark-bg p-3 shadow-none theme-dark-bg"
        style={{ width: '98%' }}
      >
        <form className="chat-form">
          <button className="bg-grey float-left">
            <i className="ti-microphone text-grey-600" />
          </button>
          <div className="form-group">
            <input type="text" placeholder="Start typing.." />
          </div>
          <button className="bg-current">
            <i className="ti-arrow-right text-white" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatRoomPage;
