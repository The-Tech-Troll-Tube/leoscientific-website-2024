import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Slideshow from '../components/ReactSlider/ReactSlider';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--transparent', styles.heroBanner)}
    style={{background: "transparent", position:"absolute", top:"20px", marginLeft:"5px", textAlign:"center", cursor:"default"}}
    >
      <div className="container" >
        <h1 className="hero_"
        style={{color:"#505050", cursor:"default"}} // top badge color
        >{siteConfig.title}</h1>
        <p className="hero__subtitle"
        style={{color:"#505050"}} // top badge tagline color mod
        >{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
          style={{backgroundColor:"skyblue", color:"#505050"}}
            className="button button--secondary button--lg btncolor"
            to="/docs/intro">
            Products Page
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {

const {siteConfig} = useDocusaurusContext();  

// //////////////////////
  const [loading, setLoading] = useState(true);
////////////////////////

useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 0.0000001);
}, []);

////////////////////////


  

  return (
    
    // <div 
    // //style={{position:"absolute"}}
    // >
      
    <div>{loading ? " " : 

    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">

        {/* <div className='slideshower'>   */}
        <Slideshow />
        {/* </div> */}
      
      {/* <p>Basldfksd</p> */}           
      <HomepageHeader />

      <main>
        <HomepageFeatures />
      </main>
    </Layout>
    }
    </div>

/////////////////////////////////////////////////////////

    // <>
  //   <LayoutProviders
  //   // title={`Hello from ${siteConfig.title}`}
  //   // description="Description will go into a meta tag in <head />"
  //   >

  //     {/* <div className='slideshower'>   */}
      
  //     {/* </div> */}
            

  //   <Navbar/>
  //   </LayoutProviders>

  //   <div>{loading ? " " : {

  //   <Slideshow />

  //   <HomepageHeader />

  //   <main>
  //     <HomepageFeatures />
  //   </main>

  //   <Footer/>
    

  // }
  //   </div>
  //   </>


/////////////////////////////////

  

  );

};
