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
  w35:{
    width:'35%',
  },
  w15:{
    width:'15%',
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

  }

});

// Create Document Component
class BillHistoryPDF extends Component {
    constructor(props) {
        super(props)    
        this.state = {
           client:this.props.client,
           report:this.props.data
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
                <Text style={[styles.borderStyle,styles.header2]}>Bill Report</Text>
                <Text>{this.state.client.client_name}</Text>
                <View style={styles.row}>
                    <Text style={[[styles.col,styles.th,styles.w10]]}>SL</Text>
                    <Text style={[[styles.col,styles.th,styles.w30]]}>Date</Text>
                    <Text style={[[styles.col,styles.th,styles.w30]]}>Amount</Text>
                    <Text style={[[styles.col,styles.th,styles.w30]]}>Remaks</Text>
                </View>
                {this.state.report.map((value, index) => (
                    <>
                        <View style={styles.row}>
                            <Text style={[styles.col,styles.w10]}>{index+1}</Text>
                            <Text style={[styles.col,styles.w25]}>{moment(value.date).format("MMMM Do, YYYY")}</Text>
                            <Text style={[styles.col,styles.w30]}>{value.bill}</Text>
                            <Text style={[styles.col,styles.w20]}>{value.expense}</Text>
                            <Text style={[styles.col,styles.w15]}>{value.margin}</Text>
                        </View>
                    </>
                ))}
              </View>
            </Page>
          </Document>
        )}
}

export default BillHistoryPDF;