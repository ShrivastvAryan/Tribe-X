import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { AnimatedBackground } from "../ui/AnimatedBackground";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <AnimatedBackground />
      <Outlet />
      <Footer />
    </>
  );
};
