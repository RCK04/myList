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
                <Text style={style.titleInput}>ENDEREÇO DE E-MAIL</Text>
                <View style={style.BoxInput}>
                    <TextInput
                        style={style.input}
                    />
                    <Text>Ola</Text>
                </View>

                <Text style={style.titleInput}>SENHA</Text>
                <TextInput />
            </View>
            
            <View style={style.boxBottom}>
                <Text>Bottom</Text>
            </View>
        </View>
    )
}