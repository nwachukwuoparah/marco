import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    width: "90%",
    padding: "13px 20px",
    borderRadius: 15,
    backgroundColor: "#f7f9fa",
  },
  section: {
    paddingBottom: "25px",
    borderBottom: "1px solid #e7e9ea",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    minWidth: "100%",
  },
  label: {
    overflow: "hidden",
  },
  value: {
    fontSize: 10,
    borderRadius: 20,
    padding: "3.5px 10px",
    backgroundColor: "rgba(255, 0, 0, 0.4)",
  },
});

const PdfDocument = () => (
  <Document>
    <Page>
      <View style={styles.container}>
        {/* First Section */}
        <View style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.label}>Amount</Text>
            <Text>$5000</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Payment status</Text>
            <Text style={styles.value}>success</Text>
          </View>
        </View>

        {/* Second Section */}
        <View style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.label}>Amount</Text>
            <Text>$5000</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Amount</Text>
            <Text>$5000</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Amount</Text>
            <Text>$5000</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Amount</Text>
            <Text>$5000</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Amount</Text>
            <Text>$5000</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default PdfDocument;
