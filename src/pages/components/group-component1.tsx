import type { NextPage } from "next";
import styles from "./group-component1.module.css";

export type GroupComponent1Type = {
  className?: string;
};

const GroupComponent1: NextPage<GroupComponent1Type> = ({ className = "" }) => {
  return (
    <form className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.input}>
        <div className={styles.label}>
          <div className={styles.email}>email</div>
        </div>
      </div>
      <div className={styles.input1}>
        <div className={styles.label1}>
          <div className={styles.email1}>password</div>
        </div>
      </div>
      <input
        className={styles.input2}
        placeholder="confirm password"
        type="text"
      />
      <h1 className={styles.letsMakeAn}>let’s make an account</h1>
      <button className={styles.button}>
        <img
          className={styles.vuesaxlinearcircleIcon}
          alt=""
          src="/vuesaxlinearcircle.svg"
        />
        <div className={styles.button1}>register</div>
        <img
          className={styles.vuesaxlinearcircleIcon1}
          alt=""
          src="/vuesaxlinearcircle.svg"
        />
      </button>
      <div className={styles.mustBeAContainer}>
        {`must be a valid email registered to an `}
        <span className={styles.affiliatedInstitution}>
          affiliated institution
        </span>
      </div>
    </form>
  );
};

export default GroupComponent1;
