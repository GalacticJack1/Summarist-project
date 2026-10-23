import NavBar from "@/Components/Navbar";
import Landing from "@/Components/Landing";
import Features from "@/Components/Features";
import Reviews from "@/Components/Reviews"
import Numbers from "@/Components/Numbers"
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Landing />
      <Features />
      <Reviews />
      <Numbers />
      <Footer />
    </div>
  );
}
