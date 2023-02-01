import React from "react";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import heroMobil from '../assets/images/image-hero-mobile.png'
import heroDestop from '../assets/images/image-hero-desktop.png'
export function Home() {

  return (
    <main className="w-full bg-greyCustom-100 max-w-[1440px] p-2 sm:p-10 sm:gap-24 flex flex-col md:flex-row itens-center justify-center max-md:relative">
      <div className="md:hidden mb-5">
        <img src={heroMobil} alt="client" className="w-full" />
      </div>

      <div className="flex flex-col items-center md:items-start justify-center sm:w-1/3 md:relative">

        <h1 className="text-6xl font-bold text-greyCustom-900 text-center mt-5 md:text-start">
          Make <br />
          remote work
        </h1>

        <p className="text-base text-greyCustom-400 my-12 max-w-[450px] text-center sm:text-start">
          Get tour team is async, no matter your location Streamline processes, create team rituals, and watch productivity soar.
        </p>


        <div className="mb-12">
          <Button
            title="Lear more"
            background
          />
        </div>


        <div className="absolute bottom-2 md:bottom-0 md:left-0">
          <Footer />
        </div>
      </div>

      <div className="max-md:hidden">
        <img
src={heroDestop}
          alt="client"
          className="h-[calc(100vh-180px)] ml-auto"
        />
      </div>
    </main>
  )
}