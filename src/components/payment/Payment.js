import Image from "../../images/SCR-01.png";

export default function Payment() {
  return (
    <>
      <div className="container flex justify-center min-w-728 px-12 py-16 bg-blue-100">
        <div className="flex flex-col items-center w-520 bg-gray-100 rounded-3xl">
          <div>
            <h1 className="text-3xl my-9 font-medium">PAYMENT METHODS</h1>
          </div>
          <div className="space-y-16 my-10">

            <div className="flex space-x-2">
              <div>
                <img className="w-24 h-24 rounded-xl" src={Image} />
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
                <img className="w-24 h-24 rounded-xl" src={Image} />
              </div>
              <div className="flex flex-col justify-center">
                <div className="pb-2">
                  <span className="text-xl">BANGKOK BANK</span>
                </div>
                <div className="flex space-x-4">
                  <div className="flex flex-col">
                    <span>BANK NO.</span>
                    <span>BANK ACC</span>
                  </div>
                  <div className="flex flex-col">
                    <span>• 2222222222</span>
                    <span>• MR.SOMKIAT SOMSAKSRI</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-2">
              <div>
                <img className="w-24 h-24 rounded-xl" src={Image} />
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
                    <span>• 3333333333</span>
                    <span>• MR.SOMKIAT SOMSAKSRI</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="flex justify-center items-center h-32 w-520 bg-my-blue rounded-3xl">
            <button className="w-100 h-12 bg-my-white rounded-3xl hover:bg-my-orange">
              <span>INFORM PAYMENT</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
