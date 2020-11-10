import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    TextInput_26: "",
    TextInput_3: "",
    TextInput_5: "",
    TextInput_7: "",
    TextInput_9: "",
    TextInput_11: "",
    TextInput_18: "",
    TextInput_75: "",
    TextInput_21: ""
  }

  render = () => (
    <View style={styles.View_1}>
      <TextInput
        placeholder="Recent transactions:"
        style={styles.TextInput_26}
        value={this.state.TextInput_26}
        onChangeText={nextValue => this.setState({ TextInput_26: nextValue })}
      />
      <TextInput
        placeholder="Target.                   22.18"
        value={this.state.TextInput_3}
        onChangeText={nextValue => this.setState({ TextInput_3: nextValue })}
      />
      <TextInput
        placeholder="       RoundUp.               + 0.82"
        style={styles.TextInput_5}
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
      />
      <TextInput
        placeholder="Starbucks.             6.25"
        value={this.state.TextInput_7}
        onChangeText={nextValue => this.setState({ TextInput_7: nextValue })}
      />
      <TextInput
        placeholder="       RoundUp.               + 0.75"
        style={styles.TextInput_9}
        value={this.state.TextInput_9}
        onChangeText={nextValue => this.setState({ TextInput_9: nextValue })}
      />
      <TextInput
        placeholder="Walmart.               15.62"
        value={this.state.TextInput_11}
        onChangeText={nextValue => this.setState({ TextInput_11: nextValue })}
      />
      <TextInput
        placeholder="       RoundUp.               + 0.38"
        style={styles.TextInput_18}
        value={this.state.TextInput_18}
        onChangeText={nextValue => this.setState({ TextInput_18: nextValue })}
      />
      <TextInput
        placeholder="Total with RoundUp                        46.00"
        style={styles.TextInput_75}
        value={this.state.TextInput_75}
        onChangeText={nextValue => this.setState({ TextInput_75: nextValue })}
      />
      <TextInput
        placeholder="Total added towards loan debt with RoundUp: $1.95"
        style={styles.TextInput_21}
        value={this.state.TextInput_21}
        onChangeText={nextValue => this.setState({ TextInput_21: nextValue })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  TextInput_3: {},
  TextInput_5: { color: "#dc1818", fontFamily: "Merriweather-Italic" },
  TextInput_7: {},
  TextInput_9: { fontFamily: "Merriweather-Italic" },
  TextInput_11: {},
  TextInput_18: { fontFamily: "Merriweather-Italic" },
  TextInput_21: { fontSize: 8, fontFamily: "RobotoMono-Regular" },
  View_1: {},
  TextInput_26: { fontFamily: "Roboto-Regular" },
  TextInput_3: {},
  TextInput_5: { color: "#dc1818", fontFamily: "Merriweather-Italic" },
  TextInput_7: {},
  TextInput_9: { fontFamily: "Merriweather-Italic" },
  TextInput_11: {},
  TextInput_18: { fontFamily: "Merriweather-Italic" },
  TextInput_21: { fontSize: 8, fontFamily: "RobotoMono-Regular" },
  View_1: { borderColor: "#c30909" },
  TextInput_26: { fontFamily: "Roboto-Regular" },
  TextInput_3: {},
  TextInput_5: { color: "#dc1818", fontFamily: "Merriweather-Italic" },
  TextInput_7: {},
  TextInput_9: { fontFamily: "Merriweather-Italic" },
  TextInput_11: {},
  TextInput_18: { fontFamily: "Merriweather-Italic" },
  TextInput_75: { fontSize: 10, fontFamily: "RobotoMono-Regular" },
  TextInput_21: { fontSize: 10, fontFamily: "RobotoMono-Regular" }
})
