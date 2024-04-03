import { MobileHeader } from "@/components/mobile-header";
import { SideBar } from "@/components/sidebar";


type MainProps = {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainProps) {
  return (
    <>
      <MobileHeader />
      <SideBar className="hidden lg:flex" />
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        <div className="bg-red-500 h-full ">
          {children}
        </div>
      </main>
    </>
  );
}