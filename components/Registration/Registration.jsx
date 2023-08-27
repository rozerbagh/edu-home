import React, { useState } from "react";
import TextChanger from "../Elements/TextChanger";
import { proverbs } from "@/helper";
import useAuthentication from "@/hooks/useAuthentication";
import { RegistrationTypes } from "@/helper/Constant";
function Registration({ registrationType, ...props }) {
  const { signUp } = useAuthentication();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
    email: "",
  });

  // Your component code here

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const apiData = {
      fullname: `${formData.firstName} ${formData.lastName}`,
      name: formData.firstName.toLowerCase(),
      email: `${formData.firstName.toLowerCase()}${formData.lastName.toLowerCase()}123@gmail.com`,
      password: formData.password,
      phoneno: formData.phoneNumber,
      user_role:
        registrationType.toLowerCase() === RegistrationTypes.TEACHER_TYPE
          ? RegistrationTypes.TEACHER_TYPE
          : RegistrationTypes.STUDENT_TYPE,
    };
    const response = await signUp(
      apiData.fullname,
      apiData.name,
      apiData.email,
      apiData.password,
      apiData.phoneno,
      apiData.user_role
    );
  };

  return (
    <>
      <div className="min-w-screen min-h-screen bg-transparent flex items-center justify-center px-5 py-5">
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
          style={{ maxWidth: 1000 }}
        >
          <div className="md:flex w-full">
            <div className="hidden md:flex w-1/2 bg-teal-500 py-10 px-10 flex items-center justify-items-center text-center">
              <TextChanger texts_arr={proverbs} />
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">
                  REGISTER {"("}
                  {registrationType}
                  {")"}
                </h1>
                <p>Enter your information to register</p>
              </div>
              <div>
                <div className="flex -mx-3">
                  <div className="w-1/2 px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      First name
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="John"
                        name="firstName"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="w-1/2 px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Last name
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="text"
                        name="lastName"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Smith"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-1/2 px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Phone No
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-phone-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="number"
                        name="phoneNumber"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="9900881234"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="w-1/2 px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Email
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="name@gmail.com"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Phone No
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-phone-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="number"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="9900881234"
                      />
                    </div>
                  </div>
                </div> */}

                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-12">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="password"
                        name="password"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button
                      className="block w-full max-w-xs mx-auto bg-teal-500 hover:bg-teal-700 focus:bg-teal-700 text-white rounded-lg px-3 py-3 font-semibold"
                      onClick={(e) => handleFormSubmit(e)}
                    >
                      REGISTER NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
