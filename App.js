import React, {Component} from 'react';
import {FlatList, Image, ImageBackground, Text, View, TouchableOpacity, ToastAndroid, Alert} from 'react-native';
import {style} from './asset/style';

const alert = nama => {
    Alert.alert('Perkenalkan', 'Nama Saya', + nama, [
        {
            text: 'Cancel',
            onPress: () => console.log('Hallo ' + nama + 'Anda Menekan Tombol Cancel'),
            style: 'cancel',
        },
        {
            text: 'Ok',
            onPress: () => console.log('Hallo ' + nama + 'Anda Menekan Tombol Ok'),
        },
    ]);
};

const notif = nama => {
      ToastAndroid.show('Hallo ' + nama, ToastAndroid.SHORT);
    };

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
            dataArtis: [
                {
                    nama: "Luna Maya",
                    pekerjaan: "Artis",
                    asal: "Jakarta",
                    foto: require('./asset/gambar/1.jpg'),
                },

                {
                    nama: "Cut Tari",
                    pekerjaan: "Artis",
                    asal: "Jakarta",
                    foto: require('./asset/gambar/2.png'),
                },

                {
                    nama: "Ariel tatum",
                    pekerjaan: "Artis",
                    asal: "Jakarta",
                    foto: require('./asset/gambar/3.jpg'),
                },

                {
                    nama: "Nikita Mirzani",
                    pekerjaan: "Artis",
                    asal: "Jakarta",
                    foto: require('./asset/gambar/4.jpg'),
                },

                {
                    nama: "Nikita Willy",
                    pekerjaan: "Artis",
                    asal: "Jakarta",
                    foto: require('./asset/gambar/5.jpg'),
                },

                {
                    nama: "Aura Kasih",
                    pekerjaan: "Artis",
                    asal: "Jakarta",
                    foto: require('./asset/gambar/6.jpeg'),
                },

                {
                    nama: "Cinta Laura",
                    pekerjaan: "Artis",
                    asal: "Jakarta",
                    foto: require('./asset/gambar/7.jpg'),
                },

                {
                    nama: "Syifa Hadju",
                    pekerjaan: "Artis",
                    asal: "Jakarta",
                    foto: require('./asset/gambar/8.jpg'),
                },
            ],
         };
    }
    render() {
        return (
            
            <View style={style.container}>
             
                <View style={{
                    
                     
                     flex: 0.3,
                     justifyContent: 'center',
                     alignItems: 'flex-end',
                      }}>
                      
                     <Image
                        style={{        
                                width: 420,
                                height: 230,
                                alignItems: "center"}}
                        source={require('./asset/gambar/00.jpg')}

                      
                    />
                    
  
                </View>
                <Text style={{color: "dasty", fontWeight: "bold", fontSize: 25, fontFamily:"RobotoMoto"}}>              ARTIS TOP INDONESIA</Text>
              
                <View style={style.content}>
                    <ImageBackground
                        resizeMode="cover"
                        source={require('./asset/bck.jpg')}
                        style={style.background}>

                        <FlatList
                            data={this.state.dataArtis}
                            keyExtractor={item => item.nama}
                            renderItem={({item, index}) => (
                            
                                <TouchableOpacity style={style.kotak}
                                // onPress={() => notif(item.nama)}>
                                onPress={() => alert(item.nama)}>
                                    <Image
                                        source={item.foto}      
                                        style={style.img}
                                    />
                                    <View style={{paddingHorizontal: 10}}>
                                        <Text style={style.textNama}>{item.nama}</Text>
                                        <Text style={style.textNama}>{item.pekerjaan}</Text>
                                        <Text style={style.textNama}>{item.asal}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}

                        />
                    </ImageBackground>
                </View>
               
            </View>
        );
    }
}

const Photo = () => {
    return (
        <Image
            style={{width: 400, height: 600}}
            source={require('./asset/gambar/00.jpg')}
        />
      );
}

export default App;

