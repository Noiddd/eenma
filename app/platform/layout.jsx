import Sidebar from "@/components/sidebar/Sidebar";

export default function PlatformLayout({ children }) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}
