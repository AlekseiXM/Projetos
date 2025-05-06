import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

export default function App() {
  const [mensagem, setMensagem] = useState(null);

  useEffect(() => {
    fetch("http://172.16.0.4:5000/mensagem")
      .then(res => res.json())
      .then(data => setMensagem(data.mensagem))
      .catch(err => setMensagem("Erro ao conectar com Python."));
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {mensagem ? (
        <Text style={{ fontSize: 20 }}>{mensagem}</Text>
      ) : (
        <ActivityIndicator size="large" />
      )}
    </View>
  );
}
