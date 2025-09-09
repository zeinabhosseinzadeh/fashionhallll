import React, { Children } from 'react'
import { useRouter } from 'next/router'
import { ConditionalWrapper } from '@/Lib/helpers'
import CustomLink from '@components/link'


const PromoBar = React.memo(({ data = {} }) => {
  const { enabled, display, text, link } = data
  const router = useRouter()

  // bail if no display or text
  if (!enabled || !display || !display.trim() || !text) return null

  // bail if display set to homepage and we're not on the homepage
  if (display === 'home' && router.asPath !== '/') return null
return (
  <div className='promo-bar is-inverted'>
    <div className='promo-bar--content'>x

    <ConditionalWrapper
      condition={link}
      wrapper={(Children)=> (
      <CustomLink
        className="promo-bar--link"
        link={{ ...{page:link } }}
        >
          {Children}
      </CustomLink>
      )}
      >
        {text}
      </ConditionalWrapper>
    </div>
  </div>
)
})


export default promo-bar