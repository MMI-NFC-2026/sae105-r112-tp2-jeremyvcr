// Le chemin du script indique comment revenir à la racine du site.
const racine = document.currentScript.getAttribute("src").replace("src/js/script.js", "");

// La page d'accueil possède déjà son menu en HTML.
if (!document.querySelector("#menu")) {
    document.body.insertAdjacentHTML("afterbegin", `
        <header class="header">
            <button class="burger" type="button" popovertarget="menu" aria-label="Ouvrir le menu">
                🍔
            </button>
            <nav class="menu" id="menu" popover aria-label="Menu principal">
                <button class="menu__close burger burger--close" type="button"
                    popovertarget="menu" popovertargetaction="hide"
                    aria-label="Fermer le menu" autofocus>🍔</button>
                <h4>Menu</h4>
                <ul class="menu__list">
                    <li><a href="${racine}index.html">Accueil</a></li>
                    <li><a href="${racine}cats/index.html">Les chats</a>
                        <ul>
                            <li><a href="${racine}cats/chat-1.html">Chat 1</a></li>
                            <li><a href="${racine}cats/chat-2.html">Chat 2</a></li>
                        </ul>
                    </li>
                    <li><a href="${racine}dogs/index.html">Les chiens</a>
                        <ul>
                            <li><a href="${racine}dogs/chien-1.html">Chien 1</a></li>
                            <li><a href="${racine}dogs/chien-2.html">Chien 2</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    `);
}
