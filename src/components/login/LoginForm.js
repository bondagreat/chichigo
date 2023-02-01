import { useState } from "react";
// import { toast } from "react-toastify";
import Image from "../../images/foodhigh.png";
import Input from "../Input";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const { login } = useAuth

  // const handleSubmitForm = async e => {
  //   try {
  //     e.preventDefault()
  //     // validate

  //     await login(email, password)
  //     toast.success('LOGIN SUCCESS')
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  return (
    <>
      <div className="container flex min-w-728 px-12 py-16 space-x-16">
        <div>
          <img src={Image} alt="LeftImage" />
        </div>
        <form
          className="flex flex-col space-y-28 pt-14 w-650"
          // onSubmit={handleSubmitForm}
        >
          <div>
            <h1 className="text-5xl">WELCOME BACK</h1>
            <span className="text-2xl">LET'S LOG IN</span>
          </div>
          <div className="space-y-8">
            <div>
              <label className="block">
                <span className="text-xl">EMAIL</span>
                <Input
                  placeholder="chichigo.official@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label className="block">
                <span className="text-xl">PASSWORD</span>
                <Input
                  placeholder="x+ characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
