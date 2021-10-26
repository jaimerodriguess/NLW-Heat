import React from "react";
import { View, Text } from "react-native";

import { Header } from "../../components/Headers";
import { MessageList } from "../../components/MessageList";
import { SigInBox } from "../../components/SignInBox";

import { styles } from './styles'

export function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <MessageList />
            <SigInBox />
        </View>
    )
}