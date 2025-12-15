import { View, Pressable, Text } from 'react-native';
import { Image } from 'expo-image';
import { router, usePathname } from 'expo-router';

// Bishan Niroula

export function BottomNav() {
  const path = usePathname();

  const icons: Record<string, any> = {
    home: require('../../assets/home.png'),
    add: require('../../assets/add.png'),
    about: require('../../assets/about.png'),
  };

  const Item = ({ label, route }: any) => {
    const icon = icons[label.toLowerCase()];
    const focused = path === route;

    return (
      <Pressable
        onPress={() => router.replace(route)}
        style={{ flex: 1, alignItems: 'center' }}
      >
        <Image
          source={icon}
          style={{ width: 24, height: 24, marginBottom: 4 }}
          contentFit="contain"
          tintColor={focused ? '#010101ff' : '#999'}
        />
        <Text style={{ fontWeight: focused ? '700' : '400', color: focused ? '#000' : '#999' }}>
          {label}
        </Text>
      </Pressable>
    );
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: 14,
        borderTopWidth: 0.5,
        borderColor: '#ddd',
        backgroundColor: '#fff',
      }}
    >
      <Item label="Home" route="/" />
      <Item label="Add" route="/create" />
      <Item label="About" route="/about" />
    </View>
  );
}
