import cssClasses from "./index.module.css";

import React from "react";
const ProfileTop = ({ coverPicture = "", profilePic = "" }) => {
  return (
    <div className={cssClasses.container}>
      <div className={cssClasses.container}>
        <div className={cssClasses.innerContainer}>
          <div className={cssClasses.topSection}>
            <div className={cssClasses.topBg}></div>
            <div
              className={cssClasses.coverImg}
              style={{
                backgroundImage: `url('${coverPicture}')`,
              }}
            ></div>
          </div>
          <div className={cssClasses.bottomSection}>
            <div className={cssClasses.profilePicContainer}>
              <div
                className={cssClasses.profilePic}
                style={{
                  backgroundImage: `url('${profilePic}')`,
                }}
              ></div>
            </div>
            {/* <div className={cssClasses.buttonsContainer}>
              <div className={cssClasses.buttonsInnerContainer}>
                <div className={cssClasses.buttonsHolder}>
                  <div className={cssClasses.shareButton}>
                    <div className={cssClasses.shareButtonHolder}>
                      <span className={cssClasses.shareButtonIcon}>
                        <svg
                          width="24"
                          height="24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="svgClass"
                        >
                          <path
                            d="M11 16V1M17 7l-6-6-6 6M21 21H1"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                      <span className={cssClasses.shareButtonText}>Share</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTop;
