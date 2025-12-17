# MiniChat - Application de Messagerie Mobile

## 📱 Description

MiniChat est une application de messagerie mobile construite avec React Native et Expo. Elle offre une interface de chat simple et intuitive où les utilisateurs peuvent envoyer et recevoir des messages en temps réel.

## ✨ Fonctionnalités

- **Messagerie en temps réel**: Envoyez et recevez des messages instantanément
- **Historique persistant**: Les messages sont sauvegardés localement avec AsyncStorage
- **Interface responsive**: Design adapté à tous les appareils mobiles
- **Réponses automatiques**: Le bot répond automatiquement aux messages
- **Distinction visuelle**: Les messages de l'utilisateur et du bot sont visuellement distincts
- **Timestamps**: Chaque message affiche l'heure d'envoi

## 🏗️ Structure du Projet

```
MiniChat/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx       # Layout des onglets
│   │   ├── index.tsx         # Page d'accueil
│   │   ├── chat.tsx          # Page du chat
│   │   ├── explore.tsx       # Page d'exploration
│   │   └── ...
│   ├── _layout.tsx           # Layout principal
│   └── modal.tsx             # Modal
├── components/
│   ├── MessageBubble.tsx     # Composant pour afficher un message
│   ├── ChatInput.tsx         # Composant pour saisir un message
│   ├── haptic-tab.tsx        # Onglet avec retour haptique
│   ├── ui/
│   │   ├── icon-symbol.tsx   # Icônes
│   │   ├── collapsible.tsx   # Composant collapsible
│   │   └── ...
│   └── ...
├── hooks/
│   ├── useChat.ts            # Hook pour gérer l'état du chat
│   ├── use-color-scheme.ts   # Hook pour le thème
│   └── ...
├── types/
│   └── index.ts              # Types TypeScript
├── constants/
│   └── theme.ts              # Constantes de thème
├── assets/
│   └── images/               # Images et ressources
└── package.json              # Dépendances du projet
```

## 🚀 Installation et Démarrage

### Prérequis

- Node.js (v16 ou supérieur)
- npm ou yarn
- Expo CLI

### Installation

```bash
# Cloner le projet
git clone <repository-url>
cd MiniChat

# Installer les dépendances
npm install

# Ou avec yarn
yarn install
```

### Démarrage

```bash
# Démarrer l'application
npm start

# Ou avec yarn
yarn start

# Pour iOS
npm run ios

# Pour Android
npm run android

# Pour Web
npm run web
```

## 📝 Utilisation

1. **Accédez au Chat**: Cliquez sur l'onglet "Chat" en bas de l'écran
2. **Composez un message**: Tapez votre message dans le champ de saisie
3. **Envoyez le message**: Appuyez sur le bouton "Envoyer"
4. **Recevez une réponse**: Le bot répondra automatiquement après 500ms

## 🔧 Composants Principaux

### MessageBubble
Affiche un message individuel avec:
- Texte du message
- Nom de l'expéditeur
- Timestamp formaté
- Alignement et couleur basés sur l'expéditeur

### ChatInput
Composant de saisie avec:
- Champ de texte multiligne
- Bouton d'envoi
- Validation (empêche les messages vides)
- Limite de 500 caractères

### useChat Hook
Gère l'état du chat:
- Chargement des messages depuis AsyncStorage
- Envoi de nouveaux messages
- Sauvegarde persistante
- Simulation de réponses du bot

## 💾 Stockage des Données

Les messages sont stockés localement avec **AsyncStorage** sous la clé `minichat_messages`. Chaque message contient:

```typescript
type Message = {
  id: string;           // Identifiant unique
  text: string;         // Contenu du message
  sender: 'user' | 'bot'; // Expéditeur
  timestamp: number;    // Timestamp Unix
};
```

## 🎨 Thème et Styles

L'application utilise un système de thème cohérent:
- **Couleur primaire**: #007AFF (Bleu iOS)
- **Couleur secondaire**: #E5E5EA (Gris clair)
- **Messages utilisateur**: Bleu à droite
- **Messages bot**: Gris à gauche

## 📦 Dépendances Principales

- **React Native**: Framework mobile
- **Expo**: Plateforme de développement
- **Expo Router**: Navigation
- **AsyncStorage**: Stockage local
- **React Navigation**: Navigation entre écrans

## 🧪 Tests

Pour exécuter les tests:

```bash
npm test
```

## 📄 Licence

Ce projet est sous licence MIT.

## 👨‍💻 Auteur

Créé avec ❤️ pour une meilleure expérience de messagerie mobile.

## 🤝 Contribution

Les contributions sont bienvenues! N'hésitez pas à ouvrir une issue ou une pull request.

## 📞 Support

Pour toute question ou problème, veuillez ouvrir une issue sur le repository.
