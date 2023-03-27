import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { myColors } from '../styles/Colors';

interface Props {
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeSwitch = ({ setTheme }: Props) => {
    const theme = React.useContext(ThemeContext);

    return (
        <View style={styles.HStack}>
            <Text style={theme === 'light' ? styles.darkText : styles.lightText}>Dark</Text>
            <Switch
                value={theme === 'light'}
                onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            />
            <Text style={theme === 'light' ? styles.darkText : styles.lightText}>Light</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    HStack: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 140,
        marginTop: 16,
    },
    darkText: {
        color: myColors.dark,
        fontSize: 16,
    },
    lightText: {
        color: myColors.light,
        fontSize: 16,
    },
});

export default ThemeSwitch;

