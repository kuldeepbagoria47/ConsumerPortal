'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function ProfilePage() {
  const [preferences, setPreferences] = useState({
    smsNotifications: true,
    whatsappAlerts: false,
    emailNotifications: false,
    billReminders: false,
    outageAlerts: false,
    paymentConfirmations: false,
    appLanguage: true,
  });

  const togglePreference = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const connections = [
    {
      consumerId: '2025015300',
      caNumber: '1234567890',
      type: 'Residential',
      status: 'Active',
      address: 'House No. 123, Sector 5, Gomti Nagar',
      isPrimary: true,
    },
    {
      consumerId: '2025015300',
      caNumber: '1234567890',
      type: 'Residential',
      status: 'Inactive',
      address: 'House No. 123, Sector 5, Gomti Nagar',
      isPrimary: false,
    },
    {
      consumerId: '2025015300',
      caNumber: '1234567890',
      type: 'Commercial',
      status: 'Active',
      address: 'House No. 123, Sector 5, Gomti Nagar',
      isPrimary: false,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Consumer Profile Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Consumer ID:</span>
                    <span className="text-sm font-semibold text-gray-900">#123456789900</span>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  EDIT PROFILE
                </button>
              </div>

              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">Jaya Sharma</h2>
                  <p className="text-sm text-gray-600 mt-1">+91 98765 43210</p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Lucknow</span> | <span>Uttar Pradesh</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-700">METER NO: #G10023456789000</span>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded">POSTPAID</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Account Details */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Details</h3>
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Residential</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">Active</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-gray-900">10000153</span>
                    <span className="text-sm text-gray-500">Jan 2020</span>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">CA Number</p>
                    <p className="text-sm font-semibold text-gray-900">12345667890</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Sanctioned Load</p>
                    <p className="text-sm font-semibold text-gray-900">5KW</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Tariff Category</p>
                    <p className="text-sm font-semibold text-gray-900">LMV-1 (Domestic)</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Division Office</p>
                    <p className="text-sm font-semibold text-gray-900">PVVNL Gomti Nagar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* My Connections */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">My Connections</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Consumer ID</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">CA Number</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Type</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Address</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {connections.map((connection, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div>
                            <p className="text-sm font-semibold text-gray-900">{connection.consumerId}</p>
                            {connection.isPrimary && (
                              <span className="text-xs text-blue-600 font-medium">Primary</span>
                            )}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">{connection.caNumber}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{connection.type}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${
                              connection.status === 'Active' ? 'bg-green-500' : 'bg-red-500'
                            }`}></div>
                            <span className="text-sm text-gray-600">{connection.status}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">{connection.address}</td>
                        <td className="py-3 px-4">
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* My Preferences */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">My Preferences</h3>
                <button>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <div className="space-y-4">
                {[
                  { key: 'smsNotifications', label: 'SMS Notifications' },
                  { key: 'whatsappAlerts', label: 'Whatsapp Alerts' },
                  { key: 'emailNotifications', label: 'Email Notifications' },
                  { key: 'billReminders', label: 'Bill Reminders' },
                  { key: 'outageAlerts', label: 'Outage Alerts' },
                  { key: 'paymentConfirmations', label: 'Payment Confirmations' },
                ].map((pref) => (
                  <div key={pref.key} className="flex items-center justify-between py-2">
                    <span className="text-sm text-gray-700">{pref.label}</span>
                    <button
                      onClick={() => togglePreference(pref.key as keyof typeof preferences)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences[pref.key as keyof typeof preferences]
                          ? 'bg-blue-600'
                          : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences[pref.key as keyof typeof preferences]
                            ? 'translate-x-6'
                            : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                ))}
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-700">App Language Preference</span>
                  <button
                    onClick={() => togglePreference('appLanguage')}
                    className={`relative inline-flex h-6 w-16 items-center rounded-full transition-colors ${
                      preferences.appLanguage ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform flex items-center justify-center text-xs font-medium ${
                        preferences.appLanguage ? 'translate-x-11' : 'translate-x-1'
                      }`}
                    >
                      {preferences.appLanguage ? 'EN' : ''}
                    </span>
                  </button>
                </div>
              </div>
              <div className="mt-6 space-y-2 border-t border-gray-200 pt-4">
                {['Change Password', 'Payment Settings', 'Auto-Pay-Setup'].map((item) => (
                  <button
                    key={item}
                    className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg text-sm text-gray-700"
                  >
                    <span>{item}</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

