# VR Workshop

Atelier de modélisation 3D dans le navigateur, avec une interface adaptée au bureau, au mobile et au Meta Quest 3.

## Démarrer

- Ouvrir `index.html` pour l’atelier de manipulation 3D et ses commandes VR/MR.
- Ouvrir `cad.html` pour le Part Studio à modélisation B-Rep.
- Servir le site en HTTPS pour activer les fonctions WebXR; GitHub Pages fournit HTTPS.
- Pour travailler sur le Part Studio : `npm install`, puis `npm run dev`. `npm run build` prépare aussi les fichiers nécessaires au déploiement Pages à la racine.

## Part Studio disponible

Le Part Studio comprend les esquisses rectangle, cercle, ellipse, polygone et rectangle arrondi; les primitives boîte, cylindre et sphère; extrusion et révolution; congé, chanfrein et opérations booléennes union/soustraction/intersection. Les opérations sont enregistrées dans un historique paramétrique local. L’application permet annuler/rétablir, modifier les dimensions, sauvegarder/réouvrir un projet JSON et exporter en STEP ou STL.

Le noyau OpenCascade (via brepjs/occt-wasm) construit des solides B-Rep. Le projet reste un prototype en évolution et ne prétend pas encore couvrir l’ensemble des fonctions Onshape : contraintes d’esquisse et solveur, balayage/loft, assemblages et mates, tôlerie, dessins, collaboration/versionnage et autres modules avancés restent à construire.

## Quest 3 et WebXR

La page d’atelier gère l’entrée VR/MR selon les capacités de l’appareil et du navigateur. Les fonctions MR/passthrough dépendent des permissions et des API prises en charge par le navigateur Quest. Les gestes de manipulation sont expérimentaux. Le Part Studio est actuellement une interface 3D bureau/mobile; les commandes directes par mains/contrôleurs Quest et un espace de travail immersif restent à intégrer.
