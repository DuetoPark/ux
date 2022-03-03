const buttonUxSection = document.querySelector('.button-ux')
const agreementButton = buttonUxSection.querySelector('.agreement-button')

const HELPFUL_TEXT = '도움이 돼요'
const HELPFUL_ACTIVE_TEXT = '도움됨'
const HELPFUL_ACTIVE_ICON = '<i class="ic-check" aria-hidden="true"></i>'

function toggleButton() {
  const isClicked = agreementButton.matches('.btn-primary')

  if (isClicked) {
    agreementButton.innerHTML = HELPFUL_TEXT
  } else {
    agreementButton.innerHTML = HELPFUL_ACTIVE_ICON + HELPFUL_ACTIVE_TEXT
  }

  agreementButton.classList.toggle('btn-primary')
  agreementButton.classList.toggle('btn-outlined')
}

agreementButton.addEventListener('click', toggleButton)
