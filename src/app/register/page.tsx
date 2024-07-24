/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from "next";
import RegisterComponent from "../../components/register-component";
import styles from "./register.module.scss";

const Register: NextPage = () => {
  return (
    <div className={styles.register}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.coreDumpersLimited}>© Core Dumpers Limited 2024</b>
      </div>
      <div className={styles.frameParent}>
        <img className={styles.frameItem} alt="" src="/group-22.svg" />
          <RegisterComponent />
        </div>
      </div>
  );
};

export default Register;
