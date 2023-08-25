import { Link } from "react-router-dom";
import "./frame1.css";
const Frame2 = () => {
  return (
    <div className="frame-top">
      <div className="rectangle-group">
        <div className="frame-item" />
        <div className="analyse1">Analyse</div>
      </div>
      <div className="frame9">
        <img className="frame-icon1" alt="" src="/frame@2x.png" />
      </div>
      <div className="frame10">
        <div className="analyse-the-csv-group">
          <div className="important-tweets">{`Analyse the CSV `}</div>
          <div className="frame11">
            <img className="add-file-icon1" alt="" src="/add-file1@2x.png" />
            <div className="tweet-bidenxlsx1">Tweet_Biden.xlsx</div>
            <div className="frame12">
              <div className="frame-inner" />
              <div className="line-div" />
              <div className="frame-child1" />
              <div className="frame-child2" />
              <div className="frame-child3" />
              <div className="frame-child4" />
              <div className="frame-child5" />
              <textarea className="hello" placeholder="Hello" disabled />
              <textarea className="hello1" placeholder="Hello" disabled />
              <textarea className="hello2" placeholder="Hello" disabled />
              <textarea className="hello3" placeholder="Hello" />
              <textarea className="hello4" placeholder="Hello" />
              <textarea className="hello5" placeholder="Hello" />
              <textarea className="hello6" placeholder="Hello" />
              <div className="frame13">
                <div className="important-tweets">Important Tweets</div>
              </div>
              <div className="frame-child6" />
            </div>
          </div>
        </div>
      </div>
      <div className="analysis-the-tweets2">{`Analysis the tweets , like a pro `}</div>
      <header className="frame14">
        <div className="tweetinsight-frame">
          <Link className="tweetinsight2" to="/frame-1">
            tweetInsight
          </Link>
        </div>
        <Link className="about4" to="/frame-6">
          <div className="about5">About</div>
        </Link>
        <Link className="home4" to="/frame-1">
          <div className="about5">Home</div>
        </Link>
      </header>
    </div>
  );
};

export default Frame2;
