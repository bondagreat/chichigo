import Image from "../images/SCR-01.png";
import Location from "../images/location-dot-solid.svg";

export default function Event() {
  return (
    <>
      <div className="container min-w-728 p-12">
        <p className="text-xl mb-2">Events</p>
        <div className="flex justify-between space-x-6">
          
          <div className="w-1/3 top-0">
            <div>
              <img className="mb-2 rounded-xl" src={Image}></img>
            </div>
            <div className="flex justify-between">
              <span>DOGGY DAY#11</span>
              <div className="flex items-center space-x-1">
                <img className="h-5" src={Location} />
                <span>K-VILLAGE</span>
              </div>
            </div>
          </div>
          
          <div className="w-1/3 top-0">
            <div>
              <img className="mb-2 rounded-xl" src={Image}></img>
            </div>
            <div className="flex justify-between">
              <span>DOGGY DAY#11</span>
              <div className="flex items-center space-x-1">
                <img className="h-5" src={Location} />
                <span>K-VILLAGE</span>
              </div>
            </div>
          </div>
          
          <div className="w-1/3 top-0">
            <div>
              <img className="mb-2 rounded-xl" src={Image}></img>
            </div>
            <div className="flex justify-between">
              <span>DOGGY DAY#11</span>
              <div className="flex items-center space-x-1">
                <img className="h-5" src={Location} />
                <span>K-VILLAGE</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
