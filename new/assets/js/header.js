const headerHTML = `
    <div id="infoline-dynamic" class="uc-banner-top py-1 p-2 m-0 hide-on-sticky text-center dark:from-tertiary-200 to-primary-700 dark:to-tertiary text-white dark:text-dark"
        data-uc-alert data-anime="opacity: [0, 1]; easing: easeInOutcubic; duration: 500; delay: 0;"
        style="background-color: #2a4743;">
        <a href="#" class="uc-alert-close top-0 end-0" style="margin: 14px" data-uc-close></a>
        <p class="fs-7" id="infoline-content">
            <!-- Le texte dynamique sera injecté ici -->
        </p>
    </div>

    <!-- Styles pour le dropdown utilisateur -->
    <style>
        .user-dropdown {
            position: relative;
            display: inline-block;
        }
        
        .user-dropdown-btn {
            background-color: transparent;
            border: 1px solid black;
            border-radius: 25px;
            padding: 6px 12px;
            display: flex;
            align-items: center;
            gap: 6px;
            cursor: pointer;
            transition: all 0.2s ease;
            min-width: 70px;
            color: white;
            font-weight: 600;
            font-size: 14px;
        }
        
        .user-dropdown-btn:hover {
            background-color: transparent;
            border-color: black;
        }
        
        .user-dropdown-btn:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(42, 71, 67, 0.25);
        }
        
        .user-icon {
            width: 18px;
            height: 18px;
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: black;
            font-size: 18px;
            border: 1px solid #e0e0e0;   /* fine bordure pour contraste */
        }
        
        .dropdown-arrow {
    font-size: 18px;
    color: black; /* même couleur que l’icône langue */
    transition: transform 0.2s cubic-bezier(.4,2,.6,1);
    margin-left: 4px;
    display: inline-block;
    vertical-align: middle;
}
.user-dropdown.show .dropdown-arrow {
    transform: rotate(180deg);
}
        
        .dropdown-menu-custom {
            position: absolute;
            top: 100%;
            right: 0;
            background-color: white;
            border: 1px solid #e9ecef;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            margin-top: 4px;
            padding: 8px 0;
            display: none;
            z-index: 1000;
            min-width: 200px;
        }
        
        .dropdown-menu-custom.show {
            display: block;
        }
        
        .dropdown-item-custom {
            padding: 8px 16px;
            color: #212529;
            text-decoration: none;
            display: block;
            transition: background-color 0.2s ease;
            font-size: 14px;
        }
        
        .dropdown-item-custom:hover {
            background-color: #f8f9fa;
            color: #212529;
            text-decoration: none;
        }
        
        .dropdown-divider-custom {
            height: 1px;
            background-color: #e9ecef;
            margin: 4px 0;
        }
        
        /* Responsive adjustments */
        @media (max-width: 991px) {
            .user-dropdown {
                display: none !important;
            }
        }
    </style>

  <!-- Modals start-->
    <!--  GDPR modal -->
    <div id="uc-gdpr-notification" class="uc-gdpr-notification uc-notification min-w-1/2 uc-notification-bottom-left lg:m-2">
        <div class="uc-notification-message vstack lg:hstack items-end gap-2 lg:gap-4 lg:p-3 bg-white text-dark border rounded-1-5 min-w-1/2">
            <a id="uc-close-gdpr-notification" class="uc-notification-close text-dark" data-uc-close></a>
            <div class="vstack">
                <h2 class="h5 ft-primary fw-bold -ls-1 m-0 text-dark">GDPR Compliance</h2>
                <p class="fs-6 mt-1">We use cookies to ensure you get the best experience on our website. By continuing to use our site, you accept our use of cookies, <a href="../fr/Politique-de-confidentialite.html" class="uc-link text-underline">privacy policy</a> and <a href="../fr/terms.html" class="uc-link text-underline">terms of service</a>.</p>
            </div>
            <button class="btn btn-sm btn-primary px-2" id="uc-accept-gdpr">Accept</button>
        </div>
    </div>

    <!--  Search modal -->
    <div id="uc-search-modal" class="uc-modal-full uc-modal" data-uc-modal="overlay: true">
        <div class="uc-modal-dialog d-flex justify-center bg-white text-dark dark:bg-gray-900 dark:text-white" data-uc-height-viewport="">
            <div class="uc-modal-close-full m-1 p-0 vstack gap-narrow text-center">
                <button class="icon-3 btn btn-md btn-dark dark:bg-white dark:text-dark w-24px sm:w-32px h-24px sm:h-32px rounded-circle flex-1" type="button">
                    <i class="unicon-close"></i>
                </button>
                <span class="ft-tertiary fs-7">ESC</span>
            </div>

            <div class="panel w-100 sm:w-500px px-2 py-10">
                <h3 class="h4 sm:h2 text-center">What are you looking for?</h3>
                <form class="hstack gap-1 mt-4 border-bottom p-narrow dark:border-gray-700" action="?">
                    <span class="d-inline-flex justify-center items-center w-24px sm:w-40 h-24px sm:h-40px opacity-50"><i class="unicon-search icon-3"></i></span>
                    <input type="search" name="q" class="form-control-plaintext ms-1 fs-6 sm:fs-5 w-full dark:text-white" placeholder="Type your keyword.." aria-label="Search" autofocus>
                </form>
            </div>
        </div>
    </div>

    <!--  Newsletter modal -->
    <div id="uc-newsletter-modal" data-uc-modal="overlay: true">
        <div class="uc-modal-dialog w-800px bg-white text-dark dark:bg-gray-900 dark:text-white rounded-3 p-1 overflow-hidden">
            <button class="uc-modal-close-default p-0 icon-3 btn border-0 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all" type="button">
                <i class="unicon-close"></i>
            </button>
            <div class="row md:child-cols-6 col-match g-0">
                <div class="d-none md:d-flex">
                    <div class="position-relative w-100 ratio-1x1 rounded-2 overflow-hidden">
                        <img class="media-cover" src="../assets/images/common/newsletter.jpg" alt="Newsletter image">
                    </div>
                </div>
                <div>
                    <div class="panel vstack self-center p-4 md:py-8 text-center">
                        <h3 class="h3 md:h2">Subscribe to our Newsletter</h3>
                        <p class="ft-tertiary">Join 10k+ people to get notified about new posts, news and updates.</p>
                        <div class="panel mt-2 lg:mt-4">
                            <form class="vstack gap-1">
                                <input type="email" class="form-control form-control-sm w-full fs-6 bg-white dark:border-white dark:border-gray-700" placeholder="Your email address..">
                                <button type="submit" class="btn btn-sm btn-primary">Sign up</button>
                            </form>
                            <p class="fs-7 mt-2">Do not worry we don't spam!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--  Acccount modal -->
    <div id="uc-account-modal" data-uc-modal="overlay: true">
        <div class="uc-modal-dialog lg:max-w-500px bg-secondary text-dark dark:bg-gray-800 dark:text-white rounded">
            <button class="uc-modal-close-default top-0 ltr:end-0 rtl:start-0 rtl:end-auto m-2 p-0 border-0 icon-2 lg:icon-3 btn btn-md dark:text-white transition-transform duration-150 hover:rotate-90" type="button">
                <i class="unicon-close"></i>
            </button>

            <div class="panel vstack gap-2 md:gap-4 text-center">
                <ul class="account-tabs-nav nav-x justify-center h6 py-2 border-bottom d-none" data-uc-switcher="animation: uc-animation-slide-bottom-small, uc-animation-slide-top-small">
                    <li><a href="#">Sign in</a></li>
                    <li><a href="#">Sign up</a></li>
                    <li><a href="#">Reset password</a></li>
                    <li><a href="#">Terms of use</a></li>
                </ul>
                <div class="account-tabs-content uc-switcher px-3 lg:px-4 py-4 lg:py-8 m-0 lg:mx-auto vstack justify-center items-center">
                    <div class="w-100">
                        <div class="panel vstack justify-center items-center gap-2 sm:gap-4 text-center">
                            <h4 class="h5 lg:h4 m-0">Log in</h4>
                            <div class="panel vstack gap-4 w-100 sm:w-350px mx-auto">
                                <form class="vstack gap-2">
                                    <input class="form-control h-48px w-full bg-white dark:border-white dark:text-dark" type="email" placeholder="Your email" required>
                                    <input class="form-control h-48px w-full bg-white dark:border-white dark:text-dark" type="password" placeholder="Password" required>
                                    <div class="hstack justify-between items-start text-start">
                                        <div class="form-check text-start rtl:text-end">
                                            <input class="form-check-input rounded-0 dark:bg-gray-900 dark:text-white dark:border-gray-700" type="checkbox" id="inputCheckRemember">
                                            <label class="hstack justify-between form-check-label fs-7 sm:fs-6" for="inputCheckRemember">Remember me?</label>
                                        </div>
                                        <a href="#" class="uc-link" data-uc-switcher-item="2">Forgot password</a>
                                    </div>
                                    <button class="btn btn-primary btn-md text-white lg:mt-2" type="submit">Log in</button>
                                </form>
                                <div class="panel">
                                    <hr class="m-0">
                                    <span class="position-absolute top-50 start-50 translate-middle p-1 fs-7 text-uppercase bg-white dark:bg-gray-800">Or</span>
                                </div>
                                <div class="hstack gap-2">
                                    <a href="#google" class="hstack items-center justify-center flex-1 gap-1 h-48px text-none rounded border border-gray-900 dark:border-white border-opacity-10">
                                        <i class="icon icon-1 unicon-logo-google"></i>
                                    </a>
                                    <a href="#facebook" class="hstack items-center justify-center flex-1 gap-1 h-48px text-none rounded border border-gray-900 dark:border-white border-opacity-10">
                                        <i class="icon icon-1 unicon-logo-facebook"></i>
                                    </a>
                                    <a href="#x" class="hstack items-center justify-center flex-1 gap-1 h-48px text-none rounded border border-gray-900 dark:border-white border-opacity-10">
                                        <i class="icon icon-1 unicon-logo-x-filled"></i>
                                    </a>
                                </div>
                            </div>
                            <p class="fs-7 sm:fs-6">Have no account yet? <a class="uc-link" href="#" data-uc-switcher-item="1">Sign up</a></p>
                        </div>
                    </div>
                    <div class="w-100">
                        <div class="panel vstack justify-center items-center gap-2 sm:gap-4 text-center">
                            <h4 class="h5 lg:h4 m-0">Create an account</h4>
                            <div class="panel vstack gap-4 w-100 sm:w-350px mx-auto">
                                <form class="vstack gap-2">
                                    <input class="form-control h-48px w-full bg-white dark:border-white dark:text-dark" type="text" placeholder="Full name" required>
                                    <input class="form-control h-48px w-full bg-white dark:border-white dark:text-dark" type="email" placeholder="Your email" required>
                                    <input class="form-control h-48px w-full bg-white dark:border-white dark:text-dark" type="password" placeholder="Password" required>
                                    <input class="form-control h-48px w-full bg-white dark:border-white dark:text-dark" type="password" placeholder="Re-enter Password" required>
                                    <div class="hstack text-start">
                                        <div class="form-check text-start rtl:text-end">
                                            <input class="form-check-input rounded-0 dark:bg-gray-900 dark:text-white dark:border-gray-700" type="checkbox" required>
                                            <label class="hstack justify-between form-check-label fs-7 sm:fs-6">I read and accept the <a href="#" class="uc-link ltr:ms-narrow rtl:me-narrow" data-uc-switcher-item="3">terms of use</a>. </label>
                                        </div>
                                    </div>
                                    <button class="btn btn-primary btn-md text-white lg:mt-2" type="submit">Sign up</button>
                                </form>
                                <div class="panel">
                                    <hr class="m-0">
                                    <span class="position-absolute top-50 start-50 translate-middle p-1 fs-7 text-uppercase bg-white dark:bg-gray-800">Or</span>
                                </div>
                                <div class="hstack gap-2">
                                    <a href="#google" class="hstack items-center justify-center flex-1 gap-1 h-48px text-none rounded border border-gray-900 dark:border-white border-opacity-10">
                                        <i class="icon icon-1 unicon-logo-google"></i>
                                    </a>
                                    <a href="#facebook" class="hstack items-center justify-center flex-1 gap-1 h-48px text-none rounded border border-gray-900 dark:border-white border-opacity-10">
                                        <i class="icon icon-1 unicon-logo-facebook"></i>
                                    </a>
                                    <a href="#x" class="hstack items-center justify-center flex-1 gap-1 h-48px text-none rounded border border-gray-900 dark:border-white border-opacity-10">
                                        <i class="icon icon-1 unicon-logo-x-filled"></i>
                                    </a>
                                </div>
                            </div>
                            <p class="fs-7 sm:fs-6">Already have an account? <a class="uc-link" href="#" data-uc-switcher-item="0">Log in</a></p>
                        </div>
                    </div>
                    <div class="w-100">
                        <div class="panel vstack justify-center items-center gap-2 sm:gap-4 text-center">
                            <h4 class="h5 lg:h4 m-0">Reset password</h4>
                            <div class="panel w-100 sm:w-350px">
                                <form class="vstack gap-2">
                                    <input class="form-control h-48px w-full bg-white dark:border-white dark:text-dark" type="email" placeholder="Your email" required>
                                    <div class="form-check text-start rtl:text-end">
                                        <input class="form-check-input rounded-0 dark:bg-gray-900 dark:text-white dark:border-gray-700" type="checkbox" id="inputCheckVerify" required>
                                        <label class="form-check-label fs-7 sm:fs-6" for="inputCheckVerify"> <span>I'm not a robot</span>. </label>
                                    </div>
                                    <button class="btn btn-primary btn-md text-white lg:mt-2" type="submit">Reset a password</button>
                                </form>
                            </div>
                            <p class="fs-7 sm:fs-6 mt-2 sm:m-0">Remember your password? <a class="uc-link" href="#" data-uc-switcher-item="0">Log in</a></p>
                        </div>
                    </div>
                    <div class="w-100">
                        <div class="panel vstack justify-center items-center gap-2 sm:gap-4">
                            <h4 class="h5 lg:h4 m-0">Terms of use</h4>
                            <div class="page-content panel fs-6 text-start max-h-400px overflow-scroll">
                                <p>Terms of use dolor sit amet consectetur, adipisicing elit. Recusandae provident ullam aperiam quo ad non corrupti sit vel quam repellat ipsa quod sed, repellendus adipisci, ducimus ea modi odio assumenda.</p>
                                <h5 class="h6 md:h5 mt-3 mb-1">Disclaimers</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, cum esse possimus officiis amet ea voluptatibus libero! Dolorum assumenda esse, deserunt ipsum ad iusto! Praesentium error nobis tenetur at, quis nostrum facere excepturi architecto totam.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, soluta alias eaque modi ipsum sint iusto fugiat vero velit rerum.</p>
                                <h5 class="h6 md:h5 mt-3 mb-1">Limitation on Liability</h5>
                                <p>Sequi, cum esse possimus officiis amet ea voluptatibus libero! Dolorum assumenda esse, deserunt ipsum ad iusto! Praesentium error nobis tenetur at, quis nostrum facere excepturi architecto totam.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, soluta alias eaque modi ipsum sint iusto fugiat vero velit rerum.</p>
                                <h5 class="h6 md:h5 mt-3 mb-1">Copyright Policy</h5>
                                <p>Dolor sit amet consectetur adipisicing elit. Sequi, cum esse possimus officiis amet ea voluptatibus libero! Dolorum assumenda esse, deserunt ipsum ad iusto! Praesentium error nobis tenetur at, quis nostrum facere excepturi architecto totam.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, soluta alias eaque modi ipsum sint iusto fugiat vero velit rerum.</p>
                                <h5 class="h6 md:h5 mt-3 mb-1">General</h5>
                                <p>Sit amet consectetur adipisicing elit. Sequi, cum esse possimus officiis amet ea voluptatibus libero! Dolorum assumenda esse, deserunt ipsum ad iusto! Praesentium error nobis tenetur at, quis nostrum facere excepturi architecto totam.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, soluta alias eaque modi ipsum sint iusto fugiat vero velit rerum.</p>
                            </div>
                            <p class="fs-7 sm:fs-6">Do you agree to our terms? <a class="uc-link" href="#" data-uc-switcher-item="1">Sign up</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--  Menu panel -->
    <div id="uc-menu-panel" data-uc-offcanvas="overlay: true;">
        <div class="uc-offcanvas-bar bg-white text-dark dark:bg-gray-900 dark:text-white">
            <header class="uc-offcanvas-header hstack justify-between items-center pb-2 bg-white dark:bg-gray-900">
                <button class="uc-offcanvas-close rtl:end-auto rtl:start-0 m-1 mt-2 icon-3 btn border-0 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all" type="button">
                    <i class="unicon-close"></i>
                </button>
            </header>
 
            <div class="panel" style="margin-top: 5rem;">
                <!-- Menu mobile identique à desktop -->
<ul class="nav-y gap-narrow fw-medium fs-6" data-uc-nav>
    <li><a href="apropos.html">À propos</a></li>
    <li><a href="apropos.html">Débutant, Commencer ici...</a></li>
    <li><a href="formation.html">Formations</a></li>
    <li><a href="webinaires.html">Webinaires</a></li>
    
    <li class="hr opacity-10 my-1"></li>
    <li><a href="../../fr/inscription.html">Créer un compte gratuit</a></li>
    <li><a href="connexionnsite.html">Connexion</a></li>
</ul>
                    <div class="vr"></div>
                </div>
            </div>
        </div>
    </div>

    <!--  Cart panel -->
    <div id="uc-cart-panel" data-uc-offcanvas="overlay: true; flip: true;">
        <div class="uc-offcanvas-bar bg-white text-dark dark:bg-gray-900 dark:text-white">
            <button class="uc-offcanvas-close top-0 ltr:end-0 rtl:start-0 rtl:end-auto m-2 p-0 border-0 icon-2 lg:icon-3 btn btn-md dark:text-white transition-transform duration-150 hover:rotate-90" type="button">
                <i class="unicon-close"></i>
            </button>

            <div class="mini-cart-content vstack justify-between panel h-100">
                <div class="mini-cart-header">
                    <h3 class="title h5 m-0 text-dark dark:bg-gray-900">Shopping cart</h3>
                </div>
                <div class="mini-cart-listing panel flex-1 my-4 overflow-scroll">
                    <p class="alert alert-warning" hidden>Your cart empty!</p>
                    <div class="panel vstack gap-3">
                        <div>
                            <article class="product type-product panel">
                                <div class="hstack gap-2">
                                    <figure class="featured-image m-0 rounded ratio ratio-1x1 w-80px uc-transition-toggle overflow-hidden">
                                        <img class="media-cover image uc-transition-scale-up uc-transition-opaque" src="../assets/images/common/products/img-07.jpg" alt="Laptop Cover">
                                        <a href="shop-product-detail.html" class="position-cover" data-caption="Laptop Cover"></a>
                                    </figure>
                                    <div class="content vstack gap-narrow fs-6">
                                        <h5 class="h6 m-0"><a class="text-none text-dark dark:text-white" href="shop-product-detail.html">Laptop Cover</a></h5>
                                        <div class="hstack gap-narrow fs-7 opacity-50 text-dark dark:text-white"><span class="qty">1</span> x <span class="price">$24.00</span></div>
                                        <a href="#remove_from_cart" class="remove fs-7 text-dark dark:text-white">Remove</a>
                                    </div>
                                    <a href="#remove_from_cart" class="remove position-absolute top-0 end-0 btn p-0 hover:text-danger" hidden>
                                        <i class="unicon-close icon-1"></i>
                                    </a>
                                </div>
                            </article>
                        </div>
                        <div>
                            <article class="product type-product panel">
                                <div class="hstack gap-2">
                                    <figure class="featured-image m-0 rounded ratio ratio-1x1 w-80px uc-transition-toggle overflow-hidden">
                                        <img class="media-cover image uc-transition-scale-up uc-transition-opaque" src="../assets/images/common/products/img-08.jpg" alt="Disney Toys">
                                        <a href="shop-product-detail.html" class="position-cover" data-caption="Disney Toys"></a>
                                    </figure>
                                    <div class="content vstack gap-narrow fs-6">
                                        <h5 class="h6 m-0"><a class="text-none text-dark dark:text-white" href="shop-product-detail.html">Disney Toys</a></h5>
                                        <div class="hstack gap-narrow fs-7 opacity-50 text-dark dark:text-white"><span class="qty">1</span> x <span class="price">$5.00</span></div>
                                        <a href="#remove_from_cart" class="remove fs-7 text-dark dark:text-white">Remove</a>
                                    </div>
                                    <a href="#remove_from_cart" class="remove position-absolute top-0 end-0 btn p-0 hover:text-danger" hidden>
                                        <i class="unicon-close icon-1"></i>
                                    </a>
                                </div>
                            </article>
                        </div>
                        <div>
                            <article class="product type-product panel">
                                <div class="hstack gap-2">
                                    <figure class="featured-image m-0 rounded ratio ratio-1x1 w-80px uc-transition-toggle overflow-hidden">
                                        <img class="media-cover image uc-transition-scale-up uc-transition-opaque" src="../assets/images/common/products/img-09.jpg" alt="Screen Axe">
                                        <a href="shop-product-detail.html" class="position-cover" data-caption="Screen Axe"></a>
                                    </figure>
                                    <div class="content vstack gap-narrow fs-6">
                                        <h5 class="h6 m-0"><a class="text-none text-dark dark:text-white" href="shop-product-detail.html">Screen Axe</a></h5>
                                        <div class="hstack gap-narrow fs-7 opacity-50 text-dark dark:text-white"><span class="qty">1</span> x <span class="price">$19.00</span></div>
                                        <a href="#remove_from_cart" class="remove fs-7 text-dark dark:text-white">Remove</a>
                                    </div>
                                    <a href="#remove_from_cart" class="remove position-absolute top-0 end-0 btn p-0 hover:text-danger" hidden>
                                        <i class="unicon-close icon-1"></i>
                                    </a>
                                </div>
                            </article>
                        </div>
                        <div>
                            <article class="product type-product panel">
                                <div class="hstack gap-2">
                                    <figure class="featured-image m-0 rounded ratio ratio-1x1 w-80px uc-transition-toggle overflow-hidden">
                                        <img class="media-cover image uc-transition-scale-up uc-transition-opaque" src="../assets/images/common/products/img-10.jpg" alt="Airpods Pro">
                                        <a href="shop-product-detail.html" class="position-cover" data-caption="Airpods Pro"></a>
                                    </figure>
                                    <div class="content vstack gap-narrow fs-6">
                                        <h5 class="h6 m-0"><a class="text-none text-dark dark:text-white" href="shop-product-detail.html">Airpods Pro</a></h5>
                                        <div class="hstack gap-narrow fs-7 opacity-50 text-dark dark:text-white"><span class="qty">1</span> x <span class="price">$49.00</span></div>
                                        <a href="#remove_from_cart" class="remove fs-7 text-dark dark:text-white">Remove</a>
                                    </div>
                                    <a href="#remove_from_cart" class="remove position-absolute top-0 end-0 btn p-0 hover:text-danger" hidden>
                                        <i class="unicon-close icon-1"></i>
                                    </a>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <div class="mini-cart-footer panel pt-3 border-top">
                    <div class="panel vstack gap-3 justify-between">
                        <div class="mini-cart-total hstack justify-between">
                            <h5 class="h5 m-0 text-dark dark:text-white">Subtotal</h5>
                            <b class="fs-5">$97.00</b>
                        </div>
                        <div class="mini-cart-actions vstack gap-1">
                            <a href="shop-cart.html" class="btn btn-md btn-outline-gray-100 text-dark dark:text-white dark:border-gray-700 dark:hover:bg-gray-700">View cart</a>
                            <a href="shop-checkout.html" class="btn btn-md btn-primary text-white">Checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--  Favorites modal -->
    <div id="uc-favorites-panel" data-uc-modal="overlay: true">
        <div class="uc-modal-dialog lg:max-w-500px bg-white text-dark dark:bg-gray-800 dark:text-white rounded">
            <button class="uc-modal-close-default top-0 ltr:end-0 rtl:start-0 rtl:end-auto m-2 p-0 border-0 icon-2 lg:icon-3 btn btn-md dark:text-white transition-transform duration-150 hover:rotate-90" type="button">
                <i class="unicon-close"></i>
            </button>

            <div class="panel vstack justify-center items-center gap-2 text-center py-8">
                <i class="icon icon-4 unicon-bookmark mb-2 text-primary dark:text-white"></i>
                <h2 class="h4 md:h3 m-0">Your favorites</h2>
                <p class="fs-5 opacity-60">You have not yet added any recipe to your favorites list.</p>
                <a href="#" class="btn btn-md btn-outline-gray-100 text-dark dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 mt-2 uc-modal-close">Browse recipes</a>
            </div>
        </div>
    </div>

    <!--  Contact modal -->
    <div id="uc-contact-modal" data-uc-modal="overlay: true">
        <div class="uc-modal-dialog lg:max-w-650px bg-secondary text-dark dark:bg-gray-800 dark:text-white rounded-1-5">
            <button class="uc-modal-close-default top-0 ltr:end-0 rtl:start-0 rtl:end-auto m-2 p-0 border-0 icon-2 lg:icon-3 btn btn-md dark:text-white transition-transform duration-150 hover:rotate-90" type="button">
                <i class="unicon-close"></i>
            </button>

            <div class="panel vstack gap-2 md:gap-4 text-center">
                <div class="panel cstack px-3 md:px-4 py-4 md:py-8 m-0 lg:mx-auto">
                    <div class="panel vstack justify-center items-center gap-2 sm:gap-4 text-center">
                        <h4 class="h5 lg:h4 m-0">Schedule your 15-minute demo now</h4>
                        <div class="panel w-100 sm:w-350px md:w-500px mx-auto">
                            <form class="vstack gap-2">
                                <div class="vstack lg:hstack gap-2">
                                    <input class="form-control h-48px w-100 md:w-1/2 bg-white dark:border-white dark:text-dark" type="text" placeholder="Full name*" required>
                                    <input class="form-control h-48px w-100 md:w-1/2 bg-white dark:border-white dark:text-dark" type="text" placeholder="Last name*" required>
                                </div>
                                <div class="vstack lg:hstack gap-2">
                                    <input class="form-control h-48px w-100 md:w-1/2 bg-white dark:border-white dark:text-dark" type="email" placeholder="Your email*" required>
                                    <input class="form-control h-48px w-100 md:w-1/2 rtl:text-end bg-white dark:border-white dark:text-dark" type="tel" placeholder="Phone number*" required>
                                </div>
                                <input class="form-control h-48px w-full bg-white dark:border-white dark:text-dark" type="text" placeholder="Company name*" required>
                                <textarea class="form-control min-h-150px w-full bg-white dark:border-white dark:text-dark" placeholder="Your message.."></textarea>
                                <button class="btn btn-primary btn-md text-white mt-2" type="submit">Schedule my demo</button>
                                <p class="fs-7 opacity-70 mt-2 text-center">We'll tailor your demo to your immediate needs and answer all your questions. Get ready to see how it works!</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modals end -->

        <header class="uc-header header-five uc-navbar-sticky-wrap z-999" data-uc-sticky="start: 100vh; show-on-up: true; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;"  >
            <nav class="uc-navbar-container uc-navbar-float ft-tertiary  z-1" data-anime="translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;" >
                <div class="uc-navbar-main" style="--uc-nav-height: 64px">
                    <div class="container">
                        <div class="uc-navbar min-h-64px text-gray-900 dark:text-white" data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;">
                            <div class="uc-navbar-left">
                                <div class="uc-logo">\n <a href="../fr/">\n <img class="d-block dark:d-none" src="../assets/images/logoauditacademie.png" alt="Inawo light" data-uc-svg style="width: 90px">\n </a>\n <a href="../fr/">\n <img class="d-none dark:d-block" src="../assets/images/logoauditacademie1.png" alt="Inawo dark" data-uc-svg style="width: 90px">\n </a>\n</div>
                                <ul class="uc-navbar-nav gap-3 d-none lg:d-flex ltr:ms-2 rtl:me-2">
                                    <li><a href="apropos.html">À Propos</a></li>
                                    <li>
                                        
                                        <a href="commencerici.html">Débutant, Commencer ici...</a>
                            
                                    <li>
                                        <a href="mesblogs.html">Blog</a>
                                    </li>
                                    
                                        <li>
                                        <a href="formation.html">Formations</a>
                                    </li>
                                   

                                    <li>
                                        <a href="webinaires.html">Webinaires</a>
                                    </li>
                                    
                                    <!-- <li>
                                        <a href="../components.html"><i class="icon unicon-cube fw-bold ltr:me-narrow rtl:ms-narrow text-primary dark:text-tertiary"></i><span>All components</span></a>
                                    </li> -->
                                </ul>
                            </div>
                            <div class="uc-navbar-right">
                                <!-- DEBUT-->
                                <li class="d-inline-block">
                                    
                                    
    
                                </li>
                                
                                <!-- User Dropdown Component - Remplace le bouton Connexion -->
                                <div class="user-dropdown d-none lg:d-inline-block" id="userDropdown">
                                    <button class="user-dropdown-btn" type="button" id="dropdownToggle" aria-expanded="false">
    <div class="user-icon">
        <i class="unicon-user"></i>
    </div>
    <i class="fas fa-chevron-down dropdown-arrow"></i>
</button>
                                    <div class="dropdown-menu-custom" id="dropdownMenu">
                                        <a href="connexion.html" class="dropdown-item-custom">
                                            </i>Se connecter
                                        </a>
                                        <a href="inscription.html" class="dropdown-item-custom">
                                            Créer un compte
                                        </a>
                                        <div class="dropdown-divider-custom"></div>
                                        
                                        <a href="formation.html" class="dropdown-item-custom">
                                            Formations
                                        </a>
                                        <a href="webinaires.html" class="dropdown-item-custom">
                                            Webinaires
                                        </a>
                                        
                                    </div>
                                </div>
                                
                                <a class="d-block lg:d-none" href="../newcode/#uc-menu-panel" data-uc-navbar-toggle-icon data-uc-toggle></a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>  
`

document.addEventListener("DOMContentLoaded", () => {
  // Injection du header
  const header = document.querySelector("#header")
  header.innerHTML = headerHTML

  // Initialiser le dropdown utilisateur
  initializeUserDropdown()

  // Dynamiser le bouton Connexion selon la page (après injection du header)
  const btnConnexion = document.getElementById("btn-connexion-header")
  if (btnConnexion) {
    const path = window.location.pathname
    // Debug : affiche le chemin dans la console
    console.log("PATH:", path)

    // Masquer le bouton pour toutes les pages d'accueil françaises
    // if (
    //     /index(\.html)?$/.test(path) ||
    //     /commencerici(\.html)?$/.test(path) ||
    //     /\/fr(\/|\/index\.html)?$/.test(path)
    // ) {
    //     btnConnexion.classList.add('d-none');
    //     btnConnexion.classList.remove('lg:d-inline-flex');
    // } else if (/commencerici(\.html)?$/.test(path) || /mesblogs(\.html)?$/.test(path)) {
    //     btnConnexion.href = "connexionnsite.html";
    // } else if (/formation(\.html)?$/.test(path)) {
    //     btnConnexion.href = "connexion.html";
    // } else if (/webinaires(\.html)?$/.test(path)) {
    //     btnConnexion.href = "connexionwebinaire.html";
    // } else {
    //     btnConnexion.href = "connexion.html"; // Par défaut
    // }
  }

  // Section À la Une - catégories dynamiques
  const aLaUneContainer = document.getElementById("a-la-une")
  if (aLaUneContainer) {
    const originalContent = aLaUneContainer.innerHTML // Sauvegarder le contenu original

    // Configuration des icônes par catégorie
    const categoryIcons = {
      Vente: "unicon-checkmark",
      "PME et StartUp": "unicon-chart-pie",
      "Nouveauté chez Inawo": "unicon-increase-level",
      // Ajoutez d'autres catégories selon vos besoins
      default: "unicon-checkmark", // Icône par défaut
    }

    // Configuration des descriptions par catégorie
    const categoryDescriptions = {
      Vente: "Toutes les astuces pour accroître vos ventes",
      "PME et StartUp": "Passez à un autre niveau avec votre entreprise",
      "Nouveauté chez Inawo": "Découvrez notre actualité. Mise à jour sur nos produits",
      // Ajoutez d'autres descriptions selon vos besoins
      default: "Ressources pour améliorer votre entreprise", // Description par défaut
    }

    // Ajouter un indicateur de chargement
    const loadingIndicator = document.createElement("div")
    loadingIndicator.className = "text-center py-2"
    loadingIndicator.innerHTML = '<small class="text-muted">Mise à jour des catégories...</small>'
    aLaUneContainer.appendChild(loadingIndicator)

    // Faire une requête à l'API
    fetch("https://inawoapiv3.inawo.pro/administration/categorie-article/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données")
        }
        return response.json()
      })
      .then((data) => {
        // Supprimer l'indicateur de chargement
        aLaUneContainer.removeChild(loadingIndicator)

        // Vérifier si nous avons reçu des données valides
        if (data && data.length > 0) {
          // Vider le contenu existant
          aLaUneContainer.innerHTML = ""

          // Limiter à 3 catégories maximum pour la section "À la Une"
          const categoriesToShow = data.slice(0, 3)

          // Générer le HTML pour chaque catégorie
          categoriesToShow.forEach((category) => {
            // Déterminer l'icône à utiliser
            const iconClass = categoryIcons[category.nom] || categoryIcons.default

            // Déterminer la description à utiliser
            const description = categoryDescriptions[category.nom] || categoryDescriptions.default

            // Créer l'URL de destination en fonction du nom de la catégorie
            const categoryUrlName = category.nom.replace(/\s+/g, "-").toLowerCase()
            const destinationUrl = `../fr/Blog/${categoryUrlName}.html`

            // Construire l'élément HTML
            const categoryElement = document.createElement("li")
            categoryElement.innerHTML = `
                            <a class="hstack items-start gap-2" href="${destinationUrl}">
                                <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                    <i class="icon-1 ${iconClass} fw-bold text-white"></i>
                                </div>
                                <span class="vstack gap-narrow mt-nnarrow">
                                    <b class="fw-medium dark:text-white">${category.nom}</b>
                                    <span class="fs-8 text-muted">${description}</span>
                                </span>
                            </a>
                        `

            // Ajouter l'élément au conteneur
            aLaUneContainer.appendChild(categoryElement)
          })
        } else {
          // Conserver le contenu original si l'API ne renvoie pas de données
          console.log("Aucune donnée reçue de l'API, utilisation du contenu statique")
          // L'indicateur de chargement est supprimé mais on garde le contenu original
        }
      })
      .catch((error) => {
        console.error("Erreur:", error)
        // Supprimer l'indicateur de chargement
        if (aLaUneContainer.contains(loadingIndicator)) {
          aLaUneContainer.removeChild(loadingIndicator)
        }
        // Conserver le contenu original en cas d'erreur
        console.log("Erreur lors de la récupération des catégories, utilisation du contenu statique")
      })
  }

  // Remplacer toutes les instances de position: fixed/sticky dans les styles inline du header
  const allHeaderElements = header.querySelectorAll("*")
  allHeaderElements.forEach((el) => {
    if (el.style.position === "fixed" || el.style.position === "sticky") {
      el.style.position = "static"
    }
  })

  // Supprimer le curseur tapant s'il existe
  const cursor = document.querySelector(".typed-cursor")
  if (cursor) cursor.remove()
})

// Fonction pour initialiser le dropdown utilisateur
function initializeUserDropdown() {
  const dropdown = document.getElementById("userDropdown")
  const dropdownToggle = document.getElementById("dropdownToggle")
  const dropdownMenu = document.getElementById("dropdownMenu")

  if (!dropdown || !dropdownToggle || !dropdownMenu) {
    return // Les éléments ne sont pas encore dans le DOM
  }

  // Toggle dropdown on button click
  dropdownToggle.addEventListener("click", (e) => {
    e.stopPropagation()
    toggleDropdown()
  })

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      closeDropdown()
    }
  })

  // Close dropdown on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDropdown()
    }
  })

  // Handle dropdown item clicks
  const dropdownItems = dropdownMenu.querySelectorAll(".dropdown-item-custom")
  dropdownItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      // Ne pas empêcher la navigation par défaut
      console.log("Navigation vers:", this.href)
      closeDropdown()
    })
  })

  function toggleDropdown() {
    const isOpen = dropdown.classList.contains("show")
    if (isOpen) {
      closeDropdown()
    } else {
      openDropdown()
    }
  }

  function openDropdown() {
    dropdown.classList.add("show")
    dropdownMenu.classList.add("show")
    dropdownToggle.setAttribute("aria-expanded", "true")
  }

  function closeDropdown() {
    dropdown.classList.remove("show")
    dropdownMenu.classList.remove("show")
    dropdownToggle.setAttribute("aria-expanded", "false")
  }
}

// À placer dans un fichier JS chargé après le DOM
document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".typed-cursor")
  if (cursor) cursor.remove()
})

async function fetchAndDisplayInfoline() {
  const infolineContent = document.getElementById("infoline-content")
  try {
    const response = await fetch("https://imaneapi.auditacademie.com/api/infolines/")
    const data = await response.json()
    if (data.length !== 0) {
      infolineContent.innerHTML = data[0].titre
    } else {
      infolineContent.innerHTML = `Audit Académie, Cotonou N°RCCM RB/COT/18 B 20854<br class="d-block lg:d-none">,Programmeexclusifcia@gmail.com, Imane.consulting@gmail.com`
    }
  } catch (error) {
    infolineContent.innerHTML = `Audit Académie, Cotonou N°RCCM RB/COT/18 B 20854<br class="d-block lg:d-none">,Programmeexclusifcia@gmail.com, Imane.consulting@gmail.com`
    console.error(error)
  }
}
document.addEventListener("DOMContentLoaded", fetchAndDisplayInfoline)

document.addEventListener('DOMContentLoaded', function () {
    // Récupère prénom et nom depuis le localStorage
    const firstName = localStorage.getItem('first_name') || '';
    const lastName = localStorage.getItem('last_name') || '';
    let initials = '';
    if (firstName && lastName) {
        initials = firstName[0].toUpperCase() + lastName[0].toUpperCase();
    }

    // Sélectionne l’élément de l’icône profil dans le header
    const profileIcon = document.querySelector('.user-icon');
    if (profileIcon && initials) {
        profileIcon.textContent = initials;
        profileIcon.classList.add('user-initials');
        // Optionnel : retire l’icône si c’est une balise <i>
        if (profileIcon.tagName === 'I') {
            profileIcon.className = 'user-initials';
        }
    }

    
});
document.addEventListener('DOMContentLoaded', function () {
    // ... (ton code existant)

    // Récupère prénom et nom depuis le localStorage
    const firstName = localStorage.getItem('first_name') || '';
    const lastName = localStorage.getItem('last_name') || '';
    let initials = '';
    if (firstName && lastName) {
        initials = firstName[0].toUpperCase() + lastName[0].toUpperCase();
    }

    // Sélectionne l’élément de l’icône profil dans le header
    const profileIcon = document.querySelector('.user-icon');
    if (profileIcon && initials) {
        profileIcon.textContent = initials;
        profileIcon.classList.add('user-initials');
        if (profileIcon.tagName === 'I') {
            profileIcon.className = 'user-initials';
        }
    }

    // MODIFICATION DU MENU UTILISATEUR SI CONNECTÉ
    const dropdownMenu = document.getElementById('dropdownMenu');
    if (dropdownMenu && firstName && lastName) {
        dropdownMenu.innerHTML = `
            <div class="dropdown-item-custom" style="font-weight:bold; cursor:default;">
                ${firstName} ${lastName}
            </div>
            <div class="dropdown-divider-custom"></div>
            
            <a href="dashboard?page=trainings" class="dropdown-item-custom">Mes formations</a>
<a href="dashboard?page=webinars" class="dropdown-item-custom">Mes webinaires</a>
<a href="dashboard?page=profile" class="dropdown-item-custom">Mon profil</a>
<a href="dashboard?page=subscriptions" class="dropdown-item-custom">Mes abonnements</a>
            <div class="dropdown-divider-custom"></div>
            <a href="index.html" class="dropdown-item-custom" id="logoutBtnHeader">Déconnexion</a>
        `;
        // Ajoute le logout
        setTimeout(() => {
            const logoutBtn = document.getElementById('logoutBtnHeader');
            if (logoutBtn) {
    logoutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.clear(); // <-- Vide tout le localStorage
        document.cookie = "token=; path=/; max-age=0";
        window.location.href = "connexion.html";
    });
}
        }, 100);
    }
});