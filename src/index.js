import React, {useEffect, useState } from 'react';
import { SafeAreaView ,Text, StyleSheet, StatusBar, FlatList, TouchableOpacity} from 'react-native'
import api from './services/api'
// view === div html
// não possui valor semântico ( não tem significado igual header, footer e etc...)
// no react-native é tudo abstrato, um texto é um texto, view é uma view e etc...
// Nâo possuem estilização própria por ex: h1, strong, h2 e etc...
// todos componentes possuem por padrão "display: flex"



// View: div, footer , header, main, aside, section e etc...
// Text: p, span, strong, h1, h2, h3 ( Qualquer lugar que for colocar um texto )
export default function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => { //useEffect sempre despara uma função quando algo muda, se o parametro estiver vazio,
        // dispara automaticamenter
        api.get('projects').then(response => { 
            console.log(response.data);
           
            setProjects(response.data)
        })
    }, []);
    async function handleAddProject() {
        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: 'Guilherme Barroso',
        })
        const project = response.data;
        setProjects([...projects, project])
    }
    return (
        <>
        <StatusBar barStyle = "white-content" backgroundColor="#7159c1"/>
        <SafeAreaView style = {styles.container}>
        <FlatList
           
            data = {projects}
            keyExtractor = {project => project.id}
            renderItem = {({ item: project }) => ( // item == projeto, para podermos utilizar a palavra project
                                                    //teria que fazer item: project
                <Text style = {styles.title} key = {project.id}>{project.title}</Text>
            )}
        />
        <TouchableOpacity 
        activeOpacity = {0.6} 
        style ={styles.button} 
        onPress={handleAddProject}
        > 
        {/*NO react native nao é onclick e sim onpress.*/}
            <Text style = {styles.buttonText}>Adicionar Projeto</Text>
        </TouchableOpacity>
        </SafeAreaView>
        {/*<ScrollView  style = {styles.container}>
            {projects.map(project => <Text style = {styles.title} key = {project.id}>{project.title}</Text>)}
        </ScrollView>*/}
        </>
    );
}


const styles = StyleSheet.create({ // um arquivo de estilização ( um css em js praticamente)
    container: { // aqui pode criar qnts propriedades quiser
                // são as mesmas propriedades do css
         // conteudo pra ocupar a tela
        backgroundColor:  '#7159c1',// não pode conter hifens, apenas camel case
        flex: 1
        
      
    }, // Nâo existe herança de container
    title: {
        fontSize: 20,
        color: 'white',
        

    },
    button: {
        backgroundColor: '#fff',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
    }


    

})