const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = () => {
//    const currentTemperature = getMarsTemperature();
   setTimeout(() => console.log(`A temperatura de Marte é: ${getMarsTemperature()} graus celsius`), messageDelay());
}

sendMarsTemperature(); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo

// Eu posso usar dentro de ${} a própria função da temperatura executando (); ou atribuir uma constante e colocar ela no ${}.