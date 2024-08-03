import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const CustomerFeedback = () => {
  const feedbacks = [
    {
      customer: "Jenny Wilson",
      feedback:
        "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome.",
      rating: 5,
    },
    {
      customer: "Dianne Russell",
      feedback:
        "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
      rating: 5,
    },
    {
      customer: "Devon Lane",
      feedback:
        "Nominal wines are wines, but theirs are lean meaty and tender, and pair well with the food.",
      rating: 4,
    },
  ];

  return (
    <div className="bg-primary-bg p-4 rounded max-h-[396px] overflow-auto text-white">
      <h2 className="text-lg mb-4">Customer Feedback</h2>
      <div className="space-y-4">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="border-b border-gray-700 pb-2">
            <div className="flex items-center mb-2">
              <UserCircleIcon className="w-8 h-8 text-secondary-bg mr-2" />
              <p className="text-sm text-text-subtle">{feedback.customer}</p>
            </div>
            <div className="flex my-2">
              {Array.from({ length: feedback.rating }, (_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049.953a1 1 0 011.902 0l2.286 6.396 6.807.025a1 1 0 01.561 1.791l-5.16 3.764 1.81 6.703a1 1 0 01-1.518 1.094l-5.282-3.494-5.283 3.494a1 1 0 01-1.518-1.094l1.81-6.703-5.16-3.764a1 1 0 01.561-1.791l6.807-.025L9.049.953z" />
                </svg>
              ))}
            </div>
            <p className="text-sm">{feedback.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;
