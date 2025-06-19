import React from "react";

const StudentDetails = () => {
  return (
    <div className="pt-2">
      {/* Header */}
      <div className="text-[2rem] font-bold pl-4 bg-blue-400 rounded-md ">
        <h1 className="text-xxl">Add Student Details</h1>
      </div>

      {/* Student Info Section */}
      <div className="flex w-full pt-4 gap-6">
        <div className="w-[70%] space-y-1">
          <h2>Student Name: FlatMap Array</h2>
          <h2>Roll No: 3667</h2>
          <h2>Mother's Name: Shital</h2>
          <h2>Date Of Birth: 12 May 2004</h2>
          <h2>PRN No : 7848848848383</h2>
          <h2>College Name : Inix college of Computer Science</h2>
        </div>
        <div className="w-[30%] flex flex-col items-center gap-2">
          <div className="h-40 w-32 bg-gray-400 rounded-md"></div>
          <button className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600">
            Upload Photo
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-2 border">Paper Code</th>
              <th className="p-2 border">Paper Name</th>
              <th className="p-2 border">Credit</th>
              <th className="p-2 border">Marks Obtained</th>
              <th className="p-2 border">Mark Assigned</th>
              <th className="p-2 border">Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="p-2 border">E09343</td>
              <td className="p-2 border">Javascript</td>
              <td className="p-2 border">2.4</td>
              <td className="p-2 border">89</td>
              <td className="p-2 border">100</td>
              <td className="p-2 border">B</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentDetails;
