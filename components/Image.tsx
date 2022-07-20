import Image from 'next/image'

const myLoader = () => {
  return `/background.jpg`
}

export const MyImage = () => {
  return (
    <Image
      loader={myLoader}
      src="/background.jpg"
      alt=""
      width={500}
      height={600}
      style={{ borderRadius: '8px', filter: 'grayscale(100%)' }}
    />
  )
}
