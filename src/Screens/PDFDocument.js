import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    flex : 3
  }
});

// Create Document Component
const PDFDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Customer Name</Text>
      </View>
      <View style={styles.section}>
        <Text>Product Name</Text>
      </View>
      <View style={styles.section}>
        <Text>Customer Name</Text>
      </View>
      <View style={styles.section}>
        <Text>Product Name</Text>
      </View>
      <View style={styles.section}>
        <Text>Customer Name</Text>
      </View>
      <View style={styles.section}>
        <Text>Product Name</Text>
      </View>
      <View style={styles.section}>
        <Text>Product Name</Text>
      </View>
      <View style={styles.section}>
        <Text>Product Name</Text>
      </View>
      
    </Page>
  </Document>
);

export default PDFDocument;


