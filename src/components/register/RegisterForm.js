import { useState } from "react";
import Image from "../../images/foodhigh.png";
import Input from "../Input";

const initialInput = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterForm() {
  const [input, setInput] = useState(initialInput);
  // const [error, setError] = useState({});

  // const { startLoading, stopLoading } = useLoad

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // const handleSubmitForm = async

  return (
    <>
      <div className="container flex min-w-728 px-12 py-16 space-x-16">
        <div>
          <img src={Image} alt="LeftImage" />
        </div>
        <form className="flex flex-col space-y-8 pt-14 w-650">
          <div>
            <h1 className="text-5xl">WELCOME</h1>
            <span className="text-2xl">REGISTER YOUR ACCOUNT</span>
          </div>
          <div className="flex space-x-5">
            <div className="w-1/2">
              <label className="block">
                <span className="text-xl">FIRST NAME</span>
                <Input
                  placeholder="Somkiat"
                  name="firstName"
                  value={input.firstName}
                  onChange={handleChangeInput}
                  // error={error.firstName}
                />
              </label>
            </div>
            <div className="w-1/2">
              <label className="block">
                <span className="text-xl">LAST NAME</span>
                <Input
                  placeholder="Somsaksri"
                  name="lastName"
                  value={input.lastName}
                  onChange={handleChangeInput}
                  // error={error.lastName}
                />
              </label>
            </div>
          </div>
          <div>
            <label className="block">
              <span className="text-xl">PHONE</span>
              <Input
                placeholder="089-0000000"
                name="phone"
                value={input.phone}
                onChange={handleChangeInput}
                // error={error.phone}
              />
            </label>
          </div>
          <div>
            <label className="block">
              <span className="text-xl">EMAIL</span>
              <Input
                placeholder="chichigo.official@gmail.com"
                name="email"
                value={input.email}
                onChange={handleChangeInput}
                // error={error.email}
              />
            </label>
          </div>
          <div className="flex space-x-5">
            <div className="w-1/2">
              <label className="block">
                <span className="text-xl">PASSWORD</span>
                <Input
                  type="password"
                  placeholder="6+ characters"
                  name="firstName"
                  value={input.firstName}
                  onChange={handleChangeInput}
                  // error={error.firstName}
                />
              </label>
            </div>
            <div className="w-1/2">
              <label className="block">
                <span className="text-xl">CONFIRM PASSWORD</span>
                <Input
                  type="password"
                  name="firstName"
                  value={input.firstName}
                  onChange={handleChangeInput}
                  // error={error.firstName}
                />
              </label>
            </div>
          </div>
          <button className="w-full h-12 bg-my-orange rounded-3xl hover:bg-my-gray">
            <span className="text-xl">REGISTER</span>
          </button>
        </form>
      </div>
    </>
  );
}
