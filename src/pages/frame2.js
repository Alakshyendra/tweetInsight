import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./frame2.css";
const Frame1 = () => {
  const navigate = useNavigate();

  const onTweetInsightClick = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  return (
    <div className="frame-root">
      <div className="rectangle-parent">
        <div className="frame-child" />
        <div className="analyse">Analyse</div>
      </div>
      <div className="frame3">
        <img className="frame-icon" alt="" src="/frame@2x.png" />
      </div>
      <div className="frame4">
        <div className="analyse-the-csv-parent">
          <div className="analyse-the-csv">{`Analyse the CSV `}</div>
          <div className="frame5">
            <div className="frame6">
              <img className="add-file-icon" alt="" src="/add-file1@2x.png" />
              <div className="tweet-bidenxlsx">Tweet_Biden.xlsx</div>
            </div>
            <textarea
              className="frame7"
              placeholder={`Neutral :-                                              20%
Postive:-                                                60%
Negative:-                                             20%`}
            />
          </div>
        </div>
      </div>
      <div className="analysis-the-tweets1">{`Analysis the tweets , like a pro `}</div>
      <header className="frame8">
        <div className="tweetinsight-container">
          <Link
            className="tweetinsight1"
            to="/frame-1"
            onClick={onTweetInsightClick}
          >
            tweetInsight
          </Link>
        </div>
        <Link className="about2" to="/frame-6">
          <div className="about3">About</div>
        </Link>
        <Link className="home2" to="/frame-1">
          <div className="about3">Home</div>
        </Link>
      </header>
    </div>
  );
};

export default Frame1;
