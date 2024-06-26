import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href=""
            className="flex items-center justify-center space-x-3 rtl:space-x-reverse"
          >
            <span className="w-[100px] h-[61px] text-[20px] text-center text-[#DC4A2D] flex items-center justify-center font-semibold whitespace-nowrap dark:bg-[#E7E7E7]">
              Logo
            </span>
          </a>

          <div className="flex  items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex gap-1 text-sm  rounded-full md:me-0"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.6666 28H13.3333M23.9999 10.6667C23.9999 8.54496 23.1571 6.51012 21.6568 5.00983C20.1565 3.50954 18.1217 2.66669 15.9999 2.66669C13.8782 2.66669 11.8434 3.50954 10.3431 5.00983C8.8428 6.51012 7.99994 8.54496 7.99994 10.6667C7.99994 14.7869 6.96057 17.608 5.7995 19.4739C4.82011 21.0479 4.33042 21.8348 4.34838 22.0544C4.36826 22.2975 4.41976 22.3902 4.61564 22.5355C4.79256 22.6667 5.59006 22.6667 7.18508 22.6667H24.8148C26.4098 22.6667 27.2073 22.6667 27.3842 22.5355C27.5801 22.3902 27.6316 22.2975 27.6515 22.0544C27.6695 21.8348 27.1798 21.0479 26.2004 19.4739C25.0393 17.608 23.9999 14.7869 23.9999 10.6667Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle cx="25" cy="3" r="3" fill="#DC4A2D" />
              </svg>

              <img
                className="w-8 h-8 rounded-full"
                src="https://s3-alpha-sig.figma.com/img/7622/cd8b/0141197fff7d64b94226a8c17be3edce?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l4Y8yiQzPLyWBrt9QqkZn7pR9okvDvC3NgGSV0UGkZuif1-plYp3IhOBV9zw~Y1G4~M~pSheAtnedkSiFzfvqxS1fjySDbX7Zaq8CficHwF10YRGHeGn0zCc9BwvPkqhDzf7tY6lg6lSaAZzUujt5zZ-QEk7WU~qCI~vZo5tpoUmE4KvJmAGIaoHnm5WHe6cg72RJ~NVhCU~1AV9mBVQHKGlohMZM3if9KzQlAq~xSN7O1HoDQP7hyaascss9aWBVsh7SHG~m91DwYa8TfnPrcAY~uBpYzDed8qWVC-x7mkgYM9fRkwiHbxD9rvbSq08mC-dRvKzdt40pdf4TTaFBA__"
                alt="user photo"
              />
              <svg
                width="20"
                height="20"
                className="mt-2"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="black"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-around hidden md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col items-center justify-center h-[60px] w-[380px] font-medium p-4 md:p-0 mt-4 border-2 border-gray-200 rounded-full bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-2 md:bg-white dark:border-gray-200">
              <li className="bg-orange-700 rounded-full p-2 h-[40px] w-[80px]">
                <a
                  href="#"
                  className="block py-2 px-3 flex text-gray-100 gap-1 rounded md:bg-transparent  md:p-0 "
                  aria-current="page"
                >
                  <svg
                    width="17"
                    height="20"
                    viewBox="0 0 22 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 19.5V5.5C7 4.57003 7 4.10504 7.10222 3.72354C7.37962 2.68827 8.18827 1.87962 9.22354 1.60222C9.60504 1.5 10.07 1.5 11 1.5C11.93 1.5 12.395 1.5 12.7765 1.60222C13.8117 1.87962 14.6204 2.68827 14.8978 3.72354C15 4.10504 15 4.57003 15 5.5V19.5M4.2 19.5H17.8C18.9201 19.5 19.4802 19.5 19.908 19.282C20.2843 19.0903 20.5903 18.7843 20.782 18.408C21 17.9802 21 17.4201 21 16.3V8.7C21 7.57989 21 7.01984 20.782 6.59202C20.5903 6.21569 20.2843 5.90973 19.908 5.71799C19.4802 5.5 18.9201 5.5 17.8 5.5H4.2C3.07989 5.5 2.51984 5.5 2.09202 5.71799C1.71569 5.90973 1.40973 6.21569 1.21799 6.59202C1 7.01984 1 7.57989 1 8.7V16.3C1 17.4201 1 17.9802 1.21799 18.408C1.40973 18.7843 1.71569 19.0903 2.09202 19.282C2.51984 19.5 3.0799 19.5 4.2 19.5Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Jobs
                </a>
              </li>
              <li className="flex">
                <a
                  href="#"
                  className="block py-2 px-3 flex text-gray-900 gap-1 rounded md:hover:bg-transparent md:p-0 dark:text-gray-300   dark:hover:text-gray md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8.3C1 6.61984 1 5.77976 1.32698 5.13803C1.6146 4.57354 2.07354 4.1146 2.63803 3.82698C3.27976 3.5 4.11984 3.5 5.8 3.5H14.2C15.8802 3.5 16.7202 3.5 17.362 3.82698C17.9265 4.1146 18.3854 4.57354 18.673 5.13803C19 5.77976 19 6.61984 19 8.3V13.7C19 15.3802 19 16.2202 18.673 16.862C18.3854 17.4265 17.9265 17.8854 17.362 18.173C16.7202 18.5 15.8802 18.5 14.2 18.5H7.68375C7.0597 18.5 6.74767 18.5 6.44921 18.5613C6.18443 18.6156 5.9282 18.7055 5.68749 18.8285C5.41617 18.9671 5.17252 19.162 4.68521 19.5518L2.29976 21.4602C1.88367 21.7931 1.67563 21.9595 1.50054 21.9597C1.34827 21.9599 1.20422 21.8906 1.10923 21.7716C1 21.6348 1 21.3684 1 20.8355V8.3Z"
                      stroke="#B0B0B0"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <circle cx="20" cy="3" r="3" fill="#DC4A2D" />
                  </svg>
                  Messages
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block flex py-2 px-3 text-gray-900 rounded gap-1 hover:bg-gray-100 md:hover:bg-transparent  md:p-0 dark:text-gray-300 dark:border-gray-300"
                >
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5295 8.85186C12.9571 9.25995 12.2566 9.5 11.5 9.5C9.567 9.5 8 7.933 8 6C8 4.067 9.567 2.5 11.5 2.5C12.753 2.5 13.8522 3.15842 14.4705 4.14814M6 20.5872H8.61029C8.95063 20.5872 9.28888 20.6277 9.61881 20.7086L12.3769 21.3789C12.9753 21.5247 13.5988 21.5388 14.2035 21.4214L17.253 20.8281C18.0585 20.6712 18.7996 20.2854 19.3803 19.7205L21.5379 17.6217C22.154 17.0234 22.154 16.0524 21.5379 15.4531C20.9832 14.9134 20.1047 14.8527 19.4771 15.3103L16.9626 17.1449C16.6025 17.4081 16.1643 17.5498 15.7137 17.5498H13.2855L14.8311 17.5498C15.7022 17.5498 16.4079 16.8633 16.4079 16.0159V15.7091C16.4079 15.0055 15.9156 14.392 15.2141 14.2219L12.8286 13.6417C12.4404 13.5476 12.0428 13.5 11.6431 13.5C10.6783 13.5 8.93189 14.2988 8.93189 14.2988L6 15.5249M20 7C20 8.933 18.433 10.5 16.5 10.5C14.567 10.5 13 8.933 13 7C13 5.067 14.567 3.5 16.5 3.5C18.433 3.5 20 5.067 20 7ZM2 15.1L2 20.9C2 21.4601 2 21.7401 2.10899 21.954C2.20487 22.1422 2.35785 22.2951 2.54601 22.391C2.75992 22.5 3.03995 22.5 3.6 22.5H4.4C4.96005 22.5 5.24008 22.5 5.45399 22.391C5.64215 22.2951 5.79513 22.1422 5.89101 21.954C6 21.7401 6 21.4601 6 20.9V15.1C6 14.5399 6 14.2599 5.89101 14.046C5.79513 13.8578 5.64215 13.7049 5.45399 13.609C5.24008 13.5 4.96005 13.5 4.4 13.5L3.6 13.5C3.03995 13.5 2.75992 13.5 2.54601 13.609C2.35785 13.7049 2.20487 13.8578 2.10899 14.046C2 14.2599 2 14.5399 2 15.1Z"
                      stroke="#B0B0B0"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Payments
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="border border-gray-200">
        <div className="max-w-screen-xl py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row md:p-2 gap-2 font-medium md:pl-4 mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-900 md:text-[18px] dark:text-gray-400 hover:underline hover:text-orange-600"
                  aria-current="page"
                >
                  Job Preview
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 md:text-[18px] dark:text-gray-400 hover:underline hover:text-orange-600"
                >
                  Applicants
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 md:text-[18px] dark:text-gray-400 hover:underline hover:text-orange-600"
                >
                  Match
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 md:text-[18px] dark:text-gray-400 hover:underline hover:text-orange-600"
                >
                  Messages
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
