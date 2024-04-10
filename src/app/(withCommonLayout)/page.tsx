import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@mui/material";
import HeroSection from "@/components/UI/Homepage/HeroSection/HeroSection";
import Specialist from "@/components/UI/Homepage/Specialist/Specialist";
import TopRatedDoctors from "@/components/UI/Homepage/TopRatedDoctors/TopRatedDoctors";
import WhyUs from "@/components/UI/Homepage/WhyChooseUs/WhyUs";
import Stats from "@/components/UI/Homepage/Stats/Stats";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
      <WhyUs />
      <Stats />
    </>
  );
}
