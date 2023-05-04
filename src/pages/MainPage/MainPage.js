import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.scss';

const MainPage = () => {
  return (
    <div className="mainContainer">
      <div className="matchCountWrapper">
        <div className="matchCountText">오늘 매칭수</div>
        <div className="matchCountNum">1,004</div>
      </div>
      <div className="recommendSliderContaioner">
        <div className="recommendHeader">
          <p className="recommendHeaderText">Recommendations</p>
          <Link to="/recommendations" className="recommendHeaderLink">
            More +
          </Link>
        </div>
        <div className="recomendSliderWrapper">
          <div className="recommendSliderItem">
            <div className="recommendSliderItemImg">
              <img src="assets/images/blog.png" alt="recommend" />
            </div>
            <div className="recommendSliderItemText">
              <div className="recommendSliderItemTitle">이상형 테스트</div>
              <div className="recommendSliderItemSub">
                이상형을 만들어보아요
              </div>
            </div>
          </div>
          <div className="recommendSliderItem">
            <div className="recommendSliderItemImg">
              <img src="assets/images/blog.png" alt="recommend" />
            </div>
            <div className="recommendSliderItemText">
              <div className="recommendSliderItemTitle">Byrom Guittet</div>
              <div className="recommendSliderItemSub">24</div>
            </div>
          </div>{' '}
          <div className="recommendSliderItem">
            <div className="recommendSliderItemImg">
              <img src="assets/images/blog.png" alt="recommend" />
            </div>
            <div className="recommendSliderItemText">
              <div className="recommendSliderItemTitle">Byrom Guittet</div>
              <div className="recommendSliderItemSub">24</div>
            </div>
          </div>
        </div>
      </div>
      <div className="recommendContainer">
        <div className="recommendHeader">
          <p className="recommendHeaderText">Recommendations</p>
          <Link to="/recommendations" className="recommendHeaderLink">
            More +
          </Link>
        </div>
        <div className="recommendWrapper">
          <div className="recommendItem">
            <div className="recommendItemImg">
              <img src="assets/images/product.png" alt="recommend" />
            </div>
            <div className="recommendItemText">
              <div className="recommendItemTitle">MBTI 테스트</div>
              <div className="recommendItemSub">
                내 MBTI 를 테스트 하고 잘 맞는 상대방의 MBTI를 확인해보세요
              </div>
            </div>
          </div>
          <div className="recommendItem">
            <div className="recommendItemImg">
              <img src="assets/images/product.png" alt="recommend" />
            </div>
            <div className="recommendItemText">
              <div className="recommendItemTitle">Byrom Guittet</div>
              <div className="recommendItemSub">24</div>
            </div>
          </div>
          <div className="recommendItem">
            <div className="recommendItemImg">
              <img src="assets/images/product.png" alt="recommend" />
            </div>
            <div className="recommendItemText">
              <div className="recommendItemTitle">Byrom Guittet</div>
              <div className="recommendItemSub">24</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
