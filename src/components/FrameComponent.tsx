import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.wavesWrapper}>
            <a className={styles.waves}>waves</a>
          </div>
          <div className={styles.theFutureOf}>The future of crypto-trading</div>
        </div>
      </div>
      <div className={styles.navigation}>
        <div className={styles.navItems}>
          <a className={styles.services}>Services</a>
        </div>
        <div className={styles.navItems1}>
          <a className={styles.company}>Company</a>
        </div>
        <div className={styles.navItems2}>
          <a className={styles.signIn}>Sign in</a>
        </div>
        <button className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <a className={styles.getStarted}>Get Started</a>
        </button>
      </div>
    </section>
  );
};

export default FrameComponent;
