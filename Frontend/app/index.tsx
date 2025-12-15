// Bishan Niroula

import { View, Text, FlatList, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import { router } from 'expo-router';
import { BottomNav } from './components/BottomNav';
import { API } from '../api'

export default function Home() {
const [notes, setNotes] = useState<any[]>([]);

useEffect(() => {
  fetch(API).then(r => r.json()).then(setNotes);
}, []);

return (
  <View style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={{ padding: 12 , display : 'flex'}}
        data={notes}
        numColumns={2}
        keyExtractor={i => String(i.id)}
        renderItem={({ item }) => (
          <Pressable
          onPress={() => router.push(`/view/${item.id}`)}
          style={{
            height: 200,
            maxWidth: 200,
            backgroundColor: '#c5c5c5',
            padding: 14,
            margin: 6,
            borderRadius: 12,
            flex: 1,
            elevation: 2
          }}>
              <Text style={{ fontWeight: '700', marginBottom: 6 }}>{item.title}</Text>
              <Text numberOfLines={4}>{item.description}</Text>
          </Pressable>
      )}
      />
      <BottomNav />
  </View>
  );
}


