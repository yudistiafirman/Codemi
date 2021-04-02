import React from 'react'
import { Text, TouchableOpacity, View,StyleSheet, Image } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Modal from 'react-native-modal'
import ModalHeader from '../../Component/ModalHeader/ModalHeader';
import{onSuccessScanned,onScanAgain} from '../../Redux/Actions/ScannerAction'
import { connect } from 'react-redux';
import Button from '../../Component/Button/Button';
function Scanner({scanner,user,onSuccessScanned,isVisible,onLeftPress,onSwipeComplete,onScanAgain}) {

  
 const {result}=scanner
console.log(result)
    return (
        <Modal isVisible={isVisible} style={{margin:0}} onSwipeComplete={onSwipeComplete}>
         
            <View style={{backgroundColor:'#ffff',flex:1}}>
              {
                result !==null?

                <View style={{flex:1}}>
                  <View style={{flex:0.5}}>
                  <Image source={{uri:user[result].url}}  style={{resizeMode:'cover',width:'100%',height:'100%'}}/>
                  </View>
                  <View style={{flex:0.1,margin:10}}>
                  <Text style={{fontSize:20, color: '#292929', fontWeight: '700'}}>{`Hai i am ${user[result].username}`}</Text>
                  <Text style={{ fontSize: 14, color: '#292929',fontWeight: '700' }}>{`I am ${user[result].age} years old`}</Text>
                  </View>
                  <View style={{flex:0.3,margin:10,justifyContent:'center'}}>

                    <Button variant="primary" label="Scan again"/>
                    <Button variant="transparent" label="enough"/>

                  </View>
                </View>
            
                  :
                  <QRCodeScanner
                 onRead={onSuccessScanned}
                 showMarker={true}
                  topContent={
                 <ModalHeader  title="Scanned your Qr code here" onLeftPress={onLeftPress}/>
                 }
                 bottomContent={
                   
                  <TouchableOpacity onPress={onLeftPress} style={styles.buttonTouchable}>
                <Text style={styles.buttonText}>OK. Got it!</Text>
                 </TouchableOpacity>
                  
                
                 }
              />
              }
                
              </View>
             </Modal>
    )
}
const styles = StyleSheet.create({
    centerText: {
      flex: 1,
      fontSize: 18,
      padding: 32,
      color: '#777',
    },
    textBold: {
      fontWeight: '500',
      color: '#000',
    },
    buttonText: {
      fontSize: 21,
      color: 'rgb(0,122,255)',
      marginTop:40
    },
    buttonTouchable: {
      justifyContent:'center',
      alignItems:'center',
 
      width:'100%',
      height:'100%'
    },
  });

const mapDispatchToProps={
  onSuccessScanned,
  onScanAgain,
}

const mapStateToProps=(state)=>{
  return{
    scanner:state.scan,
    user:state.user
  }
  
}

export default connect(mapStateToProps,mapDispatchToProps)( Scanner)
