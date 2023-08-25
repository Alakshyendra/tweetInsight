import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./form-container1.css";
const FormContainer1 = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/frame-4");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/frame-5");
  }, [navigate]);

  return (
    <div className="frame34">
      <div className="frame35">
        <button className="analyse-wrapper" onClick={onFrameButtonClick}>
          <div className="filter">Analyse</div>
        </button>
        <button className="filter-wrapper" onClick={onFrameButton1Click}>
          <div className="filter">Filter</div>
        </button>
      </div>
      <div className="analyse-the-csv-container">
        <div className="analyse-the-csv3">{`Analyse the CSV `}</div>
        <div className="frame36">
          <div className="upload-the-file">Upload the file</div>
          <div className="frame37">
            <img className="add-file-icon2" alt="" src="/add-file@2x.png" />
            <div className="drag-and-drop-container">
              <p className="drag-and-drop">Drag and drop the file here</p>
              <p className="limit-200mb-per">Limit 200MB per file</p>
            </div>
            <input className="frame38" type="file" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer1;
