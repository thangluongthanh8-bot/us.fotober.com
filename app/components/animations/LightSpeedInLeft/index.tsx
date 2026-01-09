import LazyLoad from 'react-lazyload'

function LightSpeedInLeft({ children }: { children: React.ReactNode }) {
  return (
    <LazyLoad offset={100} once placeholder={<div />}>
      <div className="animate__animated animate__fadeInLeft animate__fast">{children}</div>
    </LazyLoad>
  )
}

export default LightSpeedInLeft
