import React, { Component } from 'react';
import { Modal, Text, View, TouchableHighlight, StyleSheet, Image, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import GenderIcon from './GenderIcon';
import InfoCell from './InfoCell';
import COLORS from '../theme';

class PetModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    toggleModal = () => {
        this.setState({
            visible: !this.state.visible
        });
    }

    getCubType = (type) => {
        switch (type) {
            case 'cat':
                return 'Kitten';
            case 'dog':
                return 'Puppy';
            default:
                return 'Not adult';
        }
    }

    render() {

        let { item } = this.props;
        let canReproduceText = item.sex === 'M' ? 'Castrated' : 'Sterilised';

        let genderIcon = (
            <GenderIcon sex={item.sex} />
        )

        return (
            <Modal 
                style={styles.modal} 
                visible={this.state.visible} 
                onBackDropPress={() => this.toggleModal()} 
                onRequestClose={() => this.toggleModal()}>
                <SafeAreaView style={{flex: 1, backgroundColor: 'transparent'}}>
                    <View style={styles.modalContainer}>
                        <ScrollView style={{flex: 1}}>
                            <View style={styles.modalHeader}>
                                <Text style={styles.modalHeaderText}>Details</Text>
                                <TouchableHighlight onPress={() => this.toggleModal()} style={styles.closeBg}>
                                    <Icon name={'close'} type='AntDesign' color='#262626' />
                                </TouchableHighlight>
                            </View>
                            <Image source={item.picUrl} style={styles.image} />
                            <View style={styles.modalContent}>
                                <InfoCell label={'Name:'} text={item.name} />
                                <InfoCell icon={genderIcon} text={item.isAdult ? 'Adult' : this.getCubType(item.type)} />
                                <InfoCell label={'Race:'} text={item.race} />
                                <InfoCell label={'Age:'} text={item.age} />
                                <InfoCell label={canReproduceText + ':'} text={item.sterilised ? 'Yes' : 'No'} />
                                <InfoCell label={'Location:'} text={item.city} />
                                <InfoCell label={'Phone:'} text={item.phone} />
                                <InfoCell label={'Email:'} text={item.email} />
                            </View>
                            <View style={{paddingBottom: 16}}>
                                <Text style={styles.descriptionLabel}>My story:</Text>
                                <Text style={styles.description}>{item.description}</Text>
                            </View>
                            <TouchableHighlight style={styles.adoptBtn}>
                                <Text style={styles.adoptText}>Adopt me</Text>
                            </TouchableHighlight>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 8
    },
    modalHeaderText: {
        fontSize: 24,
        flex: 1,
        alignSelf: 'center'
    },
    modalContainer: {
        backgroundColor: 'transparent',
        padding: 8,
        flex: 1
    },
    modalContent: {
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        flexDirection: 'row',
        //alignContent: 'stretch'
    },
    closeBg: {
        alignSelf: 'flex-end'
    },
    image: {
        maxWidth: 350,
        maxHeight: 350,
        alignSelf: 'center'
    },
    description: {
        fontSize: 16,
        paddingHorizontal: 8
    },
    descriptionLabel: {
        fontSize: 16,
        fontWeight: '700',
        padding: 8
    },
    adoptBtn: {
        backgroundColor: '#C1D90B',
        padding: 8,
        alignSelf: 'center',
        borderRadius: 5,
        shadowOffset:{  width: 5,  height: 10,  },
        shadowColor: '#000000',
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 1
    },
    adoptText: {
        fontSize: 18,
        fontWeight: '700'
    }
})

export default PetModal;