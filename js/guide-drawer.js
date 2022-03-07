'use strict'

const drawerSection = document.querySelector('.guide-drawer')
const drawerMenuList = drawerSection.querySelectorAll('.drawer-menu-list')

function toggleDrawerMenu(event) {
  const target = event.target
  if (!target.matches('.drawer-menu-button')) return

  const drawerMenu = target.parentNode.parentNode
  drawerMenu.classList.toggle('is-open')
}

drawerMenuList.forEach((drawerMenu) => {
  drawerMenu.addEventListener('click', toggleDrawerMenu)
})
