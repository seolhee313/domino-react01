import React from 'react';
import { Link } from 'react-router-dom';

const Footer = props => {
  return (
    <footer id="footer" className={props.attr} role="contentinfo">
      <div className="footer__inner container">
        <div className="footer__box">
          <div className="footer__order">
            <div className="footerlogo">
              <img src="assets/images/dominologo.svg" alt="" />
            </div>
            <span className="tel">1577-3082</span>
          </div>

          <ul className="footer__contact">
            <li>
              <Link to="/">이용약관</Link>
            </li>
            <li className="on">
              <Link to="/">개인정보처리방침</Link>
            </li>
            <li className="on">
              <Link to="/">위치기반서비스</Link>
            </li>
            <li>
              <Link to="/">청소년보호방침</Link>
            </li>
            <li>
              <Link to="/">고객센터</Link>
            </li>
            <li>
              <Link to="/">인재채용</Link>
            </li>
            <li>
              <Link to="/">가맹점모집</Link>
            </li>
            <li>
              <Link to="/">단체주문</Link>
            </li>
          </ul>

          <div className="footer__info">
            <p>
              06223 서울특별시 강남구 역삼로25길 35(역삼동, 청오큐브타워)
              청오디피케이㈜｜대표이사 : 오광현,김영훈
            </p>
            <p>
              사업자 등록번호: 220-81-03371｜통신판매업신고: 강남
              5064호｜개인정보 보호책임자 : 윤여진｜민원 책임자 : 이열우
            </p>
            <p>문의 : webmaster@dominos.co.kr</p>
            <p>Copyright ⓒ Domino’s Pizza. All rights reserved.</p>
            <p className="notice">
              청오디피케이㈜의 사전 서면동의 없이 도미노피자 사이트(PC, 모바일,
              앱)의 일체의 정보, 콘텐츠 및 UI 등을 상업적 목적으로 전재, 전송,
              스크래핑 등 무단 사용할 수 없습니다.
            </p>
            <p>
              도미노피자에서 판매되는 모든 상품은 청오디피케이㈜에서 책임지고
              있습니다.
            </p>
          </div>

          <div className="footer__cont">
            <div className="select language">
              <select id="select__type">
                <option value="/main?locale=ko">KOR</option>
                <option value="/main?locale=en">ENG</option>
              </select>
            </div>

            <dl className="app__box">
              <dt>DOWNLOAD APP</dt>
              <dd>
                <Link to="/">
                  <i className="ico-ios"></i>
                </Link>
                <Link to="/">
                  <i className="ico-android"></i>
                </Link>
              </dd>
            </dl>

            <div className="sns__box">
              <ul>
                <li>
                  <Link to="/">
                    <div className="ico-blog"></div>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <div className="ico-insta"></div>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <div className="ico-facebook"></div>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <div className="ico-youtube"></div>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <div className="ico-twitter"></div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="awards__area gray">
        <div className="inner__box container">
          <ul>
            <li>
              <img src="assets/images/list_awards.png" alt="" />
              <p>
                식품안전
                <br />
                경영시스템 인증
              </p>
            </li>
            <li>
              <img src="assets/images/list_awards2.png" alt="" />
              <p>
                지식경제부
                <br />
                우수디자인 선정
              </p>
            </li>
            <li>
              <img src="assets/images/list_awards3.png" alt="" />
              <p>
                2022년 고객이 가장 추천하는 기업
                <br />
                피자전문점 부문 10년 연속 1위
              </p>
            </li>
            <li>
              <img src="assets/images/list_awards4.png" alt="" />
              <p>
                2022년 한국산업 고객만족도
                <br />
                피자전문점 부문 8년 연속 1위
              </p>
            </li>
            <li>
              <img src="assets/images/list_awards5.png" alt="" />
              <p>
                2022 프리미엄브랜드지수
                <br />
                피자전문점 부문 7년 연속 1위 수상
              </p>
            </li>
            <li>
              <img src="assets/images/list_awards6.png" alt="" />
              <p>
                대학생 1000명이 선택한
                <br />
                2019 올해의 핫 브랜드 캠퍼스 잡앤조이 선정
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
