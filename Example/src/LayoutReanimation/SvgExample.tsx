import Animated, {
  BounceOut,
  FadeIn,
  SlideOutDown,
} from 'react-native-reanimated';
import { Button, View } from 'react-native';
import React, { useState } from 'react';
import Svg, { ClipPath, Path } from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

export function SvgExample(): React.ReactElement {
  const [showSvg, setShowSvg] = useState(false);
  const [showPath, setShowPath] = useState(false);
 
  return (
      <>
      <Button
        title="showSvg"
        onPress={() => {
          setShowSvg(!showSvg);
        }}
      />
        <Button
        title="showPath"
        onPress={() => {
          setShowPath(!showPath);
        }}
      />
        <View>
        {showSvg && (
            <AnimatedSvg width={500} height={500} entering={FadeIn.duration(1000)}
            exiting={BounceOut.duration(1000)}>
            
              { showPath && <AnimatedPath
              entering={FadeIn.duration(1000)}
              exiting={SlideOutDown.duration(1000)}
                fill="none"
                stroke="#2A5AA6"
                strokeWidth={5}
                strokeMiterlimit={10}
                d="M106.9 180.7c6.3-14.9 23.4-21.9 38.3-15.6 14.9 6.3 21.9 23.4 15.6 38.3-6.3 14.9-23.4 21.9-38.3 15.6-10.8-4.6-17.9-15.2-17.9-26.9 0-3.9.8-7.8 2.3-11.4"
                clipPath="url(#c1)"
              /> }
         
              <Path
                fill="none"
                stroke="#F08A1A"
                strokeWidth={5}
                strokeMiterlimit={10}
                d="M168.8 250.6c-16.1 0-29.2-13.1-29.2-29.2s13.1-29.2 29.2-29.2 29.2 13.1 29.2 29.2c.1 16.1-13 29.2-29.2 29.2"
                clipPath="url(#c2)"
              />
              <ClipPath id="c2">
                <Path d="M194.8 224.1c-1.3 12.7-12.1 22.6-25.1 22.6-13.9 0-25.2-11.3-25.2-25.2 0-10.2 6.1-19 14.7-22.9.8-2.9 1-5.9.7-8.8a33.19 33.19 0 00-23.4 31.8c0 18.3 14.9 33.2 33.2 33.2 17 0 31.1-12.9 33-29.4-2.6-.2-5.3-.6-7.9-1.3zM167.8 196.3c.6 0 1.3-.1 1.9-.1 11.9 0 21.8 8.2 24.5 19.3.5.2 1.1.4 1.6.6 2.2.7 4.5 1.1 6.9 1.2-2.1-16.4-16-29.1-33-29.1-.6 0-1.3 0-1.9.1.3 2.7.3 5.3 0 8z" />
              </ClipPath>
              <Path
                fill="none"
                stroke="#000000"
                strokeWidth={5}
                strokeMiterlimit={10}
                d="M174.9 182.9c5-15.4 21.5-23.8 36.9-18.8 15.4 5 23.8 21.5 18.8 36.9-5 15.4-21.5 23.8-36.9 18.8-12-3.9-20.2-15.1-20.2-27.7-.1-3.1.4-6.2 1.4-9.2"
                clipPath="url(#c3)"
              />
              <ClipPath id="c3">
                <Path d="M205.6 217.3c-.6 0-1.3.1-1.9.1-2.6 0-5.3-.4-7.8-1.2-8.5-2.8-14.7-9.7-16.7-18.1-2.7-1.1-5.5-1.7-8.4-1.8 1.6 12.7 10.3 23.4 22.7 27.5 3.3 1.1 6.8 1.6 10.3 1.6.6 0 1.3 0 1.9-.1-.5-2.7-.5-5.4-.1-8z" />
                <Path d="M233.3 177c-4-7.9-10.9-13.8-19.4-16.5-3.3-1.1-6.8-1.6-10.3-1.6-14.5 0-27.2 9.2-31.6 23-.7 2.1-1.1 4.3-1.4 6.4 2.7.1 5.3.5 7.9 1.2.2-1.7.5-3.5 1.1-5.1 3.4-10.4 13-17.5 24-17.5 2.6 0 5.3.4 7.8 1.2 6.4 2.1 11.6 6.5 14.7 12.5 3.1 6 3.6 12.9 1.5 19.3-2.2 6.9-7.2 12.3-13.5 15.2-.8 2.9-1 5.8-.7 8.8 10.2-3.1 18.4-11 21.8-21.5 2.8-8.5 2.1-17.5-1.9-25.4z" />
              </ClipPath>
              <Path
                fill="none"
                stroke="#18A138"
                strokeWidth={5}
                strokeMiterlimit={10}
                d="M243.5 250c-15.8 3.3-31.3-6.9-34.5-22.7-3.3-15.8 6.9-31.3 22.7-34.5 15.8-3.3 31.3 6.9 34.5 22.7.4 1.9.6 3.9.6 5.9 0 13.8-9.7 25.8-23.3 28.6"
                clipPath="url(#c4)"
              />
              <ClipPath id="c4">
                <Path d="M236.6 196.3c.7-.1 1.3-.1 2-.1 11.7 0 21.9 8.2 24.5 19.5 2.7 1.1 5.5 1.6 8.4 1.7-.1-.9-.2-1.8-.4-2.7-3.2-15.4-16.8-26.5-32.5-26.5-.6 0-1.3 0-1.9.1.3 2.7.2 5.3-.1 8z" />
                <Path d="M263.6 224.3c-1.3 10.7-9.3 19.7-20 21.9-1.7.3-3.4.5-5.1.5-11.9 0-22.3-8.5-24.7-20.2-1.4-6.6-.1-13.3 3.6-19 2.6-4 6.3-7.1 10.6-9.1.8-2.9 1-5.9.7-8.8-7.4 2.3-13.7 7-18 13.5-4.9 7.4-6.6 16.3-4.8 25 3.2 15.4 16.8 26.5 32.5 26.5 2.2 0 4.5-.2 6.7-.7 14-2.9 24.5-14.6 26.3-28.6-2.6.1-5.2-.3-7.8-1z" />
              </ClipPath>
              <Path
                fill="none"
                stroke="#E53B22"
                strokeWidth={5}
                strokeMiterlimit={10}
                d="M285.6 217.7c-14.1 7.9-31.9 2.8-39.8-11.3-7.9-14.1-2.8-31.9 11.3-39.8 14.1-7.9 31.9-2.8 39.8 11.3 2.4 4.3 3.7 9.2 3.7 14.2 0 10.6-5.7 20.4-15 25.6"
                clipPath="url(#c5)"
              />
            </AnimatedSvg>   )}
        </View>
      </>
  );
}