# M'entends-tu ? 👂

## Contribuer au site 📝

Ce site est construit avec Next.js et Tailwind CSS. Pour ajouter du contenu ou modifier des pages existantes :

1.  **Pages Principales** : Les pages principales se trouvent dans le dossier `src/app/`.
    *   Pour modifier la page d'accueil, éditez `src/app/page.tsx`.
    *   Pour la page sur les origines, éditez `src/app/origines/page.tsx`.
    *   Pour la page sur la personnalité (Beethoven), éditez `src/app/personalite/page.tsx`.
2.  **Ajouter une nouvelle page** :
    *   Créez un nouveau dossier dans `src/app/` (par exemple, `src/app/nouvelle-page/`).
    *   Dans ce dossier, créez un fichier `page.tsx`. Vous pouvez vous inspirer des fichiers `page.tsx` existants pour la structure.
    *   Ajoutez un lien vers votre nouvelle page dans la barre de navigation (`src/components/ui/layout/Navbar.tsx`) si nécessaire.
3.  **Composants Réutilisables** : Les composants réutilisables (comme les articles, animations, etc.) sont dans `src/components/`.
    *   Les articles (`Article.tsx`) sont dans `src/components/ui/front/`.
    *   Les éléments de mise en page comme la barre de navigation (`Navbar.tsx`) et le pied de page (`Footer.tsx`) sont dans `src/components/ui/layout/`.
4.  **Styles** : Les styles globaux sont dans `src/app/globals.css`. Tailwind CSS est utilisé pour la majorité du style directement dans les fichiers `.tsx`.
5.  **Lancer le site en local** :
    *   Assurez-vous d'avoir Node.js et npm (ou yarn) installés.
    *   Ouvrez un terminal à la racine du projet.
    *   Exécutez `npm install` (ou `yarn install`) pour installer les dépendances.
    *   Exécutez `npm run dev` (ou `yarn dev`) pour démarrer le serveur de développement.
    *   Ouvrez votre navigateur à l'adresse `http://localhost:3000`.

N'hésitez pas à explorer la structure des fichiers pour mieux comprendre comment le site est organisé.

## Accueil 🏠

La page d'accueil introduit le sujet avec la question : "M'entends-tu ? <span style="color:blue">Oui</span>, mais parfois <span style="color:red">non</span>."
Elle explique brièvement que le site abordera les origines de la surdité et l'exemple d'une personne connue touchée par ce handicap.

### Qu'est-ce que la surdité ?
La surdité est une altération de la capacité à percevoir les sons, pouvant aller d'une légère difficulté à une perte auditive complète. Elle peut toucher une ou deux oreilles et survenir à tout âge. Ce trouble rend la compréhension de la parole difficile, surtout dans les environnements bruyants, et peut impacter les interactions sociales et professionnelles.

Vivre avec la surdité implique souvent des adaptations :
*   Langue des signes 🤟
*   Appareils auditifs 🦻
*   Implants cochléaires
*   Aides visuelles et technologies 📱

## Origines de la surdité 🧬

Cette section explore les diverses causes de la surdité.

*   **Origine génétique**  наследственный: Transmise héréditairement, elle peut être présente dès la naissance ou apparaître progressivement.
*   **Origine congénitale** 👶: Présente dès la naissance, elle peut résulter d'infections durant la grossesse (rubéole, cytomégalovirus) ou de complications à la naissance (manque d'oxygène, prématurité).
*   **Origine infectieuse** 🦠: Des infections comme les otites chroniques, la méningite, la rougeole ou les oreillons peuvent endommager l'oreille interne ou le nerf auditif.
*   **Origine traumatique** 💥: Traumatismes crâniens, barotraumatismes (liés à la pression) ou exposition à des sons très forts.
*   **Origine liée à l'âge (presbyacousie)** 👴👵: Détérioration naturelle des cellules ciliées de l'oreille interne avec l'âge, touchant principalement les sons aigus.
*   **Origine médicamenteuse (ototoxicité)** 💊: Certains médicaments (antibiotiques puissants, traitements contre le cancer, anti-inflammatoires) peuvent endommager l'oreille interne.

## Personnalité : Beethoven 🎹🎼

Cette page est dédiée à Ludwig van Beethoven, un exemple emblématique de génie musical ayant surmonté la surdité.

*   **Qui était Beethoven ?** Né en 1770 à Bonn, il est l'un des compositeurs les plus influents de la musique classique, marquant la transition entre les périodes classique et romantique.
*   **Origines de sa surdité**: Il a commencé à perdre l'audition vers 26 ans. Les causes exactes sont inconnues (maladie auto-immune, exposition au plomb, infections chroniques). Sa surdité est devenue totale vers la fin de sa trentaine.
*   **Comment a-t-il surmonté son handicap ?** Grâce à sa mémoire musicale exceptionnelle, il a continué à composer. Il utilisait des carnets de conversation, ressentait les vibrations du piano et visualisait les sons. Sa 9e symphonie fut composée alors qu'il était totalement sourd.
*   **Autres faits marquants**:
    *   Il a transformé la musique avec des œuvres puissantes et innovantes.
    *   Il a lutté contre la dépression et l'isolement (Testament de Heiligenstadt).
    *   Son parcours inspire des millions de personnes en situation de handicap.

---
Ce site a pour but de sensibiliser et d'informer sur la surdité.
