import React, { useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Dashboard = () => {
  const [RegistrationPlateNoText, setRegistrationPlateNoText] = useState("");
  const [countyText, setCountyText] = useState("");
  const [selectedFont, setSelectedFont] = useState("Metro");
  const [topselectedFont, setTopSelectedFont] = useState("Arial");
  const [selectedBorder, setSelectedBorder] = useState("1mm");
  const [fontSize, setFontSize] = useState(15);
  const [topfontSize, setTopFontSize] = useState(5);
  const [topfontSizeMargin, setTopFontSizeMargin] = useState(0);
  const [bottomfontSizeMargin, setBottomFontSizeMargin] = useState(0);
  const [imageUrl, setImageUrl] = useState("black_Irl.png");
  const [imageVisible, setImageVisible] = useState(true);
  const [centerPlate, setCenterPlate] = useState("91%");
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login", { replace: true });
  };

  const handleFontSizeChange = (event) => {
    const newSize = parseInt(event.target.value);
    setFontSize(newSize);
  };

  const handleToggleImage = () => {
    if (imageVisible) {
      setImageVisible(!imageVisible);
    } else {
      setImageVisible(true);
    }
  };

  const handleCenterPlate = () => {
    if (centerPlate === "91%") {
      setImageVisible(!imageVisible);
      setCenterPlate("100%");
    } else {
      setCenterPlate("91%");
      setImageVisible(true);
    }
  };

  const handleTopFontSizeChange = (event) => {
    const newSize = parseInt(event.target.value);
    setTopFontSize(newSize);
  };
  const handleTopFontSizeMarginChange = (event) => {
    const newSize = parseInt(event.target.value);
    setTopFontSizeMargin(newSize);
  };

  const handleBottomFontSizeMarginChange = (event) => {
    const newSize = parseInt(event.target.value);
    setBottomFontSizeMargin(newSize);
  };

  const handleRegistrationPlateNoTextChange = (e) => {
    setRegistrationPlateNoText(e.target.value);
  };

  const handleCountyTextChange = (e) => {
    setCountyText(e.target.value);
  };

  const handleFontChange = (e) => {
    setSelectedFont(e.target.value);
  };

  const handleTopFontChange = (e) => {
    setTopSelectedFont(e.target.value);
  };

  const handleBorderChange = (e) => {
    setSelectedBorder(e.target.value);
  };

  const handleChangeImage = () => {
    const newImageUrl = "blue_Irl.png";
    if (imageUrl === newImageUrl) {
      setImageUrl("black_Irl.png");
    } else {
      setImageUrl(newImageUrl);
    }
  };

  const handleDownloadmakePDF = () => {
    const divElement = document.getElementById("pdfDiv");

    html2canvas(divElement, { scale: 20 }).then((canvas) => {
      const imageData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("l", "px", [520, 111]);
      pdf.addImage(imageData, "PNG", 0, 0, 520, 111, undefined, "FAST", 0, 600);
      pdf.save("irl_plate.pdf");
    });
  };

  return (
    <div>
       <div className="container">
        <div>
          <h1>Ireland Vehicle Registration Plate</h1>
        </div>
        <div style={{ margin: "25px" }}>
          <button className="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div
        id="pdfDiv"
        className="plate_container"
        style={{
          border: `${
            selectedBorder === "none" ? "none" : `${selectedBorder} solid black`
          } `,
          borderRadius: `${selectedBorder === "none" ? "6px" : "10px"} `,
        }}
      >
        <div
          className="left"
          style={{
            backgroundColor: "#fff",
            // borderRadius: `${ selectedBorder !== "none" || selectedBorder !== "0.5mm" ? "inherit" : ""} ` ,
            width: `${centerPlate !== "100%" ? "9% " : "0%"}`,
          }}
        >
          {imageVisible && (
            <img
              src={imageUrl}
              alt="IRL"
              style={{
                width: "100%",
                height: "100%",
                backgroundColor:
                  selectedBorder !== "none" && selectedBorder !== "0.5mm"
                    ? imageUrl === "blue_Irl.png"
                      ? "#0f4add"
                      : "black"
                    : "transparent",
              }}
            />
          )}
        </div>

        <div
          className="right"
          style={{
            width: `${centerPlate}`,
            borderRadius: `${centerPlate === "100%" ? " 7px " : "0 7px 7px 0"}`,
          }}
        >
          <div className="country">
            <span
              style={{
                fontWeight: "bold",
                marginTop: `${topfontSizeMargin}px`,
                fontSize: `${topfontSize}px`,
                fontFamily: `${topselectedFont}`,
              }}
            >
              {countyText}
            </span>
          </div>
          <div className="plate">
            <span
              style={{
                marginBottom: `${bottomfontSizeMargin}px`,
                fontSize: `${fontSize}px`,
                fontFamily: `${selectedFont}`,
                width: "100%",
                textAlign: "center",
                transform: `${
                  selectedFont === "Standard Irish" ? "scale(1.9, 2.63)" : ""
                }`,
              }}
            >
              {RegistrationPlateNoText}
            </span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="container-child">
          <label>Registration Plate No:</label>
          <input
            type="text"
            value={RegistrationPlateNoText}
            onChange={handleRegistrationPlateNoTextChange}
          />
        </div>

        <div className="container-child">
          <label>Registration Plate Font:</label>
          <select value={selectedFont} onChange={handleFontChange}>
            <option value="Metro">Metro</option>
            <option value="German">German</option>
            <option value="Standard Irish">Standard Irish</option>
            <option value="Arial">Arial</option>
          </select>
        </div>

        <div className="container-child">
          <label htmlFor="font-size-input">
            Registration Plate Font Size: {fontSize}px
          </label>
          <input
            type="range"
            id="font-size-input"
            min="15"
            max="65"
            value={fontSize}
            onChange={handleFontSizeChange}
          />
        </div>
        <div className="container-child">
          <label htmlFor="font-size-input">
            Center Plate Font Margin Size: {bottomfontSizeMargin}px
          </label>
          <input
            type="range"
            id="font-size-input"
            min="0"
            max="55"
            value={bottomfontSizeMargin}
            onChange={handleBottomFontSizeMarginChange}
          />
        </div>
      </div>

      <div className="container">
        <div className="container-child">
          <label>Top Text:</label>
          <input
            type="text"
            value={countyText}
            onChange={handleCountyTextChange}
          />
        </div>

        <div className="container-child">
          <label>Top Font:</label>
          <select value={topselectedFont} onChange={handleTopFontChange}>
            <option value="Arial">Arial</option>
            <option value="Metro">Metro</option>
            <option value="German">German</option>
            <option value="Standard Irish">Standard Irish</option>
          </select>
        </div>

        <div className="container-child">
          <label htmlFor="font-size-input">
            Top Plate Font Size: {topfontSize}px
          </label>
          <input
            type="range"
            id="font-size-input"
            min="10"
            max="55"
            value={topfontSize}
            onChange={handleTopFontSizeChange}
          />
        </div>

        <div className="container-child">
          <label htmlFor="font-size-input">
            Top Plate Font Margin Size: {topfontSizeMargin}px
          </label>
          <input
            type="range"
            id="font-size-input"
            min="0"
            max="55"
            value={topfontSizeMargin}
            onChange={handleTopFontSizeMarginChange}
          />
        </div>

        <div className="container-child">
          <label>Border Style:</label>
          <select value={selectedBorder} onChange={handleBorderChange}>
            <option value="none">none</option>
            <option value="0.5mm">0.5 mm</option>
            <option value="1mm">1 mm</option>
            <option value="1.5mm">1.5 mm</option>
            <option value="2mm">2 mm</option>
            <option value="2.5mm">2.5 mm</option>
            <option value="3mm">3 mm</option>
          </select>
        </div>
      </div>

      <div className="container">
        <div className="container-child">
          <button className="button" onClick={handleToggleImage}>
            Hide Image
          </button>
        </div>

        <div className="container-child">
          <button className="button" onClick={handleCenterPlate}>
            Center Plate
          </button>
        </div>

        <div className="container-child">
          <button className="button" onClick={handleDownloadmakePDF}>
            Download PDF
          </button>
        </div>

        <div className="container-child">
          <button className="button" onClick={handleChangeImage}>
            Change Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
