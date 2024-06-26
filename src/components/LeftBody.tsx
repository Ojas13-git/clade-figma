import React from "react";

const LeftBody = () => {
  return (
    <div className="md:w-[950px] min-h-screen flex-col ">
      <div className="p-4 border border-gray-200">
        <div className="flex items-center gap-2 md:pl-6">
          <h1 className="text-[35px] font-bold flex items-center gap-2">
            Senior Product Designer
            <svg
              width="4"
              height="5"
              viewBox="0 0 4 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="2.5" r="2" fill="#D1D1D1" />
            </svg>
          </h1>
          <p className="text-[14px] text-[#888888]">posted 2 days ago</p>
          <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-100 dark:text-green-700 border border-green-400">
            <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
            Open
          </span>
        </div>
        <div className="flex p-4 items-center gap-2 md:pl-6">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z"
              stroke="#5D5D5D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 22.5C16 18.5 20 14.9183 20 10.5C20 6.08172 16.4183 2.5 12 2.5C7.58172 2.5 4 6.08172 4 10.5C4 14.9183 8 18.5 12 22.5Z"
              stroke="#5D5D5D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h1 className="flex">Delaware, USA</h1>
          <svg
            width="4"
            height="5"
            viewBox="0 0 4 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="2" cy="2.5" r="2" fill="#D1D1D1" />
          </svg>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 5.5C13 6.60457 10.5376 7.5 7.5 7.5C4.46243 7.5 2 6.60457 2 5.5M13 5.5C13 4.39543 10.5376 3.5 7.5 3.5C4.46243 3.5 2 4.39543 2 5.5M13 5.5V7M2 5.5V17.5C2 18.6046 4.46243 19.5 7.5 19.5M7.5 11.5C7.33145 11.5 7.16468 11.4972 7 11.4918C4.19675 11.4 2 10.5433 2 9.5M7.5 15.5C4.46243 15.5 2 14.6046 2 13.5M22 12C22 13.1046 19.5376 14 16.5 14C13.4624 14 11 13.1046 11 12M22 12C22 10.8954 19.5376 10 16.5 10C13.4624 10 11 10.8954 11 12M22 12V19.5C22 20.6046 19.5376 21.5 16.5 21.5C13.4624 21.5 11 20.6046 11 19.5V12M22 15.75C22 16.8546 19.5376 17.75 16.5 17.75C13.4624 17.75 11 16.8546 11 15.75"
              stroke="#5D5D5D"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <h1>$300k-$400k</h1>
        </div>
      </div>

      <div className="p-4 py-6 border-gray-200 border">
        <div className="flex gap-28 pl-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-[14px]">Skills Required</h1>
            <span className="inline-flex w-[70px] items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
              <img
                src="data:image/png;base64,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"
                width={20}
                height={20}
                alt=""
              />
              Figma
            </span>
            <span className="inline-flex items-center rounded-md gap-1 bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
              <img
                src="data:image/png;base64,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"
                alt=""
                width={15}
                height={15}
              />
              Adobe Illustrator
            </span>
            <span className="inline-flex items-center w-[100px] gap-1 rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
              <img
                src="data:image/png;base64,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"
                alt=""
                width={15}
                height={15}
              />
              Adobe XD
            </span>
          </div>
          <div className="">
            <h1 className="text-[14px]">Preferred Language</h1>
            <span className="font-semibold text-[16px]">English</span>
          </div>
          <div>
            <h1 className="text-[14px]">Type</h1>
            <span className="font-semibold text-[16px]">Full Time</span>
          </div>
          <div>
            <h1 className="text-[14px]">Work Experience</h1>
            <span className="font-semibold text-[16px]">
              3+ years of experience
            </span>
          </div>
        </div>
      </div>

      <div className="p-4 py-6 border-gray-200 border">
        <p className="text-[14px] font-semibold text-gray-400 pl-10">
          About the job
        </p>
        <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-700 pl-10 p-2">
          <li className="text-nowrap">Handle the UI/UX research design</li>
          <li className="text-nowrap">
            Work on researching on latest web applications designs & trends
          </li>
          <li className="text-nowrap">
            Work on conceptualizing and visualizing
          </li>
          <li className="text-nowrap">
            Work on creating graphics content and other graphic related works
          </li>
        </ol>

        <div className="pl-12">
          Benefits:
          <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
            <li>Health Insurance</li>
            <li>Provident Fund</li>
          </ul>
          Schedule:
          <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
            <li>Day Shift</li>
          </ul>
          Supplemental pay types:
          <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
            <li>Performance bonus</li>
            <li>Yearly bonus</li>
          </ul>
          Work Location: In person
        </div>
      </div>

      <div className="p-4 py-6 border-gray-200 border">
        <div className="flex p-4 gap-2 pl-[40px] items -center">
          <img
            width={40}
            height={40}
            src="data:image/png;base64,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"
            alt=""
          />
          <h1 className="text-[20px]">Atlassian</h1>
        </div>
        <div className="flex gap-12 p-4 pl-[40px]">
          <div className="flex flex-col">
            <div className="p-2">
              <h1 className="text-[14px]">Company size</h1>
              <p className="text-[16px]">1k-2k Employees</p>
            </div>
            <div className="p-2">
              <h1 className="text-[14px]">Sector</h1>
              <p className="text-[16px]">Information Technology, Infrastructure</p>
            </div>
            <div className="p-2">
              <h1 className="text-[14px]">Founded In</h1>
              <p className="text-[16px]">2019</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="p-2">
              <h1 className="text-[14px]">Type</h1>
              <p className="text-[16px]">Private</p>
            </div>
            <div className="p-2">
              <h1 className="text-[14px]">Funding</h1>
              <p className="text-[16px]">Bootstrapped</p>
            </div>
            <div className="p-2">
              <h1 className="text-[14px]">Founded By</h1>
              <p className="text-[16px]">Scott Farquhar, Mike Cannon-Brookes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBody;
