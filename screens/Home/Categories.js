import { View, ScrollView, StyleSheet, Text } from "react-native";

import { Avatar } from "react-native-paper";
export default function Categories({ naivgation }) {
  const categoriesImageList = {
    mobile:
      "https://static.vecteezy.com/system/resources/previews/001/339/422/non_2x/mobile-data-security-isometric-design-free-vector.jpg",
    offer:
      "https://static.vecteezy.com/system/resources/previews/000/095/529/non_2x/best-offer-sale-banner-vector.jpg",
    electronics:
      "https://static.vecteezy.com/system/resources/previews/001/952/190/non_2x/laptop-computer-for-vote-online-isolated-icon-free-vector.jpg",
    tv: "https://static.vecteezy.com/system/resources/previews/000/171/663/non_2x/hand-with-tv-remote-free-vector.jpg",
    beauty:
      "https://static.vecteezy.com/system/resources/previews/000/152/727/non_2x/beauty-products-on-vanity-vector.jpg",
    furniture:
      "https://static.vecteezy.com/system/resources/previews/000/229/725/non_2x/vector-room-and-furniture-illustration.jpg",
  };

  return (
    <>
      <ScrollView style={styles.scrollView}>
        <View style={styles.maincontainer}>
          <Text style={styles.heading}>All Categories</Text>
          <View style={styles.categorySection}>
            <View style={styles.subcategorySection}>
              <View style={styles.categoryItem}>
                <Avatar.Image
                  size={60}
                  source={{ uri: categoriesImageList.offer }}
                />
                <Text style={styles.categoryName}>Offers</Text>
              </View>
              <View style={styles.categoryItem}>
                <Avatar.Image
                  size={60}
                  source={{ uri: categoriesImageList.beauty }}
                />
                <Text style={styles.categoryName}>Beauty</Text>
              </View>
              <View style={styles.categoryItem}>
                <Avatar.Image
                  size={60}
                  source={{ uri: categoriesImageList.furniture }}
                />
                <Text style={styles.categoryName}>Furniture</Text>
              </View>
              <View style={styles.categoryItem}>
                <Avatar.Image
                  size={60}
                  source={{ uri: categoriesImageList.mobile }}
                />
                <Text style={styles.categoryName}>Mobiles</Text>
              </View>
            </View>
            <View style={styles.subcategorySection}>
              <View style={styles.categoryItem}>
                <Avatar.Image
                  size={60}
                  source={{ uri: categoriesImageList.offer }}
                />
                <Text style={styles.categoryName}>Offers</Text>
              </View>
              <View style={styles.categoryItem}>
                <Avatar.Image
                  size={60}
                  source={{ uri: categoriesImageList.beauty }}
                />
                <Text style={styles.categoryName}>Beauty</Text>
              </View>
              <View style={styles.categoryItem}>
                <Avatar.Image
                  size={60}
                  source={{ uri: categoriesImageList.furniture }}
                />
                <Text style={styles.categoryName}>Furniture</Text>
              </View>
              <View style={styles.categoryItem}>
                <Avatar.Image
                  size={60}
                  source={{ uri: categoriesImageList.mobile }}
                />
                <Text style={styles.categoryName}>Mobiles</Text>
              </View>
            </View>
            <View style={styles.subcategorySection}>
              <View style={styles.categoryItem}>
                <Avatar.Image
                  size={60}
                  source={{ uri: categoriesImageList.offer }}
                />
                <Text style={styles.categoryName}>Offers</Text>
              </View>
              <View style={styles.categoryItem}>
                <Avatar.Image
                  size={60}
                  source={{ uri: categoriesImageList.beauty }}
                />
                <Text style={styles.categoryName}>Beauty</Text>
              </View>
              <View style={styles.categoryItem}>
                <Avatar.Image
                  size={60}
                  source={{ uri: categoriesImageList.furniture }}
                />
                <Text style={styles.categoryName}>Furniture</Text>
              </View>
              <View style={styles.categoryItem}>
                <Avatar.Image
                  size={60}
                  source={{ uri: categoriesImageList.mobile }}
                />
                <Text style={styles.categoryName}>Mobiles</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor:'white',
  },
  maincontainer: {
    margin: 10,
  },
  heading: {
    fontWeight: "600",
    fontSize:20
  },
  categorySection: {
    backgroundColor: "white",
  },
  subcategorySection: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  categoryItem: {
    alignItems: "center",
  },
  categoryName: {
    marginTop: 5,
  },
});
