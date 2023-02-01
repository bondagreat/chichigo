import { DownIcon, LeftIcon, RightIcon } from "../../images";
import Image from "../../images/SCR-01.png";

export default function Cart() {
  return (
    <>
      <div className="container flex flex-col justify-center min-w-728 px-12 pt-16 pb-8">
        <div className="flex bg-my-white w-full rounded-3xl">
          <div className="p-10 space-y-2">
            <div className="flex justify-between w-[863px]">
              <div>
                <span className="text-lg">ORDER INFO</span>
              </div>
              <div className="flex w-1/2">
                <div className="flex justify-center w-1/4">
                  <span className="text-lg">CODE</span>
                </div>
                <div className="flex justify-center w-1/4">
                  <span className="text-lg">PRICE</span>
                </div>
                <div className="flex justify-center w-1/4">
                  <span className="text-lg">QTY</span>
                </div>
                <div className="flex justify-center w-1/4">
                  <span className="text-lg">SUBTOTAL</span>
                </div>
              </div>
            </div>
            <hr className="border-none h-1 bg-my-gray rounded-xl" />

              <div className="flex justify-between w-[863px]">
                <div>
                  <span className="text-lg">CHICKEN BREAST</span>
                </div>
                <div className="flex w-1/2">
                  <div className="flex justify-center w-1/4">
                    <span className="text-lg">CB01</span>
                  </div>
                  <div className="flex justify-center w-1/4">
                    <span className="text-lg">79</span>
                  </div>
                  <div className="flex justify-center w-1/4">
                    <span className="text-lg">2</span>
                  </div>
                  <div className="flex justify-center w-1/4">
                    <span className="text-lg">158</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between w-[863px]">
                <div>
                  <span className="text-lg">RED MEAT</span>
                </div>
                <div className="flex w-1/2">
                  <div className="flex justify-center w-1/4">
                    <span className="text-lg">RM01</span>
                  </div>
                  <div className="flex justify-center w-1/4">
                    <span className="text-lg">149</span>
                  </div>
                  <div className="flex justify-center w-1/4">
                    <span className="text-lg">1</span>
                  </div>
                  <div className="flex justify-center w-1/4">
                    <span className="text-lg">149</span>
                  </div>
                </div>
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
              <div className="block w-full bg-my-white text-black px-4 py-2 pr-8 rounded-3xl">
                <span>MY HOME</span>
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
        <div className="mt-8">
          <button className="flex justify-between items-center rounded-3xl w-72 h-12 bg-my-gray">
            <LeftIcon />
            <span className="text-lg">BACK TO ORDER</span>
            <div className=""></div>
          </button>
        </div>
      </div>
    </>
  );
}
