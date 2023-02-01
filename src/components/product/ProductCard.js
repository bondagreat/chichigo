import Image from "../../images/SCR-01.png"

export default function ProductCard() {
  return (
    <>
      <div className="flex flex-col w-100">
          <a href="#">
            <img className="w-100 h-100 mb-5 rounded-xl" src={Image} alt="ProductImage" />
          </a>
          <div>
            <div className="flex justify-between">
              <span className="text-xl">STICKY SNACK</span>
              <span className="text-my-orange">code: CC01</span>
            </div>
            <div>
              <span>CHICKEN BREAST</span>
            </div>
            <div className="flex justify-end">
              <span>79.-</span>
            </div>
            <div className="flex justify-between mt-2">
              <button className="flex justify-center items-center rounded-xl h-7 w-44 bg-my-gray hover:bg-my-orange">
                <span>ADD TO CART</span>
              </button>
              <button className="flex justify-center items-center rounded-xl h-7 w-44 bg-my-gray hover:bg-my-orange">
                <span>BUY NOW</span>
              </button>
            </div>
          </div>
        </div>
    </>
  )
}