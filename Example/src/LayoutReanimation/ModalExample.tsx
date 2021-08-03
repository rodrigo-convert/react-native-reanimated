import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const AnimatedModal = Animated.createAnimatedComponent(Modal);

export default function ModalExample(): React.ReactElement {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.centeredView}>
      {show && (
        <AnimatedModal
          entering={FadeIn.duration(1000)}
          exiting={FadeOut.duration(1000)}
          onRequestClose={() => {
            setShow(!show);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable
                style={[styles.button]}
                onPress={() => setShow(!show)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </AnimatedModal>
      )}
      <Pressable
        style={[styles.button]}
        onPress={() => setShow(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
