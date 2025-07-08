class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
<footer class="footer" id="footer">
  <div class="footer-inner">
    <div class="footer-service">
      <div class="icon-wrap">
        <a href="https://tr.ee/ar-myon-homepage" class="social-icon"><img src="assets/footer/myon.svg" alt="myon"></a>
        <a href="https://tr.ee/blog-epiclang" class="social-icon" ><img src="assets/footer/blog.svg" alt="blog"></a>
        <a href="http://pf.kakao.com/_xeYVrn/chat" class="open-channel-talk" class="social-icon"><img src="assets/footer/channeltalk.svg" alt="channel talk"></a>
      </div>
      <div class="footer-right-icons">
        <a href="javascript:void(0)" class="copy-link"><img src="assets/footer/external.png" alt="external link"></a>
        <a href="#" class="btn-top"><img src="assets/footer/top.png" alt="top button"></a>
      </div>    
    </div>
      <div class="service-wrap">
        <ul class="service-list">
          <!--li class="service-item"><a href="#">회사소개</a></li>
          <li class="service-item"><a href="#">팀문화</a></li>
          <li class="service-item"><a href="#">브랜드</a></li>
          <li class="service-item"><a href="#">채용</a></li>
          <li class="service-item-bold"><a href="#">문의하기: 02-783-6806</a></li-->
        </ul>
        <ul class="service-list">          
          <li class="service-item-bold"><a href="privacy.html">개인정보 처리방침</a></li>
          <li class="service-item-bold"><a href="termsofuse.html">이용약관</a></li>
        </ul>
      </div>
      <div class="footer-info">
          <p class="footer-logo">©EPIC PRAXIS CORP.</p>
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
            alert('링크가 복사되었습니다🙌 지인들에게 에픽영어학원 홈페이지를 공유해 주세요!');
          });
        }
    }
}
customElements.define('footer-component', Footer); 
