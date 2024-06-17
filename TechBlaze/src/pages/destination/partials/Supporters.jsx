import airbnb from "../../../assets/icons/airbnb.svg"
import barclays from "../../../assets/icons/barclays.svg"
import masterCard from "../../../assets/icons/mastercard.svg"
import inDrive from "../../../assets/icons/indrive.svg"
import uber from "../../../assets/icons/uber.svg"
import flyEmirates from "../../../assets/icons/fly-emirates.svg"
const Supporters = () => {
    return ( 
        <div className="mx-4 items-center w-full mb-60 "> 
            <div><p className="text-center mb-10" >Proudly supported by</p></div>
            <div className="flex items-center justify-center overflow-x-auto lg:overflow-visible border-8">
            <div className="flex justify-between items-center space-x-24 sm:space-x-28 md:space-x-36 lg:space-x-40 border-4 border-orange-500">
                <img src={barclays} alt="barclays" width={80} height={80}/>
                <img src={flyEmirates} alt="barclays" width={80} height={80} />
                <img src={masterCard} alt="barclays" width={80} height={80} />
                <img src={inDrive} alt="barclays" width={80} height={80} />
                <img src={uber} alt="barclays" width={80} height={80} />
            </div>
            </div>
        </div>
     );
}
 
export default Supporters;