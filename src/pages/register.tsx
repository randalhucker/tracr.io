import type { NextPage } from "next";
import GroupComponent1 from "../components/group-component1";
import styles from "./register.module.css";

const Register: NextPage = () => {
  return (
    <div className={styles.register}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.coreDumpersLimited}>© Core Dumpers Limited 2024</b>
      </div>
      <div className={styles.frameParent}>
        <img className={styles.frameItem} alt="" src="/group-22.svg" />
        <GroupComponent1 />
      </div>
    </div>
  );
};

export default Register;
