import './App.css';
import Hello from './hello'
import styled, { css } from 'styled-components';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  };
  const InputStyle = styled.input`
      display: block;
      height: 56px;
      border-radius: 4px;
      border-color: ${props => props.error ? "blue" : "red"}
  `;
  const ButtonStyle = styled.button`
    width: 200px;
    height: 100px;
    border-radius: 4px;
  `;
  const LineButton = styled(ButtonStyle)`
    border: 1px solid gray;
  `;
  const SolidButton = styled(ButtonStyle)`
    background-color: skyblue;
    ${props => props.primary && css`
      background-color: green;
      color: white;;
    `}
  `;
  return (
      <>
        {/* 주석은 이렇게  */}
        <Hello
            //주석은 이렇게
        />
        <div style={style}>{name}</div>
        <div className="gray-box"></div>
        <p>아이디</p>
        <InputStyle type="text" />
        <p>비밀번호</p>
        <InputStyle type="text" error />
        <LineButton>취소</LineButton>
        <SolidButton primary>확인</SolidButton>
      </>
  );
}

export default App;
