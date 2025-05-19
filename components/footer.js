class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
<footer class="footer-section">
  <div class="footer-content">
    <div class="footer-top">
      <div class="footer-brand">
        <img src="assets/epiclangfooter.svg" alt="EPIC PRAXIS Logo">
      </div>
      <div class="footer-columns">
        <div class="footer-column">
          <p><strong>회사명</strong> 에픽영어학원</p>
          <p><strong>대표이사</strong> 성찬영</p>
          <p><strong>사업자등록번호</strong> 601-97-56044</p>
        </div>
        <div class="footer-column">
          <p><strong>주소</strong> 서울특별시 영등포구 국제금융로 78, 1013호, 1014호</p>
          <p><strong>대표전화</strong> 02-783-6806</p>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© Epic English Academy. All Rights Reserved.</p>
      <div class="footer-branding-row">
        <div class="footer-logos">
          <a href="https://global-zone60.renaissance-go.com/welcomeportal/rpna74yw" target="_blank" rel="noopener"><img src="assets/ar_footer.png" alt="AR"></a>
          <a href="https://global-zone60.renaissance-go.com/welcomeportal/rpna74yw" target="_blank" rel="noopener"><img src="assets/myon_footer.png" alt="myON"></a>
          <a href="https://blog.naver.com/epiclang" target="_blank" rel="noopener"><img src="assets/blog_footer.png" alt="Logo 3"></a>
        </div>
        <p>An Epic Praxis Brand</p>
      </div>
    </div>
  </div>
</footer>
        `;
    }
}

customElements.define('footer-component', Footer); 
