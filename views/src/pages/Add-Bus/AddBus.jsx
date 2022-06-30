import { useState } from "react";

const AddBus = () => {
  const [ref, setRef] = useState("");
  const [ticketPrice, setTicketPrice] = useState(0);
  const [colisPrice, setColisPrice] = useState(0);
  const [departville, setDepartVille] = useState("");
  const [arriveville, setArriveVille] = useState("");
  const [departTime, setDepartTime] = useState("");
  const [arriveTime, setArriveTime] = useState("");
  const [maxPersonne, setMaxPersonne] = useState(0);
  const [maxColis, setMaxColis] = useState(0);

  return (
    <div>
      <h1>Add Bus</h1>

      <div className="relative mb-2 mt-5">
        <input
          id="ref"
          name="ref"
          onChange={(e) => {
            setRef(e.target.value);
          }}
          type="text"
          className="peer h-10 w-96 border-b-2 border-gray-300 text-dark-blue placeholder-transparent focus:outline-none focus:border-green-cyan"
          placeholder="‏‏‎ ‎"
        />
        <label
          for="ref"
          className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-dark-blue peer-focus:text-base"
        >
          reference
        </label>
      </div>
      <div className="relative mb-2 mt-5">
        <input
          id="ticket price"
          name="ticket price"
          onChange={(e) => {
            setTicketPrice(e.target.value);
          }}
          type="text"
          className="peer h-10 w-96 border-b-2 border-gray-300 text-dark-blue placeholder-transparent focus:outline-none focus:border-green-cyan"
          placeholder="‏‏‎ ‎"
        />
        <label
          for="ticket price"
          className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-dark-blue peer-focus:text-base"
        >
          ticket price
        </label>
      </div>
      <div className="relative mb-2 mt-5">
        <input
          id="Colis price"
          name="Colis price"
          onChange={(e) => {
            setColisPrice(e.target.value);
          }}
          type="text"
          className="peer h-10 w-96 border-b-2 border-gray-300 text-dark-blue placeholder-transparent focus:outline-none focus:border-green-cyan"
          placeholder="‏‏‎ ‎"
        />
        <label
          for="Colis price"
          className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-dark-blue peer-focus:text-base"
        >
          Colis price
        </label>
      </div>
      <div className="flex">
        <div className="relative mb-2 mt-5">
          <input
            id="depart ville"
            name="depart ville"
            onChange={(e) => {
              setDepartVille(e.target.value);
            }}
            type="text"
            className="peer h-10 w-96 border-b-2 border-gray-300 text-dark-blue placeholder-transparent focus:outline-none focus:border-green-cyan"
            placeholder="‏‏‎ ‎"
          />
          <label
            for="depart ville"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-dark-blue peer-focus:text-base"
          >
            depart ville
          </label>
        </div>
        <div className="relative mb-2 mt-5">
          <input
            id="arrive ville"
            name="arrive ville"
            onChange={(e) => {
              setArriveVille(e.target.value);
            }}
            type="text"
            className="peer h-10 w-96 border-b-2 border-gray-300 text-dark-blue placeholder-transparent focus:outline-none focus:border-green-cyan"
            placeholder="‏‏‎ ‎"
          />
          <label
            for="arrive ville"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-dark-blue peer-focus:text-base"
          >
            arrive ville
          </label>
        </div>
      </div>
      <div className="flex">
        <div className="relative mb-2 mt-5">
          <input
            id="depart time"
            name="depart time"
            onChange={(e) => {
              setDepartTime(e.target.value);
            }}
            type="text"
            className="peer h-10 w-96 border-b-2 border-gray-300 text-dark-blue placeholder-transparent focus:outline-none focus:border-green-cyan"
            placeholder="‏‏‎ ‎"
          />
          <label
            for="depart time"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-dark-blue peer-focus:text-base"
          >
            depart time
          </label>
        </div>
        <div className="relative mb-2 mt-5">
          <input
            id="arrive time"
            name="arrive time"
            onChange={(e) => {
              setArriveTime(e.target.value);
            }}
            type="text"
            className="peer h-10 w-96 border-b-2 border-gray-300 text-dark-blue placeholder-transparent focus:outline-none focus:border-green-cyan"
            placeholder="‏‏‎ ‎"
          />
          <label
            for="arrive time"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-dark-blue peer-focus:text-base"
          >
            arrive time
          </label>
        </div>
      </div>
      <div className="relative mb-2 mt-5">
        <input
          id="max personne"
          name="max personne"
          onChange={(e) => {
            setMaxPersonne(e.target.value);
          }}
          type="text"
          className="peer h-10 w-96 border-b-2 border-gray-300 text-dark-blue placeholder-transparent focus:outline-none focus:border-green-cyan"
          placeholder="‏‏‎ ‎"
        />
        <label
          for="max personne"
          className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-dark-blue peer-focus:text-base"
        >
          max personne
        </label>
      </div>
      <div className="relative mb-2 mt-5">
        <input
          id="max colis"
          name="max colis"
          onChange={(e) => {
            setMaxColis(e.target.value);
          }}
          type="text"
          className="peer h-10 w-96 border-b-2 border-gray-300 text-dark-blue placeholder-transparent focus:outline-none focus:border-green-cyan"
          placeholder="‏‏‎ ‎"
        />
        <label
          for="max colis"
          className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-dark-blue peer-focus:text-base"
        >
          max colis
        </label>
      </div>
    </div>
  );
};

export default AddBus;
