'use client';

import React from 'react';

export default function Home() {
  let count = 0;

  const getData = () => {
    console.log("fetchingData...", count++);
  };

  const delayFun = (fn, d) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, d);
    };
  };

  const debouncing  = delayFun(getData, 3000);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <label className="mb-4 text-lg font-semibold text-gray-700">
        Type something in the input field to see the debounce function in action (check console for logs):
      </label>
      <input type="text" onChange={debouncing} className="border-2 border-gray-300 px-5 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
  );
}
