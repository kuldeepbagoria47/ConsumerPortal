import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function UsagePage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Key Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">This Month</p>
                    <p className="text-2xl font-bold text-gray-900">289 kWh</p>
                    <div className="flex items-center gap-1 mt-2">
                      <span className="text-xs text-green-500">↑ +9.1% from last month</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Daily Average</p>
                    <p className="text-2xl font-bold text-gray-900">9.6 kWh/day</p>
                    <p className="text-xs text-gray-500 mt-2">Based on current month.</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Peak Hour Usage</p>
                    <p className="text-2xl font-bold text-gray-900">289 kWh</p>
                    <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Evening (6-9 PM)
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Cost Per Unit</p>
                    <p className="text-2xl font-bold text-gray-900">₹9.13 /kWh</p>
                    <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Including all charges
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Today's Hourly Usage */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Today&apos;s Hourly Usage</h3>
                  <p className="text-3xl font-bold text-blue-600 mt-2">540 kWh</p>
                </div>
                <div className="flex gap-2">
                  {['Today', 'Daily', 'Weekly', 'Monthly'].map((tab) => (
                    <button
                      key={tab}
                      className={`px-4 py-2 text-sm font-medium rounded-lg ${
                        tab === 'Today'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
              <div className="h-64 bg-gray-50 rounded-lg flex items-end justify-center gap-1 p-4">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-blue-500 rounded-t flex-1 hover:bg-blue-600 transition-colors"
                    style={{ height: `${Math.random() * 80 + 20}%` }}
                    title={`Hour ${i}: ${Math.floor(Math.random() * 10)} Units`}
                  />
                ))}
              </div>
            </div>

            {/* Monthly Consumption Trend */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Monthly Consumption Trend</h3>
                  <p className="text-sm text-gray-600">Last 6 months energy usage</p>
                </div>
                <div className="flex gap-2">
                  {['Today', 'Daily', 'Weekly', 'Monthly'].map((tab) => (
                    <button
                      key={tab}
                      className={`px-4 py-2 text-sm font-medium rounded-lg ${
                        tab === 'Monthly'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-4">
                <div>
                  <p className="text-2xl font-bold text-gray-900">~1000 kWh</p>
                  <div className="mt-2 space-y-1 text-sm text-gray-600">
                    <p>• POWER 200kWh</p>
                    <p>• SAVED 54.2kWh</p>
                    <p>• AMOUNT ₹2500.50</p>
                  </div>
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <p className="text-sm font-semibold text-green-800">
                      YOUR USAGE IS 8.2% HIGHER THAN AREA AVERAGE (267 KWH/MONTH).
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-64 bg-gray-50 rounded-lg flex items-end justify-center gap-2 p-4">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, i) => (
                  <div key={month} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full flex flex-col gap-1">
                      <div className="bg-green-500 rounded-t" style={{ height: `${Math.random() * 30 + 20}%` }}></div>
                      <div className="bg-red-500" style={{ height: `${Math.random() * 30 + 20}%` }}></div>
                      <div className="bg-blue-500 rounded-b" style={{ height: `${Math.random() * 30 + 20}%` }}></div>
                    </div>
                    <span className="text-xs text-gray-600">{month}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Usage Hours Breakdown */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Usage Hours Breakdown</h3>
                <p className="text-sm text-gray-600">Hourly consumption intensity throughout the day</p>
              </div>
              <div className="flex items-center gap-4 mb-4 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  <span className="text-gray-600">Low</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-gray-600">Moderate</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-gray-600">High</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-gray-600">Very High</span>
                </div>
              </div>
              <div className="h-48 bg-gray-50 rounded-lg flex items-end justify-center gap-1 p-4">
                {Array.from({ length: 24 }).map((_, i) => {
                  const intensity = Math.random();
                  let color = 'bg-gray-400';
                  if (intensity > 0.7) color = 'bg-red-500';
                  else if (intensity > 0.4) color = 'bg-orange-500';
                  else if (intensity > 0.2) color = 'bg-green-500';
                  
                  return (
                    <div
                      key={i}
                      className={`${color} rounded-t flex-1 hover:opacity-80 transition-opacity`}
                      style={{ height: `${intensity * 100}%` }}
                      title={`Hour ${i.toString().padStart(2, '0')}: ${Math.floor(intensity * 50)} Units`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

