import { useState } from "react";

const AddBus = () => {

    const [bus, setBus] = useState('')

  return (
    <div className="relative mb-2 mt-5">
      <input
        id="First name"
        name="Firstrst name"
        onChange={(e) => {
          setBus(e.target.value);
        }}
        type="text"
        className="peer h-10 w-96 border-b-2 border-gray-300 text-dark-blue placeholder-transparent focus:outline-none focus:border-green-cyan"
        placeholder="‏‏‎ ‎"
      />
      <label
        for="First name"
        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-dark-blue peer-focus:text-base"
      >
        First Name
      </label>
    </div>
  );
};

export default AddBus;
