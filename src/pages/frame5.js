import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./frame5.css";
const Frame5 = () => {
  const navigate = useNavigate();

  const onTweetInsightClick = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  return (
    <div className="frame-frame">
      <header className="frame27">
        <div className="tweetinsight-wrapper2">
          <Link
            className="tweetinsight5"
            to="/frame-1"
            onClick={onTweetInsightClick}
          >
            tweetInsight
          </Link>
        </div>
        <Link className="about13" to="/frame-6">
          <div className="about14">About</div>
        </Link>
        <Link className="home13" to="/frame-1">
          <div className="about14">Home</div>
        </Link>
      </header>
      <div className="frame28">
        <img
          className="twitter-logo-removebg-preview-icon3"
          alt=""
          src="/twitterlogoremovebgpreview-1@2x.png"
        />
        <div className="analysis-the-tweets5">{`Analysis the tweets , like a pro `}</div>
      </div>
      <div className="frame29">
        <input
          className="frame-child7"
          type="text"
          placeholder="Write the tweet...."
          disabled
        />
      </div>
    </div>
  );
};

export default Frame5;
