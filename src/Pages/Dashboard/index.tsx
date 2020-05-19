import React, { useState } from 'react';

import { Header } from './styles';

const Dashboard: React.FC = () => {
  const [text, setText] = useState('');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [operador, setOperador] = useState('');

  function handleDelete(): void {
    setText('');
    console.log('Limpou');
  }

  function handleAddButton(botao: string): void {
    if (botao !== '=') {
      if (
        botao === '0' ||
        botao === '1' ||
        botao === '2' ||
        botao === '3' ||
        botao === '4' ||
        botao === '5' ||
        botao === '6' ||
        botao === '7' ||
        botao === '8' ||
        botao === '9'
      ) {
        setText(text + botao); // setando valor no input
        setValue2(text + botao);
      }
      if (
        (text !== ' ' && botao === '+') ||
        (text !== ' ' && botao === '-') ||
        (text !== ' ' && botao === '/') ||
        (text !== ' ' && botao === '*')
      ) {
        setValue1(text);
        setOperador(botao);
        console.log(operador);
        setText('');
      }
    } else if (text === '' && operador === '/' && botao === '=') {
      alert('Error / This expression do not exists');
    } else if (botao === '=') {
      switch (operador) {
        case '+':
          setText((Number(value1) + Number(value2)).toString());
          break;
        case '-':
          setText((Number(value1) - Number(value2)).toString());
          break;
        case '/':
          if (Number(value2) !== 0) {
            setText((Number(value1) / Number(value2)).toString());
          } else {
            alert('Error');
          }
          break;
        case '*':
          setText((Number(value1) * Number(value2)).toString());
          break;
        default:
          alert('Not Found Operation');
      }
    }
  }

  // codigo JSX
  return (
    <>
      <Header>
        <div>
          <input placeholder="0" value={text} />
          <section className="up">
            <button
              className="seven"
              type="submit"
              onClick={() => handleAddButton('7')}
            >
              7
            </button>
            <button
              className="eigth"
              type="submit"
              onClick={() => handleAddButton('8')}
            >
              8
            </button>

            <button
              className="nine"
              type="submit"
              onClick={() => handleAddButton('9')}
            >
              9
            </button>
            <button
              className="dividir"
              type="submit"
              onClick={() => handleAddButton('/')}
            >
              /
            </button>
          </section>
          <section className="center">
            <button
              className="four"
              type="submit"
              onClick={() => handleAddButton('4')}
            >
              4
            </button>
            <button
              className="five"
              type="submit"
              onClick={() => handleAddButton('5')}
            >
              5
            </button>

            <button
              className="six"
              type="submit"
              onClick={() => handleAddButton('6')}
            >
              6
            </button>
            <button
              className="multiplica"
              type="submit"
              onClick={() => handleAddButton('*')}
            >
              *
            </button>
          </section>
          <section className="down">
            <button
              className="one"
              type="submit"
              onClick={() => handleAddButton('1')}
            >
              1
            </button>
            <button
              className="two"
              type="submit"
              onClick={() => handleAddButton('2')}
            >
              2
            </button>

            <button
              className="three"
              type="submit"
              onClick={() => handleAddButton('3')}
            >
              3
            </button>
            <button
              className="menos"
              type="submit"
              onClick={() => handleAddButton('-')}
            >
              -
            </button>
          </section>
          <section className="more-down">
            <button className="delete" type="submit" onClick={handleDelete}>
              C
            </button>
            <button
              className="zero"
              type="submit"
              onClick={() => handleAddButton('0')}
            >
              0
            </button>

            <button
              className="equal"
              type="submit"
              onClick={() => handleAddButton('=')}
            >
              =
            </button>
            <button
              className="more"
              type="submit"
              onClick={() => handleAddButton('+')}
            >
              +
            </button>
          </section>
        </div>
      </Header>
    </>
  );
};

export default Dashboard;
