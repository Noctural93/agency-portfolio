import Image from 'next/image'
import footerImg from '../../public/fotter_img.avif'

const Footer = () => {
  return (
    <footer id='footer' className="relative w-full h-min flex items-center justify-center pt-[120px]">
      <div className='relative flex flex-col items-center gap-[90px] pt-[100px] pb-[24px] h-min w-full'>
        <div className='absolute top-0 left-0 h-full w-full z-1'>
          <Image
            src={footerImg}
            alt='Footer Image'
            className='w-full h-full object-cover object-center'
          />
        </div>
        <div className='relative px-[70px] flex items-start justify-between flex-nowrap max-w-[1440px] w-full z-10'>
          <div>
            <p>Made remotely with 💙 and passion</p>
          </div>
          <div className='flex gap-[100px]'>
            <div className='flex flex-col'>
              <h1>Template Pages</h1>
              <p>Home</p>
              <p>About</p>
              <p>Porfolio</p>
              <p>Contact</p>
              <p>FAQ</p>
            </div>
          </div>
        </div>
        <div className='relative z-10'>
          © {new Date().getFullYear()} MyAgency. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
