import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Quality',
    Svg: require('@site/static/img/research.svg').default,
    description: (
      <>
        At Leo Scientific, we lead the way in quality products.
      </>
    ),
  },
  {
    title: 'Reliability',
    Svg: require('@site/static/img/technology.svg').default,
    description: (
      <>
        Our state-of-the-art collection always hands with the best.
      </>
    ),
  },
  {
    title: 'Collaborative Expertise',
    Svg: require('@site/static/img/collaboration.svg').default,
    description: (
      <>
        By partnering with leading institutions and industry experts, Leo Scientific fosters a collaborative environment.
      </>
    ),
  },
];



function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
