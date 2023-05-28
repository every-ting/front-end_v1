import React from 'react';
import './FilterModal.scss';
import BackButton from '../../backButton/commonBackButton/BackButton';

const FilterModal = () => {
  return (
    <div className="filterModal">
      <div className="filterModalContainer">
        <BackButton header="필터 설정" />
        <div className="filterModalHeader">
          <div className="filterModalHeaderTitle">필터</div>
          <div className="filterModalHeaderClose">X</div>
        </div>
        <div className="filterModalBody">
          <div className="filterModalBodyTitle">나이</div>
          <div className="filterModalBodyContent">
            <div className="filterModalBodyContentItem">20대</div>
            <div className="filterModalBodyContentItem">30대</div>
            <div className="filterModalBodyContentItem">40대</div>
            <div className="filterModalBodyContentItem">50대</div>
          </div>
        </div>
        <div className="filterModalBody">
          <div className="filterModalBodyTitle">성별</div>
          <div className="filterModalBodyContent">
            <div className="filterModalBodyContentItem">남자</div>
            <div className="filterModalBodyContentItem">여자</div>
          </div>
        </div>
        <div className="filterModalBody">
          <div className="filterModalBodyTitle">지역</div>
          <div className="filterModalBodyContent">
            <div className="filterModalBodyContentItem">서울</div>
            <div className="filterModalBodyContentItem">경기</div>
            <div className="filterModalBodyContentItem">인천</div>
            <div className="filterModalBodyContentItem">대전</div>
            <div className="filterModalBodyContentItem">대구</div>
            <div className="filterModalBodyContentItem">부산</div>
            <div className="filterModalBodyContentItem">울산</div>
            <div className="filterModalBodyContentItem">광주</div>
            <div className="filterModalBodyContentItem">강원</div>
            <div className="filterModalBodyContentItem">충북</div>
            <div className="filterModalBodyContentItem">충남</div>
            <div className="filterModalBodyContentItem">전북</div>
            <div className="filterModalBodyContentItem">전남</div>
            <div className="filterModalBodyContentItem">경북</div>
            <div className="filterModalBodyContentItem">경남</div>
            <div className="filterModalBodyContentItem">제주</div>
          </div>
        </div>
        <div className="filterModalBody">
          <div className="filterModalBodyTitle">관심사</div>
          <div className="filterModalBodyContent">
            <div className="filterModalBodyContentItem">운동</div>
            <div className="filterModalBodyContentItem">영화</div>
            <div className="filterModalBodyContentItem">음악</div>
            <div className="filterModalBodyContentItem">책</div>
            <div className="filterModalBodyContentItem">게임</div>
            <div className="filterModalBodyContentItem">요리</div>
            <div className="filterModalBodyContentItem">댄스</div>
            <div className="filterModalBodyContentItem">미술</div>
            <div className="filterModalBodyContentItem">공예</div>
            <div className="filterModalBodyContentItem">사진</div>
            <div className="filterModalBodyContentItem">자동차</div>
            <div className="filterModalBodyContentItem">반려동물</div>
            <div className="filterModalBodyContentItem">여행</div>
            <div className="filterModalBodyContentItem">패션</div>
            <div className="filterModalBodyContentItem">뷰티</div>
            <div className="filterModalBodyContentItem">IT</div>
            <div className="filterModalBodyContentItem">경제</div>
            <div className="filterModalBodyContentItem">시사</div>
            <div className="filterModalBodyContentItem">연예</div>
            <div className="filterModalBodyContentItem">스포츠</div>
            <div className="filterModalBodyContentItem">쇼핑</div>
            <div className="filterModalBodyContentItem">맛집</div>
            <div className="filterModalBodyContentItem">직업</div>
            <div className="filterModalBodyContentItem">취미</div>
            <div className="filterModalBodyContentItem">기타</div>
          </div>
        </div>
        <div className="filterModalBody">
          <div className="filterModalBodyTitle">학과</div>
          <div className="filterModalBodyContent">
            <div className="filterModalBodyContentItem">경영학과</div>
            <div className="filterModalBodyContentItem">경제학과</div>
            <div className="filterModalBodyContentItem">국제학과</div>
            <div className="filterModalBodyContentItem">국제통상학과</div>
            <div className="filterModalBodyContentItem">국제통상학부</div>
            <div className="filterModalBodyContentItem">국제학부</div>
            <div className="filterModalBodyContentItem">국제학전공</div>
            <div className="filterModalBodyContentItem">
              국제학전공(국제통상학부)
            </div>
          </div>
        </div>
        <div className="filterModalBody">
          <div className="filterModalBodyTitle">키</div>
          <div className="filterModalBodyContent">
            <div className="filterModalBodyContentItem">150cm 이하</div>
            <div className="filterModalBodyContentItem">150cm ~ 160cm</div>
            <div className="filterModalBodyContentItem">160cm ~ 170cm</div>
            <div className="filterModalBodyContentItem">170cm ~ 180cm</div>
            <div className="filterModalBodyContentItem">180cm ~ 190cm</div>
          </div>
        </div>
        <div className="filterModalBody">
          <div className="filterModalBodyTitle">체형</div>
          <div className="filterModalBodyContent">
            <div className="filterModalBodyContentItem">마른체형</div>
            <div className="filterModalBodyContentItem">보통체형</div>
            <div className="filterModalBodyContentItem">근육질</div>
            <div className="filterModalBodyContentItem">통통한체형</div>
            <div className="filterModalBodyContentItem">뚱뚱한체형</div>
          </div>
        </div>
        <div className="filterModalBody">
          <div className="filterModalBodyTitle">MBTI</div>
          <div className="filterModalBodyContent">
            <div className="filterModalBodyContentItem">ISTJ</div>
            <div className="filterModalBodyContentItem">ISFJ</div>
            <div className="filterModalBodyContentItem">INFJ</div>
            <div className="filterModalBodyContentItem">INTJ</div>
            <div className="filterModalBodyContentItem">ISTP</div>
            <div className="filterModalBodyContentItem">ISFP</div>
            <div className="filterModalBodyContentItem">INFP</div>
            <div className="filterModalBodyContentItem">INTP</div>
            <div className="filterModalBodyContentItem">ESTP</div>
            <div className="filterModalBodyContentItem">ESFP</div>
            <div className="filterModalBodyContentItem">ENFP</div>
            <div className="filterModalBodyContentItem">ENTP</div>
            <div className="filterModalBodyContentItem">ESTJ</div>
            <div className="filterModalBodyContentItem">ESFJ</div>
            <div className="filterModalBodyContentItem">ENFJ</div>
            <div className="filterModalBodyContentItem">ENTJ</div>
          </div>
        </div>
        <div className="filterSubmitButton">적용하기</div>
      </div>
    </div>
  );
};

export default FilterModal;
