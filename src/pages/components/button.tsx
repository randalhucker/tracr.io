import type { NextPage } from "next";
import styles from "./button.module.css";

export type ButtonType = {
  className?: string;
  vuesaxlinearcircle?: string;
  createNewClaim?: string;
  page1?: string;
};

const Button: NextPage<ButtonType> = ({
  className = "",
  vuesaxlinearcircle,
  createNewClaim,
  page1,
}) => {
  return (
    <button className={[styles.button, className].join(" ")}>
      <img
        className={styles.vuesaxlinearcircleIcon}
        alt=""
        src={vuesaxlinearcircle}
      />
      <div className={styles.actionButtonLabels}>
        <b className={styles.createNewClaim}>{createNewClaim}</b>
      </div>
      <img className={styles.page1Icon} alt="" src={page1} />
    </button>
  );
};

export default Button;
