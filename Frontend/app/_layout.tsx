import { Stack } from 'expo-router';
import { SafeAreaView, View, Text } from 'react-native';


export default function Layout() {
return (
<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
<View style={{ padding: 16, borderBottomWidth: 0.5, borderColor: '#ddd' }}>
<Text style={{ fontSize: 20, fontWeight: '700' }}>Notes</Text>
</View>
<Stack screenOptions={{ headerShown: false }} />
</SafeAreaView>
);
}
