import React from 'react';
import { PixelRatio, Text, View, TouchableOpacity,
Animated, PanResponder, Dimensions } from 'react-native';
// import { Text, View, Dimensions } from 'react-native';


const reactions = [
    { label: 'Worried',
     src: require('./assets/worried.png'),
     bigSrc: require('./assets/worried_big.png')
     },
     { label: 'Sad',
     src: require('./assets/sad.png'),
      bigSrc: require('./assets/sad_big.png')
     },
  { label: 'Strong',
   src: require('./assets/ambitious.png'),
    bigSrc: require('./assets/ambitious_big.png')
   },
  { label: 'Happy', 
  src: require('./assets/smile.png'),
   bigSrc: require('./assets/smile_big.png')
   },
  { label: 'Surprised',
   src: require('./assets/surprised.png'),
    bigSrc: require('./assets/surprised_big.png')
   },
  ];

const WIDTH = 320;
const DISTANCE = WIDTH / reactions.length;
const END = WIDTH - DISTANCE;
const TEXTWIDTH = Dimensions.get('window').width;


export default class Emoji extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pan: new Animated.Value((2 * DISTANCE) + 5),
            emoji: '',
            feedbacktext: ''
          };      
          //this.updatePan = this.updatePan.bind(this); 
    }
    
  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
  
      // Initially, set the value of x and y to 0 (the center of the screen)
      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({ x: this.state.pan._value });
        this.state.pan.setValue(0);
   },
  
      // When we drag/pan the object, set the delate to the states pan position
      // onPanResponderMove: Animated.event([
      //   null, { dx: this.state.pan },

      // ]),
  
      onPanResponderRelease: (e, { vx, vy }) => {
        this.state.pan.flattenOffset();
        let offset = Math.max(0, this.state.pan._value + 0);
        if (offset < 0) return this.state.pan.setValue(0);
        if (offset > END) return this.state.pan.setValue(END);

        const modulo = offset % DISTANCE;
        offset = (modulo >= DISTANCE / 2) ? (offset + (DISTANCE - modulo)) : (offset - modulo);

        this.updatePan(offset);  
      }
    });
  }
  updatePan(toValue, image) {
    Animated.spring(this.state.pan, { toValue, friction: 7 }).start();
  }

  
  render() {
    const lapsList = reactions.map((data, idx) => {
      const u = idx * DISTANCE;
      let inputRange = [u - 20, u, u + 20];
              let scaleOutputRange = [1, 0.25, 1];
              // let topOutputRange = [u, u + 20, u + 40];
              let colorOutputRange = ['rgba(0,0,0, 1)', 'rgba(255, 0, 0, 1)',
               'rgba(0, 0, 0, 1)'];

              if (u - 20 < 0) {
                inputRange = [u, u + 20];
                scaleOutputRange = [0.25, 1];
                // topOutputRange = [u, u + 20];
                colorOutputRange = ['rgba(255, 0, 0, 1)', 'rgba(0, 0,0, 1)'];
              }

              if (u + 20 > END) {
                inputRange = [u - 20, u];
                scaleOutputRange = [1, 0.25];
                // topOutputRange = [u + 20, u + 40];
                colorOutputRange = ['rgba(0, 0, 0, 1)', 'rgba(255,0,0, 1)'];
              }
        return (
            
              <TouchableOpacity 
              onPress={() => this.updatePan(u, data.bigSrc)}
               activeOpacity={0.7} key={idx}
              >
              <View style={styles.smileyWrap}>
              <Animated.Image
               source={data.src} 
               style={[styles.smiley, {
                transform: [{
                  scale: this.state.pan.interpolate({
                    inputRange,
                    outputRange: scaleOutputRange,
                    extrapolate: 'clamp',
                    extrapolateLeft: 'clamp',
                    extrapolateRight: 'clamp',

                  })
                }]
              }]}
              />
              </View>
               <Animated.Text
                style={[styles.reactionText, {
                    // top: this.state.pan.interpolate({
                    //   inputRange,
                    //   outputRange: topOutputRange,
                    //   extrapolate: 'clamp',
                    // }),
                    color: this.state.pan.interpolate({
                      inputRange,
                      outputRange: colorOutputRange,
                      extrapolate: 'clamp',
                    })
                  }]
              }>
              {data.label}</Animated.Text>
              </TouchableOpacity>
              
              
        );
      });

      const finalList = reactions.map((data, idx) => {
        let inputRange = [(idx - 1) * DISTANCE, idx * DISTANCE, (idx + 1) * DISTANCE];
        let outputRange = [0, 1, 0];

        if (idx === 0) {
          inputRange = [idx * DISTANCE, (idx + 1) * DISTANCE];
          outputRange = [1, 0];
        }

        if (idx === reactions.length - 1) {
          inputRange = [(idx - 1) * DISTANCE, idx * DISTANCE];
          outputRange = [0, 1];
        }
        return (
          <Animated.Image
          key={idx}
          source={data.bigSrc}
          style={[styles.bigSmileyImage, {
            opacity: this.state.pan.interpolate({
              inputRange,
              outputRange,
              extrapolate: 'clamp',
            })
          }]}
          />
          );
      });

    return (
        <View style={styles.container}>
          <View style={styles.wrap}>
            <Text style={styles.welcome}>
            Child's expressions and feelings:
            </Text>
           <View style={styles.line} />
           <View style={styles.reactions}>
               {lapsList}
             <Animated.View
                {...this._panResponder.panHandlers} style={[styles.bigSmiley, {
              transform: [{
                translateX: this.state.pan.interpolate({
                  inputRange: [0, END],
                  outputRange: [0, END],
                  extrapolate: 'clamp',
                })
              }]
            }]}
             >
          {finalList}
          </Animated.View>
          </View>
        </View>
      </View>
    );
  }
 
}
 const size = 42;   
const styles = {
    container: {
        position: 'relative',
        marginTop: 3,
        height: 195,
        width: TEXTWIDTH - 5,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#DFE6E3',
      },
      wrap: {
        width: WIDTH + 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignSelf: 'center',
      },
  welcome: {
    fontSize: 23,
    textAlign: 'left',
    color: '#00A6FF',
    fontWeight: '700',
    fontFamily: 'Avenir',
    marginBottom: 20,
    lineSpacing: 20,
    paddingTop: 15
  },
  smileyWrap: {
    width: DISTANCE,
    height: DISTANCE + 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20
  },
  smileyButton: {
      height: 60,
      width: 60,
      borderRadius: 30,
      backgroundColor: '#ecf0f1',
      justifyContent: 'center',
      alignItems: 'center',
       elevation: 1,

  },
  reactionText: {
    fontSize: 17,
    textAlign: 'center',
    color: '#999',
    fontWeight: '400',
    fontFamily: 'Avenir',
    marginTop: 3,
  },
   smiley: {
    height: 45,
     width: 45,
   
  },
  bigSmiley: {
    width: DISTANCE,
    height: DISTANCE,
    borderRadius: DISTANCE / 2,
    backgroundColor: '#ffb18d',
    position: 'absolute',
    elevation: 2,
    top: 0,
    left: 0,
  },
  bigSmileyImage: {
    width: DISTANCE,
    height: DISTANCE,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  reactions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  line: {
    height: 4 / PixelRatio.get(),
    backgroundColor: '#ffff',
    width: WIDTH - (DISTANCE - size),
    left: (DISTANCE - size) / 2,
    top: (DISTANCE / 2) + (2 / PixelRatio.get()),
  }
};
