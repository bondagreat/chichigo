import { DownIcon } from "../../images";

export default function Profile() {
  return (
    <>
      <div className="container flex justify-center min-w-728 px-12 py-16">
        <div className="flex flex-col items-center w-520 bg-my-white rounded-3xl space-y-16">
          <div>
            <h1 className="text-3xl my-9 font-medium">PERSONAL INFO</h1>
          </div>
          <div className="space-y-5">
            <div className="flex space-x-16">
              <div>
                <h1 className="text-2xl">FIRST NAME</h1>
                <p className="text-xl">Somkiat</p>
              </div>
              <div>
                <h1 className="text-2xl">LAST NAME</h1>
                <p className="text-xl">Somsaksri</p>
              </div>
            </div>
            <div>
              <h1 className="text-2xl">PHONE</h1>
              <p className="text-xl">089-0000000</p>
            </div>
            <div>
              <h1 className="text-2xl">EMAIL</h1>
              <p className="text-xl">chichigo.official@gmail.com</p>
            </div>
          </div>
          <button className="border border-my-orange w-64 h-12 rounded-3xl hover:bg-">
            <span className="text-xl">CHANGE PASSWORD</span>
          </button>
          <div className="h-72 w-full rounded-3xl bg-my-blue text-my-white px-16 py-4">
            <div className="flex justify-between">
              <span className="text-xl">ADDRESSES</span>
              <button className="border border-my-white rounded-3xl py-1 px-3">
                <span>ADD NEW ADDRESS</span>
              </button>
            </div>
            <div className="inline-block relative w-full my-4">
              <select className="block appearance-none w-full bg-my-white text-black px-4 py-2 pr-8 rounded-3xl">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <DownIcon />
              </div>
            </div>
            <div className="my-6 space-y-2">
              <div className="space-x-2">
                <span>ADDRESS LINE 1</span>
                <span>SUB-DISTRICT</span>
              </div>
              <div className="space-x-2">
                <span>DISTRICT</span>
                <span>PROVINCE</span>
                <span>PS CODE</span>
              </div>
              <div>
                <span>Tel. 089-000000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
