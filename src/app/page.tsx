'use client';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import DetailData from '@/components/detailData/DetailData';
import Search from '@/components/search/Search';
import SummaryMetrics from '@/components/summaryMetrics/SummaryMetrics';
import Globe from '@/components/globe/Globe';
import { MdHeight } from 'react-icons/md';
export default function Home() {
  return (
    <main>
      <Header />
      <Search />
      <DetailData />
      <SummaryMetrics />
      <Footer />
      <Globe />
    </main>
  );
}
