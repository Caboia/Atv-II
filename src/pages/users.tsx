import React from "react";
import SideBar from "../components/sideBar";

function Users() {
  return (
    <div className="flex h-screen overflow-hidden family-roboto">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        {/* Search Bar */}
        <div className="bg-gray-50 p-3 flex items-center shadow-sm ">
          <span
            className="relative flex flex-row items-center p-[0.37rem] focus:outline-none hover:bg-gray-50 text-gray-600 "
          >
            <svg
              className="w-5 h-5 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          </span>
          <span className="text-gray-600 ">/</span>
          <span className="text-gray-600 ml-2">Clientes</span>
        </div>

        {/* Page Header */}
        <div className="py-2 px-6 w-full bg-gray-50 border-t flex gap-12 items-center">
          <h1 className="text-2xl font-bold">Clientes</h1>
          <button className="flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span>Novo Cliente</span>
          </button>
        </div>

        {/* Table Filter */}
        <div className=" flex flex-col items-center justify-center mt-6">
          <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
            <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-[90rem] py-4 overflow-hidden bg-white shadow-lg px-12">
              <div className="flex justify-between">
                <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
                  <div className="flex flex-wrap items-stretch w-[90rem] h-full mb-6 relative">
                    <div className="flex">
                      <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                        <svg
                          width="18"
                          height="18"
                          className="w-4 lg:w-auto"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z"
                            stroke="#455A64"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16.9993 16.9993L13.1328 13.1328"
                            stroke="#455A64"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs lg:text-base text-gray-500 font-thin"
                      placeholder="Pesquisar..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="align-middle inline-block min-w-[90rem] shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
            <table className="min-w-[80rem]">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 tracking-wider">
                    ID
                  </th>
                  {/* ... (other headers) ... */}
                </tr>
              </thead>
              <tbody className="bg-white">{/* ... (table rows) ... */}</tbody>
            </table>

            {/* Pagination */}
            <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
              <div>
                <p className="text-sm leading-5">
                  Exibindo
                  <span className="font-medium"> 1 </span>
                  a
                  <span className="font-medium"> 200 </span>
                  de
                  <span className="font-medium"> 2000 </span>
                  resultados
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex shadow-sm">
                  {/* ... (pagination links) ... */}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Users;
