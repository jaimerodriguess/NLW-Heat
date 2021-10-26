import React from "react";
import { View } from "react-native";

import { Button } from "../../components/Button";
import { COLORS } from "../../theme";

import { styles } from "./styles";

export function SigInBox() {
    return (
        <View style={styles.container}>
            <Button 
            title="ENTRAR COM O GITHUB"
            color={COLORS.BLACK_PRIMARY}
            backgroundColor={COLORS.YELLOW} 
            icon="github" 
            
             />
        </View>
    )
}