import React from "react";

const Pricing = () => {
  return (
    <div className="w-full">
      <div className="max-w-6xl m-auto p-3 px-6">
        <div className="flex flex-col items-center gap-10">
          <h3 className="font-normal text-gray-700 tracking-wider text-5xl">Pricing</h3>
          <p className="text-center text-gray-400 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend varius tempor. Phasellus faucibus sed felis vitae semper. Nulla
            elit arcu, consectetur eu orci eget, luctus fringilla magna. Sed ornare turpis quis odio suscipit gravida. Ut ut diam nec nisl laoreet
            molestie eget in erat. Sed massa nibh, pharetra sit amet lectus eget, imperdiet laoreet dui. Pellentesque dignissim erat nisl, non
            sollicitudin lectus dictum quis.
          </p>
        </div>
        <div className="flex justify-center mt-20 gap-7">
          <div className="w-64 p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
            <p className="text-3xl font-bold text-black dark:text-white">Free</p>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">For the basics tailwind</p>
            <p className="text-3xl font-bold text-black dark:text-white">$0</p>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">Per agent per month</p>
            <button
              type="button"
              className="w-56 px-3 py-3 m-auto text-sm text-black bg-white border border-black rounded-lg shadow hover:bg-black hover:text-white dark:hover-text-gray-900 dark:hover:bg-gray-100 "
            >
              Signup for free
            </button>
            <ul className="w-full mt-6 mb-6 text-sm text-black dark:text-white">
              <li className="flex items-center mb-3">
                <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1792 1792">
                  <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                All illimited components Tailwind
              </li>
              <li className="flex items-center mb-3">
                <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1792 1792">
                  <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                Own analitycs templates
              </li>
              <li className="flex items-center mb-3">
                <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1792 1792">
                  <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                24/24 support link
              </li>
            </ul>
            <span className="block w-56 h-1 my-2 bg-gray-100 rounded-lg"></span>
            <ul className="w-full mt-6 mb-6 text-sm text-black dark:text-white">
              <li className="flex items-center mb-3 space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#10b981" viewBox="0 0 1792 1792">
                  <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
                </svg>
                <div>
                  All free dashboard
                  <a href="#" className="font-semibold text-red-500">
                    free plan
                  </a>
                </div>
              </li>
              <li className="flex items-center mb-3 space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#10b981" viewBox="0 0 1792 1792">
                  <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
                </svg>
                <div>Best ranking</div>
              </li>
              <li className="flex items-center mb-3 space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#10b981" viewBox="0 0 1792 1792">
                  <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
                </svg>
                <div>Chocolate and meel</div>
              </li>
            </ul>
          </div>
          <div className="w-64 p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
            <p className="text-3xl font-bold text-black dark:text-white">Essential</p>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">For the essential tailwind</p>
            <p className="text-3xl font-bold text-black dark:text-white">$15</p>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">Per agent per month</p>
            <button
              type="button"
              className="w-56 px-3 py-3 m-auto text-sm text-black bg-white border border-black rounded-lg shadow hover:bg-black hover:text-white dark:hover-text-gray-900 dark:hover:bg-gray-100 "
            >
              Get Started
            </button>
            <ul className="w-full mt-6 mb-6 text-sm text-black dark:text-white">
              <li className="flex items-center mb-3">
                <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1792 1792">
                  <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                All illimited components Tailwind
              </li>
              <li className="flex items-center mb-3">
                <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1792 1792">
                  <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                Own analitycs templates
              </li>
              <li className="flex items-center mb-3">
                <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1792 1792">
                  <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                24/24 support link
              </li>
            </ul>
            <span className="block w-56 h-1 my-2 bg-gray-100 rounded-lg"></span>
            <ul className="w-full mt-6 mb-6 text-sm text-black dark:text-white">
              <li className="flex items-center mb-3 space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#10b981" viewBox="0 0 1792 1792">
                  <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
                </svg>
                <div>
                  All free dashboard
                  <a href="#" className="font-semibold text-red-500">
                    free plan
                  </a>
                </div>
              </li>
              <li className="flex items-center mb-3 space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#10b981" viewBox="0 0 1792 1792">
                  <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
                </svg>
                <div>Best ranking</div>
              </li>
              <li className="flex items-center mb-3 space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#10b981" viewBox="0 0 1792 1792">
                  <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
                </svg>
                <div>Chocolate and meel</div>
              </li>
            </ul>
          </div>
          <div className="w-64 p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
            <p className="text-3xl font-bold text-black dark:text-white">Pro</p>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">For the PRO tailwind</p>
            <p className="text-3xl font-bold text-black dark:text-white">$30</p>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">Per agent per month</p>
            <button
              type="button"
              className="w-56 px-3 py-3 m-auto text-sm text-black bg-white border border-black rounded-lg shadow hover:bg-black hover:text-white dark:hover-text-gray-900 dark:hover:bg-gray-100 "
            >
              Contact Us
            </button>
            <ul className="w-full mt-6 mb-6 text-sm text-black dark:text-white">
              <li className="flex items-center mb-3">
                <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1792 1792">
                  <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                All illimited components Tailwind
              </li>
              <li className="flex items-center mb-3">
                <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1792 1792">
                  <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                Own analitycs templates
              </li>
              <li className="flex items-center mb-3">
                <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1792 1792">
                  <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                24/24 support link
              </li>
            </ul>
            <span className="block w-56 h-1 my-2 bg-gray-100 rounded-lg"></span>
            <ul className="w-full mt-6 mb-6 text-sm text-black dark:text-white">
              <li className="flex items-center mb-3 space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#10b981" viewBox="0 0 1792 1792">
                  <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
                </svg>
                <div>
                  All free dashboard
                  <a href="#" className="font-semibold text-red-500">
                    free plan
                  </a>
                </div>
              </li>
              <li className="flex items-center mb-3 space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#10b981" viewBox="0 0 1792 1792">
                  <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
                </svg>
                <div>Best ranking</div>
              </li>
              <li className="flex items-center mb-3 space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#10b981" viewBox="0 0 1792 1792">
                  <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
                </svg>
                <div>Chocolate and meel</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
