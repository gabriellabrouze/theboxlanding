import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-lora font-semibold text-primary">
            OpenHansard
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          {/* Logo/Title */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-lora text-primary mb-8">
            openhansard
          </h2>

          {/* Main Heading */}
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-bold text-primary mb-6">
            Inter Bold
          </h3>

          {/* Description */}
          <p className="text-xl sm:text-2xl font-inter font-normal text-primary max-w-2xl mx-auto mb-12">
            An open data repository of parliamentary records.
          </p>

          {/* Search Button */}
          <button className="bg-accent hover:bg-opacity-90 text-white font-source text-lg px-12 py-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
            Search
          </button>
        </div>

        {/* Features Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-secondary p-8 rounded-lg shadow-sm">
            <h4 className="text-xl font-inter font-semibold text-primary mb-3">
              Open Access
            </h4>
            <p className="text-gray-600 font-inter">
              Free and accessible parliamentary records for everyone.
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-lg shadow-sm">
            <h4 className="text-xl font-inter font-semibold text-primary mb-3">
              Comprehensive
            </h4>
            <p className="text-gray-600 font-inter">
              Search through extensive archives of parliamentary debates.
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-lg shadow-sm">
            <h4 className="text-xl font-inter font-semibold text-primary mb-3">
              Transparent
            </h4>
            <p className="text-gray-600 font-inter">
              Promoting transparency in government and democracy.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-600 font-inter text-sm">
            © 2025 OpenHansard. An open data repository of parliamentary records.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
