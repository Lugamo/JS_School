function openSlideMenu(){
    document.getElementById('side-menu').style.width = '250px';
  }

function closeSlideMenu(){
  document.getElementById('side-menu').style.width = '0';
}

function changeTittle(main) {
  document.getElementById('nReleases').innerHTML = main;
  console.log(main);
}

//For Tippyjs Popovers
tippy.setDefaults({
  arrow: true,
  arrowType: 'large',
  duration: 200,
  delay: 200,
  placement: "right",
  })
tippy('.imageContainer', {
  content: document.querySelector('#myTemplate').innerHTML
})