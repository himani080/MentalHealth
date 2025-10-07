import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Therapists from './pages/Therapists';
import Community from './pages/Community';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingHelpButton from './components/FloatingHelpButton';

type Page = 'home' | 'about' | 'services' | 'therapists' | 'community' | 'blog' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'therapists':
        return <Therapists />;
      case 'community':
        return <Community />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <FloatingHelpButton />
    </div>
  );
}

export default App;
