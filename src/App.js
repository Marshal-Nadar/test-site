import './App.scss';
import Branding from './Component/Branding/Branding';
import Header from './Component/Header/Header';
import TechDescription from './Component/TechDescription/TechDescription';
import WorkFlow from './Component/WorkFlow/WorkFlow';
import Blogs from './Component/Blogs/Blogs';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <main>
      <Header />
      <Branding />
      <TechDescription />
      <WorkFlow />
      <Blogs />
      <Footer />
    </main>
  );
}

export default App;
