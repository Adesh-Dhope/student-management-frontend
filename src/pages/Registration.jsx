import React, { useState } from "react";
import RecordData from "./RecordData";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createStudent } from "../redux/slices/studentSlice";
import { useSnackbar } from "notistack";

const Registration = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [reloadData, setReloadData] = useState(false);

  const [rollNo, setRollNo] = useState("");
  const [fullName, setFullName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [dob, setDOB] = useState("");
  const [address, setAddress] = useState("");
  const [sex, SetSex] = useState("");
  const [bloodGroup, SetBloodGroup] = useState("");

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
    const Data = {
      rollNo: rollNo,
      fullName: fullName,
      motherName: motherName,
      dob: dob,
      address: address,
      bloodGroup: bloodGroup,
      sex: sex,
    };

    try {
      await dispatch(createStudent(Data));
      console.log("data sent to backend");
      enqueueSnackbar("Student Added Successfully", {
        variant: "success",
        autoHideDuration: 1500,
      });
      setReloadData((prev) => !prev);
    } catch {
      console.error("error occured while sending data to backend");
    }

    setRollNo("");
    setFullName("");
    setMotherName("");
    setDOB("");
    setAddress("");
    SetSex("");
    SetBloodGroup("");
  };

  return (
    <div className="pt-2">
      <div className="text-[2rem] font-bold pl-4 bg-blue-400 rounded-md">
        <h1 className="text-xxl">Add Student Details</h1>
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
            onChange={(e) => SetBloodGroup(e.target.value)}
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
            onChange={(e) => SetSex(e.target.value)}
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
      <RecordData reloadData={reloadData} />
    </div>
  );
};

export default Registration;
