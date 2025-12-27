import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function ComplaintsPage() {
  const complaints = [
    {
      id: 'COMP001',
      date: '10 Nov 2025',
      category: 'Power Outage',
      status: 'Open',
      description: 'No electricity since morning',
      priority: 'High',
    },
    {
      id: 'COMP002',
      date: '8 Nov 2025',
      category: 'Billing Issue',
      status: 'Resolved',
      description: 'Incorrect bill amount',
      priority: 'Medium',
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">Complaints</h1>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
                + New Complaint
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Complaint ID</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Category</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Description</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Priority</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {complaints.map((complaint) => (
                      <tr key={complaint.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm font-semibold text-gray-900">{complaint.id}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{complaint.date}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{complaint.category}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs font-medium rounded ${
                            complaint.status === 'Open'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-green-100 text-green-700'
                          }`}>
                            {complaint.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">{complaint.description}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs font-medium rounded ${
                            complaint.priority === 'High'
                              ? 'bg-red-100 text-red-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {complaint.priority}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

