import { useEffect, useState } from 'react'
import LazyLoad from 'react-lazyload'

function Fadein({ children, delay = 0.5 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay * 1000) // delay tính bằng giây

    return () => clearTimeout(timer) // Clear timer khi component unmount
  }, [delay])

  return (
    <LazyLoad offset={100} once placeholder={<div />}>
      <div
        className={`animate__animated ${isVisible ? 'animate__fadeInUp animate__fast' : 'opacity-0'}`}
      >
        {children}
      </div>
    </LazyLoad>
  )
}

export default Fadein
