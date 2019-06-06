import React from 'react';
import { StyleSheet, Text, View, ART, FlatList, TouchableOpacity } from 'react-native';
import { Constants, MapView } from 'expo';
import Slider from "react-native-slider";
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

export default class WeatherDetailScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: `Weather Info: ${navigation.getParam('city', 'Unknown')}`,
        };
    };

    constructor(props) {
        super(props);

        this.state = {
            value: 1,
            isLoading: true,
        };
    }

    componentDidMount() {
        const { navigation } = this.props;
        const city = navigation.getParam('city', null);
        // const city = 'Daejeon';

        const apiKey = 'a6c5daf4722ac012289b95cebc2fb972';

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)
            .then(response => response.json())
            .then(info => {
                this.setState({
                    ...info,
                    isLoading: false,
                });
            });

    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <Text>데이터를 불러오는 중입니다.</Text>
                </View>
            )
        }
        let get_temp = this.state;

        let new_data = [];
        for(i = 0; i < 36; i++) {
            new_data.push(get_temp.list[i]["main"]["temp"]);
        }
        let cels = get_temp.list[0]["main"]["temp"] - 273.15;

        // const { info } = this.state;


        // // let celsius = this.state.main.temp - 273.15;
        // function msToTime(duration) {
        //     var milliseconds = parseInt((duration%1000)/100)
        //         , seconds = parseInt((duration/1000)%60)
        //         , minutes = parseInt((duration/(1000*60))%60)
        //         , hours = parseInt((duration/(1000*60*60))%24);
        //
        //     hours = (hours < 10) ? "0" + hours : hours;
        //     minutes = (minutes < 10) ? "0" + minutes : minutes;
        //     seconds = (seconds < 10) ? "0" + seconds : seconds;
        //
        //     return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
        // }

        return (

            <View style={styles.container}>

                <AreaChart
                    style={{flex:0.2}}
                    data={ new_data }
                    // contentInset={{ top: 30, bottom: 30 }}
                    curve={ shape.curveNatural }
                    svg={{ fill: 'rgba(255, 0, 0, 0.2)' }}
                >
                </AreaChart>

                <Slider
                    style={{backgroundColor:'rgba(242, 241, 239, 1)',flex:0.05}}
                    value={this.state.value}
                    onValueChange={value => this.setState({ value } )}
                />
                <View
                    style = {{backgroundColor:'rgba(255, 0, 0, 0.2)', alignItems:'center'}}>
                    <Text style={{
                        color:'black',
                        fontSize:20,
                        textShadowColor: 'white',
                        textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 1,
                    }}>{get_temp.list[parseInt(this.state.value * 35)]["dt_txt"]}</Text>
                    <Text style={{
                        color:'black',
                        fontSize:20,
                        textShadowColor: 'white',
                        textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 1,
                    }}>온도 : {(get_temp.list[parseInt(this.state.value * 35)]["main"]["temp"] - 273.15).toFixed(1)}</Text>
                    <Text style={{
                        color:'black',
                        fontSize:20,
                        textShadowColor: 'white',
                        textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 1,
                    }}>습도 : {get_temp.list[parseInt(this.state.value * 35)]["main"]["humidity"]}</Text>
                    <Text style={{
                        color:'black',
                        fontSize:20,
                        textShadowColor: 'white',
                        textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 1,
                    }}>날씨 : {get_temp.list[parseInt(this.state.value * 35)].weather[0]["main"]}</Text>
                </View>
                {/*<Text*/}
                {/*style={{backgroundColor: "gray"}}>{celsius}</Text>*/}

                {/*<FlatList*/}
                {/*    style={{height: 300, backgroundColor:"gray"}}*/}
                {/*    data={this.state.info}*/}
                {/*    renderItem={({info}) => {*/}
                {/*        return (*/}
                {/*            <Text>{{info}}</Text>*/}
                {/*        )*/}
                {/*    }}*/}
                {/*    keyExtractor={(item, index) => index}*/}
                {/*/>*/}
                {/*<View style={{height:"30%"}}>*/}
                {/*    {this.state.info.main.map((temp) => {*/}
                {/*        return (<Text>{temp}</Text>);*/}
                {/*    })}*/}
                {/*    /!*<Text>{Date(this.state.dt).toString()}</Text>*!/*/}
                {/*</View>*/}

                <MapView
                    style={{flex:1}}
                    initialRegion={{
                        latitude: get_temp.city.coord.lat,
                        longitude: get_temp.city.coord.lon,
                        latitudeDelta: 0.0422,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <MapView.Marker key={get_temp.list[35]["cnt"]} coordinate={{latitude:get_temp.city.coord.lat, longitude:get_temp.city.coord.lon}} title={get_temp.city.name} />

                </MapView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: Constants.statusBarHeight,
    }, hello : {
        height:"70%"

    }
});
