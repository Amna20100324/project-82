import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {RFValue} from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <View style ={styles.container}>
            <Image
            source={require("../assets/story_image_1.png")}
            style={styles.storyImage}
            ></Image>

          <View style={style.titleContainer}>
             <Text style={styles.storyTitleText}>
               {this.props.story.title}
             </Text>
             <Text style={styles.storyAuthorText}>
             {this.props.story.author}
            </Text>
            <Text style={styles.descriptionText}>
              {this.props.story.description}
            </Text>
          </View>
            <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                <Text style={styles.likeText}>12k</Text>
              </View>
            </View>
          </View>
          <Text style={{ color: "white" }}>Story Card!</Text>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer:{
    margin:RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },
  storyImage:{
    resizeMode: "contain",
    width:"95%",
    alignSelf:"center",
    height:RFValue(250)
  },
  titleContainer:{
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
  storyTitleText:{
    fontsize: RFValue(25),
    fontFamily: "Bubllegum-Sans",
    color:"white"
  },
  storyAuthorText:{
    fontsize: RFValue(18),
    fontFamily: "Bubllegum-Sans",
    color:"white"
  },
  descriptionText:{
    fontsize: 13,
    fontFamily: "Bubllegum-Sans",
    color:"white",
    paddingTop: RFValue(10),
  },
  actionContainer:{
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  likeButton:{
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirections: "row",
    backgroundColor:"#eb3948",
    borderRadius: RFValue(30)
  },
  likeText:{
    color:"white",
    fontFamily: "Bubllegum-Sans",
    fontsize: RFValue(25),
    marginLeft: RFValue(5),
  }
});
