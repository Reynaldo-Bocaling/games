import { useState } from "react";

function App() {
  // Download function
  const download = () => {
    if (isIOS()) {
      window.location.href = "http://login.luckpkrUIapp.com/ios";
      return false;
    }

    const link = document.createElement("a");
    link.style.display = "none";
    link.href = "https://res.luckpkrUIapp.com/beta/Package/Lucky_PKR_1000.apk";
    link.download = "Lucky PKR";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // iOS detection
  const isIOS = () => {
    var u = navigator.userAgent;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // iOS
    return isiOS;
  };

  return (
    <div className="warp">
      <div className="main">
        <img src="/imgs/icon.png" className="logo" alt="logo" />
      </div>
      <img
        id="installbtn"
        src="/imgs/btn_down1.png"
        className="dowmload-button animate__animated animate__pulse animate__infinite"
        alt="download"
        onClick={download} // Add onClick event here
      />
      <div className="footer">
        <div className="tip">
          <img src="/imgs/icon.png" className="small-logo" alt="logo" />
          <div className="tip-content">
            <b className="bit-game">Lucky PKR</b>
            <p className="subtitle">
              Velocidade de download extremamente rápida e experiência de alta
              qualidade
            </p>
          </div>
        </div>
        <div
          id="downloadbtn"
          className="dowmload"
          onClick={download} // Add onClick event here
        >
          Download
        </div>
      </div>
    </div>
  );
}

export default App;
