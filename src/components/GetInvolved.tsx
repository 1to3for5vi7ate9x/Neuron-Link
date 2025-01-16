export default function GetInvolved() {
  return (
    <section id="get-involved" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get Involved</h2>
          <p className="text-xl text-gray-600 mb-12">
            Join our growing community of developers and AI enthusiasts shaping the future of LLM orchestration.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-semibold mb-4">Join the Discussion</h3>
              <p className="text-gray-600 mb-6">
                Connect with other developers, share ideas, and stay updated on the latest developments.
              </p>
              <a
                href="#discord"
                className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                Join Discord Community
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-semibold mb-4">Contribute</h3>
              <p className="text-gray-600 mb-6">
                Help build the future of AI orchestration. Contribute code, documentation, or ideas.
              </p>
              <a
                href="#github"
                className="inline-block bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300"
              >
                View on GitHub
              </a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6">Stay Updated</h3>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="submit"
                  className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
