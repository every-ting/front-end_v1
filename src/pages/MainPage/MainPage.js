import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './MainPage.scss';
import { motion } from 'framer-motion';

const MainPage = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();
  console.log(code);

  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem('isLogedIn') === 'true') {
        console.log('로그인 되어있음');
      } else {
        navigate('/login');
      }
    }, 900);
  }, []);

  return (
    <motion.div
      className="mainContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="matchCountWrapper">
        <div className="matchCountText">오늘 매칭수</div>
        <div className="matchCountNum">1,004</div>
      </div>
      <div className="recommendSliderContaioner">
        <div className="recommendHeader">
          <p className="recommendHeaderText">추천 목록</p>
          {/* <Link to="/recommendations" className="recommendHeaderLink">
            More +
          </Link> */}
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
          <p className="recommendHeaderText">추천</p>
          {/* <Link to="/recommendations" className="recommendHeaderLink">
            More +
          </Link> */}
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
    </motion.div>
  );
};

export default MainPage;
