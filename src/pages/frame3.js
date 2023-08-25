import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./frame3.css";
import axios from 'axios';

const Frame3 = () => {
  const navigate = useNavigate();
  const [userInput,setUserInput] = useState("")
  const [sentiment, setSentiment] = useState('');

  const onTweetInsightClick = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  const onFrame1Click = useCallback(() => {
    navigate("/frame-7");
  }, [navigate]);

  const analyzeSentiment = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/ ', { tweet: userInput });
      setSentiment(response.data.sentiment);
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
    }
  };

  return (
    <div className="frame-wrapper">
      <header className="frame15">
        <div className="frame-div">
          <Link
            className="tweetinsight3"
            to="/frame-1"
            onClick={onTweetInsightClick}
          >
            tweetInsight
          </Link>
        </div>
        <Link className="about6" to="/frame-6">
          <div className="about7">About</div>
        </Link>
        <Link className="home6" to="/frame-1">
          <div className="about7">Home</div>
        </Link>
      </header>
      <div className="frame16">
        <div className="frame17">
          <img
            className="twitter-logo-removebg-preview-icon1"
            alt=""
            src="/twitterlogoremovebgpreview-1@2x.png"
          />
          <div className="analysis-the-tweets3">{`Analysis the tweets , like a pro `}</div>
        </div>
        <div className="frame18">
          <input
            className="frame-input"
            type="text"
            placeholder="Write the tweet...."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <div className="rectangle-container">
            <button className="rectangle-button" onClick={analyzeSentiment}/>
            <div className="analyse2">Analyse</div>
          </div>
          <button className="frame19" onClick={onFrame1Click} />
          <div className="summarise">Summarise</div>
        </div>
          <p>--->{sentiment}</p>
      </div>
    </div>
  );
};

export default Frame3;
