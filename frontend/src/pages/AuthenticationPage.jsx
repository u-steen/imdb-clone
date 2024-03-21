import { useEffect, useState } from "react";
import { MdErrorOutline } from "react-icons/md";

const AuthenticationPage = () => {
  const emptyRegisterForm = {
    username: "",
    password: "",
    passwordConfirm: "",
    email: "",
    agree: false,
  };
  const emptyErrors = {
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    agree: "",
  };
  const [registerData, setRegisterData] = useState(emptyRegisterForm);
  const [errors, setErrors] = useState(emptyErrors);

  const handleRegisterChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newVal = type === "checkbox" ? checked : value;
    setRegisterData({ ...registerData, [name]: newVal });
    console.log(name, newVal);
  };

  const handleErrors = (name, value) => {
    setErrors((prevError) => ({ ...prevError, [name]: value }));
  };

  // useEffect(() => {
  //   if (Object.values(errors).every((err) => err === "")) {
  //     console.log(errors);
  //   }
  // }, [errors]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(emptyErrors);

    const { username, email, password, passwordConfirm, agree } = e.target;

    // Username
    // TODO: username already taken
    if (username.value.length < 4) {
      handleErrors("username", "Username must be at least 4 characters long");
    } else if (!/^[a-zA-Z0-9_]+$/.test(username.value)) {
      handleErrors("username", "Invalid Username");
    }
    // Email
    if (email.value.length < 5) {
      handleErrors("email", "Email must be at least 5 characters long");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      handleErrors("email", "Email address is invalid");
    }
    // Password
    if (password.value.length < 5) {
      handleErrors("password", "Password must be at least 5 characters long");
      // TODO: regex for passwords
    }
    // else if (!/^[*]$/.test(password.value)) {
    //   handleErrors(
    //     "password",
    //     "Password can only contain letters, numbers and symbols",
    //   );
    // }
    // Password Confirm
    if (passwordConfirm.value.length < 5) {
      handleErrors(
        "passwordConfirm",
        "Password must be at least 5 characters long",
      );
    } else if (password.value !== passwordConfirm.value) {
      handleErrors("passwordConfirm", "Passwords don't match");
    }
    // Agree checkbox
    console.log("agree:", agree.checked);
    if (agree.checked === false) {
      handleErrors("agree", "You must agree in order to continue");
    }
    if (
      errors.username !== "" ||
      errors.email !== "" ||
      errors.password !== "" ||
      errors.passwordConfirm !== "" ||
      errors.agree !== ""
    ) {
      console.log("Errors");
      return;
    }
    console.log("All values are true! Sending...");
    try {
      const res = await fetch("http://localhost:7001/auth/register", {
        method: "POST",
        body: JSON.stringify({
          username: username.value,
          email: email.value,
          password: password.value,
        }),
        headers: { "Content-Type": "application/json" },
      });
      setRegisterData(emptyRegisterForm);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full">
      <div className="mx-auto my-20 grid w-2/3 grid-cols-2 gap-12 rounded-md bg-gradient-to-b from-white/90 to-white/80 p-4">
        {/* Left side */}
        <div className="flex flex-col">
          <h3 className="text-3xl font-bold">Register a new account</h3>
          <div className="mb-4 h-4 border-b-2 border-black/10"></div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              {/* Username field */}
              <div className="relative mb-4">
                <input
                  type="text"
                  name="username"
                  className="block h-12 w-full rounded-md border-2 border-black/20 bg-transparent pl-2 text-lg ring-inset ring-black/20 focus:border-black/40 focus:outline-none focus:ring-0"
                  placeholder="Username"
                  onChange={handleRegisterChange}
                  value={registerData.username}
                />
                {errors.username && (
                  <div className="flex h-fit items-center pl-2 pt-2 font-bold text-red-600">
                    <MdErrorOutline size={"1.2rem"} />
                    {errors.username}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="email"
                  className="block h-12 w-full rounded-md border-2 border-black/20 bg-transparent pl-2 text-lg ring-inset ring-black/20 focus:border-black/40 focus:outline-none focus:ring-0"
                  placeholder="Email"
                  onChange={handleRegisterChange}
                  value={registerData.email}
                />
                {errors.email && (
                  <div className="flex h-fit items-center pl-2 pt-2 font-bold text-red-600">
                    <MdErrorOutline size={"1.2rem"} />
                    {errors.email}
                  </div>
                )}
              </div>
              {/* TODO: Password 'eye' to show the password in plain text */}
              <div className="mb-4">
                <input
                  type="password"
                  name="password"
                  className="block h-12 w-full rounded-md border-2 border-black/20 bg-transparent pl-2 text-lg ring-inset ring-black/20 focus:border-black/40 focus:outline-none focus:ring-0"
                  placeholder="Password"
                  onChange={handleRegisterChange}
                  value={registerData.password}
                />
                {errors.password && (
                  <div className="flex h-fit items-center pl-2 pt-2 font-bold text-red-600">
                    <MdErrorOutline size={"1.2rem"} />
                    {errors.password}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  name="passwordConfirm"
                  className="block h-12 w-full rounded-md border-2 border-black/20 bg-transparent pl-2 text-lg ring-inset ring-black/20 focus:border-black/40 focus:outline-none focus:ring-0"
                  placeholder="Confirm Password"
                  onChange={handleRegisterChange}
                  value={registerData.passwordConfirm}
                />
                {errors.passwordConfirm && (
                  <div className="absolute flex h-4 items-center pl-2 pt-2 font-bold text-red-600">
                    <MdErrorOutline size={"1.2rem"} />
                    {errors.passwordConfirm}
                  </div>
                )}
              </div>
              {/* Checkbox */}
              <div className="mt-2">
                <div className="flex">
                  <input
                    type="checkbox"
                    name="agree"
                    id="agreeCheck"
                    className="mr-2 w-[1.15rem] pl-2 accent-custom-darkgray"
                    onChange={handleRegisterChange}
                    checked={registerData.agree}
                  />
                  <label htmlFor="agreeCheck">I agree with something</label>
                </div>
                {errors.agree && (
                  <div className="flex h-fit items-center pl-2 pt-2 font-bold text-red-600">
                    <MdErrorOutline size={"1.2rem"} />
                    {errors.agree}
                  </div>
                )}
              </div>
              {/* Submit */}
              <div className="mt-4 rounded-sm bg-custom-primary">
                <input
                  type="submit"
                  value={"Register"}
                  className="h-full w-full rounded-sm p-2 text-xl font-bold hover:bg-black/10 active:bg-black/30"
                />
              </div>
            </div>
          </form>
        </div>
        {/* Right side */}
        <div className="flex flex-col">
          <h3 className="text-3xl font-bold">Log in into your account</h3>
          <div className="mb-4 h-4 border-b-2 border-black/10"></div>
          <form action="">
            <div className="flex flex-col">
              {/* Username field */}
              <div className="mb-4">
                <input
                  type="text"
                  className="block h-12 w-full rounded-md border-2 border-black/20 bg-transparent pl-2 text-lg ring-inset ring-black/20 focus:border-black/40 focus:outline-none focus:ring-0"
                  placeholder="Username"
                />
              </div>
              {/* TODO: Password 'eye' to show the password in plain text */}
              <div className="mb-4">
                <input
                  type="password"
                  className="block h-12 w-full rounded-md border-2 border-black/20 bg-transparent pl-2 text-lg ring-inset ring-black/20 focus:border-black/40 focus:outline-none focus:ring-0"
                  placeholder="Password"
                />
              </div>
              {/* Submit */}
              <input
                type="submit"
                value={"Login"}
                className="rounded-sm bg-custom-darkgray p-2 text-xl font-bold text-custom-primary hover:bg-custom-darkgray-hover active:bg-custom-darkgray-active"
              />
            </div>
          </form>
          <div className="mb-4 h-4 border-b-2 border-black/10"></div>
          <button className="rounded-sm bg-[#52a3e5] p-2 text-xl font-bold text-white">
            Log in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationPage;
