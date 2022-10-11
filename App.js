import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState("")
  const [altura, setAltura] = useState("")

  function handleSubmit() {
    if(peso === '' || altura === '') {
      alert('Preencha todos os campos!')
      return
    }

    const alt = altura / 100
    const imc = (peso / (alt * alt)).toFixed(2)

    if(imc < 18.6) {
      alert('Você está abaixo do peso! ' + imc)
    } else if(imc >= 18.6 && imc < 24.9) {
      alert('Peso ideal! ' + imc)
    } else if(imc >= 24.9 && imc < 34.9) {
      alert('Levemente acima do peso! ' + imc)
    } else {
      alert('impreciso!')
    }
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC</Text>

      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={(peso) => setPeso(peso)}
        placeholder="Peso (kg)"
        keyboardType='numeric'
      />

      <TextInput
        style={styles.input}
        value={altura}
        onChangeText={(altura) => setAltura(altura)}
        placeholder="Altura (cm)"
        keyboardType='numeric'
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonCalculate}>Calcular</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    textAlign: 'center',
    marginTop: 100,
    fontSize: 30
  },
  input: {
    padding: 15,
    margin: 30,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 20,
    marginBottom: 0
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#0FF',
  }
})
