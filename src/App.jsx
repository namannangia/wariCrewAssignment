import React from "react";
import "./App.css";
import { dataset } from "./dataset";
function App() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [rightVal, setRightVal] = React.useState(window.innerWidth / 2 + 550);
  const [slRange, setSlRange] = React.useState(0);
  const [rgbVal, setRgbVal] = React.useState("17,57,70");
  React.useEffect(() => {
    if (slRange !== 0)
      setRgbVal(
        Math.random(slRange) * 100 +
          "," +
          Math.random(slRange + 1) * 100 +
          "," +
          Math.random(slRange + 2) * 100
      );
    console.log(slRange, rgbVal);
  }, [slRange]);
  const styleSheet = {
    root: {
      display: "flex",
      height: "100vh",
      width: "100vw",
      // backgroundColor: "#113946",
      justifyContent: "center",
      alignItems: "center",
    },
    main: {
      display: "flex",
      padding: "5px",
      borderRadius: "20px",
      height: "400px",
      width: "430px",
      backgroundColor: "rgba(255,255,255,0.2)",
      boxShadow: "0px 0px 20px 10px rgba(255,255,255,0.1)",
      flexDirection: "column",
      alignItems: "center",
      overflow: "hidden",
    },
    contentDiv: {
      display: "flex",
      flexDirection: "row",
      flex: 8,
      borderRadius: "20px",
      fontSize: "18px",
      color: "white",
      padding: "20px",
      overflow: "hidden",
      // border: "2px solid red",s
    },
    innerContentDiv: {
      display: "flex",
      flex: 8,
      color: "rgba(255,255,255,0.8)",
      borderRadius: "20px",
      flexDirection: "column",
    },
    btnHolderDiv: {
      display: "flex",
      flex: 1,
      borderRadius: "20px",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
    },
    mainBtn: {
      width: "10px",
      height: "10px",
      borderRadius: "20px",
      justifyContent: "center",
      alignItems: "center",
      margin: "10px",
    },
  };
  return (
    <div style={{ backgroundColor: `rgb(${rgbVal})`, ...styleSheet.root }}>
      <div
        style={{
          position: "absolute",
          borderRadius: "0px 40px 40px 0px",
          top: "10px",
          left: "0px",
          padding: " 10px 20px",
          color: "white",
          backgroundColor: "rgba(255,255,255,0.5)",
        }}
      >
        <button
          style={{
            padding: "10px",
            color: "rgb(" + rgbVal + ")",
            fontWeight: "700",
            backgroundColor: "rgba(255,255,255,0.7)",
          }}
          onClick={() => {
            setSlRange(Math.random());
          }}
        >
          Random theme
        </button>
        <button
          style={{
            padding: "10px",
            color: "rgb(" + rgbVal + ")",
            fontWeight: "700",
            backgroundColor: "rgba(255,255,255,0.7)",
            marginLeft: "20px",
          }}
          onClick={() => {
            window.location.href =
              "https://github.com/namannangia/wariCrewAssignment";
          }}
        >
          Source Code
        </button>
      </div>
      <div style={styleSheet.main}>
        <div
          style={{
            ...styleSheet.contentDiv,
          }}
        >
          {dataset.map((a, i) => {
            return (
              <div
                key={i}
                style={{
                  position: "relative",
                  left: rightVal,
                  width: "400px",
                  textAlign: "center",
                  margin: "20px",
                }}
              >
                <p>{a.ques}</p>
                <h4 style={{ textAlign: "end" }}>— {a.ans}</h4>
              </div>
            );
          })}
        </div>
        <div style={styleSheet.btnHolderDiv}>
          {dataset.map((a, i) => {
            return (
              <div
                onClick={() => {
                  if (i > activeIndex) {
                    var z = i;
                    while (z !== activeIndex) {
                      z -= 1;
                      setRightVal((e) => e - 440);
                    }
                  } else if (i < activeIndex) var z = i;
                  while (z !== activeIndex) {
                    z += 1;
                    setRightVal((e) => e + 440);
                  }
                  setActiveIndex(i);
                }}
                style={{
                  backgroundColor:
                    activeIndex !== i
                      ? "rgba(255,255,255,0.5)"
                      : "rgba(0,0,0,0.5)",
                  cursor: "pointer",
                  padding: "3px",
                  border:
                    activeIndex === i ? "2px solid rgba(255,255,255,0.6)" : "",
                  ...styleSheet.mainBtn,
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
