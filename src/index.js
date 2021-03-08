import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native' // view === div html
// não possui valor semântico ( não tem significado igual header, footer e etc...)
// no react-native é tudo abstrato, um texto é um texto, view é uma view e etc...
// Nâo possuem estilização própria por ex: h1, strong, h2 e etc...
// todos componentes possuem por padrão "display: flex"



// View: div, footer , header, main, aside, section e etc...
// Text: p, span, strong, h1, h2, h3 ( Qualquer lugar que for colocar um texto )
export default function App() {
    return (
        <>
        <StatusBar barStyle = "white-content" backgroundColor="#7159c1"/>
        <View  style = {styles.container}>
            <Text style = {styles.title}> O Uriel é gay! </Text>
        </View>
        </>
    );
}

const styles = StyleSheet.create({ // um arquivo de estilização ( um css em js praticamente)
    container: { // aqui pode criar qnts propriedades quiser
        // são as mesmas propriedades do css
        flex:1, // conteudo pra ocupar a tela
        backgroundColor:  '#7159c1',// não pode conter hifens, apenas camel case
        justifyContent: 'center',
        alignItems: 'center'
    }, // Nâo existe herança de container
    title: {
        fontSize: 32,
        color: 'white',
        fontWeight: 'bold'

    }

})