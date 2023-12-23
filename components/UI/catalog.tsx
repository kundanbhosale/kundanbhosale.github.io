import React, { Fragment } from 'react'
import {
  CatlogImage,
  CatlogItem,
  CatlogTitle,
  CatlogWrapper
} from '../Styled/Common'
import Image from 'next/image'
import Link from 'next/link'

const websites = [
    {
    name: 'Lipy AI',
    img: 'lipyai.png',
    link: 'https://www.lipy.ai/'
  },
  {
    name: 'Taskwatch',
    img: 'taskwatch.png',
    link: 'https://www.taskwatch.io/'
  },
  {
    name: 'Career Mango',
    img: 'careermango.png',
    link: 'https://www.careermango.co/'
  },
  {
    name: 'Wilson Street Records',
    img: 'wsr.png',
    link: 'https://www.wilsonstreetrecords.com/'
  },
  {
    name: 'Yoga Recovery',
    img: 'yogareco.png',
    link: 'https://yogarecovery.com/'
  }
]

const Catlog = () => {
  return (
    <Fragment>
      <CatlogWrapper colWidth='300px' gap='3rem'>
        {websites.map((item, i) => (
          <CatlogItem key={i}>
            <Link href={item.link} passHref>
              <a target='_blank' className='title'>
                <CatlogImage>
                  <Image
                    src={`/${item.img}`}
                    alt={item.img}
                    layout='fill'
                    objectFit='cover'
                    quality={75}
                  />
                </CatlogImage>
                <CatlogTitle>{item.name}</CatlogTitle>
              </a>
            </Link>
          </CatlogItem>
        ))}
      </CatlogWrapper>
    </Fragment>
  )
}

export default Catlog
