import react, { useState } from "react";
import logo from "../assets/icons/NOMADHAVEN teal.svg";
const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here
  };
  return (
    <footer className="bg-[#000A0A] footer px-6 py-20 sm:px-10 md:px-[60px]">
      <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:items-center lg:gap-40">
        <div className="flex flex-col gap-6 lg:w-3/5">
        <section className="mb-6">
          <img src={logo} alt="Nomadhaven logo" width={230} className="sm:mx-auto lg:mx-0 " />
        </section>
        <section>
          <ul className="flex flex-col gap-2 sm:flex-row sm:justify-around sm:gap-0">
            <li>How to use</li>
            <li>Hotspots</li>
            <li>Features</li>
            <li>Events</li>
          </ul>
        </section>
        </div>
        <section className="lg:w-2/5">
          <form onSubmit={handleSubmit} className="mx-auto sm:flex justify-between gap-4 ">
            <div className=" mb-4 sm:w-4/5 sm:mb-0">
              <label
                htmlFor="email"
                className="block mb-4 text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold text-White"
              >
                Join our news letter
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email here"
                required
                className="inputFill sm:w-full"
              />
            </div>
            <div className=" sm:col-span-2 sm:w-fit place-content-end">
            <button type="submit" className="primaryBtn ml-auto sm:mx-0">
              Subscribe
            </button>
            </div>
          </form>
        </section>
      </div>
      <section className="border-t border-white pt-6 mt-[60px] text-center">
        <p><small>C 2024 NomadHaven. All Rights Reserved</small></p>
      </section>
    </footer>
  );
};

export default Footer;
