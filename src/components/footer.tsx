import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./footer.module.css";

export type FooterType = {
  className?: string;
  vuesaxlinearcircle?: string;
  saveAndExit?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const Footer: NextPage<FooterType> = ({
  className = "",
  vuesaxlinearcircle,
  saveAndExit,
  propWidth,
  propAlignSelf,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div className={[styles.footer, className].join(" ")} style={footerStyle}>
      <button className={styles.button}>
        <img
          className={styles.vuesaxlinearcircleIcon}
          alt=""
          src={vuesaxlinearcircle}
        />
        <b className={styles.saveAndExit}>{saveAndExit}</b>
      </button>
    </div>
  );
};

export default Footer;
