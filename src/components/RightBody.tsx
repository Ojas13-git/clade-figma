import React from "react";

const RightBody = () => {
  return (
    <div className="py-10 px-2">
      <div className="px-3 flex gap-2">
        <button
          className="w-[172px] flex gap-2 bg-[#FEF4F2] text-orange-500 font-bold uppercase text-sm px-6 py-3 rounded-lg shadow ring-2 ring-orange-300 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 2.5H13M3 5H18M16.3333 5L15.7489 13.7661C15.6612 15.0813 15.6174 15.7389 15.3333 16.2375C15.0833 16.6765 14.706 17.0294 14.2514 17.2497C13.735 17.5 13.0759 17.5 11.7578 17.5H9.24221C7.92409 17.5 7.26503 17.5 6.74861 17.2497C6.29396 17.0294 5.91674 16.6765 5.66665 16.2375C5.38259 15.7389 5.33875 15.0813 5.25107 13.7661L4.66667 5M8.83333 8.75V12.9167M12.1667 8.75V12.9167"
              stroke="#DC4A2D"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Delete Job
        </button>
        <button
          className="w-[172px] flex gap-2 bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-sm px-6 py-3 rounded-lg ring-orange-200 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.66668L9.33331 4.00001M1.66663 14.3333L3.92287 14.0826C4.19853 14.052 4.33636 14.0367 4.46519 13.995C4.57949 13.958 4.68826 13.9057 4.78855 13.8396C4.9016 13.765 4.99966 13.667 5.19578 13.4709L14 4.66668C14.7364 3.9303 14.7364 2.73639 14 2.00001C13.2636 1.26363 12.0697 1.26363 11.3333 2.00001L2.52911 10.8042C2.33299 11.0003 2.23493 11.0984 2.16038 11.2114C2.09425 11.3117 2.04197 11.4205 2.00497 11.5348C1.96326 11.6636 1.94795 11.8014 1.91732 12.0771L1.66663 14.3333Z"
              stroke="white"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Edit Job
        </button>
      </div>

      <div className="flex flex-col p-4 py-6">
        <div className="flex gap-48 p-2 py-4 border-b-2">
          <h1 className="flex gap-2">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3334 16.5V14.8333C18.3334 13.2801 17.271 11.9751 15.8334 11.605M12.9167 1.7423C14.1383 2.23679 15 3.43443 15 4.83333C15 6.23224 14.1383 7.42988 12.9167 7.92437M14.1667 16.5C14.1667 14.9469 14.1667 14.1703 13.913 13.5577C13.5746 12.741 12.9257 12.092 12.109 11.7537C11.4964 11.5 10.7198 11.5 9.16669 11.5H6.66669C5.11355 11.5 4.33698 11.5 3.72441 11.7537C2.90765 12.092 2.25874 12.741 1.92042 13.5577C1.66669 14.1703 1.66669 14.9469 1.66669 16.5M11.25 4.83333C11.25 6.67428 9.75764 8.16667 7.91669 8.16667C6.07574 8.16667 4.58335 6.67428 4.58335 4.83333C4.58335 2.99238 6.07574 1.5 7.91669 1.5C9.75764 1.5 11.25 2.99238 11.25 4.83333Z"
                stroke="#4F4F4F"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Applicants
          </h1>
          <p className="font-extrabold">400</p>
        </div>
        <div className="flex gap-52 p-2 py-6 border-b-2">
          <h1 className="flex gap-2">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 11.9167H6.25002C5.08705 11.9167 4.50557 11.9167 4.0324 12.0602C2.96707 12.3834 2.13339 13.217 1.81022 14.2824C1.66669 14.7555 1.66669 15.337 1.66669 16.5M13.3334 14L15 15.6667L18.3334 12.3333M12.0834 5.25C12.0834 7.32107 10.4044 9 8.33335 9C6.26229 9 4.58335 7.32107 4.58335 5.25C4.58335 3.17893 6.26229 1.5 8.33335 1.5C10.4044 1.5 12.0834 3.17893 12.0834 5.25Z"
                stroke="#4F4F4F"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Matches
          </h1>
          <p className="font-extrabold">100</p>
        </div>
        <div className="flex gap-[200px] p-2 py-6 border-b-2">
          <h1 className="flex gap-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 5.5C1.5 4.09987 1.5 3.3998 1.77248 2.86502C2.01217 2.39462 2.39462 2.01217 2.86502 1.77248C3.3998 1.5 4.09987 1.5 5.5 1.5H12.5C13.9001 1.5 14.6002 1.5 15.135 1.77248C15.6054 2.01217 15.9878 2.39462 16.2275 2.86502C16.5 3.3998 16.5 4.09987 16.5 5.5V10C16.5 11.4001 16.5 12.1002 16.2275 12.635C15.9878 13.1054 15.6054 13.4878 15.135 13.7275C14.6002 14 13.9001 14 12.5 14H7.06979C6.54975 14 6.28972 14 6.04101 14.051C5.82036 14.0963 5.60683 14.1712 5.40624 14.2737C5.18014 14.3892 4.9771 14.5517 4.57101 14.8765L2.58313 16.4668C2.23639 16.7442 2.06302 16.8829 1.91712 16.8831C1.79022 16.8832 1.67019 16.8255 1.59102 16.7263C1.5 16.6123 1.5 16.3903 1.5 15.9463V5.5Z"
                stroke="#4F4F4F"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Messages
          </h1>
          <p className="font-extrabold">147</p>
        </div>
        <div className="flex gap-[232px] p-2 py-6">
          <h1 className="flex items-center gap-2">
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.01677 7.59432C0.90328 7.41462 0.846535 7.32477 0.81477 7.18618C0.79091 7.08209 0.79091 6.91792 0.81477 6.81383C0.846535 6.67524 0.90328 6.58539 1.01677 6.40569C1.95461 4.92071 4.74617 1.16667 9.00034 1.16667C13.2545 1.16667 16.0461 4.92071 16.9839 6.40569C17.0974 6.58539 17.1541 6.67524 17.1859 6.81383C17.2098 6.91792 17.2098 7.08209 17.1859 7.18618C17.1541 7.32477 17.0974 7.41462 16.9839 7.59432C16.0461 9.0793 13.2545 12.8333 9.00034 12.8333C4.74617 12.8333 1.95461 9.0793 1.01677 7.59432Z"
                stroke="#4F4F4F"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.00034 9.5C10.381 9.5 11.5003 8.38072 11.5003 7C11.5003 5.61929 10.381 4.50001 9.00034 4.50001C7.61962 4.50001 6.50034 5.61929 6.50034 7C6.50034 8.38072 7.61962 9.5 9.00034 9.5Z"
                stroke="#4F4F4F"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Views
          </h1>
          <p className="font-extrabold">800</p>
        </div>
      </div>
    </div>
  );
};

export default RightBody;
