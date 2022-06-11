const questionBox = document.querySelector('#question')
const askButton = document.querySelector('#ask')
const answerBox = document.querySelector('#answer')

/**
 * Função sorteia uma resposta
 * @returns String Answer
 */
function randomAnswer() {
  const answerList = [
    'Certeza!',
    'Não tenho tanta certeza.',
    'É decididamente assim.',
    'Não conte com isso.',
    'Sem dúvidas!',
    'Pergunte novamente mais tarde.',
    'Sim, definitivamente!',
    'Minha resposta é não.',
    'Você pode contar com isso.',
    'Melhor não te dizer agora.',
    'A meu ver, sim.',
    'Minhas fontes dizem não.',
    'Provavelmente.',
    'Não é possível prever agora.',
    'Perspectiva boa.',
    'As perspectivas não são tão boas.',
    'Sim.',
    'Concentre-se e pergunte novamente.',
    'Sinais apontam que sim.'
  ]
  const index = Math.floor(Math.random() * answerList.length)
  return answerList[index]
}

function answerMyQuestion() {
  if (!questionBox.value) {
    //alert('faça uma pergunta')
    questionBox.focus()
    questionBox.classList.add('attention')

    setTimeout(() => {
      questionBox.classList.remove('attention')
    }, 600)

    return
  }

  const question = `<div>${questionBox.value}</div>`
  answerBox.style.opacity = 1
  answerBox.innerHTML = question + randomAnswer()
  askButton.setAttribute('disabled', true)

  setTimeout(() => {
    answerBox.style.opacity = 0
    askButton.removeAttribute('disabled', true)
    questionBox.value = ''
  }, 3000)
}

askButton.addEventListener('click', () => {
  answerMyQuestion()
})
