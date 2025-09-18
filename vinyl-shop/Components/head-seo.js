import React from 'react'
import Head from 'next/head'
import { imageBuilder } from '@lib/sanity'
import schema from '@/studio/schemas/schema'


const HeadSEO = ({site ={},page ={} schema }) =>{
    // set <head> variables
    const siteTitle = site.siteTitle

  const siteFavicon = site.seo?.favicon || '/favicon.svg'
  const siteFaviconLegacy = site.seo?.faviconLegacy || '/favicon.ico'
  const siteTouchIcon = site.seo?.touchIcon

  const templateTags = [
    {
      tag: '{{page_title}}',
      value: page.title,
    },
    {
      tag: '{{site_title}}',
      value: siteTitle,
    },
  ]



}

export default HeadSEO