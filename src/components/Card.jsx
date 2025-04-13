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
      <img src={image} alt={title} className="w-full h-auto object-cover" />
      <div className="p-4 text-right">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-sm sm:text-base text-gray-600 mt-2">{description}</p>
      </div>
      <button
        onClick={() => setIsOpen(true)}
        className="mx-4 mb-4 px-4 py-2 bg-[#FCEB4F] text-[#4A9200] rounded-lg hover:bg-[#F4A700] cursor-pointer text-sm sm:text-base w-fit"
      >
        المزيد
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="bg-white max-h-[90vh] overflow-y-auto p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-md text-right">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
              {title}
            </h2>
            {details?.extraImages && (
              <img
                src={details.extraImages}
                alt={title}
                className="w-full h-auto object-cover my-4 rounded-md"
              />
            )}
            <p className="text-sm sm:text-base text-gray-600">
              {details.fullDescription}
            </p>
            <div className="mt-4 flex flex-col sm:flex-row justify-between gap-4">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 text-sm sm:text-base"
              >
                انستقرام
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full sm:w-auto text-center px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 cursor-pointer text-sm sm:text-base"
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
