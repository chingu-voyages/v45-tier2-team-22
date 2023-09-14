"use client";
import Header from "@/components/header/Header";
import DetailData from "@/components/detailData/DetailData";
import SummaryMetrics from "@/components/summaryMetrics/SummaryMetrics";
import Globe from "@/components/globe/Globe";
import Footer from "@/components/footer/Footer";
import ThemeToggleButton from "@/components/themeToggleButton/ThemeToggleButton";
import { useAppContext } from "@/context/AppContext";
import styles from "./page.module.scss";

export default function Home() {
  const { currentTheme } = useAppContext();

  const theme = currentTheme === "light" ? styles.light : "";

  return (
    <main className={`${styles.main}, ${theme}`}>
      <div className={styles.toggleWrapper}>
        <ThemeToggleButton />
      </div>
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
