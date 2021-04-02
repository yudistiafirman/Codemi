import React from 'react'
import { View } from 'react-native'
import Modal  from 'react-native-modal'
import Header from '../ModalHeader/ModalHeader'
import QRCode from 'react-native-qrcode-svg';
import { connect } from 'react-redux';


function ModalSorting({isVisible,onSwipeComplete,onLeftPress,user,login}) {

    const {index}=login
    
    return (

        <Modal style={{justifyContent:'flex-end',margin:0}} isVisible={isVisible} onSwipeComplete={onSwipeComplete}>
             
         
                <View style={{flex:0.5,backgroundColor:'#ffff',borderTopRightRadius:20,borderTopLeftRadius:20,alignItems:'center',justifyContent:'center'}}>
                <Header iconLeft="close" title="YourQrCode" onLeftPress={onLeftPress}/>
                  {
                      index? <QRCode
                      size={200}
                    value={JSON.stringify(index)}
                    />
                  :null
                  }  
                        
                </View>


        </Modal>
      
    )
}

const mapStateToProps=(state)=>{
    return {
        user:state.user,
        login:state.login
    } 
}

export default connect(mapStateToProps,null)( ModalSorting)