import { useEffect, useState } from 'react';  
import { useLocation, Link } from 'react-router-dom';
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
      <div className='container'>
        <div className='left'>
          <p style={{color: 'transparent'}}>/?no_hair</p>
          {/* /?no_ear */}
          <img src={imageSrc} width={256} className='profile' />
          <h1 style={{color: '#241f22', fontSize: 60, margin: 0, fontWeight: '700'}}>
            <Link style={{color: '#241f22', fontSize: 60, margin: 0, fontWeight: '700'}} to={gotoHref}>imnyang</Link>
          </h1>

          <div style={{color: 'black'}}>
            <p style={{textAlign: 'left'}}>
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
            <a href='https://github.com/imnyang/imnyang'>🤔 About</a>
            <a href='https://blog.imnyang.xyz'>📝 Blog</a>
            <Link to="/timeline">🌈 Timeline</Link>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', gap: 25}}>
            <a href='https://github.com/imnyang'>🐈‍⬛ Github</a>
            <a href="mailto:me@imnyang.xyz">📬 Mail</a>
            <a href='https://instagram.com/not.furry_'>📸 Instagram</a>
            <a href='https://x.com/mahiro_me'>🐦 X</a>
          </div>        
          <div style={{display: 'flex', flexDirection: 'row', gap: 25}}>
            <p style={{color: 'white'}}>Project</p>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', gap: 25}}>
            <a href='https://instagram.com/isangjeong.today'>🥕 isangjeong.today</a>
            <a href='https://github.com/imnyang/FakeAlyac'>💊 FakeAlyac</a>
            <a hidden href='https://qloat.com'>🗨️ Qloat</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Root;
