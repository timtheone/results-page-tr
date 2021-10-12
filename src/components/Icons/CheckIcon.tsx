type Props = {
  className?: string
}
const CheckIcon = ({ className }: Props) => {
  return (
    <svg
      viewBox="0 0 20 20"
      style={{ width: '16px', height: '16px' }}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 0a10 10 0 1010 10A10.012 10.012 0 0010 0zm5.773 6.833l-5.705 7.741a.842.842 0 01-1.191.157l-4.074-3.257a.834.834 0 011.042-1.302l3.397 2.718 5.189-7.043a.834.834 0 111.342.986z"
        fill="currentColor"
      />
    </svg>
  )
}

export default CheckIcon
