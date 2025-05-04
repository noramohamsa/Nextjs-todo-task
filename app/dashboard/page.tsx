"use client";

import { useState } from "react";

export default function DashboardPage() {
  // بيانات تجريبية (لحد ما نربط ببيانات حقيقية)
  const user = {
    name: "Sarah Ahmed",
    email: "sarah@example.com",
  };

  const [todos] = useState([
    { id: 1, title: "Buy milk", completed: true },
    { id: 2, title: "Learn Next.js", completed: false },
    { id: 3, title: "Deploy project", completed: true },
  ]);

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-2xl mx-auto bg-white rounded shadow p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}!</h1>

        <div className="mb-4">
          <p className="text-gray-700">
            <strong>Email:</strong> {user.email}
          </p>
        </div>

        <div className="bg-blue-100 p-4 rounded mb-4">
          <p className="text-blue-800 font-semibold">
            ✅ Completed Tasks: {completedCount} / {todos.length}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <a
            href="/todos"
            className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            Go to Tasks
          </a>
          <button className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
