import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default props => (
    <View style={{ alignItems: 'center' }}>
        <TextInput 
            style={styles.visor}
            placeholder='Resultado'
            editable={false}
            value={props.resultado}
        />
    </View>
);

const styles = StyleSheet.create({
    visor: {
        height: 120,
        fontSize: 40
    }
});

// import React, { Component } from 'react';
// import { View, TextInput, StyleSheet } from 'react-native';

// export default class Visor extends Component {
//     constructor(props) {
//         super(props);

//         this.state = { resultado: '' };
//     }
//     render() {
//         return (
//             <View>
//                 <TextInput 
//                     style={styles.visor}
//                     placeholder='Resultado'
//                     value={this.state.resultado}
//                 />
//             </View>
//         );
//     }
// }
    

// const styles = StyleSheet.create({
//     visor: {
//         height: 120,
//         fontSize: 40
//     }
// });
