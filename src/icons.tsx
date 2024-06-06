export const ClockIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='800'
    height='800'
    fill='none'
    viewBox='0 0 24 24'
    className={className}
  >
    <path
      fill='#fff'
      d='M0 0h24v24H0z'
    />
    <circle
      cx='12'
      cy='12'
      r='9'
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M12 6v6L7.5 7.5'
    />
  </svg>
)

export const WeightIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='25'
    height='25'
    viewBox='0 0 512 512'
  >
    <path d='m77.492 18.457-17.726 3.127L69.09 74.47a1630.67 1630.67 0 0 0-15.8 2.54l-6.503-36.89-17.726 3.124 6.49 36.795a1877.847 1877.847 0 0 0-17.196 3.112l3.292 17.696c5.728-1.066 11.397-2.09 17.028-3.084l7.056 40.02 17.727-3.124-7.04-39.93c5.304-.88 10.57-1.725 15.798-2.54l9.777 55.45 17.727-3.126-9.697-54.99a1415.91 1415.91 0 0 1 25.18-3.38c15.54 46.39 34.697 99.995 66.936 134.448C190.86 250.992 192 268 214.56 310 192 348 176 412 167.21 471l-48 6v15H192c16-48 64-144 64-144s48 96 64 144h72.79v-15l-48-6C336 412 320 348 294 310c26-42 24.175-59.585 35.83-89.377 32.25-34.452 51.42-88.075 66.967-134.478 8.314 1.04 16.697 2.16 25.18 3.38l-9.696 54.99 17.728 3.124 9.777-55.45c5.23.815 10.494 1.66 15.8 2.54l-7.042 39.93 17.727 3.125 7.056-40.02c5.63.993 11.3 2.017 17.028 3.083l3.292-17.696c-5.78-1.075-11.507-2.11-17.195-3.113l6.49-36.796-17.727-3.125-6.504 36.89a1564.46 1564.46 0 0 0-15.8-2.54l9.324-52.886-17.726-3.127-9.406 53.35C365.982 63.31 310.982 59.04 256 59.04c-54.98 0-109.983 4.27-169.102 12.767l-9.406-53.35zM256 76.98c35.53 0 71.07 1.83 107.822 5.463-14.082 34.858-38.454 73.504-63.203 101.967C290.293 199.27 274.35 209 256 209s-34.294-9.73-44.62-24.59c-24.748-28.463-49.12-67.11-63.202-101.967 36.75-3.633 72.29-5.463 107.822-5.463zM256 97c-20.835 0-39 20.24-39 47s18.165 47 39 47 39-20.24 39-47-18.165-47-39-47z' />
  </svg>
)

export const ArrowDownIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='800'
    height='800'
    fill='none'
    viewBox='0 0 24 24'
    className={className}
  >
    <path
      fill='#0F0F0F'
      d='M5.707 9.71a1 1 0 0 0 0 1.415l4.892 4.887a2 2 0 0 0 2.828 0l4.89-4.89a1 1 0 1 0-1.414-1.415l-4.185 4.186a1 1 0 0 1-1.415 0L7.121 9.71a1 1 0 0 0-1.414 0Z'
    />
  </svg>
)

export const ArrowUpIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='800'
    height='800'
    fill='none'
    viewBox='0 0 24 24'
    className={className}
  >
    <path
      fill='#0F0F0F'
      d='M18.293 15.29a1 1 0 0 0 0-1.415L13.4 8.988a2 2 0 0 0-2.828 0l-4.89 4.89a1 1 0 1 0 1.414 1.415l4.185-4.186a1 1 0 0 1 1.415 0l4.182 4.182a1 1 0 0 0 1.414 0Z'
    />
  </svg>
)

export const ArrowLeftIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='800'
    height='800'
    fill='none'
    viewBox='0 0 24 24'
    className={className}
  >
    <path
      fill='#000'
      fillRule='evenodd'
      d='M11.707 4.293a1 1 0 0 1 0 1.414L6.414 11H20a1 1 0 1 1 0 2H6.414l5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z'
      clipRule='evenodd'
    />
  </svg>
)

export const PauseIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='800'
    height='800'
    fill='none'
    viewBox='0 0 24 24'
    className={className}
  >
    <g
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    >
      <path d='M15 5.5v13c0 .465 0 .697.038.89a2 2 0 0 0 1.571 1.572c.194.038.426.038.89.038.465 0 .698 0 .892-.038a2 2 0 0 0 1.57-1.572C20 19.2 20 18.97 20 18.512V5.488c0-.457 0-.687-.038-.879a2 2 0 0 0-1.572-1.57C18.197 3 17.965 3 17.5 3s-.697 0-.89.038a1.999 1.999 0 0 0-1.572 1.571C15 4.803 15 5.035 15 5.5ZM4 5.5v13c0 .465 0 .697.038.89a2 2 0 0 0 1.571 1.572c.194.038.426.038.89.038.465 0 .698 0 .892-.038a2 2 0 0 0 1.57-1.572C9 19.2 9 18.97 9 18.512V5.488c0-.457 0-.687-.038-.879A2 2 0 0 0 7.39 3.04C7.197 3 6.965 3 6.5 3s-.697 0-.89.038A1.999 1.999 0 0 0 4.037 4.61C4 4.803 4 5.035 4 5.5Z' />
    </g>
  </svg>
)

export const PlayIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='800'
    height='800'
    fill='none'
    viewBox='0 0 24 24'
    className={className}
  >
    <path
      fill='#0F0F0F'
      fillRule='evenodd'
      d='M5.465 3.923A1 1 0 0 0 4 4.81V19.19a1 1 0 0 0 1.465.886l13.697-7.192a1 1 0 0 0 0-1.77L5.465 3.923ZM2 4.81c0-2.256 2.397-3.705 4.395-2.656l13.697 7.19c2.14 1.125 2.14 4.19 0 5.313L6.395 21.847C4.397 22.897 2 21.447 2 19.191V4.81Z'
      clipRule='evenodd'
    />
  </svg>
)
