const headerHTML = `
<!--  GDPR modal -->
            <div id="uc-gdpr-notification" class="uc-gdpr-notification uc-notification min-w-1/2 uc-notification-bottom-left lg:m-2">
                <div class="uc-notification-message vstack lg:hstack items-end gap-2 lg:gap-4 lg:p-3 bg-white text-dark border rounded-1-5 min-w-1/2">
                    <a id="uc-close-gdpr-notification" class="uc-notification-close text-dark" data-uc-close></a>
                    <div class="vstack">
                        <h2 class="h5 ft-primary fw-bold -ls-1 m-0 text-dark">GDPR Compliance</h2>
                        <p class="fs-6 mt-1">We use cookies to ensure you get the best experience on our website. By continuing to use our site, you accept our use of cookies, <a href="page-privacy.html" class="uc-link text-underline">privacy policy</a> and <a href="page-terms.html" class="uc-link text-underline">terms of service</a>.</p>
                    </div>
                    <button class="btn btn-sm btn-primary px-2" id="uc-accept-gdpr">Accept</button>
                </div>
            </div>
    
            <!--  Menu panel -->
            <div id="uc-menu-panel" data-uc-offcanvas="overlay: true;">
                <div class="uc-offcanvas-bar bg-white text-dark dark:bg-gray-900 dark:text-white">
                    <header class="uc-offcanvas-header hstack justify-between items-center pb-2 bg-white dark:bg-gray-900">
                        <div class="uc-logo">
                            <a href="index.html" class="h5 text-none text-gray-900 dark:text-white">
                                <img class="w-32px" src="../assets/images/common/logo-mark.svg" alt="Lexend">
                            </a>
                        </div>
                        <button class="uc-offcanvas-close rtl:end-auto rtl:start-0 m-1 mt-2 icon-3 btn border-0 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all" type="button">
                            <i class="unicon-close"></i>
                        </button>
                    </header>
    
                    <div class="panel">
                        <form id="search-panel" class="form-icon-group vstack gap-1 mb-2" data-uc-sticky="">
                            <input type="email" class="form-control form-control-sm fs-7 rounded-default" placeholder="Search..">
                            <span class="form-icon text-gray">
                                <i class="unicon-search icon-1"></i>
                            </span>
                        </form>
                        <ul class="nav-y gap-narrow fw-medium fs-6" data-uc-nav>
                            <li><a href="page-features.html">Features</a></li>
                            <li><a href="page-pricing.html">Pricing</a></li>
                            <li><a href="page-about.html">About</a></li>
                            <li><a href="page-career.html">Career</a></li>
                            <li><a href="page-contact.html">Contact</a></li>
                            <li class="uc-parent">
                                <a href="#">Inner Pages</a>
                                <ul class="uc-nav-sub" data-uc-nav="">
                                    <li class="uc-parent">
                                        <a href="blog.html">Blog</a>
                                        <ul class="uc-nav-sub">
                                            <li><a href="blog.html">Full Width</a></li>
                                            <li><a href="blog-2cols.html">Grid 2 Cols</a></li>
                                            <li><a href="blog-3cols.html">Grid 3 Cols</a></li>
                                            <li><a href="blog-4cols.html">Grid 4 Cols</a></li>
                                        </ul>
                                    </li>
                                    <li class="uc-parent">
                                        <a href="blog-details.html">Blog - detail</a>
                                        <ul class="uc-nav-sub">
                                            <li><a href="blog-details.html">Blog detail</a></li>
                                            <li><a href="blog-details-2.html">Blog detail - v2</a></li>
                                        </ul>
                                    </li>
                                    <li class="uc-parent">
                                        <a href="#">Useful pages</a>
                                        <ul class="uc-nav-sub">
                                            <li><a href="sign-up.html">Sign up</a></li>
                                            <li><a href="sign-in.html">Sign in</a></li>
                                            <li><a href="reset-password.html">Reset password</a></li>
                                            <li><a href="404.html">404 page</a></li>
                                            <li><a href="coming-soon.html">Coming soon</a></li>
                                        </ul>
                                    </li>
                                    <li class="uc-parent">
                                        <a href="#">Other pages</a>
                                        <ul class="uc-nav-sub">
                                            <li><a href="page-faq.html">FAQ</a></li>
                                            <li><a href="page-terms.html">Terms of use</a></li>
                                            <li><a href="page-privacy.html">Privacy policy</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="uc-parent">
                                <a href="shop.html">Shop</a>
                                <ul class="uc-nav-sub" data-uc-nav="">
                                    <li class="uc-parent">
                                        <a href="shop.html">Shop layouts</a>
                                        <ul class="uc-nav-sub">
                                            <li><a href="shop.html">Shop 4 cols</a></li>
                                            <li><a href="shop-3.html">Shop 3 cols</a></li>
                                            <li><a href="shop-2.html">Shop 2 cols</a></li>
                                            <li><a href="shop-sidebar.html">Shop with sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="shop-category.html">Archive category</a></li>
                                    <li><a href="shop-product-detail.html">Product detail</a></li>
                                    <li><a href="shop-product-detail-2.html">Product detail - v2</a></li>
                                    <li><a href="shop-cart.html">Cart</a></li>
                                    <li><a href="shop-cart-2.html">Cart - v2</a></li>
                                    <li><a href="shop-checkout.html">Checkout</a></li>
                                    <li><a href="shop-checkout-2.html">Checkout - v2</a></li>
                                    <li><a href="shop-order.html">Order confirmation</a></li>
                                </ul>
                            </li>
                            <li class="hr opacity-10 my-1"></li>
                            <li><a href="sign-up.html">Create an account</a></li>
                            <li><a href="sign-in.html">Log in</a></li>
                            <li><a href="https://themeforest.net/item/lexend-software-saas-startup-html5-template/51596504">Buy Template</a></li>
                        </ul>
                        <ul class="social-icons nav-x mt-4">
                            <li>
                                <a href="#"><i class="unicon-logo-medium icon-2"></i></a>
                                <a href="#"><i class="unicon-logo-x-filled icon-2"></i></a>
                                <a href="#"><i class="unicon-logo-instagram icon-2"></i></a>
                                <a href="#"><i class="unicon-logo-pinterest icon-2"></i></a>
                            </li>
                        </ul>
                        <div class="py-2 hstack gap-2 mt-4 bg-white dark:bg-gray-900" data-uc-sticky="position: bottom">
                            <div class="vstack gap-1">
                                <span class="fs-7 opacity-60">Select theme:</span>
                                <div class="darkmode-trigger" data-darkmode-switch="">
                                    <label class="switch">
                                        <input type="checkbox">
                                        <span class="slider fs-5"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <!--  Bottom Actions Sticky -->
            <div class="backtotop-wrap position-fixed bottom-0 end-0 z-99 m-2 vstack">
                <div class="darkmode-trigger cstack w-40px h-40px rounded-circle text-none bg-gray-100 dark:bg-gray-700 dark:text-white" data-darkmode-toggle="">
                    <label class="switch">
                        <span class="sr-only">Dark mode toggle</span>
                        <input type="checkbox">
                        <span class="slider fs-5"></span>
                    </label>
                </div>
                <a class="btn btn-sm bg-primary text-white w-40px h-40px rounded-circle" href="to_top" data-uc-backtotop>
                    <i class="icon-2 unicon-chevron-up"></i>
                </a>
            </div>
    
            <!-- Header start -->
            <div class="uc-banner-top py-1 p-2 m-0 hide-on-sticky text-center dark:from-tertiary-200 to-primary-700 dark:to-tertiary text-white dark:text-dark" data-uc-alert data-anime="opacity: [0, 1]; easing: easeInOutcubic; duration: 500; delay: 0;" style="background: linear-gradient(to right, #014b93, #014a92);">
                <a href="#" class="uc-alert-close top-0 end-0" style="margin: 14px" data-uc-close></a>
                <p>
                    The Lexend AI automation guide is here. <br class="d-block lg:d-none">
                    <a href="https://themeforest.net/item/lexend-software-saas-startup-html5-template/51596504/" class="uc-link text-white dark:text-primary border-bottom" target="_blank" rel="nofollow">Check it out!</a>
                </p>
            </div>
            <header class="uc-header header-five uc-navbar-sticky-wrap z-999" data-uc-sticky="start: 100vh; show-on-up: true; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;"  >
                <nav class="uc-navbar-container uc-navbar-float ft-tertiary  z-1" data-anime="translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;" >
                    <div class="uc-navbar-main" style="--uc-nav-height: 64px">
                        <div class="container">
                            <div class="uc-navbar min-h-64px text-gray-900 dark:text-white" data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;">
                                <div class="uc-navbar-left">
                                    <div class="uc-logo">
                                        <a href="index.html">
                                            <img class=" dark:d-none" src="../assets/images/logo-InawoCRM-Blanc-2.30b79eb395e41ca6c93a.png" alt="Inawo light" data-uc-svg style="width: 90px">
                                            <img class="text-primary d-none dark:d-block "  style="width: 140px" src="../assets/images/logo-InawoCRM-Blanc-2.30b79eb395e41ca6c93a.png" alt="Inawo dark" >
                                        </a>
                                    </div>
                                    <ul class="uc-navbar-nav gap-3 d-none lg:d-flex ltr:ms-2 rtl:me-2">
                                        <li>
                                            <a href="#">Solutions <span data-uc-navbar-parent-icon></span></a>
                                            <div class="uc-dropbar uc-dropbar-top p-0 ft-primary text-unset fs-6 fw-normal hide-scrollbar border-top rounded-0 overflow-hidden shadow-xl bg-white dark:bg-gray-900" data-uc-drop=" offset: 0; boundary: true; stretch: x; animation: uc-animation-slide-top-small; animate-out: uc-animation-slide-top-small; duration: 150;">
                                                <div class="uc-dropbar-content">
                                                    <div class="container">
                                                        <div class="uc-dropbar-inner after-bg">
                                                            <div class="row gx-5 col-match justify-between">
                                                                <div class="col-8">
                                                                    <div class="panel vstack gap-4 py-4">
                                                                        <div class="panel vstack gap-4">
                                                                            <div class="vstack gap-narrow">
                                                                                <h5 class="h5 xl:h4 fw-medium m-0">Lexend's AI Automation Platform</h5>
                                                                                <p class="fs-7 text-gray-300">AI-Powered Automation across 500+ apps</p>
                                                                            </div>
                                                                            <div class="row child-cols-6 gx-6">
                                                                                <div class="vstack gap-3">
                                                                                    <h6 class="h6 m-0"><i class="fs-7 unicon-cube fw-bold ltr:me-narrow rtl:ms-narrow"></i> Products</h6>
                                                                                    <div>
                                                                                        <a href="page-features.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                            <span class="icon rounded dark:bg-white">
                                                                                                <img class="w-32px" src="../assets/images/custom-icons/icon-01.svg" alt="icon">
                                                                                            </span>
                                                                                            <div class="panel">
                                                                                                <span class="fs-7 fw-medium mb-narrow text-inherit">Logiciel de vente et prospection</span>
                                                                                                <p class="fs-8 text-muted">Accélérez vos ventes et automatisez votre prospection avec notre logiciel</p>
                                                                                            </div>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div>
                                                                                        <a href="page-features.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                            <span class="icon rounded dark:bg-white">
                                                                                                <img class="w-32px" src="../assets/images/custom-icons/icon-02.svg" alt="icon">
                                                                                            </span>
                                                                                            <div class="panel">
                                                                                                <span class="fs-7 fw-medium mb-narrow">Logiciel de gestion et facturation</span>
                                                                                                <p class="fs-8 text-muted">Gérez vos finances et facturez facilement avec notre logiciel</p>
                                                                                            </div>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div>
                                                                                        <a href="page-features.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                            <span class="icon rounded dark:bg-white">
                                                                                                <img class="w-32px" src="../assets/images/custom-icons/icon-03.svg" alt="icon">
                                                                                            </span>
                                                                                            <div class="panel">
                                                                                                <span class="fs-7 fw-medium mb-narrow">Inawo globale</span>
                                                                                                <p class="fs-8 text-muted">Gérez vos finances et vos ventes facilement avec notre logiciel tout-en-un</p>
                                                                                            </div>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div>
                                                                                        <a href="page-features.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                            <span class="icon rounded dark:bg-white">
                                                                                                <img class="w-32px" src="../assets/images/custom-icons/icon-07.svg" alt="icon">
                                                                                            </span>
                                                                                            <div class="panel">
                                                                                                <span class="fs-7 fw-medium mb-narrow">Chatbots, Free forever</span>
                                                                                                <p class="fs-8 text-muted">Track sales & campaign performance</p>
                                                                                            </div>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div>
                                                                                        <a href="page-features.html" class="ltr:ms-6 rtl:me-6 text-none fs-8 text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                            <span class="border-bottom hover:border-primary duration-150">View all products</span>
                                                                                            <i class="fs-8 unicon-arrow-up-right fw-bold"></i>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="vstack gap-3">
                                                                                    <h6 class="h6 m-0"><i class="fs-7 unicon-gamification fw-bold ltr:me-narrow rtl:ms-narrow"></i> Professional Solutions</h6>
                                                                                    <div>
                                                                                        <a href="page-features.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                            <span class="icon rounded dark:bg-white">
                                                                                                <img class="w-32px" src="../assets/images/custom-icons/icon-04.svg" alt="icon">
                                                                                            </span>
                                                                                            <div class="panel">
                                                                                                <span class="fs-7 fw-medium mb-narrow">AI-Powered Tools</span>
                                                                                                <p class="fs-8 text-muted">Say hello to your AI growth assistant</p>
                                                                                            </div>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div>
                                                                                        <a href="page-features.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                            <span class="icon rounded dark:bg-white">
                                                                                                <img class="w-32px" src="../assets/images/custom-icons/icon-05.svg" alt="icon">
                                                                                            </span>
                                                                                            <div class="panel">
                                                                                                <span class="fs-7 fw-medium mb-narrow">E-commerce and retail</span>
                                                                                                <p class="fs-8 text-muted">Amplify the conversation across channels</p>
                                                                                            </div>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div>
                                                                                        <a href="page-features.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                            <span class="icon rounded dark:bg-white">
                                                                                                <img class="w-32px" src="../assets/images/custom-icons/icon-06.svg" alt="icon">
                                                                                            </span>
                                                                                            <div class="panel">
                                                                                                <span class="fs-7 fw-medium mb-narrow">Large Community</span>
                                                                                                <p class="fs-8 text-muted">Our services offerings</p>
                                                                                            </div>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div>
                                                                                        <a href="page-features.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                            <span class="icon rounded dark:bg-white">
                                                                                                <img class="w-32px" src="../assets/images/custom-icons/icon-08.svg" alt="icon">
                                                                                            </span>
                                                                                            <div class="panel">
                                                                                                <span class="fs-7 fw-medium mb-narrow">AI-Powered Automation</span>
                                                                                                <p class="fs-8 text-muted">Our services offerings</p>
                                                                                            </div>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div>
                                                                                        <a href="page-features.html" class="ltr:ms-6 rtl:me-6 text-none fs-8 text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                            <span class="border-bottom hover:border-primary duration-150">View all solutions</span>
                                                                                            <i class="fs-8 unicon-arrow-up-right fw-bold"></i>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-4">
                                                                    <div class="panel vstack gap-4 p-5 bg-gray-25 dark:bg-gray-800 border-start">
                                                                        <div class="panel category-section">
                                                                            <h5 class="h6">Get started is Easy!</h5>
                                                                            <ul class="uc-nav uc-navbar-dropdown-nav fs-7 fw-normal row child-cols-12">
                                                                                <li>
                                                                                    <a href="page-contact.html">Hire an Expert</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#">Customer stories</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#">Resources</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="blog-sidebar.html">Blog</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="page-career.html">Career</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="page-contact.html">Help Center</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="panel category-section">
                                                                            <h5 class="h6">Terms and privacy</h5>
                                                                            <ul class="uc-nav uc-navbar-dropdown-nav fs-7 fw-normal row child-cols-12">
                                                                                <li>
                                                                                    <a href="page-terms.html">Terms of service</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="page-privacy.html">Privacy Policy</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="uc-dropbar-footer py-2 xl:py-3 border-top bg-white dark:bg-gray-900 dark:text-white">
                                                    <div class="container">
                                                        <ul class="nav-x gap-4 fs-8 fw-medium">
                                                            <li>
                                                                <a href="#"><i class="fs-8 unicon-api fw-bold"></i><span class="border-bottom hover:border-primary duration-150">Explore Apps</span></a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><i class="fs-8 unicon-airplay fw-bold"></i><span class="border-bottom hover:border-primary duration-150">AI Solutions</span></a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><i class="fs-8 unicon-cloud-lightning fw-bold"></i><span class="border-bottom hover:border-primary duration-150">Join Lexend Early Access</span></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="page-pricing-2.html">Tarifs</a>
                                        </li>
                                        <li>
                                            <a href="#">Ressources<span data-uc-navbar-parent-icon></span></a>
                                            <div class="uc-dropbar uc-dropbar-top p-0 ft-primary text-unset fs-6 fw-normal hide-scrollbar border-top rounded-0 overflow-hidden shadow-xl bg-white dark:bg-gray-900" data-uc-drop=" offset: 0; boundary: true;  stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
                                                <div class="uc-dropbar-content">
                                                    <div class="container">
                                                        <div class="uc-dropbar-inner after-bg">
                                                            <div class="row gx-5 col-match justify-between">
                                                                <div class="col-8">
                                                                    <div class="panel vstack gap-4 py-4">
                                                                        <div class="vstack gap-narrow flex-none">
                                                                            <h5 class="h5 xl:h4 fw-medium m-0">Workflow quick-start automation guide</h5>
                                                                            <p class="fs-7 text-gray-300">How Lexend can help you automate your work</p>
                                                                        </div>
                                                                        <div class="row child-cols-4 gx-4 col-match justify-between">
                                                                            <div>
                                                                                <h6 class="h6 mb-3"><i class="fs-7 unicon-glyph-square-fill fw-bold ltr:me-narrow rtl:ms-narrow"></i> Automation</h6>
                                                                                <ul class="uc-nav uc-navbar-dropdown-nav vstack gap-2">
                                                                                    <li>
                                                                                        <a class="hstack items-start gap-2" href="blog-sidebar.html">
                                                                                            <div class="cstack min-w-32px h-32px rounded bg-tertiary"><i class="icon-1 unicon-checkmark fw-bold text-primary"></i></div>
                                                                                            <span class="vstack gap-narrow mt-nnarrow">
                                                                                                <b class="fw-medium dark:text-white">Blog</b>
                                                                                                <span class="fs-8 text-muted">Découvrez toute l'actualité liés au marketing, à la vente et à la gestion</span>
                                                                                            </span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a class="hstack items-start gap-2" href="blog-sidebar.html">
                                                                                            <div class="cstack min-w-32px h-32px rounded bg-tertiary"><i class="icon-1 unicon-chart-pie fw-bold text-primary"></i></div>
                                                                                            <span class="vstack gap-narrow mt-nnarrow">
                                                                                                <b class="fw-medium dark:text-white">Ressources téléchargeable</b>
                                                                                                <span class="fs-8 text-muted">Téléchargez nos ebooks, livres blancs, templates ou documents professionnels</span>
                                                                                            </span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a class="hstack items-start gap-2" href="blog-sidebar.html">
                                                                                            <div class="cstack min-w-32px h-32px rounded bg-tertiary"><i class="icon-1 unicon-increase-level fw-bold text-primary"></i></div>
                                                                                            <span class="vstack gap-narrow mt-nnarrow">
                                                                                                <b class="fw-medium dark:text-white">Evènements</b>
                                                                                                <span class="fs-8 text-muted">Suivez nos webinaires, nos évènements ou nos rendez-vous</span>
                                                                                            </span>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div>
                                                                                <h6 class="h6 mb-3"><i class="fs-7 unicon-glyph-circle-fill fw-bold ltr:me-narrow rtl:ms-narrow"></i> Teaming</h6>
                                                                                <ul class="uc-nav uc-navbar-dropdown-nav vstack gap-2">
                                                                                    <li>
                                                                                        <a class="hstack items-start gap-2" href="page-features.html">
                                                                                            <div class="cstack min-w-32px h-32px rounded bg-tertiary"><i class="icon-1 unicon-chart-venn-diagram fw-bold text-primary"></i></div>
                                                                                            <span class="vstack gap-narrow mt-nnarrow">
                                                                                                <b class="fw-medium dark:text-white">Témoignages et étude de cas</b>
                                                                                                <span class="fs-8 text-muted">Découvrez les cas d'utilisation de notre logiciel et les témoignages utilisateurs</span>
                                                                                            </span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a class="hstack items-start gap-2" href="page-features.html">
                                                                                            <div class="cstack min-w-32px h-32px rounded bg-tertiary"><i class="icon-1 unicon-chat fw-bold text-primary"></i></div>
                                                                                            <span class="vstack gap-narrow mt-nnarrow">
                                                                                                <b class="fw-medium dark:text-white">Chatbots</b>
                                                                                                <span class="fs-8 text-muted">Assign tasks, share files, and communicate with your team.</span>
                                                                                            </span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a class="hstack items-start gap-2" href="page-features.html">
                                                                                            <div class="cstack min-w-32px h-32px rounded bg-tertiary"><i class="icon-1 unicon-checkmark fw-bold text-primary"></i></div>
                                                                                            <span class="vstack gap-narrow mt-nnarrow">
                                                                                                <b class="fw-medium dark:text-white">Blog</b>
                                                                                                <span class="fs-8 text-muted">Découvrez toute l'actualité liés au marketing, à la vente et à la gestion</span>
                                                                                            </span>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div>
                                                                                <h6 class="h6 mb-3"><i class="fs-7 unicon-glyph-caution fw-bold ltr:me-narrow rtl:ms-narrow"></i> Use Case</h6>
                                                                                <ul class="uc-nav uc-navbar-dropdown-nav vstack gap-2">
                                                                                    <li>
                                                                                        <a class="hstack items-start gap-2" href="page-features.html">
                                                                                            <div class="cstack min-w-32px h-32px rounded bg-tertiary"><i class="icon-1 unicon-chart-pie fw-bold text-primary"></i></div>
                                                                                            <span class="vstack gap-narrow mt-nnarrow">
                                                                                                <b class="fw-medium dark:text-white">Ressources téléchargeable</b>
                                                                                                <span class="fs-8 text-muted">Téléchargez nos ebooks, livres blancs, templates ou documents professionnels</span>
                                                                                            </span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a class="hstack items-start gap-2" href="page-features.html">
                                                                                            <div class="cstack min-w-32px h-32px rounded bg-tertiary"><i class="icon-1 unicon-increase-level fw-bold text-primary"></i></div>
                                                                                            <span class="vstack gap-narrow mt-nnarrow">
                                                                                                <b class="fw-medium dark:text-white">Spreadsheets</b>
                                                                                                <span class="fs-8 text-muted">Suite of tools that cover all aspects of your business.</span>
                                                                                            </span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a class="hstack items-start gap-2" href="page-features.html">
                                                                                            <div class="cstack min-w-32px h-32px rounded bg-tertiary"><i class="icon-1 unicon-chart-venn-diagram fw-bold text-primary"></i></div>
                                                                                            <span class="vstack gap-narrow mt-nnarrow">
                                                                                                <b class="fw-medium dark:text-white">Collaboration</b>
                                                                                                <span class="fs-8 text-muted">Assign tasks, share files, and communicate with your team.</span>
                                                                                            </span>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-4">
                                                                    <div class="panel vstack gap-4 p-5 bg-gray-25 dark:bg-gray-800 border-start">
                                                                        <div class="row child-cols gx-2">
                                                                            <div class="col-4">
                                                                                <div class="featured-image panel" data-uc-lightbox="video-autoplay: true;">
                                                                                    <figure class="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                                                                                        <img class="media-cover image uc-transition-scale-up uc-transition-opaque" src="../assets/images/common/login.webp" alt="Image">
                                                                                    </figure>
                                                                                    <button class="btn btn-md btn-alt-primary bg-tertiary p-0 w-32px h-32px position-absolute bottom-0 ltr:start-0 rtl:end-0 m-1"><i class="icon-narrow unicon-play-filled-alt text-primary"></i></button>
                                                                                    <a href="../assets/images/media/lexend_vid.webm" data-caption="Easy project managment of any complexity." data-attrs="width: 640; height: 480;" class="position-cover"></a>
                                                                                </div>
                                                                            </div>
                                                                            <div>
                                                                                <div class="vstack gap-1">
                                                                                    <span class="fs-6 fw-bold m-0 text-dark dark:text-white">Say goodbye to the hassle of multi-tasks</span>
                                                                                    <p class="fs-7">Managing multiple tasks with AI automation.</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="panel category-section">
                                                                            <h5 class="h6">Start with ease!</h5>
                                                                            <ul class="uc-nav uc-navbar-dropdown-nav fs-7 fw-normal row child-cols-12">
                                                                                <li>
                                                                                    <a href="page-contact.html">Hire an Expert</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#">Customer stories</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#">Resources</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="blog-sidebar.html">Blog</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="page-career.html">Career</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="page-contact.html">Help Center</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="uc-dropbar-footer py-2 xl:py-3 border-top bg-white dark:bg-gray-900 dark:text-white">
                                                    <div class="container">
                                                        <ul class="nav-x gap-4 fs-8 fw-medium">
                                                            <li>
                                                                <a href="#"><i class="fs-8 unicon-api fw-bold"></i><span class="border-bottom hover:border-primary duration-150">Explore Apps</span></a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><i class="fs-8 unicon-airplay fw-bold"></i><span class="border-bottom hover:border-primary duration-150">AI Solutions</span></a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><i class="fs-8 unicon-cloud-lightning fw-bold"></i><span class="border-bottom hover:border-primary duration-150">Join Lexend Early Access</span></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        
                                        <li>
                                            <a href="#">A propos<span data-uc-navbar-parent-icon></span></a>
                                            <div class="uc-dropbar uc-dropbar-top p-0 ft-primary text-unset fs-6 fw-normal hide-scrollbar border-top rounded-0 overflow-hidden shadow-xl bg-white dark:bg-gray-900" data-uc-drop=" offset: 0; boundary: true; stretch: x; animation: uc-animation-slide-top-small; animate-out: uc-animation-slide-top-small; duration: 150;">
                                                <div class="uc-dropbar-content">
                                                    <div class="container">
                                                        <div class="uc-dropbar-inner after-bg">
                                                            <div class="row gx-5 col-match justify-between">
                                                                <div class="col-8">
                                                                    <div class="panel vstack gap-4 py-4">
                                                                        <div class="panel vstack gap-4">
                                                                            <div class="vstack gap-narrow">
                                                                                <h5 class="h5 xl:h4 fw-medium m-0">Lexend's AI Automation Platform</h5>
                                                                                <p class="fs-7 text-gray-300">AI-Powered Automation across 500+ apps</p>
                                                                            </div>
                                                                            <div class="row child-cols-6 gx-6">
                                                                                <div class="vstack gap-3">
                                                                                    <h6 class="h6 m-0"><i class="fs-7 unicon-cube fw-bold ltr:me-narrow rtl:ms-narrow"></i> Products</h6>
                                                                                    <div>
                                                                                        <a href="page-features.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                            <span class="icon rounded dark:bg-white">
                                                                                                <img class="w-32px" src="../assets/images/custom-icons/icon-01.svg" alt="icon">
                                                                                            </span>
                                                                                            <div class="panel">
                                                                                                <span class="fs-7 fw-medium mb-narrow text-inherit">A propos de inawo</span>
                                                                                                <p class="fs-8 text-muted">Qui sommes nous et que voullons nous offrir</p>
                                                                                            </div>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div>
                                                                                        <a href="page-features.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                            <span class="icon rounded dark:bg-white">
                                                                                                <img class="w-32px" src="../assets/images/custom-icons/icon-02.svg" alt="icon">
                                                                                            </span>
                                                                                            <div class="panel">
                                                                                                <span class="fs-7 fw-medium mb-narrow">Nous recrutons</span>
                                                                                                <p class="fs-8 text-muted">Découvrez les offres de travail au sein de notre enterprise</p>
                                                                                            </div>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div>
                                                                                        <a href="page-features.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                            <span class="icon rounded dark:bg-white">
                                                                                                <img class="w-32px" src="../assets/images/custom-icons/icon-03.svg" alt="icon">
                                                                                            </span>
                                                                                            <div class="panel">
                                                                                                <span class="fs-7 fw-medium mb-narrow">Partenariats</span>
                                                                                                <p class="fs-8 text-muted">Rejoignez le programme de partenariat inawo, notre réseau de distributeur</p>
                                                                                            </div>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div>
                                                                                        <a href="page-features.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                            <span class="icon rounded dark:bg-white">
                                                                                                <img class="w-32px" src="../assets/images/custom-icons/icon-07.svg" alt="icon">
                                                                                            </span>
                                                                                            <div class="panel">
                                                                                                <span class="fs-7 fw-medium mb-narrow">Témoignages et étude de cas</span>
                                                                                                <p class="fs-8 text-muted">D témoignages utilisateurs</p>
                                                                                            </div>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div>
                                                                                        <a href="page-features.html" class="ltr:ms-6 rtl:me-6 text-none fs-8 text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                            <span class="border-bottom hover:border-primary duration-150">View all products</span>
                                                                                            <i class="fs-8 unicon-arrow-up-right fw-bold"></i>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="vstack gap-3">
                                                                                    <h6 class="h6 m-0"><i class="fs-7 unicon-gamification fw-bold ltr:me-narrow rtl:ms-narrow"></i> Professional Solutions</h6>
                                                                                    <div>
                                                                                        <a href="page-features.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                            <span class="icon rounded dark:bg-white">
                                                                                                <img class="w-32px" src="../assets/images/custom-icons/icon-04.svg" alt="icon">
                                                                                            </span>
                                                                                            <div class="panel">
                                                                                                <span class="fs-7 fw-medium mb-narrow">AI-Powered Tools</span>
                                                                                                <p class="fs-8 text-muted">Say hello to your AI growth assistant</p>
                                                                                            </div>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div>
                                                                                        <a href="page-features.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                            <span class="icon rounded dark:bg-white">
                                                                                                <img class="w-32px" src="../assets/images/custom-icons/icon-05.svg" alt="icon">
                                                                                            </span>
                                                                                            <div class="panel">
                                                                                                <span class="fs-7 fw-medium mb-narrow">E-commerce and retail</span>
                                                                                                <p class="fs-8 text-muted">Amplify the conversation across channels</p>
                                                                                            </div>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div>
                                                                                        <a href="page-features.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                            <span class="icon rounded dark:bg-white">
                                                                                                <img class="w-32px" src="../assets/images/custom-icons/icon-06.svg" alt="icon">
                                                                                            </span>
                                                                                            <div class="panel">
                                                                                                <span class="fs-7 fw-medium mb-narrow">Large Community</span>
                                                                                                <p class="fs-8 text-muted">Our services offerings</p>
                                                                                            </div>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div>
                                                                                        <a href="page-features.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                            <span class="icon rounded dark:bg-white">
                                                                                                <img class="w-32px" src="../assets/images/custom-icons/icon-08.svg" alt="icon">
                                                                                            </span>
                                                                                            <div class="panel">
                                                                                                <span class="fs-7 fw-medium mb-narrow">AI-Powered Automation</span>
                                                                                                <p class="fs-8 text-muted">Our services offerings</p>
                                                                                            </div>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div>
                                                                                        <a href="page-features.html" class="ltr:ms-6 rtl:me-6 text-none fs-8 text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                            <span class="border-bottom hover:border-primary duration-150">View all solutions</span>
                                                                                            <i class="fs-8 unicon-arrow-up-right fw-bold"></i>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-4">
                                                                    <div class="panel vstack gap-4 p-5 bg-gray-25 dark:bg-gray-800 border-start">
                                                                        <div class="panel category-section">
                                                                            <h5 class="h6">Contactez-nous</h5>
                                                                            <ul class="uc-nav uc-navbar-dropdown-nav fs-7 fw-normal row child-cols-12">
                                                                                <li>
                                                                                    <a href="page-contact.html">Laissez nous un message pour toute demande d'informations</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#">Customer stories</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#">Resources</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="blog-sidebar.html">Blog</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="page-career.html">Career</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="page-contact.html">Help Center</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="panel category-section">
                                                                            <h5 class="h6">Nos offres de services</h5>
                                                                            <ul class="uc-nav uc-navbar-dropdown-nav fs-7 fw-normal row child-cols-12">
                                                                                <li>
                                                                                    <a href="page-terms.html">Nous accompagnons des entreprises et des institutions</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="page-privacy.html">Privacy Policy</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="uc-dropbar-footer py-2 xl:py-3 border-top bg-white dark:bg-gray-900 dark:text-white">
                                                    <div class="container">
                                                        <ul class="nav-x gap-4 fs-8 fw-medium">
                                                            <li>
                                                                <a href="#"><i class="fs-8 unicon-api fw-bold"></i><span class="border-bottom hover:border-primary duration-150">Explore Apps</span></a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><i class="fs-8 unicon-airplay fw-bold"></i><span class="border-bottom hover:border-primary duration-150">AI Solutions</span></a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><i class="fs-8 unicon-cloud-lightning fw-bold"></i><span class="border-bottom hover:border-primary duration-150">Join Lexend Early Access</span></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <!-- <li>
                                            <a href="components.html"><i class="icon unicon-cube fw-bold ltr:me-narrow rtl:ms-narrow text-primary dark:text-tertiary"></i><span>All components</span></a>
                                        </li> -->
                                    </ul>
                                </div>
                                <div class="uc-navbar-right">
                                    <!-- DEBUT-->
                                    <li class="d-inline-block">
                                        <a href="#" class="hstack gap-1 text-none fw-medium">
                                            <i class="icon icon-1 unicon-wikis"></i>
                                            <span>Fr</span>
                                        </a>
                                         <div class="py-1 bg-white dark:bg-gray-800 shadow-xs w-200px" data-uc-drop="mode: click; offset: 0; pos: top-right; boundary: !.uc-navbar-container; animation: uc-animation-slide-top-small; duration: 150;">
                                            <ul class="nav-y gap-0 fs-7">
                                                <li>
                                                    <a href="../en/index.html" class="w-100 p-1 px-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"><img class="w-20px me-1 rtl:me-0 rtl:ms-1" src="../assets/images/common/en.svg" alt="English">English</a>
                                                </li>
                                                <li>
                                                    <a href="../fr/" class="w-100 p-1 px-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"><img class="w-20px me-1 rtl:me-0 rtl:ms-1" src="../assets/images/common/fr.svg" alt="French">Français</a>
                                                </li> 
    
                                         </div> 
        
                                    </li>
                                    
                                    <a class="btn btn-sm  text-white dark:bg-white dark:text-primary dark:hover:bg-white fw-bold rounded-pill lg:px-2 text-none hover:contrast-shadow d-none lg:d-inline-flex" style="background-color: #014a92;" href="inscription.html">Créer un compte gratuit</a>
                                    <a class="d-block lg:d-none" href="#uc-menu-panel" data-uc-navbar-toggle-icon data-uc-toggle></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
`

document.addEventListener("DOMContentLoaded", ()=>{
    const header = document.querySelector("#header")
    header.innerHTML = headerHTML
})