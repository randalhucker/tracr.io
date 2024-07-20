import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
  group8?: string;
  button?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  group8,
  button,
}) => {
  return (
    <header className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <h1 className={styles.tracrioAdmin}>tracr.io | Admin</h1>
      <div className={styles.adminContent}>
        <div className={styles.adminItems}>
          <img
            className={styles.adminItemsChild}
            loading="lazy"
            alt=""
            src={group8}
          />
          <div className={styles.addButtonContainer}>
            <img
              className={styles.buttonIcon}
              loading="lazy"
              alt=""
              src={button}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent;
