import { useEffect, useState } from 'react';  
import { useLocation, Link } from 'react-router-dom';
import Repos from '../components/repos';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'
import './Root.css';

function Root() {
  const location = useLocation();
  const [imageSrc, setImageSrc] = useState('https://f.imnyang.xyz/profile/imnyang.webp');
  const [gotoHref, setGotoHref] = useState('/');
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.has('kawaii')) {
      setImageSrc('https://f.imnyang.xyz/profile/hatchu_imnyang.webp');
      setGotoHref('/');
    } else {
      setImageSrc('https://f.imnyang.xyz/profile/imnyang.webp');
      setGotoHref('/?kawaii');
    }
    if (queryParams.has('no_hair') && queryParams.has("no_ear")) {
      setImageSrc('https://f.imnyang.xyz/profile/no_ear_no_long_hair.png');
    } else if (queryParams.has('no_ear')) {
      setImageSrc('https://f.imnyang.xyz/profile/no_ear.png');
    } else if (queryParams.has('no_hair')) {
      setImageSrc('https://f.imnyang.xyz/profile/no_hair.avif');
    } 
    
  }, [location.search]);

  return (
    <div className='App'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" as="style" onLoad={() => { (document.querySelector('link[rel="stylesheet"]') as HTMLLinkElement).rel = 'stylesheet'; }}></link>
      <div className='container'>
        <div className='left'>
          <p style={{color: 'transparent'}}>/?no_hair</p>
          {/* /?no_ear */}
          <img src={imageSrc} width={256} className='profile' />
          <h1 style={{color: '#ffe7fb', fontSize: 60, margin: 0, fontWeight: '700'}}>
            <Link style={{color: '#ffe7fb', fontSize: 60, margin: 0, fontWeight: '700'}} to={gotoHref}>imnyang</Link>
          </h1>

          <div style={{color: 'white'}}>
            <p style={{textAlign: 'left'}}>
                <div style={{display: 'flex', flexDirection: 'row', gap: 25, alignItems: 'center', justifyContent: 'center'}}>
                {window.innerWidth <= 768 && (
                  <Tippy content="Toss" placement="bottom"><a href='supertoss://send?bank=토스뱅크&accountNo=100079352039&origin=qr' style={{ color: '#b2a1af', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}><i className="fa-solid fa-circle-dollar-to-slot" style={{ fontSize: '24px' }} /></a></Tippy>
                )}
                
                <Tippy content="Github" placement="bottom"><a href='https://github.com/imnyang' style={{ color: '#b2a1af', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}><i className="fa-brands fa-github" style={{ fontSize: '24px' }} /></a></Tippy>
                <Tippy content="Mail" placement="bottom"><a href="mailto:me@imnyang.xyz" style={{ color: '#b2a1af', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}><i className="fa-solid fa-at" style={{ fontSize: '24px' }} /></a></Tippy>
                <Tippy content="Instagram" placement="bottom"><a href='https://instagram.com/not.furry_' style={{ color: '#b2a1af', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}><i className="fa-brands fa-instagram" style={{ fontSize: '24px' }} /></a></Tippy>
                <Tippy content="X" placement="bottom"><a href='https://x.com/mahiro_me' style={{ color: '#b2a1af', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}><i className="fa-brands fa-x-twitter" style={{ fontSize: '24px' }} /></a></Tippy>
                </div>
              <br/>
              🖥️ Software Engineer
              <br/>
              🎨 Team. <a href='https://sqlare.com'>Sqlare</a>
              <br/><br/>
              📚 Middle School Student in South Korea
              <br/>
              <br/>
              <p style={{color: 'transparent'}}>Enter Furry.</p>
            </p>
          </div>
        </div>


        <div className='right'>       
          <div style={{display: 'flex', flexDirection: 'row', gap: 25}}>
            <a href='https://github.com/imnyang'><i className="fa-brands fa-github" style={{ color: 'white', paddingRight: 8 }} /><Repos /> Repos</a>
            <a href='https://blog.imnyang.xyz'>📝 Blog</a>
            <Link to="/timeline">🌈 Timeline</Link>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', gap: 25}}>
            <p style={{color: 'white'}}>Project</p>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', gap: 25}}>
            <a href="https://github.com/sqlare/sqlr.kr/tree/main">🔗 sqlr.kr (SQLite)</a>
            <a hidden href='https://qloat.com'>🗨️ Qloat</a>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', gap: 25}}>
            <a href='https://instagram.com/today.isangjeong'>🥕 isangjeong.today</a>
            <a href='https://github.com/imnyang/FakeAlyac'>💊 FakeAlyac</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Root;
