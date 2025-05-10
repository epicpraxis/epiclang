class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="top-header">
                <ul>
                    <li><a href="#">로그인</a></li>
                    <li><a href="#">회원가입</a></li>
                    <!--<li><a href="#">수강료 납입</a></li>-->
                    <!--<li><a href="https://naver.me/5KbKfHml" target="_blank">문의하기</a></li>-->
                </ul>
            </div>
            <header>
                <div class="logo">
                    <a href="index.html">
                        <img src="/assets/epiclang.svg" alt="EPIC PRAXIS Logo">
                    </a>
                </div>
                <nav style="display: flex; justify-content: space-between; align-items: center; width: 80%;">
                    <ul class="main-menu">
                      <li><a href="#curriculum" class="${this.isActive('#')}">커리큘럼</a></li>
                      <li><a href="#roadmap">학습 로드맵</a></li>
                      <li><a href="https://blog.naver.com/epiclang" target="_blank" rel="noopener noreferrer">
                        <span style="display: inline-flex; align-items: center; gap: 6px;">블로그 
                        <span style="border: 1px solid #ddd; border-radius: 4px; padding: 0px 0px; font-size: 0.9em;">↗</span></span></a></li>

                      <!--<li><a href="#">에픽영어학원의 차이</a></li>
                      <li><a href="#">강사 시스템</a></li>
                      <li><a href="#">캠퍼스 찾기</a></li>-->
                    </ul>

                    <ul class="cta-menu">
                      <li><a href="https://global-zone60.renaissance-go.com/welcomeportal/rpna74yw" target="_blank" rel="noopener noreferrer">
                        <span class="cta-button">
                        <img src="/assets/ar.png" style="height: 17px; vertical-align: middle; position: relative; top: -2px;">독서프로그램(AR)</span></a></li>

                      <li><a href="https://global-zone60.renaissance-go.com/welcomeportal/rpna74yw" target="_blank" rel="noopener noreferrer">
                        <span class="cta-button">
                        <img src="/assets/myON.png" style="height: 17px; vertical-align: middle; position: relative; top: -2px;"> 영어도서관(myON)</span></a></li>

                      <li class="reservation"><a href="https://naver.me/xIezt86L" target="_blank">입학상담예약</a></li>
                    </ul>
                </nav>
            </header>
        `;

        // Add event listener for hamburger menu
        const hamburger = this.querySelector('.hamburger');
        const mobileMenu = this.querySelector('.mobile-menu');
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });

        // Close mobile menu when clicking a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            // 로그인, 회원가입 알림 처리
const topLinks = this.querySelectorAll('.top-header a');
topLinks.forEach(link => {
    const text = link.textContent.trim();

    // 이전에 이벤트 리스너가 등록되지 않았을 때만 추가
    if ((text === '로그인' || text === '회원가입') && !link.hasAttribute('data-alert-initialized')) {
        link.setAttribute('data-alert-initialized', 'true');
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert('아직 준비 중입니다.');
        });
    }
});
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }

    isActive(path) {
        return window.location.pathname.includes(path) ? 'active' : '';
    }
}

customElements.define('header-component', Header);