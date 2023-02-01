import audiophile from  "../assets/images/client-audiophile.svg";
import Makerclient from  "../assets/images/client-maker.svg";
import databiz from "../assets/images/client-databiz.svg"
import meet from '../assets/images/client-meet.svg'
export function Footer() {

    return (
      <div className="w-full grid grid-cols-4 gap-5">
        <img src={audiophile} />
        <img src={databiz} alt="" />
        <img  src={Makerclient} alt="" />
        <img src={meet} alt="" />
      </div>
    )
  }
