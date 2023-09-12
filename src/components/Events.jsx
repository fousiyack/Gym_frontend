import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../Utils/Config";

// export default function Events() {
//   return (
//     <div>
//       Events
//       <Banner/>
//     </div>
//   )
// }

const Events = () => {
  const [eventsList, setEventsList] = useState([]);

  useEffect(() => {
    const fetchEventsList = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/events/`);
        setEventsList(response.data);

        console.log(response.data.image, "imageeee");
      } catch (error) {
        console.error(error);
      }
    };

    fetchEventsList();
  }, []);

  return (
    <div className="bg-white my-4">
      {/* <h2 class="text-bold  font-black text-center text-red-500 sm:text-4xl">
        Events
      </h2> */}
      <div className="flex flex-wrap justify-center">
        {eventsList.map((event) => (
          <div
            key={event.id}
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4"
          >
            {/* <Link to={`/restaurant-details/${restaurant.id}`} className='cursor-pointer'> */}
            <div className="max-w-sm bg-white rounded shadow-lg">
              <img
                className="w-full h-48 object-cover rounded-t"
                src={`${event.image}`}
                alt="event"
              />

              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                {/* <p className="text-gray-700">{restaurant.description}</p> */}
                <div className="flex justify-between mt-4">
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt text-gray-500 mr-1"></i>
                    <p className="text-gray-500">{event.duration}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
