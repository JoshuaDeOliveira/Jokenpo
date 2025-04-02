let Player = ''
let Resultado = ''

let Mostrar = {
  Vitorias: document.getElementById("Vencedor"),
  Derrotas: document.getElementById("Derrota"),
  Empates: document.getElementById("Empate")
}

let Resultados = JSON.parse(localStorage.getItem('Resultados')) 

if (Resultados === null) {
  Resultados = {
    Wins: 0,
    Losses: 0,
    Draw: 0
  }
}

document.addEventListener("DOMContentLoaded",function() {
  AtualizarDados()
})

function Jokenpo(Jogador){
  Player = Jogador
  let CPU = Calculo()
  Resultado = Jogo(Player, CPU)

  alert(`O Jogador jogou ${Player} e o Computador jogou ${CPU} dando o resultado ${Resultado}`)
}

function Calculo(){
  let Computador = Math.random()
  let JogadaComputador = ''

  if (Computador >= 0 && Computador < 1/3) {
    JogadaComputador = "Pedra"
    return JogadaComputador
  } else if (Computador >= 1/3 && Computador < 2/3) {
    JogadaComputador = "Papel"
    return JogadaComputador
  } else if (Computador >= 2/3 && Computador > 1) {
    JogadaComputador = "Tesoura"
    return JogadaComputador
  }
}

function Jogo(JogadaPlayer, Maquina){
  let P1 = JogadaPlayer
  let P2 = Maquina
  let GameOver = ''

  switch (P1) {
    case 'Papel':

      if (P1 == P2) {
        GameOver = 'Empate'
      } else if (P2 == "Tesoura") {
        GameOver = 'Derrota'
      } else{
        GameOver = 'Vitoria'
      }
      break;

    case 'Pedra':
      if (P1 == P2) {
        GameOver = 'Empate'
      } else if (P2 == "Tesoura") {
        GameOver = 'Vitoria'
      } else{
        GameOver = 'Derrota'
      }
      break;
    case 'Tesoura':
      if (P1 == P2) {
        GameOver = 'Empate'
      } else if (P2 == "Pedra") {
        GameOver = 'Derrota'
      } else{
        GameOver = 'Vitoria'
      }
      break;
    default:
      console.log('O Programa não esta funcionando')
      break;
  }

  Pontos(GameOver)
  return GameOver
}

function Pontos(EndGame){
  let Validação = EndGame

  if (Validação === 'Vitoria') {
    Resultados.Wins += 1
  } else if (Validação === 'Derrota') {
    Resultados.Losses += 1
  } else if (Validação === 'Empate') {
    Resultados.Draw += 1
  }

  AtualizarDados()

  localStorage.setItem('Resultados', JSON.stringify(Resultados));
}

function AtualizarDados(){
  Mostrar.Vitorias.innerHTML = Resultados.Wins
  Mostrar.Derrotas.innerHTML = Resultados.Losses
  Mostrar.Empates.innerHTML = Resultados.Draw
}

function Reset() {
  Resultados.Wins = 0;
  Resultados.Losses = 0;
  Resultados.Draw = 0

  localStorage.removeItem('Resultados')

  AtualizarDados()
}