import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

function App() {
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('Testando a frase do app');

  let frases = [
    'Siga bons habitudos',
    'desevolva softaweres ate querer desmaiar',
    'seja um pouco mais duro com vc mesmo',
    'investa na sua educao',
    'tome banho todo santo dia',
    'siga os bons e aprenda com eles',
    'vc tem livre harbituio'
  ]

    function quebraBiscoito() {
      let numerosAleatorios = Math.floor(Math.random() * frases.length)
      setTextoFrase(' "'+frases[numerosAleatorios]+'" ')
      setImg(require('./src/biscoitoAberto.png'))
  }

  function reniciarBiscoito() {
    setImg(require('./src/biscoito.png'))
    setTextoFrase('')

  }

  return (
    <View style={styles.container}>
       <Image 
      source={img}  
      style={styles.img}
      /> 
      <Text style={styles.textoFrase}>{textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={ quebraBiscoito }>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, {marginTop: 15, borderColor: '#121212'} ]} onPress={ reniciarBiscoito }>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, {color: '#121212'}]}>Reniciar biscoito</Text>
        </View>
      </TouchableOpacity>
      

    </View>
  )

}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 25
    },
    img: {
      width: 230,
      height:230
    },
    textoFrase: {
      fontSize: 20,
      color:'#dd7b22',
      margin: 30,
      fontStyle: 'italic',
      textAlign: 'center'
    },
    botao: {
      width: 230,
      height: 50,
      borderColor: '#dd7b22',
      borderWidth: 2,
      borderRadius: 25
    },
    btnArea:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    btnTexto: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#dd7b22'
    }
  })



  export default  App;

