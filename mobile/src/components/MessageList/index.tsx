import React from "react";
import { View, ScrollView } from "react-native";
import { Message } from "../Message";

import { styles } from "./styles";

const message = {
    id: '1',
    text: 'Minha mensagem em data',
    user: {
        name: 'Jaime Rodriguess',
        avatar_url: 'https://github.com/jaimerodriguess.png'
    }
}


export function MessageList() {
    return(
        <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="never"
        >
            <Message data={message}/>
            <Message data={message}/>
            <Message data={message}/>
            <Message data={message}/>
        </ScrollView>
    )
}