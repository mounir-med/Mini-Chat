import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bienvenue à MiniChat!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.welcomeContainer}>
        <ThemedText type="subtitle">À propos de MiniChat</ThemedText>
        <ThemedText>
          Une application de messagerie simple et rapide pour communiquer en temps réel. Envoyez des messages, recevez des réponses instantanées et profitez d'une expérience de chat fluide.
        </ThemedText>

        <TouchableOpacity 
          style={styles.chatButton}
          onPress={() => router.push('/(tabs)/chat')}
        >
          <Text style={styles.chatButtonText}>Aller au Chat →</Text>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Fonctionnalités</ThemedText>
        <ThemedText>✓ Messagerie en temps réel</ThemedText>
        <ThemedText>✓ Historique des messages sauvegardé</ThemedText>
        <ThemedText>✓ Interface intuitive et responsive</ThemedText>
        <ThemedText>✓ Réponses automatiques du bot</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Comment utiliser</ThemedText>
        <ThemedText>
          1. Accédez à l'onglet "Chat" en bas de l'écran{'\n'}
          2. Tapez votre message dans le champ de saisie{'\n'}
          3. Appuyez sur "Envoyer" pour envoyer votre message{'\n'}
          4. Recevez une réponse automatique du bot
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  welcomeContainer: {
    gap: 12,
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#F0F8FF',
    borderRadius: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16,
  },
  chatButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  chatButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
