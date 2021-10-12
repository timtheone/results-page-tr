type Props = {
  className?: string
}

const IconstStarDeactivated = ({ className }: Props) => {
  return (
    <svg
      viewBox="0 0 20 20"
      style={{ width: '13px', height: '13px' }}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.55 1.4l-2.6 5.28-6.83 1 4.94 4.8-1.17 6.8 6.1-3.2 6.1 3.2-1.16-6.8 4.94-4.8-6.83-1L10 .48l-.45.92zM6.13 12.14L2.27 8.37 7.6 7.6 10 2.74l2.4 4.84 5.33.77-3.86 3.77.9 5.32-4.77-2.5-4.78 2.5.9-5.32z"
        fill="currentColor"
      />
    </svg>
  )
}

export default IconstStarDeactivated
