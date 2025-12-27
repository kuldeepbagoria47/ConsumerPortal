import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function SettingsPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Settings</h1>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">General Settings</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Theme</p>
                    <p className="text-xs text-gray-500">Choose your preferred theme</p>
                  </div>
                  <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                    <option>Light</option>
                    <option>Dark</option>
                    <option>System</option>
                  </select>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Language</p>
                    <p className="text-xs text-gray-500">Select your language</p>
                  </div>
                  <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                    <option>English</option>
                    <option>Hindi</option>
                  </select>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Auto-refresh</p>
                    <p className="text-xs text-gray-500">Automatically refresh data</p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                    <span className="inline-block h-4 w-4 transform translate-x-6 rounded-full bg-white transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Two-Factor Authentication</p>
                    <p className="text-xs text-gray-500">Add an extra layer of security</p>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
                    Enable
                  </button>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Delete Account</p>
                    <p className="text-xs text-gray-500">Permanently delete your account</p>
                  </div>
                  <button className="px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

