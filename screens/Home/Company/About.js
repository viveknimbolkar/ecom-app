import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import * as React from "react";

export default function About({ navigation }) {
  return (
    <>
      <StatusBar animated={true} backgroundColor="#EB4511" />
      <View style={styles.maincontainer}>
        <Text style={styles.aboutUsText}>About us</Text>
        <ScrollView>
          <View style={styles.aboutUsSection}>
            <Image
              style={styles.img}
              source={{
                uri: "https://static.vecteezy.com/system/resources/previews/007/872/313/non_2x/set-of-business-men-and-women-characters-illustration-vector.jpg",
              }}
            />
            <View style={styles.textSection}>
              <Text>
                We are maximisers. We're out on our own journeys to maximise -
                be the best at what we choose and care about the most - whether
                it be our impact, voice, potential, ideas, influence, well-being
                or more. Because when we maximise ourselves in our inclusive
                teams, Flipkart is able to deliver the best imaginable value for
                our customers, stakeholders and the planet!
              </Text>
              <Text style={{ fontSize: 24, marginTop: 10 }}>Leave a Mark</Text>
              <Text>
                We're known more by the impact we create than the titles we
                hold. Impact that is brought by working together on audacious
                challenges at scale with an aim to revolutionize for the Indian
                customer. We believe great ideas can emerge from anywhere and
                must be backed. Our people - backed by our culture of end-to-end
                ownership - have revolutionised India's e-commerce sector -
                several times over!
              </Text>

              <Text>
                We are maximisers. We're out on our own journeys to maximise -
                be the best at what we choose and care about the most - whether
                it be our impact, voice, potential, ideas, influence, well-being
                or more. Because when we maximise ourselves in our inclusive
                teams, Flipkart is able to deliver the best imaginable value for
                our customers, stakeholders and the planet!
              </Text>
              <Text style={{ fontSize: 24, marginTop: 10 }}>
                Experiment Learn Grow
              </Text>
              <Text>
                Our journey of building India's biggest unicorn start-up has
                been full of successes, but also failures and learning from
                them. That's why there's calculated risk-taking, a high
                willingness to learn and improvise, and a growth orientation
                built into everything we do. Whether it be opening a new
                warehouse, or making our mobile app a bit more consumer
                friendly, we're always experimenting, learning and growing!
              </Text>

              <Text>
                We are maximisers. We're out on our own journeys to maximise -
                be the best at what we choose and care about the most - whether
                it be our impact, voice, potential, ideas, influence, well-being
                or more. Because when we maximise ourselves in our inclusive
                teams, Flipkart is able to deliver the best imaginable value for
                our customers, stakeholders and the planet!
              </Text>
              <Text style={{ fontSize: 24, marginTop: 10 }}>Leave a Mark</Text>
              <Text>
                We're known more by the impact we create than the titles we
                hold. Impact that is brought by working together on audacious
                challenges at scale with an aim to revolutionize for the Indian
                customer. We believe great ideas can emerge from anywhere and
                must be backed. Our people - backed by our culture of end-to-end
                ownership - have revolutionised India's e-commerce sector -
                several times over!
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: "white",
  },
  aboutUsText: {
    fontSize: 28,
    fontWeight: "700",
    alignSelf: "center",
    padding: 10,
  },
  aboutUsSection: {},
  img: {
    width: Dimensions.get("window").width,
    height: 200,
  },
  textSection: {
    margin: 10,
  },
});
