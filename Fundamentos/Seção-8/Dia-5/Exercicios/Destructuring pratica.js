
const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

const novo = {...user, ...jobInfos};

const { 
    name,
    age, 
    nationality,
    profession,
    squad,
    squadInitials,
} = novo;

const text = (`Hy my name is ${name}, i'm ${age} years old and i'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);

console.log(text);