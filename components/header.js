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
                    <span class="divider"></span>
                    <li><a href="#">회원가입</a></li>
                    <span class="divider"></span>
                    <li><a href="#">마이페이지</a></li>
                    <span class="divider"></span>
                    <li><a href="javascript:void(0)" class="open-channel-talk">고객센터</a></li> <!--고객센터 페이지 생기면 링크 바꾸기-->
                    <span class="divider"></span>
                    <li><a href="https://tr.ee/epic-yc-feedback">에픽에 바란다</a></li>
                    <span class="divider"></span>
                </ul>
            </div>
                <div class="logo">
                    <a href="index.html">
                        <img src="assets/ELA-text-logo-blacktext.png" alt="Epic English Logo">
                    </a>
                </div>
                <nav>
                    <ul class="main-menu">
                      <li><a href="index.html#curriculum" class="${this.isActive('#')}">커리큘럼</a></li>
                      <li><a href="index.html#roadmap">학습 로드맵</a></li>
                      <li><a href="campus.html">캠퍼스 찾기</a></li>
                      <li><a href="https://tr.ee/blog-epiclang" rel="noopener noreferrer">
                        <span style="display: inline-flex; align-items: center; gap: 3px;">블로그 
                        <span style="border: 1px solid #ddd; border-radius: 0px; padding: 2px 1px 0px 2px; font-size:11px;">↗</span></span></a></li>
                    
                      <li><a href="https://tr.ee/ar-myon-homepage" rel="noopener noreferrer">
                        <span style="display: inline-flex; align-items: center; gap: 3px;">온라인도서관(myON)
                        <span style="border: 1px solid #ddd; border-radius: 0px; padding: 2px 1px 0px 2px; font-size:11px;">↗</span></span></a></li>

                      <!--<li><a href="#">에픽영어학원의 차이</a></li>
                      <li><a href="#">강사 시스템</a></li>-->
                    </ul>

                    <ul class="cta-menu">
                      <!--<li><a href="https://global-zone60.renaissance-go.com/welcomeportal/rpna74yw" rel="noopener noreferrer">
                        <img src="assets/ar.svg" style="height: 17px; vertical-align: middle; position: relative; top: -1px;"> 독서프로그램(AR)</span></a></li>

                      <li><a href="https://tr.ee/ar-myon-homepage" rel="noopener noreferrer">
                        <img src="assets/myON.svg" style="height: 17px; vertical-align: middle; position: relative; top: -1px;"> 온라인도서관(myON)</span></a></li>-->

                      <li class="reservation"><a href="https://tr.ee/elayc-reservation-homepage" >입학상담 예약</a></li>
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
                            <a href="https://tr.ee/elayc-reservation-homepage" class="reservation">입학상담 예약</a>
                            <a href="#" rel="noopener noreferrer" class="login">로그인</a>
                            <button class="hamburger"><span></span><span></span><span></span></button>
                        </div>
                    </div>
                    <div class="mobile-drop">
                        <h2>우리 아이 영어 완성의 원픽</h2>
                        <!-- 상단 카드 영역 -->
                        <div class="mobile-card-grid">
                            <a href="https://tr.ee/ar-myon-homepage" class="mobile-card">
                            <img src="assets/menu/myON.svg" alt="myON" loading="lazy">
                            <p>온라인 도서관</p>
                            </a>
                            <a href="#"class="mobile-card">
                            <img src="assets/menu/login.svg" alt="로그인"loading="lazy">
                            <p>로그인</p>
                            </a>
                            <a href="https://tr.ee/elayc-reservation-homepage" class="mobile-card">
                            <img src="assets/menu/reservation.svg" alt="입학상담 예약"loading="lazy">
                            <p>입학상담 예약</p>
                            </a>
                        </div>

                        <!-- 하단 텍스트 메뉴 -->
                        <ul class="mobile-menu-list">
                            <li class="menu-title-top">특별 안내 링크</li>
                            <li>
                            <a href="https://tr.ee/elayc-2025-sb-preregistration-hp-fixed" 
                                style=" display: inline-flex;
                                        align-items: center;
                                        gap: 3px;
                                        background: linear-gradient(90deg, #476bff, #a030ff);
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent; " >
                                <strong>2025 에픽 썸머부스터</strong>
                                <span style="border: 1px solid #ddd; border-radius: 0px; padding: 1.2px 1.2px 0px 1px; font-size:11px;">↗</span>
                            </a>
                            </li>
                            <li>
                            <a href="https://tr.ee/ar-myon-manual-sms" style="display: inline-flex; align-items: center; gap: 3px;">
                                온라인 도서관(myON) 안내 
                                <span style="border: 1px solid #ddd; border-radius: 0px; padding: 1.2px 1.2px 0px 1px; font-size:11px;">↗</span>
                            </a>
                            </li>
                            <li>
                            <a href="https://tyf30bc2.forms.app/epicyeouido-online-session" style="display: inline-flex; align-items: center; gap: 3px;">
                                온라인 설명회 신청
                                <span style="border: 1px solid #ddd; border-radius: 0px; padding: 1.2px 1.2px 0px 1px; font-size:11px;">↗</span>
                            </a>
                            </li>


                            <li class="menu-title">메뉴</li>
                            <li><a href="index.html#curriculum">커리큘럼</a></li> <!-- (노션 안내 페이지로 연동) -->
                            <li><a href="index.html#roadmap">학습 로드맵</a></li>
                            <li><a href="campus.html">캠퍼스 찾기</a></li>
                            <li>
                            <a href="https://tr.ee/blog-epiclang" style="display: inline-flex; align-items: center; gap: 3px;">
                                블로그
                                <span style="border: 1px solid #ddd; border-radius: 0px; padding: 1.2px 1.2px 0px 1px; font-size:11px;">↗</span>
                            </a>
                            </li>


                            <li class="menu-title">고객센터</li>
                            <li><a href="#">자주 묻는 질문</a></li> <!-- (고객센터 페이지로 연동) -->
                            <li><a href="javascript:void(0)" class="open-channel-talk">1:1 채팅 문의</a></li> <!-- (채널톡 페이지로 연동) -->
                            <li><a href="tel:02-783-6806">전화 문의</a></li> <!-- 실제 전화번호로 변경하세요 -->
                            <li><a href="https://tr.ee/epic-yc-feedback" >에픽에 바란다</a></li> 


                        </ul>
                    </div>  
                </div>
            </header>
        `;

        // 로그인, 회원가입 알림 처리
        const topLinks = this.querySelectorAll('.top-header a, .mobile-drop a, .mobile-drop, .login, .mobile-menu-list');
        topLinks.forEach(link => {
            const text = link.textContent.trim();
            if ((text === '로그인' || text === '회원가입' || text === '마이페이지' || text === '자주 묻는 질문' || text === '1:1 채팅 문의') && !link.hasAttribute('data-alert-initialized')) {
                link.setAttribute('data-alert-initialized', 'true');
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    alert('현재 준비 중인 서비스입니다. 빠른 시일 내에 오픈될 예정이오니 조금만 기다려주세요.😊');
                    // Check if it's a link inside the mobile menu
                    if (!link.closest('.mobile-drop')) {
                        hamburger.classList.remove('active');
                        mobileMenu.classList.remove('active');
                    }
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

        // Channel Talk 스크립트 삽입
        (function () {
            var w = window;
            if (w.ChannelIO) {
                return w.console.error("ChannelIO script included twice.");
            }
            var ch = function () {
                ch.c(arguments);
            };
            ch.q = [];
            ch.c = function (args) {
                ch.q.push(args);
            };
            w.ChannelIO = ch;

            function l() {
                if (w.ChannelIOInitialized) {
                    return;
                }
                w.ChannelIOInitialized = true;
                var s = document.createElement("script");
                s.type = "text/javascript";
                s.async = true;
                s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
                var x = document.getElementsByTagName("script")[0];
                if (x.parentNode) {
                    x.parentNode.insertBefore(s, x);
                }
            }

            if (document.readyState === "complete") {
                l();
            } else {
                w.addEventListener("DOMContentLoaded", l);
                w.addEventListener("load", l);
            }
        })();

        ChannelIO("boot", {
            pluginKey: "91db4e6e-c65d-42b3-bfbc-bdab19413610",
        });

        const csLink = this.querySelector('.open-channel-talk');
        if (csLink) {
            csLink.addEventListener('click', (e) => {
                e.preventDefault();
                if (window.ChannelIO) {
                    window.ChannelIO('showMessenger');
                }
            });
        }
    }

    isActive(path) {
        return window.location.pathname.includes(path) ? 'active' : '';
    }
}

customElements.define('header-component', Header);
