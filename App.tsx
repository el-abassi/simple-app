import {
  View,
  Text,
  Pressable,
  Alert,
  StyleSheet,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>FSA OUARZAZATE</Text>

      <Text style={styles.sousTitre}>
        Bienvenue S5
      </Text>

      <Pressable
        style={styles.bouton}
        onPress={() =>
          Alert.alert(
            'Bienvenue',
            'Votre premiere application IAIL S5 fonctionne !'
          )
        }
      >
        <Text style={styles.texteBouton}>Bienvenue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b0fcf2',
    padding: 20,
  },
  titre: {
    color: '#07603e',
    fontSize: 26,
    fontWeight: 'bold',
  },
  sousTitre: {
    marginTop: 12,
    fontSize: 16,
    textAlign: 'center',
  },
  bouton: {
    marginTop: 24,
    backgroundColor: '#07603e',
    paddingVertical: 13,
    paddingHorizontal: 28,
    borderRadius: 9,
  },
  texteBouton: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});