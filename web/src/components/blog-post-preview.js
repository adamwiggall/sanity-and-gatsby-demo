import {format} from 'date-fns'
import {Link} from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import {cn, getBlogUrl} from '../lib/helpers'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import sanityConfig from '../../../studio/sanity.json'
import PortableText from './portableText'

import styles from './blog-post-preview.module.css'
import {responsiveTitle3} from './typography.module.css'

function BlogPostPreview (props) {
  const {title, _rawExcerpt, publishedAt, slug, isInList, _rawMainImage, mainImage} = props

  const fluidProps = getFluidGatsbyImage(
    mainImage.asset._id,
    {maxWidth: 610},
    sanityConfig.api
  )

  return (
    <Link
      className={isInList ? styles.inList : styles.inGrid}
      to={getBlogUrl(publishedAt, slug.current)}
    >
      <div className={styles.leadMediaThumb}>
        {_rawMainImage && _rawMainImage.asset && (
          <div style={{backgroundImage: `url(${_rawMainImage.asset.metadata.lqip})`, backgroundSize: `cover`}}>
            <Img fluid={fluidProps} alt={mainImage.alt} />
          </div>
        )}
      </div>
      <div className={styles.text}>
        <h3 className={cn(responsiveTitle3, styles.title)}>{title}</h3>
        {_rawExcerpt && (
          <div className={styles.excerpt}>
            <PortableText blocks={_rawExcerpt} />
          </div>
        )}
        <div className={styles.date}>{format(publishedAt, 'MMMM Do, YYYY')}</div>
      </div>
    </Link>
  )
}

export default BlogPostPreview
