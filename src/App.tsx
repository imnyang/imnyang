import Root from './pages/Root';
import Timeline from './pages/Timeline_Page';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const keySequence: string[] = [];
    const targetSequence = 'furry';
  
    const handleKeyDown = (event: KeyboardEvent) => {
      // 단일 키 입력 감지
      console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);
      console.log(`KeySquare: ${keySequence.join('')}`);
      // 특정 문자열 시퀀스 감지
      keySequence.push(event.key);
      if (keySequence.length > targetSequence.length) {
        keySequence.shift();
      }
      if (keySequence.join('') === targetSequence) {
        console.log('Furry sequence detected!');
        const random = Math.random();
        if (random < 0.1) {
          document.location.href = `https://wh64.net?from=imnyang_root_${(Math.random() + 1).toString(36).substring(7)}page`;
        } else {
          document.location.href = `https://ny64.kr`;
        }
      }
    };
  
    document.addEventListener('keydown', handleKeyDown);
  
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" Component={Root} />
        <Route path="/timeline" Component={Timeline} />
      </Routes>
    </>
  );
}
export default App;
