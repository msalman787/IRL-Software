import React, { useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
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
    if (imageVisible) {
      setImageVisible(!imageVisible);
    } else {
      setImageVisible(true);
    }
  };

  const handleCenterPlate = () => {
    if (centerPlate === "2.5rem") {
      setCenterPlate("0px");
    } else {
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
  // my old pdf
  // const handleDownloadPDF = () => {
  //   const doc = new jsPDF({
  //     orientation: "landscape",
  //     unit: "px",
  //     format: [520, 111],
  //   });

  //   const length = selectedBorder;
  //   const numericLength = (selectedBorder === "none" ? 0 : length.match(/^(\d+)/)[0] )

  //   const borderWidth = numericLength;

  //   const canvas = document.createElement("canvas");
  //   canvas.width = 520;
  //   canvas.height = 111;
  //   const context = canvas.getContext("2d");

  //   // Draw the white background
  //   context.fillStyle = "white";
  //   context.fillRect(0, 0, 520, 111);

  //   const logoImage = new Image();
  //   logoImage.src = imageUrl;
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

  //     // Add the canvas as an image to the PDF
  //     doc.addImage(
  //       canvas.toDataURL("image/png"),
  //       "PNG",
  //       borderWidth / 2,
  //       borderWidth / 2,
  //       520 - borderWidth,
  //       111 - borderWidth,
  //       undefined,
  //       "FAST",
  //       0,
  //       1200 // Set the DPI value to 600 for higher quality
  //     );

  //     // Save the PDF
  //     doc.save("registration.pdf");
  //   };
  // };

  const handleDownloadmakePDF = () => {
    const divElement = document.getElementById("pdfDiv");

    html2canvas(divElement, { scale: 4 }).then((canvas) => {
      const imageData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("l", "px", [520, 111]); // Set orientation and dimensions
      pdf.addImage(imageData, "PNG", 0, 0, 520, 111, undefined, "FAST", 0, 600);
      pdf.save("irl_plate.pdf");
    });
  };
  // Windows print
  // const handleWindowsDownloadPDF = () => {
  //     window.print();
  // };

  return (
    <div>
      <div className="print flex justify-center mb-4">
        <h1
          className="text-5xl font-bold text-center"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Registration Plate Preview
        </h1>
      </div>

      <div>
        <div
          id="pdfDiv"
          style={{
            border: `${
              selectedBorder === "none"
                ? "none"
                : `${selectedBorder} solid black`
            } `,
            height: "111px",
            width: "520px",
            display: "flex",
            background: "white",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            margin: "auto",
            borderRadius: "12px",
          }}
          className="border border-gray-300 flex justify-center items-center relative mx-auto rounded"
        >
          {imageVisible && (
            <div
              style={{
                width: "10%",
                height: "100%",
                position: "absolute",
                backgroundColor: `${
                  imageUrl === "blue_irl.png" ? "#0f4add" : "black"
                }`,
                left: "0",
              }}
              className="w-1/10 h-full absolute bg-blue-500"
            >
              <img
                src={imageUrl}
                alt="IRL"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "8px",
                }}
                className="w-full h-full rounded"
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
            className="ml-auto flex flex-col items-center"
          >
            <span
              style={{
                fontSize: `${topfontSize}px`,
                fontFamily: `${selectedFont}`,
                fontWeight: "bold",
              }}
              className="font-bold"
            >
              {countyText}
            </span>
            <span
              style={{
                fontSize: `${fontSize}px`,
                fontFamily: `${selectedFont}`,
                fontWeight: "bold",
              }}
              className="font-bold"
            >
              {RegistrationPlateNoText}
            </span>
          </div>
        </div>
      </div>

      <div className="print mt-4 sm:flex justify-center">
        <div className="flex justify-start items-center space-x-4 ">
          <div>
            <label className="text-lg">Registration Plate No</label>
            <br />
            <input
              type="text"
              value={RegistrationPlateNoText}
              onChange={handleRegistrationPlateNoTextChange}
              className="border border-gray-300 py-2 px-4 rounded"
            />
          </div>

          <div>
            <label htmlFor="font-size-input" className="text-lg">
              Registration Plate Font Size: {fontSize}px
            </label>
            <input
              type="range"
              id="font-size-input"
              min="10"
              max="80"
              value={fontSize}
              onChange={handleFontSizeChange}
              className="w-full bg-gradient-to-r from-gray-200 to-gray-300 range-thumb:bg-gray-400 range-thumb:border-gray-400 range-thumb:border-opacity-50 range-thumb:ring-2 range-thumb:ring-gray-400 range-thumb:ring-opacity-50 range-track:bg-gray-300 rounded"
            />
          </div>
        </div>
      </div>

      <div className="print sm:flex justify-center">
        <div className="flex justify-start items-center space-x-4 ">
          <div style={{marginLeft: "-4rem"}}>
            <label className="text-lg">Top Text</label>
            <br />
            <input
              type="text"
              value={countyText}
              onChange={handleCountyTextChange}
              className="border border-gray-300 py-2 px-4 rounded"
            />
          </div>

          <div>
            <label htmlFor="font-size-input" className="text-lg">
              Top Plate Font Size: {topfontSize}px
            </label>
            <input
              type="range"
              id="font-size-input"
              min="10"
              max="80"
              value={topfontSize}
              onChange={handleTopFontSizeChange}
              className="w-full"
            />
          </div>
        </div>
      </div>

      <div className="print sm:flex justify-center">
        <div className="flex justify-start items-center space-x-4 ">
          <div style={{marginLeft: "-18rem"}}>
            <label className="text-lg">Font Family</label>
            <br />
            <select
              value={selectedFont}
              onChange={handleFontChange}
              className="border border-gray-300 py-2 px-4 rounded"
            >
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
              <option value="Franklin Gothic Medium">
                Franklin Gothic Medium
              </option>
            </select>
          </div>

          <div>
            <label className="text-lg">Border Style</label>
            <br />
            <select
              value={selectedBorder}
              onChange={handleBorderChange}
              className="border border-gray-300 py-2 px-4 rounded "
            >
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
        </div>
      </div>

      <div className="print mt-4">
        <div className="flex justify-center space-x-4">
          <button
            className="bg-gradient-to-r from-blue-500 to-green-500 hover:bg-gradient-to-r hover:from-blue-700 hover:to-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleChangeImage}
          >
            Change Image
          </button>

          <button
            className="bg-gradient-to-r from-red-500 to-yellow-500 hover:bg-gradient-to-r hover:from-red-700 hover:to-yellow-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleToggleImage}
          >
            Hide Image
          </button>

          <button
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleCenterPlate}
          >
            Center Plate
          </button>

          <button
            className="bg-gradient-to-r from-indigo-500 to-teal-500 hover:bg-gradient-to-r hover:from-indigo-700 hover:to-teal-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleDownloadmakePDF}
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
