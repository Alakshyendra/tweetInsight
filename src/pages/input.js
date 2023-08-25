import "./input.css";
const Input = () => {
  return (
    <div className="input">
      <img className="dismiss-button-icon1" alt="" src="/dismiss-button1.svg" />
      <div className="text-container1">
        <div className="value1">{`Enter the text `}</div>
        <div className="cursor1">
          <div className="cursor-child">
            <div className="instance-item" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
