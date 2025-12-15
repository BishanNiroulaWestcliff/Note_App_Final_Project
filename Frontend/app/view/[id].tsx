import { View, Text, Pressable } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { useEffect, useState } from 'react';
import { BottomNav } from '../components/BottomNav';
import {API} from '../../api'


export default function ViewNote() {
    const { id } = useLocalSearchParams();
    const [note, setNote] = useState<any>(null);


    useEffect(() => {
    fetch(`${API}${id}/`).then(r => r.json()).then(setNote);
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
          <Text style={{ fontSize: 16, lineHeight: 22, color: '#333' }}>
            {note.description}
          </Text>
          <Pressable
            onPress={() => router.push(`/edit/${id}`)}
            style={{
              marginTop: 24,
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
