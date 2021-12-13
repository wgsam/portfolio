var success = bodymovin.loadAnimation({
  container: document.getElementById('success'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'json/sucees_anim.json'
})

var error = bodymovin.loadAnimation({
  container: document.getElementById('error'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'json/error-anim.json'
})

var warning = bodymovin.loadAnimation({
  container: document.getElementById('warning'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'json/warning_anim.json'
})

success.setSpeed(1.3);
error.setSpeed(1.3);
warning.setSpeed(1.3);
loading.setSpeed(1);
vmore.setSpeed(1);