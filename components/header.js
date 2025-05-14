class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header class="desktop-header">
            <div class="top-header">
                <ul>
                    <li><a href="#">로그인</a></li>
                    <li><a href="#">회원가입</a></li>
                </ul>
            </div>
                <div class="logo">
                    <a href="index.html">
                        <img src="../assets/epiclang.svg" alt="EPIC PRAXIS Logo">
                    </a>
                </div>
                <nav>
                    <ul class="main-menu">
                      <li><a href="#curriculum" class="${this.isActive('#')}">커리큘럼</a></li>
                      <li><a href="#roadmap">학습 로드맵</a></li>
                      <li><a href="https://blog.naver.com/epiclang" target="_blank" rel="noopener noreferrer">
                        <span style="display: inline-flex; align-items: center; gap: 3px;">블로그 
                        <span style="border: 1px solid #ddd; border-radius: 0px; padding: 2px 1px 0px 2px; font-size:11px;">↗</span></span></a></li>

                      <!--<li><a href="#">에픽영어학원의 차이</a></li>
                      <li><a href="#">강사 시스템</a></li>
                      <li><a href="#">캠퍼스 찾기</a></li>-->
                    </ul>

                    <ul class="cta-menu">
                      <li><a href="https://global-zone60.renaissance-go.com/welcomeportal/rpna74yw" target="_blank" rel="noopener noreferrer">
                        <img src="../assets/ar.png" style="height: 17px; vertical-align: middle; position: relative; top: -1px;"> 독서프로그램(AR)</span></a></li>

                      <li><a href="https://global-zone60.renaissance-go.com/welcomeportal/rpna74yw" target="_blank" rel="noopener noreferrer">
                        <img src="../assets/myON.png" style="height: 17px; vertical-align: middle; position: relative; top: -1px;"> 온라인도서관(myON)</span></a></li>

                      <li class="reservation"><a href="https://naver.me/xIezt86L" target="_blank">입학상담예약</a></li>
                    </ul>
                </nav>
            </header>
            
            <header class="mobile-header">
                <div class="mobile-header-container">
                    <div class="mobile-header-inner">
                        <div class="logo">
                            <a href="index.html">
                                <img src="assets/epiclang.svg" alt="EPIC PRAXIS Logo">
                            </a>
                        </div>
                        <div class="mobile-cta">
                            <a href="https://naver.me/xIezt86L" target="_blank" class="reservation">입학상담예약</a>
                            <a href="#" target="_blank" rel="noopener noreferrer" class="login">로그인</a>
                            <button class="hamburger"><span></span><span></span><span></span></button>
                        </div>
                    </div>
                    <div class="mobile-drop">
                        <ul>
                            <li><a href="#curriculum">커리큘럼</a></li>
                            <li><a href="#roadmap">학습 로드맵</a></li>
                            <span style="display: inline-flex; align-items: center; gap: 3px;">블로그 
                            <span style="border: 1px solid #ddd; border-radius: 0px; padding: 1.2px 1.2px 0px 1px; font-size:11px;">↗</span></span></a></li>
                            <li style="display: flex; gap: 8px; justify-content: flex-end;" class="outlink">
                              <a href="https://global-zone60.renaissance-go.com/welcomeportal/rpna74yw" target="_blank" rel="noopener noreferrer" class="outlink">
                                <img src="../assets/ar.png" style="height: 16px; vertical-align: middle; position: relative; top: -0.4px;"> 독서프로그램(AR)
                              </a>
                              <a href="https://global-zone60.renaissance-go.com/welcomeportal/rpna74yw" target="_blank" rel="noopener noreferrer" class="outlink">
                                <img src="../assets/myON.png" style="height: 16px; vertical-align: middle; position: relative; top: -0.4px;"> 온라인도서관(myON)
                              </a>
                            </li>
                        </ul>
                    </div>  
                </div>
            </header>
        `;

        // 로그인, 회원가입 알림 처리
        const topLinks = this.querySelectorAll('.top-header a');
        topLinks.forEach(link => {
            const text = link.textContent.trim();
            if ((text === '로그인' || text === '회원가입') && !link.hasAttribute('data-alert-initialized')) {
                link.setAttribute('data-alert-initialized', 'true');
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    alert('현재 준비 중인 서비스입니다. 빠른 시일 내에 오픈될 예정이오니 조금만 기다려주세요.😊');
                });
            }
        });

        // Add event listener for hamburger menu
        const hamburger = this.querySelector('.hamburger');
        const mobileMenu = this.querySelector('.mobile-drop');
        
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
