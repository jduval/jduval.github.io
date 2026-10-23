export const problems = [
  "Le planning, les contrats ou les commandes se font encore sur Excel, sur papier ou par WhatsApp.",
  "Le logiciel du marché suit mal vos règles. L'équipe garde un fichier Excel à côté.",
  "Il est facturé par utilisateur et par mois, même pour ce que vous n'utilisez pas.",
  "Résultat : du temps perdu, des oublis (une relance, une garde, une commande) et des informations que seule une personne connaît.",
];

export const sectors = [
  {
    id: "sante",
    name: "Santé libérale",
    who: "Groupes de médecins, imagerie, centres de santé",
    question: "Qui fait le planning des gardes, et combien de temps ça lui prend chaque mois ?",
    tools: [
      "Planning des gardes et des astreintes",
      "Échanges de gardes et congés",
      "Suivi de l'équité entre associés",
    ],
    note: "Aucune donnée de patient dans l'outil : il gère des plannings, pas des dossiers médicaux.",
  },
  {
    id: "nautisme",
    name: "Nautisme et réparation navale",
    who: "Chantiers, services aux yachts, compagnies de bateaux",
    question: "Vos propriétaires vous appellent souvent pour savoir où en est leur bateau ?",
    tools: [
      "Suivi de chaque bateau et de ses interventions",
      "Planning du chantier",
      "Page propriétaire avec photos de l'avancement",
    ],
  },
  {
    id: "chauffage",
    name: "Chauffage, climatisation, énergie",
    who: "Installateurs et entreprises de maintenance",
    question: "Vos contrats d'entretien : comment savez-vous qui relancer ce mois-ci ?",
    tools: [
      "Contrats d'entretien et relances automatiques",
      "Planning des techniciens",
      "Rapports d'intervention avec photos, depuis le téléphone",
    ],
    note: "L'entretien des chaudières est obligatoire chaque année, celui des pompes à chaleur et des climatisations de 4 à 70 kW au moins tous les 2 ans.",
  },
  {
    id: "grossistes",
    name: "Grossistes alimentaires",
    who: "Fournisseurs des restaurants et des commerces",
    question: "Les commandes des restaurants arrivent encore par téléphone et WhatsApp le soir ?",
    tools: [
      "Prise de commande en ligne pour vos clients",
      "Préparation des commandes et tournées",
      "Traçabilité des lots",
    ],
  },
  {
    id: "nettoyage",
    name: "Nettoyage",
    who: "Entreprises de propreté multi-sites",
    question:
      "Quand un agent est absent, combien de temps pour trouver un remplaçant et prévenir le client ?",
    tools: [
      "Planning sur plusieurs sites",
      "Gestion des remplacements",
      "Contrôle qualité avec photos",
    ],
  },
  {
    id: "evenementiel",
    name: "Événementiel et location de matériel",
    who: "Loueurs, traiteurs, organisateurs",
    question: "Savez-vous en un coup d'œil quel matériel est libre ce samedi ?",
    tools: [
      "Disponibilité du matériel et des espaces par date",
      "Devis",
      "Logistique des livraisons et des retours",
    ],
  },
];

export const steps = [
  {
    title: "Appel de découverte",
    time: "15 minutes, gratuit",
    text: "Vous m'expliquez le problème. Je vous dis honnêtement si je peux aider.",
  },
  {
    title: "Atelier terrain",
    time: "2 heures, sur place",
    text: "Je viens voir le travail réel de l'équipe : les étapes, les règles, les exceptions.",
  },
  {
    title: "Maquette et devis",
    time: "1 à 2 jours de mon côté",
    text: "Une maquette cliquable avec vos exemples, la liste des priorités et un prix fixe.",
  },
  {
    title: "Atelier de validation",
    time: "1 h 30",
    text: "Vous testez la maquette. Ensemble, nous fixons le contenu de la première version et le prix.",
  },
  {
    title: "Première version en ligne",
    time: "1 à 3 semaines",
    text: "Un parcours complet, avec vos vraies données. L'ancien fichier reste utilisé en parallèle 1 ou 2 semaines.",
  },
  {
    title: "Deux tours de retours",
    time: "sur 4 semaines",
    text: "Un point de 15 minutes par semaine avec les utilisateurs, puis des améliorations.",
  },
  {
    title: "Fin du projet",
    time: "remise des accès",
    text: "Vous recevez les accès et la documentation. Vous gérez seul, ou vous prenez la maintenance.",
  },
];

export const offers = [
  {
    name: "Appel de découverte",
    text: "15 minutes au téléphone ou en visio, pour voir si je peux vous aider.",
    price: "Gratuit",
  },
  {
    name: "Atelier de cadrage",
    text: "Atelier sur place, maquette cliquable, document de cadrage et devis. Déduit du projet s'il est signé.",
    price: "500 à 1 500 €",
  },
  {
    name: "Petite mission",
    text: "Relier deux logiciels, ou faire lire automatiquement des documents (bons de commande, factures fournisseurs).",
    price: "à partir de 1 000 €",
  },
  {
    name: "Petit outil",
    text: "Un besoin, quelques écrans, un export PDF.",
    price: "à partir de 3 000 €",
  },
  {
    name: "Outil métier complet",
    text: "Plusieurs rôles, emails, documents, connexion à 1 ou 2 logiciels.",
    price: "à partir de 8 000 €",
  },
  {
    name: "Gros projet",
    text: "Application mobile, paiement en ligne, portail client, reprise de données complexe.",
    price: "à partir de 20 000 €",
  },
];

export const commitments = [
  {
    title: "Vous êtes propriétaire",
    text: "Nom de domaine, hébergement, base de données et code sont à votre nom. La cession des droits sur le code est écrite dans le contrat.",
  },
  {
    title: "Pas de boîte noire",
    text: "Le code est clair et documenté. Un autre développeur peut reprendre l'outil sans dépendre de moi.",
  },
  {
    title: "Un prix fixé avant de commencer",
    text: "Un forfait par projet. Pas de facturation au temps passé. Toute demande en plus passe par un devis.",
  },
  {
    title: "Pas d'abonnement obligatoire",
    text: "La maintenance est une option, sans engagement.",
  },
  {
    title: "Utile dès la première version",
    text: "Elle fonctionne avec vos vraies données, pas avec des données de test.",
  },
  {
    title: "Relié à vos logiciels",
    text: "L'outil se connecte à ce que vous utilisez déjà : facturation, agenda, comptabilité.",
  },
];

export const afterDelivery = [
  {
    title: "Garantie de 3 mois",
    text: "Les bugs sont corrigés sans frais pendant 3 mois. Les nouvelles demandes passent par un devis.",
  },
  {
    title: "Clé en main",
    text: "Vous gérez seul. Ensuite, interventions sur devis, ou pack d'heures payé d'avance (par exemple 10 heures à environ 80 € de l'heure).",
  },
  {
    title: "Maintenance mensuelle",
    text: "80 à 300 € par mois selon la taille de l'outil : mises à jour de sécurité, sauvegardes, surveillance, petites modifications. Vous arrêtez quand vous voulez, et vous gardez tout.",
  },
];

export const notDone = [
  {
    title: "Caisse, paie, facturation",
    text: "Des logiciels agréés existent déjà. Mon outil se connecte à eux, par exemple pour la facture électronique obligatoire à partir du 1er septembre 2027.",
  },
  {
    title: "Dossiers patients et données de santé",
    text: "Ils demandent un hébergeur certifié (HDS). Mes outils pour la santé gèrent des plannings, sans aucune donnée de patient.",
  },
];

export const faq = [
  {
    q: "Combien de temps pour avoir un outil ?",
    a: "Une première version arrive 1 à 3 semaines après le cadrage, selon la taille de l'outil. Le projet complet dure environ 2 mois, retours compris.",
  },
  {
    q: "Qui est propriétaire de l'outil ?",
    a: "Vous : le code, les comptes et les données. C'est écrit dans le contrat.",
  },
  {
    q: "Et si j'arrête la maintenance ?",
    a: "Vous gardez tout. Le code et la documentation sont faits pour qu'un autre développeur reprenne l'outil facilement.",
  },
  {
    q: "Pouvez-vous reprendre mon fichier Excel ?",
    a: "Oui. La reprise de vos fichiers existants est prévue dès le cadrage.",
  },
  {
    q: "Mon outil peut-il se connecter à mon logiciel de facturation ?",
    a: "Oui. Cela aide aussi pour la facture électronique, obligatoire pour les TPE et PME à partir du 1er septembre 2027.",
  },
  {
    q: "Travaillez-vous à distance ?",
    a: "Les rendez-vous pour comprendre vos besoins et voir le travail de l'équipe se font sur place. Le développement se fait ensuite à distance.",
  },
  {
    q: "Comment se passe le paiement ?",
    a: "30 % à la signature, 40 % à la mise en ligne de la première version, 30 % à la fin des retours.",
  },
];
