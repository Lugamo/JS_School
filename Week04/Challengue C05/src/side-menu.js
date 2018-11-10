// Show the side menu, almost same Left Bar elements and css
document.getElementById('btnMenu').addEventListener('click', () => {
  const menu = document.getElementById('toget');
  document.getElementById('side-menu-content').innerHTML = menu.outerHTML;
  document.getElementById('side-menu').style.width = '250px';
});

// close the side menu
document.getElementById('btn-close').addEventListener('click', () => {
  document.getElementById('side-menu').style.width = '0';
});
