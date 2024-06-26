import React from "react";
import { Row, Col } from "reactstrap";
import styles from "./Partners.module.scss";
import "./OverRide.scss";

const Partners = ({ isJoinPage = false }) => {
  return (
    <div
      className={`${styles.main_partners} ${
        isJoinPage ? "mainpartnersOverride" : ""
      }`}
    >
      <Row>
        <Col sm={12} md={12}>
          <div className={styles.img_container}>
            {/*<img src='Assets/bottompage.png' alt='' />*/}
          </div>
        </Col>
        <Col sm={12} md={12}>
          <div
            className={`${styles.partners} ${
              isJoinPage ? "partnersOverride" : ""
            }`}
          >
            <div className={styles.head}>
              <h3>CWN</h3>
            </div>
            {isJoinPage ? null : (
              <div className={styles.social_icons}>
                <a
                  href="https://twitter.com/_ChaoticWolves"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <img
                      src="Assets/xlogo.png"
                      alt="X Icon"
                      width="100"
                      height="100"
                    />
                  </div>
                </a>
                <a
                  href="https://discord.gg/CcbvYvxV58"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <img
                      src="https://skillicons.dev/icons?i=discord	"
                      alt="X Icon"
                      width="90"
                      height="90"
                    ></img>
                  </div>
                </a>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Partners;
