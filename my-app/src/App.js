import './App.css';
import Hello from './hello'

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  };
  return (
      <>
        {/* 주석은 이렇게  */}
        <Hello
            //주석은 이렇게
        />
        <div style={style}>{name}</div>
        <div className="gray-box"></div>
      </>
  );
}

export default App;
