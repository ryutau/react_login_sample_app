import React, { useState } from 'react';
import { withRouter } from 'react-router';

const PageSwitch = () => {
  const [page, setPage] = useState(0);
  switch (page % 2) {
    case 0:
      return (<>
        説明ページ１
        <div onClick={() =>{
          setPage(page+1);
        }}>次へ</div>
      </>);
    case 1:
      return (<>
        説明ページ２
        <div onClick={() =>{
          setPage(page+1);
        }}>前へ</div>
      </>);
    default:
      return (<>
        エラー
      </>)
  }
}

const IntroductionPage = () => {
  return (<>
    説明ページです
    <PageSwitch />
  </>);
};

export default withRouter(IntroductionPage);