import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Current Bill</p>
                    <p className="text-2xl font-bold text-gray-900">₹2,897</p>
                    <div className="flex items-center gap-1 mt-2">
                      <span className="text-xs text-red-500">↓ 0.5%</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">DUE: Nov 11, 2025</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">This Month</p>
                    <p className="text-2xl font-bold text-gray-900">312 kWh</p>
                    <div className="flex items-center gap-1 mt-2">
                      <span className="text-xs text-green-500">↑ 0.5%</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">AVG: 289 kWh/month</p>
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
                    <p className="text-sm text-gray-600 mb-1">Payment Status</p>
                    <p className="text-lg font-semibold text-green-600">Paid</p>
                    <p className="text-xs text-green-600">UP To Date</p>
                    <p className="text-xs text-gray-500 mt-1">LAST: Nov 11, 2025</p>
                  </div>
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Meter Status</p>
                    <p className="text-lg font-semibold text-green-600">Active</p>
                    <p className="text-xs text-green-600">ON</p>
                    <p className="text-xs text-gray-500 mt-1">Smart Meter #SM12456789</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row: Meter Display and Today's Hourly Usage */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Meter Details Section */}
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-700">METER NO: #G10023456789000</span>
                    <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded">POSTPAID</span>
                  </div>
                </div>
                <div className="flex items-center justify-center my-6">
                  <div className="bg-gray-900 rounded-lg p-8 text-white relative w-full max-w-md">
                    <div className="text-center mb-2">
                      <div className="text-3xl font-mono tracking-wider">000000000000</div>
                      <div className="text-sm text-gray-400 mt-2 flex justify-center gap-4">
                        <span>kWh</span>
                        <span>kVAh</span>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 text-xs text-gray-500">Genus</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">
                    ON DEMAND UPDATE
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <p className="text-xs text-gray-500 text-center">UPDATED ON: 11-11-2025 04:00PM</p>
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
                  {/* Simple bar chart representation */}
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-blue-500 rounded-t flex-1 hover:bg-blue-600 transition-colors cursor-pointer"
                      style={{ height: `${Math.random() * 80 + 20}%` }}
                      title={`11 Nov 14:30 - 8 Units`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Third Row: Status, Running Bill Estimate, Insights Snapshot */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Status Section */}
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Status</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded">CONNECTED</span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">R</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">Y</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">B</div>
                  </div>
                </div>
                <p className="text-xs text-gray-500">LAST UPDATED ON: 11-11-2025 04:00PM</p>
              </div>

              {/* Running Bill Estimate */}
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Running Bill Estimate</h3>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="text-sm text-gray-600">37%</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">BILL SO FAR</p>
                  <p className="text-2xl font-bold text-gray-900">₹985.00</p>
                  <p className="text-sm text-gray-600 mt-2">UNITS USED: 108kWh</p>
                  <div className="mt-4">
                    <p className="text-xs text-gray-500 mb-2">CURRENT MONTH PROGRESS (DAY 11 OF 30)</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '37%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-1">PROJECTED MONTH-END</p>
                  <p className="text-2xl font-bold text-gray-900">₹2890.00</p>
                  <div className="h-32 bg-gray-50 rounded-lg mt-4 flex items-end justify-center p-2 relative">
                    {/* Simple line chart representation */}
                    <svg className="w-full h-full absolute inset-0">
                      <polyline
                        points="0,100 30,80 60,70 90,60 120,50 150,45"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="2"
                      />
                      <circle cx="150" cy="45" r="4" fill="#3B82F6" />
                      <text x="155" y="40" className="text-xs fill-gray-600">COST: ₹536</text>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Insights Snapshot */}
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Insights Snapshot</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
                    <div className="w-10 h-10 bg-orange-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">High usage this evening</p>
                      <p className="text-sm text-gray-600">6-9 PM / 15.2KWH CONSUMED</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">8% higher than neighbors</p>
                      <p className="text-sm text-gray-600">AREA AVG 267KWH/MONTH</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                    <div className="w-10 h-10 bg-green-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Energy Saving Tips</p>
                      <p className="text-sm text-gray-600">SAVE ₹180/M / RUN GEYSER &gt;20MINS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Oct 2025 Bill and My Connections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Oct 2025 Bill */}
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Oct 2025 Bill</h3>
                  <span className="px-3 py-1 bg-black text-white text-xs font-medium rounded flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    DUE IN 14 DAYS
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Nov billing period: Nov 1 - Nov 31, 2025
                </p>
              <div className="space-y-3 mb-6">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Energy Charges</span>
                    <span className="font-semibold">₹2,340</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Fixed Charges</span>
                    <span className="font-semibold">₹125</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-pink-500 h-2 rounded-full" style={{ width: '4%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Electricity Duty @ 15%</span>
                    <span className="font-semibold">₹351</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '12%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Other Charges</span>
                    <span className="font-semibold">₹31</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '1%' }}></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600">TOTAL AMOUNT</p>
                  <p className="text-2xl font-bold text-gray-900">₹2847.30</p>
                </div>
                <div className="flex items-center gap-2 text-red-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">DUE DATE: NOV 25, 2025</span>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Pay Bill Now
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Last Bill
                </button>
              </div>
              </div>

              {/* My Connections */}
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">My Connections</h3>
                  <button>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-3">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div>
                          <p className="font-semibold text-gray-900">10000153</p>
                          <p className="text-sm text-gray-600">House No. 123, Sector 5, Gomti Nagar</p>
                          <p className="text-xs text-gray-500 mt-1">CA Number: 1234567890 | Type: Residential</p>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">Primary</span>
                    </div>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div>
                          <p className="font-semibold text-gray-900">12300777</p>
                          <p className="text-sm text-gray-600">Shop No. 45, Commercial Complex, Hazratganj</p>
                          <p className="text-xs text-gray-500 mt-1">CA Number: 11223344556 | Type: Commercial</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div>
                          <p className="font-semibold text-gray-900">13200777</p>
                          <p className="text-sm text-gray-600">House No. 123, Sector 5, Gomti Nagar</p>
                          <p className="text-xs text-gray-500 mt-1">CA Number: 1234567890 | Type: Residential</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

