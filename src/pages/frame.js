import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormContainer1 from "../components/form-container1";
import "./frame.css";
const Frame = () => {
  const navigate = useNavigate();

  const onTweetInsightClick = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  return (
    <div className="frame-parent">
      <div className="frame">
        <header className="frame1">
          <div className="tweetinsight-wrapper">
            <Link
              className="tweetinsight"
              to="/frame-1"
              onClick={onTweetInsightClick}
            >
              tweetInsight
            </Link>
          </div>
          <Link className="about" to="/frame-6">
            <div className="about1">About</div>
          </Link>
          <Link className="home" to="/frame-1">
            <div className="about1">Home</div>
          </Link>
        </header>
        <FormContainer1 />
      </div>
      <div className="frame2">
        <img
          className="twitter-logo-removebg-preview-icon"
          alt=""
          src="/twitterlogoremovebgpreview-1@2x.png"
        />
        <div className="analysis-the-tweets">{`Analysis the tweets , like a pro `}</div>
      </div>
    </div>
  );
};

export default Frame;
