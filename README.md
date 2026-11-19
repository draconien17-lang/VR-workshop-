# VR Workshop

Atelier de conception 3D paramétrique dans le navigateur, construit pour le bureau, le mobile et une utilisation immersive avec Meta Quest 3.

## Utiliser l’application

- `index.html` ouvre l’atelier spatial de manipulation.
- `cad.html` ouvre le Part Studio à géométrie exacte B-Rep.
- La VR nécessite le Meta Quest Browser et HTTPS. Le bouton d’accès VR explique quand le navigateur courant n’est pas compatible.
- Pour développer : `npm install`, puis `npm run dev`. `npm run build` construit et prépare les fichiers du site GitHub Pages à la racine.

## Part Studio

Le Part Studio permet de dessiner des rectangles, cercles, ellipses, polygones et rectangles arrondis, puis de créer des blocs, cylindres et sphères. Il propose extrusion, révolution, congé, chanfrein, union, soustraction, intersection, miroirs, translation, rotation et changement d’échelle par axe. Les faces peuvent être poussées ou creusées avec une distance signée. La sélection d’arête applique un congé ou un chanfrein ciblé. Les sommets visibles peuvent servir de poignées pour déplacer la pièce.

Les opérations sont rejouées dans un historique paramétrique local. L’application prend en charge annuler/rétablir, la sauvegarde locale, les fichiers projet JSON, les exports STEP et STL. Le noyau OpenCascade est exécuté dans un Worker afin de garder l’interface réactive.

## Meta Quest 3

Le mode VR demande une session WebXR immersive, avec suivi des mains lorsqu’il est proposé par le navigateur et les contrôleurs en solution de secours. La gâchette ou le pincement saisit l’objet; deux mains règlent son échelle. Le bouton grip des contrôleurs fait défiler les modes Objet, Face, Arête et Sommet. En mode Face, maintenir la saisie et tirer le long de la normale ajoute ou retire de la matière. Les déplacements et mises à l’échelle sont conservés comme opérations dans l’historique.

## État du projet

VR Workshop est un prototype CAO actif, pas encore un remplacement fonctionnel complet d’Onshape. Le solveur de contraintes d’esquisse, les esquisses posées directement sur les faces, sweep/loft avancés, les arbres de conception multi-pièces, assemblages et mates, tôlerie, dessins, collaboration, gestion de versions et modules d’ingénierie restent à développer. Les fonctions Quest doivent aussi être validées sur un casque physique avant de pouvoir garantir le comportement sur chaque version de navigateur.
