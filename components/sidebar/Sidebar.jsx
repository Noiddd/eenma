import useUserSession from "@/hooks/useUser";
import Profile from "./Profile";
import Navigation from "./Navigation";

export default async function Sidebar() {
  const { data } = await useUserSession();

  return (
    <div className="flex flex-col fixed justify-between items-center sm:w-[110px] h-[55%] bg-backgrounda transition-all ease-in-out duration-100">
      {data?.user && (
        <>
          <Profile userData={data.user} />
          <Navigation />
        </>
      )}
    </div>
  );
}
