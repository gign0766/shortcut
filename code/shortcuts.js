const categories = {
  Navigateur: "navigateur",
  Windows: "windows",
  Word: "word",
  Excel: "excel",
  Powerpoint: "powerpoint",
  Explorateur: "Explorateur de fichiers"
};

const catIcon = new Map([
  [categories.Navigateur, 'chrome'],
  [categories.Windows, 'windows'],
  [categories.Word, 'file-word'],
  [categories.Excel, 'file-excel'],
  [categories.Powerpoint, 'file-powerpoint'],
  [categories.Explorateur, 'folder']
])

const shortcuts = [
  {
    name: "Naviguer entre les onglets",
    categories: [categories.Navigateur],
    shortcut: ["Ctrl", "Tab"],
  },
  {
    name: "Ouvrir un nouvel onglet",
    categories: [categories.Navigateur],
    shortcut: ["Ctrl", "T"],
  },
  {
    name: "Plein écran",
    categories: [categories.Navigateur],
    shortcut: ["F11"],
  },
  {
    name: "Réouvrir un onglet fermé",
    categories: [categories.Navigateur],
    shortcut: ["Ctrl", "Maj", "T"],
  },
  {
    name: "Fermer un onglet",
    categories: [categories.Navigateur],
    shortcut: ["Ctrl", "W"],
  },
  {
    name: "Copier",
    categories: [categories.Windows, categories.Word, categories.Excel, categories.Powerpoint, categories.Explorateur],
    shortcut: ["Ctrl", "C"],
  },
  {
    name: "Couper",
    categories: [categories.Windows, categories.Word, categories.Excel, categories.Powerpoint, categories.Explorateur],
    shortcut: ["Ctrl", "X"],
  },
  {
    name: "Coller",
    categories: [categories.Windows, categories.Word, categories.Excel, categories.Powerpoint, categories.Explorateur],
    shortcut: ["Ctrl", "V"],
  },
  {
    name: "Tout sélectionner",
    categories: [categories.Windows, categories.Word, categories.Excel, categories.Powerpoint, categories.Explorateur],
    shortcut: ["Ctrl", "A"],
  },
  {
    name: "Ouvrir l'explorateur de fichiers",
    categories: [categories.Windows],
    shortcut: ["Windows", "E"],
  },
  {
    name: "Enregistrer",
    categories: [categories.Word, categories.Excel],
    shortcut: ["Ctrl", "S"]
  },
  {
    name: "Enregistrer dans un dossier précis",
    categories: [categories.Word],
    shortcut: ["Ctrl", "Maj", "S"]
  },
  {
    name: "Fermer une application",
    categories: [categories.Windows],
    shortcut: ["Alt", "F4"],
  },
  {
    name: "Annuler la dernière action",
    categories: [categories.Word, categories.Excel, categories.Powerpoint],
    shortcut: ["Ctrl", "Z"],
  },
  {
    name: "Afficher le menu Démarrer",
    categories: [categories.Windows],
    shortcut: ["Windows"],
  },
  {
    name: "Rétablir la dernière action",
    categories: [categories.Word, categories.Excel, categories.Powerpoint],
    shortcut: ["Ctrl", "Y"],
  },
  {
    name: "Basculer entre les applications",
    categories: [categories.Windows],
    shortcut: ["Alt", "Tab"],
  },
  {
    name: "Afficher toutes les applications ouvertes",
    categories: [categories.Windows],
    shortcut: ["Windows", "Tab"],
  },
  {
    name: "Prendre une capture d'écran",
    categories: [categories.Windows],
    shortcut: ["Windows", "Maj", "S"],
  },
  {
    name: "Application 1 de la barre des tâches",
    categories: [categories.Windows],
    shortcut: ["Windows", "1"],
  },
  {
    name: "Application 2 de la barre des tâches",
    categories: [categories.Windows],
    shortcut: ["Windows", "2"],
  },
  {
    name: "Application [nombre] de la barre des tâches",
    categories: [categories.Windows],
    shortcut: ["Windows", "nombre"],
  },
  {
    name: "Renommer un fichier/dossier",
    categories: [categories.Explorateur],
    shortcut: ["F2"]
  },
  {
    name: "Ouvrir le gestionnaire des tâches",
    categories: [categories.Windows],
    shortcut: ["Ctrl", "Maj", "Echap"]
  },
  {
    name: "Créer un nouveau dossier",
    categories: [categories.Explorateur],
    shortcut: ["Ctrl", "Maj", "N"]
  },
  {
    name: "Verrouiller le PC",
    categories: [categories.Windows],
    shortcut: ["Windows", "L"]
  },
  {
    name: "Afficher et masquer le bureau",
    categories: [categories.Windows],
    shortcut: ["Windows", "D"]
  },
  {
    name: "Actualiser la page",
    categories: [categories.Navigateur, categories.Explorateur],
    shortcut: ["F5"]
  },
  {
    name: "Actualiser la page avancée (sans cache)",
    categories: [categories.Navigateur],
    shortcut: ["Ctrl", "F5"]
  },
  {
    name: "Navigation précédente",
    categories: [categories.Navigateur, categories.Explorateur],
    shortcut: ["Alt", "left"]
  },
  {
    name: "Navigation suivante",
    categories: [categories.Navigateur, categories.Explorateur],
    shortcut: ["Alt", "right"]
  },
  {
    name: "Supprimer définitivement",
    categories: [categories.Explorateur],
    shortcut: ["Maj", "Suppr"]
  },
  {
    name: "Ouvrir les paramètres Windows",
    categories: [categories.Windows],
    shortcut: ["Windows", "I"]
  },
  {
    name: "Réduire toutes les fenêtres",
    categories: [categories.Windows],
    shortcut: ["Windows", "M"]
  },
  {
    name: "Restaurer les fenêtres réduites",
    categories: [categories.Windows],
    shortcut: ["Windows", "Maj", "M"]
  },
  {
    name: "Paramètre de projection (multi-écran)",
    categories: [categories.Windows],
    shortcut: ["Windows", "P"]
  },
  {
    name: "Déplacer l'application sur l'écran précédent",
    categories: [categories.Windows],
    shortcut: ["Windows", "Maj", "left"]
  }
  ,
  {
    name: "Déplacer l'application sur l'écran suivant",
    categories: [categories.Windows],
    shortcut: ["Windows", "Maj", "right"]
  }
];
