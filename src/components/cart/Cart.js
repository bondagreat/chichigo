import { DownIcon, LeftIcon, RightIcon } from "../../images";
import Image from "../../images/SCR-01.png";

export default function Cart() {
  return (
    <>
      <div className="container flex flex-col justify-center min-w-728 px-12 pt-16 pb-8">
        <div className="flex bg-my-white w-full rounded-3xl">
          <div className="p-10 space-y-2">
            <div className="flex justify-between">
              <div>
                <span className="text-lg">ITEM</span>
              </div>
              <div>
                <span className="text-lg pr-[78px]">PRICE</span>
                <span className="text-lg px-8">QTY</span>
                <span className="text-lg pl-8">SUBTOTAL</span>
              </div>
            </div>
            <hr className="border-none h-1 bg-my-gray rounded-xl" />

            <div className="space-y-2">
              <div className="flex">
                <div>
                  <img
                    className="w-24 rounded-xl"
                    src={Image}
                    alt="ProductImg"
                  />
                </div>
                <div className="flex justify-between w-[824px]">
                  <div className="py-3 px-2">
                    <span className="text-lg">CHICKEN BREAST</span>
                  </div>
                  <div className="flex justify-between w-80">
                    <div className="py-3 w-1/4">
                      <span>79</span>
                    </div>
                    <div className="flex justify-center w-2/4">
                      <div className="flex justify-between items-center h-9 w-2/3 rounded-3xl bg-my-gray mt-[6px]">
                        <button>
                          <LeftIcon />
                        </button>
                        <span>2</span>
                        <button>
                          <RightIcon />
                        </button>
                      </div>
                    </div>
                    <div className="py-3 w-1/4">
                      <span className="flex justify-center">158</span>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="border-none h-1 bg-my-gray rounded-xl" />
            </div>

            <div className="space-y-2">
              <div className="flex">
                <div>
                  <img
                    className="w-24 rounded-xl"
                    src={Image}
                    alt="ProductImg"
                  />
                </div>
                <div className="flex justify-between w-[824px]">
                  <div className="py-3 px-2">
                    <span className="text-lg">RED MEAT</span>
                  </div>
                  <div className="flex justify-between w-80">
                    <div className="py-3 w-1/4">
                      <span>149</span>
                    </div>
                    <div className="flex justify-center w-2/4">
                      <div className="flex justify-between items-center h-9 w-2/3 rounded-3xl bg-my-gray mt-[6px]">
                        <button>
                          <LeftIcon />
                        </button>
                        <span>1</span>
                        <button>
                          <RightIcon />
                        </button>
                      </div>
                    </div>
                    <div className="py-3 w-1/4">
                      <span className="flex justify-center">149</span>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="border-none h-1 bg-my-gray rounded-xl" />
            </div>
          </div>
          <div className="space-y-2 text-my-white text-lg">
            <div className="flex flex-col justify-between w-100 h-[760px] bg-my-blue px-7 py-10 rounded-3xl">
              <div className="space-y-2">
                <span className="text-lg">SUMMARY</span>
                <hr className="border-none h-1 bg-my-white rounded-xl" />
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>THB 307</span>
                </div>
              </div>
              <div className="space-y-2">
                <hr className="border-none h-1 bg-my-white rounded-xl" />
                <div className="flex justify-between">
                  <span>Order Total</span>
                  <span>THB 307</span>
                </div>
                <hr className="border-none h-1 bg-my-white rounded-xl" />
              </div>
            </div>
            <div className="w-100 h-60 bg-my-blue p-7 rounded-3xl">
              <div className="inline-block relative w-full">
                <select className="block appearance-none w-full bg-my-white text-black px-4 py-2 pr-8 rounded-3xl">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <DownIcon />
                </div>
              </div>
              <div className="my-10 space-y-4 text-base">
                <div className="space-x-2">
                  <span>MINT TOWER 719 ถนนพระราม 6</span>
                  <span>แขวงวังใหม่</span>
                </div>
                <div className="space-x-2">
                  <span>เขตปทุมวัน</span>
                  <span>กรุงเทพมหานคร</span>
                  <span>10300</span>
                </div>
                <div>
                  <span>TEL. 089-0000000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-end space-y-8">
          <button className="flex justify-between items-center rounded-3xl w-72 h-12 bg-my-gray">
            <LeftIcon />
            <span className="text-lg">CONTINUE SHOPPING</span>
            <div className="">
            </div>
          </button>
          <div>
            <button className="h-12 w-72 bg-my-gray rounded-3xl mx-5">
              <span className="text-lg">UPDATE SHOPPING CART</span>
            </button>
            <button className="h-12 w-100 bg-my-blue rounded-3xl">
              <span className="text-lg text-my-white">CHECKOUT</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
