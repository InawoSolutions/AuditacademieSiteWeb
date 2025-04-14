const headerHTML = `

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

            <div class="panel " style="margin-top: 5rem;">
                
                <ul class="nav-y gap-narrow fw-medium fs-6 " data-uc-nav>
                    <li class="uc-parent">
                        <a href="#">Solutions</a>
                        <ul class="uc-nav-sub" data-uc-nav="">
                            <li class="uc-parent">
                                <a href="#">Products</a>
                                <ul class="uc-nav-sub">
                                    <li><a href="Solutions/InawoBusiness-Gestion-et-Facturation.html">Innawo Invoice</a></li>
                                    <li><a href="Solutions/InawoVente-Prospection-et-vente">Innawo CRM</a></li>
                                </ul>
                            </li>
                            <li class="uc-parent">
                                <a href="shop.html">Solutions</a>
                                <ul class="uc-nav-sub">
                                    <li><a href="../fr/Solutions/InawoGlobal.html">Innawo Global</a></li>
                                    <li><a href="../fr/Solutions/Developper-vos-ventes.html">Develop your sales</a></li>
                                    <li><a href="../fr/Solutions/Organiser-les-donnees-clients.html">Organizing customer data </a></li>
                                    <li><a href="../fr/Solutions/Developper-de-la-croissance.html">Inawo for small business</a></li>
                                </ul>
                            </li>
                            <li class="uc-parent">
                                <a href="a-propos-d-inawo.html">Why choose Inawo</a>
                                <ul class="uc-nav-sub">
                                    <li><a href="../a-propos-d-inawo.html">Why Inawo</a></li>
                                    <li><a href="../etude-de-cas.html">Case studies</a></li>
                                    <li><a href="../fr/Blog/actualites-inawo.html">Product news</a></li>
                                    <li><a href="../contactez-nous.html">Support Center</a></li>
                                    <li><a href="../conditions-generales-d-utilisation.html">Terms and conditions of use</a></li>
                                    <li><a href="../Politique-de-confidentialite.html"> Privacy</a></li>
                                    <li><a href="../Politique-de-cookies.html">Cookie policy</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="tarifs.html">Tarif</a></li>
                    <li class="uc-parent">
                        <a href="#">Ressources</a>
                        <ul class="uc-nav-sub" data-uc-nav="">
                            <li class="uc-parent">
                                <a href="features.html">A la Une</a>
                                <ul class="uc-nav-sub">
                                    <li><a href="../Developper-vos-ventes.html">Vente</a></li>
                                    <li><a href="../fr/Blog/PME-et-StartUp.html">PME et StartUp</a></li>
                                    <li><a href="../fr/Blog/actualites-inawo.html">Nouveauté chez Inawo</a></li>
                                </ul>
                            </li>
                            <li class="uc-parent">
                                <a href="">Ressources</a>
                                <ul class="uc-nav-sub">
                                    <li><a href="../fr/Ressources/Ebooks.html">Ebooks</a></li>
                                    <li><a href="../fr/Ressources/Outils.html">Outils</a></li>
                                    <li><a href="../Organiser-les-donnees-clients.html">Organiser les données clientes </a></li>
                                    <li><a href="../fr/Ressources/Tutoriel.html">Tutoriels</a></li>
                                </ul>
                            </li>
                            <li class="uc-parent">
                                <a href="https://t.me/InawoCRM">Communauté</a>
                                <ul class="uc-nav-sub">
                                    <li>Inawo academy</li>
                                    <li>Evenementsli>
                                    <li><a href="https://t.me/InawoCRM"> Communauté Inawo <a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="uc-parent">
                        <a href="../a-propos-nous.html">A propos</a>
                        <ul class="uc-nav-sub" data-uc-nav="">
                            <li class="uc-parent">
                                <a href="../a-propos-nous.html">Qui sommes-nous?</a>
                                <ul class="uc-nav-sub">
                                    <li><a href="../a-propos-nous.html">A propos de nous</a></li>
                                    <li><a href="../carrieres.html">Carrière</a></li>
                                    <li><a href="../recompenses.html">Récompenses</a></li>
                                </ul>
                            </li>
                            <li class="uc-parent">
                                <a href="../fr/partenariat.html.html">Devenez partenaire</a>
                                <ul class="uc-nav-sub">
                                    <li><a href="../fr/partenariat.html.html">Partenaires d'affaires</a></li>
                                    <li><a href="../Developpeurs.html">Développeurs</a></li>
                                    <li><a href="../Témoignages.html">Témoignages</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="../contactez-nous.html">Contact</a></li>
                    <li class="hr opacity-10 my-1"></li>
                    <li><a href="../inscription.html">Créer un compte</a></li>
                    <li><a href="../sign-in.html">Connexion</a></li>
                    
                </ul>
                <div class="hstack justify-center lg:justify-end gap-2 lg:gap-3 " style="margin-top: 5rem;">
                    <ul class="nav-x gap-2">
                        <li>
                            <a href="https://www.linkedin.com/company/inawo/"><i class="icon icon-2 unicon-logo-linkedin"></i></a>
                        </li>
                        <li>
                            <a href="https://web.facebook.com/inawo.pro "><i class="icon icon-2 unicon-logo-facebook"></i></a>
                        </li>
                        <li>
                            <a href="https://x.com/inawo_io"><i class="icon icon-2 unicon-logo-x-filled"></i></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/inawo.pro/"><i class="icon icon-2 unicon-logo-instagram"></i></a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@inawo"><i class="icon icon-2 unicon-logo-youtube"></i></a>
                        </li>
                    </ul>
                    <div class="vr"></div>
                    
                </div>
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
                                <p class="fs-7 opacity-70 mt-2 text-center">We’ll tailor your demo to your immediate needs and answer all your questions. Get ready to see how it works!</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    
    <!-- Modals end -->

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
                                    <a href="../../fr/">
                                        <img class=" dark:d-none" src="
                                        ../../assets/images/logo-InawoCRM-Blanc-2.30b79eb395e41ca6c93a.png" alt="Inawo light" data-uc-svg style="width: 90px">
                                        <img class="text-primary d-none dark:d-block "  style="width: 140px" src="../assets/images/logo-text-dark.png" alt="Inawo dark" >
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
                                                                            <h5 class="h5 xl:h4 fw-medium m-0">Simplifiez votre gestion avec notre suite logicielle</h5>
                                                                            <p class="fs-7 text-gray-300"> Ne laissez plus la gestion freiner votre croissance !</p>
                                                                        </div>
                                                                        <div class="row child-cols-6 gx-6" >
                                                                            <div class="vstack gap-3">
                                                                                <h6 class="h6 m-0"><i class="fs-7 unicon-cube fw-bold ltr:me-narrow rtl:ms-narrow" style="margin-top: 5rem;"></i> Products</h6>
                                                                                <div>
                                                                                
                                                                                    <a href="../Solutions/InawoBusiness-Gestion-et-Facturation.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-increase-level fw-bold text-white"></i>
                                                                                        </div>
                                                                                        
                                                                                        <div class="panel">
                                                                                            <span class="fs-7 fw-medium mb-narrow">Inawo invoice</span>
                                                                                            <p class="fs-8 text-muted">Management and billing software</p>
                                                                                        </div>
                                                                                        
                                                                                    </a>
                                                                                </div>
                                                                                <div>
                                                                                    <a href="../Solutions/InawoVente-Prospection-et-vente.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-chart-pie fw-bold text-white"></i></div>
                                                                                        <div class="panel">
                                                                                            <span class="fs-7 fw-medium mb-narrow">Inawo CRM</span>
                                                                                            <p class="fs-8 text-muted">Sales and prospecting software</p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                                <div>
                                                                                    <a href="../Solutions/InawoGlobal.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-chat fw-bold text-white"></i></div>
                                                                                        <div class="panel">
                                                                                            <span class="fs-7 fw-medium mb-narrow">Inawo Global</span>
                                                                                            <p class="fs-8 text-muted">All in one business management software to manage your sales , your personnal and your accounts</p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                                
                                                                            </div>
                                                                            <div class="vstack gap-3">
                                                                                <h6 class="h6 m-0"><i class="fs-7 unicon-gamification fw-bold ltr:me-narrow rtl:ms-narrow"></i>Solutions</h6>
                                                                                <div>
                                                                                    <a href="../Developper-vos-ventes.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-chart-pie fw-bold text-white"></i></div>
                                                                                        <div class="panel">
                                                                                            <span class="fs-7 fw-medium mb-narrow">Grow your sales </span>
                                                                                            <p class="fs-8 text-muted">Generate more sales develop your retention </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                                <div>
                                                                                    <a href="../Organiser-les-donnees-clients.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-checkmark fw-bold text-white"></i></div>
                                                                                        <div class="panel">
                                                                                            <span class="fs-7 fw-medium mb-narrow">Organizes customers data</span>
                                                                                            <p class="fs-8 text-muted">Unify your giving on a single software plat</p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                                <div>
                                                                                    <a href="../Solutions/Developper-de-la-croissance" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-chart-pie fw-bold text-white"></i></div>
                                                                                        <div class="panel">
                                                                                            <span class="fs-7 fw-medium mb-narrow">Inawo for small business</span>
                                                                                            <p class="fs-8 text-muted">Inawo software suite makes it easier for businesses to grow</p>
                                                                                        </div>
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
                                                                        <h5 class="h6">Pourquoi choisir Inawo?</h5>
                                                                        <ul class="uc-nav uc-navbar-dropdown-nav fs-7 fw-normal row child-cols-12">
                                                                            <li>
                                                                                <a href="../a-propos-d-inawo.html">Why choose Inawo</a>
                                                                            </li>
                                                                             <li>
                                                                                <a href="../etude-de-cas.html">Case study</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="../fr/Blog/actualites-inawo.html">Product news</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="../carrieres.html">Inawo</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="..centre-d-assistance.html">Help center </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="panel category-section">
                                                                        <h5 class="h6">Conditions et confidentiality</h5>
                                                                        <ul class="uc-nav uc-navbar-dropdown-nav fs-7 fw-normal row child-cols-12">
                                                                            <li>
                                                                                <a href="../conditions-generales-d-utilisation.html">General terms of use</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="../Politique-de-confidentialite.html">Confidentiality</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="../Politique-de-cookies.html">Cookies policy</a>
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
                                                            <a href="../toutes-les-fonctionnalites.html"><i class="fs-8 unicon-api fw-bold"></i><span class="border-bottom hover:border-primary duration-150">All features</span></a>
                                                        </li>
                                                        <li>
                                                            <a href="../Marketplace.html"><i class="fs-8 unicon-airplay fw-bold"></i><span class="border-bottom hover:border-primary duration-150">MarketPlace</span></a>
                                                        </li>
                                                        <!-- <li>
                                                            <a href="#"><i class="fs-8 unicon-cloud-lightning fw-bold"></i><span class="border-bottom hover:border-primary duration-150">Join Lexend Early Access</span></a>
                                                        </li> -->
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="../tarifs.html">Prices</a>
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
                                                                        <h5 class="h5 xl:h4 fw-medium m-0">Everything you need for the management of your business</h5>
                                                                        <p class="fs-7 text-gray-300">For simplified management and maximum performance</p>
                                                                    </div>
                                                                    <div class="row child-cols-4 gx-4 col-match justify-between">
                                                                        <div>
                                                                            <h6 class="h6 mb-3"><i class="fs-7 unicon-glyph-square-fill fw-bold ltr:me-narrow rtl:ms-narrow"></i>In the spotlight</h6>
                                                                            <ul class="uc-nav uc-navbar-dropdown-nav vstack gap-2">
                                                                                <li>
                                                                                    <a class="hstack items-start gap-2" href="../../fr/Blog/Ventes.html">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-checkmark fw-bold text-white"></i></div>
                                                                                        <span class="vstack gap-narrow mt-nnarrow">
                                                                                            <b class="fw-medium dark:text-white">Sales</b>
                                                                                            <span class="fs-8 text-muted">All the tips to increase your sales</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="hstack items-start gap-2" href="../../fr/Blog/PME-et-StartUp.html">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-chart-pie fw-bold text-white"></i></div>
                                                                                        <span class="vstack gap-narrow mt-nnarrow">
                                                                                            <b class="fw-medium dark:text-white">PME and StartUp</b>
                                                                                            <span class="fs-8 text-muted">Move to another level to your business</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="hstack items-start gap-2" href="../../fr/Blog/actualites-inawo.html">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-increase-level fw-bold text-white"></i></div>
                                                                                        <span class="vstack gap-narrow mt-nnarrow">
                                                                                            <b class="fw-medium dark:text-white">New at Inawo</b>
                                                                                            <span class="fs-8 text-muted">Discover our news. Update on our products</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div>
                                                                            <h6 class="h6 mb-3"><i class="fs-7 unicon-glyph-circle-fill fw-bold ltr:me-narrow rtl:ms-narrow"></i>Ressouces</h6>
                                                                            <ul class="uc-nav uc-navbar-dropdown-nav vstack gap-2">
                                                                                <li>
                                                                                    <a class="hstack items-start gap-2" href="../../fr/Ressources/Ebooks.html">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-increase-level fw-bold text-white"></i></div>
                                                                                        <span class="vstack gap-narrow mt-nnarrow">
                                                                                            <b class="fw-medium dark:text-white">Ebooks</b>
                                                                                            <span class="fs-8 text-muted">White papers and ebooks for your business</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="hstack items-start gap-2" href="../../fr/Ressources/Outils.html">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-chat fw-bold text-white"></i></div>
                                                                                        <span class="vstack gap-narrow mt-nnarrow">
                                                                                            <b class="fw-medium dark:text-white">Tools</b>
                                                                                            <span class="fs-8 text-muted">Template and download resources</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="hstack items-start gap-2" href="../../fr/Ressources/Tutoriel.html">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-checkmark fw-bold text-white"></i></div>
                                                                                        <span class="vstack gap-narrow mt-nnarrow">
                                                                                            <b class="fw-medium dark:text-white">Tutorials</b>
                                                                                            <span class="fs-8 text-muted">Follow our vidéos</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div>
                                                                            <h6 class="h6 mb-3"><i class="fs-7 unicon-glyph-caution fw-bold ltr:me-narrow rtl:ms-narrow"></i>Communauté</h6>
                                                                            <ul class="uc-nav uc-navbar-dropdown-nav vstack gap-2">
                                                                                <li>
                                                                                    <a class="hstack items-start gap-2" href="../evenement.html">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-increase-level fw-bold text-white"></i></div>
                                                                                        <span class="vstack gap-narrow mt-nnarrow">
                                                                                            <b class="fw-medium dark:text-white">Events</b>
                                                                                            <span class="fs-8 text-muted">Webinaires, Afterworks, business conferences</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <div class="hstack items-start gap-2">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-checkmark fw-bold text-white"></i></div>
                                                                                        <span class="vstack gap-narrow mt-nnarrow">
                                                                                            <b class="fw-medium dark:text-white">Inawo Academy</b>
                                                                                            <span class="fs-8 text-muted">Join the Inawo courses for learn</span>
                                                                                        </span>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                <a class="hstack items-start gap-2" href="https://t.me/InawoCRM" target="/blank">
                                                                                    <div class="hstack items-start gap-2" href="https://t.me/InawoCRM" target="/blank">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-chart-pie fw-bold text-white"></i></div>
                                                                                        <span class="vstack gap-narrow mt-nnarrow">
                                                                                            <b class="fw-medium dark:text-white">Inawo Community </b>
                                                                                            <span class="fs-8 text-muted">Exchange with your patners and join a new business network</span>
                                                                                        </span>
                                                                                    </div>
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
                                                                                    <img class="media-cover image uc-transition-scale-up uc-transition-opaque" src="../../assets/images/common/login.webp" alt="Image">
                                                                                </figure>
                                                                                <button class="btn btn-md btn-alt-primary bg-tertiary p-0 w-32px h-32px position-absolute bottom-0 ltr:start-0 rtl:end-0 m-1"><i class="icon-narrow unicon-play-filled-alt text-primary"></i></button>
                                                                                <a href="../../assets/images/media/lexend_vid.webm" data-caption="Easy project managment of any complexity." data-attrs="width: 640; height: 480;" class="position-cover"></a>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div class="vstack gap-1">
                                                                                <span class="fs-6 fw-bold m-0 text-dark dark:text-white">Become affiliated with Inawo</span>
                                                                                <p class="fs-7">Increase your income differently</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="panel category-section">
                                                                        <h5 class="h6">Commencez là où vous ètes</h5>
                                                                        <ul class="uc-nav uc-navbar-dropdown-nav fs-7 fw-normal row child-cols-12">
                                                                            <li>
                                                                                <a href="../etude-de-cas.html">Case study</a>
                                                                            </li>
                                                                            <!-- <li>
                                                                                <a href="#">Customer stories</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Resources</a>
                                                                            </li> -->
                                                                            <li>
                                                                                <a href="../fr/Blog/actualites-inawo.html">Sector of activity</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="Témoignages.html">Testimonials</a>
                                                                            </li>
                                                                            <!-- <li>
                                                                                <a href="./newcode/contact.html">Help Center</a>
                                                                            </li> -->
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
                                                            <a href="../toutes-les-fontionnalites.html"><i class="fs-8 unicon-api fw-bold"></i><span class="border-bottom hover:border-primary duration-150">All features</span></a>
                                                        </li>
                                                        <!-- <li>
                                                            <a href="#"><i class="fs-8 unicon-airplay fw-bold"></i><span class="border-bottom hover:border-primary duration-150">AI Solutions</span></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i class="fs-8 unicon-cloud-lightning fw-bold"></i><span class="border-bottom hover:border-primary duration-150">Join Lexend Early Access</span></a>
                                                        </li> -->
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <li>
                                        <a href="#">About us<span data-uc-navbar-parent-icon></span></a>
                                        <div class="uc-dropbar uc-dropbar-top p-0 ft-primary text-unset fs-6 fw-normal hide-scrollbar border-top rounded-0 overflow-hidden shadow-xl bg-white dark:bg-gray-900" data-uc-drop=" offset: 0; boundary: true; stretch: x; animation: uc-animation-slide-top-small; animate-out: uc-animation-slide-top-small; duration: 150;">
                                            <div class="uc-dropbar-content">
                                                <div class="container">
                                                    <div class="uc-dropbar-inner after-bg">
                                                        <div class="row gx-5 col-match justify-between">
                                                            <div class="col-8">
                                                                <div class="panel vstack gap-4 py-4">
                                                                    <div class="panel vstack gap-4">
                                                                        <div class="vstack gap-narrow">
                                                                            <h5 class="h5 xl:h4 fw-medium m-0">We are committed to business growth</h5>
                                                                        </div>
                                                                        <div class="row child-cols-6 gx-6">
                                                                            <div class="vstack gap-3">
                                                                                <h6 class="h6 m-0"><i class="fs-7 unicon-cube fw-bold ltr:me-narrow rtl:ms-narrow"></i> Who are we?</h6>
                                                                                <div>
                                                                                    <a href="../a-propos-d-inawo.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-chart-pie fw-bold text-white"></i></div>
                                                                                        <div class="panel">
                                                                                            <span class="fs-7 fw-medium mb-narrow text-inherit">About us</span>
                                                                                            <p class="fs-8 text-muted">Who are we we and what can we offer </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                                <div>
                                                                                    <a href="../carrieres.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-chat fw-bold text-white"></i></div>
                                                                                        <div class="panel">
                                                                                            <span class="fs-7 fw-medium mb-narrow">Career</span>
                                                                                            <p class="fs-8 text-muted">Join Inawo team</p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                                <div>
                                                                                    <a href="../recompenses.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-checkmark fw-bold text-white"></i></div>
                                                                                        <div class="panel">
                                                                                            <span class="fs-7 fw-medium mb-narrow">Rewards</span>
                                                                                            <p class="fs-8 text-muted">Explore our rewards our achievements </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                                <!-- <div>
                                                                                    <a href="../newcode/features.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                        <span class="icon rounded dark:bg-white">
                                                                                            <img class="w-32px" src="..assets/images/custom-icons/icon-07.svg" alt="icon">
                                                                                        </span>
                                                                                        <div class="panel">
                                                                                            <span class="fs-7 fw-medium mb-narrow">Testimonials and study case</span>
                                                                                            <p class="fs-8 text-muted">Users testimonials</p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div> -->
                                                                            </div>
                                                                            <div class="vstack gap-3">
                                                                                <h6 class="h6 m-0"><i class="fs-7 unicon-gamification fw-bold ltr:me-narrow rtl:ms-narrow"></i>Devenez partenaire</h6>
                                                                                <div>
                                                                                    <a href="../partenariat.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-chart-pie fw-bold text-white"></i></div>
                                                                                        <div class="panel">
                                                                                            <span class="fs-7 fw-medium mb-narrow">Business partner</span>
                                                                                            <p class="fs-8 text-muted">Become business partner</p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                                <div>
                                                                                    <a href="../Developpeurs.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-increase-level fw-bold text-white"></i></div>
                                                                                        <div class="panel">
                                                                                            <span class="fs-7 fw-medium mb-narrow">Developers</span>
                                                                                            <p class="fs-8 text-muted">Easily creates integrations with our API</p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                                <div>
                                                                                    <a href="../Témoignages.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-checkmark fw-bold text-white"></i></div>
                                                                                        <div class="panel">
                                                                                            <span class="fs-7 fw-medium mb-narrow">Testimonials</span>
                                                                                            <p class="fs-8 text-muted">Leave us your opinions on our platform</p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                                <!-- <div>
                                                                                    <a href="../newcode/features.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                        <span class="icon rounded dark:bg-white">
                                                                                            <img class="w-32px" src="../assets/images/custom-icons/icon-08.svg" alt="icon">
                                                                                        </span>
                                                                                        <div class="panel">
                                                                                            <span class="fs-7 fw-medium mb-narrow">AI-Powered Automation</span>
                                                                                            <p class="fs-8 text-muted">Our services offerings</p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div> -->
                                                                                <!-- <div>
                                                                                    <a href="../newcode/features.html" class="ltr:ms-6 rtl:me-6 text-none fs-8 text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                        <span class="border-bottom hover:border-primary duration-150">View all solutions</span>
                                                                                        <i class="fs-8 unicon-arrow-up-right fw-bold"></i>
                                                                                    </a>
                                                                                </div> -->
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
                                                                                <a href="../contactez-nous.html">Leave us a message for any inquiries</a>
                                                                            </li>
                                                                            <!-- <li>
                                                                                <a href="#">Customer stories</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Resources</a>
                                                                            </li> -->
                                                                            <li>
                                                                                <a href="../Recrutement.html">we recruit</a>
                                                                            </li>
                                                                            <!-- <li>
                                                                                <a href="./newcode/career.html">Career</a>
                                                                            </li> -->
                                                                            <li>
                                                                                <a href="centre-d-assistance.html">Centre d'assistance</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="panel category-section">
                                                                        <h5 class="h6">Nos offres de services</h5>
                                                                        <ul class="uc-nav uc-navbar-dropdown-nav fs-7 fw-normal row child-cols-12">
                                                                            <li>
                                                                                <a href="../offre-service.html">We support companies and institutions</a>
                                                                            </li>
                                                                            <!-- <li>
                                                                                <a href="../Politique-de-cookies.html">Privacy Policy</a>
                                                                            </li> -->
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
                                                            <a href="../toutes-les-fonctionnalites.html"><i class="fs-8 unicon-api fw-bold"></i><span class="border-bottom hover:border-primary duration-150">See all our products</span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <!-- <li>
                                        <a href="../components.html"><i class="icon unicon-cube fw-bold ltr:me-narrow rtl:ms-narrow text-primary dark:text-tertiary"></i><span>All components</span></a>
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
                                        </ul>

                                    </div> 
    
                                </li>
                                
                                    <a href="https://app.inawo.pro/fr/connexion" style="text-decoration: none;">Connexion</a>
                                
                                <a class="btn btn-sm  text-white dark:bg-white dark:text-primary dark:hover:bg-white fw-bold rounded-pill lg:px-2 text-none hover:contrast-shadow d-none lg:d-inline-flex" style="background-color: #014a92;" href="../inscription.html">Créer un compte gratuit</a>
                                <a class="d-block lg:d-none" href="../newcode/#uc-menu-panel" data-uc-navbar-toggle-icon data-uc-toggle></a>
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