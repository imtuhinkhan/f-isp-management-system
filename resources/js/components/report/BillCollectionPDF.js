import React, { Component } from 'react'
import { Page, Text, View, Document, StyleSheet,Image } from '@react-pdf/renderer';
import DataTable from 'react-data-table-component';
import moment from 'moment'
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    marginTop:'5px'
  },
  section: {
    margin: 10,
    padding: 10,
  },
  header: {
    textAlign: 'center',
    fontSize:18
  },
  header2: {
    textAlign: 'center',
    fontSize:16,margin:10
  },
  header3: {
    textAlign: 'center',
    fontSize:17,
  },
  address:{
    textAlign: 'center',
    fontSize:10
  },
  row:{
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: '#b3b5b4',
    borderBottomWidth: 1,
    padding:5

  },
  borderStyle:{
    borderBottomColor: '#b3b5b4',
    borderBottomWidth: 2,
  },
  col:{
      fontSize:12,
       border:'1px solid'
  },
  w10:{
    width:'10%',
  },
  w55:{
    width:'55%',
  },
  w30:{
    width:'30%',
  },
  w25:{
    width:'25%',
  },
  w20:{
    width:'20%',
  },
  th:{
      fontSize:14,
      fontWeight:600,

  },
  pText:{
    fontSize:8,
    fontWeight:600,
    color:'rgb(217 217 217)'
}

});

// Create Document Component
class BillCollectionPDF extends Component {
    constructor(props) {
        super(props)    
        this.state = {
            report:this.props.data,
            client:this.props.client,
            monthName:this.props.monthName,
            yearName:this.props.yearName
        }
    }
    render() {
        return (
            <Document>
            <Page size="A4" style={styles.page} wrap>
              <View style={styles.section}>
                  <Image src='http://127.0.0.1:8000/assets/images/logo/logo.png' />
                <Text style={styles.header}>FRIEND'S ISP</Text>
                <Text style={styles.address}>Beki Chandragram,Sararchar,Bajitpur,Kishoreganj</Text>
                <Text style={[styles.address]}>Phone:01681582093</Text>
                <Text style={[styles.header3]}>Bill Collection Report</Text>
                <Text style={[styles.borderStyle,styles.header2]}>{this.state.monthName}-{this.state.yearName}</Text>
                <View style={styles.row}>
                    <Text style={[[styles.col,styles.th,styles.w10]]}>SL</Text>
                    <Text style={[[styles.col,styles.th,styles.w30]]}>Client Name</Text>
                    <Text style={[[styles.col,styles.th,styles.w20]]}>Phone</Text>
                    <Text style={[[styles.col,styles.th,styles.w20]]}>Package</Text>
                    <Text style={[[styles.col,styles.th,styles.w20]]}>Amount</Text>
                </View>
                {this.state.client.map((value, index) => (
                    <>
                        <View style={styles.row}>
                            <Text style={[styles.col,styles.w10]}>{index+1}</Text>
                            <Text style={[styles.col,styles.w30]}>{value.client_name}</Text>
                            <Text style={[styles.col,styles.w20]}>{value.phone}</Text>
                            <Text style={[styles.col,styles.w20]}>{value.package.name}({value.package.price})</Text>
                            <Text style={[styles.col,styles.w20]}>{this.state.report[value.id]}</Text>
                        </View>
                    </>
                ))}
                <Text style={[styles.pText]}>Printed on: {moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</Text>
              </View>
            </Page>
          </Document>
        )}
}

export default BillCollectionPDF;