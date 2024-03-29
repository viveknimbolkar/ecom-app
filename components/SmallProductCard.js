import { StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

export default function SmallProductCard(props) {
  return (
    <>
      <Card style={styles.card}>
        <Card.Cover style={styles.cardImg} source={props.productImage} />
        {/* <Card.Title title={props.productName} subtitle={props.productDesc} /> */}
        <Card.Content>
          <Title style={styles.cardTitle}>{props.productName}</Title>
          <Paragraph style={styles.cardParagraph}>
            {props.productDesc}
          </Paragraph>
          <Title style={styles.cardPrice}>Rs. {props.productPrice}</Title>
        </Card.Content>
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 170,
    margin: 5,
  },
  cardTitle: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 14,
  },
  cardParagraph: {
    fontSize: 10,
    lineHeight: 12,
  },
  cardPrice: {
    fontWeight: "700",
    fontSize: 14,
  },
});
