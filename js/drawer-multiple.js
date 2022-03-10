'use strict'

const drawer = document.querySelector(
  '.drawer-menu-item.is-multiple .drawer-menu-wrapper'
)

let isOpenedDrawerMenu = null

function closeDrawerMenuWhichIsOpened(event) {
  const target = event.target
  if (!target.matches('.drawer-menu-button')) return

  const currentDrawerMenu = target.parentNode
  if (isOpenedDrawerMenu === currentDrawerMenu) return

  isOpenedDrawerMenu && isOpenedDrawerMenu.classList.remove('is-open')
  isOpenedDrawerMenu = currentDrawerMenu
}

drawer.addEventListener('click', closeDrawerMenuWhichIsOpened)
