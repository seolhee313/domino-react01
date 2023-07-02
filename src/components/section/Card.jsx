import React from 'react';
import { Link } from 'react-router-dom';

const Card = props => {
  return (
    <div id="card" className={props.attr}>
      <div className="card__inner">
        <div className="card__box">
          <div className="cardItem">
            <Link to="/">
              <figure>
                <img src="assets/images/card01.jpg" alt="도미노스팟" />
              </figure>
            </Link>
          </div>
          <div className="cardItem">
            <Link to="/">
              <figure>
                <img src="assets/images/card02.jpg" alt="가맹점 모집" />
              </figure>
            </Link>
          </div>
          <div className="cardItem">
            <Link to="/">
              <figure>
                <img src="assets/images/card03.jpg" alt="단체주문 서비스" />
              </figure>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
