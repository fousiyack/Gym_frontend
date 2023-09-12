import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../Utils/Config";

const Trainers = () => {
  const [trainersList, settrainersList] = useState([]);

  useEffect(() => {
    const fetchtrainersList = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/trainers/`);
        settrainersList(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchtrainersList();
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
        <h2 className="text-bold  text-center text-red-500 font-black sm:text-4xl p-6">
          Trainers
        </h2>

        {trainersList.length === 0 ? (
          <div className="text-center text-white">Nothing to display</div>
        ) : (
          <div className="flex flex-wrap justify-center gap-10">
            {trainersList.map((trainer) => (
              <div key={trainer.id} className="w-48 mb-6">
                {/* <Link to={`/rest/${cuisine.id}`} className="block shadow-md"> */}
                <img
                  src={`${trainer.image}`}
                  alt={`${trainer.name}`}
                  className="w-full h-48 object-cover rounded-full"
                />
                <div className="text-center mt-2">{trainer.name}</div>
                {/* </Link> */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Trainers;
