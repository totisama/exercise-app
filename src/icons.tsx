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
