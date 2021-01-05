import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Appbar, Button } from "react-native-paper";
import DisplayCompatibility from "./components/displayCompatibility";

class App extends React.Component {
  state = {
    fname: "",
    sname: "",
    result: "",
    percentage: null,
  };

  submitButton() {
    fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "bd7408fa56mshf79b54c07dc1172p14e242jsnb0ed5e072a86",
          "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        },
      }
    )
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          result: data.result,
          percentage: data.percentage,
        });
        console.log(data);
        console.log(this.state.displayResult);
      })
      .catch((err) => {
        console.error(err);
      });
    console.log("pressed");
  }
  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content
            title="Compatibility Calculator"
            subtitle="What are your chances"
            style={{ alignItems: "center" }}
          />
        </Appbar.Header>
        <TextInput
          label="First Person"
          value={this.state.fname}
          onChangeText={(text) => this.setState({ fname: text })}
        />
        <TextInput
          label="Second Person"
          value={this.state.sname}
          onChangeText={(text) => this.setState({ sname: text })}
        />
        <Button
          icon="check-circle-outline"
          mode="contained"
          style={{ margin: 10 }}
          onPress={() => this.submitButton()}
        >
          Calculate
        </Button>
        <DisplayCompatibility
          result={this.state.result}
          percentage={this.state.percentage}
        />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
});
