import React from 'react';
import { BookOpen, Palette, Calculator, Trophy, Clapperboard, Music, Atom, Carrot, Gamepad } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  const quickGame = [
    {
      name: 'Juego Rapido',
      icon: Gamepad,
      path: '/QuickGame',
      color: 'from-cyan-500 to blue-700',
      hoverColor: 'hover:from-cyan-600 hover:to-blue-800'
    }
  ];

  const categories = [
    {
      name: 'Historia',
      icon: BookOpen,
      path: '/historia',
      color: 'from-amber-500 to-orange-600',
      hoverColor: 'hover:from-amber-600 hover:to-orange-700'
    },
    {
      name: 'Arte',
      icon: Palette,
      path: '/arte',
      color: 'from-purple-500 to-pink-600',
      hoverColor: 'hover:from-purple-600 hover:to-pink-700'
    },
    {
      name: 'Matemáticas',
      icon: Calculator,
      path: '/matematicas',
      color: 'from-blue-500 to-cyan-600',
      hoverColor: 'hover:from-blue-600 hover:to-cyan-700'
    },
    {
      name: 'Deporte',
      icon: Trophy,
      path: '/deporte',
      color: 'from-green-500 to-emerald-600',
      hoverColor: 'hover:from-green-600 hover:to-emerald-700'
    },
    {
      name: 'Cine',
      icon: Clapperboard,
      path: '/cine',
      color: 'from-red-500 to-rose-600',
      hoverColor: 'hover:from-red-600 to-rose-700 '
    },
    {
      name: 'Musica',
      icon: Music,
      path: '/musica',
      color: 'from-yellow-500 to-amber-600',
      hoverColor: 'hover:from-yellow-600 to-amber-700'
    },
    {
      name: 'Ciencia',
      icon: Atom,
      path: '/ciencia',
      color: 'from-cyan-500 to-blue-600',
      hoverColor: 'hover:from-cyan-600 to-blue-700'
    },
    {
      name: 'Nutrición',
      icon: Carrot,
      path: '/nutricion',
      color: 'from-lime-500 to-emerald-600',
      hoverColor: 'hover:from-lime-600 to-emerald-700'
    }
  ];

  return (
    <div className="min-h-screen bg- min-w-screen bg-gradient-to-b from-blue-950  to-violet-950 overflow-x-hidden">
      {/* Navigation */}
      <nav className="w-full bg-blue-950  border-b border-white/10 overflow-x-hidden">
        <div className="max-w-7xl mx-auto  ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-xl md:text-2xl font-bold text-white hover:text-blue-300 transition-colors cursor-pointer duration-500">
                10 Preguntas
              </div>
            </div>
            <div className="hidden ">
              <div className=" flex items-baseline">
                <div className="text-white hover:text-blue-300 py-2 rounded-md text-2xl font-medium transition-colors cursor-pointer duration-500">
                  Ayuda
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="min-w-full  py-12 overflow-x-hidden">
        <div className="min-w-screen p-2 md:px-16 md:py-8 overflow-hidden ">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-2xl md:text-6xl p-0 font-bold text-white mb-4">
              ¡Elige tu Categoría!
            </h1>
            <p className="hidden md:block text-lg text-gray-300 min-w-screen   ">
              Pon a prueba tus conocimientos en diferentes áreas y demuestra lo que sabes
            </p>
          </div>
          
          <div className="flex w-full justify-center items-center p-2 mb-16">
            <div className="w-full max-w-md">
              {quickGame.map((game, index) => {
                const IconComponent = game.icon;
                return (
                  <div
                    key={game.name}
                    className={`group relative overflow-hidden w-80  sm:w-auto rounded-2xl bg-gradient-to-br ${game.color} ${game.hoverColor} p-8  transform transition-all duration-500 hover:scale-105 hover:shadow-4xl cursor-pointer border-1 border-white/20 hover:border-white/40`}
                    onClick={() => navigate(game.path)}
                  >
                    {/* Efecto de brillo especial para juego rápido */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10 flex flex-col items-center justify-center h-56 text-center">
                      {/* Icono más grande y con efecto especial */}
                      <div className="mb-6 p-6 bg-white/20 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                        <IconComponent size={64} className="text-white" />
                      </div>
                      
                      <h2 className="text-4xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                        {game.name}
                      </h2>
                      
                      <div className="w-8 h-1 bg-white/40 rounded-full group-hover:w-32 group-hover:bg-white/80 transition-all duration-500 mb-4"></div>
                      
                      <p className="text-white/90 text-lg mb-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                        ¡Preguntas aleatorias de todas las categorías!
                      </p>
                      
                      <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-sm">
                        ¡Haz clic para comenzar la aventura!
                      </p>
                    </div>
                    
                    {/* Elementos decorativos especiales */}
                    <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 rounded-full opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse"></div>
                    <div className="absolute bottom-6 left-6 w-6 h-6 bg-white/20 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <div className="absolute top-1/2 left-4 w-4 h-4 bg-white/15 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Separador visual */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            <div className="mx-4 text-white/60 text-sm font-medium">O elige una categoría específica</div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:p-4 p-2 gap-8  mx-auto">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.name}
                  className={`group relative overflow-hidden w-80  sm:w-auto rounded-2xl bg-gradient-to-br ${category.color} ${category.hoverColor} p-8  transform transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                  onClick={() => navigate(category.path)}
                >
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex flex-col items-center justify-center h-40 md:h-48 text-center">
                    <div className="mb-4 p-4 bg-white/20 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                      <IconComponent size={48} className="text-white" />
                    </div>
                    
                    <h2 className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                      {category.name}
                    </h2>
                    
                    <div className="w-6 h-1 bg-white/40 rounded-full group-hover:w-24 group-hover:bg-white/60 transition-all duration-300"></div>
                    
                    <p className="mt-4 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                      ¡Haz clic para comenzar!
                    </p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 bg-white/20 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>

        </div>
      </main>

      <footer className='w-screen py-6  bg-violet-950 flex justify-center'>
            <p className='text-white text-lg'>Hecho por: <a className='text-yellow-200 text-xl hover:text-yellow-400 transition-colors duration-300' href="https://gaston-gomez1997.netlify.app/" target="_blank" >Gastón Gómez</a></p>
      </footer>
    </div>
  );
};

export default Home;
