import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import styles from "./Index1.module.css";

const Index1: FunctionComponent = () => {
  return (
    <div className={styles.index1}>
      <FrameComponent />
      <section className={styles.bgParent}>
        <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
        <img className={styles.heroBgIcon} alt="" src="/herobg.svg" />
        <img className={styles.heroBgIcon1} alt="" src="/herobg1@2x.png" />
        <img
          className={styles.bitcoinLogoIcon}
          loading="lazy"
          alt=""
          src="/bitcoinlogo.svg"
        />
        <img
          className={styles.connectionsIcon}
          loading="lazy"
          alt=""
          src="/connections.svg"
        />
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
        <img
          className={styles.vectorIcon1}
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
        <img
          className={styles.vectorIcon2}
          loading="lazy"
          alt=""
          src="/vector-2.svg"
        />
      </section>
      <div className={styles.frameParent}>
        <div className={styles.theCryptoTradingTheFibreParent}>
          <h1 className={styles.theCryptoTradingContainer}>
            <p className={styles.the}>{`The `}</p>
            <p className={styles.cryptoTradingThe}>
              crypto trading, the fibre of traders
            </p>
          </h1>
          <div className={styles.nextGenTag}>
            <h1 className={styles.nextGen}>next gen</h1>
          </div>
        </div>
        <h3 className={styles.enjoyBetterRatesContainer}>
          <span>
            <span>Enjoy better rates when you trade your bitcoin with</span>
            <span className={styles.span}>{` `}</span>
          </span>
          <b className={styles.waves}>waves</b>
        </h3>
      </div>
    </div>
  );
};

export default Index1;
