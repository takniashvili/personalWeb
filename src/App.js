import "./App.css";
import { useState } from "react";
import moonIcon from "./images/icon-moon.svg";
import sunIcon from "./images/icon-sun.svg";
import locationIcon from "./images/placeholder.png";
import facebookIcon from "./images/facebook.png";
import gmailIcon from "./images/gmail.png";
import birthIcon from "./images/birthday.png";

function App() {
  const [mode, setMode] = useState(true);

  const handleMode = () => {
    setMode(!mode);
  };

  const profileImg =
    "https://avatars.githubusercontent.com/u/104572174?s=400&u=2b9b8e8ca4fc50bd5429503e38d00238095dcf4c&v=4";
  return (
    <body className={`App ${mode ? "dark-mode" : "light-mode"}`}>
      {mode ? (
        <div className="App">
          <div className="headerDiv">
            <div className="personalWebL">
              personalWeb
              <div className="personalWeb-lineL" />
            </div>
            <div className="dark">
              DARK
              <img
                className="darkClick"
                onClick={handleMode}
                src={moonIcon}
                alt="moonIcon"
              />
            </div>
          </div>
          <div className="mainWidth">
            <div className="mainParent">
              <div className="mainChild">
                <div className="firstPart">
                  <div className="profileDiv">
                    <img
                      className="profileImg"
                      src={profileImg}
                      alt="thorfin"
                    />
                  </div>
                  <div className="firstPart-column">
                    <div className="george-text"> george </div>
                    <div>
                      {" "}
                      <a
                        className="takniashvili-a"
                        href="https://github.com/takniashvili"
                        alt="github"
                      >
                        {" "}
                        @takniashvili{" "}
                      </a>
                    </div>
                    <div className="joined-text"> Joined 25 Apr 2023 </div>
                  </div>
                </div>
                <div className="partTwo">
                  Front-end Developer: [ Html, Css, JavaScript, React,
                  TypeScript ]
                </div>
                <div className="partThreeParent">
                  <div className="partThree">
                    <div className="partThree-width">
                      {" "}
                      Projects <div className="partThree-numbers">
                        {" "}
                        25{" "}
                      </div>{" "}
                    </div>
                    <div className="partThree-width">
                      {" "}
                      Starred <div className="partThree-numbers"> 15 </div>{" "}
                    </div>
                  </div>
                </div>
                <div className="partFour">
                  <div className="partFour-location">
                    <img
                      className="locationIcon"
                      src={locationIcon}
                      alt="location"
                    />{" "}
                    Georgia,Tbilisi.
                  </div>
                  <div className="partFour-facebook">
                    <img className="fbIcon" src={facebookIcon} alt="facebook" />{" "}
                    <a
                      className="partFour-facebook-a"
                      href="https://www.facebook.com/giorgi.tayniashvili.108/"
                      alt="facebookLink"
                    >
                      @giorgi takniashvili{" "}
                    </a>
                  </div>
                  <div className="partFour-gmail">
                    <img
                      className="gmailIcon"
                      src={gmailIcon}
                      alt="gmailIcon"
                    />
                    <div> giorgi.tayniashvili415@gmail.com</div>
                  </div>
                  <div className="partFive-birth">
                    <img
                      className="birthIcon"
                      src={birthIcon}
                      alt="birthIcon"
                    />
                    <div> 15/04/2003 </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="App">
          <div className="headerDiv">
            <div className="personalWebD">
              personalWeb
              <div className="personalWeb-lineD" />
            </div>
            <div className="light">
              lIGHT
              <img onClick={handleMode} src={sunIcon} alt="sunIcon" />
            </div>
          </div>
          <div className="mainWidth">
            <div className="mainParentL">
              <div className="mainChild">
                <div className="firstPart">
                  <div className="profileDiv">
                    <img
                      className="profileImg"
                      src={profileImg}
                      alt="thorfin"
                    />
                  </div>
                  <div className="firstPart-column">
                    <div className="george-textL"> george </div>
                    <div>
                      {" "}
                      <a
                        className="takniashvili-a"
                        href="https://github.com/takniashvili"
                        alt="github"
                      >
                        {" "}
                        @takniashvili{" "}
                      </a>
                    </div>
                    <div className="joined-textL"> Joined 25 Apr 2023 </div>
                  </div>
                </div>
                <div className="partTwoL">
                  Front-end Developer: [ Html, Css, JavaScript, React,
                  TypeScript ]
                </div>
                <div className="partThreeParent">
                  <div className="partThreeL">
                    <div className="partThree-widthL">
                      {" "}
                      Projects <div className="partThree-numbersL">
                        {" "}
                        25{" "}
                      </div>{" "}
                    </div>
                    <div className="partThree-widthL">
                      {" "}
                      Starred <div className="partThree-numbersL">
                        {" "}
                        15{" "}
                      </div>{" "}
                    </div>
                  </div>
                </div>
                <div className="partFour">
                  <div className="partFour-locationL">
                    <img
                      className="locationIcon"
                      src={locationIcon}
                      alt="location"
                    />{" "}
                    Georgia,Tbilisi.
                  </div>
                  <div className="partFour-facebook">
                    <img className="fbIcon" src={facebookIcon} alt="facebook" />{" "}
                    <a
                      className="partFour-facebook-a"
                      href="https://www.facebook.com/giorgi.tayniashvili.108/"
                      alt="facebookLink"
                    >
                      @giorgi takniashvili{" "}
                    </a>
                  </div>
                  <div className="partFour-gmailL">
                    <img
                      className="gmailIcon"
                      src={gmailIcon}
                      alt="gmailIcon"
                    />
                    <div> giorgi.tayniashvili415@gmail.com</div>
                  </div>
                  <div className="partFive-birthL">
                    <img
                      className="birthIcon"
                      src={birthIcon}
                      alt="birthIcon"
                    />
                    <div> 15/04/2003 </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </body>
  );
}

export default App;
