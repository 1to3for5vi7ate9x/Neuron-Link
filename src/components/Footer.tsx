export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">Neuron Link</h3>
            <p className="text-gray-400">
              Orchestrating AI processes inside large language models for more efficient and powerful AI applications.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-white transition duration-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition duration-300">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-white transition duration-300">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#get-involved" className="hover:text-white transition duration-300">
                  Get Involved
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#github" className="hover:text-white transition duration-300">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#discord" className="hover:text-white transition duration-300">
                  Discord
                </a>
              </li>
              <li>
                <a href="#twitter" className="hover:text-white transition duration-300">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Neuron Link. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
