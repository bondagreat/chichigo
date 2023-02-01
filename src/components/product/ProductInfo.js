import Image from "../../images/SCR-01.png";
import Left from "../../images/angle-left-solid.svg";
import Right from "../../images/angle-right-solid.svg";

export default function ProductInfo() {
  return (
    <>
      <div className="container min-w-728 px-12 py-16">
        <div className="flex space-x-14 mb-10">
          <div className="flex flex-col w-650 min-w-580 space-y-4">
            <div>
              <img className="rounded-2xl" src={Image} alt="MainImg" />
            </div>
            <div className="flex justify-between">
              <img className="h-36 rounded-xl" src={Image} alt="Img1" />
              <img className="h-36 rounded-xl" src={Image} alt="Img2" />
              <img className="h-36 rounded-xl" src={Image} alt="Img3" />
              <img className="h-36 rounded-xl" src={Image} alt="Img4" />
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex flex-col w-650">
              <div className="flex justify-between mb-4">
                <span className="text-2xl">STICKY SNACK</span>
                <span className="text-2xl text-my-orange">code : CC01</span>
              </div>
              <div className="mb-2">
                <span className="text-2xl">CHICKEN BREAST 50 gms.</span>
              </div>
              <hr />
              <div className="flex justify-between items-center py-4">
                <div className="flex justify-between items-center w-44 h-12 bg-my-gray rounded-3xl">
                  <button>
                    <img className="w-6 mx-2" src={Left} alt="Left" />
                  </button>
                  <span className="text-2xl">1</span>
                  <button>
                    <img className="w-6 mx-2" src={Right} alt="Right" />
                  </button>
                </div>
                <span className="text-3xl">79.-</span>
              </div>
              <hr />
            </div>
            <div className="flex justify-between">
              <button className="flex justify-center items-center w-72 h-12 bg-my-gray rounded-3xl hover:bg-my-orange">
                <span className="text-2xl">ADD TO CART</span>
              </button>
              <button className="flex justify-center items-center w-72 h-12 bg-my-gray rounded-3xl hover:bg-my-orange">
                <span className="text-2xl">BUY NOW</span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl mb-2">Product Information</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend
            euismod augue quis maximus. Duis venenatis sollicitudin facilisis.
            Mauris faucibus tincidunt lobortis. Sed eget ante est. Sed luctus
            tincidunt ante vel vulputate. Vivamus sagittis porttitor quam ac
            vestibulum. Nunc malesuada, dolor sit amet porta lobortis, velit
            elit porttitor erat, quis gravida est risus ut erat. Integer ornare
            eget odio sit amet egestas. Nulla ante eros, porttitor sit amet
            finibus mollis, posuere at risus.
            <br />
            <br />
            Aliquam viverra pellentesque
            pretium. Cras euismod magna sed nibh fermentum, tristique convallis
            nibh posuere. Duis quis tincidunt tellus, eget egestas neque. Nullam
            massa mauris, scelerisque aliquet rutrum.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. In eleifend euismod augue quis maximus.
            Duis venenatis sollicitudin facilisis. Mauris faucibus tincidunt
            lobortis. Sed eget ante est. Sed luctus tincidunt ante vel
            vulputate. Vivamus sagittis porttitor quam ac vestibulum. Nunc
            malesuada, dolor sit amet porta lobortis, velit elit porttitor erat,
            quis gravida est risus ut erat. Integer ornare eget odio sit amet
            egestas. Nulla ante eros, porttitor sit amet finibus mollis, posuere
            at risus. Aliquam viverra pellentesque pretium. Cras euismod magna
            sed nibh fermentum, tristique convallis nibh posuere. Duis quis
            tincidunt tellus, eget egestas neque. Nullam massa mauris,
            scelerisque aliquet rutrum.
          </p>
        </div>
      </div>
    </>
  );
}
