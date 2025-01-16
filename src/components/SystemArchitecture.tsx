export default function SystemArchitecture() {
  return (
    <section id="architecture" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">System Architecture</h2>
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-8">
              {/* User/Investor Layer */}
              <div className="text-center">
                <div className="inline-block bg-purple-100 px-6 py-3 rounded-lg">
                  <h3 className="font-semibold text-lg">User/Investor</h3>
                </div>
              </div>

              {/* Website Access Layer */}
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 px-6 py-4 rounded-lg">
                    <h4 className="font-semibold">Main Website</h4>
                    <p className="text-sm text-gray-600 mt-2">AI Task Entry & Orchestration Access</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 px-6 py-4 rounded-lg">
                    <h4 className="font-semibold">ICO Landing Page</h4>
                    <p className="text-sm text-gray-600 mt-2">Token Purchase & KYC</p>
                  </div>
                </div>
              </div>

              {/* Smart Contract Layer */}
              <div className="text-center">
                <div className="bg-yellow-100 px-6 py-4 rounded-lg inline-block">
                  <h4 className="font-semibold">Smart Contract (Token)</h4>
                  <p className="text-sm text-gray-600 mt-2">Access Rights & Token Management</p>
                </div>
              </div>

              {/* AI Orchestrator Layer */}
              <div className="text-center">
                <div className="bg-indigo-100 px-6 py-4 rounded-lg">
                  <h4 className="font-semibold">Main AI Orchestrator</h4>
                  <p className="text-sm text-gray-600 mt-2">Task Management & Dispatch</p>
                </div>
              </div>

              {/* Sub-Agents and Memory Layer */}
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="bg-pink-100 px-6 py-4 rounded-lg">
                    <h4 className="font-semibold">Sub-Agents</h4>
                    <p className="text-sm text-gray-600 mt-2">Specialized Task Execution</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 px-6 py-4 rounded-lg">
                    <h4 className="font-semibold">Shared Memory / DB</h4>
                    <p className="text-sm text-gray-600 mt-2">State & Results Management</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Connection Lines */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Add SVG arrows here if needed */}
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">How It Works</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center shrink-0">1</div>
                <div>
                  <h4 className="font-semibold">User Access & Token Purchase</h4>
                  <p className="text-gray-600">Users can access the main website for AI services or purchase tokens through the ICO platform with KYC verification.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">2</div>
                <div>
                  <h4 className="font-semibold">Smart Contract Integration</h4>
                  <p className="text-gray-600">Token ownership and access rights are managed through secure smart contracts on the blockchain.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">3</div>
                <div>
                  <h4 className="font-semibold">AI Task Orchestration</h4>
                  <p className="text-gray-600">The main orchestrator manages task flow, dispatching specialized sub-agents while maintaining global state.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center shrink-0">4</div>
                <div>
                  <h4 className="font-semibold">Results & Memory Management</h4>
                  <p className="text-gray-600">All intermediate results and task states are managed in a shared memory system for efficient coordination.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
