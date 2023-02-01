
import { NavigationMenuComponent } from "./NavigationMenuComponent";
import { Button } from "./Button";
import TemporaryDrawer from "./TemporaryDrawer";
import Logo from '../assets/images/logo.svg'
export function Header() {

  return (
    <div className="flex flex-row items-center w-full max-w-[1440px] mx-auto p-3 md:p-6">
      <img src={Logo} alt="logo" />

      <div className="ml-12 max-md:hidden">
        <NavigationMenuComponent />
      </div>

      <div className="flex ml-6 gap-6  lg:ml-9 lg:gap-9 max-md:hidden">
        <a href="#" className="text-greyCustom-400 hover:text-black transition-colors">Carrers</a>
        <a href="#" className="text-greyCustom-400 hover:text-black transition-colors">About</a>
      </div>


      <div className="ml-auto md:hidden">
        <TemporaryDrawer />
      </div>

      <div className="flex flex-row gap-3 ml-auto max-md:hidden">
        <button className="text-greyCustom-400 hover:text-black transition-colors">
          Login
        </button>
        <Button
          title="Register"
        />
      </div>
    </div>
  )
}