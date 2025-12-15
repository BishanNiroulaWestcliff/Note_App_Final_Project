import { View, Text } from 'react-native';
import { BottomNav } from './components/BottomNav';

export default function About() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f8f8f8', padding: 24 }}>
      <View
        style={{
          backgroundColor: '#fff',
          borderRadius: 16,
          padding: 24,
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowRadius: 8,
          elevation: 4,
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <Text style={{ fontSize: 18, lineHeight: 28, color: '#222', textAlign: 'center', fontWeight: '600' }}>
           PRG 402 Notes Project app built with{' '}
          <Text style={{ fontWeight: '800' }}>Expo</Text> +{' '}
          <Text style={{ fontWeight: '800' }}>Django REST Framework</Text>.
        </Text>
      </View>
      <View style={{ flex: 1 }} />
      <BottomNav />
    </View>
  );
}
