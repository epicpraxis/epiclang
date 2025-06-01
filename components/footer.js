class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-service">
      <div class="service-wrap">
        <ul class="service-list">
          <li class="service-item"><a href="#">회사소개(프랙시스 링크넣을 예정)</a></li>
          <li class="service-item"><a href="#">뭐 넣을지 고민 필요</a></li>
          <li class="service-item"><a href="#">커리큘럼</a></li>
        </ul>
        <ul class="service-list">
          <li class="service-item"><a href="privacy.html"><strong>개인정보 처리방침</strong></a></li>
          <li class="service-item"><a href="termsofuse.html"><strong>이용약관</strong></a></li>
        </ul>
      </div>
      <div class="icon-wrap">
        <a href="https://global-zone60.renaissance-go.com/welcomeportal/rpna74yw" target="_blank"><img src="assets/footer/ar.svg" alt="ar"></a>
        <a href="https://global-zone60.renaissance-go.com/welcomeportal/rpna74yw" target="_blank" class="social-icon"><img src="assets/footer/myon.svg" alt="myon"></a>
        <a href="https://blog.naver.com/epiclang  class="social-icon" target="_blank"><img src="assets/footer/blog.svg" alt="blog"></a>
      </div>
      <div class="footer-info">
        <p class="footer-logo">©EPIC PRAXIS</p>
        <div class="footer-right-icons">
          <a href="javascript:void(0)" class="copy-link"><img src="assets/footer/external.svg" alt="external link"></a>
          <a href="#" class="btn-top"><img src="assets/footer/top.svg" alt="top button"></a>
        </div>
      </div>
    </div>
  </div>
</footer>
        `;

        const copyBtn = this.querySelector('.copy-link');
        if (copyBtn) {
          copyBtn.addEventListener('click', () => {
            const tempInput = document.createElement('input');
            tempInput.value = window.location.href;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            alert('홈페이지 링크가 복사되었습니다!');
          });
        }
    }
}

customElements.define('footer-component', Footer); 
