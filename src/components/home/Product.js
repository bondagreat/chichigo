import Image from "../../images/SCR-01.png";

export default function Product() {
  return (
    <>
      <div className="container min-w-728 p-12">
        <p className="text-xl mb-2">BEST SELLERS</p>
        <div className="flex justify-between space-x-4">
          
          <div className="w-1/4 top-0">
            <a href="#">
              <img className="mb-2 rounded-xl" src={Image}></img>
            </a>
          </div>
          
          <div className="w-1/4 top-0">
            <a href="#">
              <img className="mb-2 rounded-xl" src={Image}></img>
            </a>
          </div>
          
          <div className="w-1/4 top-0">
            <a href="#">
              <img className="mb-2 rounded-xl" src={Image}></img>
            </a>
          </div>
          
          <div className="w-1/4 top-0">
            <a href="#">
              <img className="mb-2 rounded-xl" src={Image}></img>
            </a>
          </div>
          
        </div>
      </div>
    </>
  );
}
