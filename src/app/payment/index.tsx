import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSharedValue } from "react-native-reanimated";

import AntDesign from '@expo/vector-icons/AntDesign';
import {styles } from '@/app/payment/style'

import { CreditCard, CARD_SIDE} from "@/components/credit-card";
import { Input } from "@/components/input";


export function Payment(){
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [date, setDate] = useState('');
    const [code, setCode] = useState('');

    const cardSide = useSharedValue(CARD_SIDE.front)

    function showFrontCard(){
        cardSide.value = CARD_SIDE.front
    }
    
    function showBackCard(){
        cardSide.value = CARD_SIDE.back
    }

    function handleFlipCard(){
        if(cardSide.value === CARD_SIDE.front){
            showBackCard()
        }else{
            showFrontCard()
        }
    }
    return(
        <View style={styles.container}>
            <CreditCard cardSide={cardSide} 
            data={{
                name, 
                number: number.replace(/(\d{4})(?=\d)/g, "$1 "), 
                date: date.replace(/(0[1-9]|1[0-2])(\d{2})/, "$1/$2"),
                code}}
            />

            <TouchableOpacity style={styles.btn} onPress={handleFlipCard}>
                <AntDesign name="retweet" size={24} color="black" />
                <Text>Inverter</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Dados bancários</Text>
            <View style={styles.form}>

                <Input placeholder="Nome do titular" onChangeText={setName} onFocus={showFrontCard}/> 

                <Input placeholder="Número do cartão" keyboardType="numeric" maxLength={16} onChangeText={setNumber} onFocus={showBackCard}/> 

                <View style={styles.inputInline}>
                    <Input placeholder="01/02" style={styles.smallInput} keyboardType="numeric" maxLength={4} onChangeText={setDate} onFocus={showBackCard}/> 
                    <Input placeholder="123" style={styles.smallInput} keyboardType="numeric" maxLength={3} onChangeText={setCode} onFocus={showBackCard}/> 
                </View>
            </View>

        </View>
    )
}