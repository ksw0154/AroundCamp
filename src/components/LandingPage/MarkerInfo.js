import React from "react";

const MarkerInfo = () => {
  return (
    <div className="wrap">
      <div className="info">
        <div className="title">
          카카오 스페이스닷원
          <div className="close" onclick="" title="닫기"></div>
        </div>
        <div className="body">
          <div className="img">
            <img src="https://cfile181.uf.daum.net/image/250649365602043421936D" width="73" height="70" />
          </div>
          <div className="desc">
            <div className="ellipsis">제주특별자치도 제주시 첨단로 242</div>' +<div className="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>
            <div>
              <a href="https://www.kakaocorp.com/main" target="_blank" className="link">
                홈페이지
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkerInfo;
