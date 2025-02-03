import { View, Text, StyleSheet } from 'react-native';

export default function Attendance() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attendance</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
}); 