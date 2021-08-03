import Animated, { BounceIn, BounceOut, Layout } from 'react-native-reanimated';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import React, { useState } from 'react';

interface MarkerProps {
  id: number;
  coordinate: {
    latitude: number;
    longitude: number;
  };
  title: string;
}

const SIZE = 100;
const markers: MarkerProps[] = [
  {
    id: 1,
    coordinate: {
      latitude: 50.03136,
      longitude: 19.76045,
    },
    title: '1',
  },
  {
    id: 2,
    coordinate: {
      latitude: 50.13136,
      longitude: 19.76045,
    },
    title: '2',
  },
  {
    id: 3,
    coordinate: {
      latitude: 50.06136,
      longitude: 19.79045,
    },
    title: '3',
  },
];

const { height } = Dimensions.get('window');
const AnimatedMarker = Animated.createAnimatedComponent(Marker);

export default function MapViewExample(): React.ReactElement {
  const [currentRegion, setCurrentRegion] = useState({
    latitude: 50.08825,
    longitude: 19.7324,
    latitudeDelta: 0.3,
    longitudeDelta: 0.3,
  });
  const [currentId, setCurrentId] = useState(0);
  const [visibleMarkers, setVisibleMarkers] = useState<MarkerProps[]>([]);

  return (
    <View>
      <MapView style={{ height: height }} initialRegion={currentRegion}>
        {visibleMarkers.map((marker) => {
          return (
            <AnimatedMarker key={marker.id} coordinate={marker.coordinate} entering={BounceIn.duration(1000)}
            exiting={BounceOut.duration(1000)}>
              <Animated.View
                layout={Layout.duration(1000)}
                style={[
                  styles.marker,
                  {
                    width: currentId === marker.id ? 30 : 20,
                    height: currentId === marker.id ? 30 : 20,
                  },
                ]}
              />
            </AnimatedMarker>
          );
        })}
      </MapView>
      <View style={styles.markerCardsView}>
        {markers.map((marker) => {
          return (
            <View key={marker.id} style={styles.card}>
              <Text numberOfLines={1} style={styles.cardtitle}>
                {marker.title}
              </Text>
              <Button
                title="show"
                onPress={() => {
                  if (
                    !visibleMarkers.some((element) => element.id === marker.id)
                  ) {
                    setVisibleMarkers([...visibleMarkers, marker]);
                  }
                  setCurrentRegion({
                    ...currentRegion,
                    latitude: marker.coordinate.latitude,
                    longitude: marker.coordinate.longitude,
                  });
                  setCurrentId(marker.id);
                }}
              />
              <Button
                title="remove"
                onPress={() => {
                  setVisibleMarkers(
                    visibleMarkers.filter((element) => element.id !== marker.id)
                  );
                  setCurrentId(0);
                }}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  markerCardsView: {
    position: 'absolute',
    bottom: SIZE + 10,
    flexDirection: 'row',
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  card: {
    padding: 5,
    elevation: 2,
    backgroundColor: 'white',
    marginHorizontal: 10,
    height: SIZE,
    width: SIZE,
    flexDirection: 'column',
  },
  cardtitle: {
    fontSize: 10,
    marginTop: 5,
    fontWeight: 'bold',
  },
  marker: {
    borderRadius: 12,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
