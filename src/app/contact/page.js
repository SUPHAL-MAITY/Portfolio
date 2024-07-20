import React from "react";

const Contact = () => {
  return (
    <div  className=" flex p-6 justify-center">
      <div className="bg-white  max-w-2xl shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          
          <p className="mt-1 font-bold max-w-2xl text-sm text-gray-500">
            Contact Me
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 font-bold">Full name</dt>
              <dd className="mt-1  text-sm text-gray-900 sm:mt-0 sm:col-span-2">
               Suphal Maity
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 font-bold">Best techno</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                MERN
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 font-bold">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                suphalmaity730@gmail.com
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 font-bold">Mobile</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                9804137946
              </dd>
            </div>
            
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Contact;
