import NavBar from "./components/NavBar";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import ServicesPage from "./components/ServicesPage";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Testing from "./components/Testing";

const App = () => {
  return (
    <>
      <NavBar />
      <Page1 />
      <Page2 />
      <ServicesPage />
      <FAQ/>
      <Footer/>  
    </>
  );
};

export default App;
