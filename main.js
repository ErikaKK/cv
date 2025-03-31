
const footer = document.querySelector('footer');
footer.innerHTML = `<div class="socialMedia">

</div>
<div>© ${new Date().getFullYear()} by Erica Kong</div>`;

const socialMedia = document.querySelectorAll('.socialMedia');
socialMedia.forEach((media) => {
  media.innerHTML = `
  <div><a href="https://www.linkedin.com/in/erica-xiaoyun-kong" target="_blank"><i class="bi bi-linkedin social"></i></a></div>
  <div><a href="https://github.com/ErikaKK" target="_blank"><i class="bi bi-github social"></i></a></div>
<div><a href="https://www.facebook.com/xiaoyun.kong.161/" target="_blank"><i class="bi bi-facebook social"></i></a></div>`;
});