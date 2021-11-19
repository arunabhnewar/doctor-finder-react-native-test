import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

export default function Home() {
    return (
        <View>
            <Text>This is Home</Text>
            <Button
                onPress={e => alert('hello')}
                title="This looks great!"
            />
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                defaultValue="You can type in me"
            />
        </View>
    )
}
