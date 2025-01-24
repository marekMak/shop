"use client";
import { logoutUser } from "@/utils/supabase/actions";
const LogoutWrapper = () => {
  async function handleLogout() {
    const result = await logoutUser();
    if (result.success) {
      console.log("Logout successful");
    } else {
      console.error(result.message);
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="bg-black rounded-md py-2 px-4 text-white text-sm"
    >
      Logout
    </button>
  );
};

export default LogoutWrapper;
