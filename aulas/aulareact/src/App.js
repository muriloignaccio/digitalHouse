import React from 'react';

import Card from './components/Card';
import Title from './components/Title';

import 'materialize-css/dist/css/materialize.css';

function App() {
  // Criei uma lista de usuários para ficar mais fácil de renderizar com o map
  const users = [
    {
      avatar:
        'https://scontent.ffln1-1.fna.fbcdn.net/v/t1.0-1/p160x160/57716571_2690017284372875_45283596843352064_o.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=mPfNxbgajoMAX8JirQ1&_nc_ht=scontent.ffln1-1.fna&_nc_tp=6&oh=3d4887456ddf3aea3d3be1ab6d4a4add&oe=5EF8E89A',
      name: 'Victor',
      color: 'Verde',
      food: 'Macarrão com queijo',
      github: 'https://linkedin.com',
    },
    {
      avatar:
        'https://avatars0.githubusercontent.com/u/60678498?s=400&u=95bb3582f4957b8568a785477113f3e8b31b1c6c&v=4',
      name: 'Agnys',
      color: 'Rosa',
      food: 'Arroz e feijão',
      github: 'https://github.com/agnysbueno',
    },
    {
      avatar:
        'https://avatars3.githubusercontent.com/u/54823475?s=460&u=780274777053e188d54edc02142567cfbef87172&v=4',
      name: 'Murilo',
      color: 'Laranja',
      food: 'Feijoada',
      github: 'https://github.com/muriloignaccio',
    },
    {
      avatar:
        'https://avatars3.githubusercontent.com/u/45742312?s=400&u=0f995bf69e1f1f1ee9e4c52d18a676cb05fc406b&v=4',
      name: 'Erica',
      color: 'Azul',
      food: 'Strogonoff',
      github: 'https://github.com/EricaSugui',
    },
    {
      avatar:
        'https://avatars1.githubusercontent.com/u/34426407?s=400&u=f254a9a50b99e2a8f63ce58958cb97089032e307&v=4',
      name: 'Alessandro',
      color: 'Preto',
      food: 'Batata Frita',
      github: 'https://github.com/ALESSANDROLMENEZES ',
    },
  ];
  return (
    <div className='App'>
      {/* Estou chamando o component Title e passando uma prop que possui o nome title e possui o valor 'Hello World' */}
      <Title title='Hello World' />
      <div className='row'>
        <div className='col s12'>
          {/* Estou iterando a lista de usuários e pra cada um dele estou renderizando o componente card e passando como prop o próprio usuário, esse atributo key é utilizado porque quando se usa o map no react, cada componente precisa de um identificador, nesse caso eu passei o nome do usuário, porém é mais comum utilizar o id */}
          {users.map((user) => (
            <Card data={user} key={user.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
