import { Amount } from "./components/Amount";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MiniBanners } from "./components/MiniBanners";
import { Movements } from "./components/Movements";
import { Options } from "./components/Options";
import { Services } from "./components/Services";

function App () {
  return (
    <>
      <Header />
      <Options />
      <MiniBanners />
      <Services />
      <Movements />
      <Footer />
    </>
  )
}

export default App;