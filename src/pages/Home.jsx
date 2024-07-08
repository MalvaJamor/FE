import Footer from "../components/HomeComponent/Footer";
import Header from "../components/HomeComponent/Header";
import LowerSection from "../components/HomeComponent/LowerSection";
import MainContent from "../components/HomeComponent/MainContent";
import Navbar from "../components/HomeComponent/Navbar";
import SectionFour from "../components/HomeComponent/SectionFour";
import SectionThree from "../components/HomeComponent/SectionThree";
import SectionTwo from "../components/HomeComponent/SectionTwo";

export default function Home() {
  return (
    <div className=" font-jakarta">
      <section className="p-4">
      <Navbar />
      <Header />
      </section>
      <MainContent />
      <section className="p-4">
        <LowerSection />
        <SectionTwo />
        <SectionThree />
        <div className="mt-14 flex justify-between">
          <SectionFour 
            text={'Enhance real-time collaboration features, such as shared task lists, project boards, and document collaboration'}
          />
          <SectionFour 
            text={'Implement robust communication tools, including chat, video conferencing, and activity feeds.'}
          />
          <SectionFour 
            text={'Develop features for team performance tracking and reporting.'}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
