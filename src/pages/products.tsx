import SideBar from "../components/sideBar";

function Products() {
  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar />
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="bg-gray-50 p-3 text-white shadow-sm">
          <div className="relative ml-10">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="default-search"
              className="appearance-none block w-50% p-[0.4rem] ps-10 text-sm text-gray-900 bg-gray-50 focus:outline-none focus:border-none focus:shadow-none rounded-r-none"
              placeholder="Pesquisar..."
              required
              style={{
                WebkitAppearance: "none",
              }}
            />
          </div>
        </div>
        <div className="p-6">
          <h1>Produts</h1>
        </div>
      </main>
    </div>
  );
}

export default Products;
