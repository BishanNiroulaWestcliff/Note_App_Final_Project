import { View, TextInput, Pressable, Text } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { useEffect, useState } from 'react';
import { BottomNav } from '../components/BottomNav';
import { API } from "../../api"


// Bishan Niroula
export default function EditNote() {
  const { id } = useLocalSearchParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);

  // 1. Fetch old data
  useEffect(() => {
    fetch(`${API}${id}/`)
      .then(res => res.json())
      .then(data => {
        setTitle(data.title);
        setDescription(data.description);
        setLoading(false);
      });
  }, []);

  // 2. Save = UPDATE (PUT), not create
  const save = () => {
    fetch(`${API}${id}/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description }),
    }).then(() => router.replace(`/view/${id}`));
  };

  if (loading) return null;

  return (
    <View style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
      <View style={{ padding: 16 }}>
        {/* Title Input */}
        <View
          style={{
            backgroundColor: '#fff',
            height: 50,
            borderRadius: 12,
            paddingHorizontal: 14,
            marginBottom: 16,
            shadowColor: '#000',
            shadowOpacity: 0.05,
            shadowRadius: 6,
            elevation: 2,
          }}
        >
          <TextInput
            value={title}
            onChangeText={setTitle}
            placeholder="Title"
            placeholderTextColor="#999"
            style={{
              height: '100%',
              fontSize: 20,
              fontWeight: '700',
              color: '#000',
            }}
          />
        </View>

        {/* Description Input */}
        <View
          style={{
            backgroundColor: '#fff',
            padding: 2,
            borderRadius: 12,
            paddingHorizontal: 16,
            paddingVertical: 16,
            minHeight: 180,
            shadowColor: '#000',
            shadowOpacity: 0.05,
            shadowRadius: 6,
            elevation: 2,
          }}
        >
          <TextInput
            value={description}
            onChangeText={setDescription}
            multiline
            placeholder="Write your note…"
            placeholderTextColor="#999"
            style={{
              fontSize: 16,
              lineHeight: 22,
              minHeight: 180,
              color: '#000',
            }}
          />
        </View>

        {/* Save Button */}
        <Pressable
          onPress={save}
          style={{
            marginTop: 24,
            backgroundColor: '#000',
            width: 100,
            paddingVertical: 14,
            borderRadius: 14,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#fff', fontSize: 14, fontWeight: '700' }}>
            Save Note
          </Text>
        </Pressable>
      </View>

      <View style={{ flex: 1 }} />
      <BottomNav />
    </View>
  );
}
