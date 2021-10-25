import React, { useState, useEffect } from 'react';

function Home() {
  const [name, setName] = useState();
  const [valid, setValid] = useState(true);
  const [leilao, setLeilao] = useState([]);

  useEffect(() => {
    fetch('')
    .then((response) => response.json())
    .then((response) => setLeilao(response))
    .catch(() => '');
  },[])

  const onChange = (event) => {
    setName(event.target.value);
  };

  const onHandle = () => {
    setValid(false);
  }


  return (
    <>
      {valid ?
        <div>
          <label htmlFor="username">Digite seu nome: 
            <input id="username" type="text" onChange={onChange}/>
          </label>
          <button onClick={onHandle}>Entrar</button>
        </div>
        :
        <div className="container">
          {leilao.map(() => {
            <div>
              
            </div>
          })}
        </div>
      }
    </>
  );
}

export default Home;
