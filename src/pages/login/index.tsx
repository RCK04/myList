import React from "react";

import { 
    Text, 
    View,
    Image,
    TextInput
} from 'react-native';

import { style } from "./style";
import Logo from '../../assets/logo.png';

export default function Login(){
    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Bem vindo de volta!</Text>
            </View>

            <View style={style.boxMid}>
                <Text>Endereço de e-mail</Text>
                <TextInput/>

                <Text>Endereço de senha</Text>
                <TextInput/>
            </View>
            
            <View style={style.boxBottom}>
                <Text>Bottom</Text>
            </View>
        </View>
    )
}