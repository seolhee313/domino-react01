import React from 'react';
import { Link } from 'react-router-dom';

const Links = props => {
  return (
    <div id="link" className={props.attr}>
      <div className="link__box">
        <div className="itemWrap">
          <div className="item">
            <Link to="/">
              <i className="ico-delivery"></i>
              <span className="text">배달 주문</span>
              <span className="arrow"></span>
            </Link>
            <p>등급별 최대 30%</p>
          </div>
          <div className="item">
            <Link to="/">
              <i className="ico-takeout"></i>
              <span className="text">포장 주문</span>
              <span className="arrow"></span>
            </Link>
            <p>등급별 최대 30%</p>
          </div>

          <div className="item">
            <Link to="/">
              <i className="ico-quick3"></i>
              <span className="text">퀵오더</span>
              <span className="arrow"></span>
            </Link>
            <p>
              자주 이용하는 메뉴를
              <br />더 빠르게 주문해보세요!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
