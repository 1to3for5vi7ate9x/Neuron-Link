export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main flow diagram */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 gap-8">
                {/* User Input */}
                <div className="text-center">
                  <div className="bg-blue-100 p-4 rounded-lg inline-block">
                    <h3 className="font-semibold text-lg mb-2">Main Agent</h3>
                    <p className="text-sm text-gray-600">User-Facing LLM Interface</p>
                  </div>
                  <div className="h-8 w-1 bg-gray-300 mx-auto my-2"></div>
                </div>

                {/* Neuron Link Kernel */}
                <div className="text-center">
                  <div className="bg-purple-100 p-4 rounded-lg inline-block">
                    <h3 className="font-semibold text-lg mb-2">Neuron Link Kernel</h3>
                    <p className="text-sm text-gray-600">Task Orchestration & Memory Management</p>
                  </div>
                  <div className="h-8 w-1 bg-gray-300 mx-auto my-2"></div>
                </div>

                {/* Specialized Subprocesses */}
                <div className="grid grid-cols-3 gap-4">
                  {['Research', 'Analysis', 'Generation'].map((process) => (
                    <div key={process} className="text-center">
                      <div className="bg-green-100 p-4 rounded-lg">
                        <h4 className="font-semibold">{process}</h4>
                        <p className="text-sm text-gray-600">Subprocess</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Flow arrows */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3.5, 0 7" fill="#9CA3AF" />
                  </marker>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
