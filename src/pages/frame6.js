import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./frame6.css";
const Frame6 = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="frame-parent1">
      <header className="frame30">
        <div className="tweetinsight-wrapper3">
          <a className="tweetinsight6">tweetInsight</a>
        </div>
        <Link className="about15" to="/frame-6">
          <div className="about16">About</div>
        </Link>
        <a className="home15">
          <div className="about16">Home</div>
        </a>
      </header>
      <div className="frame31">
        <div className="frame32">
          <img
            className="twitter-logo-removebg-preview-icon4"
            alt=""
            src="/twitterlogoremovebgpreview-1@2x.png"
          />
          <div className="analysis-the-tweets6">{`Analysis the tweets , like a pro `}</div>
        </div>
        <div className="frame33">
          <button
            className="analyse-the-tweet-wrapper"
            onClick={onFrameButtonClick}
          >
            <div className="analyse-the-tweet">{`Analyse the tweet `}</div>
          </button>
          <button
            className="analyse-the-csv-wrapper"
            onClick={onFrameButton1Click}
          >
            <div className="analyse-the-csv2">{`Analyse the CSV `}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Frame6;
