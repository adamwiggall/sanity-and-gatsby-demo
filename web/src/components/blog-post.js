import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'

import Img from 'gatsby-image'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import sanityConfig from '../../../studio/sanity.json'

import PortableText from './portableText'
import Container from './container'
import AuthorList from './author-list'

import styles from './blog-post.module.css'

function BlogPost (props) {
  const {_rawBody, authors, categories, title, _rawMainImage, mainImage, publishedAt} = props

  const fluidProps = getFluidGatsbyImage(
    mainImage.asset._id,
    {maxWidth: 1440},
    sanityConfig.api
  )
  return (
    <article className={styles.root}>
      {_rawMainImage && _rawMainImage.asset && (
        <div style={{backgroundImage: `url(${_rawMainImage.asset.metadata.lqip})`, backgroundSize: `cover`}}>
          <Img fluid={fluidProps} alt={mainImage.alt} />
        </div>
      )}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {_rawBody && <PortableText blocks={_rawBody} />}
          </div>
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do, YYYY')}
              </div>
            )}
            {authors && <AuthorList items={authors} title='Authors' />}
            {categories && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  )
}

export default BlogPost
