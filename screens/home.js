import * as React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import { Header,Icon,AirbnbRating } from 'react-native-elements';

export default class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            moviedetails : {}
        }
    }
    render(){
        const moviedetails = this.state.moviedetails
        if(movedetails.poster_link){
            const{
                poster_link,
                title,
                relese_date,
                duration,
                overview,
                rating
            } = moviedetails
        }
        return(
            <View style={styles.container}>
                <View style = {styles.headerContainer}>
                    <Header centerComponent = {{text:'Movie Recomandtion App',style:styles.headerTitle}}
                    rightComponent = {{icon:'search',color:'white'}}
                    background = 'black'
                    container = {{flex:1}}>

                    </Header>
                </View>
                <View style = {styles.subContainer}>
                    <View style= {styles.subTopContainer}>
                        <Image style={styles.posterImage}
                        source = {{uri:poster_link}}>
                        </Image>
                    </View>
                    <View style={styles.subBottomContainer}>
                        <View style={styles.upperBottomContainer}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style = {styles.subtitle}>{`${relese_date.split('-')[0]}${duration}`}</Text>
                        </View>
                        <View style={styles.middleBottomContainer}>
                            <View style={{felx:0.3}}>
                                <AirbnbRating count={10}
                                reviews = {['','','','','']}
                                defaultRating = {rating}
                                isDisabled = {true}
                                size = {RFValue(25)}
                                startContainerStyle = {{marginTop:30}}></AirbnbRating>
                            </View>
                            <View style={{flex:0.7,padding:15}}>
                                <Text style={styles.overview}>{overview}</Text>
                            </View>
                        </View>
                        <View style={styles.lowerBottomContainer}>
                            <View style={styles.iconButtonContainer}>
                                <TouchableOpacity onPress={this.UnlikeMovie}>
                                    <Icon reverse
                                    name = {'cross'}
                                    type = {'entypo'}
                                    size = {RFValue(30)}
                                    color = {'blue'}></Icon>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    headerContainer: {
      flex: 0.1
    },
    headerTitle: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: RFValue(18)
    },
    subContainer: {
      flex: 0.9
    },
    subTopContainer: {
      flex: 0.4,
      justifyContent: "center",
      alignItems: "center"
    },
    posterImage: {
      width: "60%",
      height: "90%",
      resizeMode: "stretch",
      borderRadius: RFValue(30),
      marginHorizontal: RFValue(10)
    },
    subBottomContainer: {
      flex: 0.6
    },
    upperBottomContainer: {
      flex: 0.2,
      alignItems: "center"
    },
    title: {
      fontSize: RFValue(20),
      fontWeight: "bold",
      textAlign: "center"
    },
    subtitle: {
      fontSize: RFValue(14),
      fontWeight: "300"
    },
    middleBottomContainer: {
      flex: 0.35
    },
    overview: {
      fontSize: RFValue(13),
      textAlign: "center",
      fontWeight: "300",
      color: "gray"
    },
    lowerBottomContainer: {
      flex: 0.45
    },
    iconButtonContainer: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center"
    },
    buttonCotainer: {
      justifyContent: "center",
      alignItems: "center"
    },
    button: {
      width: RFValue(160),
      height: RFValue(50),
      borderRadius: RFValue(20),
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      marginTop: RFValue(15)
    },
    buttonText: {
      fontSize: RFValue(15),
      fontWeight: "bold"
    }
  });