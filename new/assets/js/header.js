const headerHTML = `
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
                                    <a href="../fr/">
                                        <img class=" dark:d-none" src="../assets/images/logo-InawoCRM-Blanc-2.30b79eb395e41ca6c93a.png" alt="Inawo light" data-uc-svg style="width: 90px">
                                        <img class="text-primary d-none dark:d-block "  style="width: 140px" src="../assets/images/logo-InawoCRM-Blanc-2.30b79eb395e41ca6c93a.png" alt="Inawo dark" >
                                    </a>
                                    <!-- <a class="panel text-none" href="index-7.html" style="width: 140px">
                                        <img class="dark:d-none" src="assets/images/common/logo-new-light.svg" alt="Lexend">
                                        <img class="d-none dark:d-block" src="assets/images/common/logo-new-dark.svg" alt="Lexend">
                                    </a> -->
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
                                                                                <h6 class="h6 m-0"><i class="fs-7 unicon-cube fw-bold ltr:me-narrow rtl:ms-narrow" style="margin-top: 5rem;"></i> Produits</h6>
                                                                                <div>
                                                                                
                                                                                    <a href="Inawo-invoice.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-increase-level fw-bold text-white"></i>
                                                                                        </div>
                                                                                        
                                                                                        <div class="panel">
                                                                                            <span class="fs-7 fw-medium mb-narrow">Inawo invoice</span>
                                                                                            <p class="fs-8 text-muted">Logiciel de gestion et de facturation</p>
                                                                                        </div>
                                                                                        
                                                                                    </a>
                                                                                </div>
                                                                                <div>
                                                                                    <a href="Inawo-CRM.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-chart-pie fw-bold text-white"></i></div>
                                                                                        <div class="panel">
                                                                                            <span class="fs-7 fw-medium mb-narrow">Inawo CRM</span>
                                                                                            <p class="fs-8 text-muted">Logiciel de vente et de prospection</p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                                <div>
                                                                                    <a href="Inawo-Global.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-chat fw-bold text-white"></i></div>
                                                                                        <div class="panel">
                                                                                            <span class="fs-7 fw-medium mb-narrow">Inawo Global</span>
                                                                                            <p class="fs-8 text-muted">Logiciel de gestion d'entreprise tout en un pour gérer vos ventes, votre personnel, vos finances et votre comptabilité</p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                                
                                                                            </div>
                                                                            <div class="vstack gap-3">
                                                                                <h6 class="h6 m-0"><i class="fs-7 unicon-gamification fw-bold ltr:me-narrow rtl:ms-narrow"></i>Solutions</h6>
                                                                                <div>
                                                                                    <a href="./ventes.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-chart-pie fw-bold text-white"></i></div>
                                                                                        <div class="panel">
                                                                                            <span class="fs-7 fw-medium mb-narrow">Développer vos ventes</span>
                                                                                            <p class="fs-8 text-muted">Générez plus de vente développer votre rétension</p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                                <div>
                                                                                    <a href="clients.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-checkmark fw-bold text-white"></i></div>
                                                                                        <div class="panel">
                                                                                            <span class="fs-7 fw-medium mb-narrow">Organiser les données clients</span>
                                                                                            <p class="fs-8 text-muted">Unifier vos données sur une seule et meme plateforme logicielle</p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                                <div>
                                                                                    <a href="petite-entreprise.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-chart-pie fw-bold text-white"></i></div>
                                                                                        <div class="panel">
                                                                                            <span class="fs-7 fw-medium mb-narrow">Inawo pour petites entreprises</span>
                                                                                            <p class="fs-8 text-muted">La suite logicielle Inawo permet aux entreprises de croitre plus facilement</p>
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
                                                                                <a href="./contact.html">Pourquoi Inawo</a>
                                                                            </li>
                                                                             <li>
                                                                                <a href="./blog-sidebar.html">Etude de cas</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="./career.html">Actualité des produits</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="./career.html">Inawo</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="./contact.html">Centre d'assistance</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="panel category-section">
                                                                        <h5 class="h6">Conditions et confidentialité</h5>
                                                                        <ul class="uc-nav uc-navbar-dropdown-nav fs-7 fw-normal row child-cols-12">
                                                                            <li>
                                                                                <a href="./terms.html">Conditions générales d'utilisation</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="./terms.html">Confidentialité</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="./privacy.html">Politiques des cookies</a>
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
                                                            <a href="./toutes-les-fonctionnalites.html"><i class="fs-8 unicon-api fw-bold"></i><span class="border-bottom hover:border-primary duration-150">Toutes les fonctionnalités</span></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i class="fs-8 unicon-airplay fw-bold"></i><span class="border-bottom hover:border-primary duration-150">MarketPlace</span></a>
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
                                        <a href="tarifs.html">Tarifs</a>
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
                                                                        <h5 class="h5 xl:h4 fw-medium m-0">Tout ce dont vous avez besoin pour la gestion de votre entreprise</h5>
                                                                        <p class="fs-7 text-gray-300">Pour une gestion simplifiée et des performances maximales</p>
                                                                    </div>
                                                                    <div class="row child-cols-4 gx-4 col-match justify-between">
                                                                        <div>
                                                                            <h6 class="h6 mb-3"><i class="fs-7 unicon-glyph-square-fill fw-bold ltr:me-narrow rtl:ms-narrow"></i> A la Une</h6>
                                                                            <ul class="uc-nav uc-navbar-dropdown-nav vstack gap-2">
                                                                                <li>
                                                                                    <a class="hstack items-start gap-2" href="ventes.html">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-checkmark fw-bold text-white"></i></div>
                                                                                        <span class="vstack gap-narrow mt-nnarrow">
                                                                                            <b class="fw-medium dark:text-white">Vente</b>
                                                                                            <span class="fs-8 text-muted">Toutes les astuces pour accoitre vos ventes</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="hstack items-start gap-2" href="PME et StartUp.html">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-chart-pie fw-bold text-white"></i></div>
                                                                                        <span class="vstack gap-narrow mt-nnarrow">
                                                                                            <b class="fw-medium dark:text-white">PME et StartUp</b>
                                                                                            <span class="fs-8 text-muted">Passez a un autre niveau avec votre entreprise</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="hstack items-start gap-2" href="nouveauté chez Inawo.html">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-increase-level fw-bold text-white"></i></div>
                                                                                        <span class="vstack gap-narrow mt-nnarrow">
                                                                                            <b class="fw-medium dark:text-white">Nouveauté chez Inawo</b>
                                                                                            <span class="fs-8 text-muted">Découvrez notre actualité. Mise a jour sur nos produits</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div>
                                                                            <h6 class="h6 mb-3"><i class="fs-7 unicon-glyph-circle-fill fw-bold ltr:me-narrow rtl:ms-narrow"></i>Ressouces</h6>
                                                                            <ul class="uc-nav uc-navbar-dropdown-nav vstack gap-2">
                                                                                <li>
                                                                                    <a class="hstack items-start gap-2" href="ebooks.html">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-increase-level fw-bold text-white"></i></div>
                                                                                        <span class="vstack gap-narrow mt-nnarrow">
                                                                                            <b class="fw-medium dark:text-white">Ebooks</b>
                                                                                            <span class="fs-8 text-muted">Des livres blancs et des ebooks pour votre entreprise</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="hstack items-start gap-2" href="outils.html">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-chat fw-bold text-white"></i></div>
                                                                                        <span class="vstack gap-narrow mt-nnarrow">
                                                                                            <b class="fw-medium dark:text-white">Outils</b>
                                                                                            <span class="fs-8 text-muted">Des templates et des ressources téléchargeables</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="hstack items-start gap-2" href="tutoriel.html">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-checkmark fw-bold text-white"></i></div>
                                                                                        <span class="vstack gap-narrow mt-nnarrow">
                                                                                            <b class="fw-medium dark:text-white">Tutoriels</b>
                                                                                            <span class="fs-8 text-muted">Suivez nos vidéos</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div>
                                                                            <h6 class="h6 mb-3"><i class="fs-7 unicon-glyph-caution fw-bold ltr:me-narrow rtl:ms-narrow"></i>Communauté</h6>
                                                                            <ul class="uc-nav uc-navbar-dropdown-nav vstack gap-2">
                                                                                <li>
                                                                                    <a class="hstack items-start gap-2" href="evenement.html">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-increase-level fw-bold text-white"></i></div>
                                                                                        <span class="vstack gap-narrow mt-nnarrow">
                                                                                            <b class="fw-medium dark:text-white">Evenements</b>
                                                                                            <span class="fs-8 text-muted">Des webinaires, Afterworks, conférences business</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <div class="hstack items-start gap-2">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-checkmark fw-bold text-white"></i></div>
                                                                                        <span class="vstack gap-narrow mt-nnarrow">
                                                                                            <b class="fw-medium dark:text-white">Inawo Academy</b>
                                                                                            <span class="fs-8 text-muted">Rejoignez les cours Inawo pour apprendre</span>
                                                                                        </span>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div class="hstack items-start gap-2" href="#">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-chart-pie fw-bold text-white"></i></div>
                                                                                        <span class="vstack gap-narrow mt-nnarrow">
                                                                                            <b class="fw-medium dark:text-white">Communauté Inawo</b>
                                                                                            <span class="fs-8 text-muted">Echangez avec vos partenaires et rejoignez un nouveau réseau d'affaires</span>
                                                                                        </span>
                                                                                    </div>
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
                                                                                <span class="fs-6 fw-bold m-0 text-dark dark:text-white">Devenir affiliées avec Inawo</span>
                                                                                <p class="fs-7">Accroitre vos revenue autrement</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="panel category-section">
                                                                        <h5 class="h6">Commencez là où vous ètes</h5>
                                                                        <ul class="uc-nav uc-navbar-dropdown-nav fs-7 fw-normal row child-cols-12">
                                                                            <li>
                                                                                <a href="./contact.html">Etude de cas</a>
                                                                            </li>
                                                                            <!-- <li>
                                                                                <a href="#">Customer stories</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Resources</a>
                                                                            </li> -->
                                                                            <li>
                                                                                <a href="./blog-sidebar.html">Secteur d'activité</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="./career.html">Témoignages</a>
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
                                                            <a href="toutes-les-fontionnalites.html"><i class="fs-8 unicon-api fw-bold"></i><span class="border-bottom hover:border-primary duration-150">Toutes les fonctionnalités</span></a>
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
                                                                            <h5 class="h5 xl:h4 fw-medium m-0">Nous sommes engagés pour la croissance des entreprises</h5>
                                                                        </div>
                                                                        <div class="row child-cols-6 gx-6">
                                                                            <div class="vstack gap-3">
                                                                                <h6 class="h6 m-0"><i class="fs-7 unicon-cube fw-bold ltr:me-narrow rtl:ms-narrow"></i> Qui sommes nous?</h6>
                                                                                <div>
                                                                                    <a href="a-propos-inawo.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-chart-pie fw-bold text-white"></i></div>
                                                                                        <div class="panel">
                                                                                            <span class="fs-7 fw-medium mb-narrow text-inherit">A propos de nous</span>
                                                                                            <p class="fs-8 text-muted">Qui sommes nous et ce que nous pouvons vous offrir</p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                                <div>
                                                                                    <a href="carrieres.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-chat fw-bold text-white"></i></div>
                                                                                        <div class="panel">
                                                                                            <span class="fs-7 fw-medium mb-narrow">Carrière</span>
                                                                                            <p class="fs-8 text-muted">Rejoigner l'équipe Inawo</p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                                <div>
                                                                                    <a href="recompenses.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-checkmark fw-bold text-white"></i></div>
                                                                                        <div class="panel">
                                                                                            <span class="fs-7 fw-medium mb-narrow">Récompences</span>
                                                                                            <p class="fs-8 text-muted">Explorez nos récompences, nos réalisations </p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                                <!-- <div>
                                                                                    <a href="./newcode/features.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                        <span class="icon rounded dark:bg-white">
                                                                                            <img class="w-32px" src="assets/images/custom-icons/icon-07.svg" alt="icon">
                                                                                        </span>
                                                                                        <div class="panel">
                                                                                            <span class="fs-7 fw-medium mb-narrow">Témoignages et étude de cas</span>
                                                                                            <p class="fs-8 text-muted">Témoignages utilisateurs</p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div> -->
                                                                            </div>
                                                                            <div class="vstack gap-3">
                                                                                <h6 class="h6 m-0"><i class="fs-7 unicon-gamification fw-bold ltr:me-narrow rtl:ms-narrow"></i>Devenez partenaire</h6>
                                                                                <div>
                                                                                    <a href="./partenariat.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-chart-pie fw-bold text-white"></i></div>
                                                                                        <div class="panel">
                                                                                            <span class="fs-7 fw-medium mb-narrow">Partenaire d'affaire</span>
                                                                                            <p class="fs-8 text-muted">Devenez partenaire d'affaire</p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                                <div>
                                                                                    <a href="Developpeurs.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-increase-level fw-bold text-white"></i></div>
                                                                                        <div class="panel">
                                                                                            <span class="fs-7 fw-medium mb-narrow">Developpeurs</span>
                                                                                            <p class="fs-8 text-muted">Crée facilement des intégrations avec notre API</p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                                <div>
                                                                                    <a href="Témoignages.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                        <div class="cstack min-w-32px h-32px rounded" style="background-color: #014990;">
                                                                                            <i class="icon-1 unicon-checkmark fw-bold text-white"></i></div>
                                                                                        <div class="panel">
                                                                                            <span class="fs-7 fw-medium mb-narrow">Témoignages</span>
                                                                                            <p class="fs-8 text-muted">Laissez nous vos avis sur notre plateforme</p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                                <!-- <div>
                                                                                    <a href="./newcode/features.html" class="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
                                                                                        <span class="icon rounded dark:bg-white">
                                                                                            <img class="w-32px" src="assets/images/custom-icons/icon-08.svg" alt="icon">
                                                                                        </span>
                                                                                        <div class="panel">
                                                                                            <span class="fs-7 fw-medium mb-narrow">AI-Powered Automation</span>
                                                                                            <p class="fs-8 text-muted">Our services offerings</p>
                                                                                        </div>
                                                                                    </a>
                                                                                </div> -->
                                                                                <!-- <div>
                                                                                    <a href="./newcode/features.html" class="ltr:ms-6 rtl:me-6 text-none fs-8 text-dark dark:text-white hover:text-primary dark:hover:text-tertiary">
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
                                                                                <a href=".html">Laissez nous un message pour toute demande d'informations</a>
                                                                            </li>
                                                                            <!-- <li>
                                                                                <a href="#">Customer stories</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Resources</a>
                                                                            </li> -->
                                                                            <li>
                                                                                <a href="Recrutement.html">Nous recrutons</a>
                                                                            </li>
                                                                            <!-- <li>
                                                                                <a href="./newcode/career.html">Career</a>
                                                                            </li> -->
                                                                            <li>
                                                                                <a href="./contact.html">Centre d'assistance</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="panel category-section">
                                                                        <h5 class="h6">Nos offres de services</h5>
                                                                        <ul class="uc-nav uc-navbar-dropdown-nav fs-7 fw-normal row child-cols-12">
                                                                            <li>
                                                                                <a href="./terms.html">Nous accompagnons des entreprises et des institutions</a>
                                                                            </li>
                                                                            <!-- <li>
                                                                                <a href="./newcode/privacy.html">Privacy Policy</a>
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
                                                            <a href="toutes-les-fonctionnalites.html"><i class="fs-8 unicon-api fw-bold"></i><span class="border-bottom hover:border-primary duration-150">Voir tout nos produits</span></a>
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
                                        </ul>

                                    </div> 
    
                                </li>
                                
                                    <a href="https://app.inawo.pro/fr/connexion" style="text-decoration: none;">Connexion</a>
                                
                                <a class="btn btn-sm  text-white dark:bg-white dark:text-primary dark:hover:bg-white fw-bold rounded-pill lg:px-2 text-none hover:contrast-shadow d-none lg:d-inline-flex" style="background-color: #014a92;" href="inscription.html">Créer un compte gratuit</a>
                                <a class="d-block lg:d-none" href="./newcode/#uc-menu-panel" data-uc-navbar-toggle-icon data-uc-toggle></a>
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