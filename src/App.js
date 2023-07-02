import './App.scss';
import Branding from './Component/Branding/Branding';
import Header from './Component/Header/Header';
import TechDescription from './Component/TechDescription/TechDescription';
import WorkFlow from './Component/WorkFlow/WorkFlow';
import Blogs from './Component/Blogs/Blogs';

function App() {
  return (
    <main>
      <Header />
      <Branding />
      <TechDescription />
      <WorkFlow />
      <Blogs />
    </main>
  );
}

export default App;
