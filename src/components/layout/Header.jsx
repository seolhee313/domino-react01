import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  const [isSnbActive, setIsSnbActive] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const handleSnbToggle = () => {
    setIsSnbActive(!isSnbActive);
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setIsHeaderFixed(scrollTop > 0);
  };

  // 스크롤 이벤트 등록
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      id="header__wrap"
      className={`${props.attr} ${isHeaderFixed ? 'fixed' : ''}`}
      role="heading"
      aria-level="1"
    >
      <div className="header__inner">
        <div className="header__top container">
          <h1 className="header__logo">
            <img src="assets/images/dominologo.svg" alt="도미노 피자" />
          </h1>
          <div className="header__search">
            <h3>주변 매장의 프로모션을 확인해보세요!</h3>
          </div>
          <div className="header__member">
            <Link to="/">로그인</Link>
            <Link to="/">회원가입</Link>
            <Link to="/" className="lang">
              <div className="select1 language">
                <select className="select-type">
                  <option value="/main?locale=ko">KOR</option>
                  <option value="/main?locale=en">ENG</option>
                </select>
              </div>
            </Link>
          </div>
        </div>

        <nav className="header__menu">
          <ul>
            <li>
              <Link to="/">메뉴</Link>
            </li>
            <li>
              <Link to="/">e-쿠폰</Link>
            </li>
            <li>
              <Link to="/">상품권 선물</Link>
            </li>
            <li>
              <Link to="/">이벤트·제휴</Link>
            </li>
            <li>
              <Link to="/">매장검색</Link>
            </li>
            <li>
              <Link to="/">가맹점 모집</Link>
            </li>
          </ul>
          <Link
            to="/"
            className={`snb-more ${isSnbActive ? 'active' : ''}`}
            onClick={handleSnbToggle}
          >
            더보기
          </Link>
        </nav>

        <div className={`snb-wrap ${isSnbActive ? 'active' : ''}`}>
          <div className="inner-box">
            <div className="mnu-wrap">
              <div className="mnu-box">
                <Link to="/">도미노 서비스</Link>
                <ul>
                  <li>
                    <Link to="/">매니아 혜택</Link>
                  </li>
                  <li>
                    <Link to="/">도미노 모멘트</Link>
                  </li>
                  <li>
                    <Link to="/">퀵오더</Link>
                  </li>
                  <li>
                    <Link to="/">단체주문 서비스</Link>
                  </li>
                </ul>
              </div>
              <div className="mnu-box">
                <Link to="/">고객센터</Link>
                <ul>
                  <li>
                    <Link to="/">자주하는 질문</Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span className="qnaForm-title">문의하기/칭찬</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mnu-box">
                <Link to="/">회사소개</Link>
                <ul>
                  <li>
                    <Link to="/">한국도미노피자</Link>
                  </li>
                  <li>
                    <Link to="/">광고갤러리</Link>
                  </li>
                  <li>
                    <Link to="/">사회공헌활동</Link>
                  </li>
                  <li>
                    <Link to="/">가맹점 모집</Link>
                  </li>
                  <li>
                    <Link to="/">인재채용</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="notice-box">
              <Link to="/">공지사항</Link>
              <ul>
                <li>
                  <Link to="/">도미노뉴스</Link>
                </li>
                <li>
                  <Link to="/">보도자료</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
