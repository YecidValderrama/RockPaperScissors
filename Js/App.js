// Declaracion de variables
const Rock = "rock";
const Paper = "paper";
const Scissors = "scissors";

const TIE = 0;
const WIN = 1;
const LOSE = 2;
// Obteniendo los elementos
const RockBtn = document.getElementById("rock");
const PaperBtn = document.getElementById("paper");
const ScissorsBtn = document.getElementById("scissors");
const ResultText = document.getElementById("start-text");
const UserImg = document.getElementById("user-img");
const MachineImg = document.getElementById("machine-img");
// Agregando Ecuchador de eventos al hacer click
RockBtn.addEventListener("click", () => {
  play(Rock);
});

PaperBtn.addEventListener("click", () => {
  play(Paper);
});

ScissorsBtn.addEventListener("click", () => {
  play(Scissors);
});
// Definiendo funciones
function play(UserOption) {
  UserImg.src = "./img/" + UserOption + ".svg";
  ResultText.innerHTML = "Pensando...";

  const interval = setInterval(function () {
    const machineOption = CalcMachineOption();
    MachineImg.src = "./img/" + machineOption + ".svg";
  }, 100);

  setTimeout(function () {
    clearInterval(interval);
    const machineOption = CalcMachineOption();
    const result = CalcResult(UserOption, machineOption);
    MachineImg.src = "./img/" + machineOption + ".svg";
    console.log(machineOption);
    console.log(UserOption);

    switch (result) {
      case TIE:
        ResultText.innerHTML = "Haz empatado";
        break;
      case WIN:
        ResultText.innerHTML = "Haz ganado";
        break;
      case LOSE:
        ResultText.innerHTML = "Haz perdido";
        break;
    }
  }, 1000);

  //Funcion que genera el numero aleatorio del 0 al 2 y segun corresponda devuelva la variable

  function CalcMachineOption() {
    let machine = Math.floor(Math.random() * 3);
    if (machine === 0) {
      return Rock;
    } else if (machine === 1) {
      return Paper;
    } else if (machine === 2) {
      return Scissors;
    }
  }

  // Funcion que realiza la comparacion entre la entrada del usuario y respuesta de la maquina

  function CalcResult(UserOption, machineOption) {
    if (UserOption === machineOption) {
      return TIE;
    } else if (UserOption === Rock) {
      if (machineOption == Paper) return LOSE;
      if (machineOption == Scissors) return WIN;
    } else if (UserOption === Paper) {
      if (machineOption == Scissors) return LOSE;
      if (machineOption == Rock) return WIN;
    } else if (UserOption === Scissors) {
      if (machineOption == Rock) return LOSE;
      if (machineOption == Paper) return WIN;
    }
  }
}
