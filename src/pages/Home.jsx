import Header from "../components/HomeComponent/Header";
import MainContent from "../components/HomeComponent/MainContent";
import Navbar from "../components/HomeComponent/Navbar";

export default function Home() {
  return (
    <div className="p-4 font-jakarta">
      <Navbar />
      <Header />
      <MainContent />
    </div>
  );
}
