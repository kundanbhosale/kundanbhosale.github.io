import React, { Fragment } from 'react'
import Image from 'next/image'
import { useViewport } from '../../providers/viewport'
import { Button, FlexWrapper, MyImage } from '../Styled/Common'
import Heading from '../UI/Heading'
import { IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'

const AboutSection = () => {
  const { width, desktop, tablet, mobile } = useViewport()

  return (
    <Fragment>
      <FlexWrapper style={{ justifyContent: 'space-between' }}>
        <div
          style={{
            width: `${mobile || width < 800 ? '100%' : tablet ? '70%' : '50%'}`
          }}
        >
          <Heading name='About Me' />

          <h3 className='py-1'>Who I am ?</h3>


       <p> I&apos;m Kundan Bhosale, a 23-year-old solo entrepreneur from Pune, India. I&apos;ve been interested in computers since childhood, and I started learning to code in college. I built websites for friends and family, and then for local NGOs and small businesses.
</p>
  <p>I&apos;m now a solo entrepreneur who builds apps for people and solves their problems. I&apos;m passionate about using technology to make people&apos;s lives easier and more enjoyable.
</p>
 <p>I&apos;m always looking for new challenges, and I&apos;m excited to see what the future holds. I&apos;m confident that I can use my skills and experience to make a positive impact on the world.
   </p>       <p>
            I gained a lot of experience and I am still expanding my tech stack,
            I can build modern & complex softwares.
          </p>
          <FlexWrapper className='my-2'>
            <Button href='#contact'>Let&apos;s Talk</Button>

            <Button
              icon
              href='https://www.linkedin.com/in/kundan-bhosale/'
              target='_blank'
              rel='noreferrer'
            >
              <IoLogoLinkedin size='1.7em' />
            </Button>
            <Button
              icon
              href='https://www.instagram.com/kundanbhosale_/'
              target='_blank'
              rel='noreferrer'
            >
              <IoLogoInstagram size='1.7em' />
            </Button>
          </FlexWrapper>
        </div>
        {width > 800 && (
          <div
            style={{
              width: '30%',
              textAlign: 'center',
              paddingLeft: `${desktop ? '0' : '5vw'}`
            }}
          >
            <MyImage>
              <Image
                src='/kundan.png'
                alt='Kundan Bhosale'
                width={300}
                height={321}
                quality={75}
              />
            </MyImage>
          </div>
        )}
      </FlexWrapper>
    </Fragment>
  )
}

export default AboutSection
