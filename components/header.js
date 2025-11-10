// Inject the header markup at the very top of the <body>
document.body.insertAdjacentHTML('afterbegin', `
    <!-- ============================================================================== -->
    <!-- 주석: 시작 - 웹사이트 통합을 위한 필수 HTML 섹션                              -->
    <!-- 이 섹션의 코드를 웹사이트의 <body> 태그 바로 안쪽에 복사하여 붙여넣으세요.        -->
    <!-- ============================================================================== -->

    <!-- 1. 메인 헤더 (로고, 네비게이션, 카테고리 버튼 포함) -->
    <header class="header">
        <div class="top-header">
                <ul>
                    <li><a href="#">로그인</a></li>
                    <span class="divider"></span>
                    <li><a href="javascript:void(0)" class="open-channel-talk">고객센터</a></li> <!--고객센터 페이지 생기면 링크 바꾸기-->
                    <span class="divider"></span>
                    <li><a href="https://tr.ee/epic-yc-feedback">에픽에 바란다</a></li>
                    <span class="divider"></span>
                    <li><a href="campus.html">온라인 도서관</a></li>
                </ul>
            </div>
        <div class="header-container">
            <div class="header-inner">
                <a href="index.html" class="logo"><img src="assets/ELA-Black.png" alt="Epic English Logo"></a>
                <nav class="nav-menu">
                    <a href="booster.html">❄️ 2026 윈터부스터</a>
                    <span style="border:1px solid #767676; height:18px; margin-top:3px;" ></span>
                    <a href="core.html" class="nav-trigger">정규 프로그램</a>
                    <a href="#about">워크숍</a>
                    <a href="campus.html">캠퍼스 찾기</a>
                    <a href="https://blog.naver.com/epiclang">블로그</a>
                </nav>
                <div>
                     <button id="category-button" class="btn-category">
                        <div class="hamburger-icon">
                            <span class="hamburger-line top"></span>
                            <span class="hamburger-line bottom"></span>
                        </div>
                        <a href="index.html#consultation" class="btn-text">입학상담 예약</a>
                    </button>
                </div>
            </div>

            <!-- 데스크탑 드롭다운 메뉴 -->
            <div id="desktop-menu" class="desktop-menu">
                <div id="desktop-menu-panel" class="desktop-menu-panel">
                    <div class="desktop-menu-grid">
                        <div class="campus"> <h6>킨더관</h6> 
                            <ul> 
                                <li><a href="#kinder">(준비중)</a></li> 
                                <li><a href="#kinder">&nbsp</a></li> 
                                <li><a href="#kinder">&nbsp</a></li> 
                            </ul>
                        </div>
                        <div class="campus"> <h6>초등관</h6> 
                            <ul> 
                                <li><a href="base.html">BASE | 예비초 ~ 2학년</a></li> 
                                <li><a href="core.html">CORE | 초등 2 ~ 5학년</a></li> 
                                <li><a href="next.html">NEXT | 초등 5 ~ 6학년</a></li> 
                            </ul>
                        </div>
                        <div class="campus"> <h6>중등관</h6> 
                            <ul> 
                                <li><a href="#kinder">(준비중)</a></li> 
                                <li><a href="#kinder">&nbsp</a></li> 
                                <li><a href="#kinder">&nbsp</a></li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- 2. 모바일 사이드바 메뉴 컨테이너 -->
    <div>
        <div id="menu-backdrop" class="menu-backdrop"></div>
        <div id="menu-panel" class="menu-panel">
            <div class="menu-content">
                <div class="menu-header">
                    <p>영어의 시작부터 끝까지<br>우리 아이 영어 완성의 에픽</p>
                </div>
                <div class="menu-section">
                    <div class="menu-icon-grid">
                        <a href="#" class="menu-icon-item">
                        <div class="menu-icon-circle">
                            <img src="assets/menu/myON.svg" alt="myON" class="myON">
                        </div>
                        <span class="menu-icon-text">온라인 도서관</span>
                        </a>

                        <a href="#" class="menu-icon-item">
                        <div class="menu-icon-circle">
                            <img src="assets/menu/login.svg" alt="login">
                        </div>
                        <span class="menu-icon-text">로그인</span>
                        </a>

                        <a href="index.html#consultation" class="menu-icon-item">
                        <div class="menu-icon-circle">
                            <img src="assets/menu/reservation.svg" alt="reservation" class="reservation">
                        </div>
                        <span class="menu-icon-text">입학상담 예약</span>
                        </a>
                    </div>
                    </div>
                <hr class="menu-divider">
                    <div class="menu-list-section">
                    <div class="menu-group">
                        <h3 class="menu-group-title">모집중</h3>
                        <ul class="menu-group-list">
                        <li>
                            <a href="booster.html" class="menu-link">
                            <span style="display: inline-flex;
                                        align-items: center;
                                        gap: 3px;
                                        background: linear-gradient(90deg, #476bff, #a030ff);
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;" > ❄️ 2026 윈터부스터</span>
                            </a>
                        <li>
                            <a href="base.html" class="menu-link">
                            <span>2026 신규생 모집</span>
                            </a>
                        </li>
                        </li>
                    </div>
                    <div class="menu-group">
                        <h3 class="menu-group-title">초등관</h3>
                        <ul class="menu-group-list">
                        <li>
                            <a href="base.html" class="menu-link">
                            <span>BASE | 예비초 ~ 2학년</span>
                            </a>
                        </li>
                        <li>
                            <a href="core.html" class="menu-link">
                            <span>CORE | 초등 2 ~ 5학년</span>
                            </a>
                        </li>
                        <li>
                            <a href="next.html" class="menu-link">
                            <span>NEXT | 초등 5 ~ 6학년</span>
                            </a>
                        </li>
                        </ul>
                    </div>

                    <div class="menu-group">
                        <h3 class="menu-group-title">초등관</h3>
                        <ul class="menu-group-list">
                        <li>
                            <a href="#" class="menu-link">
                            <span style="color:#d5d5d5">준비중</span>
                            </a>
                        </li>
                        </ul>
                    </div>

                    <div class="menu-group">
                        <h3 class="menu-group-title">중등관</h3>
                        <ul class="menu-group-list">
                        <li>
                            <a href="#" class="menu-link">
                            <span style="color:#d5d5d5">준비중</span>
                            </a>
                        </li>
                        </ul>
                    </div>

                    <div class="menu-group">
                        <h3 class="menu-group-title">특별 프로그램</h3>
                        <ul class="menu-group-list">
                        <li>
                            <a href="booster.html" class="menu-link">
                            <span>워크숍</span>
                            </a>
                        </li>
                        <li>
                            <a href="booster.html" class="menu-link">
                            <span>부스터</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="menu-link">
                            <span>커뮤니티</span>
                            </a>
                        </li>
                    </div>

                    <div class="menu-group">
                        <h3 class="menu-group-title">고객센터</h3>
                        <ul class="menu-group-list">
                        <li>
                            <a href="campus.html" class="menu-link">
                            <span>캠퍼스 찾기</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="menu-link">
                            <span>고객센터</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://blog.naver.com/epiclang" class="menu-link">
                            <span>블로그</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://tyf30bc2.forms.app/epicyeouidofeedback" class="menu-link">
                            <span>에픽에 바란다</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="menu-link">
                            <span>자주 묻는 질문</span>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
            </div>
        </div>
    </div>
`);

// Cache DOM references used throughout the header interactions
const categoryButton = document.getElementById('category-button');
const mobileMenuPanel = document.getElementById('menu-panel');
const menuBackdrop = document.getElementById('menu-backdrop');
const desktopMenuContainer = document.getElementById('desktop-menu');
const desktopMenuPanel = document.getElementById('desktop-menu-panel');
let isMobileMenuOpen = false;
let isDesktopMenuOpen = false;
let hoverTimeout;
const primaryNavTriggers = document.querySelectorAll('.nav-trigger');

const openMobileMenu = () => {
    if (isMobileMenuOpen) return;
    menuBackdrop.classList.add('is-open');   // 보이기 + 페이드인
    document.body.style.overflow = 'hidden';
    categoryButton.classList.add('is-open'); 
    setTimeout(() => {
        mobileMenuPanel.classList.add('is-open'); // 슬라이드 인
    }, 10);
    isMobileMenuOpen = true;
};

const closeMobileMenu = () => {
    if (!isMobileMenuOpen) return;
    menuBackdrop.classList.remove('is-open');
    categoryButton.classList.remove('is-open');
    setTimeout(() => {
        mobileMenuPanel.classList.remove('is-open');
        document.body.style.overflow = '';
    }, 300);
    isMobileMenuOpen = false;
};

const openDesktopMenu = () => {
    if (isDesktopMenuOpen) return;
    desktopMenuContainer.classList.add('is-open'); 
    setTimeout(() => {
        desktopMenuPanel.classList.add('is-open');
    }, 10);
    isDesktopMenuOpen = true;
};

const closeDesktopMenu = () => {
    if (!isDesktopMenuOpen) return;
    desktopMenuPanel.classList.remove('is-open');
    setTimeout(() => {
        desktopMenuContainer.classList.remove('is-open');
    }, 200);
    isDesktopMenuOpen = false;
};

categoryButton.addEventListener('click', (e) => {
    e.stopPropagation();
    if (window.innerWidth < 1024) {
        isMobileMenuOpen ? closeMobileMenu() : openMobileMenu();
    } /*else {
        isDesktopMenuOpen ? closeDesktopMenu() : openDesktopMenu();
    }*/
});

menuBackdrop.addEventListener('click', closeMobileMenu);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (isMobileMenuOpen) closeMobileMenu();
        if (isDesktopMenuOpen) closeDesktopMenu();
    }
});

document.addEventListener('click', (e) => {
    if (isDesktopMenuOpen && !desktopMenuContainer.contains(e.target) && !categoryButton.contains(e.target)) {
        closeDesktopMenu();
    }
});

const startCloseTimer = () => {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(closeDesktopMenu, 200);
};

const cancelCloseTimer = () => {
    clearTimeout(hoverTimeout);
};

const attachDesktopHover = (element) => {
    element.addEventListener('mouseenter', () => {
        if (window.innerWidth >= 1024) {
            cancelCloseTimer();
            openDesktopMenu();
        }
    });
    element.addEventListener('mouseleave', () => {
        if (window.innerWidth >= 1024) {
            startCloseTimer();
        }
    });
    element.addEventListener('focus', () => {
        if (window.innerWidth >= 1024) {
            cancelCloseTimer();
            openDesktopMenu();
        }
    });
    element.addEventListener('blur', () => {
        if (window.innerWidth >= 1024) {
            startCloseTimer();
        }
    });
};

/*attachDesktopHover(categoryButton);*/
primaryNavTriggers.forEach(trigger => attachDesktopHover(trigger));

desktopMenuContainer.addEventListener('mouseenter', () => {
    if (window.innerWidth >= 1024) {
        cancelCloseTimer();
    }
});
desktopMenuContainer.addEventListener('mouseleave', () => {
    if (window.innerWidth >= 1024) {
        startCloseTimer();
    }
});
desktopMenuContainer.addEventListener('focusin', () => {
    if (window.innerWidth >= 1024) {
        cancelCloseTimer();
    }
});
desktopMenuContainer.addEventListener('focusout', () => {
    if (window.innerWidth >= 1024) {
        startCloseTimer();
    }
});
