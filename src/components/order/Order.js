import Image from "../../images/SCR-01.png";

export default function Order() {
  return (
    <>
      <div className="container flex flex-col space-y-8 min-w-728 px-12 pt-16 pb-8">
        <div className="w-full h-[760px] bg-my-white rounded-3xl p-6 text-xl space-y-2">
          <div className="flex">
            <div className="w-1/6">
              <span>ORDER#</span>
            </div>
            <div className="w-1/6">
              <span>DATE</span>
            </div>
            <div className="w-1/6">
              <span>ORDER TOTAL</span>
            </div>
            <div className="flex justify-center w-1/6">
              <span>STATUS</span>
            </div>
            <div className="flex justify-center w-1/6">
              <span>ACTION</span>
            </div>
            <div className="w-1/6"></div>
          </div>
          <hr className="h-1 border-none bg-my-gray" />

          <div className="space-y-2">
            <div className="flex">
              <div className="w-1/6">
                <span>#954037</span>
              </div>
              <div className="w-1/6">
                <span>23/08/2022</span>
              </div>
              <div className="w-1/6">
                <span>THB 2,400</span>
              </div>
              <div className="flex justify-center w-1/6">
                <div className="flex justify-center w-5/6 border-solid border-2 border-yellow-500 rounded-3xl">
                  <span>PENDING</span>
                </div>
              </div>
              <div className="flex justify-center w-1/6">
                <button className="flex justify-center w-5/6 border-solid border-2 border-my-orange rounded-3xl">
                  <span>INFORM PAYMENT</span>
                </button>
              </div>
              <div className="flex justify-center w-1/6">
                <button className="flex justify-center w-5/6 border-solid border-2 border-my-orange rounded-3xl">
                  <span>ORDER INFO</span>
                </button>
              </div>
            </div>
            <hr className="h-1 border-none bg-my-gray" />
          </div>

          <div className="space-y-2">
            <div className="flex">
              <div className="w-1/6">
                <span>#954037</span>
              </div>
              <div className="w-1/6">
                <span>23/08/2022</span>
              </div>
              <div className="w-1/6">
                <span>THB 2,400</span>
              </div>
              <div className="flex justify-center w-1/6">
                <div className="flex justify-center w-5/6 border-solid border-2 border-red-500 rounded-3xl">
                  <span>CANCELED</span>
                </div>
              </div>
              <div className="flex justify-center w-1/6">
                <button className="flex justify-center w-5/6 border-solid border-2 border-my-orange rounded-3xl">
                  <span>INFORM PAYMENT</span>
                </button>
              </div>
              <div className="flex justify-center w-1/6">
                <button className="flex justify-center w-5/6 border-solid border-2 border-my-orange rounded-3xl">
                  <span>ORDER INFO</span>
                </button>
              </div>
            </div>
            <hr className="h-1 border-none bg-my-gray" />
          </div>

          <div className="space-y-2">
            <div className="flex">
              <div className="w-1/6">
                <span>#954037</span>
              </div>
              <div className="w-1/6">
                <span>23/08/2022</span>
              </div>
              <div className="w-1/6">
                <span>THB 2,400</span>
              </div>
              <div className="flex justify-center w-1/6">
                <div className="flex justify-center w-5/6 border-solid border-2 border-green-500 rounded-3xl">
                  <span>COMPLETE</span>
                </div>
              </div>
              <div className="flex justify-center w-1/6">
                <button className="flex justify-center w-5/6 border-solid border-2 border-my-orange rounded-3xl">
                  <span>INFORM PAYMENT</span>
                </button>
              </div>
              <div className="flex justify-center w-1/6">
                <button className="flex justify-center w-5/6 border-solid border-2 border-my-orange rounded-3xl">
                  <span>ORDER INFO</span>
                </button>
              </div>
            </div>
            <hr className="h-1 border-none bg-my-gray" />
          </div>
        </div>

        <div className="w-full h-64 bg-my-blue rounded-3xl p-5 text-my-white space-y-5">
          <div>
            <span className="text-xl">PAYMENT METHODS</span>
          </div>

          <div className="flex justify-between">
            <div className="flex space-x-2">
              <div>
                <img className="w-24 h-24 rounded-xl" src={Image} alt="Kbank" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="pb-2">
                  <span className="text-xl">KASIKORN BANK</span>
                </div>
                <div className="flex space-x-4">
                  <div className="flex flex-col">
                    <span>BANK NO.</span>
                    <span>BANK ACC</span>
                  </div>
                  <div className="flex flex-col">
                    <span>• 1111111111</span>
                    <span>• MR.SOMKIAT SOMSAKSRI</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-2">
              <div>
                <img className="w-24 h-24 rounded-xl" src={Image} alt="Kbank" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="pb-2">
                  <span className="text-xl">KASIKORN BANK</span>
                </div>
                <div className="flex space-x-4">
                  <div className="flex flex-col">
                    <span>BANK NO.</span>
                    <span>BANK ACC</span>
                  </div>
                  <div className="flex flex-col">
                    <span>• 1111111111</span>
                    <span>• MR.SOMKIAT SOMSAKSRI</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-2">
              <div>
                <img className="w-24 h-24 rounded-xl" src={Image} alt="Kbank" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="pb-2">
                  <span className="text-xl">KASIKORN BANK</span>
                </div>
                <div className="flex space-x-4">
                  <div className="flex flex-col">
                    <span>BANK NO.</span>
                    <span>BANK ACC</span>
                  </div>
                  <div className="flex flex-col">
                    <span>• 1111111111</span>
                    <span>• MR.SOMKIAT SOMSAKSRI</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
