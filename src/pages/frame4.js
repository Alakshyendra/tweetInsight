import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./frame4.css";
const Frame4 = () => {
  const navigate = useNavigate();

  const onTweetInsightClick = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  return (
    <div className="frame-container">
      <header className="frame20">
        <div className="tweetinsight-wrapper1">
          <Link
            className="tweetinsight4"
            to="/frame-1"
            onClick={onTweetInsightClick}
          >
            tweetInsight
          </Link>
        </div>
        <div className="about8">
          <div className="about9">About</div>
        </div>
        <Link className="home8" to="/frame-1">
          <div className="about9">Home</div>
        </Link>
      </header>
      <div className="frame21">
        <div className="frame22">
          <div className="analysis-the-tweets4">{`Analysis the tweets , like a pro `}</div>
        </div>
        <div className="frame23">
          <div className="frame24">
            <div className="frame25">
              <div className="hasdfkjhalsdhflhakjslhfdhasdhf">
                <p className="fasdf">
                  hasdfkjhalsdhflhakjslhfdhasdhfasdfasdfasdfasdfasdfasdfasdfasd
                </p>
                <p className="fasdf">fasdf</p>
                <p className="fasdf">asd</p>
                <p className="fasdf">fa</p>
                <p className="fasdf">sdfasddfasdf</p>
                <p className="fasdf">as</p>
                <p className="fasdf">dfa</p>
                <p className="fasdf">sd</p>
                <p className="fasdf">fasdfasdfasdfasdf</p>
                <p className="fasdf">asdfasdfasdf</p>
                <p className="fasdf">asd</p>
                <p className="fasdf">f</p>
              </div>
            </div>
            <div className="frame26">
              <div className="rectangle-div" />
              <img
                className="twitter-logo-removebg-preview-icon2"
                alt=""
                src="/twitterlogoremovebgpreview-11@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame4;
