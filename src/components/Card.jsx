import { useState } from "react";

export default function Card({
  image,
  title,
  description,
  details,
  instagramUrl,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden rtl">
      <img src={image} alt={title} className="w-full h-fit object-cover" />
      <div className="p-4 text-right">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-sm sm:text-base text-gray-600 mt-2">{description}</p>
      </div>
      <button
        onClick={() => setIsOpen(true)}
        className="m-5 px-4 py-2 bg-[#FCEB4F] text-[#4A9200] rounded-lg hover:bg-[#F4A700] cursor-pointer text-sm sm:text-base"
      >
        المزيد
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#00000054] bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-96 text-right">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
              {title}
            </h2>
            <img
              src={details.extraImages}
              alt={title}
              className="w-full h-fit object-cover p-5"
            />
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              {details.fullDescription}
            </p>
            <div className="mt-4 flex flex-col sm:flex-row justify-between gap-4">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 text-sm sm:text-base text-center"
              >
                انستقرام
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 cursor-pointer text-sm sm:text-base"
              >
                اغلاق
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
