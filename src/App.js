import React, { useState } from "react";
// import { jsPDF } from "jspdf"; 
import "./print.css";

const App = () => {
  const [RegistrationPlateNoText, setRegistrationPlateNoText] = useState("");
  const [countyText, setCountyText] = useState("");
  const [selectedFont, setSelectedFont] = useState("Verdana");
  const [selectedBorder, setSelectedBorder] = useState("1mm");
  const [fontSize, setFontSize] = useState(50);
  const [topfontSize, setTopFontSize] = useState(16);
  const [imageUrl, setImageUrl] = useState("black_irl.png");
  const [imageVisible, setImageVisible] = useState(true);
  const [centerPlate, setCenterPlate] = useState("2.5rem");

  const handleFontSizeChange = (event) => {
    const newSize = parseInt(event.target.value);
    setFontSize(newSize);
  };

  const handleToggleImage = () => {
    if(imageVisible){
      setImageVisible(!imageVisible);
    }else{
      setImageVisible(true);
    }
  };

  const handleCenterPlate = () => {
    if(centerPlate === "2.5rem"){
      setCenterPlate("0px");
    }else{
      setCenterPlate("2.5rem");
    }
  };
  

  const handleTopFontSizeChange = (event) => {
    const newSize = parseInt(event.target.value);
    setTopFontSize(newSize);
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

  const handleBorderChange = (e) => {
    setSelectedBorder(e.target.value);
  };

  const handleChangeImage = () => {
    const newImageUrl = "blue_irl.png";
    if (imageUrl === newImageUrl) {
      setImageUrl("black_irl.png");
    } else {
      setImageUrl(newImageUrl);
    }
  };

  // const handleDownloadPDF = () => {
  //   const doc = new jsPDF({
  //     orientation: "landscape",
  //     unit: "px",
  //     format: [520, 111],
  //   });

  //   const borderWidth = 5; // Customize the border width in pixels

  //   const canvas = document.createElement("canvas");
  //   canvas.width = 520;
  //   canvas.height = 111;
  //   const context = canvas.getContext("2d");

  //   // Draw the white background
  //   context.fillStyle = "white";
  //   context.fillRect(0, 0, 520, 111);

  //   const logoImage = new Image();
  //   logoImage.src = "blue_irl.png";
  //   logoImage.onload = () => {
  //     // Add the border
  //     context.strokeStyle = "black";
  //     context.lineWidth = borderWidth;
  //     context.strokeRect(
  //       borderWidth / 2,
  //       borderWidth / 2,
  //       520 - borderWidth,
  //       111 - borderWidth
  //     );

  //     // Add the logo image to the canvas
  //     context.drawImage(logoImage, 0, 0, 57, 111);

  //     const textX = 57; // Start position for text

  //     context.font = `bold ${topfontSize}px ${selectedFont}`;
  //     context.fillStyle = "black";
  //     context.textAlign = "center"; // Center align the text
  //     context.fillText(countyText, textX + 231, 25); // Center horizontally at x=288

  //     context.font = `bold ${fontSize}px ${selectedFont}`;
  //     context.fillText(RegistrationPlateNoText, textX + 231, 80); // Center horizontally at x=288

  //     // Export the canvas as a Blob
  //     return new Promise((resolve) => {
  //       canvas.toBlob(
  //         (blob) => {
  //           if (blob) {
  //             // Create an image element from the Blob
  //             const image = new Image();
  //             image.src = URL.createObjectURL(blob);
  //             image.onload = () => {
  //               // Add the image to the PDF without the border
  //               doc.addImage(
  //                 image,
  //                 "JPEG",
  //                 borderWidth / 2,
  //                 borderWidth / 2,
  //                 520 - borderWidth,
  //                 111 - borderWidth
  //               );

  //               // Save the PDF
  //               doc.save("registration.pdf");

  //               // Resolve the Promise
  //               resolve();
  //             };
  //           }
  //         },
  //         "image/jpeg",
  //         0.9
  //       );
  //     });
  //   };
  // };

  const handleDownloadPDF = () => {
      window.print();
  };


  return (
    <div>
      <div className="print">
        <h1>Ireland Vehicle Registration Plate</h1>
      </div>
      <div className="print" > 
        <button onClick={handleChangeImage}>Change Image</button>
      </div>
      <div className="print">
        <label>Registration Plate No.</label>
        <input
          type="text"
          value={RegistrationPlateNoText}
          onChange={handleRegistrationPlateNoTextChange}
        />
      </div>
      <div className="print">
        <label htmlFor="font-size-input">
          Registration Plate Font Size: {fontSize}px
        </label>
        <input
          type="range"
          id="font-size-input"
          min="10"
          max="80"
          value={fontSize}
          onChange={handleFontSizeChange}
        />
      </div>
      <div className="print">
        <label>Country Text:</label>
        <input
          type="text"
          value={countyText}
          onChange={handleCountyTextChange}
        />
      </div>
      <div className="print">
        <label>Font:</label>
        <select value={selectedFont} onChange={handleFontChange}>
          <option value="Verdana">Verdana</option>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Tahoma">Tahoma</option>
          <option value="Impact">Impact</option>
          <option value="Comic Sans MS">Comic Sans MS</option>
          <option value="Trebuchet MS">Trebuchet MS</option>
          <option value="Arial Black">Arial Black</option>
          <option value="Lucida Sans Unicode">Lucida Sans Unicode</option>
          <option value="Palatino Linotype">Palatino Linotype</option>
          <option value="Garamond">Garamond</option>
          <option value="Bookman">Bookman</option>
          <option value="Copperplate">Copperplate</option>
          <option value="Franklin Gothic Medium">Franklin Gothic Medium</option>
        </select>
      </div>

      <div className="print">
        <label htmlFor="font-size-input">
          Top Plate Font Size: {topfontSize}px
        </label>
        <input
          type="range"
          id="font-size-input"
          min="10"
          max="80"
          value={topfontSize}
          onChange={handleTopFontSizeChange}
        />
      </div>

      <div className="print">
        <label>Border Style:</label>
        <select value={selectedBorder} onChange={handleBorderChange}>
          <option value="none">none</option>
          <option value="1mm">1mm</option>
          <option value="2mm">2mm</option>
          <option value="3mm">3mm</option>
          <option value="4mm">4mm</option>
          <option value="5mm">5mm</option>
          <option value="6mm">6mm</option>
          <option value="7mm">7mm</option>
        </select>
      </div>

      <div className="print">
        <button onClick={handleToggleImage}>Hide Image</button>
      </div>

      <div className="print">
        <button onClick={handleCenterPlate}>Center Plate</button>
      </div>

      <div>
        <div className="print">
          <h2>Registration Plate Preview:</h2>
        </div>
        <div
          style={{
            border: `${
              selectedBorder === "none"
                ? "none"
                : `${selectedBorder} solid black`
            } `,
            height: "111px",
            width: "520px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            margin: "auto",
            borderRadius: "12px",
          }}
        >
          {imageVisible && (<div
            style={{
              width: "10%",
              height: "100%",
              position: "absolute",
              // backgroundColor:`${imageUrl === "blue_irl.png"?"#0f4add":"black"}`, 
              left: "0",
            }}
          >
            <img
              src={imageUrl}
              alt="IRL"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "8px",
              }}
            />
          </div>
          )}
          <div
            style={{
              marginLeft: `${centerPlate}`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: `${topfontSize}px`,
                fontFamily: `${selectedFont}`,
                fontWeight: "bold",
              }}
            >
              {countyText}
            </span>
            <span
              style={{
                fontSize: `${fontSize}px`,
                fontFamily: `${selectedFont}`,
                fontWeight: "bold",
              }}
            >
              {RegistrationPlateNoText}
            </span>
          </div>
        </div>
      </div>
      <div className="print">
        <button onClick={handleDownloadPDF}>Download PDF</button>
      </div>
    </div>
  );
};

export default App;
