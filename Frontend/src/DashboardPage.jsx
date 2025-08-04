import { useEffect, useState } from "react";
import axios from "axios";

const DashboardPage = () => {
  const [dashboard, setDashboard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/dashboard");
        setDashboard(res.data?.data || null);
      } catch (error) {
        console.error("Failed to fetch dashboard data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const handleNext = () => {
    if (currentIndex < dashboard?.data?.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const currentUser = dashboard?.data?.[currentIndex];

  return (
    <div className="min-h-screen bg-slate-600 text-white p-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Intern Dashboard</h1>

      {loading ? (
        <p>Loading...</p>
      ) : dashboard && currentUser ? (
        <>
          <div className="bg-white text-black rounded-xl shadow-lg p-6 w-full max-w-md mb-4">
            <h2 className="text-2xl font-semibold mb-2">{currentUser.name}</h2>
            <p><strong>Referral Code:</strong> {currentUser.referralCode}</p>
            <p><strong>Donations:</strong> ₹{currentUser.donations}</p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === dashboard.data.length - 1}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>

          <p className="mt-4 text-sm text-gray-300">
            Showing {currentIndex + 1} of {dashboard.data.length}
          </p>

          <div className="mt-6 text-sm text-gray-200">
            <p>Total Interns: {dashboard.totalInterns}</p>
            <p>Total Donations: ₹{dashboard.totalDonations}</p>
          </div>
        </>
      ) : (
        <p>No intern data found.</p>
      )}
    </div>
  );
};

export default DashboardPage;
