import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { AlertCircle } from "lucide-react";

const ProgressBar = ({ percentage, showLabel = true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    const currentElement = progressRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const getProgressColor = (value) => {
    if (!value && value !== 0) return "bg-gray-300";
    if (value >= 80) return "bg-gradient-to-r from-green-500 to-green-600";
    if (value >= 50) return "bg-gradient-to-r from-blue-500 to-blue-600";
    if (value >= 25) return "bg-gradient-to-r from-yellow-500 to-yellow-600";
    return "bg-gradient-to-r from-red-500 to-red-600";
  };

  const isValidPercentage =
    !isNaN(percentage) && percentage !== null && percentage !== undefined;

  return (
    <div
      ref={progressRef}
      className="relative p-4 rounded-xl bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="relative h-6 bg-gray-100 rounded-full overflow-hidden">
        {isValidPercentage ? (
          <>
            <div
              className={`h-full ${getProgressColor(
                percentage
              )} transition-all duration-700 ease-out rounded-full ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                width: isVisible ? `${percentage}%` : "0%",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-end pr-3">
              <span
                className={`text-sm font-medium transition-colors duration-300 ${
                  percentage > 50 ? "text-black" : "text-gray-700"
                }`}
              >
                {percentage.toFixed(0)}%
              </span>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center space-x-2 text-gray-500">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm font-medium">No tasks available</span>
          </div>
        )}
      </div>

      {showLabel && (
        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="font-medium text-gray-700">Task Progress</span>
          {isValidPercentage ? (
            <span
              className={`font-medium ${
                percentage >= 80
                  ? "text-green-600"
                  : percentage >= 50
                  ? "text-blue-600"
                  : percentage >= 25
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              {percentage === 100
                ? "Complete!"
                : percentage >= 80
                ? "Almost there!"
                : percentage >= 50
                ? "Halfway there"
                : percentage >= 25
                ? "In progress"
                : "Just starting"}
            </span>
          ) : (
            <span className="font-medium text-gray-500">
              Add tasks to get started
            </span>
          )}
        </div>
      )}
    </div>
  );
};

ProgressBar.propTypes = {
  percentage: PropTypes.number,
  showLabel: PropTypes.bool,
};

export default ProgressBar;
