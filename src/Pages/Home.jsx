import React from 'react';
import { BookOpen, Palette, Calculator, Trophy } from 'lucide-react';

const Home = () => {
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
    }
  ];

  return (
    <div className="min-h-screen min-w-100 bg-gradient-to-b from-blue-950  to-purple-950 overflow-x-hidden">
      {/* Navigation */}
      <nav className="w-full bg-blue-950  border-b border-white/10 overflow-x-hidden">
        <div className="max-w-7xl mx-auto  ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-white hover:text-blue-300 transition-colors cursor-pointer duration-500">
                10 Preguntas
              </div>
            </div>
            <div className="hidden md:block">
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
      <main className="w-auto  py-12 overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              ¡Elige tu Categoría!
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Pon a prueba tus conocimientos en diferentes áreas y demuestra lo que sabes
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mx-auto">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.name}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${category.color} ${category.hoverColor} p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                  onClick={() => {
                    
                    console.log(`Navegando a: ${category.path}`);
                  }}
                >
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex flex-col items-center justify-center h-48 text-center">
                    <div className="mb-4 p-4 bg-white/20 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                      <IconComponent size={48} className="text-white" />
                    </div>
                    
                    <h2 className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                      {category.name}
                    </h2>
                    
                    <div className="w-16 h-1 bg-white/40 rounded-full group-hover:w-24 group-hover:bg-white/60 transition-all duration-300"></div>
                    
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
    </div>
  );
};

export default Home;