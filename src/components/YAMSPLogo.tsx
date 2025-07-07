export default function YAMSPLogo() {
  return (
    <div className="flex items-center justify-center py-10 z-20">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-lg opacity-75 blur-sm animate-pulse"></div>
        
        <div className="relative bg-black/80 backdrop-blur-sm rounded-lg px-10 py-6 shadow-2xl" style={{border: '1px solid #ff00ff'}}>
          <div className="flex items-center space-x-2 text-5xl font-bold">
            <span className="text-red-400 hover:text-red-300 transition-colors duration-300 cursor-default">Y</span>
            <span className="text-orange-400 hover:text-orange-300 transition-colors duration-300 cursor-default">A</span>
            <span className="text-purple-400 hover:text-purple-300 transition-colors duration-300 cursor-default">M</span>
            <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-default">S</span>
            <span className="text-green-400 hover:text-green-300 transition-colors duration-300 cursor-default">P</span>
          </div>
          
          <div className="text-gray-400 text-sm text-center mt-2 tracking-wider">
            MOVIE SEARCH
          </div>
          
          <div className="flex justify-center space-x-2 mt-3">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}