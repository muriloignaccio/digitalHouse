import React from 'react';
/*  Criei um component card e nele eu recebo a prop que eu passei que chamei ele, o props é um objeto que possui todas as props que passamos para o componente, então vamos supor que além de passar o prop data eu tivesse passado o prop ativo com o valor true, o props seria mais ou menos assim: 
props = { 
    data: {
        avatar:
          'https://avatars3.githubusercontent.com/u/45742312?s=400&u=0f995bf69e1f1f1ee9e4c52d18a676cb05fc406b&v=4',
        name: 'Erica',
        color: 'Azul',
        food: 'Strogonoff',
        github: 'https://github.com/EricaSugui'
    },
    ativo: true
}

e eu posso acessar eles dentro da função usando props.data e/ou props.ativo
*/

const Card = (props) => (
  <div class='col s3'>
    <div class='card'>
      <div class='card-image'>
        <img src={props.data.avatar} alt={props.data.name} />
        <span class='card-title'>{props.data.name}</span>
      </div>
      <div class='card-content'>
        <p>
          <b>cor favorita: </b>
          {props.data.color}
        </p>
        <p>
          <b>comida favorita: </b>
          {props.data.food}
        </p>
      </div>
      <div class='card-action'>
        <a href={props.data.github}>Ver github</a>
      </div>
    </div>
  </div>
);

export default Card;
