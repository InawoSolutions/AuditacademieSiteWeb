const footerHTML = `
<footer id="uc-footer" class="uc-footer panel overflow-hidden text-white" style="background:#2a4743;">
    <div class="footer-outer py-4 lg:py-6 xl:py-9" style="background:#2a4743;">
        <div class="container max-w-xl">
            <div class="footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
                <div class="uc-footer-widgets panel">
                    <div class="row child-cols-6 md:child-cols col-match g-4">
                        <div class="col-12 lg:col-4">
                            <div class="panel vstack items-start gap-4 ltr:md:pe-8 rtl:md:ps-8">
                                <div class="vstack gap-2">
                                    <a href="../fr/">
                                        <img class="dark:d-none"
                                            src="../assets/images/logo02.png"
                                            alt="Inawo light" data-uc-svg style="width: 90px">
                                        <img class="text-primary d-none dark:d-block" style="width: 90px"
                                            src="../assets/images/logo-text-dark.png" alt="Inawo dark">
                                    </a>
                                    <p style="font-size: 15px;">Toutes les entreprises ont besoin de bons outils de pilotage pour assurer et soutenir leur croissance.

Avec Audit Académie, simplifiez votre gestion, renforcez votre conformité et améliorez vos performances financières.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                             <ul class="nav-y gap-1 fw-medium" style="font-size: 15px;">
                                <li class="uc-bold">Blog</li>
                                <li><a href="ressources-t.html" class="footer-link">Gestion de risque</a></li>
                                <li><a href="evenement.html" class="footer-link">Fondamentaux</a></li>
                                <li><a href="tutoriel.html" class="footer-link">Audit Interne</a></li>
                                <li><a href="support-client.html" class="footer-link">Audit externe</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul class="nav-y gap-1 fw-medium" style="font-size: 15px;">
                                <li class="uc-nav-footer uc-bold">Imane</li>
                                <li><a href="apropos.html" class="footer-link">A Propos</a></li>
                                <li><a href="commencerici.html" class="footer-link">Débutant, Commencer ici... </a></li>
                                <li><a href="mesblogs.html" class="footer-link">Blog</a></li>
                                <li><a href="formation.html" class="footer-link">Formations</a></li>
                                <li><a href="webinaires.html" class="footer-link">Webinaires</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul class="nav-y gap-1 fw-medium" style="font-size: 15px;">
                                <li class="uc-nav-footer uc-bold">L'audit</li>
                                <li><a href="#" class="footer-link">Boite à outils</a></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="uc-footer-bottom panel vstack lg:hstack gap-4 w-full justify-between pt-4 lg:pt-6 border-top overflow-hidden" style="border-top: 2px solid #fff;">
                    <div class="vstack sm:hstack justify-center lg:justify-start items-center lg:items-start gap-1 lg:gap-2">
                        <ul class="nav-x gap-2" style="font-size: 12px;">
                            <li>
                                <p class="opacity-60">ImaneConsulting @2025. Tous droits réservés.</p>
                            </li>
                            <li><a href="#" class="footer-link">Conditions générales</a></li>
                            <li><a href="#" class="footer-link">Mentions légales</a></li>
                            <li><a href="#" class="footer-link">Confidentialité/Sécurité des données</a></li>
                            <li><a href="#" class="footer-link">Politique des Cookies</a></li>
                        </ul>
                    </div>
                    <div class="hstack justify-center lg:justify-end gap-2 lg:gap-3 ">
                        <ul class="nav-x gap-2">
                            <li>
                                <a href="#" class="footer-link"><i class="icon icon-2 unicon-logo-linkedin"></i></a>
                            </li>
                            <li>
                                <a href="#" class="footer-link"><i class="icon icon-2 unicon-logo-facebook"></i></a>
                            </li>
                            <li>
                                <a href="#" class="footer-link"><i class="icon icon-2 unicon-logo-x-filled"></i></a>
                            </li>
                            <li>
                                <a href="#" class="footer-link"><i class="icon icon-2 unicon-logo-instagram"></i></a>
                            </li>
                            <li>
                                <a href="#" class="footer-link"><i class="icon icon-2 unicon-logo-youtube"></i></a>
                            </li>
                        </ul>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<style>
.footer-link {
    color: #fff !important;
    text-decoration: none;
    transition: color 0.3s ease;
}
.footer-link:hover {
    color: #b2dfdb !important;
}
.uc-nav-footer {
    color: #fff !important;
}
.uc-bold {
    font-weight: bold;
    text-decoration: underline;
}
</style>
`;

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("#footer");
  if (footer) {
    footer.innerHTML = footerHTML;
  }
});
