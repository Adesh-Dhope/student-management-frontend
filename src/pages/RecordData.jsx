import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, fetchStudents } from "../redux/slices/studentSlice";
import { ClipboardX, ClipboardPen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const RecordData = ({ reloadData }) => {

  const navigate = useNavigate();
const {enqueueSnackbar} = useSnackbar()
  const dispatch = useDispatch();
  const { students } = useSelector((state) => state.students);
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    setStudentData(students);
    dispatch(fetchStudents());
  }, [dispatch, reloadData]);

  const handleDelete = (id) => {
  if (window.confirm("Are you sure you want to delete this student?")) {
    dispatch(deleteStudent(id))
      .then(() => {
        enqueueSnackbar("Student deleted successfully", {
          variant: "success",
          autoHideDuration: 1500,
        });
        // Optionally refresh student list
      })
      .catch((err) => {
        enqueueSnackbar("Error deleting student", {
          variant: "error",
          autoHideDuration: 1500,
        });
        console.error(err);
      });
  }
};

  return (
    <div className="w-full pt-2">
      <div className="font-bold bg-blue-400 pl-4 rounded-md">
        <h1 className="text-[2rem]">Student List</h1>
      </div>
      <div className="pt-3">
        <table className="w-full table-fixed border-2 border-gray-800 ">
          <thead className="border-[1px] border-gray-800">
            <tr>
              <th className="border-[1px] border-gray-800 w-[6%]">Sr.No</th>
              <th className="border-[1px] border-gray-800 w-[10%]">DB ID</th>

              <th className="border-[1px] border-gray-800 w-[10%]"> Roll No</th>
              <th className="border-[1px] border-gray-800 w-[16%]">Name</th>
              <th className="border-[1px] border-gray-800 w-[13%]">
                Mother Name
              </th>
              <th className="border-[1px] border-gray-800 w-[13%]">Bloog G</th>
              <th className="border-[1px] border-gray-800 w-[13%]">DOB</th>
              <th className="border-[1px] border-gray-800 w-[16%]">Address</th>
              <th className="border-[1px] border-gray-800 w-[6%]">View</th>
              <th className="border-[1px] border-gray-800 w-[6%]">Edit</th>
              <th className="border-[1px] border-gray-800 w-[6%] truncate">Delete</th>
            </tr>
          </thead>
          <tbody className="border-[1px] border-gray-800">
            {Array.isArray(studentData) &&
              studentData.map((user, index) => (
                <tr
                  key={index}
                  className="text-center hover:cursor-pointer hover:bg-slate-200"
                  title="click to view details"
                >
                  <td className="border-[1px] border-gray-800 truncate px-1">
                    {index + 1}
                  </td>
                  <td className="border-[1px] border-gray-800 truncate px-1">
                    {user.id}
                  </td>
                  <td className="border-[1px] border-gray-800 truncate px-1">
                    {user.rollNo}
                  </td>
                  <td className="border-[1px] border-gray-800 truncate px-1">
                    {user.fullName}
                  </td>
                  <td className="border-[1px] border-gray-800 truncate px-1">
                    {user.motherName}
                  </td>
                  <td className="border-[1px] border-gray-800 truncate px-1">
                    {user.bloodGroup}
                  </td>
                  <td className="border-[1px] border-gray-800 truncate px-1">
                    {user.dob}
                  </td>
                  <td className="border-[1px] border-gray-800 truncate px-1">
                    {user.address}
                  </td>
                  <td className="border-[1px] border-gray-800  px-1 text-center">
                    <button className="bg-blue-500 hover:bg-blue-800 text-white rounded-md px-1 text-sm">
                      View
                    </button>
                  </td>
                  <td
                  onClick={ ()=> navigate( `/recorddata/edit/${user.id}`)}
                  className="border-[1px] border-gray-800 truncate p-1 text-center"  title="click to edit details">
                    <div className="flex justify-center items-center h-full">
                      <ClipboardPen
                        size={22}
                        className="cursor-pointer hover:bg-slate-200"
                      />
                    </div>
                  </td>
                  <td className="border-[1px] border-gray-800  px-1 text-center "  title="click to delete student">
                    <div className="flex justify-center items-center h-full">
                      <ClipboardX
                        size={22}
                        className="cursor-pointer hover:bg-slate-200"
                              onClick={() => handleDelete(user.id)} // 👈 call delete with custom ID
                      />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecordData;
