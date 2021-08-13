import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Learn Python',
    src: require( '../../static/img/homepage/python-logo.png' ).default,
    description: (
      <>
        Everyone is talking about Python, and for good reason. With an exponentially growing community around data science, machine learning, AI, web dev and more, Python is a language that opens programming access to the world.
      </>
    ),
    url: '/docs/Python/python',
  },
  {
    title: 'Learn Java',
    src: require( '../../static/img/homepage/java-logo.png' ).default,
    description: (
      <>
        Java is very versatile as it is used for programming applications on the web, mobile, desktop, etc. using different platforms. Also, Java has many features such as dynamic coding, multiple security features, platform-independent characteristics, network-centric designing, etc. that make it quite versatile.
      </>
    ),
    url: '/docs/Java/Java',
  },
  {
    title: 'Learn Javascript',
    src: require( '../../static/img/homepage/javascript-logo.png' ).default,
    description: (
      <>
        The most obvious reason for learning JavaScript is if you have hopes of becoming a web developer. Even if you haven’t got your heart set on a tech career, being proficient in this language will enable you to build websites from scratch—a pretty useful skill to have in today’s job market!
      </>
    ),
    url: '/docs/JavaScript/JavaScript',
  },
  {
    title: 'Learn Data Science',
    src: require( '../../static/img/homepage/datascience-logo.jpeg' ).default,
    description: (
      <>
        Data scientists know how to use their skills in math, statistics, programming, and other related subjects to organize large data sets. Then, they apply their knowledge to uncover solutions hidden in the data to take on business challenges and goals.
      </>
    ),
    url: '/docs/Data_Science/Data_Science',
  },
  {
    title: 'Canadian Computing Competition',
    src: require( '../../static/img/homepage/ccc-logo.jpeg' ).default,
    description: (
      <>
        The Canadian Computing Competition (CCC) is a fun challenge for secondary school students with an interest in programming. It is an opportunity for students to test their ability in designing, understanding and implementing algorithms.
      </>
    ),
    url: '/docs/CCC/ccc',
  },
  {
    title: 'Learn Robotics',
    src: require( '../../static/img/homepage/robotics-logo.png' ).default,
    description: (
      <>
        Through robotics, students can learn more than just how to code. They can learn skills in leadership, community involvement, communicating across different technology platforms, finding their passions, and teamwork, which will position them for success well beyond their school years.
      </>
    ),
    url: '/docs/Robotics/Robotics',
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

export default function HomepageFeatures() {
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
