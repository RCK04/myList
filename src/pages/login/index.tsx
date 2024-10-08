import React, { useState } from "react";

import { 
    Text, 
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from 'react-native';

import { style } from "./style";
import Logo from '../../assets/logo.png';
import {MaterialIcons} from '@expo/vector-icons';
import { themes } from "../../global/themes";

// Exṕort login page - step 1
export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function getLogin(){
        try {
            setLoading(true);
            if(!email || !password){
                return Alert.alert('Atenção', 'Informe os campos obrigatórios!');
            }

            setTimeout(() => {
                Alert.alert('Logado com sucesso!');
                setLoading(false)
            }, 2500)

            
        } catch (error) {
            console.log(error);
        }
    }

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
                        value={email}
                        onChangeText = {setEmail}


                    />
                    <MaterialIcons
                        name='email'
                        size={20}
                        color={themes.colors.gray}
                    />
                </View>

                <Text style={style.titleInput}>SENHA</Text>
                <View style={style.BoxInput}>
                    <TextInput
                        style={style.input}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <MaterialIcons
                        name='remove-red-eye'
                        size={20}
                        color={themes.colors.gray}
                    />
                </View>
            </View>
            
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={getLogin}>
                    {
                        loading?
                            <ActivityIndicator color={'#ffffff'} size={"small"} />
                        :
                            <Text style={style.textButton}>Entrar</Text>
                    }
                </TouchableOpacity>
            </View>
            <Text style={style.textBottom}>Não tem conta? <Text style={{color: themes.colors.primary}}>Crie agora!</Text></Text>
        </View>
    )
}