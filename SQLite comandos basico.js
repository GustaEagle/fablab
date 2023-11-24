import * as React from 'react';
import {View,Button, StyleSheet, Text} from 'react-native';
import SQLite from 'react-native-sqlite-storage';

// Define a função para abrir o banco de dados
const db = SQLite.openDatabase()({
    name:'Login',
    location:'default',
    },
);


const createTable = () => { // para criar uma tabela e suas colunas
    db.transaction((lo) => {
        lo.executeSql(
            "CREATE TABLE IF NOT EXIST" + // Cria a tabela
            "Usuario"+ // Define um nome para a tabela
            "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Nome TEXT, Senha TEXT, Idade INTEGER)" //Define o nome e o tipo de valores das colunas

        ),
        
        lo.executeSQL( // Inserindo dados nas tabelas respectivamente
            "INSERT INTO Usuario (Nome,Senha,Idade) VALUES (?,?,?)",[nome,senha,idade] //Setando no array com os nomes das variáveis respectivamente de cada coluna
        ),

        lo.executeSQL(
            "SELECT Nome, Idade FROM Usuario",
            [],
            (tx,resultados)=>{
                var len = results.row.length
                if(len>0){
                    var UserNome = results.rows.item(0).Nome
                    var UserIdade = results.rows.item(0).Idade
                    setName(UserNome)
                    setAge(UserIdade)
                }
            }
        )

        lo.executeSQL(
            "UPDATE Usuarios SET Nome=? WHERE ID = 2", //Mesmo esquema do INSERT
            [nome]
        )

        lo.executeSQL(
            "DELETE FROM Usuario",
            [],
        )
    })
}
