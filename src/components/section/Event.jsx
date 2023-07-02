import React from 'react';
import { Link } from 'react-router-dom';

const Event = props => {
  return (
    <div id="event" className={props.attr}>
      <div className="event_inner container">
        <div className="event__login">
          <div className="titleWrap">
            <div className="title">
              도미노피자의
              <br />
              <strong>특별한 매니아 혜택</strong>
              <br />
              누려보세요!
            </div>
          </div>
          <div className="btnWrap">
            <Link to="/" className="btn">
              로그인
            </Link>
          </div>
        </div>
        <div className="event__box">
          <div>
            <Link to="/">
              <img src="assets/images/event01.png" alt="회원가입 20%할인" />
            </Link>
          </div>
          <div>
            <Link to="/">
              <img
                src="assets/images/event02.gif"
                alt="도미노 매니아만의 혜택"
              />
            </Link>
          </div>
          <div>
            <Link to="/">
              <img
                src="assets/images/event03.png"
                alt="나만의 피자 먹고싶은 그 날!"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
