import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { fetchStudents, updateStudent } from '../redux/slices/studentSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';

const EditStudent = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
      const { id } = useParams();
      const {enqueueSnackbar} = useSnackbar()
console.log('id',id)
    const { students } = useSelector((state) => state.students);
console.log('students',students)

  const student = students.find((item) => item.id === Number(id));
console.log('student',student)
  const [rollNo, setRollNo] = useState("");
  const [fullName, setFullName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [dob, setDOB] = useState("");
  const [address, setAddress] = useState("");
  const [sex, setSex] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");

  useEffect(() => {
    if (student) {
      setRollNo(student.rollNo);
      setFullName(student.fullName);
      setMotherName(student.motherName);
      setDOB(student.dob);
      setAddress(student.address);
      setSex(student.sex);
      setBloodGroup(student.bloodGroup);
    }
  }, [student]);

  const handleSubmit = async () => {
      if (
        !rollNo &&
        !fullName &&
        !motherName &&
        !dob &&
        !address &&
        !bloodGroup &&
        !sex
      ) {
        enqueueSnackbar("fill all fields", {
          variant: "error",
          autoHideDuration: 1500,
        });
        return;
      }
      const updatedData = {
        rollNo: rollNo,
        fullName: fullName,
        motherName: motherName,
        dob: dob,
        address: address,
        bloodGroup: bloodGroup,
        sex: sex,
      };
  
      try {
        console.log('Data',updatedData)
        await dispatch(updateStudent({id,updatedData}));
        console.log("data sent to backend");
        enqueueSnackbar("Student updated Successfully", {
          variant: "success",
          autoHideDuration: 1500,
        });
        navigate('/recorddata')
        await dispatch(fetchStudents())
        // setReloadData((prev) => !prev);
      } catch (error){
        console.error("error occured while sending data to backend", error);
      }
  
      setRollNo("");
      setFullName("");
      setMotherName("");
      setDOB("");
      setAddress("");
      setSex("");
      setBloodGroup("");
    };
  
  return (
 <div className='pt-2'>
      <div className="text-[2rem] font-bold pl-4 bg-blue-400 rounded-md">
        <h1 className="text-xxl">Edit Student Details</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4 pb-6">
        <div className="flex flex-col">
          <label>Roll No :</label>
          <input
            type="text"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            placeholder="enter roll no"
            required
            className="border-2 border-gray-800 rounded-xs p-1.5 w-[50%] xs:w-[100%]"
          />
        </div>
        <div className="flex flex-col">
          <label>Full Name :</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="enter fullname"
            required
            className="border-2 border-gray-800 rounded-xs p-1.5 w-[50%] xs:w-[100%]"
          />
        </div>
        <div className="flex flex-col">
          <label>Mother Name :</label>
          <input
            type="text"
            value={motherName}
            onChange={(e) => setMotherName(e.target.value)}
            placeholder="enter mother name"
            required
            className="border-2 border-gray-800 rounded-xs p-1.5 w-[50%] xs:w-[100%]"
          />
        </div>
        <div className="flex flex-col">
          <label>Date of Birth : </label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
            placeholder="enter birthdate"
            required
            className="border-2 border-gray-800 rounded-xs p-1.5 w-[50%] xs:w-[100%]"
          />
        </div>
        <div className="flex flex-col">
          <label>Blood Group : </label>
          <input
            type="text"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            placeholder="enter blood group"
            required
            className="border-2 border-gray-800 rounded-xs p-1.5 w-[50%] xs:w-[100%]"
          />
        </div>
        <div className="flex flex-col">
          <label>Address : </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="enter present address"
            required
            className="border-2 border-gray-800 rounded-xs p-1.5 w-[50%] xs:w-[100%]"
          />
        </div>
        <div className="flex flex-col">
          <label>Sex :</label>
          <input
            type="text"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            placeholder="enter sex"
            required
            className="border-2 border-gray-800 rounded-xs p-1.5 w-[50%] xs:w-[100%]"
          />
        </div>
        <div className="flex flex-col justify-end h-full text-start">
          <button
            className="p-1.5 hover:bg-blue-600 bg-blue-400 hover:text-white  text-black rounded-md w-[50%] xs:w-[100%]"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditStudent