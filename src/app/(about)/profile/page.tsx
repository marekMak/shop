import Header from "@/components/header/Header";
import { createClient } from "@/utils/supabase/server";
import Heading from "@/components/header/Heading";
import Sidebar from "./components/Sidebar";
import BaseLayout from "@/components/layout/BaseLayout";

import Profile from "./components/Profile";

const page = async () => {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  return (
    <BaseLayout>
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

        <Profile />
      </div>
    </BaseLayout>
  );
};

export default page;
