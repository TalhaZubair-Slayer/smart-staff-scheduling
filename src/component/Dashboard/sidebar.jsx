import React from 'react'

const sidebar = () => {
  return (
    <aside className="bg-white border-r min-h-screen p-4">

      {/* Top toggle button */}
      <div
        className={`flex mb-6 ${
          sidebarOpen ? "justify-end" : "justify-center"
        }`}
      >
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 cursor-pointer text-xl"
        >
          {sidebarOpen ? "✕" : "☰"}
        </button>
      </div>


      {/* Logo */}
      <div
        className={`flex items-center ${
          sidebarOpen ? "gap-3" : "justify-center"
        }`}
      >
        <div className="h-10 w-10 shrink-0 rounded-lg bg-teal-700 text-white flex items-center justify-center">
          SS
        </div>

        {sidebarOpen && (
          <div>
            <h2 className="font-bold">StaffSync</h2>
            <p className="text-xs text-gray-500">
              Operations
            </p>
          </div>
        )}
      </div>


      {/* Navigation */}
      <nav className="mt-8 space-y-2">

        <button
          className={`flex items-center w-full p-3 rounded-lg hover:bg-teal-700 hover:text-white cursor-pointer ${
            sidebarOpen ? "gap-3" : "justify-center"
          }`}
        >
          <span>🏠</span>

          {sidebarOpen && (
            <span>Overview</span>
          )}
        </button>


        <button
          className={`flex items-center w-full p-3 rounded-lg hover:bg-teal-700 hover:text-white cursor-pointer ${
            sidebarOpen ? "gap-3" : "justify-center"
          }`}
        >
          <span>📅</span>

          {sidebarOpen && (
            <span>Schedule</span>
          )}
        </button>


        <button
          className={`flex items-center w-full p-3 rounded-lg hover:bg-teal-700 hover:text-white cursor-pointer ${
            sidebarOpen ? "gap-3" : "justify-center"
          }`}
        >
          <span>👥</span>

          {sidebarOpen && (
            <span>Staff</span>
          )}
        </button>


        <button
          className={`flex items-center w-full p-3 rounded-lg hover:bg-teal-700 hover:text-white cursor-pointer ${
            sidebarOpen ? "gap-3" : "justify-center"
          }`}
        >
          <span>🏢</span>

          {sidebarOpen && (
            <span>Clients</span>
          )}
        </button>


        <button
          className={`flex items-center w-full p-3 rounded-lg hover:bg-teal-700 hover:text-white cursor-pointer ${
            sidebarOpen ? "gap-3" : "justify-center"
          }`}
        >
          <span>📍</span>

          {sidebarOpen && (
            <span>Sites</span>
          )}
        </button>


        <button
          className={`flex items-center w-full p-3 rounded-lg hover:bg-teal-700 hover:text-white cursor-pointer ${
            sidebarOpen ? "gap-3" : "justify-center"
          }`}
        >
          <span>✓</span>

          {sidebarOpen && (
            <span>Attendance</span>
          )}
        </button>

      </nav>

    </aside>
  )
}

export default sidebar