// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { Constants, MapView } from 'expo';
//
// export default class WeatherDetailScreen extends React.Component {
//   static navigationOptions = ({ navigation }) => {
//     return {
//       title: `Weather Info: ${navigation.getParam('city', 'Unknown')}`,
//     };
//   };
//
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       isLoading: true,
//     };
//   }
//
//   componentDidMount() {
//     const { navigation } = this.props;
//     const city = navigation.getParam('city', null);
//     // const city = 'Daejeon';
//
//     const apiKey = 'a6c5daf4722ac012289b95cebc2fb972';
//
//     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`)
//       .then(response => response.json())
//       .then(info => {
//         this.setState({
//           ...info,
//           isLoading: false,
//         });
//       });
//   }
//
//   render() {
//     if (this.state.isLoading) {
//       return (
//         <View style={styles.container}>
//           <Text>데이터를 불러오는 중입니다.</Text>
//         </View>
//       )
//     }
//
//     let celsius = this.state.main.temp - 273.15;
//
//     return (
//         <View style={styles.container}>
//             <View style={styles.container}>
//                 <Text>온도: {celsius.toFixed(1)}</Text>
//             </View>
//             <MapView
//                 style={styles.hello}
//                 initialRegion={{
//                     latitude: this.state.coord.lat,
//                     longitude: this.state.coord.lon,
//                     latitudeDelta: 0.0422,
//                     longitudeDelta: 0.0421,
//                 }}
//             >
//                 <MapView.Marker key={this.state.weather.id} coordinate={{latitude:this.state.coord.lat, longitude:this.state.coord.lon}} title={this.state.name} />
//
//             </MapView>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: Constants.statusBarHeight,
//   }, hello : {
//       height:"70%"
//
//     }
// });
