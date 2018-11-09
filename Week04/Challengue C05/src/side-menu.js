document.getElementById('btnMenu').addEventListener('click', () => {
  const menu = document.getElementById('toget');
  document.getElementById('side-menu-content').innerHTML = menu.outerHTML;
  document.getElementById('side-menu').style.width = '250px';
});

document.getElementById('btn-close').addEventListener('click', () => {
  document.getElementById('side-menu').style.width = '0';
});
