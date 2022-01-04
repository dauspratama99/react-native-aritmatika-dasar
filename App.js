import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            panjang: 0,
            lebar: 0,
            hasil: 0,
        };
    }

    hitungluas = () =>{
        let hasilnya = 
            parseInt(this.state.panjang) * parseInt(this.state.lebar);
            this.setState({hasil: hasilnya});

    };

    hitungtinggi = () =>{
        let hasilnya = 
             2 * (parseInt(this.state.panjang) * parseInt(this.state.lebar));
            this.setState({hasil: hasilnya});

    };


    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{
                backgroundColor: 'yellow',
                 flex: 1,
                 justifyContent: 'center',
                 alignItems: 'center',
                  }}>
                
                <Text style={{
                    color: 'black',
                    fontSize: 20,
                    fontWeight: 'bold',
                }}>Hitung Luas Persegi Panjang</Text>
                </View>

                <View style={{backgroundColor: 'white', flex: 8 }}>
                    <TextInput
                        value={this.state.panjang}
                        style={{
                            backgroundColor: 'grey',
                            marginHorizontal: 10,
                            marginTop: 40,
                            color: '#ffff',
                            paddingVertical: 5,
                            padding: 20,
                            borderRadius: 10,
                        }}
                        placeholder="Masukan Nilai Panjang"
                        placeholderTextColor="yellow"
                        keyboardType="number-pad"
                        onChangeText={value => this.setState({panjang: value})}
                        />

                    <TextInput
                        value={this.state.lebar}
                        style={{
                            backgroundColor: 'grey',
                            marginHorizontal: 10,
                            marginTop: 40,
                            color: '#ffff',
                            paddingVertical: 5,
                            padding: 20,
                            borderRadius: 10,
                        }}
                        placeholder="Masukan Nilai Lebar"
                        placeholderTextColor="yellow"
                        keyboardType="number-pad"
                        onChangeText={value => this.setState({lebar: value})}
                        />

                        <TouchableOpacity
                            style={{
                                backgroundColor: 'red',
                                marginTop: 35,
                                marginHorizontal: 50,
                                borderRadius: 15,
                                paddingVertical: 20,
                            }}
                            onPress={() => this.hitungluas()}>
                            <Text
                                style={{
                                    textAlign: "center",
                                    color: "white",
                                    fontWeight: "bold"
                                }}>Hitung Luas</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                backgroundColor: 'purple',
                                marginTop: 35,
                                marginHorizontal: 50,
                                borderRadius: 15,
                                paddingVertical: 20,
                            }}
                            onPress={() => this.hitungtinggi()}>
                            <Text
                                style={{
                                    textAlign: "center",
                                    color: "white",
                                    fontWeight: "bold"
                                }}>Hitung Keliling</Text>

                        </TouchableOpacity>

                        
                                <Text
                                    style={{
                                        marginTop: 45,
                                        textAlign: "center",
                                        fontSize: 50,
                                    }}>
                                        {this.state.hasil}
                                    </Text>
                        


                    
                </View>

                

                <View style={{
                    backgroundColor: 'grey',
                     flex: 1,
                     justifyContent: 'center',
                     alignItems: 'flex-end',
                      }}>
                    <Text style={{
                        color: 'yellow',
                        padding: 10,
                    }}>Daus 99</Text>
                </View>
                
            </View>
        );
    }
}

export default App;