import './globals.css'

import Chart0 from '@/components/Chart0'


export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">test deployment</h1>
          <p className="text-sm text-gray-500 mt-1">AI-Generated Analytics Dashboard</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Data Visualizations */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Data Insights</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart0 />
          </div>
        </section>
      </main>

      <footer className="bg-white mt-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-gray-500">
          Generated with AI-Powered Dashboard Builder
        </div>
      </footer>
    </div>
  )
}
