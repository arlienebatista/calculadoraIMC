import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App(){

  const [peso, setPeso] = useState(''); //armazena o peso
  const [altura, setAltura] = useState(''); //armazena a altura

    function executarCalculos() {
      const alt = altura / 100;
      const imc = peso / (alt * alt);
      
      
      if (imc < 18.6) {
        alert ('Você está a baixo do pesso - IMC = ' + imc.toFixed(2));
      } 
      else if (imc > 18.6 && imc < 24.9) {
        alert ('Você está com peso ideal - IMC = ' + imc.toFixed(2));
      }
      else if (imc > 24.9 && imc < 34.9) {
        alert ('Você está levemente a cima do peso - IMC = ' + imc.toFixed(2));
      }
      else if (imc > 34.9) {
        alert ('Você está a cima do pesso - IMC = ' + imc.toFixed(2));
      }
      //limpar campos
       setPeso('');
       setAltura('');
    }

  return (
    <View style={estilo.container}>
      <Text style={estilo.title}>Calcular IMC</Text>
      
        <TextInput 
        style={estilo.input}
        value ={peso}     //valor dentro do componente
        onChangeText={ (peso) => setPeso(peso) }   //toda vez que o campo mudar ele é salvo
        placeholder="Peso (kg)"
        keyboardType="numeric"
        />
       
        <TextInput 
        style={estilo.input}
        value={altura}       //valor dentro do componente
        onChangeText={ (altura) => setAltura(altura) }   //toda vez que o campo mudar ele é salvo
        placeholder="Altura (cm)" type='reset'
        keyboardType="numeric"
        />
      
        <TouchableOpacity style={estilo.botao} onPress={executarCalculos}>
          <Text style={estilo.textoBotao}>Calcular</Text> 
        </TouchableOpacity>

    </View>
    );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1
    },
      title: {
      textAlign:'center',
      marginTop: 25,
      fontSize: 30
    },
    input: {
      backgroundColor:'#DDD',
      borderRadius: 10,
      margin: 10,
      padding: 10,
      color: '#000',
      fontSize: 23
    },
    botao: {
      justifyContent:'center',
      alignItems: 'center',
      margin: 15,
      backgroundColor: '#41AEF4',
      padding: 10,
      borderRadius: 10
    },

    textoBotao: {
      color: '#FFFF',
      fontSize: 25
    },
}
);


