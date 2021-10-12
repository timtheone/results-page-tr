type Props = {
  className?: string
}
const IconStar = ({ className }: Props) => {
  return (
    <svg
      viewBox="0 0 20 20"
      style={{ width: '13px', height: '13px' }}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M9.55 1.4l-2.6 5.28-6.83 1 4.94 4.8-1.17 6.8 6.1-3.2 6.1 3.2-1.16-6.8 4.94-4.8-6.83-1L10 .48"
      />
    </svg>
  )
}

export default IconStar
