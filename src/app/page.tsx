"use client";
import Header from "@/components/header/Header";
import DetailData from "@/components/detailData/DetailData";
import SummaryMetrics from "@/components/summaryMetrics/SummaryMetrics";
import Globe from "@/components/globe/Globe";
import Footer from "@/components/footer/Footer";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <Header />
      <div className={styles.contentWrapper}>
        <SummaryMetrics />
        <section>
          <DetailData />
          <Globe />
        </section>
      </div>
      <Footer />
    </main>
  );
}
