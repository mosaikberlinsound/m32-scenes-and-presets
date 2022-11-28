# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [7.0.7](https://github.com/mosaikberlinsound/m32-scenes-and-presets/compare/v7.0.6...v7.0.7) (2022-11-28)


### Bug Fixes

* Added new patch field ([d8a25da](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/d8a25da1a00569374d7e5a56a8907fbe6a67d8c8))

### [7.0.6](https://github.com/mosaikberlinsound/m32-scenes-and-presets/compare/v7.0.5...v7.0.6) (2022-11-28)

### [7.0.5](https://github.com/mosaikberlinsound/m32-scenes-and-presets/compare/v7.0.4...v7.0.5) (2022-11-28)

### [7.0.4](https://github.com/mosaikberlinsound/m32-scenes-and-presets/compare/v7.0.3...v7.0.4) (2022-11-28)

### [7.0.3](https://github.com/mosaikberlinsound/m32-scenes-and-presets/compare/v7.0.2...v7.0.3) (2022-11-28)

### [7.0.2](https://github.com/mosaikberlinsound/m32-scenes-and-presets/compare/v7.0.1...v7.0.2) (2022-11-28)

### [7.0.1](https://github.com/mosaikberlinsound/m32-scenes-and-presets/compare/v7.0.0...v7.0.1) (2022-11-28)

## [7.0.0](https://github.com/mosaikberlinsound/m32-scenes-and-presets/compare/v6.0.3...v7.0.0) (2022-11-28)

### [6.0.5](https://github.com/mosaikberlinsound/m32-scenes-and-presets/compare/v6.0.4...v6.0.5) (2022-11-28)

### [6.0.4](https://github.com/mosaikberlinsound/m32-scenes-and-presets/compare/v6.0.3...v6.0.4) (2022-11-28)

### [6.0.3](https://github.com/mosaikberlinsound/m32-scenes-and-presets/compare/v6.0.2...v6.0.3) (2022-10-09)


### Bug Fixes

* adjust bus levels for drums/bass ([133554e](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/133554eb8edf3a0629cf2ef6e65f72d4caf6594f))

### [6.0.2](https://github.com/mosaikberlinsound/m32-scenes-and-presets/compare/v6.0.1...v6.0.2) (2022-07-31)


### Bug Fixes

* forget to add changes to CHANGELOG ([1ec7619](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/1ec761962ac0ecf6b3777d6f3f9590d6e396d344))
* version number in different line ([5c4bd93](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/5c4bd93ab235722ffa52de4271226e70ee050fbe))

### [6.0.1](https://github.com/mosaikberlinsound/m32-scenes-and-presets/compare/v6.0.0...v6.0.1) (2022-07-31)


### Bug Fixes

* busses now have a new value ([8a4ca7f](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/8a4ca7fcc248fc86788c36f396d4bb3bca624558))

## [6.0.0](https://github.com/mosaikberlinsound/m32-scenes-and-presets/compare/v5.2.1...v6.0.0) (2022-07-31)


### Features

* addapting changes of the new firmware version into the scene file
* adding delays to the speakers to optimize sound system

### [5.2.1](https://github.com/mosaikberlinsound/m32-scenes-and-presets/compare/v5.2.0...v5.2.1) (2022-03-21)


### Bug Fixes

* redundance ([07fbb0a](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/07fbb0aa1603750d11daeab84554c67e0dc0083c))
* rollback drum settings to v4.5.0 ([05e623b](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/05e623bf56e9ee66343cbe0f6c0dd5f32fe04edb))

## [5.2.0](https://github.com/mosaikberlinsound/m32-scenes-and-presets/compare/v5.1.0...v5.2.0) (2022-03-19)


### Features

* adding the patch field ([b132327](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/b1323274f6b5ba5081dac205ae202fbd0cb09fb2))

## [5.1.0](https://github.com/mosaikberlinsound/m32-scenes-and-presets/compare/v5.0.0...v5.1.0) (2022-03-19)


### Features

* added changes to CHANGELOG ([3764534](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/376453492bb2feb4d36b09d2fd9e504d32aadb19))

## [5.0.0](https://github.com/mosaikberlinsound/m32-scenes-and-presets/compare/v4.6.0...v5.0.0) (2022-03-19)

### Main changes:

- IEMs: Vocal Stereo-IEM-Bus split into two Mono-IEM Busses to provide IEMs for up to 6 musicians
- Drums: reorganized channels (added "snare bottom" channel, only one e-drum channel, removed third tom channel)
- Drums: added "DRM SMCK"-Bus for parallel compressing drums (deactivated by default)
- Bass: added channel for "Synth Bass"
- Keys: extension to 4 channels (2 linked channels for main piano sound, 2 separate channels e.g. for pads and arps)
- Vocals: added "Leisure Compressor" as insert for vocals 1 and 2
- FX: replaced "ACU REV" with "ROOM REV" (room reverb dedicated for live stream only) to give better live stream mix
- FX: changed Delay for a Delay without Reverb
- FX: DCA 8 controls send to Delay
- Live Stream: added "Stereo Combinator" as insert to provide multiband compression
- Version number moved to AUX1

To use parallel compression on drums ("DRM SMCK" Bus): adjust the input gain of FX6 (Ultimo Compressor) during loud part of a song so that the Gain Reduction meter shows heavy compression (e.g. -10). Blend in volume of DRM SMCK Bus to taste.

To use Leisure Compressor on Vocals 1 and 2: adjust Peak Reduction during loud part of a song so that Gain Reduction meter shows approx. -6dB on peaks.

### Features

* moving version number to AUX1 ([168b36f](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/168b36fba6c4b99a196709235bcb96068fbf3693))

## [4.6.0](https://github.com/mosaikberlinsound/m32-scenes-and-presets/compare/v4.5.0...v4.6.0) (2021-12-22)


### Features

* adding more low end to the floor tom ([a4bc71c](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/a4bc71c39771c5f9ce2e71307325d07d8b920929))
* adding more low end to the kick ([e9129fc](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/e9129fc6c1cbfb8d22a01679c7b864f7222df60d))
* adding the i5 speaker ([9cb7cc6](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/9cb7cc6c3e06115741422031ce954d03d02eec26))
* adjusting effect levels in livestream bus ([c48a498](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/c48a49874c8321f1783979c6a0bd063fe1d0d051))
* improve the initial gain levels ([a5c4872](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/a5c4872c8916eee021c0de2ead7a291c5d59aa3f))
* improve the starting In Ear levels ([1e45105](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/1e4510568c6ef1a9f6bbe30b74a7db6f72f30349))
* improving levels for background music ([f888fe7](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/f888fe7fedc7af0434c434be8cf8ad655818e443))
* improving the initial compressor levels ([aa0a2cb](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/aa0a2cbda622cb7c2c4f932232df4d218ff4efe1))
* improving the initial effect send levels ([436b8b1](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/436b8b1075eb070e26a869a152665b533dfc3796))


### Bug Fixes

* adjust slap delay level and name ([b09d202](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/b09d2022b42aaa368acb1d28bc10744e86bf58e1))
* improving the sub woofer level ([99ca019](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/99ca01957bf66fc1730accdac0513476c34ae0e6))

## [4.5.0](https://github.com/mosaikberlinsound/m32-scenes-and-presets/compare/v4.4.0...v4.5.0) (2021-12-18)


### Features

* adjusted EQ and pre amps for wireless mics ([b6e999c](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/b6e999c8073ca7811b0b4c715a4618c668a17228))
* adjusted PC sound sends to in ears ([ee2e7d9](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/ee2e7d9c429f5d0593a1abda85ecc70543940c4f))
* adjusting graph EQ setting for wireless mics ([1a68515](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/1a68515b4a5989d9117047c0399c57d70ecacc69))
* better EQ and pre amp for lead whisper mic ([ae714fc](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/ae714fcc8dfa0406748a23d218648f0a4a3aefd4))
* improved pre amp and EQs for all instruments ([38a5b3c](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/38a5b3c89b7b6a13d8965651d4f4376d9713b30c))
* improved starting positions for gain levels ([b8cd07f](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/b8cd07fd169ec824d15e7c39ddeaf820f4a693fb))
* improved starting positions for gain levels ([920cbfd](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/920cbfdd6c403089a7a63b9c39b0bf11c02df77f))
* increased sub volume ([590f9a5](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/590f9a5959a52d08f1cfb6c87927983500ce76b3))
* new drum settings after acoustic adjustments ([c25d42c](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/c25d42ca1f619efde55c2b2ddec1d4de05440982))
* optimized background music EQ ([005149c](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/005149c2c8ee2a1bcc2d7061d3d041d4d38c21b9))

## [4.4.0](https://github.com/mosaikberlinsound/m32-scenes-and-presets/compare/v4.3.0...v4.4.0) (2021-12-05)


### Features

* optimized preacher mic ([5051401](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/5051401f8904e68689332015104d365f219d91c7))


### Bug Fixes

* Bkg Music R was panned to left ([70115c9](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/70115c93436115107616f21cc071f9a209004a60))

## [4.3.0](https://github.com/mosaikberlinsound/m32-scenes-and-presets/compare/v4.2.0...v4.3.0) (2021-11-29)


### Features

* changed FX DCA to control  FX sends ([f7287d6](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/f7287d678daf1d98dfb293dbfb51379bacf6fda6))
* slightly increased Sub level ([2e2f862](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/2e2f862a88f22956990e1abed02d5d2e32cb81d2))


### Bug Fixes

* adjusted IEM for acoustic, electric, drums ([c4bbea4](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/c4bbea48eb4203e2ec4a5a0381f1474677a2d3f9))
* MD mic not to bus 13 ([ade7730](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/ade7730a5c23edab0618651031f19bcf398373e3))
* slightly adjusted/unified FX sends of Vocals ([490d4f1](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/490d4f167dad8180ff81666c8c1b3c5001108603))

## [4.2.0](https://github.com/mosaikberlinsound/m32-scenes-and-presets/compare/v4.1.0...v4.2.0) (2021-11-29)


### Features

* adjusted EQ for MD Mics to reduce bleed ([2dc0c89](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/2dc0c8939de122da9ef745a3535c0a6b2ae0e1a2))
* changed default IEM Mix for all instruments ([5045522](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/50455225c4cf9139d496c854b44cf6a20df70566))

## [4.1.0](https://github.com/mosaikberlinsound/m32-scenes-and-presets/compare/v4.0.0...v4.1.0) (2021-11-28)


### Features

* adding host/preacher mic to In Ear mixes ([8d33737](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/8d33737abb67dd82ff1d2d200fc02b4436f1fdc5))
* preparations for recording sessions ([450f3c8](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/450f3c858c518c267853510bec9d5c6ea5490949))
* safed gain settings and phantom power ([c9b9542](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/c9b9542a24865a72f64599aa1e8b6e4f079bd756))


### Bug Fixes

* ambient mic inputs adjusted to overheads ([1fa2caa](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/1fa2caa93377299535e4d315db3f3b72b3cd2a7e))
* input for snare livestream ([da61af1](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/da61af1dedf32c98a73fb04a96b4c7dbe43c099f))
* PC sound as post fader into In Ears ([d2e0713](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/d2e07130f56bd9b3c550833a16258965666e7b94))
* swapping eDrums and Overheads ([f0571e9](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/f0571e924b42319138bbf79644da491183de0fd4))
* tracks input channel ([42516c3](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/42516c342e4f51edd1dd2811f71333260c936369))

## [4.0.0](https://github.com/mosaikberlinsound/m32-scenes-and-presets/compare/v3.1.0...v4.0.0) (2021-11-06)


### ⚠ BREAKING CHANGES

* adj. layout for linking chns (edrums, OH)

### Features

* adj. layout for linking chns (edrums, OH) ([e8f8f8f](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/e8f8f8f2f17ac2e791e08e8087aa91f4287117d3))
* adjusted EQ for kick drum ([e85dd1a](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/e85dd1a849a82187b6216659db2bbd61d91a7a83))
* introducing a slap delay ([99c1551](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/99c1551f2c7a77e3648d9753bc07cf395121cd95))
* mastering the room with compression ([ef4db64](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/ef4db643eda13ef088c3b9bbf762ea5be565842f))
* optimized bass guitar ([59fca7d](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/59fca7d76f653942f9238b2a7e030f26784a6991))
* optimized drum over head mics ([146bdd5](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/146bdd537cd3963e7f451f1ae4463a1dece8c4b3))
* optimized eDrums ([80a084a](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/80a084a39a2c8d88b4a56bc86d064774b1a42320))
* optimized electric guitar ([86c576c](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/86c576c9c252dda3a27fe7b092b4b41c0bcf4903))
* optimized preaching compression ([be178d0](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/be178d0bd7a53e4035334e10d003a6061bf64bba))
* optimized snare for house and livestream ([32e0bd8](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/32e0bd8baa1feab5797b120b3d8f21ea55b8ccda))
* optimized toms ([34c06d9](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/34c06d961c2b8ea0dbc0b3dca4eef71d7c014538))
* optimizing the effect ([ef51878](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/ef518780cd3f39563aae9971edb02ad06eeb29c0))
* renamed MDs to Music Direct and Worship Lead ([4cfef84](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/4cfef84456cec58b353587fbc48951e99431a2d9))


### Bug Fixes

* aux channels ([164a0a4](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/164a0a4666f13771d48e5013f446aeffeb3dcb2b))
* get rid of separate livestream preach mic ([8a1b5c1](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/8a1b5c1e7ddb25b20f55e1c6579cf284508e2432))
* renamed preacher channel ([eaf73f3](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/eaf73f3828864ea98a7ba90e49dffa760b3df6dd))
* version number ([b47112d](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/b47112d54203cc9d0fb766e26a8af646cec29a0b))

## [3.1.0](https://github.com/mosaikberlinsound/m32-scenes-and-presets/compare/v3.0.1...v3.1.0) (2021-10-05)


### Features

* automatic version number in scene file ([2b1a824](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/2b1a824fb72e762b956e7825fe638d7e1e1ae132))
* compression for accoustic guitar ([8222045](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/822204558aa8f09d0ad1abd661e9989105c52971))
* higher gain levels for most instruments ([b49e5bb](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/b49e5bb37daf647de9185edcae2e6f585ba34675))
* introducing a 2nd MD channel ([29cc379](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/29cc379b67709086da49c7909861dd1306b51169))
* more defensive EQ for Keys ([f4458f4](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/f4458f433b728418873df2dfb11892e39efbe7fe))
* settings for eDrums ([ba60d3e](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/ba60d3e6a0ade6934f18eda6844026b44c5ac575))


### Bug Fixes

* optimizing wireless mic's EQ and compression ([e1ead20](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/e1ead20e6e07a719241274b7ffec8987bbbe302b))
* panning and pre/post fader for busses ([ce9bf0c](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/ce9bf0cd2a8493bde67687f5215dc7cc1d22f58b))

### [3.0.1](https://github.com/mosaikberlinsound/m32-scenes-and-presets/compare/v3.0.0...v3.0.1) (2021-10-02)


### Bug Fixes

* adjust version to 3.0.1 ([04d4ff4](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/04d4ff4ede07c7d4e149eaaf3c3356503c5d0d4f))
* channel levels for in ears ([4ba24d4](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/4ba24d49f9fb6bfaf88e05badb80ca335027740c))
* increase volume for X4 ([cfd8f6a](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/cfd8f6ae544efb32daa3c54f19d3937e9c06b97e))
* PC music was only left in livestream ([d2ef6e0](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/d2ef6e0921c73263c8f4f18c795018b68f2e979b))

## [3.0.0](https://github.com/mosaikberlinsound/m32-scenes-and-presets/compare/v2.0.0...v3.0.0) (2021-09-12)


### Features

* add room mics to the Livestream during the ([d756643](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/d756643a9da447d34df113e7926893aa5a831624))
* adding a Preach ch for Livestream ([ebf9346](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/ebf9346a0839b684609b4daeaa6a9082bae23226))
* adding TALK B to master ([ac90d4d](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/ac90d4da928602c28c3a1d0f09f048cd2880fc12))
* adjusted EQ for effect return, clearer sound ([ed766ce](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/ed766ce517e186f1f44e278eb8c0749102d95b7d))
* adjusted EQs for wireless mics ([809a98f](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/809a98fc4ebd0e2f08e0a0905983ec416abd54f9))
* making the bass guitar warmer ([ab7283e](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/ab7283edddfb2e5606d547c9ec2e4263d616fa74))
* making the Keys cleaner ([7272486](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/7272486dd2d9b436417910cf21d8a1d43cc2ac51))
* optimize MDs, Click, Guide ([f7ba12d](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/f7ba12d6f648948e346566e87d3eefe72173a11e))
* Restructured DCA groups ([3870e70](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/3870e700e7afc8106dc9d56c15f6b1b95de11a0f))
* update livestream mix and send Speach to IEM ([db13cb6](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/db13cb680646cb2792d626c85cff61dbd1879fd5))


### Bug Fixes

* EQs for speakers off and X6 louder than X4 ([285c2a2](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/285c2a2aafbce1e72e9e127d7e310e6918f05dc7))
* naming and level issues ([5b9c68f](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/5b9c68f227dbb7f581fc443b09739333104d8e0a))
* set level faders down to -oo ([38d76df](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/38d76dfaaf867c7e141ad6b809af30f54ed5c9ca))
* switching not needed channels off ([8d55ff3](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/8d55ff3b1297babfa8cb134bf3acffebdc270eab))

## [2.0.0](https://github.com/mosaikberlinsound/m32-scenes-and-presets/compare/v1.0.0...v2.0.0) (2021-08-28)


### Features

* adding scene file documentation ([3313d38](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/3313d38834b2a2adfdba0d520d4cdbefa46519e5))
* general update of channels, sends, fxs ([a4c4a80](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/a4c4a80441b35d5f84c70ba53c972a0570446d9b))
* reset all insert and add graph EQ ([3b7417a](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/3b7417a6c7933c471e54b7aaaba59c2554a52cf9))


### Bug Fixes

* all headamps to +0.0 and phantom power OFF ([b33c4b3](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/b33c4b3c23e28d2157a61ba532fae644151fdf3a))
* channel linking and talk back send outs ([9ead91d](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/9ead91db8f514078a885964966c860d42b884fb8))
* removed version from filename ([92328ee](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/92328ee96f031c3e3951958cfb745f4ddee777a5))
* reset graphic EQ for master channel ([34e55b8](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/34e55b805b1758483ac22cc9a7959bba92dc4af3))

## 1.0.0 (2021-08-09)


### Features

* initial Heeresbäckerei setup file ([789eef8](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/789eef86b9b35734b841d228e624d7f42cba0b30))


### Bug Fixes

* add push to Github script ([3f61731](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/3f61731f3f03012f92226ce7849cc8ae1d178eea))
* install changelog package ([8bef648](https://github.com/mosaikberlinsound/m32-scenes-and-presets/commit/8bef648bb631ae9c15051c9e119be8d9451aa829))
