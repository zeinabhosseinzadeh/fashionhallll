import React, { useState } from 'react'
import { m } from 'framer-motion'
import Link from 'next/link'
import cx from 'classnames'

import { hasObject } from '@lib/helpers'

import {
  ProductGallery,
  ProductThumbnail,
  ProductPrice,
  ProductOption,
  ProductAdd,
} from '@components/product'

const itemAnim = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'linear',
    },
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'linear',
    },
  },
}
const itemAnim = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'linear',
    },
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'linear',
    },
  },
}


export default ProductCard
