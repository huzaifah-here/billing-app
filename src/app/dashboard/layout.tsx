import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function PartiesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="">{children}</div>
      </div>
    </div>
  );
}
