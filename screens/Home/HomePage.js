import {
  Dimensions,
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  ScrollView,
} from "react-native";

import { Avatar } from "react-native-paper";
import ImageSlider from "../../components/ImageSlider";
import ProductCard from "../../components/ProductCard";

export default function HomePage({ naivgation }) {
  // setting up the images for slider
  const imagesList = [
    "https://static.vecteezy.com/system/resources/previews/008/031/627/non_2x/happy-young-couple-customers-shopping-with-trolley-at-flash-sale-time-flash-sale-and-discount-concept-flat-illustration-isolated-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/001/213/388/non_2x/mobile-shopping-delivery-service-on-orange-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/000/125/068/non_2x/family-shopping-in-supermarket-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/009/319/369/non_2x/mobile-shopping-flat-illustration-cartoon-character-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/001/925/552/non_2x/online-shopping-store-on-website-and-mobile-phone-design-smart-business-marketing-concept-horizontal-view-illustration-vector.jpg",
  ];

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

  const productImgList = {
    shoe: "https://rukminim1.flixcart.com/image/832/832/kthjy4w0/shoe/i/q/o/7-381391-puma-black-salmon-rose-original-imag6tkdzh35z5fz.jpeg",
    ipad: "https://rukminim1.flixcart.com/image/416/416/ktop5e80/tablet/x/9/o/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg",
    earbud:
      "https://rukminim1.flixcart.com/image/416/416/l432ikw0/headphone/n/g/n/-original-imagf2yzeffezg4g.jpeg",
    keyboard:
      "https://rukminim1.flixcart.com/image/416/416/khuvxjk0/computer-acc-combo/b/h/x/premium-gaming-transformer-keyboard-mouse-2-zebronics-original-imafxs3cst38zkvk.jpeg",
    tab: "https://rukminim1.flixcart.com/image/416/416/kiqbma80/tablet/w/y/s/lenovo-za6v0149in-original-imafyghbzfkgne5h.jpeg",
    watch:
      "https://rukminim1.flixcart.com/image/832/832/kdlzte80/watch/a/k/4/a1177-casio-original-imafuhdkcg4ys6e8.jpeg",
    mobile:
      "https://rukminim1.flixcart.com/image/416/416/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg",
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headersection}>
          <Image
            style={styles.logo}
            source={require("../../assets/icon.png")}
          />
          <TextInput
            style={styles.search}
            placeholder="&#128269; Search your product"
            // keyboardType="numeric"
          />
        </View>
        <ScrollView>
          <View>
            {/* pass the list of images */}
            <ImageSlider images={imagesList} />
          </View>
          <View style={styles.mainCategoriesSection}>
            <View style={styles.categoriesSection}>
              <View style={styles.categoryItem}>
                <Avatar.Image
                  size={70}
                  source={{ uri: categoriesImageList.offer }}
                />
                <Text style={styles.categoryName}>Offers</Text>
              </View>
              <View style={styles.categoryItem}>
                <Avatar.Image
                  size={70}
                  source={{ uri: categoriesImageList.electronics }}
                />
                <Text style={styles.categoryName}>Electronics</Text>
              </View>
              <View style={styles.categoryItem}>
                <Avatar.Image
                  size={70}
                  source={{ uri: categoriesImageList.beauty }}
                />
                <Text style={styles.categoryName}>Beauty</Text>
              </View>
            </View>
            <View style={styles.categoriesSection}>
              <View style={styles.categoryItem}>
                <Avatar.Image
                  size={70}
                  source={{ uri: categoriesImageList.tv }}
                />
                <Text style={styles.categoryName}>TV</Text>
              </View>
              <View style={styles.categoryItem}>
                <Avatar.Image
                  size={70}
                  source={{ uri: categoriesImageList.furniture }}
                />
                <Text style={styles.categoryName}>Furniture</Text>
              </View>
              <View style={styles.categoryItem}>
                <Avatar.Image
                  size={70}
                  source={{ uri: categoriesImageList.mobile }}
                />
                <Text style={styles.categoryName}>Mobile</Text>
              </View>
            </View>
          </View>

          <ScrollView horizontal>
            <View style={styles.productSection}>
              <View style={styles.productCard}>
                <ProductCard
                  productImage={{ uri: productImgList.earbud }}
                  productName="boAt Airdopes 191G "
                  productDesc="6mm Dual Drivers, Quad Mics ENx Tech & Beast Mode for Gaming"
                  productPrice="1,799"
                />
              </View>
              <View style={styles.productCard}>
                <ProductCard
                  productImage={{ uri: productImgList.ipad }}
                  productName="APPLE iPad"
                  productDesc="(9th Gen) 64 GB ROM 10.2 inch with Wi-Fi Only (Space Grey)"
                  productPrice="27,999"
                />
              </View>
              <View style={styles.productCard}>
                <ProductCard
                  productImage={{ uri: productImgList.keyboard }}
                  productName="ZEBRONICS Zeb-Transformer Keyboard"
                  productDesc="Gaming Keyboard and Mouse Combo Set"
                  productPrice="1,299"
                />
              </View>
              <View style={styles.productCard}>
                <ProductCard
                  productImage={{ uri: productImgList.shoe }}
                  productName="Acer Aspire 7"
                  productDesc="1TB HDD | 8GB Ram"
                  productPrice="56,499"
                />
              </View>
              <View style={styles.productCard}>
                <ProductCard
                  productImage={{ uri: productImgList.mobile }}
                  productName="POCO C31"
                  productDesc="(Royal Blue, 64 GB)  (4 GB RAM)"
                  productPrice="7,999"
                />
              </View>
              <View style={styles.productCard}>
                <ProductCard
                  productImage={{ uri: productImgList.watch }}
                  productName="A1177 Enticer Men's "
                  productDesc="( MTP-V300L-7AUDF ) Analog Watch - For Men"
                  productPrice="3,415"
                />
              </View>
              <View style={styles.productCard}>
                <ProductCard
                  productImage={{ uri: productImgList.tab }}
                  productName="Lenovo Tab M10"
                  productDesc="(HD) 4 GB RAM 64 GB ROM 10.1 inch with Wi-Fi+4G Tablet (Platinum Grey)"
                  productPrice="15,999"
                />
              </View>
            </View>
          </ScrollView>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  headersection: {
    flexDirection: "row",
    backgroundColor: "#EB4511",
    padding: 10,
    justifyContent: "center",
  },
  logo: {
    width: 50,
    height: 50,
  },
  search: {
    width: Dimensions.get("window").width - 80,
    backgroundColor: "white",
    padding: 10,
    fontSize: 18,
  },
  mainCategoriesSection: {
    backgroundColor: "#EB4511",
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  categoriesSection: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryItem: {
    alignItems: "center",
  },
  categoryName: {
    color: "white",
    fontSize: 16,
    marginTop: 5,
  },
  productSection: {
    backgroundColor: "orange",
    margin: 10,
  },
  productSection: {
    flexDirection: "row",
  },
});
