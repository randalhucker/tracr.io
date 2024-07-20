import type { NextPage } from "next";
import GroupComponent from "../../components/group-component";
import styles from "./index.module.css";

const Login: NextPage = () => {
  return (
    <div className={styles.login}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.coreDumpersLimited}>© Core Dumpers Limited 2024</b>
      </div>
      <div className={styles.frameParent}>
        <img className={styles.frameItem} alt="" src="/group-22.svg" />
        <div className={styles.rectangleGroup}>
          <div className={styles.frameInner} />
          <GroupComponent />
        </div>
      </div>
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
      <div className={styles.button}>
        <img
          className={styles.vuesaxlinearcircleIcon}
          alt=""
          src="/vuesaxlinearcircle.svg"
        />
        <div className={styles.button1}>log in</div>
        <img
          className={styles.vuesaxlinearcircleIcon1}
          alt=""
          src="/vuesaxlinearcircle.svg"
        />
      </div>
    </div>
  );
};

export default Login;
