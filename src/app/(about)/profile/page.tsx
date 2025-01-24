import Header from "@/components/Header";
import { createClient } from "@/utils/supabase/server";
import Heading from "@/components/Heading";
import Sidebar from "./components/Sidebar";

import { FiEdit } from "react-icons/fi";

const page = async () => {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  return (
    <div>
      <Header />
      <div className="px-10 md:px-40 py-10">
        <Heading title="My Profile" />
        <div className="flex h-fit">
          <aside className="w-1/4 p-6">
            <div className="py-2 text-center grid grid-cols-2 border border-grey-light">
              <div>1</div>
              <div className="flex flex-col items-start">
                <p className="text-black">Hello 👋</p>
                <h2 className="text-lg font-semibold">
                  {user?.user_metadata.firstname} {user?.user_metadata.lastname}
                </h2>
              </div>
            </div>
            <nav className="mt-8">
              <Sidebar />
            </nav>
          </aside>

          <main className="w-3/4 p-10">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Personal Information</h1>
              <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2">
                <FiEdit /> Edit Profile
              </button>
            </div>
            <form className="mt-8 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    value={user?.user_metadata.firstname}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    value={user?.user_metadata.lastname}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  value="(252) 555-0126"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  value={user?.user_metadata.email}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  value="2464 Royal Ln. Mesa, New Jersey 45463"
                />
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default page;
