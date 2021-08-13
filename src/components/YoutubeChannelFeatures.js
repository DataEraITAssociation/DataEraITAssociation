import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './YoutubeChannelFeatures.module.css';

const FeatureList = [
    {
        title: 'DataEra IT Association',
        src: 'https://yt3.ggpht.com/ytc/AKedOLS8aEvX7W8_AMn2j0dPK2KpqlyWoKdnCtgHpzc-=s176-c-k-c0x00ffffff-no-rj',
        description: (
          <>
            This channel focuses on basic programming skill on Python and Javascript.
          </>
        ),
        url: 'https://www.youtube.com/channel/UCOQsmoDD5NwNKHVwSooDjdA',
      },
      {
        title: 'Veritasium',
        src: 'https://yt3.ggpht.com/ytc/AKedOLS6qhCOSn2LBAn1k1QnFYAMXAxGso7PnOeqWruerA=s176-c-k-c0x00ffffff-no-rj',
        description: (
          <>
            An element of truth - videos about science, education, and anything else I find interesting.
          </>
        ),
        url: 'https://www.youtube.com/user/1veritasium',
      },
    {
      title: 'Aaron He',
      src: require( '../../static/img/homepage/computer-science-logo.png' ).default,
      description: (
        <>
          This channel focuses on Graph Theory, CCC Solutions and more computer related videos etc.
        </>
      ),
      url: 'https://www.youtube.com/channel/UCpLNLIJ66Lqjwm-E69qbW8w',
    },
];

function Feature( { src, title, description, url } ) {
    return (
      <div className={ clsx( 'col col--4' ) }>
        <Link className={ styles.featureLink } to={ url }>
          <div className="text--center">
            <img className={ styles.featureImg } alt={ title } src={ src } />
          </div>
          <div className="text--center padding-horiz--md">
            <h3>{ title }</h3>
            <p className={ styles.featureDesc }>{ description }</p>
          </div>
        </Link>
      </div>
    );
  }
  
  export default function YoutubeChannelFeatures() {
    return (
      <section className={ styles.features }>
        <div className="container">
          <div className="row">
            { FeatureList.map( ( props, idx ) => (
              <Feature key={ idx } { ...props } />
            ) ) }
          </div>
        </div>
      </section>
    );
  }