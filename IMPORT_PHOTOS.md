# Importer les photos du Drive sans refaire 40 messages

Le lien Drive n'est pas directement utilisable par le site. Il faut télécharger les photos puis les mettre dans :

`assets/images/photos/`

Le portfolio pointe déjà vers des fichiers `.jpg` nommés clairement.
Il suffit donc de remplacer les images provisoires par les vraies photos en gardant les mêmes noms.

## Noms importants pour le projet Rafale

- `rafale-cover.jpg` : image principale du projet
- `rafale-schema-electrique.jpg` : schéma électrique
- `rafale-routage-final.jpg` : routage final
- `rafale-pcb-3d.jpg` : vue 3D du PCB
- `rafale-percage.jpg` : perçage
- `rafale-soudure.jpg` : soudure
- `rafale-circuit-fini.jpg` : carte terminée
- `rafale-multimetre.jpg` : test au multimètre
- `rafale-oscilloscope.jpg` : test à l'oscilloscope
- `rafale-piste-abimee.jpg` : piste abîmée
- `rafale-correction-soudure.jpg` : correction par soudure
- `rafale-isis.jpg` : capture ISIS
- `rafale-ares.jpg` : capture ARES
- `rafale-cdc.jpg` : extrait cahier des charges
- `rafale-synoptique.jpg` : synoptique
- `rafale-besoins.jpg` : tableau des besoins
- `rafale-calculs.jpg` : calculs de dimensionnement
- `rafale-composants.jpg` : tableau des composants
- `rafale-dossier.jpg` : extrait dossier
- `rafale-nomenclature.jpg` : nomenclature
- `rafale-plan-percage.jpg` : plan de perçage
- `rafale-tableau-mesures.jpg` : tableau de mesures
- `rafale-oscillo-avant.jpg` : oscilloscope avant réglage
- `rafale-oscillo-apres.jpg` : oscilloscope après réglage
- `rafale-signal.jpg` : signal mesuré

## Prompt à donner à Codex après avoir téléchargé les photos

```text
Mes vraies photos sont dans assets/images/photos-a-ajouter/.
Regarde le fichier assets/images/photos/image-map.json et renomme/copier les photos les plus pertinentes dans assets/images/photos/ en remplaçant les placeholders existants.
Garde exactement les noms attendus par le site.
Ne modifie pas la structure HTML sauf si une image ne s'affiche pas.
Optimise les images si elles sont trop lourdes.
```

## Conseil

Si tu ne veux pas utiliser Codex : ouvre simplement `assets/images/photos/`, puis remplace les fichiers `.jpg` un par un avec tes vraies images en conservant les mêmes noms.
