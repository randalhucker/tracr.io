import type { NextPage } from "next";
import FrameComponent from "../../components/frame-component2";
import styles from "./admin-item-match.module.css";

const AdminItemMatch: NextPage = () => {
  return (
    <div className={styles.adminItemMatch}>
      <div className={styles.wrapperGroup9}>
        <img className={styles.wrapperGroup9Child} alt="" src="/group-9.svg" />
      </div>
      <FrameComponent group8="/group-81.svg" button="/button1.svg" />
      <div className={styles.lostItemDetailsWrapper}>
        <div className={styles.lostItemDetails}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.itemDetailsContent}>
              <div className={styles.itemInformation}>
                <h3 className={styles.airpods}>AirPods</h3>
                <div className={styles.location}>location</div>
              </div>
              <div className={styles.reportDetails}>
                <div className={styles.reporterDetails}>
                  <div className={styles.reportedByRandyContainer}>
                    <span>{`reported by: `}</span>
                    <b>randy h.</b>
                  </div>
                </div>
                <div className={styles.description}>description</div>
              </div>
            </div>
            <div className={styles.submissionDetails}>
              <div className={styles.submissionForm}>
                <div className={styles.contactInformation}>
                  <img
                    className={styles.image1Icon}
                    alt=""
                    src="/image-1@2x.png"
                  />
                  <div className={styles.emailInputContainer}>
                    <img
                      className={styles.emailInputContainerChild}
                      loading="lazy"
                      alt=""
                      src="/line-4.svg"
                    />
                    <img
                      className={styles.emailInputContainerItem}
                      alt=""
                      src="/line-5.svg"
                    />
                  </div>
                </div>
                <div className={styles.emailInputLabelWrapper}>
                  <div className={styles.emailInputLabel}>
                    <div className={styles.input}>
                      <input
                        className={styles.label}
                        placeholder="lat"
                        type="text"
                      />
                    </div>
                    <div className={styles.input1}>
                      <input
                        className={styles.label1}
                        placeholder="long"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.submitButtonWrapperParent}>
                <div className={styles.submitButtonWrapper}>
                  <textarea className={styles.input2} rows={11} cols={27} />
                </div>
                <div className={styles.additionalDetails}>
                  <div className={styles.dateLostContainer}>
                    <div className={styles.dateLostInput}>
                      <div className={styles.dateLostLabelContainer}>
                        <div className={styles.dateLost}>date lost</div>
                      </div>
                      <div className={styles.input3}>
                        <div className={styles.label2}>
                          <div className={styles.email}>4/24/2024</div>
                        </div>
                      </div>
                      <div className={styles.image}>image</div>
                      <img
                        className={styles.image2Icon}
                        loading="lazy"
                        alt=""
                        src="/image-2@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.possibleMatchesParent}>
                    <div className={styles.possibleMatches}>
                      possible matches
                    </div>
                    <div className={styles.matchesContainer}>
                      <div className={styles.matchesContent}>
                        <div className={styles.matchItems}>
                          <div className={styles.matchItemDetails}>
                            <div className={styles.matchItemInfo}>
                              <b className={styles.airpods1}>
                                <p className={styles.airpods2}>AirPods</p>
                              </b>
                              <div className={styles.smithHall}>
                                Smith Hall | Apr. 25
                              </div>
                            </div>
                            <div className={styles.matchItemInfo1}>
                              <b className={styles.airpods3}>
                                <p className={styles.airpods4}>AirPods</p>
                              </b>
                              <div className={styles.smithHall1}>
                                Smith Hall | Apr. 26
                              </div>
                            </div>
                            <div className={styles.matchItemInfo2}>
                              <b className={styles.airpods5}>
                                <p className={styles.airpods6}>AirPods</p>
                              </b>
                              <div className={styles.smithHall2}>
                                Smith Hall | Apr. 22
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.matchActionButtons}>
                          <div className={styles.matchActionButtonContainer}>
                            <img
                              className={styles.buttonIcon}
                              alt=""
                              src="/button-1.svg"
                            />
                            <b className={styles.match}>match</b>
                          </div>
                          <div className={styles.matchActionButtonContainer1}>
                            <img
                              className={styles.buttonIcon1}
                              alt=""
                              src="/button-1.svg"
                            />
                            <b className={styles.match1}>match</b>
                          </div>
                          <div className={styles.matchActionButtonContainer2}>
                            <img
                              className={styles.buttonIcon2}
                              alt=""
                              src="/button-1.svg"
                            />
                            <b className={styles.match2}>match</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.footerContent}>
              <div className={styles.footerSeparator} />
              <b className={styles.coreDumpersLimited}>
                © Core Dumpers Limited 2024
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminItemMatch;
