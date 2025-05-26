import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  // Add smooth scrolling for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  return (
    <div className="dark min-h-screen w-full flex flex-col">
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 animate-gradient"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent from-40% to-gray-900/90 to-80%"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgydi00aDRWNGgtNHpNNiAzNHYtNEg0djRIMHYyaDR2NGgydi00aDR2LTJINnptMC0zMFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      </div>
      
      <Navbar />
      
      <main className="flex-1 w-full text-gray-300 overflow-hidden">
        <section id="home" className="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center py-12 sm:py-16 md:py-20">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <Home />
          </div>
        </section>
        
        <section id="skills" className="min-h-screen sm:min-h-[90vh] w-full flex items-center justify-center py-12 sm:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Skills />
          </div>
        </section>
        
        <section id="projects" className="min-h-screen sm:min-h-[90vh] w-full flex items-center justify-center py-12 sm:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Projects />
          </div>
        </section>
        
        <section id="contact" className="w-full">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
