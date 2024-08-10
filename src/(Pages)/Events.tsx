import React, { useState } from 'react';
import  {eventsData as events} from "../(Utils)/data"

const EventsPerPage = 8; // Number of events to show per page

const EventPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index of the first and last event to display
  const indexOfLastEvent = currentPage * EventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - EventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  // Calculate total pages
  const totalPages = Math.ceil(events.length / EventsPerPage);

  // Handlers for pagination
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Upcoming Events</h1>
        <p className="text-lg text-gray-600 mt-2">Join us in making a difference in the lives of street children and orphans across Kenya.</p>
      </header>
      <section className="flex flex-wrap gap-6 justify-center">
        {currentEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs w-full hover:scale-105 transition-transform duration-300">
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-800">{event.title}</h2>
              <p className="text-lg text-gray-500 mt-1">{event.date}</p>
              <p className="text-md text-gray-600 mt-1">{event.location}</p>
              <p className="text-gray-700 mt-2">{event.description}</p>
            </div>
          </div>
        ))}
      </section>
      <div className="flex justify-center mt-8">
        <nav className="flex gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded-lg ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  );
};

export default EventPage;
