import { View, Text, Button, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '../../api'
import { Pressable} from 'react-native';
import { BottomNav } from '../components/BottomNav';

// Bishan Niroula
export default function ViewNote() {
  const { id } = useLocalSearchParams();
  const [note, setNote]:any = useState(null);
  const router = useRouter();


  useEffect(() => {
  axios.get(`${API}${id}/`).then(res => setNote(res.data));
  }, []);


  if (!note) return null;

  return (
  <View style={{ flex: 1, backgroundColor: '#f8f8f8', padding: 16 }}>
    <View
      style={{
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 3,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: '700', marginBottom: 12, color: '#000' }}>
        {note.title}
      </Text>
      <Text style={{ fontSize: 16, lineHeight: 22, color: '#333', marginBottom: 24 }}>
        {note.description}
      </Text>
      <Pressable
        onPress={() => router.push(`/edit/${id}`)}
        style={{
          width: 100,
          backgroundColor: '#000',
          paddingVertical: 14,
          borderRadius: 14,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#fff', fontWeight: '700', fontSize: 14 }}>Edit</Text>
      </Pressable>
    </View>
    <View style={{ flex: 1 }} />
    <BottomNav />
  </View>
  );
}


const styles = StyleSheet.create({
container: { flex: 1, padding: 16, backgroundColor: '#fff' },
title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
});
