import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/flag-svgrepo-com.svg').default,
    description: (
      <>
        Start mining from thousands of different tokens and coins within 15 minutes.
      </>
    ),
  },
  {
    title: 'Mine Better',
    Svg: require('../../static/img/area-graph-svgrepo-com.svg').default,
    description: (
      <>
        Overclock memory and core, adjust power and voltage, create overclock profiles
      </>
    ),
  },
  {
    title: 'Powered by PerfectMine',
    Svg: require('../../static/img/flash-svgrepo-com.svg').default,
    description: (
      <>
        Answer your PerfectMine related questions from the most qualified team
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
