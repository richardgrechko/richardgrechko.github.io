// SHAPE DEFINITIONS
var target =
  "M 0 -0.7 A 0.7 0.7 0 0 0 0 0.7 A 0.7 0.7 0 0 0 0 -0.7 M 0 -0.55 A 0.55 0.55 0 0 1 0 0.55 A 0.55 0.55 0 0 1 0 -0.55 M 0.3 0.1 L 0.9 0.1 L 0.9 -0.1 L 0.3 -0.1 L 0.3 0.1 M -0.1 0.3 L -0.1 0.9 L 0.1 0.9 L 0.1 0.3 L -0.1 0.3 M -0.3 -0.1 L -0.9 -0.1 L -0.9 0.1 L -0.3 0.1 L -0.3 -0.1 M 0.1 -0.3 L 0.1 -0.9 L -0.1 -0.9 L -0.1 -0.3 L 0.1 -0.3";
var railgun =
  "M 0 -0.9 A 0.9 0.9 90 0 1 0 0.9 A 0.9 0.9 90 0 1 -0.5 0.72 L -1.26 0 L -0.5 -0.72 A 0.9 0.9 90 0 1 0 -0.9";
var cerimatizer =
  "M 0 0.9 A 0.9 0.9 270 0 1 -0 -0.9 A 0.9 0.9 270 0 1 0.5 -0.72 L 1.26 -0 L 0.5 0.72 A 0.9 0.9 270 0 1 0 0.9";
var dropship =
  "M 0 -0.9 A 0.9 0.9 90 0 1 0 0.9 A 0.9 0.9 90 0 1 -0.5 0.72 L -1.26 0 L -0.5 -0.72 A 0.9 0.9 90 0 1 0 -0.9";
var ring =
  "M 0 -1 A 1 1 0 0 0 0 1 A 1 1 0 0 0 0 -1 A 1 1 0 0 1 0 1 A 1 1 0 0 1 0 -1";
var aura =
  "M 0.996 0.087 L -0.4226 0.906 L -0.5736 0.8192 L -0.5736 -0.8192 L -0.4226 -0.906 L 0.996 -0.087 L 0.996 0.087";
var realBullet =
  "m -1.0306 -0.2547 l 0 0.4942 l 1.6127 0 l 0.3642 -0.0954 l 0.9538 -0.1474 l -0.9191 -0.1387 l -0.3642 -0.1127 z";
var nuke =
  "M -1.6967 -0.7602 L -1.6967 -0.8078 L -1.3138 -0.8367 L -1.1233 -0.8367 L -1.1233 -0.7755 L -0.7832 -0.7755 L -0.5731 -0.6157 L -0.1261 -0.784 L 0.3475 -0.8333 L 0.4098 -0.8333 L 0.9583 -0.7551 L 1.318 -0.6157 L 1.3518 -0.5444 L 1.3776 -0.5444 L 1.4034 -0.5548 L 1.6717 -0.3177 L 1.7581 0.0113 L 1.6601 0.3379 L 1.4272 0.5232 L 1.4011 0.5028 L 1.3387 0.5028 L 1.3417 0.5742 L 0.9606 0.802 L 0.4015 0.8598 L -0.1861 0.7884 L -0.5885 0.632 L -0.7773 0.7816 L -1.1049 0.7816 L -1.1049 0.8462 L -1.2936 0.8505 L -1.6783 0.802 L -1.6783 0.7408 L -1.3008 0.7408 L -1.3008 0.3124 L -1.7602 0.3124 L -1.7637 -0.3302 L -1.3043 -0.337 L -1.2972 -0.7245 Z M -0.9376 0.2478 L -1.1513 0.2478 L -1.1513 -0.2248 L -0.9448 -0.2248 Z";
var shield =
  "M 0.8 0 A 5 5 0 0 1 -0.86 0.99 A 2 2 0 0 0 -0.85 -1 A 5 5 0 0 1 0.8 0";
var moon = "m 0 -1 A 1 1 0 0 1 0 1 A 1.5 1.5 0 0 0 0 -1";
var snowflake =
  "M 1 0 L 0.94 0.11 L 0.73 0.11 L 0.81 0.26 L 0.75 0.37 L 0.64 0.37 L 0.5 0.11 L 0.18 0.11 L 0.33 0.38 L 0.63 0.39 L 0.69 0.49 L 0.62 0.58 L 0.45 0.57 L 0.55 0.76 L 0.51 0.86 L 0.39 0.86 L 0.27 0.65 L 0.17 0.83 L 0.07 0.84 L 0.01 0.74 L 0.17 0.47 L 0.01 0.21 L -0.16 0.49 L -0.02 0.75 L -0.07 0.85 L -0.19 0.84 L -0.27 0.68 L -0.38 0.87 L -0.5 0.88 L -0.55 0.78 L -0.43 0.56 L -0.64 0.56 L -0.69 0.49 L -0.63 0.38 L -0.33 0.38 L -0.17 0.11 L -0.51 0.11 L -0.66 0.36 L -0.77 0.36 L -0.82 0.27 L -0.73 0.11 L -0.96 0.11 L -1 0 L -0.94 -0.11 L -0.73 -0.11 L -0.81 -0.26 L -0.75 -0.37 L -0.64 -0.37 L -0.5 -0.11 L -0.18 -0.11 L -0.33 -0.38 L -0.63 -0.39 L -0.69 -0.49 L -0.62 -0.58 L -0.45 -0.57 L -0.55 -0.76 L -0.51 -0.86 L -0.39 -0.86 L -0.27 -0.65 L -0.17 -0.83 L -0.07 -0.84 L -0.01 -0.74 L -0.17 -0.47 L -0.01 -0.21 L 0.16 -0.49 L 0.02 -0.75 L 0.07 -0.85 L 0.19 -0.84 L 0.27 -0.68 L 0.38 -0.87 L 0.5 -0.88 L 0.55 -0.78 L 0.43 -0.56 L 0.64 -0.56 L 0.69 -0.49 L 0.63 -0.38 L 0.33 -0.38 L 0.17 -0.11 L 0.51 -0.11 L 0.66 -0.36 L 0.77 -0.36 L 0.82 -0.27 L 0.73 -0.11 L 0.96 -0.11 L 1 0";
var explosiveShard = "M 1 0 L -0.13 0.7 L -0.83 0L -0.13 -0.7 Z";
var orbitPiece =
  "M 1 1 L 1 -1 L -1 -1 L -1 1 L 1 1 M 0.95 0.95 L -0.95 0.95 L -0.95 -0.95 L 0.95 -0.95 L 0.95 0.95";
var orbitPiece2 =
  "M 0.9257 0 A 0.9256 0.9256 90 0 1 -0.9257 0 A 0.9256 0.9256 90 0 1 0.9257 0 M 0 1 A 0.935 0.935 90 0 0 0 -1 A 0.935 0.935 90 0 0 0 1";
var thunder = "M 1 0.5 L -1 0.5 L -1 -0.5 L 1 -0.5 L 1 0.5";
var splitHexagon =
  "M -0.572 -1.0028 L -0.8575 -0.4991 L -1.1197 -0.0532 L 1.1337 -0.0532 L 0.8714 -0.4991 L 0.586 -1.0028 L 0.007 -0.9982 L -0.572 -1.0028 z M -1.1116 0.0671 L -0.8575 0.4991 L -0.572 1.0029 L 0.007 0.9982 L 0.586 1.0029 L 0.8714 0.4991 L 1.1255 0.0671 L -1.1116 0.0671 z";
var sine =
  "M -1 0 C 0.35 -1.7599 1.65 -1.7599 3 0 M 3 0 C 4.35 1.7599 5.65 1.7599 7 0 M 7 0 C 8.35 -1.7599 9.65 -1.7599 11 0 M 11 0 C 12.35 1.7599 13.65 1.7599 15 0 M 15 0 C 16.35 -1.7599 17.65 -1.7599 19 0 M 19 0 C 20.35 1.7599 21.65 1.7599 23 0 M 23 0 C 24.35 -1.7599 25.65 -1.7599 27 0 M 27 0 C 28.35 1.7599 29.65 1.7599 31 0";
var forAll =
  "M 0.83 -0.85 L 0.15 0.98 L -0.1 0.98 L -0.83 -0.84 L -0.57 -0.84 L -0.39 -0.4 L 0.43 -0.4 L 0.63 -0.86 Z M -0.28 -0.1 A 0 1 0 0 0 0.01 0.72 A 0 1 0 0 0 0.31 -0.1 Z";
var zeppelinTurret =
  "M -1.0751 -0.0058 C -1.0751 -0.5984 -0.5946 -1.0789 -0.002 -1.0789 L -0.002 -1.0789 C 0.2826 -1.0789 0.5556 -0.9658 0.7568 -0.7646 C 0.958 -0.5633 1.0711 -0.2904 1.0711 -0.0058 L 1.0711 -0.0058 C 1.0711 0.5869 0.5907 1.0673 -0.002 1.0673 L -0.002 1.0673 C -0.5946 1.0673 -1.0751 0.5869 -1.0751 -0.0058 Z M 0.2695 -1.0472 L 2.2386 -0.6963 L 2.2359 0.6847 L 0.2654 1.0357 Z M 2.1833 -0.5077 C 2.1833 -0.5903 2.1163 -0.6573 2.0337 -0.6573 C 1.994 -0.6573 1.956 -0.6416 1.9279 -0.6135 C 1.8999 -0.5855 1.8841 -0.5474 1.8841 -0.5077 C 1.8841 -0.4251 1.9511 -0.3581 2.0337 -0.3581 C 2.1163 -0.3581 2.1833 -0.4251 2.1833 -0.5077 Z M 2.1833 -0.0058 C 2.1833 -0.0884 2.1163 -0.1554 2.0337 -0.1554 C 1.994 -0.1554 1.956 -0.1396 1.9279 -0.1116 C 1.8999 -0.0835 1.8841 -0.0455 1.8841 -0.0058 C 1.8841 0.0768 1.9511 0.1438 2.0337 0.1438 C 2.1163 0.1438 2.1833 0.0768 2.1833 -0.0058 Z M 1.801 -0.2603 C 1.801 -0.3429 1.734 -0.4099 1.6514 -0.4099 C 1.6118 -0.4099 1.5737 -0.3941 1.5456 -0.3661 C 1.5176 -0.338 1.5018 -0.3 1.5018 -0.2603 C 1.5018 -0.1777 1.5688 -0.1107 1.6514 -0.1107 C 1.734 -0.1107 1.801 -0.1777 1.801 -0.2603 Z M 1.801 0.2416 C 1.801 0.159 1.734 0.092 1.6514 0.092 C 1.6118 0.092 1.5737 0.1078 1.5456 0.1359 C 1.5176 0.1639 1.5018 0.202 1.5018 0.2416 C 1.5018 0.3242 1.5688 0.3912 1.6514 0.3912 C 1.734 0.3912 1.801 0.3242 1.801 0.2416 Z M 1.3904 -0.5077 C 1.3904 -0.5903 1.3234 -0.6573 1.2408 -0.6573 C 1.2011 -0.6573 1.1631 -0.6416 1.135 -0.6135 C 1.1069 -0.5855 1.0912 -0.5474 1.0912 -0.5077 C 1.0912 -0.4251 1.1582 -0.3581 1.2408 -0.3581 C 1.3234 -0.3581 1.3904 -0.4251 1.3904 -0.5077 Z M 2.1833 0.4961 C 2.1833 0.4135 2.1163 0.3465 2.0337 0.3465 C 1.994 0.3465 1.956 0.3623 1.9279 0.3903 C 1.8999 0.4184 1.8841 0.4565 1.8841 0.4961 C 1.8841 0.5787 1.9511 0.6457 2.0337 0.6457 C 2.1163 0.6457 2.1833 0.5787 2.1833 0.4961 Z M 1.3904 -0.0058 C 1.3904 -0.0884 1.3234 -0.1554 1.2408 -0.1554 C 1.2011 -0.1554 1.1631 -0.1396 1.135 -0.1116 C 1.1069 -0.0835 1.0912 -0.0455 1.0912 -0.0058 C 1.0912 0.0768 1.1582 0.1438 1.2408 0.1438 C 1.3234 0.1438 1.3904 0.0768 1.3904 -0.0058 Z M 1.3904 -0.0058 C 1.3904 0.0768 1.3234 0.1438 1.2408 0.1438 C 1.2011 0.1438 1.1631 0.128 1.135 0.1 C 1.1069 0.0719 1.0912 0.0339 1.0912 -0.0058 C 1.0912 -0.0884 1.1582 -0.1554 1.2408 -0.1554 C 1.3234 -0.1554 1.3904 -0.0884 1.3904 -0.0058 Z M 1.0912 0.4961 C 1.0912 0.5787 1.1582 0.6457 1.2408 0.6457 C 1.2805 0.6457 1.3185 0.63 1.3466 0.6019 C 1.3746 0.5738 1.3904 0.5358 1.3904 0.4961 C 1.3904 0.4135 1.3234 0.3465 1.2408 0.3465 C 1.1582 0.3465 1.0912 0.4135 1.0912 0.4961 Z M -0.3894 0.3816 C -0.1754 0.5955 0.1714 0.5955 0.3854 0.3816 C 0.5438 0.2232 0.7314 0.094 0.9484 -0.0058 C 0.7314 -0.1057 0.5438 -0.2348 0.3854 -0.3932 C 0.1714 -0.6072 -0.1754 -0.6072 -0.3894 -0.3932 C -0.6033 -0.1793 -0.6033 0.1676 -0.3894 0.3816 Z";
// functions
const mod = (x, y) => {
  return x % y;
};
// GUN DEFINITIONS
const combineStats = function (arr) {
  try {
    // Build a blank array of the appropiate length
    let data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    arr.forEach(function (component) {
      for (let i = 0; i < data.length; i++) {
        data[i] = data[i] * component[i];
      }
    });
    return {
      reload: data[0],
      recoil: data[1],
      shudder: data[2],
      size: data[3],
      health: data[4],
      damage: data[5],
      pen: data[6],
      speed: data[7],
      maxSpeed: data[8],
      range: data[9],
      density: data[10],
      spray: data[11],
      resist: data[12],
    };
  } catch (err) {
    console.log(err);
    console.log(JSON.stringify(arr));
  }
};
const skillSet = (() => {
  let config = require("./config.json");
  let skcnv = {
    rld: 0,
    pen: 1,
    str: 2,
    dam: 3,
    spd: 4, //ssr

    shi: 5, //Shield Capacity
    atk: 6, //attack maybe?
    hlt: 7, //Health
    rgn: 8, //Health regen
    mob: 9, //Mobility
  };
  return (args) => {
    let skills = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let s in args) {
      if (!args.hasOwnProperty(s)) continue;
      skills[skcnv[s]] = Math.round(config.MAX_SKILL * args[s]);
    }
    return skills;
  };
})();

const g = {
  // Gun info here
  trap: [36, 1, 0.25, 0.6, 1, 0.75, 1, 5, 1, 1, 1, 15, 3],
  caltrop: [24, 1, 0.25, 1, 1, 0.5, 1, 5, 1, 1, 1, 15, 3],
  swarm: [30, 0.25, 0.05, 0.4, 1, 0.75, 1, 4, 1, 1, 1, 5, 1],
  pentaswarm: [30, 0.25, 0.05, 0.6, 1, 0.75, 1, 4, 1, 1, 1, 5, 1],
  drone: [48, 0.25, 0.1, 0.6, 1, 1, 1, 2, 1, 1, 1, 0.1, 1],
  watcher: [24, 0.25, 0.1, 0.6, 1, 0.75, 1, 2, 1, 1, 1, 0.1, 1],
  factory: [50, 1, 0.1, 0.7, 1, 0.75, 1, 3, 1, 1, 1, 0.1, 1],
  basic: [18, 1.4, 0.1, 1, 1, 1, 1, 4.5, 1, 1, 1, 15, 1],
  laser: [6, 0.1, 0.001, 1, 1, 0.25, 1, 12, 3, 1, 1, 1, 1],
  serene: [18, 1.4, 0.1, 0.667, 1, 1, 1, 4.5, 1, 1, 1, 15, 1],
  shootOnce: [Infinity, 0.75, 0.1, 1, 1, 0.75, 1, 4.5, 1, 1, 1, 15, 1],
  beyblade: [100, 0.75, 0.1, 9.6, 1, 0.75, 1, 4.5, 1, 2, 1, 1, 1],
  satellite: [30, 0.75, 0.1, 0.8, 1, 1.5, 1, 4.5, 1, 1, 1, 15, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  blank: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  aura: [1, 1, 1, 3.8, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  shootOnce: [Infinity, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  orthodox_portal: [4, 1e-3, 1, 1.6, 1, 1, 1, 1e-5, 1, 1, 1, 1, 1],
  waver: [1.15, 1, 1e-5, 1, 1, 1.5, 1, 0.75, 1, 1, 1, 1e-4, 1],
  spam: [1.1, 1, 1, 1.05, 1, 1.1, 1, 0.9, 0.7, 1, 1, 1, 1.05],
  minion: [1, 1, 2, 1, 0.4, 0.4, 1.2, 1, 1, 0.75, 1, 2, 1],
  single: [1.05, 1, 1, 1, 1, 1, 1, 1.05, 1, 1, 1, 1, 1],
  sniper: [1.35, 1, 0.25, 1, 1, 0.8, 1.1, 1.5, 1.5, 1, 1.5, 0.2, 1.15],
  click: [1.25, 0.275, 0.5, 1, 0.58, 0.6, 0.53, 0.98, 0.975, 1, 0.875, 2, 0.9],
  railgun: [4, 1, 0.25, 1, 1, 3.9, 1.1, 2, 2, 1, 1.5, 0.2, 1.15],
  particleAccel: [2.25, 1, 0.25, 1, 1, 2, 1.1, 2, 2, 1, 1.5, 1, 1.15],
  cerimatizer: [4, 1, 0.25, 1, 1, 3.9, 1.1, 1, 1, 1, 1.5, 0.2, 1.15],
  buster: [1.35, 1, 0.25, 2, 1, 0.8, 1.1, 1.5, 1.5, 1, 1.5, 0.2, 1.15],
  rifle: [0.8, 0.8, 1.5, 1, 0.8, 0.8, 0.9, 1, 1, 1, 1, 2, 1],
  assass: [1.65, 1, 0.25, 1, 1.15, 1, 1.1, 1.18, 1.18, 1, 3, 1, 1.3],
  hunter: [1.5, 0.7, 1, 0.95, 1, 0.9, 1, 1.1, 0.8, 1, 1.2, 1, 1.15],
  hunter2: [1, 1, 1, 0.9, 2, 0.5, 1.5, 1, 1, 1, 1.2, 1, 1.1],
  preda: [1.4, 1, 1, 0.8, 1.5, 0.9, 1.2, 0.9, 0.9, 1, 1, 1, 1],
  snake: [0.4, 1, 4, 1, 1.5, 0.9, 1.2, 0.2, 0.35, 1, 3, 6, 0.5],
  sidewind: [1.5, 2, 1, 1, 1.5, 0.9, 1, 0.15, 0.5, 1, 1, 1, 1],
  snakeskin: [0.6, 1, 2, 1, 0.5, 0.5, 1, 1, 0.2, 0.4, 1, 5, 1],
  mach: [0.5, 0.8, 1.7, 1, 0.7, 0.7, 1, 1, 0.8, 1, 1, 2.5, 1],
  overpowerer: [0.5, 0.8, 1, 1, 0.7, 0.7, 1, 1, 0.8, 1, 1, 1, 1],
  rocketeerTrail: [1.25, 3.5, 0.5, 1, 0.7, 0.7, 1, 1.2, 0.8, 1, 1, 2.5, 1],
  blaster: [1, 1.2, 1.25, 1.1, 1.5, 1, 0.6, 0.8, 0.33, 0.8, 0.5, 1.5, 0.8],
  chain: [1.25, 0.7, 0.8, 1, 0.8, 1, 1.1, 1.25, 1.25, 1.1, 1.25, 0.5, 1.1],
  mini: [1.25, 0.6, 1, 0.8, 0.55, 0.45, 1.25, 1.33, 1, 1, 1.25, 0.5, 1.1],
  gatling: [1.35, 0.5, 1, 0.8, 0.55, 0.45, 1.25, 1.33, 1, 1, 1.25, 0.5, 1.1],
  stream: [1.1, 0.6, 1, 1, 1, 0.65, 1, 1.24, 1, 1, 1, 1, 1],
  shotgun: [8, 0.4, 1, 1.5, 1, 0.4, 0.8, 1.8, 0.6, 1, 1.2, 1.2, 1],
  flank: [1, 1.2, 1, 1, 1.02, 0.81, 0.9, 1, 0.85, 1, 1.2, 1, 1],
  wind: [1.2, 1.2, 1, 1, 1.02, 0.81, 0.9, 1, 0.85, 1, 1.2, 1, 1],
  tri: [1, 0.9, 1, 1, 0.9, 1, 1, 0.8, 0.8, 0.6, 1, 1, 1],
  rocketBooster: [
    0.225, 0.2, 0.001, 1, 0.707, 0.001, 0.8, 1.4, 2, 0.075, 0.3, 0.001, 1,
  ],
  trifront: [1, 0.2, 1, 1, 1, 1, 1, 1.3, 1.1, 1.5, 1, 1, 1],
  thruster: [1, 1.5, 2, 1, 0.5, 0.5, 0.7, 1, 1, 1, 1, 0.5, 0.7],
  auto: /*pure*/ [
    1.9, 0.75, 0.5, 0.8, 0.9, 0.6, 1.2, 1.1, 1, 0.8, 1.3, 1, 1.25,
  ],
  five: [1.15, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.1, 2, 1, 1],
  autosnipe: [1, 1, 1, 1.4, 2, 1, 1, 1, 1, 1, 1, 1, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  pound: [2, 1.6, 1, 1, 1, 2, 1, 0.85, 0.8, 1, 1.5, 1, 1.15],
  destroy: [2.2, 1.8, 0.5, 1, 2, 2, 1.2, 0.65, 0.5, 1, 2, 1, 3],
  destroydom: [6.5, 0, 1, 0.975, 6, 6, 6, 0.575, 0.475, 1, 1, 0.5, 1],
  oxy: [2, 1, 0.5, 0.667, 1, 1, 1, 2.5, 2.25, 1.2, 1, 1, 1],
  oxyres: [1.5, 1, 0.5, 0.8, 1, 1, 1, 1.5, 1.25, 1.2, 1, 1, 1],
  megatrap: [2.5, 1.4, 0.5, 1.2, 2, 2, 1.2, 0.65, 0.5, 1, 2, 1, 3],
  anni: [0.85, 1.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  elim: [1.75, 1.5, 1, 1, 1.5, 1.75, 1, 0.7, 0.6, 1, 2, 1, 3],
  hive: [1.5, 0.8, 1, 0.8, 0.7, 0.3, 1, 1, 0.6, 1, 1, 1, 1],
  arty: [1.2, 0.7, 1, 0.9, 1, 1, 1, 1.15, 1.1, 1, 1.5, 1, 1],
  mortar: [1.2, 1, 1, 1, 1.1, 1, 1, 0.8, 0.8, 1, 1, 1, 1],
  spreadmain: [
    0.78125,
    0.25,
    0.5,
    1,
    0.5,
    1,
    1,
    1.5 / 0.78,
    0.9 / 0.78,
    1,
    1,
    1,
    1,
  ],
  spread: [1.5, 1, 0.25, 1, 1, 1, 1, 0.7, 0.7, 1, 1, 0.25, 1],
  skim: [1.33, 0.8, 0.8, 0.9, 1.35, 0.8, 2, 0.3, 0.3, 1, 1, 1, 1.1],
  rocketeer: [1.25, 0.9, 0.8, 0.95, 1.35, 0.925, 2, 0.4, 0.385, 1.3, 1, 1, 1.1],
  shrapnel: [2.5, 1, 1, 1, 1.05, 1.1, 1, 1, 1, 1.05, 1, 1, 1],
  electro: [3, 1, 0.1, 1.3333, 1, 1, 1, 1.5, 1.5, 1, 2, 0.1, 1],
  split: [1.5, 0.5, 0.9, 1, 0.9, 0.7, 1, 1, 1, 1, 1, 1.2, 1],
  twin: [1, 0.5, 0.9, 1, 0.9, 0.7, 1, 1, 1, 1, 1, 1.2, 1],
  pellet: [1.25, 0.1, 0.75, 1, 0.6, 0.6, 1.225, 1.2, 1.175, 1, 1, 0.75, 1], // reduced reload, hp and damage for no op
  bent: [1.1, 1, 0.8, 1, 0.9, 1, 0.8, 1, 1, 1, 0.8, 0.5, 1],
  triple: [1.2, 0.667, 0.9, 1, 0.85, 0.85, 0.9, 1, 1, 1, 1.1, 0.9, 0.95],
  quint: [1.5, 0.667, 0.9, 1, 1, 1, 0.9, 1, 1, 1, 1.1, 0.9, 0.95],
  dual: [2, 1, 0.8, 1, 1.5, 1, 1, 1.3, 1.1, 1, 1, 1, 1.25],
  dual2: [1, 1, 0.8, 1, 0.5, 0.55, 0.7, 1, 1, 1, 1, 1, 0.75],
  double: [1, 1, 1, 1, 1, 0.9, 1, 1, 1, 1, 1, 1, 1],
  hewn: [1.25, 1.5, 1, 1, 0.9, 0.85, 1, 1, 0.9, 1, 1, 1, 1],
  puregunner: [
    1, 0.25, 1.5, 1.2, 1.35, 0.25, 1.25, 0.8, 0.65, 1, 1.5, 1.5, 1.2,
  ],
  wasp: [1, 0.25, 1.5, 0.9, 0.25, 0.25, 1.25, 0.8, 0.65, 1, 1.5, 1.5, 1.2],
  gundom: [1.1, 0, 1.1, 0.5, 0.5, 0.5, 1, 1.1, 1, 1, 0.9, 1.2, 0.8],
  machgun: [0.66, 0.8, 2, 1, 1, 0.75, 1, 1.2, 0.8, 1, 1, 2.5, 1],
  gunner: [1.25, 0.25, 1.5, 1.1, 1, 0.35, 1.35, 0.9, 0.8, 1, 1.5, 1.5, 1.2],
  power: [1, 1, 0.6, 1, 1, 1, 1.25, 2, 1.7, 1, 2, 0.5, 1.5],
  nail: [0.85, 2.5, 1, 0.8, 1, 0.7, 1, 1, 1, 1, 2, 1, 1],
  fast: [1, 1, 1, 1, 1, 1, 1, 1.2, 1, 1, 1, 1, 1],
  turret: [1.9, 1, 1, 1, 0.8, 0.6, 0.7, 1, 1, 1, 0.1, 1, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  battle: [1, 1, 1, 1, 1.25, 1.15, 1, 1, 0.85, 1, 1, 1, 1.1],
  bees: [1.3, 1, 1, 1.4, 1, 1.5, 0.5, 3, 1.5, 1, 0.25, 1, 1],
  carrier: [1.5, 1, 1, 1, 1, 0.8, 1, 1.3, 1.2, 1.2, 1, 1, 1],
  hexatrap: [1.3, 1, 1.25, 1, 1, 1, 1, 0.8, 1, 0.5, 1, 1, 1],
  trapdom: [0.8, 0, 0.25, 1, 0.8, 1, 1.3, 0.5, 2, 0.7, 1, 0.5, 1],
  block: [1.1, 2, 0.1, 1.5, 2, 1, 1.25, 1.5, 2.5, 1.25, 1, 1, 1.25],
  construct: [1.3, 1, 1, 0.9, 1, 1, 1, 1, 1.1, 1, 1, 1, 1],
  boomerang: [0.8, 1, 1, 1, 0.5, 0.5, 1, 0.75, 0.75, 1.333, 1, 1, 1],
  over: [1.25, 1, 1, 0.85, 0.7, 0.8, 1, 1, 0.9, 1, 2, 1, 1],
  meta: [1.333, 1, 1, 1, 1, 0.667, 1, 1, 1, 1, 1, 1, 1],
  //     r  r  d  s  h  d    p  s  m  r  d  s  r
  weak: [1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 1],
  weaker: [1, 1, 1, 1, 1, 0.3, 1, 1, 1, 1, 1, 1, 1],
  master: [3, 1, 1, 0.7, 0.4, 0.7, 1, 1, 1, 0.1, 0.5, 1, 1],
  sunchip: [5, 1, 1, 1.4, 0.5, 0.4, 0.6, 1, 1, 1, 0.8, 1, 1],
  babyfactory: [1.5, 1, 1, 1, 1, 1, 1, 1, 1.35, 1, 1, 1, 1],
  lowpower: [1, 1, 2, 1, 0.5, 0.5, 0.7, 1, 1, 1, 1, 0.5, 0.7],
  halfrecoil: [1, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  morerecoil: [1, 1.15, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  muchmorerecoil: [1, 1.35, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  lotsmorrecoil: [1, 1.8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  tonsmorrecoil: [1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  norecoil: [1, 0.0000001, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  noshudder: [1, 1, 0.000001, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  nospeed: [1, 1, 0.00001, 1, 1, 1, 1, 0.000001, 0.0001, 1, 1, 1, 1],
  nodamage: [1, 1, 1, 1, 1, 0.00001, 1, 1, 1, 1, 1, 1, 1],
  doublereload: [0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  kashmir: [0.125, 2, 1, 1, 0.125, 0.125, 1, 1.3, 1.3, 0.3, 1, 1e-5, 1],
  guardian: [0.25, 0.3, 1e-3, 0.7, 0.5, 1, 1, 1.1, 1.1, 0.9, 1, 0.1, 1],
  morereload: [0.75, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  bitmorereload: [0.9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  halfreload: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  lessreload: [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  threequartersrof: [1.333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  morespeed: [1, 1, 1, 1, 1, 1, 1, 1.3, 1.3, 1, 1, 1, 1],
  evenmorespeed: [1, 1, 1, 1, 1, 1, 1, 1.6, 1.6, 1, 1, 1, 1],
  doublespeed: [1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1],
  bitlessspeed: [1, 1, 1, 1, 1, 1, 1, 0.93, 0.93, 1, 1, 1, 1],
  slow: [1, 1, 1, 1, 1, 1, 1, 0.7, 0.7, 1, 1, 1, 1],
  halfspeed: [1, 1, 1, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 1],
  notdense: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.1, 1, 1],
  halfrange: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1],
  halfdamage: [1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 1],
  lessdamage: [1, 1, 1, 1, 1, 0.75, 1, 1, 1, 1, 1, 1, 1],
  evensmaller: [1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  spikeshot: [1, 1, 1, 0.667, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  smaller: [1, 1, 1, 0.75, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  bigger: [1, 1, 1, 1.3, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  evenbigger: [1, 1, 1, 1.6, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  fake: [1, 1, 1, 0.00001, 0.0001, 1, 1, 0.00001, 2, 0, 1, 1, 1], // Healer Cannons
  healer: [1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1],

  // Recoil Modifiers
  tonsmorrecoil: [1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  lotsmorrecoil: [1, 1.8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  muchmorerecoil: [1, 1.35, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  morerecoil: [1, 1.15, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  halfrecoil: [1, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

  // Reload Modifiers
  halfreload: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  lessreload: [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  one_third_reload: [1.333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  morereload: [0.75, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  doublereload: [0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  bitmorereload: [0.92, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  launcher: [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

  // Speed Modifiers
  fast: [1, 1, 1, 1, 1, 1, 1, 1.2, 1, 1, 1, 1, 1],
  veryfast: [1, 1, 1, 1, 1, 1, 1, 2.5, 1, 1, 1, 1, 1],
  morespeed: [1, 1, 1, 1, 1, 1, 1, 1.3, 1.3, 1, 1, 1, 1],
  triplespeed: [1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1],
  bitlessspeed: [1, 1, 1, 1, 1, 1, 1, 0.93, 0.93, 1, 1, 1, 1],
  slow: [1, 1, 1, 1, 1, 1, 1, 0.7, 0.7, 1, 1, 1, 1],
  halfspeed: [1, 1, 1, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 1],

  // Other
  lowpower: [1, 1, 2, 1, 0.5, 0.5, 0.7, 1, 1, 1, 1, 0.5, 0.7],
  lesspower: [1, 1, 1, 1, 0.9, 0.9, 0.9, 1, 1, 1, 1, 1, 1],
  bitlessreload: [1.1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  notdense: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.1, 1, 1],
  lessrange: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.75, 1, 1, 1],
  halfrange: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1],
  muchlessrange: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.3, 1, 1, 1],
  lance: [1.55, 0, 0.1, 1, 0.1, 3.515, 1.6, 0.4 /*.7*/, 1, 0.05, 1, 180, 1], //[.75, 0, .1, 1, .05, 2, .9, .7, 1, .05, 1, 180, 1],
  bitmoredamage: [1, 1, 1, 1, 1.05, 1.1, 1, 1, 1, 1, 1, 1, 1],
  moredamage: [1, 1, 1, 1, 1.5, 1.1, 1, 1, 1, 1, 1, 1, 1],
  bitlessdamage: [1, 1, 1, 1, 0.95, 0.9, 1, 1, 1, 1, 1, 1, 1],
  less_power: [1, 1, 1, 1, 0.9, 0.9, 0.9, 1, 1, 1, 1, 1, 1],
  small: [1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  centaur: [1.3, 1, 1, 1, 1.5, 1.4, 2.2, 1, 1, 1, 1, 1, 1],
  celeslower: [2, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  accurate: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.25, 1],
  shrapnelExplosion: [
    4.5, 3.2375, 0.5, 0.3, 40, 0.5, 1.32, 0.00001, 0.00001, 1, 2.56, 1, 3.45,
  ],
  charger: [2, 0.2, 1, 1, 1, 2, 1, 1.5, 1.5, 1, 1, 1, 1],
  antiMaterialRifle: [2, 0.2, 1, 1, 1, 2, 1, 1.2, 1.2, 1, 1, 1, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  op: [0.5, 1.3, 1, 1, 4, 4, 4, 2, 2, 1, 5, 1, 1],
  protectorswarm: [5, 0.000001, 1, 1, 100, 1, 1, 1, 1, 0.5, 5, 1, 10],
};

const dfltskl = 9;

// NAMES
const statnames = {
  smasher: 1,
  drone: 2,
  necro: 3,
  swarm: 4,
  trap: 5,
  generic: 6,
  flail: 7,
  lancer: 8,
};
const gunCalcNames = {
  default: 0,
  bullet: 1,
  drone: 2,
  swarm: 3,
  fixedReload: 4,
  thruster: 5,
  sustained: 6,
  necro: 7,
  trap: 8,
};

// ENTITY DEFINITIONS
exports.genericEntity = {
  NAME: "",
  LABEL: "Unknown Entity",
  TYPE: "unknown",
  DAMAGE_CLASS: 0, // 0: def, 1: food, 2: tanks, 3: obstacles
  DANGER: 0,
  VALUE: 0,
  SHAPE: 0,
  COLOR: 16,
  INDEPENDENT: false,
  CONTROLLERS: ["doNothing"],
  HAS_NO_MASTER: false,
  MOTION_TYPE: "glide", // motor, swarm, chase
  FACING_TYPE: "toTarget", // turnWithSpeed, withMotion, looseWithMotion, toTarget, looseToTarget
  DRAW_HEALTH: false,
  DRAW_SELF: true,
  DAMAGE_EFFECTS: true,
  RATEFFECTS: true,
  MOTION_EFFECTS: true,
  INTANGIBLE: false,
  ACCEPTS_SCORE: true,
  GIVE_KILL_MESSAGE: false,
  CAN_GO_OUTSIDE_ROOM: false,
  HITS_OWN_TYPE: "normal", // hard, repel, never, hardWithBuffer
  DIE_AT_LOW_SPEED: false,
  DIE_AT_RANGE: false,
  CLEAR_ON_MASTER_UPGRADE: false,
  PERSISTS_AFTER_DEATH: false,
  VARIES_IN_SIZE: false,
  HEALTH_WITH_LEVEL: true,
  CAN_BE_ON_LEADERBOARD: true,
  HAS_NO_RECOIL: false,
  AUTO_UPGRADE: "none",
  BUFF_VS_FOOD: false,
  OBSTACLE: false,
  CRAVES_ATTENTION: false,
  NECRO: false,
  UPGRADES_TIER_0: [],
  UPGRADES_TIER_1: [],
  UPGRADES_TIER_2: [],
  UPGRADES_TIER_3: [],
  UPGRADES_TIER_4: [],
  LEVEL: 0,
  SKILL_CAP: [
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
  ],
  GUNS: [],
  MAX_CHILDREN: 0,
  BODY: {
    ACCELERATION: 1,
    SPEED: 0,
    HEALTH: 1,
    RESIST: 1,
    SHIELD: 0,
    REGEN: 0,
    DAMAGE: 1,
    PENETRATION: 1,

    RANGE: 0,
    FOV: 10,
    DENSITY: 1,
    STEALTH: 1,
    PUSHABILITY: 1,
    HETERO: 2,
  },
  FOOD: {
    LEVEL: -1,
  },
};
exports.blueCircle = {
  COLOR: 10,
  SHAPE: 0,
};
exports.tealCircle = {
  COLOR: 0,
  SHAPE: 0,
};
const timer = (execute, duration) => {
  let timer = setInterval(() => execute(), 31.25);
  setTimeout(() => {
    clearInterval(timer);
  }, duration * 1000);
};
const ice = (them, multiplier, duration) => {
  if (!them) return;
  if (!them.immuneToAbilities)
    timer(() => {
      them.velocity.x /= 1.05 * multiplier;
      them.velocity.y /= 1.05 * multiplier;
    }, 1.5 * duration);
};
const paralyze = (them, duration) => {
  if (!them) return;
  if (!them.immuneToAbilities && !them.invuln && !them.passive && !them.godmode)
    timer(() => {
      them.velocity.x = 0;
      them.velocity.y = 0;
    }, duration);
};
const poison = (me, them, multiplier, duration) => {
  if (!them) return;
  if (!them.immuneToAbilities) {
    timer(() => {
      if (them.health.amount > 10) {
        them.health.amount -= multiplier * 0.5;
        if (them.onDamaged) them.onDamaged(them, me, multiplier * 0.5);
        if (me.onDealtDamage) me.onDealtDamage(me, them.multiplier * 0.5);
        if (me.onDealtDamageUniv)
          me.onDealtDamageUniv(me, them.multiplier * 0.5);
      }
    }, 2 * duration);
  }
};
const torch = (me, them, multiplier, duration, team) => {
  if (!them) return;
  if (!them.immuneToAbilities) {
    let oddu = them.onDealtDamageUniv || (() => {});
    poison(me, them, multiplier, duration);
    them.onDealtDamageUniv = (me2, them2) => {
      if (me2 && them2) {
        if (oddu) oddu();
        torch(me2, them2, 1, 1, team);
      }
    };
    setTimeout(() => {
      them.onDealtDamageUniv = oddu;
    }, 2 * duration * 1000);
  }
};
const swell = (them, multiplier, duration) => {
  if (!them) return;
  if (
    !them.immuneToAbilities &&
    !them.invuln &&
    !them.passive &&
    !them.godmode &&
    them.SIZE <= 50
  )
    timer(() => {
      them.SIZE *= 1.003 * multiplier;
      setTimeout(() => {
        them.SIZE /= 1.003 * multiplier;
      }, 4 * duration * 1000);
    }, 1.5);
};
const shrivel = (them, multiplier, duration) => {
  if (!them) return;
  if (
    !them.immuneToAbilities &&
    !them.invuln &&
    !them.passive &&
    !them.godmode &&
    them.SIZE >= 5
  )
    timer(() => {
      them.SIZE /= 1.003 * multiplier;
      setTimeout(() => {
        them.SIZE *= 1.003 * multiplier;
      }, 4 * duration * 1000);
    }, 1.5);
};
const funnySwell = (them, multiplier, duration) => {
  if (!them) return;
  if (!them.immuneToAbilities && them.SIZE <= 100)
    timer(() => {
      them.SIZE *= 1.003 * multiplier;
    }, 1.5 * duration);
};
const veryFunnySwell = (them, multiplier, duration) => {
  if (!them) return;
  if (!them.immuneToAbilities)
    timer(() => {
      them.SIZE *= 1.003 * multiplier;
    }, 1.5 * duration);
};
const necro = (source, them, necroThis, initThis, options = {}) => {
  if (!them || !initThis) return false;
  let theirType = options.type || "food";
  let shootPermission = initThis.countsOwnKids
    ? initThis.countsOwnKids >
      initThis.children.length * initThis.body.skill.rld
    : initThis.body.maxChildren
    ? initThis.body.maxChildren >
      initThis.body.children.length * initThis.body.skill.rld
    : true;
  if (
    them.type == theirType &&
    necroThis.includes(them.label) &&
    shootPermission
  ) {
    const theirFacing = them.facing;
    const theirSize = them.size;
    them.define(exports.genericEntity);
    initThis.bulletInit(them);
    them.team = source.team;
    them.master = source;
    them.color = source.color;
    them.facing = theirFacing;
    them.SIZE = theirSize;
    them.health.amount = them.health.max;
    them.onDamageDealt = (me2, them2) => {
      necro(me2.source, them2, necroThis, initThis);
    };
  }
  return true;
};
// FOOD
exports.food = {
  TYPE: "food",
  DAMAGE_CLASS: 1,
  CONTROLLERS: ["moveInCircles"],
  HITS_OWN_TYPE: "repel",
  MOTION_TYPE: "drift",
  FACING_TYPE: "turnWithSpeed",
  VARIES_IN_SIZE: true,
  BODY: {
    STEALTH: 30,
    PUSHABILITY: 1,
  },
  DAMAGE_EFFECTS: false,
  RATEFFECTS: false,
  HEALTH_WITH_LEVEL: false,
};
exports.genericDummy = {
  TYPE: "food",
  DAMAGE_CLASS: 1,
  CONTROLLERS: ["moveInCircles"],
  HITS_OWN_TYPE: "repel",
  MOTION_TYPE: "drift",
  FACING_TYPE: "turnWithSpeed",
  VARIES_IN_SIZE: true,
  BODY: {
    STEALTH: 30,
    PUSHABILITY: 1,
  },
};

exports.splitPentagonInside = {
  LABEL: "",
  SHAPE: "M 0.1111 0 L 1.5352 1.0278 L 1.5395 -1.0278 L 0.1111 0",
  COLOR: 5,
};
const basePolygonDamage = 1;
const basePolygonHealth = 2;
const makeShiny = (type, shine, label) => {
  return {
    PARENT: [exports.food],
    FOOD: {
      LEVEL: type.FOOD.LEVEL,
    },
    VALUE: type.VALUE * 5 ** shine,
    SHAPE: type.SHAPE,
    SIZE: type.SIZE,
    COLOR:
      shine == 1
        ? 1
        : shine == 2
        ? 0
        : shine == 3
        ? 9
        : shine == 4
        ? 37
        : shine == 5
        ? 38
        : shine == 6
        ? 47
        : type.COLOR,
    LABEL: label,
    ALPHA: shine == 3 ? 0.5 : 1,
    BODY: type.BODY,
  };
};
exports.hugePentagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 5,
  },
  LABEL: "Heptagon",
  VALUE: 15000,
  SHAPE: 7,
  SIZE: 25,
  COLOR: 35,
  BODY: {
    DAMAGE: 2 * basePolygonDamage,
    DENSITY: 80,
    HEALTH: 300 * basePolygonHealth,
    RESIST: Math.pow(1.25, 3),
    SHIELD: 40 * basePolygonHealth,
    REGEN: 0.6,
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true,
};
exports.bigPentagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 4,
  },
  LABEL: "Hexagon",
  VALUE: 2500,
  SHAPE: 6,
  SIZE: 20,
  COLOR: 4,
  BODY: {
    DAMAGE: 2 * basePolygonDamage,
    DENSITY: 30,
    HEALTH: 50 * basePolygonHealth,
    RESIST: Math.pow(1.25, 2),
    SHIELD: 20 * basePolygonHealth,
    REGEN: 0.2,
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true,
};
exports.splitterPentagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 3,
  },
  LABEL: "Splitter Pentagon",
  VALUE: 400,
  SHAPE:
    "m 0.2351 -0.9801 l -0.492 0.1589 l -0.5085 0.1662 l 0.7239 0.526 z m 0.1699 0.0515 L 0.1298 -0.0817 H 1.0203 L 0.7131 -0.5059 Z m -1.2605 0.4275 l -0.0008 0.5051 L -0.8555 0.5237 L -0.1503 0.0114 Z M 0.1452 0.0958 L 0.4143 0.9239 L 0.7131 0.514 L 1.0159 0.0958 Z M -0.0268 0.141 L -0.7515 0.6676 l 0.4946 0.1616 l 0.5069 0.1638 z",
  SIZE: 16,
  COLOR: 5,
  BODY: {
    DAMAGE: 1.5 * basePolygonDamage,
    DENSITY: 8,
    HEALTH: 10 * basePolygonHealth,
    RESIST: 1.25,
    PENETRATION: 1.1,
  },
  DRAW_HEALTH: true,
  BOSS_TYPE: "splitterPentagon",
};
exports.pentagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 3,
  },
  LABEL: "Pentagon",
  VALUE: 400,
  SHAPE: 5,
  SIZE: 16,
  COLOR: 14,
  BODY: {
    DAMAGE: 1.5 * basePolygonDamage,
    DENSITY: 8,
    HEALTH: 10 * basePolygonHealth,
    RESIST: 1.25,
    PENETRATION: 1.1,
  },
  DRAW_HEALTH: true,
};
exports.triangle = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 2,
  },
  LABEL: "Triangle",
  VALUE: 120,
  SHAPE: 3,
  SIZE: 9,
  COLOR: 2,
  BODY: {
    DAMAGE: basePolygonDamage,
    DENSITY: 6,
    HEALTH: 3 * basePolygonHealth,
    RESIST: 1.15,
    PENETRATION: 1.5,
  },
  DRAW_HEALTH: true,
};
exports.square = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 1,
  },
  LABEL: "Square",
  VALUE: 30,
  SHAPE: 4,
  SIZE: 10,
  COLOR: 13,
  BODY: {
    DAMAGE: basePolygonDamage,
    DENSITY: 4,
    HEALTH: basePolygonHealth,
    PENETRATION: 2,
  },
  DRAW_HEALTH: true,
  INTANGIBLE: false,
};
exports.egg = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 0,
  },
  LABEL: "Egg",
  VALUE: 10,
  SHAPE: 0,
  SIZE: 5,
  COLOR: 8,
  INTANGIBLE: true,
  BODY: {
    DAMAGE: 0,
    DENSITY: 2,
    HEALTH: 0.0011,
    PUSHABILITY: 0,
  },
  DRAW_HEALTH: false,
};
// Shinies
exports.shinyHugePentagon = makeShiny(
  exports.hugePentagon,
  1,
  "Shiny Heptagon"
);
exports.shinyBigPentagon = makeShiny(exports.bigPentagon, 1, "Shiny Hexagon");
exports.shinyPentagon = makeShiny(exports.pentagon, 1, "Shiny Pentagon");
exports.shinyTriangle = makeShiny(exports.triangle, 1, "Shiny Triangle");
exports.shinySquare = makeShiny(exports.square, 1, "Shiny Square");
exports.shinyEgg = makeShiny(exports.egg, 1, "Shiny Egg");
// Legendaries
exports.legendaryHugePentagon = makeShiny(
  exports.hugePentagon,
  2,
  "Legendary Heptagon"
);
exports.legendaryBigPentagon = makeShiny(
  exports.bigPentagon,
  2,
  "Legendary Hexagon"
);
exports.legendaryPentagon = makeShiny(
  exports.pentagon,
  2,
  "Legendary Pentagon"
);
exports.legendaryTriangle = makeShiny(
  exports.triangle,
  2,
  "Legendary Triangle"
);
exports.legendarySquare = makeShiny(exports.square, 2, "Legendary Square");
exports.legendaryEgg = makeShiny(exports.egg, 2, "Legendary Egg");
// Shadows
exports.shadowHugePentagon = makeShiny(
  exports.hugePentagon,
  3,
  "Shadow Heptagon"
);
exports.shadowBigPentagon = makeShiny(exports.bigPentagon, 3, "Shadow Hexagon");
exports.shadowPentagon = makeShiny(exports.pentagon, 3, "Shadow Pentagon");
exports.shadowTriangle = makeShiny(exports.triangle, 3, "Shadow Triangle");
exports.shadowSquare = makeShiny(exports.square, 3, "Shadow Square");
exports.shadowEgg = makeShiny(exports.egg, 3, "Shadow Egg");
// Rainbows
exports.rainbowHugePentagon = makeShiny(
  exports.hugePentagon,
  4,
  "Rainbow Heptagon"
);
exports.rainbowBigPentagon = makeShiny(
  exports.bigPentagon,
  4,
  "Rainbow Hexagon"
);
exports.rainbowPentagon = makeShiny(exports.pentagon, 4, "Rainbow Pentagon");
exports.rainbowTriangle = makeShiny(exports.triangle, 4, "Rainbow Triangle");
exports.rainbowSquare = makeShiny(exports.square, 4, "Rainbow Square");
exports.rainbowEgg = makeShiny(exports.egg, 4, "Rainbow Egg");
// Transes
exports.transHugePentagon = makeShiny(
  exports.hugePentagon,
  5,
  "Trans Heptagon"
);
exports.transBigPentagon = makeShiny(exports.bigPentagon, 5, "Trans Hexagon");
exports.transPentagon = makeShiny(exports.pentagon, 5, "Trans Pentagon");
exports.transTriangle = makeShiny(exports.triangle, 5, "Trans Triangle");
exports.transSquare = makeShiny(exports.square, 5, "Trans Square");
exports.transEgg = makeShiny(exports.egg, 5, "Trans Egg");
// Ecliptics
exports.eclipticHugePentagon = makeShiny(
  exports.hugePentagon,
  6,
  "Ecliptic Heptagon"
);
exports.eclipticBigPentagon = makeShiny(
  exports.bigPentagon,
  6,
  "Ecliptic Hexagon"
);
exports.eclipticPentagon = makeShiny(exports.pentagon, 6, "Ecliptic Pentagon");
exports.eclipticTriangle = makeShiny(exports.triangle, 6, "Ecliptic Triangle");
exports.eclipticSquare = makeShiny(exports.square, 6, "Ecliptic Square");
exports.eclipticEgg = makeShiny(exports.egg, 6, "Ecliptic Egg");

//Just obstacles
exports.obstacle = {
  TYPE: "wall",
  DAMAGE_CLASS: 1,
  LABEL: "Rock",
  FACING_TYPE: "turnWithSpeed",
  SHAPE: -9,
  BODY: {
    PUSHABILITY: 0,
    HEALTH: 10000,
    SHIELD: 10000,
    REGEN: 1000,
    DAMAGE: 1,
    RESIST: 100,
    STEALTH: 1,
  },
  VALUE: 0,
  SIZE: 60,
  COLOR: 16,
  VARIES_IN_SIZE: true,
  GIVE_KILL_MESSAGE: true,
  ACCEPTS_SCORE: false,
};
exports.babyObstacle = {
  PARENT: [exports.obstacle],
  SIZE: 25,
  SHAPE: -7,
  LABEL: "Gravel",
};
// Shield
exports.shield = {
  PARENT: [exports.obstacle],
  LABEL: "Shield",
  HITS_OWN_TYPE: "shield",
  SHAPE: shield,
  COLOR: 33,
};

// WEAPONS
const wepHealthFactor = 0.5;
const wepDamageFactor = 1.5;
exports.poisondeco = {
  SHAPE: 0,
  COLOR: 51,
};
exports.firedeco = {
  SHAPE: 0,
  COLOR: 33,
};
exports.chilldeco = {
  SHAPE: 0,
  COLOR: 0,
};
exports.paralyzedeco = {
  SHAPE: 0,
  COLOR: 3,
};
exports.swelldeco = {
  SHAPE: 0,
  COLOR: 4,
};
exports.bullet = {
  LABEL: "Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 60,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: false,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
};
exports.thunder10 = {
  LABEL: "Thunder",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 60,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: false,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
  SHAPE: 4,
};
for (let i = 9; i > 1; i--) {
  exports[`thunder${i}`] = {
    LABEL: "Thunder",
    TYPE: "bullet",
    ACCEPTS_SCORE: false,
    BODY: {
      PENETRATION: 1,
      SPEED: 3.75,
      RANGE: 60,
      DENSITY: 1.25,
      HEALTH: 0.33 * wepHealthFactor,
      DAMAGE: 4 * wepDamageFactor,
      PUSHABILITY: 0.3,
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: false,
    HITS_OWN_TYPE: "never",
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
    SHAPE: 4,
    GUNS: [
      {
        POSITION: [0.01, 18, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.shootOnce]),
          TYPE: exports[`thunder${i + 1}`],
          NEGATIVE_RECOIL: true,
        },
      },
    ],
  };
}
exports.thunder = {
  LABEL: "Thunder",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 60,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: false,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
  SHAPE: 4,
  GUNS: [
    {
      POSITION: [8, 18, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.shootOnce]),
        TYPE: exports.thunder2,
        NEGATIVE_RECOIL: true,
      },
    },
  ],
};
exports.poison = {
  PARENT: [exports.bullet],
  TURRETS: [
    {
      POSITION: [10, 0, 0, 0, 0, 1],
      TYPE: exports.poisondeco,
    },
  ],
  ON_DEALT_DAMAGE: (me, them) => {
    poison(me, them, 1, 1);
  },
};
exports.fire = {
  PARENT: [exports.bullet],
  TURRETS: [
    {
      POSITION: [10, 0, 0, 0, 0, 1],
      TYPE: exports.firedeco,
    },
  ],
  ON_DEALT_DAMAGE: (me, them) => {
    torch(me, them, 1, 1);
  },
};
exports.chill = {
  PARENT: [exports.bullet],
  TURRETS: [
    {
      POSITION: [10, 0, 0, 0, 0, 1],
      TYPE: exports.chilldeco,
    },
  ],
  ON_DEALT_DAMAGE: (me, them) => {
    ice(them, 1, 1);
  },
};
exports.paralyze = {
  PARENT: [exports.bullet],
  TURRETS: [
    {
      POSITION: [10, 0, 0, 0, 0, 1],
      TYPE: exports.paralyzedeco,
    },
  ],
  ON_DEALT_DAMAGE: (me, them) => {
    paralyze(them, 1);
  },
};
exports.swell = {
  PARENT: [exports.bullet],
  TURRETS: [
    {
      POSITION: [10, 0, 0, 0, 0, 1],
      TYPE: exports.swelldeco,
    },
  ],
  ON_DEALT_DAMAGE: (me, them) => {
    swell(them, 1, 1);
  },
};
exports.realBullet = {
  LABEL: "Real Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 60,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: false,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
  SHAPE: realBullet,
};
exports.growBullet = {
  LABEL: "Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 60,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: false,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
  MOTION_TYPE: "grow",
};
exports.growExplosion = {
  LABEL: "Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 0,
    RANGE: 60,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3,
    ACCELERATION: 0,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: false,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
  MOTION_TYPE: "grow",
};
exports.weakGrowExplosion = {
  LABEL: "Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 0,
    RANGE: 60,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 0.25 * wepDamageFactor,
    PUSHABILITY: 0.3,
    ACCELERATION: 0,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: false,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
  MOTION_TYPE: "grow",
};
exports.zeppelinBullet = {
  LABEL: "Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 60,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: false,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
  GUNS: [
    {
      POSITION: [2, 5, 1, 0, 0, 0, 999999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.shrapnelExplosion]),
        TYPE: [exports.weakGrowExplosion, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.sustained,
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
  ],
};
exports.explodeBullet2 = {
  LABEL: "Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 60,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: false,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
  GUNS: [
    {
      POSITION: [2, 5, 1, 0, 0, 0, 999999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.shrapnelExplosion, g.weak]),
        TYPE: [exports.weakGrowExplosion, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.sustained,
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
  ],
};
exports.satellite = {
  LABEL: "Satellite", //This is satellite
  TYPE: "satellite",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  SHAPE: 0,
  LAYER: 13,
  CONTROLLERS: ["orbit"],
  FACING_TYPE: "spin",
  BODY: {
    PENETRATION: 1.2,
    PUSHABILITY: 0.6,
    ACCELERATION: 0.75,
    HEALTH: 0.3,
    DAMAGE: 3.375,
    SPEED: 10,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.5,
  },
  COLOR: "mirror",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true,
  MOTION_TYPE: "motor",
};
exports.aura = {
  LABEL: "Aura",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 0,
    DENSITY: 1.25,
    HEALTH: 336138769342076981237684392463851 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: false,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  MOTION_TYPE: "teleportToMaster",
  ALPHA: 0.2,
  CLEAR_ON_MASTER_UPGRADE: true,
};
exports.auraPiece = {
  COLOR: 1,
  SHAPE: aura,
  FACING_TYPE: "autospin",
};
exports.smallAuraParent = {
  COLOR: 9,
  SHAPE: 0,
  GUNS: [
    {
      POSITION: [2, 20, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.aura, g.bigger, g.weak]),
        TYPE: [exports.aura],
        STAT_CALCULATOR: gunCalcNames.sustained,
        MAX_CHILDREN: 1,
        AUTOFIRE: true,
        SHOOT_ON_DEATH: false
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [17, 0, 0, 0, 360, 1],
      TYPE: exports.auraPiece,
    },
  ],
};
exports.auraParent = {
  COLOR: 9,
  SHAPE: 0,
  GUNS: [
    {
      POSITION: [2, 20, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.aura, g.evenbigger, g.weak]),
        TYPE: [exports.aura],
        STAT_CALCULATOR: gunCalcNames.sustained,
        MAX_CHILDREN: 1,
        AUTOFIRE: true,
        SHOOT_ON_DEATH: false
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [17, 0, 0, 0, 360, 1],
      TYPE: exports.auraPiece,
    },
  ],
};
exports.largeAuraParent = {
  COLOR: 9,
  SHAPE: 0,
  GUNS: [
    {
      POSITION: [2, 20, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.aura,
          g.evenbigger,
          g.bigger,
          g.weak,
        ]),
        TYPE: [exports.aura],
        STAT_CALCULATOR: gunCalcNames.sustained,
        MAX_CHILDREN: 1,
        AUTOFIRE: true,
        SHOOT_ON_DEATH: false
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [17, 0, 0, 0, 360, 1],
      TYPE: exports.auraPiece,
    },
  ],
};
//whats so special about the aura thing?
exports.gimelShape = {
  COLOR: 9,
  SHAPE:
    "M 1.6 0 L 0.8 0.2 L 0.8 -0.2 L 1.6 0 M 1.1314 1.1314 L 0.4243 0.7071 L 0.7071 0.4243 L 1.1314 1.1314 M 0 1.6 L -0.2 0.8 L 0.2 0.8 L 0 1.6 M -1.1314 1.1314 L -0.7071 0.4243 L -0.4243 0.7071 L -1.1314 1.1314 M -1.6 0 L -0.8 -0.2 L -0.8 0.2 L -1.6 0 M -1.1314 -1.1314 L -0.4243 -0.7071 L -0.7071 -0.4243 L -1.1314 -1.1314 M -0 -1.6 L 0.2 -0.8 L -0.2 -0.8 L -0 -1.6 M 1.1314 -1.1314 L 0.7071 -0.4243 L 0.4243 -0.7071 L 1.1314 -1.1314",
};
exports.purpleOctagonGimel = {
  COLOR: 4,
  SHAPE: -8,
  CONTROLLERS: ["slowspin"],
  TURRETS: [
    {
      POSITION: [15, 0, 0, 22.5, 0, 1],
      TYPE: exports.gimelShape,
    },
  ],
};
exports.squareCharge = {
  PARENT: [exports.bullet],
  LABEL: "Charged",
  BODY: {
    PENETRATION: 1,
    SPEED: 1,
    RANGE: 25,
    DENSITY: 1.25,
    HEALTH: 1e3 * wepHealthFactor,
    DAMAGE: 1e-3 * wepDamageFactor,
    PUSHABILITY: 0.3,
  },
  SHAPE: "M -1 -1 L 7.5 -1 L 7.5 1 L -1 1 L -1 -1",
};
exports.squareCharge2 = {
  PARENT: [exports.bullet],
  LABEL: "Charged",
  BODY: {
    PENETRATION: 1,
    SPEED: 1,
    RANGE: 25,
    DENSITY: 1.25,
    HEALTH: 1e3 * wepHealthFactor,
    DAMAGE: 1e-3 * wepDamageFactor,
    PUSHABILITY: 0.3,
  },
  SHAPE: 4,
};
exports.beam = {
  PARENT: [exports.bullet],
  LABEL: "Beam",
  SHAPE: -1,
};
g.beam = [0.2, 1e-3, 0.1, 1, 100, 0.1, 1, 0.05, 0.05, 1, 0.1, 1, 1];
exports.chargedBeam = {
  PARENT: [exports.bullet],
  LABEL: "Beam",
  GUNS: [
    {
      POSITION: [2, 14, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.beam]),
        TYPE: exports.squareCharge,
        AUTOFIRE: true,
      },
    },
  ],
};
exports.desmosChargedBeam = {
  PARENT: [exports.bullet],
  LABEL: "Beam",
  CONTROLLERS: ["sineA"],
  GUNS: [
    {
      POSITION: [2, 15, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.beam]),
        TYPE: exports.squareCharge2,
        AUTOFIRE: true,
      },
    },
  ],
};
exports.spikeBullet = {
  PARENT: [exports.bullet],
  LABEL: "Spike Bullet",
  SHAPE: 3,
};
g.flare = [0.75, 0.5, 0.75, 1, 0.5, 0.75, 1, 1.3, 1.3, 1, 1, 0.8, 1];
g.acid = [1.05, 1, 1, 1, 1, 1.05, 1, 1.3, 1.3, 1, 1, 1, 1];
exports.flare = {
  PARENT: [exports.bullet],
  LABEL: "Flare",
  SHAPE: 4,
  MOTION_TYPE: "flare",
};
exports.anyCircleColor = {
  SHAPE: 0,
  COLOR: 16,
};
g.flamegun = [0.6, 1, 1e-2, 0.5, 0.65, 0.65, 1, 3, 3, 0.325, 1, 1e-2, 1];
exports.flameBullet = {
  PARENT: [exports.bullet],
  LABEL: "Flame",
  SHAPE: [[]],
  MOTION_TYPE: "flamegun",
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: [exports.anyCircleColor, { COLOR: 43 }],
    },
  ],
};
exports.welderBullet = {
  PARENT: [exports.bullet],
  LABEL: "Flame",
  SHAPE: [[]],
  MOTION_TYPE: "flamegun",
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: [exports.anyCircleColor, { COLOR: 41 }],
    },
  ],
};
exports.satellite = {
  LABEL: "Satellite",
  TYPE: "satellite",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  SHAPE: 0,
  CONTROLLERS: ["orbit"],
  FACING_TYPE: "autospin",
  BODY: {
    PENETRATION: 1.2,
    PUSHABILITY: 0.6,
    ACCELERATION: 0.75,
    HEALTH: 0.3,
    DAMAGE: 3.375,
    SPEED: 10,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.5,
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true,
  MOTION_TYPE: "motor",
};
exports.sineBullet = {
  PARENT: [exports.bullet],
  CONTROLLERS: ["sineA"],
};
exports.cosineBullet = {
  PARENT: [exports.bullet],
  CONTROLLERS: ["sineB"],
};
exports.sineBullet2 = {
  PARENT: [exports.bullet],
  CONTROLLERS: ["sineC"],
};
exports.cosineBullet2 = {
  PARENT: [exports.bullet],
  CONTROLLERS: ["sineD"],
};
exports.splitSineBullet = {
  PARENT: [exports.bullet],
  CONTROLLERS: ["sineA"],
  BODY: {
    RANGE: 25,
  },
  GUNS: [
    {
      POSITION: [0.1, 15, 1, 0, 0, 0, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.halfspeed,
          g.halfdamage,
          g.halfrange,
        ]),
        TYPE: [exports.sineBullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 15, 1, 0, 0, 0, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.halfspeed,
          g.halfdamage,
          g.halfrange,
        ]),
        TYPE: [exports.cosineBullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
  ],
};
exports.splitCosineBullet = {
  PARENT: [exports.bullet],
  CONTROLLERS: ["sineB"],
  BODY: {
    RANGE: 25,
  },
  GUNS: [
    {
      POSITION: [0.1, 15, 1, 0, 0, 0, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.halfspeed,
          g.halfdamage,
          g.halfrange,
        ]),
        TYPE: [exports.sineBullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 15, 1, 0, 0, 0, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.halfspeed,
          g.halfdamage,
          g.halfrange,
        ]),
        TYPE: [exports.cosineBullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
  ],
};
exports.split2SineBullet = {
  PARENT: [exports.bullet],
  CONTROLLERS: ["sineA"],
  BODY: {
    RANGE: 25,
  },
  GUNS: [
    {
      POSITION: [0.1, 15, 1, 0, 0, 0, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfspeed, g.halfdamage]),
        TYPE: [exports.splitSineBullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 15, 1, 0, 0, 0, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfspeed, g.halfdamage]),
        TYPE: [exports.splitCosineBullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
  ],
};
exports.split2CosineBullet = {
  PARENT: [exports.bullet],
  CONTROLLERS: ["sineB"],
  BODY: {
    RANGE: 25,
  },
  GUNS: [
    {
      POSITION: [0.1, 15, 1, 0, 0, 0, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfspeed, g.halfdamage]),
        TYPE: [exports.splitSineBullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 15, 1, 0, 0, 0, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfspeed, g.halfdamage]),
        TYPE: [exports.splitCosineBullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
  ],
};
exports.casing = {
  PARENT: [exports.bullet],
  LABEL: "Shell",
  TYPE: "swarm",
};

exports.swarm = {
  LABEL: "Swarm Drone",
  TYPE: "swarm",
  ACCEPTS_SCORE: false,
  SHAPE: 3,
  MOTION_TYPE: "swarm",
  FACING_TYPE: "smoothWithMotion",
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  CRAVES_ATTENTION: true,
  BODY: {
    ACCELERATION: 3,
    PENETRATION: 1.5,
    HEALTH: 0.35 * wepHealthFactor,
    DAMAGE: 1.5 * wepDamageFactor,
    SPEED: 4.5,
    RESIST: 1.6,
    RANGE: 150,
    DENSITY: 12,
    PUSHABILITY: 0.5,
    FOV: 1.5,
  },
  DIE_AT_RANGE: true,
  BUFF_VS_FOOD: true,
};
exports.explodeSwarmBody = {
  COLOR: 9,
  SHAPE: 3,
  CONTROLLERS: ["fastspin"],
};
exports.explodeSwarm = {
  LABEL: "Explosive Swarm Drone",
  TYPE: "swarm",
  ACCEPTS_SCORE: false,
  SHAPE: 3,
  MOTION_TYPE: "swarm",
  FACING_TYPE: "smoothWithMotion",
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  CRAVES_ATTENTION: true,
  BODY: {
    ACCELERATION: 3,
    PENETRATION: 1.5,
    HEALTH: 0.35 * wepHealthFactor,
    DAMAGE: 1.5 * wepDamageFactor,
    SPEED: 4.5,
    RESIST: 1.6,
    RANGE: 150,
    DENSITY: 12,
    PUSHABILITY: 0.5,
    FOV: 1.5,
  },
  DIE_AT_RANGE: true,
  BUFF_VS_FOOD: true,
  GUNS: [
    {
      POSITION: [2, 5, 1, 0, 0, 0, 999999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.shrapnelExplosion]),
        TYPE: [exports.growExplosion, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.sustained,
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [22, 0, 0, 0, 360, 0],
      TYPE: exports.explodeSwarmBody,
    },
  ],
};
exports.homingBullet = {
  PARENT: [exports.swarm],
  LABEL: "Homing Bullet",
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 180,
    DENSITY: 1.25,
    HEALTH: 0.033 * wepHealthFactor,
    DAMAGE: 2 * wepDamageFactor,
    PUSHABILITY: 0.3,
  },
  INDEPENDENT: true,
  SHAPE: 0,
};
exports.splitBullet = {
  PARENT: [exports.bullet],
  LABEL: "Bullet",
  GUNS: [
    {
      POSITION: [0.1, 11, 1, 0, 0, 90, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfdamage, g.lessdamage]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true, // Autofire recommended for the SHOOT_ON_DEATH settings.
      },
    },
    {
      POSITION: [0.1, 11, 1, 0, 0, 270, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfdamage, g.lessdamage]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
  ],
};
exports.splitBullet2 = {
  PARENT: [exports.bullet],
  LABEL: "Bullet",
  GUNS: [
    {
      POSITION: [0.1, 11, 1, 0, 0, 90, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.halfdamage,
          g.lessdamage,
          g.halfrange,
        ]),
        TYPE: [exports.splitBullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true, // Autofire recommended for the SHOOT_ON_DEATH settings.
      },
    },
    {
      POSITION: [0.1, 11, 1, 0, 0, 270, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.halfdamage,
          g.lessdamage,
          g.halfrange,
        ]),
        TYPE: [exports.splitBullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
  ],
};
exports.split4Bullet = {
  PARENT: [exports.bullet],
  LABEL: "Bullet",
  GUNS: [
    {
      POSITION: [0.1, 11, 1, 0, 0, 0, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfdamage, g.lessdamage]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true, // Autofire recommended for the SHOOT_ON_DEATH settings.
      },
    },
    {
      POSITION: [0.1, 11, 1, 0, 0, 90, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfdamage, g.lessdamage]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 11, 1, 0, 0, 180, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfdamage, g.lessdamage]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 11, 1, 0, 0, 270, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfdamage, g.lessdamage]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
  ],
};
exports.explosion = {
  PARENT: [exports.bullet],
  LABEL: "Explosion",
  GUNS: [
    {
      POSITION: [0.1, 11, 1, 0, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.halfreload,
          g.halfreload,
          g.halfdamage,
          g.lessdamage,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 11, 1, 0, 0, 72, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.halfreload,
          g.halfreload,
          g.halfdamage,
          g.lessdamage,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 11, 1, 0, 0, 144, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.halfreload,
          g.halfreload,
          g.halfdamage,
          g.lessdamage,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 11, 1, 0, 0, 216, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.halfreload,
          g.halfreload,
          g.halfdamage,
          g.lessdamage,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 11, 1, 0, 0, 288, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.halfreload,
          g.halfreload,
          g.halfdamage,
          g.lessdamage,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        AUTOFIRE: true,
      },
    },
  ],
};
exports.nuke = {
  PARENT: [exports.bullet],
  LABEL: "Nuke",
  GUNS: [
    {
      POSITION: [0.1, 11, 1, 0, 0, 0, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfdamage, g.lessdamage]),
        TYPE: [exports.explosion, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 11, 1, 0, 0, 120, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfdamage, g.lessdamage]),
        TYPE: [exports.explosion, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 11, 1, 0, 0, 240, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfdamage, g.lessdamage]),
        TYPE: [exports.explosion, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
  ],
};
exports.quickNuke = {
  PARENT: [exports.bullet],
  LABEL: "Nuke",
  GUNS: [
    {
      POSITION: [0.1, 11, 1, 0, 0, 0, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.halfdamage,
          g.lessdamage,
        ]),
        TYPE: [exports.explosion, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 11, 1, 0, 0, 72, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.halfdamage,
          g.lessdamage,
        ]),
        TYPE: [exports.explosion, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 11, 1, 0, 0, 144, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.halfdamage,
          g.lessdamage,
        ]),
        TYPE: [exports.explosion, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 11, 1, 0, 0, 216, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.halfdamage,
          g.lessdamage,
        ]),
        TYPE: [exports.explosion, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 11, 1, 0, 0, 288, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.halfdamage,
          g.lessdamage,
        ]),
        TYPE: [exports.explosion, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
  ],
};
exports.explosiveShard = {
  PARENT: [exports.bullet],
  LABEL: "Shard",
  SHAPE: explosiveShard,
  GUNS: [
    {
      POSITION: [2, 5, 1, 0, 0, 0, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.shrapnelExplosion]),
        TYPE: [exports.growExplosion, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.sustained,
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
  ],
};
exports.miniNukeShoe = {
  PARENT: [exports.bullet],
  LABEL: "Mini Nuke",
  SHAPE: nuke,
  INDEPENDENT: true,
  GUNS: [
    {
      POSITION: [2, 5, 1, 0, 0, 0, 999999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.shrapnelExplosion]),
        TYPE: [exports.growExplosion, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.sustained,
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
  ],
};
exports.nukeShoe = {
  PARENT: [exports.bullet],
  LABEL: "Nuke",
  SHAPE: nuke,
  INDEPENDENT: true,
  GUNS: [
    {
      POSITION: [0.5, 8, 1, 0, 0, 0, 9999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner]),
        TYPE: [
          exports.realBullet,
          {
            PERSISTS_AFTER_DEATH: true,
          },
        ],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.5, 8, 1, 0, 0, 90, 9999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner]),
        TYPE: [
          exports.realBullet,
          {
            PERSISTS_AFTER_DEATH: true,
          },
        ],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.5, 8, 1, 0, 0, 180, 9999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner]),
        TYPE: [
          exports.realBullet,
          {
            PERSISTS_AFTER_DEATH: true,
          },
        ],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.5, 8, 1, 0, 0, 270, 9999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner]),
        TYPE: [
          exports.realBullet,
          {
            PERSISTS_AFTER_DEATH: true,
          },
        ],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.5, 8, 1, 0, 0, 45, 9999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner]),
        TYPE: [
          exports.realBullet,
          {
            PERSISTS_AFTER_DEATH: true,
          },
        ],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.5, 8, 1, 0, 0, 135, 9999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner]),
        TYPE: [
          exports.realBullet,
          {
            PERSISTS_AFTER_DEATH: true,
          },
        ],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.5, 8, 1, 0, 0, 225, 9999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner]),
        TYPE: [
          exports.realBullet,
          {
            PERSISTS_AFTER_DEATH: true,
          },
        ],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.5, 8, 1, 0, 0, 315, 9999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner]),
        TYPE: [
          exports.realBullet,
          {
            PERSISTS_AFTER_DEATH: true,
          },
        ],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [2, 5, 1, 0, 0, 0, 999999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.shrapnelExplosion]),
        TYPE: [exports.growExplosion, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.sustained,
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
  ],
};

exports.bee = {
  PARENT: [exports.swarm],
  PERSISTS_AFTER_DEATH: true,
  SHAPE: 4,
  LABEL: "Drone",
  HITS_OWN_TYPE: "hardWithBuffer",
};
exports.autoswarm = {
  PARENT: [exports.swarm],
  AI: { FARMER: true },
  INDEPENDENT: true,
};
exports.autobee = {
  PARENT: [exports.bee],
  AI: { FARMER: true },
  INDEPENDENT: true,
};
exports.pentaswarm = {
  PARENT: [exports.swarm],
  SHAPE: 5,
};
exports.miniGuardianProjectile = {
  PARENT: [exports.autoswarm],
  LABEL: "Guardian Projectile",
  SHAPE: 3,
  GUNS: [
    {
      POSITION: [4, 14, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.guardian, g.halfreload]),
        TYPE: exports.swarm,
        SYNCS_SKILLS: true,
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.quintetGuardian = {
  LABEL: "Guardian",
  SHAPE: 3,
  COLOR: 5,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  GUNS: [
    {
      POSITION: [4, 14, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.guardian,
          g.halfreload,
          g.halfreload,
        ]),
        TYPE: exports.swarm,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.quintetGuardian2 = {
  LABEL: "Guardian",
  SHAPE: "M 0.1111 0 L 1.5352 1.0278 L 1.5395 -1.0278 L 0.1111 0",
  COLOR: 5,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  GUNS: [
    {
      POSITION: [4, 14, 1.2, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.guardian,
          g.halfreload,
          g.halfreload,
        ]),
        TYPE: exports.swarm,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};

exports.miniQuintetProjectile2 = {
  PARENT: [exports.autoswarm],
  LABEL: "Quintet Core Projectile",
  SHAPE: [[]],
  FACING_TYPE: "autospin",
  GUNS: [
    {
      POSITION: [4, 12.5, 1.2, 8, 0, 0, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.evenbigger]),
        TYPE: [exports.miniGuardianProjectile, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [4, 12.5, 1.2, 8, 0, 72, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.evenbigger]),
        TYPE: [exports.miniGuardianProjectile, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [4, 12.5, 1.2, 8, 0, 144, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.evenbigger]),
        TYPE: [exports.miniGuardianProjectile, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [4, 12.5, 1.2, 8, 0, 216, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.evenbigger]),
        TYPE: [exports.miniGuardianProjectile, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [4, 12.5, 1.2, 8, 0, 288, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.evenbigger]),
        TYPE: [exports.miniGuardianProjectile, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.quintetGuardian2,
    },
    {
      POSITION: [20, 0, 0, 72, 0, 1],
      TYPE: exports.quintetGuardian2,
    },
    {
      POSITION: [20, 0, 0, 144, 0, 1],
      TYPE: exports.quintetGuardian2,
    },
    {
      POSITION: [20, 0, 0, 216, 0, 1],
      TYPE: exports.quintetGuardian2,
    },
    {
      POSITION: [20, 0, 0, 288, 0, 1],
      TYPE: exports.quintetGuardian2,
    },
  ],
};
exports.miniQuintetProjectile = {
  PARENT: [exports.autoswarm],
  LABEL: "Quintet Projectile",
  SHAPE: [[]],
  FACING_TYPE: "autospin",
  GUNS: [
    {
      POSITION: [4, 12.5, 1.2, 8, 0, 0, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.evenbigger]),
        TYPE: [exports.miniGuardianProjectile, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [4, 12.5, 1.2, 8, 0, 72, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.evenbigger]),
        TYPE: [exports.miniGuardianProjectile, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [4, 12.5, 1.2, 8, 0, 144, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.evenbigger]),
        TYPE: [exports.miniGuardianProjectile, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [4, 12.5, 1.2, 8, 0, 216, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.evenbigger]),
        TYPE: [exports.miniGuardianProjectile, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [4, 12.5, 1.2, 8, 0, 288, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.evenbigger]),
        TYPE: [exports.miniGuardianProjectile, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0, 12.5, 1.2, 0, 0, 0, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.evenbigger]),
        TYPE: [exports.miniQuintetProjectile2, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [24, 0, 0, 180, 0, 1],
      TYPE: [exports.pentagon, { COLOR: 16 }],
    },
    {
      POSITION: [11.667, -13.333, 0, 0, 0, 1],
      TYPE: exports.quintetGuardian,
    },
    {
      POSITION: [11.667, -13.333, 0, 72, 0, 1],
      TYPE: exports.quintetGuardian,
    },
    {
      POSITION: [11.667, -13.333, 0, 144, 0, 1],
      TYPE: exports.quintetGuardian,
    },
    {
      POSITION: [11.667, -13.333, 0, 216, 0, 1],
      TYPE: exports.quintetGuardian,
    },
    {
      POSITION: [11.667, -13.333, 0, 288, 0, 1],
      TYPE: exports.quintetGuardian,
    },
    {
      POSITION: [13.333, 0, 0, 0, 0, 1],
      TYPE: exports.splitPentagonInside,
    },
    {
      POSITION: [13.333, 0, 0, 72, 0, 1],
      TYPE: exports.splitPentagonInside,
    },
    {
      POSITION: [13.333, 0, 0, 144, 0, 1],
      TYPE: exports.splitPentagonInside,
    },
    {
      POSITION: [13.333, 0, 0, 216, 0, 1],
      TYPE: exports.splitPentagonInside,
    },
    {
      POSITION: [13.333, 0, 0, 288, 0, 1],
      TYPE: exports.splitPentagonInside,
    },
  ],
};

exports.trap = {
  LABEL: "Thrown Trap",
  TYPE: "trap",
  ACCEPTS_SCORE: false,
  SHAPE: -3,
  MOTION_TYPE: "glide", // def
  FACING_TYPE: "turnWithSpeed",
  HITS_OWN_TYPE: "push",
  DIE_AT_RANGE: true,
  BODY: {
    HEALTH: 1 * wepHealthFactor,
    DAMAGE: 2 * wepDamageFactor,
    RANGE: 200,
    DENSITY: 2.5,
    RESIST: 2.5,
    SPEED: 0,
  },
};
exports.miniTrap = {
  LABEL: "Mini Thrown Trap",
  TYPE: "trap",
  ACCEPTS_SCORE: false,
  SHAPE: -2,
  MOTION_TYPE: "glide", // def
  FACING_TYPE: "turnWithSpeed",
  HITS_OWN_TYPE: "hardWithBuffer",
  DIE_AT_RANGE: true,
  BODY: {
    HEALTH: 1 * wepHealthFactor,
    DAMAGE: 2 * wepDamageFactor,
    RANGE: 100,
    DENSITY: 2.5,
    RESIST: 2.5,
    SPEED: 0,
  },
};
exports.explodeTrapDeco = {
  SHAPE: -5,
  COLOR: 2,
};
exports.explodeTrap = {
  LABEL: "Explosive Trap",
  TYPE: "trap",
  ACCEPTS_SCORE: false,
  SHAPE: -5,
  MOTION_TYPE: "glide", // def
  FACING_TYPE: "turnWithSpeed",
  HITS_OWN_TYPE: "push",
  DIE_AT_RANGE: true,
  BODY: {
    HEALTH: 1 * wepHealthFactor,
    DAMAGE: 2 * wepDamageFactor,
    RANGE: 200,
    DENSITY: 2.5,
    RESIST: 2.5,
    SPEED: 0,
  },
  GUNS: [],
  TURRETS: [
    {
      POSITION: [14, 0, 0, 0, 0, 1],
      TYPE: exports.explodeTrapDeco,
    },
  ],
};
for (let i = 0; i < 10; i++)
  exports.explodeTrap.GUNS = exports.explodeTrap.GUNS.concat({
    POSITION: [0.5, 10, 1, 0, 0, 36 * i, 9999],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.basic]),
      TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      SHOOT_ON_DEATH: true,
      AUTOFIRE: true,
    },
  });
exports.orthodox1Portal = {
  PARENT: [exports.trap],
  LABEL: "Portal",
  BODY: {
    DAMAGE: 0,
    HEALTH: 1e9,
  },
  CONTROLLERS: ["portal"],
  FACING_TYPE: "toTarget",
  SHAPE: 4,
  GUNS: [
    {
      POSITION: [0.1, 15, 1, 0, 0, 0, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessdamage, g.noshudder]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 15, 1, 0, 0, 90, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessdamage, g.noshudder]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 15, 1, 0, 0, 180, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessdamage, g.noshudder]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 15, 1, 0, 0, 270, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessdamage, g.noshudder]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
  ],
};
exports.orthodox2Portal = {
  PARENT: [exports.trap],
  LABEL: "Portal",
  BODY: {
    DAMAGE: 0,
    HEALTH: 1e9,
  },
  CONTROLLERS: ["portal"],
  FACING_TYPE: "toTarget",
  SHAPE: 6,
  GUNS: [
    {
      POSITION: [0.1, 10, 1, 0, 0, 90, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.lessdamage,
          g.morespeed,
          g.noshudder,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 10, 1, 0, 0, 270, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.lessdamage,
          g.morespeed,
          g.noshudder,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 15, 1, 0, 0, 0, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessdamage, g.noshudder]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 15, 1, 0, 0, 60, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessdamage, g.noshudder]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 15, 1, 0, 0, 120, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessdamage, g.noshudder]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 15, 1, 0, 0, 180, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessdamage, g.noshudder]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 15, 1, 0, 0, 240, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessdamage, g.noshudder]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 15, 1, 0, 0, 300, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessdamage, g.noshudder]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
  ],
};
exports.orthodox3Portal = {
  PARENT: [exports.trap],
  LABEL: "Portal",
  BODY: {
    DAMAGE: 0,
    HEALTH: 1e9,
  },
  CONTROLLERS: ["portal"],
  FACING_TYPE: "toTarget",
  SHAPE: 6,
  GUNS: [],
};
for (let i = 0; i < 6; i++)
  exports.orthodox3Portal.GUNS.push(
    {
      POSITION: [0.1, 15, 1, 0, 0, i * 60, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfdamage, g.noshudder]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 10, 1, 0, 0, i * 60 + 30, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.lessdamage,
          g.morespeed,
          g.noshudder,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    }
  );
exports.oledPortal = {
  PARENT: [exports.trap],
  LABEL: "Portal",
  BODY: {
    DAMAGE: 0,
    HEALTH: 1e9,
  },
  CONTROLLERS: ["portal"],
  FACING_TYPE: "toTarget",
  SHAPE: 4,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.electro, g.halfreload]),
        TYPE: exports.chargedBeam,
        AUTOFIRE: true,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 7, 1, 0, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 5, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.electro, g.halfreload]),
        TYPE: exports.chargedBeam,
        AUTOFIRE: true,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 7, 1, 0, 0, 90, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 5, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.electro, g.halfreload]),
        TYPE: exports.chargedBeam,
        AUTOFIRE: true,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 7, 1, 0, 0, 180, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 5, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.electro, g.halfreload]),
        TYPE: exports.chargedBeam,
        AUTOFIRE: true,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 7, 1, 0, 0, 270, 0],
    },
  ],
};
exports.fragmentationPortal = {
  PARENT: [exports.trap],
  LABEL: "Portal",
  BODY: {
    DAMAGE: 0,
    HEALTH: 1e9,
  },
  CONTROLLERS: ["portal"],
  FACING_TYPE: "toTarget",
  SHAPE: 4,
  GUNS: [
    {
      POSITION: [0.1, 15, 1, 0, 0, 0, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfrange]),
        TYPE: [exports.splitBullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 15, 1, 0, 0, 90, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfrange]),
        TYPE: [exports.splitBullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 15, 1, 0, 0, 180, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfrange]),
        TYPE: [exports.splitBullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 15, 1, 0, 0, 270, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfrange]),
        TYPE: [exports.splitBullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
  ],
};
exports.fractalPortal = {
  PARENT: [exports.trap],
  LABEL: "Portal",
  BODY: {
    DAMAGE: 0,
    HEALTH: 1e9,
  },
  CONTROLLERS: ["portal"],
  FACING_TYPE: "toTarget",
  SHAPE: 4,
  GUNS: [
    {
      POSITION: [0.1, 15, 1, 0, 0, 0, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfrange]),
        TYPE: [exports.splitBullet2, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 15, 1, 0, 0, 90, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfrange]),
        TYPE: [exports.splitBullet2, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 15, 1, 0, 0, 180, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfrange]),
        TYPE: [exports.splitBullet2, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 15, 1, 0, 0, 270, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfrange]),
        TYPE: [exports.splitBullet2, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
  ],
};
exports.refragmentationPortal = {
  PARENT: [exports.trap],
  LABEL: "Portal",
  BODY: {
    DAMAGE: 0,
    HEALTH: 1e9,
  },
  CONTROLLERS: ["portal"],
  FACING_TYPE: "toTarget",
  SHAPE: 4,
  GUNS: [
    {
      POSITION: [0.1, 15, 1, 0, 0, 0, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfrange]),
        TYPE: [exports.splitBullet2, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 15, 1, 0, 0, 90, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfrange]),
        TYPE: [exports.splitBullet2, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 15, 1, 0, 0, 180, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfrange]),
        TYPE: [exports.splitBullet2, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 15, 1, 0, 0, 270, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfrange]),
        TYPE: [exports.splitBullet2, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
  ],
};
exports.oldBlock = {
  LABEL: "Set Trap",
  PARENT: [exports.trap],
  SHAPE: -4,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goToMasterTarget"],
  BODY: {
    SPEED: 1,
    DENSITY: 5,
  },
};
exports.block = {
  LABEL: "Set Trap",
  PARENT: [exports.trap],
  SHAPE: -4,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["block"],
  BODY: {
    SPEED: 1,
    DENSITY: 5,
  },
};
exports.survivalBlock = {
  LABEL: "Set Trap",
  PARENT: [exports.trap],
  SHAPE: -9,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["block"],
  BODY: {
    SPEED: 1,
    DENSITY: 5,
    RANGE: 450,
  },
  FACING_TYPE: "autospin",
  GUNS: [
    {
      POSITION: [13, 5, 1, 0, 0, 60, 0],
    },
    {
      POSITION: [3, 5, 1.5, 13, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.caltrop]),
        TYPE: exports.miniTrap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [13, 5, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [3, 5, 1.5, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.caltrop]),
        TYPE: exports.miniTrap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [13, 5, 1, 0, 0, 300, 0],
    },
    {
      POSITION: [3, 5, 1.5, 13, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.caltrop]),
        TYPE: exports.miniTrap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.boomerang = {
  LABEL: "Boomerang",
  PARENT: [exports.trap],
  CONTROLLERS: ["boomerang"],
  MOTION_TYPE: "motor",
  HITS_OWN_TYPE: "never",
  SHAPE: -5,
  BODY: {
    SPEED: 1.25,
    RANGE: 80,
  },
};

exports.drone = {
  LABEL: "Drone",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  SHAPE: 3,
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster",
  ],
  AI: { BLIND: true },
  BODY: {
    PENETRATION: 1.2,
    PUSHABILITY: 0.6,
    ACCELERATION: 0.05,
    HEALTH: 0.6 * wepHealthFactor,
    DAMAGE: 1.25 * wepDamageFactor,
    SPEED: 3.8,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.8,
  },
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true,
};
exports.initiatorDrone = {
  PARENT: [exports.drone],
  LABEL: "Drone",
  CONTROLLERS: ["selfDestructWhenAlt"],
  GUNS: [
    {
      POSITION: [0.1, 15, 1, 0, 0, 0, 1e5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 15, 1, 0, 0, 120, 1e5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 15, 1, 0, 0, 240, 1e5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [8, 0, 0, 0, 0, 1],
      TYPE: exports.blueCircle,
    },
  ],
};
exports.sunchip = {
  PARENT: [exports.drone],
  SHAPE: 4,
  NECRO: true,
  HITS_OWN_TYPE: "hard",
  BODY: {
    FOV: 0.5,
  },
  AI: {
    BLIND: true,
    FARMER: true,
  },
  DRAW_HEALTH: false,
};
exports.autosunchip = {
  PARENT: [exports.sunchip],
  AI: {
    BLIND: true,
    FARMER: true,
  },
  INDEPENDENT: true,
};
exports.gunchip = {
  PARENT: [exports.drone],
  SHAPE: -2,
  NECRO: true,
  HITS_OWN_TYPE: "hard",
  BODY: {
    FOV: 0.5,
  },
  AI: {
    BLIND: true,
    FARMER: true,
  },
  DRAW_HEALTH: false,
};

exports.lilmissile = {
  PARENT: [exports.bullet],
  LABEL: "Missile",
  INDEPENDENT: true,
  BODY: {
    RANGE: 90,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
  ],
};
exports.twistermissile = {
  PARENT: [exports.bullet],
  LABEL: "Missile",
  INDEPENDENT: true,
  BODY: {
    RANGE: 90,
  },
  FACING_TYPE: "altSpin",
  GUNS: [
    {
      POSITION: [14, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
  ],
};
exports.rocket = {
  PARENT: [exports.bullet],
  LABEL: "Rocket",
  INDEPENDENT: true,
  BODY: {
    RANGE: 90,
  },
  GUNS: [
    {
      POSITION: [6, 10.5, 1.5, 9, 0, 180, 7.5],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.rocketeerTrail]),
        TYPE: [
          exports.bullet,
          {
            PERSISTS_AFTER_DEATH: true,
          },
        ],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
  ],
};
exports.realRocket = {
  PARENT: [exports.bullet],
  LABEL: "Rocket",
  INDEPENDENT: true,
  BODY: {
    RANGE: 90,
  },
  GUNS: [
    {
      POSITION: [3, 1.4, 1, 16, 1.4, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.rocketBooster]),
        TYPE: exports.bullet,
        LABEL: "Hyperdrive",
      },
    },
    {
      POSITION: [3, 1.4, 1, 16, -1.4, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.rocketBooster]),
        TYPE: exports.bullet,
        LABEL: "Hyperdrive",
      },
    },
    {
      POSITION: [1.5, 1.4, 1, 16, 2.8, 180, 4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.rocketBooster]),
        TYPE: exports.bullet,
        LABEL: "Hyperdrive",
      },
    },
    {
      POSITION: [1.5, 1.4, 1, 16, -2.8, 180, 4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.rocketBooster]),
        TYPE: exports.bullet,
        LABEL: "Hyperdrive",
      },
    },
    {
      POSITION: [1.5, 1.4, 1, 16, 0, 180, 8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.rocketBooster]),
        TYPE: exports.bullet,
        LABEL: "Hyperdrive",
      },
    },
    {
      POSITION: [16, 10, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [14, 8, 1.286, 0, 0, 180, 0],
    },
  ],
};
exports.missile = {
  PARENT: [exports.bullet],
  LABEL: "Missile",
  INDEPENDENT: true,
  BODY: {
    RANGE: 90,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, -2, 130, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 2, 230, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
  ],
};
exports.gildingmissile = {
  PARENT: [exports.bullet],
  LABEL: "Gilding Missile",
  INDEPENDENT: true,
  BODY: {
    RANGE: 90,
  },
  CONTROLLERS: ["altFire"],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, -2, 130, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 2, 230, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
  ],
};
exports.acidMissile = {
  PARENT: [exports.missile],
  BODY: {
    RANGE: 120,
  },
  GUNS: [
    {
      POSITION: [24, 8.5, 1, 0, 0, 180, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.sniper,
          g.acid,
          g.muchmorerecoil,
        ]), //help
        TYPE: exports.poison,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [14, 4, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 51,
      },
    },
  ],
};
exports.hypermissile = {
  PARENT: [exports.missile],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, -2, 150, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 2, 210, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, -2, 90, 0.5],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
    {
      POSITION: [14, 6, 1, 0, 2, 270, 0.5],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
  ],
};
exports.snake = {
  PARENT: [exports.bullet],
  LABEL: "Snake",
  INDEPENDENT: true,
  BODY: {
    RANGE: 90,
  },
  CONTROLLERS: ["sidewind"],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.4, 8, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.thruster,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.snake,
          g.snakeskin,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
    {
      POSITION: [10, 12, 0.8, 8, 0, 180, 0.5],
      PROPERTIES: {
        AUTOFIRE: true,
        NEGATIVE_RECOIL: true,
        STAT_CALCULATOR: gunCalcNames.thruster,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.snake,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
  ],
};
exports.hive = {
  PARENT: [exports.bullet],
  LABEL: "Hive",
  BODY: {
    RANGE: 60,
    FOV: 0.5,
  },
  FACING_TYPE: "turnWithSpeed",
  INDEPENDENT: true,
  CONTROLLERS: ["alwaysFire", "nearestDifferentMaster"],
  AI: { NO_LEAD: true },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 9.5, 0.6, 7, 0, 108, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 180, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 252, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 324, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 36, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.hiveMissile = {
  PARENT: [exports.bullet],
  LABEL: "Hive Missile",
  BODY: {
    RANGE: 60,
    FOV: 0.5,
  },
  INDEPENDENT: true,
  CONTROLLERS: ["alwaysFire", "nearestDifferentMaster"],
  AI: { NO_LEAD: true },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 9.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 72, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 288, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [14, 6, 1, 0, -2, 144, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 2, 216, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
  ],
};

exports.snowflake = {
  PARENT: [exports.bullet],
  LABEL: "Snowflake",
  BODY: {
    RANGE: 60,
    FOV: 0.5,
  },
  FACING_TYPE: "turnWithSpeed",
  INDEPENDENT: true,
  SHAPE: snowflake,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 7, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.power]),
        TYPE: [exports.chill, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.swarm,
        SHOOT_ON_DEATH: true,
      },
    },
    {
      POSITION: [1, 7, 0.6, 7, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.power]),
        TYPE: [exports.chill, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.swarm,
        SHOOT_ON_DEATH: true,
      },
    },
    {
      POSITION: [1, 7, 0.6, 7, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.power]),
        TYPE: [exports.chill, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.swarm,
        SHOOT_ON_DEATH: true,
      },
    },
    {
      POSITION: [1, 7, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.power]),
        TYPE: [exports.chill, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.swarm,
        SHOOT_ON_DEATH: true,
      },
    },
    {
      POSITION: [1, 7, 0.6, 7, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.power]),
        TYPE: [exports.chill, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.swarm,
        SHOOT_ON_DEATH: true,
      },
    },
    {
      POSITION: [1, 7, 0.6, 7, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.power]),
        TYPE: [exports.chill, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.swarm,
        SHOOT_ON_DEATH: true,
      },
    },
  ],
  ON_DEALT_DAMAGE: (me, them) => {
    ice(them, 1, 1);
  },
};
// TANK CLASSES
const base = {
  ACCEL: 1.6,
  SPEED: 5.25,
  HEALTH: 30,
  DAMAGE: 3,
  RESIST: 1,
  PENETRATION: 1.05,
  SHIELD: 8,
  REGEN: 0.05,
  FOV: 1,
  DENSITY: 0.5,
};
exports.genericAWP = {
  LABEL: "Advanced Weapons Platform",
  TYPE: "tank",
  DAMAGE_CLASS: 2,
  DANGER: 5,
  MOTION_TYPE: "motor",
  FACING_TYPE: "toTarget",
  SIZE: 16,
  MAX_CHILDREN: 0,
  DAMAGE_EFFECTS: false,
  SHAPE: 4,
  COLOR: 13,
  BODY: {
    // def
    ACCELERATION: base.ACCEL,
    SPEED: base.SPEED * 0.6,
    HEALTH: base.HEALTH * 2,
    DAMAGE: base.DAMAGE * 2,
    PENETRATION: base.PENETRATION,
    SHIELD: base.SHIELD * 2,
    REGEN: base.REGEN,
    FOV: base.FOV,
    DENSITY: base.DENSITY,
    PUSHABILITY: 0.9,
    HETERO: 3,
  }, //1  2  3  4  5  6  7  8  9  0
  GUNS: [],
  TURRETS: [],
  PROPS: [],
  GIVE_KILL_MESSAGE: true,
  DRAW_HEALTH: true,
  BOSS_TYPE: "None",
  TOOLTIP: "",
  SYNC_TURRET_SKILLS: false,
  ON_DEALT_DAMAGE: null,
  MIRROR_MASTER_ANGLE: false,
  ZOOM: 0,
};
exports.genericTank = {
  LABEL: "Unknown Class",
  TYPE: "tank",
  DAMAGE_CLASS: 2,
  DANGER: 5,
  MOTION_TYPE: "motor",
  FACING_TYPE: "toTarget",
  SIZE: 12,
  MAX_CHILDREN: 0,
  DAMAGE_EFFECTS: false,
  BODY: {
    // def
    ACCELERATION: base.ACCEL,
    SPEED: base.SPEED,
    HEALTH: base.HEALTH,
    DAMAGE: base.DAMAGE,
    PENETRATION: base.PENETRATION,
    SHIELD: base.SHIELD,
    REGEN: base.REGEN,
    FOV: base.FOV,
    DENSITY: base.DENSITY,
    PUSHABILITY: 0.9,
    HETERO: 3,
  }, //1  2  3  4  5  6  7  8  9  0
  GUNS: [],
  TURRETS: [],
  PROPS: [],
  GIVE_KILL_MESSAGE: true,
  DRAW_HEALTH: true,
  BOSS_TYPE: "None",
  TOOLTIP: "",
  SYNC_TURRET_SKILLS: false,
  ON_DEALT_DAMAGE: null,
  MIRROR_MASTER_ANGLE: false,
  ZOOM: 0,
};
let gun = {};

exports.autoTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 0.8,
  },
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.zeppelinTurret = {
  SHAPE: zeppelinTurret,
  BODY: {
    FOV: 1.5,
  },
  CONTROLLERS: ["onlyAcceptInArc"],
  COLOR: 16,
  GUNS: [
    {
      POSITION: [1, 12, 1, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.auto,
          g.halfreload,
          g.moredamage,
        ]),
        TYPE: exports.zeppelinBullet,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [10, 0, 0, 0, 0, 1],
      TYPE: [exports.egg, { COLOR: 12 }],
    },
  ],
};
exports.hypercannon = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Hypercannon",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: 1.4,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  GUNS: [
    {
      POSITION: [26, 18, -1.1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.slow,
          g.halfreload,
          g.halfreload,
          g.fake,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [26, 16.5, -1.1, 23, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.slow,
          g.halfreload,
          g.halfreload,
          g.fake,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [33, 15, -1.1, 46, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.slow,
          g.halfreload,
          g.halfreload,
        ]),
        TYPE: exports.quickNuke,
      },
    },
  ],
};
exports.barSpinnerGun = {
  PARENT: [exports.genericTank],
  LABEL: "Spinner",
  BODY: {
    FOV: 0.8,
  },
  COLOR: 16,
  CONTROLLERS: ["barspin"],
  SYNC_TURRET_SKILLS: true,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.halfreload]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.halfreload]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.padoruGun = {
  PARENT: [exports.genericTank],
  LABEL: "Spinner",
  BODY: {
    FOV: 0.8,
  },
  COLOR: 16,
  CONTROLLERS: ["barspin"],
  SYNC_TURRET_SKILLS: true,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.mini, g.halfreload]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.mini, g.halfreload]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.mini, g.halfreload]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 180, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.mini, g.halfreload]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.mini, g.halfreload]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 180, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.mini, g.halfreload]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.triadGun = {
  PARENT: [exports.genericTank],
  LABEL: "Spinner",
  BODY: {
    FOV: 0.8,
  },
  COLOR: 16,
  CONTROLLERS: ["barspin"],
  SYNC_TURRET_SKILLS: true,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.halfreload]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.halfreload]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.halfreload]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.barSpinnerHolster = {
  PARENT: [exports.genericTank],
  LABEL: "Holster",
  BODY: {
    FOV: 0.8,
  },
  COLOR: 16,
  SYNC_TURRET_SKILLS: true,
  //CONTROLLERS: ['nearestDifferentMaster'],
  TURRETS: [
    {
      POSITION: [12.5, 8, 0, 0, 360, 0],
      TYPE: exports.barSpinnerGun,
    },
  ],
};
exports.padoruHolster = {
  PARENT: [exports.genericTank],
  LABEL: "Holster",
  BODY: {
    FOV: 0.8,
  },
  COLOR: 16,
  SYNC_TURRET_SKILLS: true,
  //CONTROLLERS: ['nearestDifferentMaster'],
  TURRETS: [
    {
      POSITION: [12.5, 8, 0, 0, 360, 0],
      TYPE: exports.padoruGun,
    },
  ],
};
exports.miniGuardianSTProjectile = {
  PARENT: [exports.autoswarm],
  LABEL: "Guardian ST Projectile",
  SHAPE: 3,
  GUNS: [
    {
      POSITION: [4, 14, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.guardian, g.halfreload]),
        TYPE: exports.swarm,
        SYNCS_SKILLS: true,
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [12.5, 6, 0, 60, 0, 0],
      TYPE: exports.padoruHolster,
    },
    {
      POSITION: [12.5, 6, 0, 300, 0, 0],
      TYPE: exports.padoruHolster,
    },
  ],
};
exports.triadHolster = {
  PARENT: [exports.genericTank],
  LABEL: "Holster",
  BODY: {
    FOV: 0.8,
  },
  COLOR: 16,
  SYNC_TURRET_SKILLS: true,
  //CONTROLLERS: ['nearestDifferentMaster'],
  TURRETS: [
    {
      POSITION: [12.5, 8, 0, 0, 360, 0],
      TYPE: exports.triadGun,
    },
  ],
};
exports.spindriveHolster = {
  PARENT: [exports.genericTank],
  LABEL: "Holster",
  BODY: {
    FOV: 0.8,
  },
  COLOR: 16,
  SYNC_TURRET_SKILLS: true,
  //CONTROLLERS: ['nearestDifferentMaster'],
  TURRETS: [
    {
      POSITION: [12.5, 8, 0, 0, 360, 0],
      TYPE: exports.barSpinnerGun,
    },
    {
      POSITION: [8, 8, 0, 0, 360, 1],
      TYPE: exports.autoTurret,
    },
  ],
};
exports.swarmTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 13, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.pound, g.turret]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.machineAutoTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 11, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
          g.mach,
          g.slow,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.autoSmasherTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 6, 1, 0, 5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
          g.fast,
          g.mach,
          g.pound,
          g.morereload,
          g.morereload,
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload,
      },
    },
    {
      POSITION: [20, 6, 1, 0, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
          g.fast,
          g.mach,
          g.pound,
          g.morereload,
          g.morereload,
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload,
      },
    },
  ],
};
exports.oldAutoSmasherTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 7, 1, 0, -5.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.lotsmorrecoil,
          g.morereload,
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload,
      },
    },
    {
      POSITION: [20, 7, 1, 0, 5.75, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.lotsmorrecoil,
          g.morereload,
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload,
      },
    },
  ],
};

exports.autoTankGun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.pellingTurret = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 4, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.auto]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
exports.trapperAutoTankGun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      POSITION: [14, 8, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.flank, g.auto]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.pelleterAutoTankgun = {
  PARENT: [exports.autoTankGun],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 2, 1, 0, -2.5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.flank, g.auto]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 2, 1, 0, 2.5, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.flank, g.auto]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
exports.gunnerAutoTankgun = {
  PARENT: [exports.autoTankGun],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.auto,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.auto,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.auto,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.auto,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.cephalopodTurret = {
  PARENT: [exports.genericTank],
  COLOR: 16,
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  SYNC_TURRET_SKILLS: true,
  LABEL: "Turret",
  GUNS: [
    {
      POSITION: [19, 11, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.halfreload]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.cephalopodLimbA = {
  PARENT: [exports.genericTank],
  COLOR: 16,
  CONTROLLERS: ["onlyAcceptInArc"],
  SYNC_TURRET_SKILLS: true,
  GUNS: [
    {
      POSITION: [26, 8, 1, 0, 0, -90, 0],
    },
    {
      POSITION: [8, 8, -2, 5, 0, -90, 0],
    },
  ],
  TURRETS: [
    {
      POSITION: [31, 38, 0, -90, 361, 1],
      TYPE: exports.cephalopodTurret,
    },
  ],
};
exports.cephalopodArmA = {
  PARENT: [exports.genericTank],
  COLOR: 16,
  CONTROLLERS: ["onlyAcceptInArc"],
  SYNC_TURRET_SKILLS: true,
  GUNS: [
    {
      POSITION: [26, 8, 1, 0, 0, -45, 0],
    },
    {
      POSITION: [8, 8, -2, 5, 0, -45, 0],
    },
    {
      POSITION: [8, 8, 2, 18, 0, -45, 0],
    },
  ],
  TURRETS: [
    {
      POSITION: [22, 32, 0, -45, 361, 1],
      TYPE: exports.cephalopodLimbA,
    },
  ],
};
exports.cephalopodLimbB = {
  PARENT: [exports.genericTank],
  COLOR: 16,
  CONTROLLERS: ["onlyAcceptInArc"],
  SYNC_TURRET_SKILLS: true,
  GUNS: [
    {
      POSITION: [26, 8, 1, 0, 0, 90, 0],
    },
    {
      POSITION: [8, 8, -2, 5, 0, 90, 0],
    },
  ],
  TURRETS: [
    {
      POSITION: [31, 38, 0, 90, 361, 1],
      TYPE: exports.cephalopodTurret,
    },
  ],
};
exports.cephalopodArmB = {
  PARENT: [exports.genericTank],
  COLOR: 16,
  CONTROLLERS: ["onlyAcceptInArc"],
  SYNC_TURRET_SKILLS: true,
  GUNS: [
    {
      POSITION: [26, 8, 1, 0, 0, 45, 0],
    },
    {
      POSITION: [8, 8, -2, 5, 0, 45, 0],
    },
    {
      POSITION: [8, 8, 2, 18, 0, 45, 0],
    },
  ],
  TURRETS: [
    {
      POSITION: [22, 32, 0, 45, 361, 1],
      TYPE: exports.cephalopodLimbB,
    },
  ],
};
exports.nexusTurret = {
  PARENT: [exports.genericTank],
  COLOR: 16,
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  SYNC_TURRET_SKILLS: true,
  LABEL: "Turret",
  GUNS: [
    {
      POSITION: [24, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mini,
          g.assass,
          g.auto,
          g.halfreload,
          g.bitlessdamage,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 10, 1, 0, 0, 0, 1 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mini,
          g.assass,
          g.auto,
          g.halfreload,
          g.bitlessdamage,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 10, 1, 0, 0, 0, 2 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mini,
          g.assass,
          g.auto,
          g.halfreload,
          g.bitlessdamage,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.nexusLimbA = {
  PARENT: [exports.genericTank],
  COLOR: 50,
  SYNC_TURRET_SKILLS: true,
  GUNS: [
    {
      POSITION: [26, 8, 1, 0, 0, -45, 0],
    },
    {
      POSITION: [8, 8, -2, 5, 0, -45, 0],
    },
  ],
  TURRETS: [
    {
      POSITION: [22, 32, 0, -45, 360, 1],
      TYPE: exports.nexusTurret,
    },
  ],
};
exports.nexusArmA = {
  PARENT: [exports.genericTank],
  COLOR: 49,
  SYNC_TURRET_SKILLS: true,
  GUNS: [
    {
      POSITION: [26, 8, 1, 0, 0, -45, 0],
    },
    {
      POSITION: [8, 8, -2, 5, 0, -45, 0],
    },
    {
      POSITION: [8, 8, 2, 18, 0, -45, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 5.5, 0.6, 5, 5.25, 225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.bees,
          g.wasp,
          g.fast,
          g.auto,
          g.halfreload,
        ]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 5.5, 0.6, 5, -5.25, 225, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.bees,
          g.wasp,
          g.fast,
          g.auto,
          g.halfreload,
        ]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 5.5, 0.6, 7, 3, 225, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.bees,
          g.wasp,
          g.fast,
          g.auto,
          g.halfreload,
        ]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 5.5, 0.6, 7, -3, 225, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.bees,
          g.wasp,
          g.fast,
          g.auto,
          g.halfreload,
        ]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [22, 32, 0, -45, 0, 1],
      TYPE: exports.nexusLimbA,
    },
  ],
};
exports.nexusLimbB = {
  PARENT: [exports.genericTank],
  COLOR: 50,
  SYNC_TURRET_SKILLS: true,
  GUNS: [
    {
      POSITION: [26, 8, 1, 0, 0, 45, 0],
    },
    {
      POSITION: [8, 8, -2, 5, 0, 45, 0],
    },
  ],
  TURRETS: [
    {
      POSITION: [22, 32, 0, 45, 360, 1],
      TYPE: exports.nexusTurret,
    },
  ],
};
exports.nexusArmB = {
  PARENT: [exports.genericTank],
  COLOR: 49,
  SYNC_TURRET_SKILLS: true,
  GUNS: [
    {
      POSITION: [26, 8, 1, 0, 0, 45, 0],
    },
    {
      POSITION: [8, 8, -2, 5, 0, 45, 0],
    },
    {
      POSITION: [8, 8, 2, 18, 0, 45, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 5.5, 0.6, 5, 5.25, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.bees,
          g.wasp,
          g.fast,
          g.auto,
          g.halfreload,
        ]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 5.5, 0.6, 5, -5.25, 135, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.bees,
          g.wasp,
          g.fast,
          g.auto,
          g.halfreload,
        ]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 5.5, 0.6, 7, 3, 135, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.bees,
          g.wasp,
          g.fast,
          g.auto,
          g.halfreload,
        ]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 5.5, 0.6, 7, -3, 135, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.bees,
          g.wasp,
          g.fast,
          g.auto,
          g.halfreload,
        ]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [22, 32, 0, 45, 0, 1],
      TYPE: exports.nexusLimbB,
    },
  ],
};
exports.nexusBack = {
  PARENT: [exports.genericTank],
  COLOR: 50,
  SYNC_TURRET_SKILLS: true,
  GUNS: [
    {
      POSITION: [26, 8, 1, 0, 0, 45, 0],
    },
    {
      POSITION: [8, 8, -2, 5, 0, 45, 0],
    },
    {
      POSITION: [8, 8, 2, 18, 0, 45, 0],
    },
    {
      POSITION: [26, 8, 1, 0, 0, -45, 0],
    },
    {
      POSITION: [8, 8, -2, 5, 0, -45, 0],
    },
    {
      POSITION: [8, 8, 2, 18, 0, -45, 0],
    },
  ],
  TURRETS: [
    {
      POSITION: [22, 32, 0, 315, 0, 1],
      TYPE: exports.nexusArmA,
    },
    {
      POSITION: [22, 32, 0, 45, 0, 1],
      TYPE: exports.nexusArmB,
    },
  ],
};
exports.flamegunTurret = {
  PARENT: [exports.genericTank],
  COLOR: 16,
  CONTROLLERS: ["nearestDifferentMaster"],
  SYNC_TURRET_SKILLS: true,
  LABEL: "Flamegun",
  GUNS: [
    {
      POSITION: [12, 14, 1.2, 8, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.flare,
          g.flamegun,
          g.auto,
        ]),
        TYPE: exports.flameBullet,
        COLOR: 16,
      },
    },
    {
      POSITION: [12, 10, 1.3, 6, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.flare,
          g.flamegun,
          g.auto,
          g.fake,
        ]),
        TYPE: exports.flameBullet,
        COLOR: 43,
      },
    },
    {
      POSITION: [12, 6, 1.4, 4, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.flare,
          g.flamegun,
          g.auto,
          g.fake,
        ]),
        TYPE: exports.flameBullet,
        COLOR: 16,
      },
    },
  ],
};
exports.flammenwerferTurret = {
  PARENT: [exports.genericTank],
  COLOR: 16,
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  SYNC_TURRET_SKILLS: true,
  LABEL: "Flamegun",
  GUNS: [
    {
      POSITION: [12, 14, 1.2, 8, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.flare,
          g.flamegun,
          g.auto,
          g.halfreload,
        ]),
        TYPE: exports.flameBullet,
        COLOR: 16,
      },
    },
    {
      POSITION: [12, 10, 1.3, 6, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.flare,
          g.flamegun,
          g.auto,
          g.halfreload,
          g.fake,
        ]),
        TYPE: exports.flameBullet,
        COLOR: 43,
      },
    },
    {
      POSITION: [12, 6, 1.4, 4, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.flare,
          g.flamegun,
          g.auto,
          g.halfreload,
          g.fake,
        ]),
        TYPE: exports.flameBullet,
        COLOR: 16,
      },
    },
  ],
};
exports.flammenwerferLimbA = {
  PARENT: [exports.genericTank],
  COLOR: 16,
  CONTROLLERS: ["onlyAcceptInArc"],
  SYNC_TURRET_SKILLS: true,
  GUNS: [
    {
      POSITION: [26, 8, 1, 0, 0, -90, 0],
    },
    {
      POSITION: [8, 8, -2, 5, 0, -90, 0],
    },
  ],
  TURRETS: [
    {
      POSITION: [31, 38, 0, -90, 361, 1],
      TYPE: exports.flammenwerferTurret,
    },
  ],
};
exports.flammenwerferArmA = {
  PARENT: [exports.genericTank],
  COLOR: 16,
  CONTROLLERS: ["onlyAcceptInArc"],
  SYNC_TURRET_SKILLS: true,
  GUNS: [
    {
      POSITION: [26, 8, 1, 0, 0, -45, 0],
    },
    {
      POSITION: [8, 8, -2, 5, 0, -45, 0],
    },
    {
      POSITION: [8, 8, 2, 18, 0, -45, 0],
    },
  ],
  TURRETS: [
    {
      POSITION: [22, 32, 0, -45, 361, 1],
      TYPE: exports.flammenwerferLimbA,
    },
  ],
};
exports.flammenwerferLimbB = {
  PARENT: [exports.genericTank],
  COLOR: 16,
  CONTROLLERS: ["onlyAcceptInArc"],
  SYNC_TURRET_SKILLS: true,
  GUNS: [
    {
      POSITION: [26, 8, 1, 0, 0, 90, 0],
    },
    {
      POSITION: [8, 8, -2, 5, 0, 90, 0],
    },
  ],
  TURRETS: [
    {
      POSITION: [31, 38, 0, 90, 361, 1],
      TYPE: exports.flammenwerferTurret,
    },
  ],
};
exports.flammenwerferArmB = {
  PARENT: [exports.genericTank],
  COLOR: 16,
  CONTROLLERS: ["onlyAcceptInArc"],
  SYNC_TURRET_SKILLS: true,
  GUNS: [
    {
      POSITION: [26, 8, 1, 0, 0, 45, 0],
    },
    {
      POSITION: [8, 8, -2, 5, 0, 45, 0],
    },
    {
      POSITION: [8, 8, 2, 18, 0, 45, 0],
    },
  ],
  TURRETS: [
    {
      POSITION: [22, 32, 0, 45, 361, 1],
      TYPE: exports.flammenwerferLimbB,
    },
  ],
};
exports.auto5gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 11, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.five]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.heavy3gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2,
    SPEED: 0.9,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.destroyerAutoTankgun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2,
    SPEED: 0.9,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.auto]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.annihilatorAutoTankgun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2,
    SPEED: 0.9,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 20, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.anni,
          g.auto,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.eliminatorAutoTankgun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2,
    SPEED: 0.9,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10.5, 25, 1, 12, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.anni,
          g.elim,
          g.auto,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 20, 1.25, 0, 0, 0, 0],
    },
  ],
};
exports.scatherGun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2,
    SPEED: 0.9,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, 1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blaster, g.auto]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.scourgeGun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2,
    SPEED: 0.9,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12, 1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.blaster,
          g.destroy,
          g.auto,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.baneGun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2,
    SPEED: 0.9,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 14, 1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.blaster,
          g.destroy,
          g.anni,
          g.auto,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.masterGun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 16,
  MAX_CHILDREN: 6,
  AI: {
    NO_LEAD: true,
    SKYNET: true,
    FULL_VIEW: true,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 14, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.master]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.sniper3gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 5,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.auto,
          g.assass,
          g.autosnipe,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8.5, -1.4, 8, 0, 0, 0],
    },
  ],
};
exports.bansheegun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [26, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.lessreload]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.auto4gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, -3.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 4, 1, 0, 3.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.bigauto4gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 5, 1, 0, -4.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 5, 1, 0, 4.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 5, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.tritrapgun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 16, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 16, 1.1, 20, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.auto]),
        TYPE: exports.oldBlock,
      },
    },
  ],
};
exports.skimturret = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 2,
  },
  COLOR: 2,
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  LABEL: "",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
          g.halfreload,
        ]),
        TYPE: exports.missile,
      },
    },
    {
      POSITION: [17, 15, 1, 0, 0, 0, 0],
    },
  ],
};
exports.hyperskimmerTurret = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 2,
  },
  COLOR: 2,
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  LABEL: "",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 11, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
          g.skim,
          g.halfreload,
          g.fake,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
          g.skim,
          g.halfreload,
        ]),
        TYPE: exports.hypermissile,
      },
    },
    {
      POSITION: [17, 15, 1, 0, 0, 0, 0],
    },
  ],
};
exports.smasherBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: 6,
  INDEPENDENT: true,
};
exports.spikeBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: -4,
  INDEPENDENT: true,
};
exports.spikeBody1 = {
  LABEL: "",
  CONTROLLERS: ["fastspin"],
  COLOR: 9,
  SHAPE: 3,
  INDEPENDENT: true,
};
exports.spikeBody2 = {
  LABEL: "",
  CONTROLLERS: ["reversespin"],
  COLOR: 9,
  SHAPE: 3,
  INDEPENDENT: true,
};
exports.megasmashBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: -6,
  INDEPENDENT: true,
};
exports.dominationBody = {
  LABEL: "",
  CONTROLLERS: ["dontTurn"],
  COLOR: 9,
  SHAPE: 6,
  INDEPENDENT: true,
};
exports.forAll = {
  LABEL: "",
  CONTROLLERS: ["dontTurn"],
  COLOR: 36,
  SHAPE: forAll,
  INDEPENDENT: true,
};
exports.smasherBullet = {
  PARENT: [exports.bullet],
  LABEL: "Smasher Bullet",
  TURRETS: [
    {
      POSITION: [22, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody,
    },
  ],
};
exports.baseSwarmTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Protector",
  COLOR: 16,
  BODY: {
    FOV: 2,
  },
  CONTROLLERS: ["nearestDifferentMaster"],
  AI: {
    NO_LEAD: true,
    LIKES_SHAPES: true,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 4.5, 0.6, 7, 2, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [5, 4.5, 0.6, 7, -2, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [5, 4.5, 0.6, 7.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
        TYPE: [
          exports.swarm,
          { INDEPENDENT: true, AI: { LIKES_SHAPES: true } },
        ],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.baseGunTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Protector",
  BODY: {
    FOV: 5,
  },
  ACCEPTS_SCORE: false,
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 12, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.norecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [11, 13, 1, 6, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.norecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [7, 13, -1.3, 6, 0, 0, 0],
    },
  ],
};
exports.baseProtector = {
  PARENT: [exports.genericTank],
  LABEL: "Base",
  SIZE: 64,
  DAMAGE_CLASS: 0,
  ACCEPTS_SCORE: false,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    spd: 1,
    str: 1,
  }),
  BODY: {
    // def
    SPEED: 0,
    HEALTH: 10000,
    DAMAGE: 10,
    PENETRATION: 0.25,
    SHIELD: 1000,
    REGEN: 100,
    FOV: 1,
    PUSHABILITY: 0,
    HETERO: 0,
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [25, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody,
    },
    {
      POSITION: [7, 9, 0, 45, 100, 0],
      TYPE: exports.baseSwarmTurret,
    },
    {
      POSITION: [7, 9, 0, 135, 100, 0],
      TYPE: exports.baseSwarmTurret,
    },
    {
      POSITION: [7, 9, 0, 225, 100, 0],
      TYPE: exports.baseSwarmTurret,
    },
    {
      POSITION: [7, 9, 0, 315, 100, 0],
      TYPE: exports.baseSwarmTurret,
    },
    {
      POSITION: [7, 9, 0, 0, 100, 0],
      TYPE: exports.baseGunTurret,
    },
    {
      POSITION: [7, 9, 0, 90, 100, 0],
      TYPE: [exports.skimturret, { HAS_NO_RECOIL: true }],
    },
    {
      POSITION: [7, 9, 0, 180, 100, 0],
      TYPE: exports.baseGunTurret,
    },
    {
      POSITION: [7, 9, 0, 270, 100, 0],
      TYPE: [exports.skimturret, { HAS_NO_RECOIL: true }],
    },
  ],
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4.5, 7.5, -1.3, 6, 0, 45, 0],
    },
    {
      POSITION: [4.5, 7.5, -1.3, 6, 0, 135, 0],
    },
    {
      POSITION: [4.5, 7.5, -1.3, 6, 0, 225, 0],
    },
    {
      POSITION: [4.5, 7.5, -1.3, 6, 0, 315, 0],
    },
    {
      POSITION: [4.5, 6, -1.5, 7, 0, 45, 0],
    },
    {
      POSITION: [4.5, 6, -1.5, 7, 0, 135, 0],
    },
    {
      POSITION: [4.5, 6, -1.5, 7, 0, 225, 0],
    },
    {
      POSITION: [4.5, 6, -1.5, 7, 0, 315, 0],
    },
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4.5, 7.5, -1.3, 6, 0, 0, 0],
    },
    {
      POSITION: [4.5, 7.5, -1.3, 6, 0, 90, 0],
    },
    {
      POSITION: [4.5, 7.5, -1.3, 6, 0, 180, 0],
    },
    {
      POSITION: [4.5, 7.5, -1.3, 6, 0, 270, 0],
    },
    {
      POSITION: [4.5, 6, -1.5, 7, 0, 0, 0],
    },
    {
      POSITION: [4.5, 6, -1.5, 7, 0, 90, 0],
    },
    {
      POSITION: [4.5, 6, -1.5, 7, 0, 180, 0],
    },
    {
      POSITION: [4.5, 6, -1.5, 7, 0, 270, 0],
    },
  ],
};

exports.minion = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4,
  },
  AI: {
    BLIND: true,
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster",
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
        WAIT_TO_CYCLE: true,
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.stillMinion = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4,
  },
  AI: {
    BLIND: true,
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "canRepel",
    "hangOutNearMaster",
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
        WAIT_TO_CYCLE: true,
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.guidedStillMinion = makeAuto(exports.stillMinion, "Minion", {
  type: exports.swarmTurret,
});
exports.tinyMinion = {
  PARENT: [exports.genericTank],
  LABEL: "Tiny Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4,
    RANGE: 60,
  },
  AI: {
    BLIND: true,
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster",
  ],
  DIE_AT_RANGE: true,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
        WAIT_TO_CYCLE: true,
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.tinyStillMinion = {
  PARENT: [exports.genericTank],
  LABEL: "Tiny Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4,
    RANGE: 60,
  },
  AI: {
    BLIND: true,
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "canRepel",
    "hangOutNearMaster",
  ],
  DIE_AT_RANGE: true,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
        WAIT_TO_CYCLE: true,
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.miniConstellationProjectile = {
  PARENT: [exports.tinyMinion],
  LABEL: "Constellation Projectile",
  SHAPE: "M 0.5 0.5 L 0 1 L -1 0 L 0 -1 L 0.5 -0.5 L 0.5 0.5",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4,
    RANGE: 180,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [10, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [4.5, 5.5, 0.6, 7, 3, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [4.5, 5.5, 0.6, 7, -3, 135, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [4.5, 5.5, 0.6, 7, 3, 225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [4.5, 5.5, 0.6, 7, -3, 225, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.pillboxTurret = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 16,
  BODY: {
    FOV: 2,
  },
  HAS_NO_RECOIL: true,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 11, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.minion,
          g.turret,
          g.power,
          g.auto,
          g.notdense,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.pillbox = {
  LABEL: "Pillbox",
  PARENT: [exports.trap],
  SHAPE: -4,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
  INDEPENDENT: true,
  BODY: {
    SPEED: 1,
    DENSITY: 5,
    RANGE: 450,
  },
  DIE_AT_RANGE: true,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: exports.pillboxTurret,
    },
  ],
};
exports.gimel1Portal = {
  PARENT: [exports.orthodox1Portal],
  LABEL: "Portal",
  BODY: {
    DAMAGE: 0,
    HEALTH: 1e9,
  },
  CONTROLLERS: ["portal"],
  FACING_TYPE: "toTarget",
  SHAPE: -8,
  GUNS: [
    {
      POSITION: [0.1, 15, 1, 0, 0, 0, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessdamage, g.noshudder]),
        TYPE: [exports.homingBullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 15, 1, 0, 0, 90, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessdamage, g.noshudder]),
        TYPE: [exports.homingBullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 15, 1, 0, 0, 180, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessdamage, g.noshudder]),
        TYPE: [exports.homingBullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [0.1, 15, 1, 0, 0, 270, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessdamage, g.noshudder]),
        TYPE: [exports.homingBullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
  ],
};
const makeShell = (options = {}) => {
  options.size = options.size == null ? 1 : options.size;
  options.shape = options.shape == null ? 6 : options.shape;
  options.color = options.color == null ? 9 : options.color;
  options.rpm =
    options.rpm == null ? 4 : options.rpm == 0 ? undefined : options.rpm;
  options.angle = options.angle == null ? 0 : options.angle;
  return {
    POSITION: [1.17 * options.size, 0, 0, options.angle, -1],
    SHAPE: options.shape,
    COLOR: options.color,
    RPM: options.rpm,
  };
};
const applyStats = (guns, stats, options = {}) => {
  if (guns) {
    for (let gun of guns) {
      if (gun.PROPERTIES) {
        if (options.propertyEdit) options.propertyEdit(gun.PROPERTIES);
        if (gun.PROPERTIES.SHOOT_SETTINGS) {
          if (options.shootEdit) options.shootEdit(gun.PROPERTIES);
          gun.PROPERTIES.SHOOT_SETTINGS = combineStats([
            Object.values(gun.PROPERTIES.SHOOT_SETTINGS),
            ...stats,
          ]);
        }
      }
    }
  }
};
function deepCopy(type) {
  const pushArray = (input, key) => {
    let arrOut = [];
    for (let i = 0; i < input.length; i++) {
      switch (typeof input[i]) {
        case "object":
          if (Array.isArray(input[i])) arrOut.push(pushArray(input[i]));
          else {
            if (key == "TYPE") arrOut.push(input[i]);
            else arrOut.push(deepCopy(input[i]));
          }
          break;
        default:
          arrOut.push(input[i]);
          break;
      }
    }
    return arrOut;
  };
  let output = JSON.parse(JSON.stringify(type));
  if (Array.isArray(type)) output = pushArray(type);
  else {
    for (let key in type) {
      switch (typeof type[key]) {
        case "object":
          if (Array.isArray(type[key])) output[key] = pushArray(type[key], key);
          else {
            if (key == "TYPE") output[key] = type[key];
            else output[key] = deepCopy(type[key]);
          }
          break;
        default:
          output[key] = type[key];
          break;
      }
    }
  }
  return output;
}
const createTurret = (type, stats = [g.blank], syncTurretSkills = true) => {
  let output = deepCopy(type);
  output.LABEL = `${type.LABEL} Turret`;
  output.DANGER = 0;
  applyStats(output.GUNS, [g.turret, ...stats]);
  output.SYNC_SKILLS =
    output.SYNC_TURRET_SKILLS =
    output.SYNCS_SKILLS =
      syncTurretSkills;
  output.FACING_TYPE = "toTarget";
  return output;
};
const createTurretBoss = (type, stats = [g.blank], syncTurretSkills = true) => {
  return createTurret(
    type,
    [
      [1, 0, 1, 1.176, 1.667, 1.667, 1.667, 1.111, 1.176, 1, 10, 1, 1],
      ...stats,
    ],
    syncTurretSkills
  );
};
const createAutoGun = (type, stats = [g.blank], syncTurretSkills = true) => {
  let output = deepCopy(type);
  output.LABEL = `${type.LABEL} Turret`;
  output.DANGER = 0;
  output.CONTROLLERS = [
    "canRepel",
    "mapAltToFire",
    "nearestDifferentMaster",
    "onlyAcceptInArc",
  ];
  applyStats(output.GUNS, [g.auto, ...stats]);
  output.SYNC_SKILLS =
    output.SYNC_TURRET_SKILLS =
    output.SYNCS_SKILLS =
      syncTurretSkills;
  output.FACING_TYPE = "toTarget";
  return output;
};
const createAutoBoss = (type, stats = [g.blank], syncTurretSkills = true) => {
  return createAutoGun(
    type,
    [
      [1, 0, 1, 1.176, 1.667, 1.667, 1.667, 1.111, 1.176, 1, 10, 1, 1],
      ...stats,
    ],
    syncTurretSkills
  );
};
const createMinion = (
  type,
  facing = "toTarget",
  stats = [g.blank],
  syncSkills = true
) => {
  let output = deepCopy(type);
  output.PARENT = [exports.genericTank];
  output.LABEL = `${type.LABEL} Minion`;
  output.FACING_TYPE = facing;
  output.HAS_NO_RECOIL = true;
  applyStats(output.GUNS, [g.minion, ...stats]);
  output.SYNCS_SKILLS = syncSkills;
  output.CONTROLLERS = [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster",
  ];
  output.BODY = {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4,
    RANGE: 60,
  };
  output.CLEAR_ON_MASTER_UPGRADE = true;
  return output;
};
function makeAuto(type, name = -1, options = {}, count = 1) {
  let turret = {
    type: exports.autoTurret,
    size: 10,
    independent: true,
    color: 16,
  };
  if (options.type != null) {
    turret.type = options.type;
  }
  if (options.size != null) {
    turret.size = options.size;
  }
  if (options.independent != null) {
    turret.independent = options.independent;
  }
  if (options.color != null) {
    turret.color = options.color;
  }
  let auto =
    ",Double ,Triple ,Quad ,Penta ,Hexa ,Hepta ,Octo ,Ennea ,Deca ,Hendeca ,Dodeca ,Tredeca ,Tetradeca ,Pentadeca ,Hexadeca ,Heptadeca ,Octadeca ,Enneadeca ,Icosa ,".split(
      ","
    );

  let output = deepCopy(type);
  let autoguns = [];
  for (let i = 0; i < count; i++)
    autoguns.push({
      /*********  SIZE               X       Y     ANGLE    ARC */
      POSITION: [
        turret.size / (count > 1 ? 1.5 : 1),
        count > 1 ? 5.5 : 0,
        0,
        count > 1 ? i * (360 / count) : 180,
        360,
        1,
      ],
      TYPE: [
        turret.type,
        {
          CONTROLLERS: ["nearestDifferentMaster"],
          INDEPENDENT: turret.independent,
          COLOR: turret.color,
        },
      ],
    });
  if (type.GUNS != null) {
    output.GUNS = type.GUNS;
  }
  if (type.TURRETS == null) {
    output.TURRETS = [...autoguns];
  } else {
    output.TURRETS = [...type.TURRETS, ...autoguns];
  }
  if (name == -1) {
    output.LABEL = `${auto[count - 1]}Auto-${type.LABEL}`;
  } else {
    output.LABEL = name;
  }
  if (output.danger == NaN) output.DANGER = type.DANGER + 1;
  return output;
}
function makeAura(type, name = -1, size = 10) {
  let auto =
    ",Double ,Triple ,Quad ,Penta ,Hexa ,Hepta ,Octo ,Ennea ,Deca ,Hendeca ,Dodeca ,Tredeca ,Tetradeca ,Pentadeca ,Hexadeca ,Heptadeca ,Octadeca ,Enneadeca ,Icosa ,".split(
      ","
    );

  let output = deepCopy(type);
  let aura = {
    POSITION: [size, 0, 0, 0, 360, 1],
    TYPE: [exports.auraParent],
  };
  if (type.GUNS != null) {
    output.GUNS = type.GUNS;
  }
  if (type.TURRETS == null) {
    output.TURRETS = [aura];
  } else {
    output.TURRETS = [...type.TURRETS, aura];
  }
  if (name == -1) {
    output.LABEL = `Aura ${type.LABEL}`;
  } else {
    output.LABEL = name;
  }
  if (output.danger == NaN) output.DANGER = type.DANGER + 1;
  return output;
}
function makeHybrid(type, name = -1, droneType = exports.drone) {
  let output = deepCopy(type);
  let spawner = {
    /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [7, 12, 1.2, 8, 0, 180, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.drone, g.weak]),
      TYPE: [droneType, { INDEPENDENT: true }],
      AUTOFIRE: true,
      SYNCS_SKILLS: true,
      STAT_CALCULATOR: gunCalcNames.drone,
      WAIT_TO_CYCLE: false,
      MAX_CHILDREN: 3,
    },
  };
  if (type.TURRETS != null) {
    output.TURRETS = type.TURRETS;
  }
  if (type.GUNS == null) {
    output.GUNS = [spawner];
  } else {
    output.GUNS = [...type.GUNS, spawner];
  }
  if (name == -1) {
    output.LABEL = `${type.LABEL} Hybrid`;
  } else {
    output.LABEL = name;
  }
  return output;
}
function makeZipper(type, name = -1) {
  let output = deepCopy(type);
  let swarmer = {
    /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [7, 5, 0.6, 7, 4, 10, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.swarm, g.weak]),
      TYPE: exports.swarm,
      STAT_CALCULATOR: gunCalcNames.swarm,
    },
  };
  let swarmer2 = {
    POSITION: [7, 5, 0.6, 7, -4, -10, 0.5],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.swarm, g.weak]),
      TYPE: exports.swarm,
      STAT_CALCULATOR: gunCalcNames.swarm,
    },
  };
  if (type.TURRETS != null) {
    output.TURRETS = type.TURRETS;
  }
  if (type.GUNS == null) {
    output.GUNS = [swarmer, swarmer2];
  } else {
    output.GUNS = [swarmer, swarmer2, ...type.GUNS];
  }
  if (name == -1) {
    output.LABEL = `${type.LABEL} Zipper`;
  } else {
    output.LABEL = name;
  }
  return output;
}
function makeFusilier(type, name = -1) {
  let output = deepCopy(type);
  let swarmer = {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 4, 0.6, 5, 5.25, 10, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast, g.weak]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    swarmer2 = {
      POSITION: [7, 4, 0.6, 5, -5.25, -10, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast, g.weak]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    swarmer3 = {
      POSITION: [7, 4, 0.6, 7, 3, 10, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast, g.weak]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    swarmer4 = {
      POSITION: [7, 4, 0.6, 7, -3, -10, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast, g.weak]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    };
  if (type.TURRETS != null) {
    output.TURRETS = type.TURRETS;
  }
  if (type.GUNS == null) {
    output.GUNS = [swarmer, swarmer2, swarmer3, swarmer4];
  } else {
    output.GUNS = [swarmer, swarmer2, swarmer3, swarmer4, ...type.GUNS];
  }
  if (name == -1) {
    output.LABEL = `${type.LABEL} Fusilier`;
  } else {
    output.LABEL = name;
  }
  return output;
}
function makeBackGunner(type, name = -1) {
  let output = deepCopy(type);
  let gun1 = {
      POSITION: [19, 2, 1, 0, -2.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.slow,
          g.flank,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    gun2 = {
      POSITION: [19, 2, 1, 0, 2.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.slow,
          g.flank,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    gun3 = {
      POSITION: [12, 11, 1, 0, 0, 180, 0],
    };
  if (type.TURRETS != null) {
    output.TURRETS = type.TURRETS;
  }
  if (type.GUNS == null) {
    output.GUNS = [gun1, gun2, gun3];
  } else {
    output.GUNS = [...type.GUNS, gun1, gun2, gun3];
  }
  if (name == -1) {
    output.LABEL = `${type.LABEL}-Pellet`;
  } else {
    output.LABEL = name;
  }
  return output;
}
function makeMulti(type, name = -1, count, options = {}) {
  let output = deepCopy(type);
  let multi =
    ", Double , Triple , Quad , Penta , Hexa , Hepta , Octo , Ennea , Deca , Hendeca , Dodeca , Tredeca , Tetradeca , Pentadeca , Hexadeca , Heptadeca , Octadeca , Enneadeca , Icosa , ".split(
      ","
    );
  let reloadDelay = options.reload_delay || new Array(count),
    angles = options.angles || new Array(count);
  if (count <= 20) {
    let baseGuns = deepCopy(output.GUNS);
    output.GUNS = [];
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < baseGuns.length; j++) {
        let outputGun = deepCopy(baseGuns[j]);
        outputGun.POSITION[5] +=
          angles[i] == undefined ? (360 / count) * i : angles[i];
        if (reloadDelay[i] != undefined)
          outputGun.POSITION[6] += reloadDelay[i];
        output.GUNS.push(outputGun);
      }
    }
  } else console.error("ERROR: Multi function can't surpass 20!");
  if (type.TURRETS != null) {
    output.TURRETS = type.TURRETS;
  }
  if (name == -1) {
    output.LABEL = `${multi[count]}${type.LABEL}`;
  } else {
    output.LABEL = name;
  }
  return output;
}
// Misc ammo
exports.turretedPoison = makeAuto(exports.poison, "Poison", { color: 51 });
exports.rookieMissile = {
  PARENT: [exports.missile],
  SHAPE: 3,
  GUNS: [
    {
      POSITION: [13, 5, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [3, 5, 1.5, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.caltrop]),
        TYPE: exports.miniTrap,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true,
      },
    },
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 60, 180, 0],
      TYPE: [exports.pellingTurret, { COLOR: 4 }],
    },
    {
      POSITION: [14, 8, 0, 300, 180, 0],
      TYPE: [exports.pellingTurret, { COLOR: 4 }],
    },
  ],
};
exports.sentinelTrap2 = makeAuto(
  {
    PARENT: [exports.oldBlock],
    SHAPE: 5,
  },
  "Sentinel",
  { type: exports.sniper3gun }
);
//Tanks
exports.nodeBase = {
  PARENT: [exports.genericTank],
  LABEL: "Node-Base",
  //CONTROLLERS: ['nearestDifferentMaster'],
  LEVEL: 0,
  DANGER: 3,
};
exports.basic = {
  PARENT: [exports.genericTank],
  LABEL: "Basic",
  //CONTROLLERS: ['nearestDifferentMaster'],
  LEVEL: 0,
  DANGER: 3,
  BODY: {
    FOV: 1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false, // def
        SHOOT_ON_DEATH: false, // def
        COLOR: 16, // def
      },
    },
  ],
};
exports.wind = {
  PARENT: [exports.genericTank],
  LABEL: "Wind",
  //CONTROLLERS: ['nearestDifferentMaster'],
  LEVEL: 0,
  DANGER: 3,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.wind]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 6, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.wind]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 6, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.wind]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.propeller = {
  PARENT: [exports.genericTank],
  LABEL: "Propeller",
  //CONTROLLERS: ['nearestDifferentMaster'],
  LEVEL: 0,
  DANGER: 3,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 6, 1, 0, 0, 150, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.wind, g.tri, g.thruster]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 6, 1, 0, 0, 210, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.wind, g.tri, g.thruster]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.split2 = {
  PARENT: [exports.genericTank],
  LABEL: "Split",
  //CONTROLLERS: ['nearestDifferentMaster'],
  LEVEL: 0,
  DANGER: 3,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 6, 1, 0, 4.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.split]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 6, 1, 0, -4.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.split]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.doubleSplit = {
  PARENT: [exports.genericTank],
  LABEL: "Double Split",
  //CONTROLLERS: ['nearestDifferentMaster'],
  LEVEL: 0,
  DANGER: 3,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 6, 1, 0, 4.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.split, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 6, 1, 0, -4.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.split, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 6, 1, 0, 4.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.split, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 6, 1, 0, -4.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.split, g.double]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.testbedMenu = {
  PARENT: [exports.genericTank],
  LABEL: "Menu",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  VALUE: 1e9,
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2,
  },
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }],
      },
    },
  ],
};
exports.dev = {
  PARENT: [exports.testbedMenu],
  LABEL: "Developer",
};
exports.dev2 = {
  PARENT: [exports.testbedMenu],
  LABEL: "Developer Pg.2",
};
exports.bosses = {
  PARENT: [exports.testbedMenu],
  LABEL: "Bosses",
};
exports.xkxbosses = {
  PARENT: [exports.testbedMenu],
  LABEL: "X-K-X Bosses",
};
exports.eBosses = {
  PARENT: [exports.testbedMenu],
  LABEL: "E Bosses",
};
exports.creativeBosses = {
  PARENT: [exports.testbedMenu],
  LABEL: "Creative Bosses",
};
exports.single = {
  PARENT: [exports.genericTank],
  LABEL: "Single",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};

// lancer
exports.lancerBullet = {
  PARENT: [exports.bullet],
  LABEL: "Slash",
  SHAPE: [[]], //lmfao
  GIVE_KILL_MESSAGE: false,
  DRAW_HEALTH: false,
};
exports.bonk = {
  PARENT: [exports.bullet],
  LABEL: "Bonk",
  SHAPE: [[]], //try bonking only for free! (again)
  GIVE_KILL_MESSAGE: false,
  DRAW_HEALTH: false,
};
exports.jouster = {
  PARENT: [exports.genericTank],
  LABEL: "Jouster",
  TOOLTIP: "Omg woomy refence!111!1",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 5, 0.5, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lance, g.weak]),
        TYPE: exports.lancerBullet,
        AUTOFIRE: true,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 11, 0.001, 8, 0, 0, 0],
    },
  ],
};
exports.lancer = {
  PARENT: [exports.genericTank],
  LABEL: "Lancer", //Lancer from deltarune rel
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 5, 0.5, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lance]),
        TYPE: exports.lancerBullet,
        AUTOFIRE: true,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 11, 0.001, 8, 0, 0, 0],
    },
  ],
};
exports.flailBall = {
  PARENT: [exports.genericTank],
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody,
    },
  ],
};
exports.flailBolt1 = {
  PARENT: [exports.genericTank],
  GUNS: [
    {
      POSITION: [40, 5, 1, 8, 0, 0, 0],
    },
  ],
  TURRETS: [
    {
      POSITION: [48, 56, 0, 0, 190, 1],
      TYPE: [
        exports.flailBall,
        {
          INDEPENDENT: true,
        },
      ],
    },
  ],
};
exports.flailBolt2 = {
  PARENT: [exports.genericTank],
  GUNS: [
    {
      POSITION: [30, 5, 1, 8, 0, 0, 0],
    },
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [18, 36, 0, 0, 190, 1],
      TYPE: [
        exports.flailBolt1,
        {
          INDEPENDENT: true,
        },
      ],
    },
  ],
};
exports.flailBolt3 = {
  PARENT: [exports.genericTank],
  GUNS: [
    {
      POSITION: [30, 5, 1, 8, 0, 0, 0],
    },
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [18, 36, 0, 0, 190, 1],
      TYPE: [
        exports.flailBolt2,
        {
          INDEPENDENT: true,
        },
      ],
    },
  ],
};
exports.beyblade0Ball = {
  PARENT: [exports.genericTank],
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: [exports.genericEntity, { COLOR: 9 }],
    },
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody,
    },
  ],
};
exports.beyblade0Bolt1 = {
  PARENT: [exports.genericTank],
  GUNS: [
    {
      POSITION: [40, 5, 1, 8, 0, 0, 0],
    },
  ],
  TURRETS: [
    {
      POSITION: [48, 56, 0, 0, 190, 1],
      TYPE: [
        exports.beyblade0Ball,
        {
          INDEPENDENT: true,
        },
      ],
    },
  ],
};
exports.beyblade0Bolt2 = {
  PARENT: [exports.genericTank],
  GUNS: [
    {
      POSITION: [30, 5, 1, 8, 0, 0, 0],
    },
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [18, 36, 0, 0, 190, 1],
      TYPE: [
        exports.beyblade0Bolt1,
        {
          INDEPENDENT: true,
        },
      ],
    },
  ],
};
exports.beyblade0Bolt3 = {
  PARENT: [exports.genericTank],
  GUNS: [
    {
      POSITION: [30, 5, 1, 8, 0, 0, 0],
    },
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [18, 36, 0, 0, 190, 1],
      TYPE: [
        exports.beyblade0Bolt2,
        {
          INDEPENDENT: true,
        },
      ],
    },
  ],
};
exports.beyblade1Bolt1 = {
  PARENT: [exports.genericTank],
  GUNS: [
    {
      POSITION: [0.1, 5, 1, 48, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.beyblade]),
        TYPE: (exports.beybladeBullet = {
          PARENT: [exports.bullet],
          TURRETS: [
            {
              /** SIZE     X       Y     ANGLE    ARC */
              POSITION: [21.5, 0, 0, 0, 360, 0],
              TYPE: [exports.genericTank, { COLOR: 9 }],
            },
            {
              /** SIZE     X       Y     ANGLE    ARC */
              POSITION: [21.5, 0, 0, 0, 360, 0],
              TYPE: exports.smasherBody,
            },
            {
              /** SIZE     X       Y     ANGLE    ARC */
              POSITION: [20, 0, 0, 0, 360, 1],
              TYPE: [exports.genericTank, { COLOR: 16 }],
            },
          ],
        }),
        AUTOFIRE: true,
        AMMO_PER_SHOT: 1,
      },
    },
    {
      POSITION: [40, 5, 1, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.turret, g.turret]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.beyblade1Bolt2 = {
  PARENT: [exports.genericTank],
  GUNS: [
    {
      POSITION: [30, 5, 1, 8, 0, 0, 0],
    },
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [18, 36, 0, 0, 190, 1],
      TYPE: [
        exports.beyblade1Bolt1,
        {
          INDEPENDENT: true,
        },
      ],
    },
  ],
};
exports.beyblade1Bolt3 = {
  PARENT: [exports.genericTank],
  GUNS: [
    {
      POSITION: [30, 5, 1, 8, 0, 0, 0],
    },
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [18, 36, 0, 0, 190, 1],
      TYPE: [
        exports.beyblade1Bolt2,
        {
          INDEPENDENT: true,
        },
      ],
    },
  ],
};
exports.flail = {
  PARENT: [exports.genericTank],
  LABEL: "Flail",
  STAT_NAMES: statnames.flail,
  TURRETS: [
    {
      POSITION: [6, 10, 0, 0, 190, 0],
      TYPE: [
        exports.flailBolt3,
        {
          INDEPENDENT: true,
        },
      ],
    },
  ],
  SKILL_CAP: [
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    0,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
  ],
};
exports.beyblade0 = {
  PARENT: [exports.genericTank],
  LABEL: "Beyblade",
  STAT_NAMES: statnames.flail,
  TURRETS: [
    {
      POSITION: [6, 10, 0, 0, 190, 0],
      TYPE: [
        exports.beyblade0Bolt3,
        {
          INDEPENDENT: true,
        },
      ],
    },
  ],
  SKILL_CAP: [
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    0,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
  ],
};
exports.beyblade1 = {
  PARENT: [exports.genericTank],
  LABEL: "Beyblade ",
  STAT_NAMES: statnames.flail,
  TURRETS: [
    {
      POSITION: [6, 10, 0, 0, 190, 0],
      TYPE: [
        exports.beyblade1Bolt3,
        {
          INDEPENDENT: true,
        },
      ],
    },
  ],
  SKILL_CAP: [
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    0,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
  ],
};
exports.doubleFlail = {
  PARENT: [exports.genericTank],
  LABEL: "Double Flail",
  STAT_NAMES: statnames.flail,
  TURRETS: [
    {
      POSITION: [6, 10, 0, 0, 190, 0],
      TYPE: [
        exports.flailBolt3,
        {
          INDEPENDENT: true,
        },
      ],
    },
    {
      POSITION: [6, 10, 0, 180, 190, 0],
      TYPE: [
        exports.flailBolt3,
        {
          INDEPENDENT: true,
        },
      ],
    },
  ],
  SKILL_CAP: [
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    0,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
  ],
};
exports.uhhh = {
  PARENT: [exports.genericTank],
  LABEL: "Flail but uhhh. Something's wrong.",
  //CONTROLLERS: ['nearestDifferentMaster'],
  SKILL_CAP: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  TURRETS: [
    {
      POSITION: [6, 10, 0, 0, 190, 0],
      TYPE: [
        exports.flailBolt3,
        {
          INDEPENDENT: true,
        },
      ],
    },
    {
      POSITION: [6, 10, 0, 36, 190, 0],
      TYPE: [
        exports.flailBolt3,
        {
          INDEPENDENT: true,
        },
      ],
    },
    {
      POSITION: [6, 10, 0, 72, 190, 0],
      TYPE: [
        exports.flailBolt3,
        {
          INDEPENDENT: true,
        },
      ],
    },
    {
      POSITION: [6, 10, 0, 108, 190, 0],
      TYPE: [
        exports.flailBolt3,
        {
          INDEPENDENT: true,
        },
      ],
    },
    {
      POSITION: [6, 10, 0, 144, 190, 0],
      TYPE: [
        exports.flailBolt3,
        {
          INDEPENDENT: true,
        },
      ],
    },
    {
      POSITION: [6, 10, 0, 180, 190, 0],
      TYPE: [
        exports.flailBolt3,
        {
          INDEPENDENT: true,
        },
      ],
    },
    {
      POSITION: [6, 10, 0, 216, 190, 0],
      TYPE: [
        exports.flailBolt3,
        {
          INDEPENDENT: true,
        },
      ],
    },
    {
      POSITION: [6, 10, 0, 252, 190, 0],
      TYPE: [
        exports.flailBolt3,
        {
          INDEPENDENT: true,
        },
      ],
    },
    {
      POSITION: [6, 10, 0, 288, 190, 0],
      TYPE: [
        exports.flailBolt3,
        {
          INDEPENDENT: true,
        },
      ],
    },
    {
      POSITION: [6, 10, 0, 324, 190, 0],
      TYPE: [
        exports.flailBolt3,
        {
          INDEPENDENT: true,
        },
      ],
    },
  ],
  SKILL_CAP: [
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    0,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
  ],
};
// smashers
let smshskl = 12; //13;
exports.smash = {
  PARENT: [exports.genericTank],
  LABEL: "Smasher",
  DANGER: 6,
  BODY: {
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 2,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody,
    },
  ],
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
};
exports.probImmortal = {
  PARENT: [exports.genericTank],
  LABEL: "Probably Immortal",
  DANGER: 6,
  BODY: {
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 2,
    HEALTH: base.HEALTH * 336138769342076981237684392463851,
    DAMAGE: base.DAMAGE * 0,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody,
    },
    {
      POSITION: [16, 0, 0, 0, 360, 1],
      TYPE: exports.forAll,
    },
  ],
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
};
exports.megasmash = {
  PARENT: [exports.genericTank],
  LABEL: "Mega-Smasher",
  DANGER: 7,
  BODY: {
    SPEED: base.speed * 1.05,
    FOV: base.FOV * 1.1,
    DENSITY: base.DENSITY * 4,
  },
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [24, 0, 0, 0, 360, 0],
      TYPE: exports.megasmashBody,
    },
  ],
};
exports.spike = {
  PARENT: [exports.genericTank],
  LABEL: "Spike",
  DANGER: 7,
  BODY: {
    SPEED: base.speed * 0.9,
    DAMAGE: base.DAMAGE * 1.1,
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 2,
  },
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [20.5, 0, 0, 0, 360, 0],
      TYPE: exports.spikeBody,
    },
    {
      POSITION: [20.5, 0, 0, 120, 360, 0],
      TYPE: exports.spikeBody,
    },
    {
      POSITION: [20.5, 0, 0, 240, 360, 0],
      TYPE: exports.spikeBody,
    },
  ],
};
exports.weirdspike = {
  PARENT: [exports.genericTank],
  LABEL: "Spike",
  DANGER: 7,
  BODY: {
    DAMAGE: base.DAMAGE * 1.15,
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 1.5,
  },
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [20.5, 0, 0, 0, 360, 0],
      TYPE: exports.spikeBody1,
    },
    {
      POSITION: [20.5, 0, 0, 180, 360, 0],
      TYPE: exports.spikeBody2,
    },
  ],
};
exports.autosmash = makeAuto(exports.smash, "Auto-Smasher", {
  type: exports.autoSmasherTurret,
  size: 11,
});
exports.autosmash.SKILL_CAP = [
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
];

exports.twin = {
  PARENT: [exports.genericTank],
  LABEL: "Twin",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.cephalopod = {
  PARENT: [exports.genericTank],
  LABEL: "Cephalopod",
  DANGER: 7,
  GUNS: [
    {
      POSITION: [12, 8, -1.3, 0, 0, 90, 0],
    },
    {
      POSITION: [12, 8, -1.3, 0, 0, -90, 0],
    },
  ],
  TURRETS: [
    {
      POSITION: [6, 12, 0, 90, 361, 0],
      TYPE: exports.cephalopodArmA,
    },
    {
      POSITION: [6, 12, 0, -90, 361, 0],
      TYPE: exports.cephalopodArmB,
    },
  ],
};
exports.flammenwerfer = {
  PARENT: [exports.genericTank],
  LABEL: "Flammenwerfer",
  DANGER: 7,
  GUNS: [
    {
      POSITION: [12, 8, -1.3, 0, 0, 90, 0],
    },
    {
      POSITION: [12, 8, -1.3, 0, 0, -90, 0],
    },
  ],
  TURRETS: [
    {
      POSITION: [6, 12, 0, 90, 361, 0],
      TYPE: exports.flammenwerferArmA,
    },
    {
      POSITION: [6, 12, 0, -90, 361, 0],
      TYPE: exports.flammenwerferArmB,
    },
  ],
};
exports.apothican = {
  PARENT: [exports.genericTank],
  LABEL: "Apothican",
  DANGER: 7,
  GUNS: [
    {
      POSITION: [12, 8, -1.3, 0, 0, 90, 0],
    },
    {
      POSITION: [12, 8, -1.3, 0, 0, -90, 0],
    },
  ],
  TURRETS: [
    {
      POSITION: [6, 12, 0, 90, 361, 0],
      TYPE: exports.cephalopodArmA,
    },
    {
      POSITION: [6, 12, 0, -90, 361, 0],
      TYPE: exports.cephalopodArmB,
    },
    {
      POSITION: [6, 12, 0, -90, 361, 0],
      TYPE: exports.cephalopodArmA,
    },
    {
      POSITION: [6, 12, 0, 90, 361, 0],
      TYPE: exports.cephalopodArmB,
    },
  ],
};
exports.gunner = {
  PARENT: [exports.genericTank],
  LABEL: "Gunner",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.pelling = {
  PARENT: [exports.genericTank],
  LABEL: "Pelling",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 4, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
exports.snippett = {
  PARENT: [exports.genericTank],
  LABEL: "Snippett",
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.1,
    SPEED: base.SPEED * 0.9,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 4, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.sniper]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
exports.clicker = {
  PARENT: [exports.genericTank],
  LABEL: "Clicker",
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.1,
    SPEED: base.SPEED * 0.9,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 4.5, 1, 0, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 3, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.sniper, g.click]),
        TYPE: exports.bullet,
        TIMES_TO_FIRE: 4,
      },
    },
    {
      POSITION: [5.5, 5, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
exports.clinker = {
  PARENT: [exports.genericTank],
  LABEL: "Clinker",
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.1,
    SPEED: base.SPEED * 0.9,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 4.5, 1, 0, 4, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 3, 1, 0, 4, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pellet,
          g.sniper,
          g.click,
          g.twin,
        ]),
        TYPE: exports.bullet,
        TIMES_TO_FIRE: 4,
      },
    },
    {
      POSITION: [12, 5, -1.8, 0, 4, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 4.5, 1, 0, -4, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 3, 1, 0, -4, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pellet,
          g.sniper,
          g.click,
          g.twin,
        ]),
        TYPE: exports.bullet,
        TIMES_TO_FIRE: 4,
      },
    },
    {
      POSITION: [12, 5, -1.8, 0, -4, 0, 0],
    },
  ],
};
exports.clapper = {
  PARENT: [exports.genericTank],
  LABEL: "Clapper",
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.1,
    SPEED: base.SPEED * 0.9,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 6, 1, 0, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 3, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.sniper, g.click]),
        TYPE: exports.bullet,
        TIMES_TO_FIRE: 6,
      },
    },
    {
      POSITION: [5.5, 6, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
exports.striker = {
  PARENT: [exports.genericTank],
  LABEL: "Striker",
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.1,
    SPEED: base.SPEED * 0.9,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 8, 1, 0, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 6, 1, 0, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 3, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.sniper, g.click]),
        TYPE: exports.bullet,
        TIMES_TO_FIRE: 8,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
exports.cookieClicker = makeAuto(exports.clicker, "Cookie Clicker");
exports.plasher = {
  PARENT: [exports.genericTank],
  LABEL: "Plasher",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 4, 1.4, 8, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.machgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
exports.pelleter = {
  PARENT: [exports.genericTank],
  LABEL: "Pelleter",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 2, 1, 0, -2.5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 2, 1, 0, 2.5, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
exports.macro = {
  PARENT: [exports.genericTank],
  LABEL: "Macro",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 3.5, 1, 0, -3, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 3.5, 1, 0, 3, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 10, -1.5, 6.5, 0, 0, 0],
    },
  ],
};
exports.nature = {
  PARENT: [exports.genericTank],
  LABEL: "Naturalizer",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 2, -2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mach, g.morereload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8, -1.8, 7, 0, 0, 0],
    },
  ],
};
exports.borer = {
  PARENT: [exports.genericTank],
  LABEL: "Borer",
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.1,
    SPEED: base.SPEED * 0.9,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 2, 1, 0, -2.5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.sniper]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 2, 1, 0, 2.5, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.sniper]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
exports.gunnerBorer = {
  PARENT: [exports.genericTank],
  LABEL: "Gunner Borer",
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.1,
    SPEED: base.SPEED * 0.9,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 3.5, 1, 0, 6, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pellet,
          g.sniper,
          g.puregunner,
          g.fast,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, -6, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pellet,
          g.sniper,
          g.puregunner,
          g.fast,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [8, 16, -1.225, 2, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 3.5, 1, 0, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pellet,
          g.sniper,
          g.puregunner,
          g.fast,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 3.5, 1, 0, 3, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pellet,
          g.sniper,
          g.puregunner,
          g.fast,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.sailor = {
  PARENT: [exports.genericTank],
  LABEL: "Sailor",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 2, 1, 0, -2.5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 2, 1, 0, 2.5, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [7, 5, 0.6, 7, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
exports.paddler = {
  PARENT: [exports.genericTank],
  LABEL: "Paddler",
  DANGER: 6,
  GUNS: [
    {
      POSITION: [4.5, 5, 0.6, 7, 5, 10, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [4.5, 5, 0.6, 7, -5, -10, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 2, 1, 0, -2.5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 2, 1, 0, 2.5, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
exports.submachine = {
  PARENT: [exports.genericTank],
  LABEL: "Submachine",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 2, 1, 0, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, 2, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, 0, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [4, 8, 1, 17, 0, 0, 0],
    },
    {
      POSITION: [5.5, 8, -1.4, 6.5, 0, 0, 0],
    },
  ],
};
exports.vulcan = {
  PARENT: [exports.genericTank],
  LABEL: "Vulcan",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 2, 1, 0, -4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, 4, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, -2, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, 2, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 2, 1, 0, -4, 0, 0.9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, 4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, -2, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, 2, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, 0, 0, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [4, 12, 1, 17, 0, 0, 0],
    },
    {
      POSITION: [5.5, 12, -1.3, 6.5, 0, 0, 0],
    },
  ],
};
exports.odin = {
  PARENT: [exports.genericTank],
  LABEL: "Odin",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 2, 1, 0, 3.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, 5.5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, 7.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, 5.5, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 2, 1, 0, -3.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, -5.5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, -7.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, -5.5, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [4, 22, 1, 17, 0, 0, 0],
    },
    {
      POSITION: [5.5, 23, 0.8, 6.5, 0, 0, 0],
    },
    {
      POSITION: [5.5, 23, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [8, 23, 0.5, 0, 0, 180, 0],
    },
  ],
};
exports.redistinctor = {
  PARENT: [exports.genericTank],
  LABEL: "Redistinctor",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 2, 1, 0, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, 12, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, 6, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, 10, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, 8, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 2, 1, 0, 4, 0, 0.9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, 12, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, 6, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, 10, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, 8, 0, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 2, 1, 0, -4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, -12, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, -6, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, -10, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, -8, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 2, 1, 0, -4, 0, 0.9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, -12, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, -6, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, -10, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 2, 1, 0, -8, 0, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [4, 30, 0.9, 6.5, 0, 0, 0],
    },
    {
      POSITION: [4, 30, 1, 17, 0, 0, 0],
    },
    {
      POSITION: [5.5, 30, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [8, 30, 0.3, 0, 0, 180, 0],
    },
  ],
};
exports.puntgun = {
  PARENT: [exports.genericTank],
  LABEL: "Puntgun",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.lessreload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.167],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.lessreload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 2, 1, 0, -2.5, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.lessreload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.lessreload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 2, 1, 0, -2.5, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.lessreload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 2, 1, 0, 2.5, 0, 0.833],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.lessreload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
exports.diploid = {
  PARENT: [exports.genericTank],
  LABEL: "Diploid",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 2, -2, 8, -2, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mach, g.morereload]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 2, -2, 8, 2, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mach, g.morereload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8, -1.8, 7, 0, 0, 0],
    },
  ],
};
exports.duoGunner = makeBackGunner(exports.gunner, "Duo-Gunner");
exports.machinegunner = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Gunner",
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 0.9,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 3, 4.0, -3, 5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 3, 4.0, -3, -5, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 3, 4.0, 0, 2.5, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 3, 4.0, 0, -2.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 3, 4.0, 3, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.autogunner = makeAuto(exports.gunner);
exports.nailgun = {
  PARENT: [exports.genericTank],
  LABEL: "Nailgun",
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.1,
    SPEED: base.SPEED * 0.9,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18.5, 2, 1, 0, -2.5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18.5, 2, 1, 0, 2.5, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 2, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
exports.battery = {
  PARENT: [exports.genericTank],
  LABEL: "Battery",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 3.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.double = {
  PARENT: [exports.genericTank],
  LABEL: "Double Twin",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.tripletwin = {
  PARENT: [exports.genericTank],
  LABEL: "Triple Twin",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 2, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 2, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 2, 5.5, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 2, -5.5, 120, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 2, 5.5, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 2, -5.5, 240, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.aurinator = {
  PARENT: [exports.genericTank],
  LABEL: "Aurinator",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 120, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 240, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: [exports.auraParent],
    },
  ],
};
exports.autodouble = makeAuto(exports.double, "Auto-Double");
exports.split = {
  PARENT: [exports.genericTank],
  LABEL: "Hewn Double",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 5.5, 25, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, -5.5, -25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.superior = {
  PARENT: [exports.genericTank],
  LABEL: "Superior",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 5.5, 205, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, -5.5, 155, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 1.5, 1, 0, -3, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mach, g.shotgun]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [13, 1.5, 1, 0, 3, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mach, g.shotgun]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [13, 2.5, 1, 0, -3, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mach, g.shotgun]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [13, 2.5, 1, 0, 3, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mach, g.shotgun]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [17, 3.5, 1, 0, -3, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pellet,
          g.mach,
          g.shotgun,
          g.fake,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [17, 3.5, 1, 0, 3, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pellet,
          g.mach,
          g.shotgun,
          g.fake,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [14, 3.5, 1, 0, -3, 0, 0.25],
    },
    {
      POSITION: [14, 3.5, 1, 0, 3, 0, 0.75],
    },
    {
      POSITION: [5.5, 10, -1.5, 6.5, 0, 0, 0],
    },
  ],
};

exports.bent = {
  PARENT: [exports.genericTank],
  LABEL: "Triple Shot",
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 0.9,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, -2, -20, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 2, 20, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.bentdouble = {
  PARENT: [exports.genericTank],
  LABEL: "Bent Double",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, -1, -25, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 1, 25, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, -1, 155, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 1, -155, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.penta = {
  PARENT: [exports.genericTank],
  LABEL: "Penta Shot",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.85,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, -3, -30, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 3, 30, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, -2, -15, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 2, 15, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.benthybrid = makeHybrid(exports.bent, "Bent Hybrid");

exports.triple = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    FOV: base.FOV * 1.05,
  },
  LABEL: "Triplet",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.quint = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.1,
  },
  LABEL: "Quintuplet",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 8, 1, 0, 5, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 8, 1, 0, -5, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 3, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, -3, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.symTriplet = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Symmetric Triplet",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 2, 1, 0, 7.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 2, 1, 0, 3.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 8, 1, 0, 5.5, 0, 0],
    },
    {
      POSITION: [18, 8, 1, 0, -5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.symQuint = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Symmetric Quintuplet",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 2, 1, 0, 7.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 2, 1, 0, 3.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 2, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 8, 1, 0, 5.5, 0, 0],
    },
    {
      POSITION: [20, 6, 1, 0, -5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.hunter]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, -5.5, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.dual = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  BODY: {
    ACCEL: base.ACCEL * 0.8,
    FOV: base.FOV * 1.1,
  },
  LABEL: "Dual",
  ZOOM: 400,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 7, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.dual,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
        LABEL: "Small",
      },
    },
    {
      POSITION: [18, 7, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.dual,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
        LABEL: "Small",
      },
    },
    {
      POSITION: [16, 8.5, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.dual]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 8.5, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.dual]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.concatinator = {
  PARENT: [exports.genericTank],
  LABEL: "Concatinator",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.8,
    FOV: 1.25,
  },
  ZOOM: 400,
  GUNS: [
    {
      POSITION: [13.2, 5.3, 1, 0, 5.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.dual2,
          g.bitlessdamage,
          g.halfreload,
          g.bitlessreload,
          g.lesspower,
          g.lesspower,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [11.6, 6.9, 1, 0, 5.75, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.dual2,
          g.halfreload,
          g.bitlessreload,
          g.lesspower,
          g.lesspower,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [10, 8.5, 1, 0, 5.75, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.halfreload,
          g.bitlessreload,
          g.lesspower,
          g.lesspower,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13.2, 5.3, 1, 0, -5.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.dual2,
          g.bitlessdamage,
          g.halfreload,
          g.bitlessreload,
          g.lesspower,
          g.lesspower,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [11.6, 6.9, 1, 0, -5.75, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.dual2,
          g.halfreload,
          g.bitlessreload,
          g.lesspower,
          g.lesspower,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [10, 8.5, 1, 0, -5.75, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.halfreload,
          g.bitlessreload,
          g.lesspower,
          g.lesspower,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21.8, 2.5, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.dual2,
          g.bitlessdamage,
          g.bitlessreload,
          g.lessreload,
          g.lesspower,
          g.lesspower,
          g.halfrecoil,
          g.fast,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20.6, 4, 1, 0, 0, 0, 0.55],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.dual2,
          g.bitlessdamage,
          g.bitlessreload,
          g.lessreload,
          g.lesspower,
          g.lesspower,
          g.halfrecoil,
          g.fast,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19.4, 5.5, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.dual2,
          g.bitlessdamage,
          g.bitlessreload,
          g.lessreload,
          g.lesspower,
          g.lesspower,
          g.halfrecoil,
          g.fast,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18.2, 7, 1, 0, 0, 0, 0.65],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.dual2,
          g.halfreload,
          g.bitlessreload,
          g.lesspower,
          g.lesspower,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 8.5, 1, 0, 0, 0, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.halfreload,
          g.bitlessreload,
          g.lesspower,
          g.lesspower,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [8.2, 3, 1.56, 8, 3.2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.halfreload,
          g.bitlessreload,
          g.lesspower,
          g.lesspower,
          g.halfrecoil,
          g.fast,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [8.2, 3, 1.56, 8, -3.2, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.halfreload,
          g.bitlessreload,
          g.lesspower,
          g.lesspower,
          g.halfrecoil,
          g.fast,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.concatinatorTurret = createAutoGun(exports.concatinator);
exports.concatinatorTurretBoss = createAutoBoss(exports.concatinator);
exports.concatinatorTurretBoss.TURRETS = [
  {
    POSITION: [15, 0, 0, 0, 360, 1],
    TYPE: exports.egg,
  },
];
exports.penultHunter = {
  PARENT: [exports.genericTank],
  LABEL: "Penultimate Hunter",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.8,
    FOV: 1.25,
  },
  GUNS: [
    {
      POSITION: [33, 3.25, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [31.5, 4.5, 1, 0, 0, 0, 0.05],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [30, 6, 1, 0, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [28.5, 7.5, 1, 0, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [27, 9, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [25.5, 10.5, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 12, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22.5, 13.5, 1, 0, 0, 0, 0.35],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 15, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19.5, 16.5, 1, 0, 0, 0, 0.45],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 18, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 18, -1.111, 0, 0, 0, 0],
    },
  ],
};
exports.triamax = {
  PARENT: [exports.genericTank],
  LABEL: "Triamax",
  BODY: {
    FOV: 1.2,
  },
  HAS_NO_RECOIL: true,
  GUNS: [
    {
      POSITION: [14, 2, 1, 0, 7, 0, 2 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.dual2,
          g.halfreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 3, 1, 0, 7, 0, 9 / 12],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.dual2,
          g.halfreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 4, 1, 0, 7, 0, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.dual2,
          g.halfreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [11, 5, 1, 0, 7, 0, 11 / 12],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.halfreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 2, 1, 0, 4.75, 0, 1 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.dual2,
          g.halfreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3, 1, 0, 4.75, 0, 5 / 12],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.dual2,
          g.halfreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 4, 1, 0, 4.75, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.dual2,
          g.halfreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 5, 1, 0, 4.75, 0, 7 / 12],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.halfreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 2, 1, 0, 2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.dual2,
          g.halfreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 3, 1, 0, 2.5, 0, 1 / 12],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.dual2,
          g.halfreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 4, 1, 0, 2.5, 0, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.dual2,
          g.halfreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 5, 1, 0, 2.5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.halfreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 2, 1, 0, -7, 0, 2 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.dual2,
          g.halfreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 3, 1, 0, -7, 0, 9 / 12],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.dual2,
          g.halfreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 4, 1, 0, -7, 0, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.dual2,
          g.halfreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [11, 5, 1, 0, -7, 0, 11 / 12],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.halfreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 2, 1, 0, -4.75, 0, 1 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.dual2,
          g.halfreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3, 1, 0, -4.75, 0, 5 / 12],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.dual2,
          g.halfreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 4, 1, 0, -4.75, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.dual2,
          g.halfreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 5, 1, 0, -4.75, 0, 7 / 12],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.halfreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.dual2,
          g.halfreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 3, 1, 0, -2.5, 0, 1 / 12],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.dual2,
          g.halfreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 4, 1, 0, -2.5, 0, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.dual2,
          g.halfreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 5, 1, 0, -2.5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.dual,
          g.halfreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14.75, 4.4, 1.5, 8, 0, 0, 1 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.halfreload,
          g.halfreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14.25, 5.2, 1.5, 8, 0, 0, 1 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.halfreload,
          g.halfreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13.75, 6, 1.5, 8, 0, 0, 2 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.halfreload,
          g.halfreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.sniper = {
  PARENT: [exports.genericTank],
  LABEL: "Sniper",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8.5, -1.2, 8, 0, 0, 0],
    },
  ],
};
exports.rifle = {
  PARENT: [exports.genericTank],
  LABEL: "Rifle",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.225,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10.5, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [24, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 7, -1.2, 8, 0, 0, 0],
    },
  ],
};
exports.assassin = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Assassin",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.4,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8.5, -1.4, 8, 0, 0, 0],
    },
  ],
};
exports.ranger = {
  PARENT: [exports.genericTank],
  LABEL: "Ranger",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.5,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [32, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8.5, -1.4, 8, 0, 0, 0],
    },
  ],
};
exports.vindicator = {
  PARENT: [exports.genericTank],
  LABEL: "Vindicator",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.4,
    SPEED: base.SPEED * 0.75,
    FOV: base.FOV * 1.7,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [37, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8.5, -1.4, 8, 0, 0, 0],
    },
  ],
};
exports.placeholder1 = {
  PARENT: [exports.genericTank],
  LABEL: "Dematerializer", //Whatever, i'll just call it Dematerializer
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.4,
    SPEED: base.SPEED * 0.75,
    FOV: base.FOV * 1.7,
  },
  TOOLTIP: "Vindicator + Radiolocator + Eliminator | What could go wrong?",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [37, 15, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.destroy,
          g.anni,
          g.elim,
          g.mini,
          g.stream,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [35, 15, 1, 0, 0, 0, 1 / 7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.destroy,
          g.anni,
          g.elim,
          g.mini,
          g.stream,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [33, 15, 1, 0, 0, 0, 2 / 7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.destroy,
          g.anni,
          g.elim,
          g.mini,
          g.stream,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [31, 15, 1, 0, 0, 0, 3 / 7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.destroy,
          g.anni,
          g.elim,
          g.mini,
          g.stream,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [29, 15, 1, 0, 0, 0, 4 / 7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.destroy,
          g.anni,
          g.elim,
          g.mini,
          g.stream,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 15, 1, 0, 0, 0, 5 / 7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.destroy,
          g.anni,
          g.elim,
          g.mini,
          g.stream,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 15, 1, 0, 0, 0, 6 / 7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.destroy,
          g.anni,
          g.elim,
          g.mini,
          g.stream,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 15, -1.667, 15, 0, 0, 0],
    },
    {
      POSITION: [15, 20, 1.25, 0, 0, 0, 0],
    },
  ],
};
var chargerProps = {
  SHOOT_SETTINGS: combineStats([
    g.basic,
    g.sniper,
    g.assass,
    g.charger,
    g.fake,
  ]),
  TYPE: exports.bullet,
};
exports.charger = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Charger",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.4,
  },
  GUNS: [
    {
      POSITION: [37, 2, 1, 0, 4.75, 0, 0],
    },
    {
      POSITION: [37, 2, 1, 0, -4.75, 0, 0],
    },
    {
      POSITION: [1, 8.5, 1, 33, 0, 0, 0.125],
      PROPERTIES: chargerProps,
    },
    {
      POSITION: [1, 8.5, 1, 29, 0, 0, 0.1],
      PROPERTIES: chargerProps,
    },
    {
      POSITION: [1, 8.5, 1, 25, 0, 0, 0.075],
      PROPERTIES: chargerProps,
    },
    {
      POSITION: [1, 8.5, 1, 21, 0, 0, 0.05],
      PROPERTIES: chargerProps,
    },
    {
      POSITION: [1, 8.5, 1, 17, 0, 0, 0.025],
      PROPERTIES: chargerProps,
    },
    {
      POSITION: [1, 8.5, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.charger]),
        TYPE: exports.bullet,
      },
    },
  ],
};
var chargermk2Props = {
  SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
  TYPE: exports.bullet,
};
exports.stacker = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Stacker",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.4,
  },
  GUNS: [
    {
      POSITION: [29, 2, 1, 0, 4.75, 0, 0],
    },
    {
      POSITION: [29, 2, 1, 0, -4.75, 0, 0],
    },
    {
      POSITION: [1.5, 8.5, 1, 25, 0, 0, 0.075],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.charger,
          g.pellet,
          g.fast,
          g.fast,
          g.fast,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1.5, 8.5, 1, 21, 0, 0, 0.05],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.charger,
          g.pellet,
          g.fast,
          g.fast,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1.5, 8.5, 1, 17, 0, 0, 0.025],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.charger, g.pellet, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1.5, 8.5, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.charger, g.pellet]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.antiMaterialRifle = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Anti-Material Rifle",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 2,
  },
  GUNS: [
    {
      POSITION: [30, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.antiMaterialRifle]),
        TYPE: exports.explosiveShard,
      },
    },
    {
      POSITION: [8, 8, 1, 20, 0, 0, 0],
    },
    {
      POSITION: [11, 14, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [15, 10, 1, 0, 0, 0, 0],
    },
  ],
};
exports.antiTankRifle = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Anti-Tank Rifle",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 2,
  },
  GUNS: [
    {
      POSITION: [30, 8, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [34, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.antiMaterialRifle,
        ]),
        TYPE: exports.explosiveShard,
      },
    },
    {
      POSITION: [8, 8, 1, 20, 0, 0, 0],
    },
    {
      POSITION: [11, 14, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [15, 10, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [15, 8, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [15, 10, 1, 0, 0, 180, 0],
    },
  ],
};
g.death = [6, 1e-3, 20, 1, 10, 10, 1, 3, 3, 1, 1, 1, 1];
exports.deathCannon = {
  PARENT: [exports.genericTank], //welp
  LABEL: "Death Cannon",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.5,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 16, 1, 0, 0, 0, 0],
      PROPERTIES: {
        COLOR: 12,
      },
    },
  ],
};
for (let i = 0; i < 25; i++) {
  exports.deathCannon.GUNS.push(
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [42, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.death]),
        TYPE: exports.bullet,
        COLOR: 12,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [42, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.death]),
        TYPE: exports.bullet,
        COLOR: 12,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [42, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.death,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
        COLOR: 12,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [42, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.death,
          g.lowpower,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
        COLOR: 12,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [42, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.death,
          g.lowpower,
          g.lowpower,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
        COLOR: 12,
      },
    }
  );
}
exports.deathCannon.GUNS.push({
  POSITION: [13, 15, -1.333, 0, 0, 0, 1],
  PROPERTIES: {
    COLOR: 12,
  },
});
exports.stalker = {
  PARENT: [exports.genericTank],
  LABEL: "Stalker",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.55,
    SPEED: base.SPEED * 0.85,
    FOV: 1.35,
  },
  INVISIBLE: [0.2, 0.1],
  GUNS: [
    {
      POSITION: [25, 8.5, -1.75, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.autoass = makeAuto(exports.assassin);

exports.hunter = {
  PARENT: [exports.genericTank],
  LABEL: "Hunter",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.25,
  },
  ZOOM: 400,
  TOOLTIP: "Hold RMB to zoom.",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 12, -1.2, 8, 0, 0, 0],
    },
  ],
};
exports.preda = {
  PARENT: [exports.genericTank],
  LABEL: "Predator",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.3,
  },
  ZOOM: 400,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 16, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 16, -1.2, 0, 0, 0, 0],
    },
  ],
};
exports.xHunter = {
  PARENT: [exports.genericTank],
  LABEL: "X-Hunter",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.25,
  },
  ZOOM: 600,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [7, 12, -1.2, 8, 0, 0, 0],
    },
  ],
};
exports.poach = makeHybrid(exports.hunter, "Poacher");
exports.sidewind = {
  PARENT: [exports.genericTank],
  LABEL: "Sidewinder",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.3,
  },
  TOOLTIP: "Right click to make your snakes wave around.",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 11, -0.5, 14, 0, 0, 0],
    },
    {
      POSITION: [21, 12, -1.1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
        TYPE: exports.snake,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
  ],
};
exports.megaHunter = {
  PARENT: [exports.genericTank],
  LABEL: "Mega Hunter",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.25,
  },
  ZOOM: 400,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.pound,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 14, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 14, -1.2, 0, 0, 0, 0],
    },
  ],
};
exports.inferno = {
  PARENT: [exports.genericTank],
  LABEL: "Inferno",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8.5, 0.8, 0, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 12,
      },
    },
    {
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.flare]),
        TYPE: exports.flare,
      },
    },
  ],
};
exports.twinferno = {
  PARENT: [exports.genericTank],
  LABEL: "Twinferno",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 0.8, 0, 8.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 12,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 0.8, 0, -8.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 12,
      },
    },
    {
      POSITION: [24, 8.5, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.flare, g.twin]),
        TYPE: exports.flare,
      },
    },
    {
      POSITION: [24, 8.5, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.flare, g.twin]),
        TYPE: exports.flare,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 22, 0.6, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 12,
      },
    },
  ],
};
exports.firenado = {
  PARENT: [exports.genericTank],
  LABEL: "Firenado",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8.5, 0.8, 0, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 12,
      },
    },
    {
      POSITION: [27, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.flare, g.assass]),
        TYPE: exports.flare,
      },
    },
    {
      POSITION: [5, 8.5, -1.4, 8, 0, 0, 0],
    },
  ],
};
exports.conflag = {
  PARENT: [exports.genericTank],
  LABEL: "Conflagrator",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  ZOOM: 400,
  TOOLTIP: "Hold RMB to zoom.",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8.5, 0.8, 0, 5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 12,
      },
    },
    {
      POSITION: [27, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.flare,
          g.assass,
          g.hunter,
          g.hunter2,
        ]),
        TYPE: exports.flare,
      },
    },
    {
      POSITION: [24, 12, 1, 0, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.flare,
          g.assass,
          g.hunter,
        ]),
        TYPE: exports.flare,
      },
    },
    {
      POSITION: [5, 12, -1.2, 8, 0, 0, 0],
    },
  ],
};
exports.backburner = {
  PARENT: [exports.genericTank],
  LABEL: "Backburner",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8.5, 0.8, 0, 4.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 12,
      },
    },
    {
      POSITION: [24, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.flare, g.pound]),
        TYPE: exports.flare,
      },
    },
  ],
};
exports.camper = {
  PARENT: [exports.genericTank],
  LABEL: "Camper",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8.5, 0.8, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 12,
      },
    },
    {
      POSITION: [24, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.flare, g.pound]),
        TYPE: exports.flare,
      },
    },
    {
      POSITION: [14, 14, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [8, 14, 1.5, 12, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.megatrap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.arsonist = {
  PARENT: [exports.genericTank],
  LABEL: "Arsonist",
  BODY: {
    ACCELERATION: base.ACCEL * 0.9,
    FOV: base.FOV * 1.05,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8.5, 0.8, 0, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 12,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.flare]),
        TYPE: exports.flare,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.flare]),
        TYPE: exports.flare,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.flare]),
        TYPE: exports.flare,
      },
    },
  ],
};

var acidThingy = {
  SHOOT_SETTINGS: combineStats([g.basic]),
  TYPE: exports.bullet,
  CAN_SHOOT: false,
  COLOR: 51,
};
exports.acid = {
  PARENT: [exports.genericTank],
  LABEL: "Acid",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.acid]),
        TYPE: exports.poison,
      },
    },
    {
      POSITION: [14, 4, 1, 0, 0, 0, 0],
      PROPERTIES: acidThingy,
    },
  ],
};
exports.twinAcid = {
  PARENT: [exports.genericTank],
  LABEL: "Twin Acid",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      POSITION: [24, 8.5, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.acid, g.twin]),
        TYPE: exports.poison,
      },
    },
    {
      POSITION: [14, 4, 1, 0, 5.5, 0, 0],
      PROPERTIES: acidThingy,
    },
    {
      POSITION: [24, 8.5, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.acid, g.twin]),
        TYPE: exports.poison,
      },
    },
    {
      POSITION: [14, 4, 1, 0, -5.5, 0, 0],
      PROPERTIES: acidThingy,
    },
  ],
};
exports.disintegrator = {
  PARENT: [exports.genericTank],
  LABEL: "Disintegrator",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.4,
  },
  GUNS: [
    {
      POSITION: [27, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.acid, g.assass]),
        TYPE: exports.poison,
      },
    },
    {
      POSITION: [16, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: acidThingy,
    },
    {
      POSITION: [5, 8.5, -1.4, 8, 0, 0, 0],
    },
  ],
};
exports.acidrive = {
  PARENT: [exports.genericTank],
  LABEL: "Acidrive",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.acid, g.lessreload]),
        TYPE: exports.turretedPoison,
      },
    },
    {
      POSITION: [14, 4, 1, 0, 0, 0, 0],
      PROPERTIES: acidThingy,
    },
  ],
  TURRETS: [
    {
      POSITION: [9, 0, 0, 0, 0, 1],
      TYPE: [exports.square, { COLOR: 16 }],
    },
  ],
};
exports.formaldehyde = {
  PARENT: [exports.genericTank],
  LABEL: "Formaldehyde",
  BODY: {
    ACCELERATION: base.ACCEL * 0.9,
    FOV: base.FOV * 1.05,
  },
  GUNS: [
    {
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.acid]),
        TYPE: exports.poison,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.acid]),
        TYPE: exports.poison,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.acid]),
        TYPE: exports.poison,
      },
    },
    {
      POSITION: [14, 4, 1, 0, 0, 0, 0],
      PROPERTIES: acidThingy,
    },
  ],
};
exports.chlorine = {
  PARENT: [exports.genericTank],
  LABEL: "Chlorine",
  BODY: {
    ACCELERATION: base.ACCEL * 0.9,
    FOV: base.FOV * 1.05,
  },
  TOOLTIP: "You do know this is a war crime, right?",
  GUNS: [
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.acid]),
        TYPE: exports.poison,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.acid]),
        TYPE: exports.poison,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.acid]),
        TYPE: exports.poison,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.acid]),
        TYPE: exports.poison,
      },
    },
    {
      POSITION: [14, 8, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.acid]),
        TYPE: exports.poison,
      },
    },
    {
      POSITION: [14, 4, 1, 0, 0, 0, 0],
      PROPERTIES: acidThingy,
    },
  ],
};
exports.formaldrive = {
  PARENT: [exports.genericTank],
  LABEL: "Formaldrive",
  BODY: {
    ACCELERATION: base.ACCEL * 0.9,
    FOV: base.FOV * 1.05,
  },
  GUNS: [
    {
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.acid]),
        TYPE: exports.turretedPoison,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.acid]),
        TYPE: exports.turretedPoison,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.acid]),
        TYPE: exports.turretedPoison,
      },
    },
    {
      POSITION: [14, 4, 1, 0, 0, 0, 0],
      PROPERTIES: acidThingy,
    },
  ],
  TURRETS: [
    {
      POSITION: [9, 0, 0, 0, 0, 1],
      TYPE: [exports.square, { COLOR: 16 }],
    },
  ],
};
var torchThingy = {
  SHOOT_SETTINGS: combineStats([g.basic]),
  TYPE: exports.bullet,
  CAN_SHOOT: false,
  COLOR: 33,
};
exports.torch = {
  PARENT: [exports.genericTank],
  LABEL: "Torch",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.acid]),
        TYPE: exports.fire,
      },
    },
    {
      POSITION: [14, 4, 1, 0, 0, 0, 0],
      PROPERTIES: torchThingy,
    },
  ],
};
exports.deadlyTorch = {
  PARENT: [exports.genericTank],
  LABEL: "Deadly Torch",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.acid]),
        TYPE: [
          exports.fire,
          {
            ON_DEALT_DAMAGE: (me, them) => {
              torch(me, them, 10, 1);
            },
          },
        ],
      },
    },
    {
      POSITION: [14, 4, 1, 0, 0, 0, 0],
      PROPERTIES: torchThingy,
    },
  ],
};
var chillerThingy = {
  SHOOT_SETTINGS: combineStats([g.basic]),
  TYPE: exports.bullet,
  CAN_SHOOT: false,
  COLOR: 0,
};
exports.chiller = {
  PARENT: [exports.genericTank],
  LABEL: "Chiller",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.chill,
      },
    },
    {
      POSITION: [14, 4, 1, 0, 0, 0, 0],
      PROPERTIES: chillerThingy,
    },
  ],
};
exports.flakist = {
  PARENT: [exports.genericTank],
  LABEL: "Flakist",
  GUNS: [
    {
      POSITION: [10, 10, 1.4, 12, 0, 0, 0],
    },
    {
      POSITION: [20, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.bigger,
        ]),
        TYPE: exports.snowflake,
      },
    },
    {
      POSITION: [14, 8, 1, 0, 0, 0, 0],
      PROPERTIES: chillerThingy,
    },
  ],
};
var allergenThingy = {
  SHOOT_SETTINGS: combineStats([g.basic]),
  TYPE: exports.bullet,
  CAN_SHOOT: false,
  COLOR: 4,
};
exports.allergen = {
  PARENT: [exports.genericTank],
  LABEL: "Allergen",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.swell,
      },
    },
    {
      POSITION: [14, 4, 1, 0, 0, 0, 0],
      PROPERTIES: allergenThingy,
    },
  ],
};
exports.orthodox1 = {
  PARENT: [exports.genericTank],
  LABEL: "Orthodox 1",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.orthodox_portal]),
        TYPE: exports.orthodox1Portal,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [9, 27, 0, 0, 0, 1],
      TYPE: exports.blueCircle,
    },
  ],
};
exports.orthodox2 = {
  PARENT: [exports.genericTank],
  LABEL: "Orthodox 2",
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.45,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.threequartersrof,
          g.orthodox_portal,
          g.bigger,
        ]),
        TYPE: exports.orthodox2Portal,
      },
    },
    {
      POSITION: [6, 5, -1.6, 8, 0, 0, 0],
    },
  ],
  TURRETS: [
    {
      POSITION: [9, 30, 0, 0, 0, 1],
      TYPE: exports.blueCircle,
    },
  ],
};
exports.orthodox3 = {
  PARENT: [exports.genericTank],
  LABEL: "Orthodox 3",
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.55,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [34, 8.5, 1, 0, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [34, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.orthodox_portal,
          g.evenbigger,
        ]),
        TYPE: exports.orthodox3Portal,
        COLOR: 10,
      },
    },
    {
      POSITION: [6, 8.5, -1.4, 8, 0, 0, 0],
    },
    {
      POSITION: [6, 5, -1.6, 8, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 10,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [12, 34, 0, 0, 0, 1],
      TYPE: exports.blueCircle,
    },
  ],
};
exports.oled = {
  PARENT: [exports.genericTank],
  LABEL: "OLED",
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.45,
  },
  GUNS: [
    {
      POSITION: [30, 8.5, 1, 0, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.threequartersrof,
          g.orthodox_portal,
          g.bigger,
        ]),
        TYPE: exports.oledPortal,
        COLOR: 12,
      },
    },
    {
      POSITION: [6, 5, -1.6, 8, 0, 0, 1],
    },
  ],
  TURRETS: [
    {
      POSITION: [9, 30, 0, 0, 0, 1],
      TYPE: [exports.genericEntity, { COLOR: 12 }],
    },
  ],
};
exports.fragmentation = {
  PARENT: [exports.genericTank],
  LABEL: "Fragmentation",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.orthodox_portal]),
        TYPE: exports.fragmentationPortal,
      },
    },
    {
      POSITION: [14, 8, 1, 0, 0, 0, 0],
    },
  ],
  TURRETS: [
    {
      POSITION: [9, 27, 0, 0, 0, 1],
      TYPE: exports.blueCircle,
    },
  ],
};
exports.fractal = {
  PARENT: [exports.genericTank],
  LABEL: "Fractal",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.orthodox_portal]),
        TYPE: exports.fractalPortal,
      },
    },
    {
      POSITION: [14, 4, 1, 0, 2, 0, 0],
    },
    {
      POSITION: [14, 4, 1, 0, -2, 0, 0],
    },
  ],
  TURRETS: [
    {
      POSITION: [9, 27, 0, 0, 0, 1],
      TYPE: exports.blueCircle,
    },
  ],
};
exports.refragmentation = {
  PARENT: [exports.genericTank],
  LABEL: "Refragmentation",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.orthodox_portal]),
        TYPE: exports.refragmentationPortal,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [14, 11, 1, 0, 0, 0, 0],
    },
  ],
  TURRETS: [
    {
      POSITION: [9, 27, 0, 0, 0, 1],
      TYPE: exports.blueCircle,
    },
  ],
};
exports.autoOrthodox1 = makeAuto(exports.orthodox1);
exports.autoOrthodox2 = makeAuto(exports.orthodox2);
exports.autoFragmentation = makeAuto(exports.fragmentation);
exports.initiator = makeHybrid(
  exports.orthodox1,
  "Initiator",
  exports.initiatorDrone
);
exports.initiator = makeHybrid(
  exports.orthodox1,
  "Initiator",
  exports.initiatorDrone
);
exports.paradox = makeHybrid(
  exports.fragmentation,
  "Paradox",
  exports.initiatorDrone
);
exports.inflictor = makeAuto(exports.initiator, "Inflictor");
exports.gimel1 = {
  PARENT: [exports.genericTank],
  LABEL: "Gimel 1",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      POSITION: [17, 10, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 4,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [32, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.orthodox_portal]),
        TYPE: exports.gimel1Portal,
        COLOR: 4,
      },
    },
    {
      POSITION: [6, 5, -1.6, 8, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 4,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [14, 32, 0, 0, 360, 1],
      TYPE: exports.purpleOctagonGimel,
    },
  ],
};
exports.railgun = {
  PARENT: [exports.genericTank],
  LABEL: "Railgun",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  SHAPE: railgun,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 6.5, 1, 0, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.railgun]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 6.5, -1.8, 5, 0, 0, 0],
    },
  ],
};
exports.purge = {
  PARENT: [exports.genericTank],
  LABEL: "Purge",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  SHAPE: railgun,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 12, 1, 0, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.railgun, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 12, -1.4, 0, 0, 0, 0],
    },
  ],
};

exports.cerimatizer = {
  PARENT: [exports.genericTank],
  LABEL: "Cerimatizer",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  SHAPE: cerimatizer,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.sniper, g.cerimatizer]),
        TYPE: exports.explodeSwarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        COLOR: 9,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.sniper, g.cerimatizer]),
        TYPE: exports.explodeSwarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        COLOR: 9,
      },
    },
    {
      POSITION: [10, 16, 1, 0, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 6.5, -1.8, 5, 0, 180, 0],
    },
  ],
};
exports.watcher = {
  PARENT: [exports.genericTank],
  LABEL: "Watcher",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 2,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 8, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.watcher, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.director = {
  PARENT: [exports.genericTank],
  LABEL: "Director",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 4,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.master = {
  PARENT: [exports.genericTank],
  LABEL: "Legacy Commander AKA Master",
  STAT_NAMES: statnames.drone,
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.15,
  },
  FACING_TYPE: "autospin",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
      },
    },
  ],
};
exports.commander = {
  PARENT: [exports.genericTank],
  LABEL: "Commander",
  STAT_NAMES: statnames.drone,
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 180, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 300, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
      },
    },
  ],
};

exports.overseer = {
  PARENT: [exports.genericTank],
  LABEL: "Overseer",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};
exports.overlord = {
  PARENT: [exports.genericTank],
  LABEL: "Overlord",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};
exports.overtrap = {
  PARENT: [exports.genericTank],
  LABEL: "Overtrapper",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.2, 8, 0, 125, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3,
      },
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 235, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3,
      },
    },
    {
      POSITION: [14, 8, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.banshee = {
  PARENT: [exports.genericTank],
  LABEL: "",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1,
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */ POSITION: [10, 8, 0, 0, 80, 0],
      TYPE: exports.bansheegun,
    },
    {
      POSITION: [10, 8, 0, 120, 80, 0],
      TYPE: exports.bansheegun,
    },
    {
      POSITION: [10, 8, 0, 240, 80, 0],
      TYPE: exports.bansheegun,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
      },
    },
  ],
};
exports.autoover = makeAuto(exports.overseer, "Auto-Seer");
exports.overgunner = {
  PARENT: [exports.genericTank],
  LABEL: "Overgunner",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.2, 8, 0, 125, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3,
      },
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 235, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3,
      },
    },
    {
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.slow,
          g.flank,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.slow,
          g.flank,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0],
    },
  ],
};
exports.turretedDrone = makeAuto(exports.drone, "Drone");
exports.overdrive = {
  PARENT: [exports.genericTank],
  LABEL: "Overdrive",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.turretedDrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.turretedDrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [9, 0, 0, 0, 0, 1],
      TYPE: [exports.square, { COLOR: 16 }],
    },
  ],
};
function makeSwarmSpawner(guntype) {
  return {
    PARENT: [exports.genericTank],
    LABEL: "Swarm Spawner",
    BODY: {
      FOV: 2,
    },
    CONTROLLERS: ["nearestDifferentMaster"],
    COLOR: 16,
    AI: {
      NO_LEAD: true,
      SKYNET: true,
      FULL_VIEW: true,
    },
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 15, 0.6, 14, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: guntype,
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm,
        },
      },
    ],
  };
}
exports.cruiserGun = makeSwarmSpawner(combineStats([g.swarm, g.halfreload]));
exports.cruiser = {
  PARENT: [exports.genericTank],
  LABEL: "Cruiser",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.cruiserTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Cruiser",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.battleship = {
  PARENT: [exports.genericTank],
  LABEL: "Battleship",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  FACING_TYPE: "locksFacing",
  BODY: {
    ACCELERATION: base.ACCEL,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 4, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
  ],
};
exports.carrier = {
  PARENT: [exports.genericTank],
  LABEL: "Carrier",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  FACING_TYPE: "locksFacing",
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.3,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 3, 25, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -3, -25, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.autocruiser = makeAuto(exports.cruiser);
exports.wasp = {
  PARENT: [exports.genericTank],
  LABEL: "Wasp",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  FACING_TYPE: "locksFacing",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 5.5, 0.6, 5, 5.25, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 5.5, 0.6, 5, -5.25, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 5.5, 0.6, 7, 3, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 5.5, 0.6, 7, -3, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.beeShooter = createAutoGun({
  PARENT: [exports.genericTank],
  LABEL: "Bee Shooter",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  FACING_TYPE: "locksFacing",
  GUNS: [
    {
      POSITION: [7, 5.5, 0.6, 7, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 5.5, 0.6, 7, -3, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
});
exports.waspStatic = createTurret(exports.wasp);
exports.waspTurret = createAutoGun(exports.wasp);
exports.waspMinion = createMinion(exports.wasp);
exports.waspactilatorTank = {
  PARENT: [exports.genericTank],
  LABEL: "Waspactilator",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 2, -2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mach, g.morereload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8, -1.8, 7, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 2, -2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mach, g.morereload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8, -1.8, 7, 0, 180, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 7, 1, 0, 5.5, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.dual,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
        LABEL: "Small",
      },
    },
    {
      POSITION: [18, 7, 1, 0, -5.5, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.dual,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
        LABEL: "Small",
      },
    },
    {
      POSITION: [16, 8.5, 1, 0, 5.5, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.dual]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 8.5, 1, 0, -5.5, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.dual]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 7, 1, 0, 5.5, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.dual,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
        LABEL: "Small",
      },
    },
    {
      POSITION: [18, 7, 1, 0, -5.5, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.dual,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
        LABEL: "Small",
      },
    },
    {
      POSITION: [16, 8.5, 1, 0, 5.5, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.dual]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 8.5, 1, 0, -5.5, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.dual]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 5.5, 0.6, 5, 5.25, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 5.5, 0.6, 5, -5.25, 90, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 5.5, 0.6, 7, 3, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 5.5, 0.6, 7, -3, 90, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 5.5, 0.6, 5, 5.25, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 5.5, 0.6, 5, -5.25, 270, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 5.5, 0.6, 7, 3, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 5.5, 0.6, 7, -3, 270, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.waspactilator = createTurret(exports.waspactilatorTank);
exports.beehive = {
  PARENT: [exports.genericTank],
  LABEL: "Beehive",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  FACING_TYPE: "locksFacing",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 5.5, 0.6, 5, 5.25, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.autobee,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      POSITION: [7, 5.5, 0.6, 5, -5.25, 90, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 5.5, 0.6, 7, 3, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.autobee,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      POSITION: [7, 5.5, 0.6, 7, -3, 90, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 5.5, 0.6, 5, 5.25, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 5.5, 0.6, 5, -5.25, 270, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.autobee,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      POSITION: [7, 5.5, 0.6, 7, 3, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 5.5, 0.6, 7, -3, 270, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.autobee,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
  ],
};
exports.fortress = {
  PARENT: [exports.genericTank],
  LABEL: "Fortress", //'Palisade',
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.swarm, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 120, 1 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.swarm, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 240, 2 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.swarm, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [14, 9, 1, 0, 0, 60, 0],
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [14, 9, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [14, 9, 1, 0, 0, 300, 0],
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};

exports.underseer = {
  PARENT: [exports.genericTank],
  LABEL: "Underseer",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  SHAPE: 4,
  MAX_CHILDREN: 14,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
  ],
};
exports.necromancer = {
  PARENT: [exports.genericTank],
  LABEL: "Necromancer",
  DANGER: 7,
  STAT_NAMES: statnames.necro,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  SHAPE: 4,
  MAX_CHILDREN: 14,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload,
        ]),
        TYPE: exports.autosunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard",
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload,
        ]),
        TYPE: exports.autosunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard",
      },
    },
  ],
};
exports.necrom_en_suer = {
  PARENT: [exports.genericTank],
  LABEL: "Necrom en suer", //NECROMANCER SUPERIOR TO OVERLORD
  DANGER: 7,
  STAT_NAMES: statnames.necro,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  SHAPE: 4,
  MAX_CHILDREN: 100,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
        ]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
        ]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
        ]),
        TYPE: exports.autosunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard",
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
        ]),
        TYPE: exports.autosunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard",
      },
    },
  ],
};

exports.spawner = {
  PARENT: [exports.genericTank],
  LABEL: "Spawner",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: 1.1,
  },
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [1, 12, 1, 15, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 4,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 12, 1, 8, 0, 0, 0],
    },
  ],
};
exports.factory = {
  PARENT: [exports.genericTank],
  LABEL: "Factory",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: 1.1,
  },
  MAX_CHILDREN: 6,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0],
    },
  ],
};
exports.mob = {
  PARENT: [exports.genericTank],
  LABEL: "Mob",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: 1.1,
  },
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 8.5, 0, 0, 0],
    },
    {
      POSITION: [1, 12, 1, 13, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 5,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.stillMinion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 12, 1, 6, 0, 0, 0],
    },
  ],
};
exports.crowd = {
  PARENT: [exports.genericTank],
  LABEL: "Crowd",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: 1.1,
  },
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 12, 1, 8.5, 0, 0, 0],
    },
    {
      POSITION: [1, 14, 1, 13, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 7,
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.stillMinion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 14, 1, 6, 0, 0, 0],
    },
  ],
};
exports.guidedMob = {
  PARENT: [exports.genericTank],
  LABEL: "Guided Mob",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: 1.1,
  },
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 8.5, 0, 0, 0],
      SHOOT_SETTINGS: combineStats([g.basic]),
      TYPE: exports.bullet,
      CAN_SHOOT: false,
      COLOR: 25,
    },
    {
      POSITION: [1, 12, 1, 13, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 5,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.guidedStillMinion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        COLOR: 25,
      },
    },
    {
      POSITION: [3.5, 12, 1, 6, 0, 0, 0],
      SHOOT_SETTINGS: combineStats([g.basic]),
      TYPE: exports.bullet,
      CAN_SHOOT: false,
      COLOR: 25,
    },
  ],
};
exports.autoSpawner = makeAuto(exports.spawner);
exports.blow = {
  PARENT: [exports.genericTank],
  LABEL: "Blow",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 6, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.machgun]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.draft = {
  PARENT: [exports.genericTank],
  LABEL: "Draft",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 6, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.machgun, g.wind]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [8, 6, 1.4, 8, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.machgun, g.wind]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [8, 6, 1.4, 8, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.machgun, g.wind]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.machine = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Gun",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.machineTurret = createAutoGun(exports.machine);
exports.machinist = makeBackGunner(exports.machine, "Machinist");
exports.diesel = {
  PARENT: [exports.genericTank],
  LABEL: "Diesel",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 10, 1.7, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.doublereload,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.twinMachine = {
  PARENT: [exports.genericTank],
  LABEL: "Twin Machine",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 5.5, 1.4, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 5.5, 1.4, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.twin]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.blaster = {
  PARENT: [exports.genericTank],
  LABEL: "Blaster",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 12, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blaster]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.spray = {
  PARENT: [exports.genericTank],
  LABEL: "Sprinkler",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.sprayOP = {
  PARENT: [exports.genericTank],
  LABEL: "Sprinkler",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.op,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.op]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.sprayTurret = createAutoGun(exports.spray);
exports.redist = {
  PARENT: [exports.genericTank],
  LABEL: "Sprayer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 8, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.saw = {
  PARENT: [exports.genericTank],
  LABEL: "Saw",//ching you get chopped
  HAS_NO_RECOIL: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 4.5, 1, -3, -40, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 6, 1, -3, -40, 90, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7.5, 1, -3, -40, 90, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.preda
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 4.5, 1, -3, -26, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [6, 6, 1.4, -3, -26, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [3, 38, 0.9, -5, -28, 90, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.phoenix = {
  PARENT: [exports.genericTank],
  LABEL: "Phoenix",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
        ALT_FIRE: true,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
        ALT_FIRE: true,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.lava = {
  PARENT: [exports.genericTank],
  LABEL: "Lava",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24.5, 3.5, 1, 0, 0.625, 8, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morespeed,
          g.mach,
          g.twin,
          g.bent,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24.5, 3.5, 1, 0, -0.625, -8, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morespeed,
          g.mach,
          g.twin,
          g.bent,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [26, 3.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morespeed,
          g.mach,
          g.twin,
          g.bent,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.scorch = {
  PARENT: [exports.genericTank],
  LABEL: "Scorcher",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24.5, 3.5, 1, 0, 0.625, 8, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morespeed,
          g.mach,
          g.twin,
          g.bent,
        ]),
        TYPE: exports.bullet,
        ALT_FIRE: true,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24.5, 3.5, 1, 0, -0.625, -8, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morespeed,
          g.mach,
          g.twin,
          g.bent,
        ]),
        TYPE: exports.bullet,
        ALT_FIRE: true,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [26, 3.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morespeed,
          g.mach,
          g.twin,
          g.bent,
        ]),
        TYPE: exports.bullet,
        ALT_FIRE: true,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
        ALT_FIRE: true,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.volcano = {
  PARENT: [exports.genericTank],
  LABEL: "Volcano",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24.5, 3.5, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morespeed,
          g.mach,
          g.twin,
          g.triple,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24.5, 3.5, 1, 0, -2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morespeed,
          g.mach,
          g.twin,
          g.triple,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [26, 3.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morespeed,
          g.mach,
          g.twin,
          g.triple,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.atomizer = {
  PARENT: [exports.genericTank],
  LABEL: "Atomizer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 5, 2, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.mach, g.mach]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.krakatoa = {
  PARENT: [exports.genericTank],
  LABEL: "Krakatoa",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 4, 1.4, 21, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.mach, g.lowpower]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 5, 2, 18, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.mach, g.mach]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.magma = {
  PARENT: [exports.genericTank],
  LABEL: "Magma",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 2.75, 1.5, 18, 0.75, 8, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.mach,
          g.mach,
          g.morespeed,
          g.twin,
          g.bent,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 2.75, 1.5, 18, -0.75, -8, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.mach,
          g.mach,
          g.morespeed,
          g.twin,
          g.bent,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 2.75, 1.5, 20, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.mach,
          g.mach,
          g.morespeed,
          g.twin,
          g.bent,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.infuser = {
  PARENT: [exports.genericTank],
  LABEL: "Infuser",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 14, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blaster, g.destroy]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.gatling = {
  PARENT: [exports.genericTank],
  LABEL: "Gatling Gun",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, 1.4, 10, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.gatling]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.foamer = {
  PARENT: [exports.genericTank],
  LABEL: "Foamer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [11, 8, 1.4, 10, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [11, 8, 1.4, 8, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.widget = {
  PARENT: [exports.genericTank],
  LABEL: "Widget",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [11, 8, 1.4, 11, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [11, 8, 1.4, 9, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [11, 8, 1.4, 7, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.systematizer = {
  PARENT: [exports.genericTank],
  LABEL: "Systematizer", //w
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [11, 8, 1.4, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [11, 8, 1.4, 11, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [11, 8, 1.4, 9, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [11, 8, 1.4, 7, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [11, 8, 1.4, 5, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.equalizer = {
  PARENT: [exports.genericTank],
  LABEL: "Equalizer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.lowpower, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 7, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.lowpower, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [11, 8, 1.4, 10, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [11, 8, 1.4, 8, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.diagonalizer = {
  PARENT: [exports.genericTank],
  LABEL: "Diagonalizer",
  GUNS: [
    {
      POSITION: [28, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.lowpower, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [26, 7, 1, 0, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.lowpower, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 7, 1, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.lowpower, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [11, 8, 1.4, 11, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [11, 8, 1.4, 9, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [11, 8, 1.4, 7, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.twinMachinist = makeBackGunner(exports.twinMachine, "Twin Machinist");
exports.rapidMachinist = makeBackGunner(exports.diesel, "Rapid Machinist");
exports.contractor = makeBackGunner(exports.spray, "Contractor");
exports.burner = {
  PARENT: [exports.genericTank],
  LABEL: "Burner",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 6, 1.4, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flare]),
        TYPE: exports.flare,
        COLOR: 12,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, 0, 0, 0, 0, 1],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 10, -1.6, 0, 0, 0, 1],
    },
  ],
};
exports.flamethrower = {
  PARENT: [exports.genericTank],
  LABEL: "Flamethrower",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 8, 1.6, 16, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mach, g.flare]),
        TYPE: exports.flare,
        COLOR: 12,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 8, 0, 0, 1],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 12, -1.6, 0, 0, 0, 1],
    },
  ],
};
exports.flamegun = {
  PARENT: [exports.genericTank],
  LABEL: "Flamegun",
  GUNS: [
    {
      POSITION: [12, 14, 1.2, 8, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flare, g.flamegun]),
        TYPE: exports.flameBullet,
        COLOR: 16,
      },
    },
    {
      POSITION: [12, 10, 1.3, 6, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.flare,
          g.flamegun,
          g.fake,
        ]),
        TYPE: exports.flameBullet,
        COLOR: 43,
      },
    },
    {
      POSITION: [12, 6, 1.4, 4, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.flare,
          g.flamegun,
          g.fake,
        ]),
        TYPE: exports.flameBullet,
        COLOR: 16,
      },
    },
  ],
};
exports.welder = {
  PARENT: [exports.genericTank],
  LABEL: "Welder",
  GUNS: [
    {
      POSITION: [12, 14, 1.2, 8, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.flare,
          g.flamegun,
          g.pound,
        ]),
        TYPE: exports.welderBullet,
        COLOR: 16,
      },
    },
    {
      POSITION: [12, 10, 1.3, 6, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.flare,
          g.flamegun,
          g.pound,
          g.fake,
        ]),
        TYPE: exports.welderBullet,
        COLOR: 41,
      },
    },
    {
      POSITION: [12, 6, 1.4, 4, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.flare,
          g.flamegun,
          g.pound,
          g.fake,
        ]),
        TYPE: exports.welderBullet,
        COLOR: 16,
      },
    },
  ],
};
exports.cremator = {
  PARENT: [exports.genericTank],
  LABEL: "Cremator",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 6, 1.4, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flare]),
        TYPE: exports.flare,
        COLOR: 12,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 10, -1.4, 10, 0, 0, 1],
    },
    {
      POSITION: [12, 14, 1.2, 8, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flare, g.flamegun]),
        TYPE: exports.flameBullet,
        COLOR: 16,
      },
    },
    {
      POSITION: [12, 10, 1.3, 6, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.flare,
          g.flamegun,
          g.fake,
        ]),
        TYPE: exports.flameBullet,
        COLOR: 43,
      },
    },
    {
      POSITION: [12, 6, 1.4, 4, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.flare,
          g.flamegun,
          g.fake,
        ]),
        TYPE: exports.flameBullet,
        COLOR: 16,
      },
    },
  ],
};
exports.vulcanGun = {
  PARENT: [exports.genericTank],
  LABEL: "Vulcan Gun",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24.5, 3.5, 1, 0, 0.625, 8, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morespeed,
          g.mach,
          g.twin,
          g.bent,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24.5, 3.5, 1, 0, -0.625, -8, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morespeed,
          g.mach,
          g.twin,
          g.bent,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [26, 3.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morespeed,
          g.mach,
          g.twin,
          g.bent,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 14, 1.2, 8, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flare, g.flamegun]),
        TYPE: exports.flameBullet,
        COLOR: 16,
      },
    },
    {
      POSITION: [12, 10, 1.3, 6, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.flare,
          g.flamegun,
          g.fake,
        ]),
        TYPE: exports.flameBullet,
        COLOR: 43,
      },
    },
    {
      POSITION: [12, 6, 1.4, 4, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.flare,
          g.flamegun,
          g.fake,
        ]),
        TYPE: exports.flameBullet,
        COLOR: 16,
      },
    },
  ],
};
exports.leon = {
  PARENT: [exports.genericTank],
  LABEL: "poppwefkfd",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 6, 1.4, 12, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flare, g.op]),
        TYPE: exports.flare,
        COLOR: 12,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 10, -1.4, 0, 0, 0, 1],
    },
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [25, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody,
    },
    {
      POSITION: [10, 8, 0, 36, 190, 0],
      TYPE: exports.machineTurret,
    },
    {
      POSITION: [10, 8, 0, 108, 190, 0],
      TYPE: exports.machineTurret,
    },
    {
      POSITION: [10, 8, 0, 180, 190, 0],
      TYPE: exports.machineTurret,
    },
    {
      POSITION: [10, 8, 0, 252, 190, 0],
      TYPE: exports.machineTurret,
    },
    {
      POSITION: [10, 8, 0, 324, 190, 0],
      TYPE: exports.machineTurret,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7.5, 0, 0, 0, 360, 1],
      TYPE: [exports.miniGuardianProjectile, { CONTROLLERS: ["alwaysFire"] }],
    },
  ],
};
exports.discharger = {
  PARENT: [exports.genericTank],
  LABEL: "Discharger",
  GUNS: [
    {
      POSITION: [3, 19, 0.5, -5, -16, 90, 0],
    },
    {
      POSITION: [3, 19, 0.5, -5, 16, -90, 0],
    },
    {
      POSITION: [15, 10, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.laser]),
        TYPE: exports.beam,
      },
    },
    {
      POSITION: [17, 2, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.laser]),
        TYPE: exports.beam,
        CAN_SHOOT: false,
        COLOR: 12,
      },
    },
    {
      POSITION: [8, 10, -1.4, 4, 0, 0, 0],
    },
  ],
};
exports.lightsaber = {
  PARENT: [exports.genericTank],
  LABEL: "Lightsaber",
  GUNS: [
    {
      POSITION: [3, 19, 0.5, -6, -16, 90, 0],
    },
    {
      POSITION: [3, 19, 0.5, -6, 16, -90, 0],
    },
    {
      POSITION: [15, 12, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.laser, g.blaster]),
        TYPE: exports.beam,
      },
    },
    {
      POSITION: [17, 2, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.laser]),
        TYPE: exports.beam,
        CAN_SHOOT: false,
        COLOR: 12,
      },
    },
    {
      POSITION: [8, 12, -1.3, 4, 0, 0, 0],
    },
  ],
};
exports.deathray = {
  PARENT: [exports.genericTank],
  LABEL: "Deathray",
  GUNS: [
    {
      POSITION: [3, 19, 0.5, -7, -16, 90, 0],
    },
    {
      POSITION: [3, 19, 0.5, -7, 16, -90, 0],
    },
    {
      POSITION: [15, 14, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.laser, g.blaster, g.destroy]),
        TYPE: exports.beam,
      },
    },
    {
      POSITION: [17, 4, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.laser]),
        TYPE: exports.beam,
        CAN_SHOOT: false,
        COLOR: 12,
      },
    },
    {
      POSITION: [12, 14, -1.2, 0, 0, 0, 0],
    },
  ],
};
exports.madhelix = {
  PARENT: [exports.genericTank],
  LABEL: "Madhelix",
  GUNS: [
    {
      POSITION: [3, 19, 0.5, -6, -16, 90, 0],
    },
    {
      POSITION: [3, 19, 0.5, -6, 16, -90, 0],
    },
    {
      POSITION: [15, 12, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.laser,
          g.blaster,
          g.mini,
          g.lessreload,
        ]),
        TYPE: exports.beam,
      },
    },
    {
      POSITION: [13, 12, 1, 6, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.laser,
          g.blaster,
          g.mini,
          g.lessreload,
        ]),
        TYPE: exports.beam,
      },
    },
    {
      POSITION: [11, 12, 1, 6, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.laser,
          g.blaster,
          g.mini,
          g.lessreload,
        ]),
        TYPE: exports.beam,
      },
    },
    {
      POSITION: [17, 2, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.laser]),
        TYPE: exports.beam,
        CAN_SHOOT: false,
        COLOR: 12,
      },
    },
    {
      POSITION: [8, 12, -1.3, 4, 0, 0, 0],
    },
  ],
};
exports.lasergun = {
  PARENT: [exports.genericTank],
  LABEL: "Lasergun",
  GUNS: [
    {
      POSITION: [3, 19, 0.5, -5, -16, 90, 0],
    },
    {
      POSITION: [3, 19, 0.5, -5, 16, -90, 0],
    },
    {
      POSITION: [15, 10, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.laser, g.mini, g.halfreload]),
        TYPE: exports.beam,
      },
    },
    {
      POSITION: [13, 10, 1, 6, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.laser, g.mini, g.halfreload]),
        TYPE: exports.beam,
      },
    },
    {
      POSITION: [11, 10, 1, 6, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.laser, g.mini, g.halfreload]),
        TYPE: exports.beam,
      },
    },
    {
      POSITION: [17, 2, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.laser]),
        TYPE: exports.beam,
        CAN_SHOOT: false,
        COLOR: 12,
      },
    },
    {
      POSITION: [8, 10, -1.4, 4, 0, 0, 0],
    },
  ],
};
exports.mini = {
  PARENT: [exports.genericTank],
  LABEL: "Minigun",
  DANGER: 6,
  BODY: {
    FOV: 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.critter = {
  PARENT: [exports.genericTank],
  LABEL: "Critter",
  DANGER: 6,
  BODY: {
    FOV: 1.2,
  },
  SHAPE: railgun,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 6, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.railgun, g.power]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 10, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.miniOPTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Minigun",
  DANGER: 6,
  BODY: {
    FOV: 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.op]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.op]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.op]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.alternator = makeBackGunner(exports.mini, "Alternator");
exports.stream = {
  PARENT: [exports.genericTank],
  LABEL: "Streamliner",
  DANGER: 7,
  BODY: {
    FOV: 1.3,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [23, 8, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 8, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 8, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.radiolocator = {
  PARENT: [exports.genericTank],
  LABEL: "Radiolocator",
  DANGER: 7,
  BODY: {
    FOV: 1.4,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [29, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [27, 8, 1, 0, 0, 0, 1 / 7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [25, 8, 1, 0, 0, 0, 2 / 7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [23, 8, 1, 0, 0, 0, 3 / 7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 8, 1, 0, 0, 0, 4 / 7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 0, 0, 5 / 7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 8, 1, 0, 0, 0, 6 / 7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.hybridmini = makeHybrid(exports.mini, "Crop Duster");
exports.hybridstream = makeHybrid(exports.stream, "Stream Duster");
exports.zipper = makeZipper(exports.mini, "Zipper");
exports.gusher = makeZipper(exports.stream, "Gusher");
exports.cropZipper = makeZipper(exports.hybridmini, "Crop Zipper");
exports.fusilier = makeFusilier(exports.mini, "Fusilier");
exports.automatonGun = {
  LABEL: "Minigun",
  SHAPE: 4,
  BODY: {
    FOV: 1.6,
  },
  CONTROLLERS: ["onlyAcceptInArc", "nearestDifferentMaster"],
  COLOR: 16,
  GUNS: [
    {
      POSITION: [24, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mini,
          g.auto,
          g.bitlessdamage,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 10, 1, 0, 0, 0, 1 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mini,
          g.auto,
          g.bitlessdamage,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 10, 1, 0, 0, 0, 2 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mini,
          g.auto,
          g.bitlessdamage,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.automaton = {
  PARENT: [exports.genericTank],
  LABEL: "Automaton",
  DANGER: 7,
  BODY: {
    FOV: 1.2,
  },
  TURRETS: [
    {
      POSITION: [11, 8, 0, 0, 90, 0],
      TYPE: exports.automatonGun,
    },
  ],
};
exports.barricade = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Barricade",
  STAT_NAMES: statnames.trap,
  BODY: {
    FOV: 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 8, 1.3, 22, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [4, 8, 1.3, 18, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [4, 8, 1.3, 14, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};

exports.pound = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
  },
  LABEL: "Pounder",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.destroy = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
  },
  LABEL: "Destroyer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.anni = {
  PARENT: [exports.genericTank],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
  },
  LABEL: "Annihilator",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 20, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.elim = {
  PARENT: [exports.genericTank],
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
  },
  LABEL: "Eliminator",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8.5, 25, 1, 12, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.anni,
          g.elim,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 20, 1.25, 0, 0, 0, 0],
    },
  ],
};
exports.spikeshot = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
  },
  LABEL: "Spikeshot",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 12, 0.01, 20, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spikeshot]),
        TYPE: exports.spikeBullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12, 1, 0, 0, 0, 0],
    },
  ],
};
exports.spikestruct = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
  },
  LABEL: "Spikestruct", //boom
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 14, 0.01, 20, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.spikeshot,
        ]),
        TYPE: exports.spikeBullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 14, 1, 0, 0, 0, 0],
    },
  ],
};
exports.banger = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
  },
  LABEL: "Banger", //boom you're ded
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 20, 0.01, 20, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.anni,
          g.spikeshot,
        ]),
        TYPE: exports.spikeBullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 20, 1, 0, 0, 0, 0],
    },
  ],
};
exports.oxyrrhynchium = {
  PARENT: [exports.genericTank],
  LABEL: "Oxyrrhynchium",
  GUNS: [
    {
      POSITION: [18, 14, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2.5, 16, 1.2, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.oxy]),
        TYPE: exports.miniGuardianProjectile,
      },
    },
    {
      POSITION: [10, 9, 0.001, 8, 0, 180, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 5,
      },
    },
    {
      POSITION: [6, 9, 0.6, 7, 0, 180, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 5,
      },
    },
  ],
};
exports.oxyrrhexis = {
  PARENT: [exports.genericTank],
  LABEL: "Oxyrrhexis",
  GUNS: [
    {
      POSITION: [18, 17, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2.5, 19, 1.2, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.oxy,
          g.anni,
          g.bigger,
        ]),
        TYPE: exports.miniGuardianProjectile,
      },
    },
    {
      POSITION: [10, 9, 0.001, 8, 0, 180, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 5,
      },
    },
    {
      POSITION: [6, 9, 0.6, 7, 0, 180, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 5,
      },
    },
  ],
};
exports.oxyrrhexisTurret = createAutoGun(exports.oxyrrhexis);
exports.oxyrrhombium = {
  PARENT: [exports.genericTank],
  LABEL: "Oxyrrhombium",
  GUNS: [
    {
      POSITION: [18, 17, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2.5, 19, 1.2, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.oxy,
          g.anni,
        ]),
        TYPE: exports.miniConstellationProjectile,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [10, 9, 0.001, 8, 0, 180, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 0,
      },
    },
    {
      POSITION: [6, 9, 0.6, 7, 0, 180, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 0,
      },
    },
  ],
};
exports.quintessence = {
  PARENT: [exports.genericTank],
  LABEL: "Quintessence",
  GUNS: [
    {
      POSITION: [18, 19.5, 1.125, 0, 0, 0, 0],
    },
    {
      POSITION: [2.5, 24.5, 1.2, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.oxy,
          g.anni,
          g.smaller,
        ]),
        TYPE: exports.miniQuintetProjectile,
      },
    },
    {
      POSITION: [10, 9, 0.001, 4, 0, 140, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 5,
      },
    },
    {
      POSITION: [10, 9, 0.001, 4, 0, 220, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 5,
      },
    },
    {
      POSITION: [10, 9, 0.001, 6, 0, 160, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 5,
      },
    },
    {
      POSITION: [10, 9, 0.001, 6, 0, 200, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 5,
      },
    },
    {
      POSITION: [10, 9, 0.001, 8, 0, 180, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 5,
      },
    },
    {
      POSITION: [6, 9, 0.6, 7, 0, 180, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 5,
      },
    },
  ],
};
exports.oxyrritium = {
  PARENT: [exports.genericTank],
  LABEL: "Oxyrritium", // Used to be Oxysplitsy
  GUNS: [
    {
      POSITION: [12, 14, 1, 6, -7.5, -25, 0],
    },
    {
      POSITION: [2.5, 16, 1.2, 18, -7.5, -25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.oxy]),
        TYPE: exports.miniGuardianProjectile,
      },
    },
    {
      POSITION: [12, 14, 1, 6, 7.5, 25, 0],
    },
    {
      POSITION: [2.5, 16, 1.2, 18, 7.5, 25, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.oxy]),
        TYPE: exports.miniGuardianProjectile,
      },
    },
    {
      POSITION: [15.6, 0.3, -55, 0, -1.8, 100, 0],
    },
    {
      POSITION: [15.6, 0.3, -55, 0, 1.8, -100, 0],
    },
    {
      POSITION: [10, 9, 0.001, 8, 0, 180, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 5,
      },
    },
    {
      POSITION: [6, 9, 0.6, 7, 0, 180, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 5,
      },
    },
  ],
};

exports.nexusMatter = {
  //Inspired by some peoplez
  PARENT: [exports.genericTank],
  LABEL: "Nexus Matter",
  GUNS: [
    {
      POSITION: [18, 20, 1.5, 0, 0, 0, 0],
    },
    {
      POSITION: [15, 15, 1.5, 0, 0, 0, 0],
    },
    {
      POSITION: [2.5, 34, 1.2, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.anni,
          g.oxy,
        ]),
        TYPE: exports.miniGuardianSTProjectile,
      },
    },
    {
      POSITION: [13, 9, -1.5, 0, 0, 180, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 49,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [9, 13, 0, 180, 0, 0],
      TYPE: exports.nexusBack,
    },
  ],
};
exports.ephialtini = {
  PARENT: [exports.genericTank],
  LABEL: "Ephialtini",
  GUNS: [
    {
      POSITION: [18, 17, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 4,
      },
    },
    {
      POSITION: [18, 14, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2.5, 16, 1.2, 18, 0, 0, 0],
      PROPERTIES: {
        //r R s S h d p spd max rge d s r
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.oxy]),
        TYPE: exports.rookieMissile,
      },
    },
    {
      POSITION: [10, 9, 0.001, 8, 0, 180, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 4,
      },
    },
  ],
};
exports.sentience = {
  PARENT: [exports.genericTank],
  LABEL: "Sentience",
  GUNS: [
    {
      POSITION: [18, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 14,
      },
    },
    {
      POSITION: [18, 11, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [15, 17, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 14,
      },
    },
    {
      POSITION: [15, 14, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2.5, 16, 1.2, 18, 0, 0, 0],
      PROPERTIES: {
        //r R s S h d p spd max rge d s r
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.pound, g.oxy]),
        TYPE: exports.sentinelTrap2,
      },
    },
    {
      POSITION: [10, 9, 0.001, 8, 0, 180, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 14,
      },
    },
  ],
};
exports.hiveshooter = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.speed * 0.8,
  },
  LABEL: "Swarmer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 14, -1.2, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.hive]),
        TYPE: exports.hive,
      },
    },
    {
      POSITION: [15, 12, 1, 5, 0, 0, 0],
    },
  ],
};
exports.combine = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.speed * 0.8,
  },
  LABEL: "Combine",
  GUNS: [
    {
      POSITION: [8, 11, -0.5, 15, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 14, -1.2, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.hive]),
        TYPE: exports.hiveMissile,
      },
    },
    {
      POSITION: [15, 12, 1, 5, 0, 0, 0],
    },
  ],
};
exports.hybrid = makeHybrid(exports.destroy, "Hybrid");
exports.multishot = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Multishot",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
  },
  GUNS: [
    {
      POSITION: [1, 3, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [1, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [15, 12, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [8, 12, -1.2, 4, 0, 0, 0],
    },
  ],
};
exports.birdshot = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Birdshot",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
  },
  GUNS: [
    {
      POSITION: [1, 2, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.shotgun,
          g.fast,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
        TIMES_TO_FIRE: 24,
      },
    },
    {
      POSITION: [15, 10, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.shotgun,
          g.fast,
          g.lessreload,
          g.fake,
        ]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [8, 10, -1.2, 4, 0, 0, 0],
    },
  ],
};
exports.catastrophe = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Catastrophe",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
  },
  GUNS: [
    {
      POSITION: [1, 2, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.shotgun,
          g.fast,
          g.lessreload,
        ]),
        TYPE: exports.explodeBullet2,
        TIMES_TO_FIRE: 24,
      },
    },
    {
      POSITION: [15, 10, 1, 6, 0, 0, 0],
    },
    {
      POSITION: [2, 12, 1, 21, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.shotgun,
          g.fast,
          g.lessreload,
          g.fake,
        ]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [6, 14, -1.2, 4, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.shotgun,
          g.fast,
          g.lessreload,
          g.fake,
        ]),
        TYPE: exports.casing,
        CAN_SHOOT: false,
        COLOR: 12,
      },
    },
    {
      POSITION: [8, 10, -1.2, 4, 0, 0, 0],
    },
    {
      POSITION: [8, 5, -1.6, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.shotgun,
          g.fast,
          g.lessreload,
          g.fake,
        ]),
        TYPE: exports.casing,
        CAN_SHOOT: false,
        COLOR: 12,
      },
    },
  ],
};
exports.shotgun = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Shotgun",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
  },
  GUNS: [
    {
      POSITION: [1, 3, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [1, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 6,
      },
    },
    {
      POSITION: [15, 14, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [8, 14, -1.3, 4, 0, 0, 0],
    },
  ],
};
exports.particleAccelerator = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Particle Accelerator",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: 1.25,
  },
  GUNS: [
    {
      POSITION: [1, 3, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.shotgun,
          g.particleAccel,
          g.fast,
        ]),
        TYPE: exports.realBullet,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [1, 3, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.shotgun,
          g.particleAccel,
        ]),
        TYPE: exports.bullet,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [1, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.shotgun,
          g.particleAccel,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 6,
      },
    },
    {
      POSITION: [21, 12, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.shotgun,
          g.particleAccel,
          g.fake,
        ]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [8, 12, -1.3, 4, 0, 0, 0],
    },
  ],
};
exports.dice = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Dice",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
  },
  GUNS: [
    {
      POSITION: [1, 3, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: [exports.bullet, { MOTION_TYPE: "dice" }],
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [1, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: [exports.casing, { MOTION_TYPE: "dice" }],
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [13, 12, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.casing,
        COLOR: 6,
      },
    },
    {
      POSITION: [8, 12, -1.2, 4, 0, 0, 0],
    },
  ],
};
exports.overpowerer = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Overpowerer",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
  },
  GUNS: [
    {
      POSITION: [1, 3, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.overpowerer,
          g.shotgun,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 2,
      },
    },
    {
      POSITION: [1, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.overpowerer,
          g.shotgun,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 2,
      },
    },
    {
      POSITION: [13, 10, 1.4, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.overpowerer,
          g.shotgun,
          g.fake,
        ]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [8, 12, -1.2, 4, 0, 0, 0],
    },
  ],
};
exports.shortstop = {
  PARENT: [exports.genericTank],
  LABEL: "Shortstop",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 1.5, 1, 0, -3, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mach, g.shotgun]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [13, 1.5, 1, 0, 3, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mach, g.shotgun]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [13, 2.5, 1, 0, -3, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mach, g.shotgun]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [13, 2.5, 1, 0, 3, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.mach, g.shotgun]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [17, 3.5, 1, 0, -3, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pellet,
          g.mach,
          g.shotgun,
          g.fake,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [17, 3.5, 1, 0, 3, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pellet,
          g.mach,
          g.shotgun,
          g.fake,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [14, 3.5, 1, 0, -3, 0, 0.25],
    },
    {
      POSITION: [14, 3.5, 1, 0, 3, 0, 0.75],
    },
    {
      POSITION: [5.5, 10, -1.5, 6.5, 0, 0, 0],
    },
  ],
};
exports.shotgunner = {
  PARENT: [exports.genericTank],
  LABEL: "Shotgunner",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [11, 1.5, 1, 0, -7, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.fast,
          g.mach,
          g.shotgun,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [11, 1.5, 1, 0, 7, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.fast,
          g.mach,
          g.shotgun,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [11, 2.5, 1, 0, -7, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.fast,
          g.mach,
          g.shotgun,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [11, 2.5, 1, 0, 7, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.fast,
          g.mach,
          g.shotgun,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [8, 3.5, 1, 0, -7, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.fast,
          g.mach,
          g.shotgun,
          g.fake,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [8, 3.5, 1, 0, 7, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.fast,
          g.mach,
          g.shotgun,
          g.fake,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 1.5, 1, 0, -3, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.fast,
          g.mach,
          g.shotgun,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [13, 1.5, 1, 0, 3, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.fast,
          g.mach,
          g.shotgun,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [13, 2.5, 1, 0, -3, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.fast,
          g.mach,
          g.shotgun,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [13, 2.5, 1, 0, 3, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.fast,
          g.mach,
          g.shotgun,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [17, 3.5, 1, 0, -3, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.fast,
          g.mach,
          g.shotgun,
          g.fake,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [17, 3.5, 1, 0, 3, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.fast,
          g.mach,
          g.shotgun,
          g.fake,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [13, 3.5, -1.5, 0, -3, 0, 0.25],
    },
    {
      POSITION: [13, 3.5, -1.5, 0, 3, 0, 0.75],
    },
  ],
};
exports.moron = makeHybrid(exports.overpowerer, "Moron");
exports.clusterbomber = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Clusterbomber",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
  },
  GUNS: [
    {
      POSITION: [1, 3, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.shrapnel]),
        TYPE: exports.miniNukeShoe,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [1, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.shrapnel]),
        TYPE: exports.miniNukeShoe,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [15, 8, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.shotgun,
          g.shrapnel,
          g.fake,
        ]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [13, 12, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.shotgun,
          g.shrapnel,
          g.fake,
        ]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [8, 12, -1.2, 4, 0, 0, 0],
    },
  ],
};
exports.cannon = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Cannon",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.power, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [11, 12.5, -1.4, 4, 0, 0, 0],
    },
    {
      POSITION: [11, 8, -1.4, 4, 0, 0, 0],
    },
  ],
};
exports.caster = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Caster",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 14.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.power, g.pound, g.destroy]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 14.5, -20 / 14.5, 0, 0, 0, 0],
    },
    {
      POSITION: [11, 8, -1.4, 4, 0, 0, 0],
    },
  ],
};
exports.doomsayer = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Doomsayer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 19, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.power,
          g.pound,
          g.destroy,
          g.anni,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 19, -20 / 19, 0, 0, 0, 0],
    },
    {
      POSITION: [11, 8, -1.4, 4, 0, 0, 0],
    },
  ],
};
exports.killstreak = {
  PARENT: [exports.genericTank],
  LABEL: "Killstreak",
  DANGER: 6,
  BODY: {
    HEALTH: base.HEALTH * 1,
  },
  TOOLTIP: "Extra little bullet stats when killing.",
  HAS_NO_RECOIL: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false, // def
        SHOOT_ON_DEATH: false, // def
        COLOR: 16, // def
      },
    },
  ],
  ON_KILL: (me, them) => {
    me.skill.spd = 2 + 0.05 * me.killCount.solo;
    me.skill.dam = 2 + 0.05 * me.killCount.solo;
    me.skill.hlt = 2 + 0.05 * me.killCount.solo;
    if (me.killCount.solo >= 5) me.define(exports.killstreak5);
  },
};
exports.killstreak5 = {
  PARENT: [exports.genericTank],
  LABEL: "Killstreak Phase 1",
  DANGER: 6,
  BODY: {
    HEALTH: base.HEALTH * 1.25,
  },
  HAS_NO_RECOIL: true,
  COLOR: 12,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
  ],
  ON_KILL: (me, them) => {
    me.skill.spd = 2.25 + 0.1 * me.killCount.solo;
    me.skill.dam = 2.25 + 0.1 * me.killCount.solo;
    me.skill.hlt = 2.25 + 0.1 * me.killCount.solo;
    if (me.killCount.solo >= 10) me.define(exports.killstreak10);
  },
};
exports.killstreak10 = {
  PARENT: [exports.genericTank],
  LABEL: "Killstreak Phase 2",
  DANGER: 6,
  BODY: {
    HEALTH: base.HEALTH * 1.5,
  },
  HAS_NO_RECOIL: true,
  COLOR: 12,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
  ],
  ON_KILL: (me, them) => {
    me.skill.spd = 2.75 + 0.2 * me.killCount.solo;
    me.skill.dam = 2.75 + 0.2 * me.killCount.solo;
    me.skill.hlt = 2.75 + 0.2 * me.killCount.solo;
    if (me.killCount.solo >= 25) me.define(exports.killstreak25);
  },
};
exports.killstreak25 = {
  PARENT: [exports.genericTank],
  LABEL: "Killstreak Phase 3",
  DANGER: 6,
  HAS_NO_RECOIL: true,
  COLOR: 0,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
  ],
  ON_KILL: (me, them) => {
    me.skill.spd = 5 + 0.3 * me.killCount.solo;
    me.skill.dam = 5 + 0.3 * me.killCount.solo;
    me.skill.hlt = 5 + 0.3 * me.killCount.solo;
    if (me.killCount.solo >= 50) me.define(exports.killstreak50);
  },
};
exports.killstreak50 = {
  PARENT: [exports.genericTank],
  LABEL: "Killstreak Phase 4",
  DANGER: 6,
  HAS_NO_RECOIL: true,
  COLOR: 2,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
  ],
  ON_KILL: (me, them) => {
    me.skill.spd = 10;
    me.skill.dam = 10 + 0.5 * me.killCount.solo;
    me.skill.hlt = 10 + 0.5 * me.killCount.solo;
    if (me.killCount.solo >= 75) me.define(exports.killstreak75);
  },
};
exports.killstreak75 = {
  PARENT: [exports.genericTank],
  LABEL: "Killstreak Phase 5",
  DANGER: 6,
  HAS_NO_RECOIL: true,
  COLOR: 4,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 16, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.anni,
          g.power,
          g.power,
        ]),
        TYPE: exports.bullet,
        ALT_FIRE: true,
        COLOR: 9,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
  ],
  ON_KILL: (me, them) => {
    me.skill.spd = 2 + 0.05 * me.killCount.solo;
    me.skill.dam = 2 + 0.05 * me.killCount.solo;
    me.skill.hlt = 2 + 0.05 * me.killCount.solo;
    if (me.killCount.solo >= 100) me.define(exports.killstreak100);
  },
};
exports.killstreak100 = {
  PARENT: [exports.genericTank],
  LABEL: "Killstreak Phase 6",
  DANGER: 6,
  HAS_NO_RECOIL: true,
  COLOR: 3,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 16, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.anni,
          g.power,
          g.power,
        ]),
        TYPE: exports.bullet,
        ALT_FIRE: true,
        COLOR: 9,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
  ],
  ON_KILL: (me, them) => {
    me.skill.spd = 5 + 0.05 * me.killCount.solo;
    me.skill.dam = 5 + 0.05 * me.killCount.solo;
    me.skill.hlt = 5 + 0.05 * me.killCount.solo;
    if (me.killCount.solo >= 250) me.define(exports.killstreak250);
  },
};
exports.killstreak250 = {
  PARENT: [exports.genericTank],
  LABEL: "Killstreak Phase 7",
  DANGER: 6,
  HAS_NO_RECOIL: true,
  COLOR: 14,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 16, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.anni,
          g.power,
          g.power,
        ]),
        TYPE: exports.bullet,
        ALT_FIRE: true,
        COLOR: 9,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
  ],
  ON_KILL: (me, them) => {
    me.skill.spd = 10;
    me.skill.dam = 5 + 0.05 * me.killCount.solo;
    me.skill.hlt = 5 + 0.05 * me.killCount.solo;
    if (me.killCount.solo >= 500) me.define(exports.killstreak500);
  },
};
exports.killstreak500 = {
  PARENT: [exports.genericTank],
  LABEL: "Killstreak Phase 8",
  DANGER: 6,
  HAS_NO_RECOIL: true,
  COLOR: 1,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 16, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.anni,
          g.power,
          g.power,
        ]),
        TYPE: exports.bullet,
        ALT_FIRE: true,
        COLOR: 9,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
  ],
  ON_KILL: (me, them) => {
    me.skill.spd = 10;
    me.skill.dam = 30 + 0.05 * me.killCount.solo;
    me.skill.hlt = 30 + 0.05 * me.killCount.solo;
  },
};
exports.killstreakPhases = {
  PARENT: [exports.genericTank],
  LABEL: "Killstreak Phases",
  DANGER: 6,
  HAS_NO_RECOIL: true,
  COLOR: 14,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 16, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.anni,
          g.power,
          g.power,
        ]),
        TYPE: exports.bullet,
        ALT_FIRE: true,
        COLOR: 9,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.obliterator = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Obliterator",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.4,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 12.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [9, 12.5, -1.4, 4, 0, 0, 0],
    },
  ],
};
exports.caltrop = {
  PARENT: [exports.genericTank],
  LABEL: "Caltrop",
  STAT_NAMES: statnames.trap,
  GUNS: [
    {
      POSITION: [13, 5, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 5, 1.5, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.caltrop]),
        TYPE: exports.miniTrap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.dummy = {
  PARENT: [exports.genericTank],
  LABEL: "Dummy",
  STAT_NAMES: statnames.trap,
  GUNS: [
    {
      POSITION: [5, 5, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 5, 1.5, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.caltrop]),
        TYPE: exports.miniTrap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.trapper = {
  PARENT: [exports.genericTank],
  LABEL: "Trapper",
  STAT_NAMES: statnames.trap,
  GUNS: [
    {
      POSITION: [14, 8, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.kiloTrapper = {
  PARENT: [exports.genericTank],
  LABEL: "Kilo Trapper",
  STAT_NAMES: statnames.trap,
  GUNS: [
    {
      POSITION: [14, 11, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [6, 11, 1.5, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.pound]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.megaTrapper = {
  PARENT: [exports.genericTank],
  LABEL: "Mega Trapper",
  STAT_NAMES: statnames.trap,
  GUNS: [
    {
      POSITION: [14, 14, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [8, 14, 1.5, 12, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.megatrap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.radiolocaTurret = createAutoGun(exports.radiolocator);
exports.materialCollider = {
  PARENT: [exports.genericTank],
  LABEL: "Material Collider",
  STAT_NAMES: statnames.trap,
  GUNS: [
    {
      POSITION: [14, 14, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [8, 14, 1.5, 12, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.megatrap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24.5, 3.5, 1, 0, 0.625, 8, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morespeed,
          g.mach,
          g.twin,
          g.bent,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24.5, 3.5, 1, 0, -0.625, -8, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morespeed,
          g.mach,
          g.twin,
          g.bent,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [26, 3.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morespeed,
          g.mach,
          g.twin,
          g.bent,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 60, 180, 0],
      TYPE: [exports.auto4gun],
    },
    {
      POSITION: [14, 8, 0, 300, 180, 0],
      TYPE: [exports.auto4gun],
    },
    {
      POSITION: [7, 0, 5, 0, 360, 1],
      TYPE: [exports.radiolocaTurret],
    },
    {
      POSITION: [7, 0, -5, 0, 360, 1],
      TYPE: [exports.radiolocaTurret],
    },
  ],
};
exports.buster = {
  PARENT: [exports.genericTank],
  LABEL: "Buster",
  STAT_NAMES: statnames.trap,
  GUNS: [
    {
      POSITION: [14, 11, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [6, 11, 1.5, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.buster]),
        TYPE: exports.explodeTrap,
        STAT_CALCULATOR: gunCalcNames.trap,
        COLOR: 2,
      },
    },
  ],
};
exports.musketeer = {
  PARENT: [exports.genericTank],
  LABEL: "Musketeer",
  GUNS: [
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun]),
        TYPE: exports.trap,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun]),
        TYPE: exports.trap,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [22, 4, 1, 0, -2.75, 0, 0],
    },
    {
      POSITION: [22, 4, 1, 0, 2.75, 0, 0],
    },
    {
      POSITION: [6, 11, 1.5, 20, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun, g.fake]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [9, 6, -1.225, 4, 0, 180, 0],
    },
  ],
};
exports.bearTrap = {
  PARENT: [exports.genericTank],
  LABEL: "Bear Trap",
  GUNS: [
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun]),
        TYPE: exports.bullet,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun]),
        TYPE: exports.bullet,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun]),
        TYPE: exports.trap,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun]),
        TYPE: exports.trap,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [22, 4, 1, 0, -2.75, 0, 0],
    },
    {
      POSITION: [22, 4, 1, 0, 2.75, 0, 0],
    },
    {
      POSITION: [15, 11, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [6, 11, 1.5, 20, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun, g.fake]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [9, 6, -1.225, 4, 0, 180, 0],
    },
  ],
};
exports.whar = makeHybrid(
  {
    PARENT: [exports.genericTank],
    LABEL: "whar",
    BODY: {
      ACCELERATION: base.ACCEL * 0.7,
      FOV: base.FOV * 1.2,
    },
    GUNS: [
      {
        POSITION: [1, 4, 1, 11, 1, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun]),
          TYPE: exports.bullet,
          TIMES_TO_FIRE: 3,
        },
      },
      {
        POSITION: [1, 3, 1, 13, -1, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun]),
          TYPE: exports.bullet,
          TIMES_TO_FIRE: 3,
        },
      },
      {
        POSITION: [1, 4, 1, 11, 1, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun]),
          TYPE: exports.trap,
          TIMES_TO_FIRE: 3,
        },
      },
      {
        POSITION: [1, 3, 1, 13, -1, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun]),
          TYPE: exports.trap,
          TIMES_TO_FIRE: 3,
        },
      },
      {
        POSITION: [22, 4, 1, 0, -2.75, 0, 0],
      },
      {
        POSITION: [22, 4, 1, 0, 2.75, 0, 0],
      },
      {
        POSITION: [15, 11, 1, 0, 0, 0, 0],
      },
      {
        POSITION: [6, 11, 1.5, 20, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun, g.fake]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [9, 6, -1.225, 4, 0, 180, 0],
      },
    ],
    TURRETS: [
      {
        POSITION: [10, 0, 8, 0, 190, 0],
        TYPE: exports.pelleterAutoTankgun,
      },
      {
        POSITION: [10, 0, -8, 0, 190, 0],
        TYPE: exports.pelleterAutoTankgun,
      },
    ],
  },
  "whar"
);
exports.clasper = {
  PARENT: [exports.genericTank],
  LABEL: "Clasper",
  GUNS: [
    {
      POSITION: [22, 4, 1, 0, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.mach, g.shotgun]),
        TYPE: exports.block,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [22, 3, 1, 0, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.mach, g.shotgun]),
        TYPE: exports.block,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [22, 5.5, 1, 0, -3.25, 0, 0],
    },
    {
      POSITION: [22, 5.5, 1, 0, 3.25, 0, 0],
    },
    {
      POSITION: [6, 14, 1.2, 20, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.block,
          g.mach,
          g.shotgun,
          g.fake,
        ]),
        TYPE: exports.block,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [9, 6, -1.225, 4, 0, 180, 0],
    },
  ],
};
exports.ultraTrapper = {
  PARENT: [exports.genericTank],
  LABEL: "Ultra Trapper",
  STAT_NAMES: statnames.trap,
  GUNS: [
    {
      POSITION: [14, 18, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [8, 18, 1.5, 12, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.megatrap, g.destroy]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.builder = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Builder",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.oldBlock,
      },
    },
  ],
};
exports.engineer = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Engineer",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.75,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [3, 14, 1, 15.5, 0, 0, 0],
    },
    {
      POSITION: [2, 14, 1.3, 18, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 6,
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.pillbox,
        SYNCS_SKILLS: true,
        DESTROY_OLDEST_CHILD: true,
      },
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0],
    },
  ],
};
exports.construct = {
  PARENT: [exports.genericTank],
  LABEL: "Constructor",
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.7,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 18, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 18, 1.2, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
        TYPE: exports.oldBlock,
      },
    },
  ],
};
exports.autobuilder = makeAuto(exports.builder);
exports.conq = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Conqueror",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 14, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 14, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 14, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.oldBlock,
      },
    },
  ],
};
exports.bentboomer = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Boomer",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 10, 1, 8, -2, -35, 0],
    },
    {
      POSITION: [8, 10, 1, 8, 2, 35, 0],
    },
    {
      POSITION: [2, 10, 1.3, 16, -2, -35, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
        TYPE: exports.boomerang,
      },
    },
    {
      POSITION: [2, 10, 1.3, 16, 2, 35, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
        TYPE: exports.boomerang,
      },
    },
  ],
};
exports.boomer = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Boomer",
  STAT_NAMES: statnames.trap,
  FACING_TYPE: "locksFacing",
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 10, 1, 14, 0, 0, 0],
    },
    {
      POSITION: [6, 10, -1.5, 7, 0, 0, 0],
    },
    {
      //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
      //    }, {
      POSITION: [2, 10, 1.3, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang]),
        TYPE: exports.boomerang,
      },
    },
  ],
};
exports.dualBuilder = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Dual Builder",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  ZOOM: 400,
  TOOLTIP: "Hold RMB to zoom.",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, 0, 45, 0],
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.halfdamage]),
        TYPE: exports.oldBlock,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 0, 315, 0],
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 315, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.halfdamage]),
        TYPE: exports.oldBlock,
      },
    },
  ],
};
exports.survivalist = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Survivalist",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      POSITION: [19, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Heavy",
      },
    },
    {
      POSITION: [17, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.survivalBlock,
        MAX_CHILDREN: 1,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, 4.5, 15, 0],
    },
    {
      POSITION: [2, 6, 1.1, 14, 4.5, 15, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.halfdamage]),
        TYPE: exports.block,
      },
    },
    {
      POSITION: [14, 6, 1, 0, -4.5, 345, 0],
    },
    {
      POSITION: [2, 6, 1.1, 14, -4.5, 345, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.halfdamage]),
        TYPE: exports.block,
      },
    },
  ],
};
exports.steampunk = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Steampunk",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  ZOOM: 400,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, 0, 45, 0],
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.halfdamage]),
        TYPE: exports.oldBlock,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 0, 135, 0],
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.halfdamage]),
        TYPE: exports.oldBlock,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 0, 225, 0],
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.halfdamage]),
        TYPE: exports.oldBlock,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 0, 315, 0],
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 315, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.halfdamage]),
        TYPE: exports.oldBlock,
      },
    },
  ],
};
(exports.orbitalstrikep1 = {
  SHAPE: orbitPiece,
  CONTROLLERS: ["reversespin"],
  COLOR: 8,
}),
  (exports.orbitalstrikep2 = {
    SHAPE: orbitPiece,
    CONTROLLERS: ["spin"],
    COLOR: 8,
  }),
  (exports.orbitalstrikep3 = {
    CONTROLLRES: ["reversespin"],
    SHAPE: orbitPiece2,
    COLOR: 8,
    TURRETS: [
      {
        POSITION: [17.5, 0, 0, 45, 361, 0],
        TYPE: [exports.orbitalstrikep1],
      },
      {
        POSITION: [17.5, 0, 0, 45, 361, 0],
        TYPE: [exports.orbitalstrikep2],
      },
      {
        POSITION: [12.5, 0, 0, 0, 361, 0],
        TYPE: [exports.orbitalstrikep1],
      },
      {
        POSITION: [12.5, 0, 0, 0, 361, 0],
        TYPE: [exports.orbitalstrikep2],
      },
    ],
  });
exports.orbitalstrikep4 = {
  CONTROLLRES: ["reversespin"],
  SHAPE: orbitPiece2,
  COLOR: 8,
  TURRETS: [
    {
      POSITION: [10, 0, 0, 0, 361, 0],
      TYPE: [exports.orbitalstrikep3],
    },
    {
      POSITION: [12.5, 0, 0, 0, 361, 0],
      TYPE: [exports.orbitalstrikep1],
    },
    {
      POSITION: [12.5, 0, 0, 0, 361, 0],
      TYPE: [exports.orbitalstrikep2],
    },
  ],
};
exports.orbitalstrikep5 = {
  CONTROLLRES: ["reversespin"],
  SHAPE: orbitPiece2,
  COLOR: 8,
};
exports.orbitalstrikeinsignia = {
  PARENT: [exports.bullet],
  SHAPE: orbitPiece2,
  BODY: {
    RANGE: 35,
  },
  COLOR: 8,
  CONTROLLERS: ["portal"],
  TURRETS: [
    {
      POSITION: [15, 0, 0, 45, 361, 1],
      TYPE: [exports.orbitalstrikep1],
    },
    {
      POSITION: [15, 0, 0, 45, 361, 1],
      TYPE: [exports.orbitalstrikep2],
    },
    {
      POSITION: [12.5, 0, 0, 0, 361, 1],
      TYPE: [exports.orbitalstrikep1],
    },
    {
      POSITION: [12.5, 0, 0, 0, 361, 1],
      TYPE: [exports.orbitalstrikep2],
    },
    {
      POSITION: [10, 0, 0, 0, 361, 1],
      TYPE: [exports.orbitalstrikep4],
    },
    {
      POSITION: [20, 0, 0, 45, 361, 1],
      TYPE: [exports.orbitalstrikep5],
    },
  ],
  GUNS: [
    {
      POSITION: [0, 20, 1, 0, 0, 0, 999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.nospeed]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        SHOOT_ON_DEATH: true,
        AUTOFIRE: true,
      },
    },
  ],
};
exports.orbitalstrike = {
  PARENT: [exports.genericTank],
  LABEL: "Orbital Strike",
  DANGER: 7,
  SKILL_CAP: [9, 9, 9, 9, 0, 9, 9, 9, 9, 9],
  BODY: {
    SPEED: base.SPEED * 0.9,
    FOV: 1.2,
  },
  GUNS: [
    {
      POSITION: [18, 12, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 12, -1.2, 8, 0, 0, 0],
    },
    {
      POSITION: [18, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 8,
      },
    },
    {
      POSITION: [2, 12, 1.2, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.evenbigger,
          g.bigger,
          g.pound,
          g.destroy,
          g.anni,
          g.nodamage,
        ]),
        TYPE: exports.orbitalstrikeinsignia,
        COLOR_OVERRIDE: 8,
      },
    },
    {
      POSITION: [11, 9, 0.01, 7, 0, 200, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 3,
      },
    },
    {
      POSITION: [11, 9, 0.01, 7, 0, 160, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 3,
      },
    },
    {
      POSITION: [9, 11, 0.01, 7, 0, 220, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 8,
      },
    },
    {
      POSITION: [9, 11, 0.01, 7, 0, 140, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 8,
      },
    },
    {
      POSITION: [9, 11, 0.01, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 8,
      },
    },
  ],
};
exports.artillery = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Artillery",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 3, 1, 0, -6, -7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [17, 3, 1, 0, 6, 7, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [19, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Heavy",
      },
    },
  ],
};
exports.mortar = {
  PARENT: [exports.genericTank],
  LABEL: "Mortar",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 3, 1, 0, -8, -7, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [13, 3, 1, 0, 8, 7, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [17, 3, 1, 0, -6, -7, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [17, 3, 1, 0, 6, 7, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [19, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Heavy",
      },
    },
  ],
};
exports.launcher = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15,
  },
  LABEL: "Launcher",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 11, -0.5, 9, 0, 0, 0],
    },
    {
      POSITION: [15, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.skim]),
        TYPE: exports.lilmissile,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
  ],
};
exports.skimmer = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15,
  },
  LABEL: "Skimmer",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 0, 0],
    },
    {
      POSITION: [17, 15, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.missile,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
  ],
};
exports.twister = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15,
  },
  LABEL: "Twister",
  DANGER: 7,
  TOOLTIP: "RMB to make your missile spin in the opposite way.",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 0, 0],
    },
    {
      POSITION: [17, 15, -1.25, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.twistermissile,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
  ],
};
exports.rocketeer = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15,
  },
  LABEL: "Rocketeer",
  DANGER: 7,
  GUNS: [
    {
      POSITION: [10, 12.5, -0.5, 9.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.rocketeer,
        ]),
        TYPE: exports.rocket,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
    {
      POSITION: [16.5, 11.5, -1.5, 0, 0, 0, 0],
    },
  ],
};
exports.chelyabinsk = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15,
  },
  LABEL: "Chelyabinsk",
  DANGER: 7,
  GUNS: [
    {
      POSITION: [10, 12.5, -0.5, 9.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.rocketeer,
          g.mach,
        ]),
        TYPE: exports.rocket,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
    {
      POSITION: [16.5, 11.5, -1.5, 0, 0, 0, 0],
    },
    {
      POSITION: [13.5, 6, -1.5, 0, 0, 180, 0],
    },
  ],
};
exports.shrapnel = {
  PARENT: [exports.genericTank],
  LABEL: "Shrapnel",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
    SPEED: base.SPEED * 0.825,
  },
  GUNS: [
    {
      POSITION: [19.5, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.shrapnel, g.fake]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 9.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.shrapnel]),
        TYPE: exports.miniNukeShoe,
      },
    },
    {
      POSITION: [8, 9.5, -1.4, 5, 0, 0, 0],
    },
  ],
};
exports.crockett = {
  PARENT: [exports.genericTank],
  LABEL: "Crockett",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
    SPEED: base.SPEED * 0.825,
  },
  GUNS: [
    {
      POSITION: [21, 4.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.shrapnel, g.fake]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19.5, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.shrapnel, g.fake]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 9.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.shrapnel]),
        TYPE: exports.nukeShoe,
      },
    },
    {
      POSITION: [8, 9.5, -1.4, 5, 0, 0, 0],
    },
  ],
};
exports.gilder = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15,
  },
  LABEL: "Gilder",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 10, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [17, 13, -1.3, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.gildingmissile,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20.5, 15, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.poisoner = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15,
  },
  LABEL: "Poisoner",
  DANGER: 7,
  GUNS: [
    {
      POSITION: [8, 11, -0.5, 9, 0, 0, 0],
    },
    {
      POSITION: [15, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
          g.bigger,
        ]),
        TYPE: exports.acidMissile,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
    {
      POSITION: [15, 8, 1, 0, 0, 0, 0],
      PROPERTIES: acidThingy,
    },
  ],
};
exports.spread = {
  PARENT: [exports.genericTank],
  LABEL: "Spreadshot",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 4, 1, 0, -1.2, -75, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [14.5, 4, 1, 0, -1.4, -60, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [16, 4, 1, 0, -1.6, -45, 3 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [17.5, 4, 1, 0, -1.8, -30, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [19, 4, 1, 0, -2, -15, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [13, 4, 1, 0, 1.2, 75, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [14.5, 4, 1, 0, 1.4, 60, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [16, 4, 1, 0, 1.6, 45, 3 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [17.5, 4, 1, 0, 1.8, 30, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [19, 4, 1, 0, 2, 15, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [21, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.spreadmain,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Pounder",
      },
    },
  ],
};
exports.pulsar = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
  },
  LABEL: "Pulsar",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.electro, g.pound]),
        TYPE: exports.chargedBeam,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 12, 1, 0, 0, 0, 0],
    },
  ],
};
exports.laser = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
  },
  LABEL: "Laser",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.electro, g.pound, g.destroy]),
        TYPE: exports.chargedBeam,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 16, 1, 0, 0, 0, 0],
    },
  ],
};
exports.supernova = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
  },
  LABEL: "Supernova",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 16, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.electro,
          g.pound,
          g.destroy,
          g.anni,
        ]),
        TYPE: exports.chargedBeam,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 19.5, 1, 0, 0, 0, 0],
    },
  ],
};
exports.hydromaniac = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
  },
  LABEL: "Hydromaniac",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.electro, g.waver, g.pound]),
        TYPE: exports.desmosChargedBeam,
      },
    },
    {
      POSITION: [17, 12, 0.1, 0, 1, -20, 0],
    },
    {
      POSITION: [17, 12, 0.1, 0, -1, 20, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 12, 1, 0, 0, 0, 0],
    },
  ],
};
exports.escalator = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
  },
  LABEL: "Escalator",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.electro,
          g.waver,
          g.pound,
          g.destroy,
        ]),
        TYPE: exports.desmosChargedBeam,
      },
    },
    {
      POSITION: [18, 12, 0.1, 0, -2, -18, 0],
    },
    {
      POSITION: [18, 12, 0.1, 0, 2, 18, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 16, 1, 0, 0, 0, 0],
    },
  ],
};

exports.flank = {
  PARENT: [exports.genericTank],
  LABEL: "Flank Guard",
  BODY: {
    SPEED: base.SPEED * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.hexa = {
  PARENT: [exports.genericTank],
  LABEL: "Hexa Tank",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 300, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.octo = {
  PARENT: [exports.genericTank],
  LABEL: "Octo Tank",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 45, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 135, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 225, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 315, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.storm = makeMulti(
  {
    PARENT: [exports.genericTank],
    LABEL: "Storm",
    DANGER: 7,
    GUNS: [
      {
        POSITION: [15, 3.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
          TYPE: exports.bullet,
        },
      },
      {
        POSITION: [15, 3.5, 1, 0, 0, 36, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
          TYPE: exports.bullet,
        },
      },
    ],
  },
  "Storm",
  5
);
exports.cyclone = makeMulti(
  {
    PARENT: [exports.genericTank],
    LABEL: "Cyclone",
    DANGER: 7,
    GUNS: [
      {
        POSITION: [15, 3.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
          TYPE: exports.bullet,
        },
      },
      {
        POSITION: [15, 3.5, 1, 0, 0, 30, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
          TYPE: exports.bullet,
        },
      },
      {
        POSITION: [15, 3.5, 1, 0, 0, 60, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
          TYPE: exports.bullet,
        },
      },
      {
        POSITION: [15, 3.5, 1, 0, 0, 90, 0.75],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
          TYPE: exports.bullet,
        },
      },
    ],
  },
  "Cyclone",
  3
);
exports.blitz = makeMulti(
  {
    PARENT: [exports.genericTank],
    LABEL: "Blitz",
    DANGER: 7,
    GUNS: [
      {
        POSITION: [7, 3.5, 1.35, 8, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.twin,
            g.puregunner,
            g.fast,
            g.mach,
          ]),
          TYPE: exports.bullet,
        },
      },
      {
        POSITION: [7, 3.5, 1.35, 8, 0, 30, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.twin,
            g.puregunner,
            g.fast,
            g.mach,
          ]),
          TYPE: exports.bullet,
        },
      },
      {
        POSITION: [7, 3.5, 1.35, 8, 0, 60, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.twin,
            g.puregunner,
            g.fast,
            g.mach,
          ]),
          TYPE: exports.bullet,
        },
      },
      {
        POSITION: [7, 3.5, 1.35, 8, 0, 90, 0.75],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.twin,
            g.puregunner,
            g.fast,
            g.mach,
          ]),
          TYPE: exports.bullet,
        },
      },
    ],
  },
  "Blitz",
  3
);
exports.mesocyclone = makeMulti(
  {
    PARENT: [exports.genericTank],
    LABEL: "Mesocyclone",
    DANGER: 7,
    GUNS: [
      {
        POSITION: [15, 3.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
          TYPE: exports.bullet,
        },
      },
      {
        POSITION: [15, 3.5, 1, 0, 0, 30, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
          TYPE: exports.homingBullet,
          COLOR: 12,
        },
      },
      {
        POSITION: [15, 3.5, 1, 0, 0, 60, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
          TYPE: exports.bullet,
        },
      },
      {
        POSITION: [15, 3.5, 1, 0, 0, 90, 0.75],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
          TYPE: exports.homingBullet,
          COLOR: 12,
        },
      },
    ],
  },
  "Mesocyclone",
  3
);
exports.pigeon = {
  PARENT: [exports.genericTank],
  LABEL: "Pigeon",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
        LABEL: "Hexa Tank",
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
        LABEL: "Hexa Tank",
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
        LABEL: "Hexa Tank",
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
        LABEL: "Hexa Tank",
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 300, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
        LABEL: "Hexa Tank",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.heptatrap = (() => {
  let a = 360 / 7,
    d = 1 / 7;
  return {
    PARENT: [exports.genericTank],
    LABEL: "Hepta-Trapper",
    DANGER: 7,
    BODY: {
      SPEED: base.SPEED * 0.8,
    },
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: true,
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 0, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, a, 4 * d],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, a, 4 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 2 * a, 1 * d],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 2 * a, 1 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 3 * a, 5 * d],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 3 * a, 5 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 4 * a, 2 * d],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 4 * a, 2 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 5 * a, 6 * d],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 5 * a, 6 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 6 * a, 3 * d],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 6 * a, 3 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
    ],
  };
})();
exports.hexatrap = makeAuto(
  {
    PARENT: [exports.genericTank],
    LABEL: "Hexa-Trapper",
    DANGER: 7,
    BODY: {
      SPEED: base.SPEED * 0.8,
    },
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: true,
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 0, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 60, 0.5],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 60, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 120, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 120, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 180, 0.5],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 180, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 240, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 240, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 300, 0.5],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 300, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
    ],
  },
  "Hexa-Trapper"
);
exports.barSpinner = {
  PARENT: [exports.genericTank],
  LABEL: "Bar Spinner",
  DANGER: 7,
  TURRETS: [
    {
      POSITION: [12.5, 6, 0, 0, 0, 0],
      TYPE: exports.barSpinnerHolster,
    },
  ],
};
exports.triad = {
  PARENT: [exports.genericTank],
  LABEL: "Triad",
  DANGER: 7,
  TURRETS: [
    {
      POSITION: [12.5, 6, 0, 0, 0, 0],
      TYPE: exports.triadHolster,
    },
  ],
};
exports.spindrive = {
  PARENT: [exports.genericTank],
  LABEL: "Spindrive",
  DANGER: 7,
  TURRETS: [
    {
      POSITION: [12.5, 6, 0, 0, 0, 0],
      TYPE: exports.spindriveHolster,
    },
  ],
};
exports.padoru = {
  PARENT: [exports.genericTank],
  LABEL: "Padoru",
  DANGER: 7,
  TURRETS: [
    {
      POSITION: [12.5, 6, 0, 0, 0, 0],
      TYPE: exports.padoruHolster,
    },
  ],
};
exports.backShield = {
  PARENT: [exports.genericTank],
  LABEL: "Back Shield",
  BODY: {
    SPEED: base.SPEED * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [15, 18, 0, 180, 0, 0],
      TYPE: exports.shield,
    },
  ],
};
exports.tri = {
  PARENT: [exports.genericTank],
  LABEL: "Tri-Angle",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.booster = {
  PARENT: [exports.genericTank],
  LABEL: "Booster",
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.muchmorerecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.rocketBooster = {
  PARENT: [exports.genericTank],
  LABEL: "Rocket Booster",
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2,
  },
  DANGER: 7,
  GUNS: [
    {
      POSITION: [3, 1.4, 1, 16, 1.4, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.rocketBooster]),
        TYPE: exports.bullet,
        LABEL: "Hyperdrive",
      },
    },
    {
      POSITION: [3, 1.4, 1, 16, -1.4, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.rocketBooster]),
        TYPE: exports.bullet,
        LABEL: "Hyperdrive",
      },
    },
    {
      POSITION: [3, 1.4, 1, 16, 4.2, 180, 40],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.rocketBooster]),
        TYPE: exports.bullet,
        LABEL: "Hyperdrive",
      },
    },
    {
      POSITION: [3, 1.4, 1, 16, -4.2, 180, 40],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.rocketBooster]),
        TYPE: exports.bullet,
        LABEL: "Hyperdrive",
      },
    },
    {
      POSITION: [1.5, 1.4, 1, 16, 0, 180, 80],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.rocketBooster]),
        TYPE: exports.bullet,
        LABEL: "Hyperdrive",
      },
    },
    {
      POSITION: [1.5, 1.4, 1, 16, 2.8, 180, 120],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.rocketBooster]),
        TYPE: exports.bullet,
        LABEL: "Hyperdrive",
      },
    },
    {
      POSITION: [1.5, 1.4, 1, 16, -2.8, 180, 120],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.rocketBooster]),
        TYPE: exports.bullet,
        LABEL: "Hyperdrive",
      },
    },
    {
      POSITION: [1.5, 1.4, 1, 16, 5.6, 180, 160],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.rocketBooster]),
        TYPE: exports.bullet,
        LABEL: "Hyperdrive",
      },
    },
    {
      POSITION: [1.5, 1.4, 1, 16, -5.6, 180, 160],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.rocketBooster]),
        TYPE: exports.bullet,
        LABEL: "Hyperdrive",
      },
    },
    {
      POSITION: [16, 15.75, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [14, 14, 1.286, 0, 0, 180, 0],
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
exports.kashmir = makeAuto(
  {
    PARENT: [exports.genericTank],
    DANGER: 7,
    GUNS: [
      {
        POSITION: [3, 50, 1, -1.5, 0, 0, 0],
      },
      {
        POSITION: [2.75, 6, -1.3, 14, 0, 90, 0],
      },
      {
        POSITION: [2.75, 6, -1.3, 14, 0, 270, 0],
      },
      {
        POSITION: [6, 9.75, -1.4, 8, 0, 90, 0],
      },
      {
        POSITION: [6, 9.75, -1.4, 8, 0, 270, 0],
      },
      {
        POSITION: [2.75, 6, 1.3, 24, 0, 90, 0],
      },
      {
        POSITION: [2.75, 6, 1.3, 24, 0, 270, 0],
      },
      {
        POSITION: [3, 1, 1, 20, 29, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.trifront,
            g.kashmir,
          ]),
          TYPE: exports.bullet,
        },
      },
      {
        POSITION: [3, 1, 1, 20, -29, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.trifront,
            g.kashmir,
          ]),
          TYPE: exports.bullet,
        },
      },
      {
        POSITION: [2, 3, 1 / 3, 18, 29, 180, 0],
      },
      {
        POSITION: [2, 3, 1 / 3, 18, -29, 180, 0],
      },
      {
        POSITION: [2.5, 1, 3, 15.5, 29, 180, 0],
      },
      {
        POSITION: [2.5, 1, 3, 15.5, -29, 180, 0],
      },
      {
        POSITION: [2.5, 4, -5 / 4, 13, 29, 180, 0],
      },
      {
        POSITION: [2.5, 4, -5 / 4, 13, -29, 180, 0],
      },
      {
        POSITION: [26, 5, 1, -13, 29, 0, 0],
      },
      {
        POSITION: [26, 5, 1, -13, -29, 0, 0],
      },
      {
        POSITION: [16, 0.275, -55, 0, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.trifront,
            g.kashmir,
          ]),
          TYPE: exports.bullet,
          CAN_SHOOT: false,
          COLOR: 9,
        },
      },
      {
        POSITION: [16, 0.275, -55, 0, 0, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.trifront,
            g.kashmir,
          ]),
          TYPE: exports.bullet,
          CAN_SHOOT: false,
          COLOR: 9,
        },
      },
    ],
  },
  "Kashmir",
  {
    type: exports.smash,
  }
);
exports.richardsonlayer = {
  PARENT: [exports.genericTank],
  SYNC_TURRET_SKILLS: true,
  SHAPE: 4,
  CONTROLLERS: ["slowspin"],
  TURRETS: [
    {
      POSITION: [12, 6, 0, 0, 190, 0],
      TYPE: [exports.auto4gun, { CONTROLLERS: ["obeysMouseRot"] }],
    },
    {
      POSITION: [12, 6, 0, 90, 190, 0],
      TYPE: [exports.auto4gun, { CONTROLLERS: ["obeysMouseRot"] }],
    },
    {
      POSITION: [12, 6, 0, 180, 190, 0],
      TYPE: [exports.auto4gun, { CONTROLLERS: ["obeysMouseRot"] }],
    },
    {
      POSITION: [12, 6, 0, 270, 190, 0],
      TYPE: [exports.auto4gun, { CONTROLLERS: ["obeysMouseRot"] }],
    },
  ],
};
exports.richardson = makeAuto(
  {
    PARENT: [exports.genericTank],
    DANGER: 7,
    GUNS: [
      {
        POSITION: [3, 50, 1, -1.5, 0, 0, 0],
      },
      {
        POSITION: [2.75, 6, -1.3, 14, 0, 90, 0],
      },
      {
        POSITION: [2.75, 6, -1.3, 14, 0, 270, 0],
      },
      {
        POSITION: [6, 9.75, -1.4, 8, 0, 90, 0],
      },
      {
        POSITION: [6, 9.75, -1.4, 8, 0, 270, 0],
      },
      {
        POSITION: [2.75, 6, 1.3, 24, 0, 90, 0],
      },
      {
        POSITION: [2.75, 6, 1.3, 24, 0, 270, 0],
      },
      {
        POSITION: [3, 1, 1, 20, 29, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.trifront,
            g.kashmir,
          ]),
          TYPE: exports.bullet,
        },
      },
      {
        POSITION: [3, 1, 1, 20, -29, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.trifront,
            g.kashmir,
          ]),
          TYPE: exports.bullet,
        },
      },
      {
        POSITION: [2, 3, 1 / 3, 18, 29, 180, 0],
      },
      {
        POSITION: [2, 3, 1 / 3, 18, -29, 180, 0],
      },
      {
        POSITION: [2.5, 1, 3, 15.5, 29, 180, 0],
      },
      {
        POSITION: [2.5, 1, 3, 15.5, -29, 180, 0],
      },
      {
        POSITION: [2.5, 4, -5 / 4, 13, 29, 180, 0],
      },
      {
        POSITION: [2.5, 4, -5 / 4, 13, -29, 180, 0],
      },
      {
        POSITION: [26, 5, 1, -13, 29, 0, 0],
      },
      {
        POSITION: [26, 5, 1, -13, -29, 0, 0],
      },
      {
        POSITION: [16, 0.275, -55, 0, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.trifront,
            g.kashmir,
          ]),
          TYPE: exports.bullet,
          CAN_SHOOT: false,
          COLOR: 9,
        },
      },
      {
        POSITION: [16, 0.275, -55, 0, 0, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.trifront,
            g.kashmir,
          ]),
          TYPE: exports.bullet,
          CAN_SHOOT: false,
          COLOR: 9,
        },
      },
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 5.5, 0.6, 5, 5.25, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
          TYPE: exports.bee,
          STAT_CALCULATOR: gunCalcNames.swarm,
        },
      },
      {
        POSITION: [7, 5.5, 0.6, 5, -5.25, 0, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
          TYPE: exports.bee,
          STAT_CALCULATOR: gunCalcNames.swarm,
        },
      },
      {
        POSITION: [24, 8.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.acid]),
          TYPE: exports.fire,
          COLOR_OVERRIDE: 33,
        },
      },
      {
        POSITION: [14, 4, 1, 0, 0, 0, 0],
        PROPERTIES: torchThingy,
      },
    ],
    TURRETS: [
      {
        POSITION: [13, 0, 0, 0, 360, 1],
        TYPE: exports.richardsonlayer,
      },
    ],
  },
  "Richardson, le creator.",
  {
    type: exports.smash,
    independent: false,
  }
);
exports.fighter = {
  PARENT: [exports.genericTank],
  LABEL: "Fighter",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 8, 1, 0, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 1, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.sidethrower = {
  PARENT: [exports.genericTank],
  LABEL: "Sidethrower",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [11, 8, 0, 75, 120, 0],
      TYPE: exports.flamegunTurret,
    },
    {
      POSITION: [11, 8, 0, -75, 120, 0],
      TYPE: exports.flamegunTurret,
    },
  ],
};
exports.brutalizer = {
  PARENT: [exports.genericTank],
  LABEL: "Surfer",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 1, -90, 9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.bomber = {
  PARENT: [exports.genericTank],
  LABEL: "Bomber",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 130, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
        TYPE: exports.bullet,
        LABEL: "Wing",
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 230, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
        TYPE: exports.bullet,
        LABEL: "Wing",
      },
    },
    {
      POSITION: [14, 8, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.morerecoil]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.autotri = makeAuto(exports.tri);
exports.autotri.BODY = {
  SPEED: base.SPEED,
};
exports.falcon = {
  PARENT: [exports.genericTank],
  LABEL: "Falcon",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
        LABEL: "Assassin",
        ALT_FIRE: true,
      },
    },
    {
      POSITION: [5, 8.5, -1.4, 8, 0, 0, 0],
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.ringSpongler = {
  SHAPE: ring,
  COLOR: 9,
  FACING_TYPE: "autospin",
  SYNC_TURRET_SKILLS: true,
  TURRETS: [
    {
      POSITION: [3, 10, 0, 0, 190, 1],
      TYPE: [exports.autoTankGun],
    },
    {
      POSITION: [3, 10, 0, 45, 190, 1],
      TYPE: [exports.autoTankGun],
    },
    {
      POSITION: [3, 10, 0, 90, 190, 1],
      TYPE: [exports.autoTankGun],
    },
    {
      POSITION: [3, 10, 0, 135, 190, 1],
      TYPE: [exports.autoTankGun],
    },
    {
      POSITION: [3, 10, 0, 180, 190, 1],
      TYPE: [exports.autoTankGun],
    },
    {
      POSITION: [3, 10, 0, 225, 190, 1],
      TYPE: [exports.autoTankGun],
    },
    {
      POSITION: [3, 10, 0, 270, 190, 1],
      TYPE: [exports.autoTankGun],
    },
    {
      POSITION: [3, 10, 0, 315, 190, 1],
      TYPE: [exports.autoTankGun],
    },
  ],
};
exports.auto1 = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-1",
  DANGER: 6,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: exports.autoTankGun,
    },
  ],
};
exports.auto2 = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-2",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 210, 0],
      TYPE: exports.autoTankGun,
    },
    {
      POSITION: [11, 8, 0, 180, 210, 0],
      TYPE: exports.autoTankGun,
    },
  ],
};
exports.mega1 = {
  PARENT: [exports.genericTank],
  LABEL: "Mega-1",
  DANGER: 6,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [12, 0, 0, 0, 360, 1],
      TYPE: exports.heavy3gun,
    },
  ],
};
exports.scather = {
  PARENT: [exports.genericTank],
  LABEL: "Scather",
  DANGER: 6,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [13, 0, 0, 0, 360, 1],
      TYPE: exports.scatherGun,
    },
  ],
};
exports.scourge = {
  PARENT: [exports.genericTank],
  LABEL: "Scourge",
  DANGER: 6,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 0, 0, 0, 360, 1],
      TYPE: exports.scourgeGun,
    },
  ],
};
exports.bane = {
  PARENT: [exports.genericTank],
  LABEL: "Bane",
  DANGER: 6,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: exports.baneGun,
    },
  ],
};
exports.mini3 = {
  PARENT: [exports.genericTank],
  LABEL: "Mini-3",
  FACING_TYPE: "autospin",
  DANGER: 6,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 6, 0, 60, 360, 1],
      TYPE: exports.autoTankGun,
    },
    {
      POSITION: [5, 6, 0, 180, 360, 1],
      TYPE: exports.autoTankGun,
    },
    {
      POSITION: [5, 6, 0, 300, 360, 1],
      TYPE: exports.autoTankGun,
    },
  ],
};
exports.swivel2 = {
  PARENT: [exports.genericTank],
  LABEL: "Swivel-2",
  FACING_TYPE: "autospin",
  DANGER: 6,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 6, 0, 0, 360, 1],
      TYPE: exports.autoTankGun,
    },
    {
      POSITION: [9, 6, 0, 180, 360, 1],
      TYPE: exports.autoTankGun,
    },
  ],
};
exports.autoAuto1 = makeAuto(exports.auto1, -1, { size: 7 });
exports.auto3 = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-3",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.autoTankGun,
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.autoTankGun,
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.autoTankGun,
    },
  ],
};
exports.intersectory = {
  PARENT: [exports.genericTank],
  LABEL: "Intersectory",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.autoTankGun,
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.autoTankGun,
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.autoTankGun,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 6, 0, 60, 360, 1],
      TYPE: [exports.autoTankGun, { INDEPENDENT: true }],
    },
    {
      POSITION: [5, 6, 0, 180, 360, 1],
      TYPE: [exports.autoTankGun, { INDEPENDENT: true }],
    },
    {
      POSITION: [5, 6, 0, 300, 360, 1],
      TYPE: [exports.autoTankGun, { INDEPENDENT: true }],
    },
  ],
};
exports.auto5 = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-5",
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.autoTankGun,
    },
    {
      POSITION: [11, 8, 0, 72, 190, 0],
      TYPE: exports.autoTankGun,
    },
    {
      POSITION: [11, 8, 0, 144, 190, 0],
      TYPE: exports.autoTankGun,
    },
    {
      POSITION: [11, 8, 0, 216, 190, 0],
      TYPE: exports.autoTankGun,
    },
    {
      POSITION: [11, 8, 0, 288, 190, 0],
      TYPE: exports.autoTankGun,
    },
  ],
};
exports.oldauto5 = {
  PARENT: [exports.genericTank],
  LABEL: "Legacy Auto-5",
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto5gun,
    },
    {
      POSITION: [11, 8, 0, 72, 190, 0],
      TYPE: exports.auto5gun,
    },
    {
      POSITION: [11, 8, 0, 144, 190, 0],
      TYPE: exports.auto5gun,
    },
    {
      POSITION: [11, 8, 0, 216, 190, 0],
      TYPE: exports.auto5gun,
    },
    {
      POSITION: [11, 8, 0, 288, 190, 0],
      TYPE: exports.auto5gun,
    },
  ],
};
exports.heavy3 = {
  BODY: {
    SPEED: base.SPEED * 0.95,
  },
  PARENT: [exports.genericTank],
  LABEL: "Mega-3",
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      POSITION: [14, 8, 0, 0, 190, 0],
      TYPE: exports.heavy3gun,
    },
    {
      POSITION: [14, 8, 0, 120, 190, 0],
      TYPE: exports.heavy3gun,
    },
    {
      POSITION: [14, 8, 0, 240, 190, 0],
      TYPE: exports.heavy3gun,
    },
  ],
};
exports.menace = {
  PARENT: [exports.genericTank],
  LABEL: "Menace",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      POSITION: [14, 8, 0, 0, 190, 0],
      TYPE: exports.heavy3gun,
    },
    {
      POSITION: [14, 8, 0, 120, 190, 0],
      TYPE: exports.heavy3gun,
    },
    {
      POSITION: [14, 8, 0, 240, 190, 0],
      TYPE: exports.heavy3gun,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 0, 0, 0, 360, 1],
      TYPE: exports.scourgeGun,
    },
  ],
};
exports.architect = {
  PARENT: [exports.genericTank],
  LABEL: "Architect",
  BODY: {
    SPEED: base.SPEED * 1.1,
  },
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      POSITION: [12, 8, 0, 0, 190, 0],
      TYPE: exports.tritrapgun,
    },
    {
      POSITION: [12, 8, 0, 120, 190, 0],
      TYPE: exports.tritrapgun,
    },
    {
      POSITION: [12, 8, 0, 240, 190, 0],
      TYPE: exports.tritrapgun,
    },
  ],
};
exports.miniRogue = {
  PARENT: [exports.genericTank],
  LABEL: "Mini-Rogue",
  BODY: {
    SPEED: base.SPEED * 1.1,
  },
  DANGER: 6,
  FACING_TYPE: "autospin",
  SHAPE: 6,
  GUNS: [
    {
      POSITION: [4, 6, -1.6, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [4, 6, -1.6, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [4, 6, -1.6, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [10, 8, 0, 0, 190, 0],
      TYPE: exports.tritrapgun,
    },
    {
      POSITION: [10, 8, 0, 120, 190, 0],
      TYPE: exports.tritrapgun,
    },
    {
      POSITION: [10, 8, 0, 240, 190, 0],
      TYPE: exports.tritrapgun,
    },
  ],
};
exports.sniper3 = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Sniper-3",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.25,
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      POSITION: [13, 8, 0, 0, 170, 0],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [13, 8, 0, 120, 170, 0],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [13, 8, 0, 240, 170, 0],
      TYPE: exports.sniper3gun,
    },
  ],
};
exports.auto4 = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  LABEL: "Auto-4",
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [13, 6, 0, 45, 160, 0],
      TYPE: exports.auto4gun,
    },
    {
      POSITION: [13, 6, 0, 135, 160, 0],
      TYPE: exports.auto4gun,
    },
    {
      POSITION: [13, 6, 0, 225, 160, 0],
      TYPE: exports.auto4gun,
    },
    {
      POSITION: [13, 6, 0, 315, 160, 0],
      TYPE: exports.auto4gun,
    },
  ],
};
exports.crowbar = {
  PARENT: [exports.genericTank],
  LABEL: "Crowbar",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [40, 6, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [6, 9, -1.3, 8, 0, 0, 0],
    },
  ],
  TURRETS: [
    {
      POSITION: [6, 40, 0, 0, 360, 1],
      TYPE: [exports.autoTankGun, { INDEPENDENT: true }],
    },
    {
      POSITION: [6, 30, 0, 0, 360, 1],
      TYPE: [exports.autoTankGun, { INDEPENDENT: true }],
    },
    {
      POSITION: [6, 20, 0, 0, 360, 1],
      TYPE: [exports.autoTankGun, { INDEPENDENT: true }],
    },
  ],
};
exports.crane = {
  PARENT: [exports.genericTank],
  LABEL: "Crane",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 6, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [16, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.wind]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [6, 9, -1.3, 8, 0, 0, 0],
    },
  ],
  TURRETS: [
    {
      POSITION: [6, 24, 0, 0, 360, 1],
      TYPE: [exports.tritrapgun],
    },
  ],
};
exports.lespongler = {
  PARENT: [exports.genericTank],
  LABEL: "le spongler",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [40, 6, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [6, 9, -1.3, 8, 0, 0, 0],
    },
  ],
  TURRETS: [
    {
      POSITION: [40, 0, 0, 0, 360, 0],
      TYPE: exports.ringSpongler,
    },
    {
      POSITION: [6, 40, 0, 0, 360, 1],
      TYPE: [exports.autoTankGun, { INDEPENDENT: true }],
    },
    {
      POSITION: [6, 30, 0, 0, 360, 1],
      TYPE: [exports.autoTankGun, { INDEPENDENT: true }],
    },
    {
      POSITION: [6, 20, 0, 0, 360, 1],
      TYPE: [exports.autoTankGun, { INDEPENDENT: true }],
    },
  ],
};

exports.flanktrap = {
  PARENT: [exports.genericTank],
  LABEL: "Trap Guard",
  STAT_NAMES: statnames.generic,
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.pelletGuard = {
  PARENT: [exports.genericTank],
  LABEL: "Pellet Guard",
  STAT_NAMES: statnames.generic,
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 2, 1, 0, -2.5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 2, 1, 0, 2.5, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pellet, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
    {
      POSITION: [13, 8, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.velveter = {
  PARENT: [exports.genericTank],
  LABEL: "Velveter",
  STAT_NAMES: statnames.generic,
  DANGER: 6,
  GUNS: [
    {
      POSITION: [6, 8, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [6, 8, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [10, 8, 0, 0, 190, 0],
      TYPE: exports.pelleterAutoTankgun,
    },
  ],
};
exports.materializer = {
  PARENT: [exports.genericTank],
  LABEL: "Materializer",
  STAT_NAMES: statnames.generic,
  DANGER: 6,
  GUNS: [
    {
      POSITION: [6, 8, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [6, 8, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [10, 8, 0, 0, 190, 0],
      TYPE: exports.gunnerAutoTankgun,
    },
  ],
};
exports.bushwhack = {
  PARENT: [exports.genericTank],
  LABEL: "Bushwhacker",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.morerecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 8.5, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8.5, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.tommy = {
  PARENT: [exports.genericTank],
  LABEL: "Tommy",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 8.5, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8.5, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.waver = {
  PARENT: [exports.genericTank],
  LABEL: "Waver", // Renamed by richardgrechko comeback
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      POSITION: [18, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.waver]),
        TYPE: exports.sineBullet,
      },
    },
    {
      POSITION: [16, 10.5, 0.01, 0, 1, -18, 0],
    },
    {
      POSITION: [16, 10.5, 0.01, 0, -1, 18, 0],
    },
  ],
};
exports.dropship = {
  PARENT: [exports.genericTank],
  LABEL: "Dropship", // Renamed by richardgrechko comeback
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      POSITION: [15, 6, 1, 0, 5, 20, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.waver, g.twin]),
        TYPE: exports.sineBullet,
      },
    },
    {
      POSITION: [15, 6, 1, 0, -5, -20, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.waver, g.twin]),
        TYPE: exports.cosineBullet,
      },
    },
    {
      POSITION: [12, 10, 0.1, 0, -5, -40, 0],
    },
    {
      POSITION: [12, 10, 0.1, 0, 5, 40, 0],
    },
  ],
};
exports.keterDropship = makeAuto(exports.dropship, "Keter Dropship", {
  type: exports.zeppelinTurret,
});
exports.triplex = {
  PARENT: [exports.genericTank],
  LABEL: "Triplex",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      POSITION: [15, 6, 1, 0, 5, 20, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.waver, g.twin]),
        TYPE: exports.sineBullet,
      },
    },
    {
      POSITION: [15, 6, 1, 0, -5, -20, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.waver, g.twin]),
        TYPE: exports.cosineBullet,
      },
    },
    {
      POSITION: [12, 10, 0.1, 0, -5, -40, 0],
    },
    {
      POSITION: [12, 10, 0.1, 0, 5, 40, 0],
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.waver, g.morespeed]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.doubleDropship = {
  PARENT: [exports.genericTank],
  LABEL: "Double Dropship", // Renamed by richardgrechko comeback
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      POSITION: [15, 6, 1, 0, 5, 20, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.waver, g.twin]),
        TYPE: exports.sineBullet,
      },
    },
    {
      POSITION: [15, 6, 1, 0, -5, -20, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.waver, g.twin]),
        TYPE: exports.cosineBullet,
      },
    },
    {
      POSITION: [12, 10, 0.1, 0, -5, -40, 0],
    },
    {
      POSITION: [12, 10, 0.1, 0, 5, 40, 0],
    },
    {
      POSITION: [15, 6, 1, 0, 5, 200, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.waver, g.twin]),
        TYPE: exports.sineBullet2,
      },
    },
    {
      POSITION: [15, 6, 1, 0, -5, 160, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.waver, g.twin]),
        TYPE: exports.cosineBullet2,
      },
    },
    {
      POSITION: [12, 10, 0.1, 0, -5, 140, 0],
    },
    {
      POSITION: [12, 10, 0.1, 0, 5, 220, 0],
    },
  ],
};
exports.quadruplex = {
  PARENT: [exports.genericTank],
  LABEL: "Quadruplex",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      POSITION: [15, 6, 1, 0, 5, 20, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.waver, g.twin]),
        TYPE: exports.sineBullet,
      },
    },
    {
      POSITION: [15, 6, 1, 0, -5, -20, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.waver, g.twin]),
        TYPE: exports.cosineBullet,
      },
    },
    {
      POSITION: [13, 6, 1, 0, 5, 20, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.waver, g.twin]),
        TYPE: exports.cosineBullet,
      },
    },
    {
      POSITION: [13, 6, 1, 0, -5, -20, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.waver, g.twin]),
        TYPE: exports.sineBullet,
      },
    },
    {
      POSITION: [12, 10, 0.1, 0, -5, -40, 0],
    },
    {
      POSITION: [12, 10, 0.1, 0, 5, 40, 0],
    },
  ],
};
exports.machWaver = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Waver",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      POSITION: [12, 8, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.waver, g.mach]),
        TYPE: exports.sineBullet,
      },
    },
    {
      POSITION: [16, 12, 0.1, 0, -0.5, -20, 0],
    },
    {
      POSITION: [16, 12, 0.1, 0, 0.5, 20, 0],
    },
  ],
};
exports.internal = {
  PARENT: [exports.genericTank],
  LABEL: "Internal", // Renamed by richardgrechko comeback
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      POSITION: [18, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.waver, g.pound]),
        TYPE: exports.sineBullet,
      },
    },
    {
      POSITION: [16, 12, 0.1, 0, -1, -20, 0],
    },
    {
      POSITION: [16, 12, 0.1, 0, 1, 20, 0],
    },
  ],
};
exports.riptide = {
  PARENT: [exports.genericTank],
  LABEL: "Riptide", // Renamed by richardgrechko comeback
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      POSITION: [18, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.waver, g.pound, g.destroy]),
        TYPE: exports.sineBullet,
      },
    },
    {
      POSITION: [16, 12, 0.1, 0, -3, -20, 0],
    },
    {
      POSITION: [16, 12, 0.1, 0, 3, 20, 0],
    },
  ],
};
exports.repeater = {
  PARENT: [exports.genericTank],
  LABEL: "Repeater",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      POSITION: [18, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.waver]),
        TYPE: exports.splitSineBullet,
      },
    },
    {
      POSITION: [13, 12, 0.01, 0, -1.5, -20, 0],
    },
    {
      POSITION: [13, 12, 0.01, 0, 1.5, 20, 0],
    },
    {
      POSITION: [16, 10.5, 0.01, 0, 1, -18, 0],
    },
    {
      POSITION: [16, 10.5, 0.01, 0, -1, 18, 0],
    },
  ],
};
exports.duplicator = {
  PARENT: [exports.genericTank],
  LABEL: "Duplicator",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      POSITION: [15, 6, 1, 0, 5, 20, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.waver, g.twin]),
        TYPE: exports.splitSineBullet,
      },
    },
    {
      POSITION: [15, 6, 1, 0, -5, -20, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.waver, g.twin]),
        TYPE: exports.splitCosineBullet,
      },
    },
    {
      POSITION: [12, 10, 0.1, 0, -5, -60, 0],
    },
    {
      POSITION: [12, 10, 0.1, 0, 5, 60, 0],
    },
    {
      POSITION: [13, 10, 0.1, 0, -5, -40, 0],
    },
    {
      POSITION: [13, 10, 0.1, 0, 5, 40, 0],
    },
  ],
};
exports.multiplier = {
  PARENT: [exports.genericTank],
  LABEL: "Multiplier",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      POSITION: [18, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.waver]),
        TYPE: exports.split2SineBullet,
      },
    },
    {
      POSITION: [12, 12, 0.01, 0, -4, -20, 0],
    },
    {
      POSITION: [12, 12, 0.01, 0, 4, 20, 0],
    },
    {
      POSITION: [14, 12, 0.01, 0, -1.5, -20, 0],
    },
    {
      POSITION: [14, 12, 0.01, 0, 1.5, 20, 0],
    },
    {
      POSITION: [16, 10.5, 0.01, 0, 1, -18, 0],
    },
    {
      POSITION: [16, 10.5, 0.01, 0, -1, 18, 0],
    },
  ],
};
exports.iterator = {
  PARENT: [exports.genericTank],
  LABEL: "Iterator",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      POSITION: [15, 6, 1, 0, 5, 20, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.waver, g.twin]),
        TYPE: exports.split2SineBullet,
      },
    },
    {
      POSITION: [15, 6, 1, 0, -5, -20, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.waver, g.twin]),
        TYPE: exports.split2CosineBullet,
      },
    },
    {
      POSITION: [11, 10, 0.1, 0, -5, -80, 0],
    },
    {
      POSITION: [11, 10, 0.1, 0, 5, 80, 0],
    },
    {
      POSITION: [12, 10, 0.1, 0, -5, -60, 0],
    },
    {
      POSITION: [12, 10, 0.1, 0, 5, 60, 0],
    },
    {
      POSITION: [13, 10, 0.1, 0, -5, -40, 0],
    },
    {
      POSITION: [13, 10, 0.1, 0, 5, 40, 0],
    },
  ],
};
exports.machinistWaver = makeBackGunner(exports.machWaver, "Machinist Waver");
exports.serene = {
  PARENT: [exports.genericTank],
  LABEL: "Serene",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2.5, 12, 1.2, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.serene]),
        TYPE: exports.homingBullet,
      },
    },
  ],
};
exports.oxyres = {
  PARENT: [exports.genericTank],
  LABEL: "Oxyres",
  GUNS: [
    {
      POSITION: [18, 10, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2.5, 12, 1.2, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.oxyres]),
        TYPE: exports.miniGuardianProjectile,
      },
    },
    {
      POSITION: [10, 9, 0.001, 8, 0, 180, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 5,
      },
    },
    {
      POSITION: [6, 9, 0.6, 7, 0, 180, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 5,
      },
    },
  ],
};
exports.oxysplitsy = {
  PARENT: [exports.genericTank],
  LABEL: "Oxysplitsy", // Tier 4
  GUNS: [
    {
      POSITION: [18, 8, 1, 0, 5.5, 5, 0],
    },
    {
      POSITION: [2.5, 10, 1.2, 18, 5.5, 5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.twin, g.oxyres]),
        TYPE: exports.miniGuardianProjectile,
      },
    },
    {
      POSITION: [18, 8, 1, 0, -5.5, -5, 0],
    },
    {
      POSITION: [2.5, 10, 1.2, 18, -5.5, -5, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.twin, g.oxyres]),
        TYPE: exports.miniGuardianProjectile,
      },
    },
    {
      POSITION: [10, 9, 0.001, 8, 0, 180, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 5,
      },
    },
    {
      POSITION: [6, 9, 0.6, 7, 0, 180, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 5,
      },
    },
  ],
};
exports.gunnerTypeX = {
  PARENT: [exports.genericTank],
  LABEL: "Gunner Type-X",
  GUNS: [
    {
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0],
    },
    {
      POSITION: [2.5, 5, 1.2, 12, 7.25, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.puregunner,
          g.fast,
          g.oxyres,
        ]),
        TYPE: exports.miniGuardianProjectile,
      },
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0],
    },
    {
      POSITION: [2.5, 5, 1.2, 12, -7.25, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.puregunner,
          g.fast,
          g.oxyres,
        ]),
        TYPE: exports.miniGuardianProjectile,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
    },
    {
      POSITION: [2.5, 5, 1.2, 16, 3.75, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.puregunner,
          g.fast,
          g.oxyres,
        ]),
        TYPE: exports.miniGuardianProjectile,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0],
    },
    {
      POSITION: [2.5, 5, 1.2, 16, -3.75, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.puregunner,
          g.fast,
          g.oxyres,
        ]),
        TYPE: exports.miniGuardianProjectile,
      },
    },
    {
      POSITION: [10, 9, 0.001, 8, 0, 180, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 5,
      },
    },
    {
      POSITION: [6, 9, 0.6, 7, 0, 180, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        CAN_SHOOT: false,
        COLOR: 5,
      },
    },
  ],
};

exports.electro = {
  PARENT: [exports.genericTank],
  LABEL: "Electro",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.electro]),
        TYPE: exports.chargedBeam,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 7, 1, 0, 0, 0, 0],
    },
  ],
};
exports.machElectro = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Electro",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 5, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.electro, g.mach]),
        TYPE: exports.chargedBeam,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 7, 1, 0, 0, 0, 0],
    },
  ],
};
exports.laserGunner = {
  PARENT: [exports.genericTank],
  LABEL: "Laser Gunner",
  GUNS: [
    {
      POSITION: [18, 2, 1, 0, -4.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.electro]),
        TYPE: exports.chargedBeam,
      },
    },
    {
      POSITION: [18, 2, 1, 0, 4.5, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.electro]),
        TYPE: exports.chargedBeam,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 2, 1, 0, -1.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.electro]),
        TYPE: exports.chargedBeam,
      },
    },
    {
      POSITION: [20, 2, 1, 0, 1.5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.electro]),
        TYPE: exports.chargedBeam,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 12, 1, 0, 0, 0, 0],
    },
  ],
};
exports.duoLaser = makeBackGunner(exports.laserGunner, "Duo-Laser");
exports.subduer = {
  PARENT: [exports.genericTank],
  LABEL: "Subduer",
  ZOOM: 400,
  TOOLTIP: "Hold RMB to zoom.",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.binary = {
  PARENT: [exports.genericTank],
  LABEL: "Binary",
  ZOOM: 400,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 6, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.dual]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 5.5, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2, g.dual]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 6, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.dual]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, -5.5, 0, 0.65],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2, g.dual]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.mitochondrion = {
  PARENT: [exports.genericTank],
  LABEL: "Mitochondrion",
  ZOOM: 400,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 6, 1, 0, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.cytochrome = {
  PARENT: [exports.genericTank],
  LABEL: "Cytochrome",
  ZOOM: 400,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 6, 1, 0, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 10, 1, 0, 0, 0, 0.45],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.hunter2,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.translocase = {
  PARENT: [exports.genericTank],
  LABEL: "Translocase",
  ZOOM: 400,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [26, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 5.5, 1, 0, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 7, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8.5, 1, 0, 0, 0, 0.45],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.hunter2,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 10, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.hunter2,
          g.hunter2,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.flankSubduer = makeMulti(exports.subduer, "Flank Subduer", 3);
exports.whirlwind = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Whirlwind",
  CONTROLLERS: ["whirlwind"],
  AI: {
    SPEED: 0.2,
  },
  HAS_NO_RECOIL: true,
  GUNS: (() => {
    let outputGuns = [];
    for (let i = 0; i < 3; i++)
      outputGuns.push({
        POSITION: [1, 6, 1, 0, 0, i, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.pound,
            g.destroy,
            g.anni,
            g.power,
          ]),
          TYPE: [exports.satellite, { ANGLE: i * 120 }],
          MAX_CHILDREN: 1,
        },
      });
    return outputGuns;
  })(),
  TURRETS: [
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.genericTank,
    },
  ],
};
exports.florist = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Florist",
  CONTROLLERS: ["whirlwind"],
  AI: {
    SPEED: 0.2,
  },
  HAS_NO_RECOIL: true,
  GUNS: (() => {
    let outputGuns = [];
    for (let i = 0; i < 5; i++)
      outputGuns.push({
        POSITION: [1, 6, 1, 0, 0, i, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.pound,
            g.destroy,
            g.anni,
            g.power,
          ]),
          TYPE: [exports.satellite, { ANGLE: i * 72 }],
          MAX_CHILDREN: 1,
        },
      });
    return outputGuns;
  })(),
  TURRETS: [
    {
      POSITION: [12, 0, 0, 0, 360, 1],
      TYPE: exports.genericTank,
    },
  ],
};
exports.tundra = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Tundra",
  CONTROLLERS: ["whirlwind"],
  AI: {
    SPEED: 0.2,
  },
  HAS_NO_RECOIL: true,
  GUNS: (() => {
    let outputGuns = [];
    for (let i = 0; i < 10; i++)
      outputGuns.push({
        POSITION: [1, 6, 1, 0, 0, i, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.pound,
            g.destroy,
            g.anni,
            g.power,
          ]),
          TYPE: [exports.satellite, { ANGLE: i * 36 }],
          MAX_CHILDREN: 1,
        },
      });
    return outputGuns;
  })(),
  TURRETS: [
    {
      POSITION: [14, 0, 0, 0, 360, 1],
      TYPE: exports.genericTank,
    },
  ],
};
exports.maximus = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Maximus",
  CONTROLLERS: ["whirlwind"],
  AI: {
    SPEED: 0.2,
  },
  HAS_NO_RECOIL: true,
  GUNS: (() => {
    let outputGuns = [];
    for (let i = 0; i < 12; i++)
      outputGuns.push({
        POSITION: [1, 6, 1, 0, 0, i, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.pound,
            g.destroy,
            g.anni,
            g.power,
          ]),
          TYPE: [exports.satellite, { ANGLE: i * 30 }],
          MAX_CHILDREN: 1,
        },
      });
    return outputGuns;
  })(),
  TURRETS: [
    {
      POSITION: [16, 0, 0, 0, 360, 1],
      TYPE: exports.genericTank,
    },
  ],
};
exports.minishot = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Minishot",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 3, 1, 0, -4, -7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [15, 3, 1, 0, 4, 7, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [18, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arty]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.propsTest = {
  PARENT: [exports.genericTank],
  LABEL: "Props test",
  //CONTROLLERS: ['nearestDifferentMaster'],
  PROPS: [makeShell()],
};
// Aurora
exports.aurora = {
  PARENT: [exports.genericTank],
  LABEL: "Aurora",
  TURRETS: [
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: [exports.auraParent],
    },
  ],
};
exports.auraBasic = makeAura(exports.basic);
exports.auraBlow = makeAura(exports.blow);
// dom
exports.dominator = {
  PARENT: [exports.genericTank],
  LABEL: "Dominator",
  DANGER: 10,
  SIZE: 30,
  BODY: {
    RESIST: 100,
    SPEED: 1.32,
    ACCELERATION: 0.8,
    HEALTH: 590, // 650
    DAMAGE: 6,
    PENETRATION: 0.25,
    FOV: 1,
    PUSHABILITY: 0,
    HETERO: 0,
    SHIELD: base.SHIELD * 1.4,
  },
  TURRETS: [
    {
      POSITION: [22, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody,
    },
  ],
  GIVE_KILL_MESSAGE: true,
  SKILL_CAP: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  IS_SMASHER: false,
};
exports.destroyerDominator = {
  PARENT: [exports.dominator],
  LABEL: "Destroyer Dominator",
  GUNS: [
    {
      POSITION: [15.25, 6.75, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.destroydom]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 6.75, -1.6, 6.75, 0, 0, 0],
    },
  ],
};
exports.gunnerDominator = {
  PARENT: [exports.dominator],
  LABEL: "Gunner Dominator",
  GUNS: [
    {
      POSITION: [14.25, 3, 1, 0, -2, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gundom]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14.25, 3, 1, 0, 2, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gundom]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15.85, 3, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gundom]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0],
    },
  ],
};
exports.gunnerDominatorTurret = {
  PARENT: [exports.autoTurret],
  LABEL: "Gunner Dominator",
  GUNS: [
    {
      POSITION: [14.25, 3, 1, 0, -2, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gundom]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14.25, 3, 1, 0, 2, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gundom]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15.85, 3, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gundom]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0],
    },
  ],
};
exports.atmgtur = {
  PARENT: [exports.genericTank],
  LABEL: "",
  GUNS: [
    {
      POSITION: [14.25, 3, 1, 0, -2, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gundom,
          g.op,
          g.op,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14.25, 3, 1, 0, 2, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gundom,
          g.op,
          g.op,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15.85, 3, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gundom,
          g.op,
          g.op,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0],
    },
  ],
};
exports.atmgtur2 = createTurret(exports.atmgtur);
exports.atmg = {
  PARENT: [exports.dominator],
  LABEL: "Anti-Tank Machine Gun",
  GUNS: [
    {
      POSITION: [14.25, 3, 1, 0, -2, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gundom, g.op, g.op]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14.25, 3, 1, 0, 2, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gundom, g.op, g.op]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15.85, 3, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gundom, g.op, g.op]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0],
    },
    {
      POSITION: [23, 8.5, -1.6, 0, 0, 90, 0],
    },
    {
      POSITION: [23, 8.5, -1.6, 0, 0, 270, 0],
    },
  ],
  TURRETS: [
    {
      POSITION: [22, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody,
    },
    {
      POSITION: [20, 0, 25, 0, 360, 1],
      TYPE: exports.atmgtur,
    },
    {
      POSITION: [20, 0, -25, 0, 360, 1],
      TYPE: exports.atmgtur,
    },
  ],
};
exports.atmg2 = createTurret({
  PARENT: [exports.dominator],
  LABEL: "Anti-Tank Machine Gun",
  GUNS: [
    {
      POSITION: [14.25, 3, 1, 0, -2, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gundom, g.op, g.op]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14.25, 3, 1, 0, 2, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gundom, g.op, g.op]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15.85, 3, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gundom, g.op, g.op]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0],
    },
    {
      POSITION: [23, 8.5, -1.6, 0, 0, 90, 0],
    },
    {
      POSITION: [23, 8.5, -1.6, 0, 0, 270, 0],
    },
  ],
  TURRETS: [
    {
      POSITION: [22, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody,
    },
    {
      POSITION: [20, 0, 25, 0, 360, 1],
      TYPE: exports.atmgtur2,
    },
    {
      POSITION: [20, 0, -25, 0, 360, 1],
      TYPE: exports.atmgtur2,
    },
  ],
});
exports.trapperDominator = {
  PARENT: [exports.dominator],
  LABEL: "Trapper Dominator",
  FACING_TYPE: "autospin",
  STAT_NAMES: statnames.trap,
  GUNS: [
    {
      POSITION: [4, 3.75, 1, 8, 0, 0, 0],
    },
    {
      POSITION: [1.25, 3.75, 1.7, 12, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.trapdom]),
        TYPE: exports.trap,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [4, 3.75, 1, 8, 0, 45, 0],
    },
    {
      POSITION: [1.25, 3.75, 1.7, 12, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.trapdom]),
        TYPE: exports.trap,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [4, 3.75, 1, 8, 0, 90, 0],
    },
    {
      POSITION: [1.25, 3.75, 1.7, 12, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.trapdom]),
        TYPE: exports.trap,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [4, 3.75, 1, 8, 0, 135, 0],
    },
    {
      POSITION: [1.25, 3.75, 1.7, 12, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.trapdom]),
        TYPE: exports.trap,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [4, 3.75, 1, 8, 0, 180, 0],
    },
    {
      POSITION: [1.25, 3.75, 1.7, 12, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.trapdom]),
        TYPE: exports.trap,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [4, 3.75, 1, 8, 0, 225, 0],
    },
    {
      POSITION: [1.25, 3.75, 1.7, 12, 0, 225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.trapdom]),
        TYPE: exports.trap,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [4, 3.75, 1, 8, 0, 270, 0],
    },
    {
      POSITION: [1.25, 3.75, 1.7, 12, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.trapdom]),
        TYPE: exports.trap,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [4, 3.75, 1, 8, 0, 315, 0],
    },
    {
      POSITION: [1.25, 3.75, 1.7, 12, 0, 315, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.trapdom]),
        TYPE: exports.trap,
        AUTOFIRE: true,
      },
    },
  ],
};
exports.dominator.UPGRADES_TIER_0 = [
  exports.destroyerDominator,
  exports.gunnerDominator,
  exports.trapperDominator,
];
// AWPs
exports.awpCore = {
  PARENT: [exports.genericAWP],
  LABEL: "Core",
  //CONTROLLERS: ['nearestDifferentMaster'],
  DANGER: 3,
};
exports.awpQuasar = {
  PARENT: [exports.genericAWP],
  LABEL: "Quasar",
  //CONTROLLERS: ['nearestDifferentMaster'],
  DANGER: 3,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, -3, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, 3, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.elimTurret = createAutoGun(exports.elim);
exports.awpSpinner = {
  PARENT: [exports.genericAWP],
  LABEL: "Spinner",
  //CONTROLLERS: ['nearestDifferentMaster'],
  DANGER: 3,
  FACING_TYPE: "autospin",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, -3, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, 3, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, -3, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, 3, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 4, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, -3, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, 3, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 4, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, -3, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, 3, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 4, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.elimTurret,
    },
  ],
};
exports.awpCharon = {
  PARENT: [exports.genericAWP],
  LABEL: "Charon",
  //CONTROLLERS: ['nearestDifferentMaster'],
  DANGER: 3,
  STAT_NAMES: statnames.trap,
  GUNS: [
    {
      POSITION: [14, 8, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [14, 8, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.awpAsteroid = {
  PARENT: [exports.genericAWP],
  LABEL: "Asteroid",
  //CONTROLLERS: ['nearestDifferentMaster'],
  DANGER: 3,
  STAT_NAMES: statnames.trap,
  GUNS: [
    {
      POSITION: [14, 8, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [14, 8, 1, 0, 0, 90, 0],
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [14, 8, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [14, 8, 1, 0, 0, 270, 0],
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.auto4gun,
    },
  ],
};
exports.awpMoon = {
  PARENT: [exports.genericAWP],
  LABEL: "Moon",
  //CONTROLLERS: ['nearestDifferentMaster'],
  DANGER: 3,
  MAX_CHILDREN: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.awpHope = {
  PARENT: [exports.genericAWP],
  LABEL: "Hope",
  //CONTROLLERS: ['nearestDifferentMaster'],
  DANGER: 3,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 5.5, 0.6, 5, 5.25, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 5.5, 0.6, 5, -5.25, 90, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 5.5, 0.6, 7, 3, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 5.5, 0.6, 7, -3, 90, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 5.5, 0.6, 5, 5.25, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 5.5, 0.6, 5, -5.25, 270, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 5.5, 0.6, 7, 3, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 5.5, 0.6, 7, -3, 270, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
// NPCS:
exports.crasher = {
  TYPE: "crasher",
  LABEL: "Crasher",
  COLOR: 5,
  SHAPE: 3,
  SIZE: 5,
  VARIES_IN_SIZE: true,
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  AI: { NO_LEAD: true },
  BODY: {
    SPEED: 5,
    ACCEL: 0.01,
    HEALTH: 0.5,
    DAMAGE: 5,
    PENETRATION: 2,
    PUSHABILITY: 0.5,
    DENSITY: 10,
    RESIST: 2,
  },
  MOTION_TYPE: "motor",
  FACING_TYPE: "smoothWithMotion",
  HITS_OWN_TYPE: "hard",
  HAS_NO_MASTER: true,
  DRAW_HEALTH: true,
};
exports.sentry = {
  PARENT: [exports.genericTank],
  TYPE: "crasher",
  LABEL: "Sentry",
  DANGER: 3,
  COLOR: 5,
  SHAPE: 3,
  SIZE: 10,
  SKILL: skillSet({
    rld: 0.5,
    dam: 0.8,
    pen: 0.8,
    str: 0.1,
    spd: 1,
    atk: 0.5,
    hlt: 0,
    shi: 0,
    rgn: 0.7,
    mob: 0,
  }),
  VALUE: 1500,
  VARIES_IN_SIZE: true,
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  AI: { NO_LEAD: true },
  BODY: {
    FOV: 0.5,
    ACCEL: 0.006,
    DAMAGE: base.DAMAGE * 2,
    SPEED: base.SPEED * 0.5,
  },
  MOTION_TYPE: "motor",
  FACING_TYPE: "smoothToTarget",
  HITS_OWN_TYPE: "hard",
  HAS_NO_MASTER: true,
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true,
};
exports.sentinel = {
  PARENT: [exports.genericTank],
  TYPE: "crasher",
  LABEL: "Sentinel",
  DANGER: 3,
  COLOR: 14,
  SHAPE: 5,
  SIZE: 10,
  SKILL: skillSet({
    rld: 0.5,
    dam: 0.8,
    pen: 0.8,
    str: 0.1,
    spd: 1,
    atk: 0.5,
    hlt: 0,
    shi: 0,
    rgn: 0.7,
    mob: 0,
  }),
  VALUE: 1500,
  VARIES_IN_SIZE: true,
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  AI: { NO_LEAD: true },
  BODY: {
    FOV: 0.5,
    ACCEL: 0.006,
    DAMAGE: base.DAMAGE * 3,
    SPEED: base.SPEED * 0.5,
  },
  MOTION_TYPE: "motor",
  FACING_TYPE: "smoothToTarget",
  HITS_OWN_TYPE: "hard",
  HAS_NO_MASTER: true,
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true,
};
exports.trapTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 0.5,
  },
  INDEPENDENT: true,
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 16,
  AI: {
    SKYNET: true,
    FULL_VIEW: true,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 14, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 14, 1.8, 16, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.lowpower,
          g.fast,
          g.halfreload,
        ]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.sentrySwarm = {
  PARENT: [exports.sentry],
  DANGER: 3,
  GUNS: [
    {
      POSITION: [7, 14, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.sentryGun = makeAuto(exports.sentry, "Sentry", {
  type: exports.heavy3gun,
  size: 12,
});
exports.sentryTrap = makeAuto(exports.sentry, "Sentry", {
  type: exports.trapTurret,
  size: 12,
});
exports.sentinelSwarm = {
  PARENT: [exports.sentinel],
  DANGER: 3,
  GUNS: [
    {
      POSITION: [7, 7, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.pentaswarm, g.morerecoil]),
        TYPE: exports.pentaswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.sentinelGun = makeAuto(exports.sentinel, "Sentinel", {
  type: exports.sniper3gun,
});
exports.sentinelTrap = makeAuto(exports.sentinel, "Sentinel", {
  type: exports.barricade,
});

exports.miniboss = {
  PARENT: [exports.genericTank],
  TYPE: "miniboss",
  DANGER: 6,
  SKILL: skillSet({
    rld: 0.7,
    dam: 0.5,
    pen: 0.8,
    str: 0.8,
    spd: 0.2,
    atk: 0.3,
    hlt: 1,
    shi: 0.7,
    rgn: 0.7,
    mob: 0,
  }),
  LEVEL: 45,
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
  AI: { NO_LEAD: true, SPEED: 0.2 },
  FACING_TYPE: "autospin",
  HITS_OWN_TYPE: "hard",
  BROADCAST_MESSAGE: "A visitor has left!",
};
exports.ramminiboss = {
  PARENT: [exports.genericTank],
  TYPE: "miniboss",
  DANGER: 6,
  SKILL: skillSet({
    rld: 0.7,
    dam: 0.5,
    pen: 0.8,
    str: 0.8,
    spd: 0.2,
    atk: 0.3,
    hlt: 1,
    shi: 0.7,
    rgn: 0.7,
    mob: 0,
  }),
  LEVEL: 45,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster",
  ],
  AI: { NO_LEAD: true, SPEED: 0.2 },
  FACING_TYPE: "autospin",
  HITS_OWN_TYPE: "hard",
  BROADCAST_MESSAGE: "A visitor has left!",
};
exports.crasherSpawner = {
  PARENT: [exports.genericTank],
  LABEL: "Spawned",
  STAT_NAMES: statnames.drone,
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 5,
  INDEPENDENT: true,
  AI: { chase: true },
  MAX_CHILDREN: 4,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak]),
        TYPE: [
          exports.drone,
          { LABEL: "Crasher", VARIES_IN_SIZE: true, DRAW_HEALTH: true },
        ],
        SYNCS_SKILLS: true,
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.elite = {
  PARENT: [exports.miniboss],
  LABEL: "Elite Crasher",
  COLOR: 5,
  SHAPE: 3,
  SIZE: 20,
  VARIES_IN_SIZE: true,
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: base.HEALTH * 1.5,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5,
  },
};
exports.rookieCrasher = {
  PARENT: [exports.miniboss],
  LABEL: "Rookie Crasher",
  COLOR: 4,
  SHAPE: 3,
  SIZE: 16,
  VARIES_IN_SIZE: true,
  VALUE: 59212,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: base.HEALTH * 1,
    SHIELD: base.SHIELD * 1,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 1.5,
  },
};
exports.ethereal = {
  PARENT: [exports.miniboss],
  LABEL: "Ethereal",
  COLOR: 14,
  SHAPE: 5,
  SIZE: 20,
  VARIES_IN_SIZE: true,
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.5,
    HEALTH: base.HEALTH * 2,
    SHIELD: base.SHIELD * 2,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 3,
  },
};

exports.ultraWaspPlayable = {
  PARENT: [exports.elite],
  SHAPE: 6,
  COLOR: 4,
  LABEL: "Ultra Wasp",
  FACING_TYPE: "toTarget",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6.5, 3, 0.6, 5, 3.25, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [6.5, 3, 0.6, 5, -3.25, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [6.5, 3, 0.6, 7, 1.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [6.5, 3, 0.6, 7, -1.5, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [10, 8, 0, 60, 190, 0],
      TYPE: exports.beeShooter,
    },
    {
      POSITION: [10, 8, 0, 120, 190, 0],
      TYPE: exports.beeShooter,
    },
    {
      POSITION: [10, 8, 0, 180, 190, 0],
      TYPE: exports.beeShooter,
    },
    {
      POSITION: [10, 8, 0, 240, 190, 0],
      TYPE: exports.beeShooter,
    },
    {
      POSITION: [10, 8, 0, 300, 190, 0],
      TYPE: exports.beeShooter,
    },
    {
      POSITION: [3, 9, 0, 30, 360, 1],
      TYPE: exports.swarmTurret,
    },
    {
      POSITION: [3, 9, 0, 90, 360, 1],
      TYPE: exports.swarmTurret,
    },
    {
      POSITION: [3, 9, 0, 150, 360, 1],
      TYPE: exports.swarmTurret,
    },
    {
      POSITION: [3, 9, 0, 210, 360, 1],
      TYPE: exports.swarmTurret,
    },
    {
      POSITION: [3, 9, 0, 270, 360, 1],
      TYPE: exports.swarmTurret,
    },
    {
      POSITION: [3, 9, 0, 330, 360, 1],
      TYPE: exports.swarmTurret,
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.machineTurret,
    },
  ],
};
exports.ultraWasp = createMinion(exports.ultraWaspPlayable);
exports.eliteSkimmer = {
  PARENT: [exports.miniboss],
  SHAPE: 3,
  COLOR: 2,
  LABEL: "Elite Skimmer",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [15, 5, 0, 60, 170, 0],
      TYPE: exports.skimturret,
    },
    {
      POSITION: [15, 5, 0, 180, 170, 0],
      TYPE: exports.skimturret,
    },
    {
      POSITION: [15, 5, 0, 300, 170, 0],
      TYPE: exports.skimturret,
    },
  ],
};
exports.elite_destroyer = {
  PARENT: [exports.elite],
  LABEL: "Elite Destroyer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 16, 1, 6, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      POSITION: [5, 16, 1, 6, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      POSITION: [5, 16, 1, 6, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 180, 360, 0],
      TYPE: [exports.crasherSpawner],
    },
    {
      POSITION: [11, 0, 0, 60, 360, 0],
      TYPE: [exports.crasherSpawner],
    },
    {
      POSITION: [11, 0, 0, -60, 360, 0],
      TYPE: [exports.crasherSpawner],
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
  ],
};
exports.elite_gunner = {
  PARENT: [exports.elite],
  LABEL: "Elite Gunner",
  FACING_TYPE: "toTarget",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 16, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 16, 1.5, 14, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: [exports.pillbox, { INDEPENDENT: true }],
      },
    },
    {
      POSITION: [6, 14, -2, 2, 0, 60, 0],
    },
    {
      POSITION: [6, 14, -2, 2, 0, 300, 0],
    },
  ],
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 60, 180, 0],
      TYPE: [exports.auto4gun],
    },
    {
      POSITION: [14, 8, 0, 300, 180, 0],
      TYPE: [exports.auto4gun],
    },
  ],
};
exports.elite_sprayer = {
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  LABEL: "Elite Sprayer",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 8.5, 5, 60, 190, 0],
      TYPE: [exports.sprayTurret, { COLOR: 5 }],
    },
    {
      POSITION: [8, 8.5, -5, 60, 190, 0],
      TYPE: [exports.sprayTurret, { COLOR: 5 }],
    },
    {
      POSITION: [8, 8.5, 5, 180, 190, 0],
      TYPE: [exports.sprayTurret, { COLOR: 5 }],
    },
    {
      POSITION: [8, 8.5, -5, 180, 190, 0],
      TYPE: [exports.sprayTurret, { COLOR: 5 }],
    },
    {
      POSITION: [8, 8.5, 5, 300, 190, 0],
      TYPE: [exports.sprayTurret, { COLOR: 5 }],
    },
    {
      POSITION: [8, 8.5, -5, 300, 190, 0],
      TYPE: [exports.sprayTurret, { COLOR: 5 }],
    },
  ],
};
exports.rookieBasic = {
  PARENT: [exports.rookieCrasher],
  LABEL: "Rookie Basic",
  GUNS: [
    {
      POSITION: [5, 8, 1, 6, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8, 1, 6, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8, 1, 6, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
  ],
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: [exports.pellingTurret, { COLOR: 4 }],
    },
  ],
};
exports.rookiePelling = {
  PARENT: [exports.rookieCrasher],
  LABEL: "Rookie Pelling",
  FACING_TYPE: "toTarget",
  GUNS: [
    {
      POSITION: [13, 5, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [3, 5, 1.5, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.caltrop]),
        TYPE: exports.miniTrap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 60, 180, 0],
      TYPE: [exports.pellingTurret, { COLOR: 4 }],
    },
    {
      POSITION: [14, 8, 0, 300, 180, 0],
      TYPE: [exports.pellingTurret, { COLOR: 4 }],
    },
  ],
};
exports.blowTurret = createAutoGun(exports.blow);
exports.rookieBlow = {
  PARENT: [exports.rookieCrasher],
  LABEL: "Rookie Blow",
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 6, 0, 60, 180, 0],
      TYPE: [exports.blowTurret, { COLOR: 4 }],
    },
    {
      POSITION: [14, 6, 0, 180, 180, 0],
      TYPE: [exports.blowTurret, { COLOR: 4 }],
    },
    {
      POSITION: [14, 6, 0, 300, 180, 0],
      TYPE: [exports.blowTurret, { COLOR: 4 }],
    },
  ],
};
exports.etherealRadiolocator = {
  PARENT: [exports.ethereal],
  LABEL: "Ethereal Radiolocator",
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      POSITION: [12, 7, 0, 36, 180, 0],
      TYPE: [exports.radiolocaTurret],
    },
    {
      POSITION: [12, 7, 0, 108, 180, 0],
      TYPE: [exports.radiolocaTurret],
    },
    {
      POSITION: [12, 7, 0, 180, 180, 0],
      TYPE: [exports.radiolocaTurret],
    },
    {
      POSITION: [12, 7, 0, 252, 180, 0],
      TYPE: [exports.radiolocaTurret],
    },
    {
      POSITION: [12, 7, 0, 324, 180, 0],
      TYPE: [exports.radiolocaTurret],
    },
  ],
};
exports.rangerTurret = createAutoGun(exports.ranger);
exports.etherealRanger = {
  PARENT: [exports.ethereal],
  LABEL: "Ethereal Ranger",
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      POSITION: [12, 7, 0, 36, 180, 0],
      TYPE: [exports.rangerTurret],
    },
    {
      POSITION: [12, 7, 0, 108, 180, 0],
      TYPE: [exports.rangerTurret],
    },
    {
      POSITION: [12, 7, 0, 180, 180, 0],
      TYPE: [exports.rangerTurret],
    },
    {
      POSITION: [12, 7, 0, 252, 180, 0],
      TYPE: [exports.rangerTurret],
    },
    {
      POSITION: [12, 7, 0, 324, 180, 0],
      TYPE: [exports.rangerTurret],
    },
  ],
};
exports.catastropheTurret = createAutoGun(exports.catastrophe);
exports.etherealCatastrophe = {
  PARENT: [exports.ethereal],
  LABEL: "Ethereal Catastrophe",
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      POSITION: [12, 7, 0, 36, 180, 0],
      TYPE: [exports.catastropheTurret],
    },
    {
      POSITION: [12, 7, 0, 108, 180, 0],
      TYPE: [exports.catastropheTurret],
    },
    {
      POSITION: [12, 7, 0, 180, 180, 0],
      TYPE: [exports.catastropheTurret],
    },
    {
      POSITION: [12, 7, 0, 252, 180, 0],
      TYPE: [exports.catastropheTurret],
    },
    {
      POSITION: [12, 7, 0, 324, 180, 0],
      TYPE: [exports.catastropheTurret],
    },
  ],
};
// exports.etherealRadiolocator, exports.etherealRanger, exports.etherealCatastrophe
exports.elite_dropship = {
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  FACING_TYPE: "toTarget",
  LABEL: "Elite Dropship",
  GUNS: [
    {
      POSITION: [14, 14, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [8, 14, 1.5, 12, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.megatrap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [10, 8, 0, 60, 190, 0],
      TYPE: [exports.dropship, { COLOR: 5 }],
    },
    {
      POSITION: [10, 8, 0, -60, 190, 0],
      TYPE: [exports.dropship, { COLOR: 5 }],
    },
  ],
};
exports.guardian = {
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  FACING_TYPE: "toTarget",
  LABEL: "Guardian", //"The Guardian of The Pentagons"
  GUNS: [
    {
      POSITION: [4, 14, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.guardian]),
        TYPE: exports.swarm,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.mythicalCrasher = {
  PARENT: [exports.genericTank],
  LABEL: "Mythical Crasher",
  DANGER: 9,
  SIZE: 66,
  COLOR: 5,
  SHAPE: 3,
  BODY: {
    SPEED: 1.25,
    ACCELERATION: base.ACCEL * 0.4,
    HEALTH: 3500,
    DAMAGE: 8,
    REGEN: base.REGEN * 0.45,
    FOV: 0.775,
  },
  GUNS: [
    {
      POSITION: [3.5, 2.8, 1.4, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, 5.5, 180, 1 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, 11, 180, 2 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, -5.5, 180, 1 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, -11, 180, 2 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [2, 13.5, -1.35, 0, 220, 0],
      TYPE: exports.pound,
    },
    {
      POSITION: [2, 10.7, -2.95, 0, 220, 0],
      TYPE: exports.pound,
    },
    {
      POSITION: [2, 7.9, -4.575, 0, 220, 0],
      TYPE: exports.pound,
    },
    {
      POSITION: [2, 5.1, -6.2, 0, 220, 0],
      TYPE: exports.pound,
    },
    {
      POSITION: [2, 2.3, -7.8, 0, 220, 0],
      TYPE: exports.pound,
    },
    {
      POSITION: [2, -0.5, -9.4, 0, 220, 0],
      TYPE: exports.pound,
    },
    {
      POSITION: [2, -3.3, -11, 0, 220, 0],
      TYPE: exports.pound,
    },
    {
      POSITION: [2, -6.1, -12.6, 0, 220, 0],
      TYPE: exports.pound,
    },
    {
      POSITION: [2, 13.5, 1.35, 0, 220, 0],
      TYPE: exports.pound,
    },
    {
      POSITION: [2, 10.7, 2.95, 0, 220, 0],
      TYPE: exports.pound,
    },
    {
      POSITION: [2, 7.9, 4.575, 0, 220, 0],
      TYPE: exports.pound,
    },
    {
      POSITION: [2, 5.1, 6.2, 0, 220, 0],
      TYPE: exports.pound,
    },
    {
      POSITION: [2, 2.3, 7.8, 0, 220, 0],
      TYPE: exports.pound,
    },
    {
      POSITION: [2, -0.5, 9.4, 0, 220, 0],
      TYPE: exports.pound,
    },
    {
      POSITION: [2, -3.3, 11, 0, 220, 0],
      TYPE: exports.pound,
    },
    {
      POSITION: [2, -6.1, 12.6, 0, 220, 0],
      TYPE: exports.pound,
    },
    {
      POSITION: [1.9, -5.7, 2.1, 0, 360, 1],
      TYPE: [
        exports.hexatrap,
        {
          FACING_TYPE: "autospin",
        },
      ],
    },
    {
      POSITION: [1.9, -5.7, -2.1, 0, 360, 1],
      TYPE: [
        exports.hexatrap,
        {
          FACING_TYPE: "autoreverse",
        },
      ],
    },
    {
      POSITION: [2, 12.75, 0, 0, 361, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [2, 10, -1.6, 0, 361, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [2, 7.25, -3.2, 0, 361, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [2, 4.5, -4.8, 0, 361, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [2, 1.75, -6.4, 0, 361, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [2, -1, -8, 0, 361, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [2, -3.75, -9.6, 0, 361, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [2, -6.4, -11.1, 0, 361, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [2, 10, 1.6, 0, 361, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [2, 7.25, 3.2, 0, 361, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [2, 4.5, 4.8, 0, 361, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [2, 1.75, 6.4, 0, 361, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [2, -1, 8, 0, 361, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [2, -3.75, 9.6, 0, 361, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [2, -6.4, 11.1, 0, 361, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [2, 2, 4.9, 270, 361, 1],
      TYPE: exports.gunner,
    },
    {
      POSITION: [2, 2, 2.5, 270, 361, 1],
      TYPE: exports.gunner,
    },
    {
      POSITION: [2, 2, 0.1, 270, 361, 1],
      TYPE: exports.gunner,
    },
    {
      POSITION: [2, 2, -2.3, 270, 361, 1],
      TYPE: exports.gunner,
    },
    {
      POSITION: [2, 2, -4.9, 90, 361, 1],
      TYPE: exports.gunner,
    },
    {
      POSITION: [2, 2, -2.5, 90, 361, 1],
      TYPE: exports.gunner,
    },
    {
      POSITION: [2, 2, -0.1, 90, 361, 1],
      TYPE: exports.gunner,
    },
    {
      POSITION: [2, 2, 2.3, 90, 361, 1],
      TYPE: exports.gunner,
    },
  ],
};
exports.quintet = {
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  LABEL: "Quintet",
  SIZE: 25,
  SHAPE: [[]],
  BOSS_TYPE: "quintet",
  TURRETS: [
    {
      POSITION: [24, 0, 0, 180, 0, 1],
      TYPE: [exports.pentagon, { COLOR: 16 }],
    },
    {
      POSITION: [11.667, -13.333, 0, 0, 0, 1],
      TYPE: exports.quintetGuardian,
    },
    {
      POSITION: [11.667, -13.333, 0, 72, 0, 1],
      TYPE: exports.quintetGuardian,
    },
    {
      POSITION: [11.667, -13.333, 0, 144, 0, 1],
      TYPE: exports.quintetGuardian,
    },
    {
      POSITION: [11.667, -13.333, 0, 216, 0, 1],
      TYPE: exports.quintetGuardian,
    },
    {
      POSITION: [11.667, -13.333, 0, 288, 0, 1],
      TYPE: exports.quintetGuardian,
    },
    {
      POSITION: [13.333, 0, 0, 0, 0, 1],
      TYPE: exports.splitPentagonInside,
    },
    {
      POSITION: [13.333, 0, 0, 72, 0, 1],
      TYPE: exports.splitPentagonInside,
    },
    {
      POSITION: [13.333, 0, 0, 144, 0, 1],
      TYPE: exports.splitPentagonInside,
    },
    {
      POSITION: [13.333, 0, 0, 216, 0, 1],
      TYPE: exports.splitPentagonInside,
    },
    {
      POSITION: [13.333, 0, 0, 288, 0, 1],
      TYPE: exports.splitPentagonInside,
    },
  ],
};
exports.quintetCore = {
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  LABEL: "Pentaguardian",
  SHAPE: [[]],
  BOSS_TYPE: "quintetCore",
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: exports.quintetGuardian2,
    },
    {
      POSITION: [20, 0, 0, 72, 0, 1],
      TYPE: exports.quintetGuardian2,
    },
    {
      POSITION: [20, 0, 0, 144, 0, 1],
      TYPE: exports.quintetGuardian2,
    },
    {
      POSITION: [20, 0, 0, 216, 0, 1],
      TYPE: exports.quintetGuardian2,
    },
    {
      POSITION: [20, 0, 0, 288, 0, 1],
      TYPE: exports.quintetGuardian2,
    },
  ],
};
exports.palisade = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([
      g.factory,
      g.pound,
      g.halfreload,
      g.halfreload,
    ]),
    TYPE: exports.minion,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true,
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "Palisade",
    COLOR: 17,
    SHAPE: 6,
    SIZE: 28,
    VALUE: 500000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3,
    },
    GUNS: [
      {
        /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [4, 6, -1.6, 8, 0, 0, 0],
        PROPERTIES: props,
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 60, 0],
        PROPERTIES: props,
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 120, 0],
        PROPERTIES: props,
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.minion,
          STAT_CALCULATOR: gunCalcNames.drone,
          AUTOFIRE: true,
          MAX_CHILDREN: 1,
          SYNCS_SKILLS: true,
          WAIT_TO_CYCLE: true,
        },
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 240, 0],
        PROPERTIES: props,
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 300, 0],
        PROPERTIES: props,
      },
    ],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [5, 10, 0, 30, 110, 0],
        TYPE: exports.tritrapgun,
      },
      {
        POSITION: [5, 10, 0, 90, 110, 0],
        TYPE: exports.tritrapgun,
      },
      {
        POSITION: [5, 10, 0, 150, 110, 0],
        TYPE: exports.tritrapgun,
      },
      {
        POSITION: [5, 10, 0, 210, 110, 0],
        TYPE: exports.tritrapgun,
      },
      {
        POSITION: [5, 10, 0, 270, 110, 0],
        TYPE: exports.tritrapgun,
      },
      {
        POSITION: [5, 10, 0, 330, 110, 0],
        TYPE: exports.tritrapgun,
      },
    ],
  };
})();
exports.wasper = {
  PARENT: [exports.miniboss],
  LABEL: "Wasper",
  COLOR: 17,
  SHAPE: 6,
  SIZE: 28,
  VALUE: 500000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.1,
    HEALTH: base.HEALTH * 2,
    SHIELD: base.SHIELD * 2,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 3,
  },
  GUNS: (() => {
    let output = [];
    for (let i = 0; i < 6; i++)
      output.push(
        {
          /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
          POSITION: [6.5, 3, 0.6, 5, 3.25, i * 60, 0],
          PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm,
          },
        },
        {
          POSITION: [6.5, 3, 0.6, 5, -3.25, i * 60, 0.25],
          PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm,
          },
        },
        {
          POSITION: [6.5, 3, 0.6, 7, 1.5, i * 60, 0.5],
          PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm,
          },
        },
        {
          POSITION: [6.5, 3, 0.6, 7, -1.5, i * 60, 0.75],
          PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.wasp, g.fast]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm,
          },
        }
      );
    return output;
  })(),
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 10, 0, 30, 110, 0],
      TYPE: exports.tritrapgun,
    },
    {
      POSITION: [5, 10, 0, 90, 110, 0],
      TYPE: exports.catastropheTurret,
    },
    {
      POSITION: [5, 10, 0, 150, 110, 0],
      TYPE: exports.tritrapgun,
    },
    {
      POSITION: [5, 10, 0, 210, 110, 0],
      TYPE: exports.catastropheTurret,
    },
    {
      POSITION: [5, 10, 0, 270, 110, 0],
      TYPE: exports.tritrapgun,
    },
    {
      POSITION: [5, 10, 0, 330, 110, 0],
      TYPE: exports.catastropheTurret,
    },
    {
      POSITION: [7, 5, 0, 90, 190, 1],
      TYPE: [exports.radiolocaTurret],
    },
    {
      POSITION: [7, 5, 0, 270, 190, 1],
      TYPE: [exports.radiolocaTurret],
    },
    {
      POSITION: [12, 0, 0, 0, 360, 1],
      TYPE: [exports.largeAuraParent],
    },
  ],
};

exports.bot = {
  AUTO_UPGRADE: "random",
  FACING_TYPE: "looseToTarget",
  BODY: {
    SIZE: 10,
  },
  //COLOR: 17,
  NAME: "[AI] ",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "fleeAtLowHealth",
  ],
  AI: { STRAFE: true },
  //1 2 3 4 5 6 7 8 9 0
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  VALUE: 59212,
};
exports.bot2 = {
  AUTO_UPGRADE: "random",
  FACING_TYPE: "looseToTarget",
  BODY: {
    SIZE: 10,
  },
  //COLOR: 17,
  NAME: "[AI] ",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapTargetToGoal",
    "hangOutNearMaster",
    "fleeAtLowHealth",
  ],
  AI: { STRAFE: true },
  //1 2 3 4 5 6 7 8 9 0
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  VALUE: 59212,
};
exports.weaklingTurret = {
  PARENT: [exports.autoTankGun],
  LABEL: "Weakling",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.halfreload]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.S1 = {
  PARENT: [exports.elite],
  LABEL: "S-1",
  SHAPE: 6,
  SIZE: 14,
  COLOR: 4,
  GUNS: [
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [12, 7, 0, 0, 190, 0],
      TYPE: exports.weaklingTurret,
    },
    {
      POSITION: [12, 7, 0, 120, 190, 0],
      TYPE: exports.weaklingTurret,
    },
    {
      POSITION: [12, 7, 0, 240, 190, 0],
      TYPE: exports.weaklingTurret,
    },
  ],
};
exports.S2 = {
  PARENT: [exports.elite],
  LABEL: "S-2",
  SHAPE: 6,
  SIZE: 16,
  COLOR: 4,
  GUNS: [
    {
      POSITION: [7, 5, 0.6, 7, 2.5, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 5, 0.6, 7, 2.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 5, 0.6, 7, 2.5, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 5, 0.6, 7, -2.5, 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 5, 0.6, 7, -2.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 5, 0.6, 7, -2.5, 300, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [12, 7, 0, 0, 190, 0],
      TYPE: exports.autoTankGun,
    },
    {
      POSITION: [12, 7, 0, 120, 190, 0],
      TYPE: exports.autoTankGun,
    },
    {
      POSITION: [12, 7, 0, 240, 190, 0],
      TYPE: exports.autoTankGun,
    },
  ],
};
exports.S3 = {
  PARENT: [exports.elite],
  LABEL: "S-3",
  SHAPE: 6,
  SIZE: 23,
  COLOR: 4,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 7, 1, 10.5, 0, 60, 0],
    },
    {
      POSITION: [1, 9, 1, 15, 0, 60, 0],
      PROPERTIES: {
        MAX_CHILDREN: 1,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.waspMinion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 9, 1, 8, 0, 60, 0],
    },
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 7, 1, 10.5, 0, 180, 0],
    },
    {
      POSITION: [1, 9, 1, 15, 0, 180, 0],
      PROPERTIES: {
        MAX_CHILDREN: 1,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.waspMinion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 9, 1, 8, 0, 180, 0],
    },
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 7, 1, 10.5, 0, 300, 0],
    },
    {
      POSITION: [1, 9, 1, 15, 0, 300, 0],
      PROPERTIES: {
        MAX_CHILDREN: 1,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.waspMinion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 9, 1, 8, 0, 300, 0],
    },
  ],
  TURRETS: [
    {
      POSITION: [12, 7, 0, 0, 190, 0],
      TYPE: exports.machineTurret,
    },
    {
      POSITION: [12, 7, 0, 120, 190, 0],
      TYPE: exports.machineTurret,
    },
    {
      POSITION: [12, 7, 0, 240, 190, 0],
      TYPE: exports.machineTurret,
    },
  ],
};
exports.beehiveMinion = createMinion(exports.beehive);
exports.S4 = {
  PARENT: [exports.elite],
  LABEL: "S-4",
  SHAPE: 6,
  SIZE: 30,
  COLOR: 4,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 7, 1, 10.5, 0, 60, 0],
    },
    {
      POSITION: [1, 9, 1, 15, 0, 60, 0],
      PROPERTIES: {
        MAX_CHILDREN: 1,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.beehiveMinion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 9, 1, 8, 0, 60, 0],
    },
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 7, 1, 10.5, 0, 180, 0],
    },
    {
      POSITION: [1, 9, 1, 15, 0, 180, 0],
      PROPERTIES: {
        MAX_CHILDREN: 1,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.beehiveMinion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 9, 1, 8, 0, 180, 0],
    },
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 7, 1, 10.5, 0, 300, 0],
    },
    {
      POSITION: [1, 9, 1, 15, 0, 300, 0],
      PROPERTIES: {
        MAX_CHILDREN: 1,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.beehiveMinion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 9, 1, 8, 0, 300, 0],
    },
  ],
  TURRETS: [
    {
      POSITION: [12, 7, 0, 0, 190, 0],
      TYPE: exports.sprayTurret,
    },
    {
      POSITION: [12, 7, 0, 120, 190, 0],
      TYPE: exports.sprayTurret,
    },
    {
      POSITION: [12, 7, 0, 240, 190, 0],
      TYPE: exports.sprayTurret,
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: exports.waspTurret,
    },
  ],
};
exports.S5 = {
  PARENT: [exports.elite],
  LABEL: "S-5",
  SHAPE: 6,
  SIZE: 35,
  COLOR: 4,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 7, 1, 10.5, 0, 60, 0],
    },
    {
      POSITION: [1, 9, 1, 15, 0, 60, 0],
      PROPERTIES: {
        MAX_CHILDREN: 1,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.beehiveMinion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 9, 1, 8, 0, 60, 0],
    },
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 7, 1, 10.5, 0, 180, 0],
    },
    {
      POSITION: [1, 9, 1, 15, 0, 180, 0],
      PROPERTIES: {
        MAX_CHILDREN: 1,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.beehiveMinion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 9, 1, 8, 0, 180, 0],
    },
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 7, 1, 10.5, 0, 300, 0],
    },
    {
      POSITION: [1, 9, 1, 15, 0, 300, 0],
      PROPERTIES: {
        MAX_CHILDREN: 1,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.beehiveMinion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 9, 1, 8, 0, 300, 0],
    },
  ],
  TURRETS: [
    {
      POSITION: [12, 7, 0, 0, 190, 0],
      TYPE: exports.concatinatorTurret,
    },
    {
      POSITION: [12, 7, 0, 120, 190, 0],
      TYPE: exports.concatinatorTurret,
    },
    {
      POSITION: [12, 7, 0, 240, 190, 0],
      TYPE: exports.concatinatorTurret,
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: exports.waspactilator,
    },
  ],
};
exports.busterS6Turret = createTurret(exports.buster, [g.turret]);
exports.S6Spawner = {
  PARENT: [exports.genericTank],
  LABEL: "Spawner",
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 10, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [1, 13, 1, 15, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 1,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.ultraWasp,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 13, 1, 8, 0, 0, 0],
    },
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 10, 1, 0, 0, 120, 0],
    },
    {
      POSITION: [1, 13, 1, 15, 0, 120, 0],
      PROPERTIES: {
        MAX_CHILDREN: 1,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.ultraWasp,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 13, 1, 8, 0, 120, 0],
    },
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 10, 1, 0, 0, 240, 0],
    },
    {
      POSITION: [1, 13, 1, 15, 0, 240, 0],
      PROPERTIES: {
        MAX_CHILDREN: 1,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.ultraWasp,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 13, 1, 8, 0, 240, 0],
    },
  ],
};
exports.S6 = {
  PARENT: [exports.elite],
  LABEL: "S-6",
  SHAPE: 6,
  SIZE: 45,
  COLOR: 4,
  TURRETS: [
    {
      POSITION: [12, 7, 0, 0, 190, 0],
      TYPE: exports.concatinatorTurret,
    },
    {
      POSITION: [12, 7, 0, 120, 190, 0],
      TYPE: exports.concatinatorTurret,
    },
    {
      POSITION: [12, 7, 0, 240, 190, 0],
      TYPE: exports.concatinatorTurret,
    },
    {
      POSITION: [14, 0, 0, 0, 0, 1],
      TYPE: exports.S6Spawner,
    },
    {
      POSITION: [8, 0, 0, 0, 360, 1],
      TYPE: exports.hypercannon,
    },
  ],
};
exports.acidTurret = createAutoGun(exports.acid);
exports.disp1 = {
  PARENT: [exports.elite],
  LABEL: "DISP-1", //Disintegral Spirit
  SHAPE: 5,
  SIZE: 20,
  COLOR: 51,
  FACING_TYPE: "toTarget",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 7, 1.4, 4, 0, 108, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.tonsmorrecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [9, 7, 1.4, 4, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.tonsmorrecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [9, 7, 1.4, 4, 0, 252, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.tonsmorrecoil]),
        TYPE: exports.bullet,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [10, 8, 0, 36, 190, 0],
      TYPE: exports.acidTurret,
    },
    {
      POSITION: [10, 8, 0, 324, 190, 0],
      TYPE: exports.acidTurret,
    },
  ],
};
exports.acidriveTurret = createAutoGun(exports.acidrive);
exports.poisonerTurret = createAutoGun(exports.poisoner);
exports.disp2 = {
  PARENT: [exports.elite],
  LABEL: "DISP-2", //Disintegral Spirit MK2
  SHAPE: 5,
  SIZE: 24,
  COLOR: 51,
  FACING_TYPE: "toTarget",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 7, 1.4, 4, 0, 108, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.tonsmorrecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [11, 5, 1, 4, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.lowpower,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [9, 7, 1.4, 4, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.morerecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [9, 7, 1.4, 4, 0, 252, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.tonsmorrecoil]),
        TYPE: exports.bullet,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [10, 8, 0, 36, 190, 0],
      TYPE: exports.acidriveTurret,
    },
    {
      POSITION: [10, 8, 0, 324, 190, 0],
      TYPE: exports.acidriveTurret,
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.poisonerTurret,
    },
  ],
};
exports.dispProp1 = {
  PARENT: [exports.elite],
  LABEL: "",
  COLOR: 51,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 10.5, 0, 60, 0],
    },
    {
      POSITION: [1, 12, 1, 15, 0, 60, 0],
      PROPERTIES: {
        MAX_CHILDREN: 1,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 12, 1, 8, 0, 60, 0],
    },
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 10.5, 0, 300, 0],
    },
    {
      POSITION: [1, 12, 1, 15, 0, 300, 0],
      PROPERTIES: {
        MAX_CHILDREN: 1,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 12, 1, 8, 0, 300, 0],
    },
  ],
  TURRETS: [
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.poisonerTurret,
    },
  ],
};
exports.megaHunterTurret = createAutoGun(exports.megaHunter);
exports.formaldriveTurret = createAutoGun(exports.formaldrive);
exports.disp3 = {
  PARENT: [exports.elite],
  LABEL: "DISP-3", //Disintegral Spirit MK3
  SHAPE: 5,
  SIZE: 30,
  COLOR: 51,
  FACING_TYPE: "toTarget",
  GUNS: [
    {
      POSITION: [11, 5, 1, 4, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.lowpower,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [9, 7, 1.4, 4, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.morerecoil]),
        TYPE: exports.bullet,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [10, 8, 0, 36, 190, 0],
      TYPE: exports.formaldrive,
    },
    {
      POSITION: [10, 8, 0, 324, 190, 0],
      TYPE: exports.formaldrive,
    },
    {
      POSITION: [8.5, 13, 0, -108, 0, 1],
      TYPE: exports.dispProp1,
    },
    {
      POSITION: [8.5, 13, 0, 108, 0, 1],
      TYPE: exports.dispProp1,
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.megaHunterTurret,
    },
  ],
};
exports.cs5Minion = {
  //Crasher Spirit
  PARENT: [exports.minion],
  AI: { NO_LEAD: false },
  LABEL: "Hyper Cruiser",
  SHAPE: 3,
  GUNS: [
    {
      POSITION: [4, 14, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.guardian, g.halfreload]),
        TYPE: exports.swarm,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [14, 6, 0, 60, 190, 0],
      TYPE: exports.cruiserTurret,
    },
    {
      POSITION: [14, 6, 0, 300, 190, 0],
      TYPE: exports.cruiserTurret,
    },
  ],
};
exports.cs1 = {
  //Crasher Spirit
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  LABEL: "CS-1",
  GUNS: [
    {
      POSITION: [4, 14, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.guardian, g.halfreload]),
        TYPE: exports.swarm,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      POSITION: [4, 14, 1.2, 8, 0, 180, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.guardian, g.halfreload]),
        TYPE: exports.swarm,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      POSITION: [4, 14, 1.2, 8, 0, 300, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.guardian, g.halfreload]),
        TYPE: exports.swarm,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: exports.trapper,
    },
  ],
};
exports.cs2 = {
  //Crasher Spirit
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  LABEL: "CS-2",
  SIZE: 20,
  GUNS: [
    {
      POSITION: [4, 10, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.guardian, g.halfreload]),
        TYPE: exports.swarm,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      POSITION: [4, 10, 1.2, 8, 0, 180, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.guardian, g.halfreload]),
        TYPE: exports.swarm,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      POSITION: [4, 10, 1.2, 8, 0, 300, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.guardian, g.halfreload]),
        TYPE: exports.swarm,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 8, 6.5, 180, 190, 0],
      TYPE: [exports.machineTurret, { COLOR: 5 }],
    },
    {
      POSITION: [7, 8, 6.5, 60, 190, 0],
      TYPE: [exports.machineTurret, { COLOR: 5 }],
    },
    {
      POSITION: [7, 8, 6.5, -60, 190, 0],
      TYPE: [exports.machineTurret, { COLOR: 5 }],
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 8, -5.5, 180, 190, 0],
      TYPE: [exports.machineTurret, { COLOR: 5 }],
    },
    {
      POSITION: [7, 8, -5.5, 60, 190, 0],
      TYPE: [exports.machineTurret, { COLOR: 5 }],
    },
    {
      POSITION: [7, 8, -5.5, -60, 190, 0],
      TYPE: [exports.machineTurret, { COLOR: 5 }],
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: exports.builder,
    },
  ],
};
exports.cs3 = {
  //Crasher Spirit
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  LABEL: "CS-3",
  SIZE: 30,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 8, 4.5, 180, 190, 0],
      TYPE: [exports.sprayTurret, { COLOR: 5 }],
    },
    {
      POSITION: [7, 8, 4.5, 60, 190, 0],
      TYPE: [exports.sprayTurret, { COLOR: 5 }],
    },
    {
      POSITION: [7, 8, 4.5, -60, 190, 0],
      TYPE: [exports.sprayTurret, { COLOR: 5 }],
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 8, -4.5, 180, 190, 0],
      TYPE: [exports.sprayTurret, { COLOR: 5 }],
    },
    {
      POSITION: [7, 8, -4.5, 60, 190, 0],
      TYPE: [exports.sprayTurret, { COLOR: 5 }],
    },
    {
      POSITION: [7, 8, -4.5, -60, 190, 0],
      TYPE: [exports.sprayTurret, { COLOR: 5 }],
    },
    {
      POSITION: [4, 10, 0, 0, 360, 1],
      TYPE: exports.cruiserTurret,
    },
    {
      POSITION: [4, 10, 0, 120, 360, 1],
      TYPE: exports.cruiserTurret,
    },
    {
      POSITION: [4, 10, 0, 240, 360, 1],
      TYPE: exports.cruiserTurret,
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: exports.builder,
    },
  ],
};
exports.cs4 = {
  //Crasher Spirit
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  LABEL: "CS-4",
  SIZE: 40,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 8.5, 9, 180, 190, 0],
      TYPE: [exports.machineTurret, { COLOR: 5 }],
    },
    {
      POSITION: [5, 8.5, 9, 60, 190, 0],
      TYPE: [exports.machineTurret, { COLOR: 5 }],
    },
    {
      POSITION: [5, 8.5, 9, -60, 190, 0],
      TYPE: [exports.machineTurret, { COLOR: 5 }],
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 8.5, -9, 180, 190, 0],
      TYPE: [exports.machineTurret, { COLOR: 5 }],
    },
    {
      POSITION: [5, 8.5, -9, 60, 190, 0],
      TYPE: [exports.machineTurret, { COLOR: 5 }],
    },
    {
      POSITION: [5, 8.5, -9, -60, 190, 0],
      TYPE: [exports.machineTurret, { COLOR: 5 }],
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 8.5, 3, 180, 190, 0],
      TYPE: [exports.sprayTurret, { COLOR: 5 }],
    },
    {
      POSITION: [5, 8.5, 3, 60, 190, 0],
      TYPE: [exports.sprayTurret, { COLOR: 5 }],
    },
    {
      POSITION: [5, 8.5, 3, -60, 190, 0],
      TYPE: [exports.sprayTurret, { COLOR: 5 }],
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 8.5, -3, 180, 190, 0],
      TYPE: [exports.sprayTurret, { COLOR: 5 }],
    },
    {
      POSITION: [5, 8.5, -3, 60, 190, 0],
      TYPE: [exports.sprayTurret, { COLOR: 5 }],
    },
    {
      POSITION: [5, 8.5, -3, -60, 190, 0],
      TYPE: [exports.sprayTurret, { COLOR: 5 }],
    },
    {
      POSITION: [2.5, 12, 0, 0, 360, 1],
      TYPE: exports.cruiserTurret,
    },
    {
      POSITION: [2.5, 12, 0, 120, 360, 1],
      TYPE: exports.cruiserTurret,
    },
    {
      POSITION: [2.5, 12, 0, 240, 360, 1],
      TYPE: exports.cruiserTurret,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [2.5, 6, 5, 60, 360, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [2.5, 6, 5, 180, 360, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [2.5, 6, 5, 300, 360, 1],
      TYPE: exports.sniper3gun,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [2.5, 6, -5, 60, 360, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [2.5, 6, -5, 180, 360, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [2.5, 6, -5, 300, 360, 1],
      TYPE: exports.sniper3gun,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [2.5, 6, 0, 60, 360, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [2.5, 6, 0, 180, 360, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [2.5, 6, 0, 300, 360, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [8, 0, 0, 0, 360, 1],
      TYPE: exports.oxyrrhynchium,
    },
  ],
};

exports.cs5 = {
  //Crasher Spirit
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  LABEL: "CS-5",
  SIZE: 45,
  GUNS: [
    {
      POSITION: [0, 14, 1.2, 0, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone]),
        TYPE: exports.cs5Minion,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
      },
    },
    {
      POSITION: [0, 14, 1.2, 0, 0, 180, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone]),
        TYPE: exports.cs5Minion,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
      },
    },
    {
      POSITION: [0.5, 14, 1.2, 0, 0, 300, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone]),
        TYPE: exports.cs5Minion,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
      },
    },
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 8.5, 9, 180, 190, 0],
      TYPE: [exports.oxyrrhexisTurret],
    },
    {
      POSITION: [5, 8.5, 9, 60, 190, 0],
      TYPE: [exports.oxyrrhexisTurret],
    },
    {
      POSITION: [5, 8.5, 9, -60, 190, 0],
      TYPE: [exports.oxyrrhexisTurret],
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 8.5, -9, 180, 190, 0],
      TYPE: [exports.oxyrrhexisTurret],
    },
    {
      POSITION: [5, 8.5, -9, 60, 190, 0],
      TYPE: [exports.oxyrrhexisTurret],
    },
    {
      POSITION: [5, 8.5, -9, -60, 190, 0],
      TYPE: [exports.oxyrrhexisTurret],
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 8.5, 3, 180, 190, 0],
      TYPE: [exports.sprayTurret, { COLOR: 5 }],
    },
    {
      POSITION: [5, 8.5, 3, 60, 190, 0],
      TYPE: [exports.sprayTurret, { COLOR: 5 }],
    },
    {
      POSITION: [5, 8.5, 3, -60, 190, 0],
      TYPE: [exports.sprayTurret, { COLOR: 5 }],
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 8.5, -3, 180, 190, 0],
      TYPE: [exports.sprayTurret, { COLOR: 5 }],
    },
    {
      POSITION: [5, 8.5, -3, 60, 190, 0],
      TYPE: [exports.sprayTurret, { COLOR: 5 }],
    },
    {
      POSITION: [5, 8.5, -3, -60, 190, 0],
      TYPE: [exports.sprayTurret, { COLOR: 5 }],
    },
    {
      POSITION: [2.5, 12, 0, 0, 360, 1],
      TYPE: exports.cruiserTurret,
    },
    {
      POSITION: [2.5, 12, 0, 120, 360, 1],
      TYPE: exports.cruiserTurret,
    },
    {
      POSITION: [2.5, 12, 0, 240, 360, 1],
      TYPE: exports.cruiserTurret,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [2.5, 6, 5, 60, 360, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [2.5, 6, 5, 180, 360, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [2.5, 6, 5, 300, 360, 1],
      TYPE: exports.sniper3gun,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [2.5, 6, -5, 60, 360, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [2.5, 6, -5, 180, 360, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [2.5, 6, -5, 300, 360, 1],
      TYPE: exports.sniper3gun,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [2.5, 6, 0, 60, 360, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [2.5, 6, 0, 180, 360, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [2.5, 6, 0, 300, 360, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [8, 0, 0, 0, 360, 1],
      TYPE: exports.oxyrrhynchium,
    },
  ],
};
exports.csDestructionTriangle = {
  //Crasher Spirit
  PARENT: [exports.elite],
  FACING_TYPE: "toTarget",
  AI: { NO_LEAD: false },
  LABEL: "Triangle",
  TURRETS: [
    {
      POSITION: [8, 0, 0, 0, 360, 1],
      TYPE: exports.deathCannon,
    },
  ],
};
for (let i = 0; i < 5; i++)
  exports.csDestructionTriangle.TURRETS.push(
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [3.5, 12 - i * 4, (2 + i * 2) * 1.166, 0, 0, 0],
      TYPE: [exports.triple],
    },
    {
      POSITION: [3.5, 12 - i * 4, (-2 - i * 2) * 1.166, 0, 0, 0],
      TYPE: [exports.triple],
    }
  );
exports.csDestructionBody = {
  //Crasher Spirit
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  LABEL: "Layer",
  SHAPE: 6,
  TURRETS: [
    {
      POSITION: [5, 9, 3, 0, 0, 0],
      TYPE: exports.mini,
    },
    {
      POSITION: [5, 9, -3, 0, 0, 0],
      TYPE: exports.mini,
    },
    {
      POSITION: [5, 9, 3, 60, 0, 0],
      TYPE: exports.mini,
    },
    {
      POSITION: [5, 9, -3, 60, 0, 0],
      TYPE: exports.mini,
    },
    {
      POSITION: [5, 9, 3, 120, 0, 0],
      TYPE: exports.mini,
    },
    {
      POSITION: [5, 9, -3, 120, 0, 0],
      TYPE: exports.mini,
    },
    {
      POSITION: [5, 9, 3, 180, 0, 0],
      TYPE: exports.mini,
    },
    {
      POSITION: [5, 9, -3, 180, 0, 0],
      TYPE: exports.mini,
    },
    {
      POSITION: [5, 9, 3, 240, 0, 0],
      TYPE: exports.mini,
    },
    {
      POSITION: [5, 9, -3, 240, 0, 0],
      TYPE: exports.mini,
    },
    {
      POSITION: [5, 9, 3, 300, 0, 0],
      TYPE: exports.mini,
    },
    {
      POSITION: [5, 9, -3, 300, 0, 0],
      TYPE: exports.mini,
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: exports.deathCannon,
    },
  ],
};
exports.csDestructionBody2 = {
  //Crasher Spirit
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  LABEL: "Layer",
  SHAPE: 6,
  GUNS: [
    {
      POSITION: [4, 6, -1.6, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.op, g.doublereload]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [4, 6, -1.6, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.op, g.doublereload]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [4, 6, -1.6, 8, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.op, g.doublereload]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [4, 6, -1.6, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.op, g.doublereload]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [4, 6, -1.6, 8, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.op, g.doublereload]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [4, 6, -1.6, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.op, g.doublereload]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [3.5, 10, -2, 30, 0, 0],
      TYPE: exports.sprayOP,
    },
    {
      POSITION: [3.5, 10, 2, 30, 0, 0],
      TYPE: exports.sprayOP,
    },
    {
      POSITION: [3.5, 10, -2, 90, 0, 0],
      TYPE: exports.sprayOP,
    },
    {
      POSITION: [3.5, 10, 2, 90, 0, 0],
      TYPE: exports.sprayOP,
    },
    {
      POSITION: [3.5, 10, -2, 150, 0, 0],
      TYPE: exports.sprayOP,
    },
    {
      POSITION: [3.5, 10, 2, 150, 0, 0],
      TYPE: exports.sprayOP,
    },
    {
      POSITION: [3.5, 10, -2, 210, 0, 0],
      TYPE: exports.sprayOP,
    },
    {
      POSITION: [3.5, 10, 2, 210, 0, 0],
      TYPE: exports.sprayOP,
    },
    {
      POSITION: [3.5, 10, -2, 270, 0, 0],
      TYPE: exports.sprayOP,
    },
    {
      POSITION: [3.5, 10, 2, 270, 0, 0],
      TYPE: exports.sprayOP,
    },
    {
      POSITION: [3.5, 10, -2, 330, 0, 0],
      TYPE: exports.sprayOP,
    },
    {
      POSITION: [3.5, 10, 2, 330, 0, 0],
      TYPE: exports.sprayOP,
    },
    {
      POSITION: [15, 0, 0, 0, 0, 1],
      TYPE: exports.csDestructionBody,
    },
  ],
};
exports.csDestruction = {
  //Crasher Spirit
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  LABEL: "CS-Destruction",
  SHAPE: 6,
  SIZE: 60,
  GUNS: [
    {
      POSITION: [0, 14, 1.2, 0, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone]),
        TYPE: exports.cs5Minion,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
      },
    },
    {
      POSITION: [0, 14, 1.2, 0, 0, 180, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone]),
        TYPE: exports.cs5Minion,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
      },
    },
    {
      POSITION: [0.5, 14, 1.2, 0, 0, 300, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone]),
        TYPE: exports.cs5Minion,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [6.667, 12.333, 0, 0, 0, 0],
      TYPE: exports.csDestructionTriangle,
    },
    {
      POSITION: [6.667, 12.333, 0, 60, 0, 0],
      TYPE: exports.csDestructionTriangle,
    },
    {
      POSITION: [6.667, 12.333, 0, 120, 0, 0],
      TYPE: exports.csDestructionTriangle,
    },
    {
      POSITION: [6.667, 12.333, 0, 180, 0, 0],
      TYPE: exports.csDestructionTriangle,
    },
    {
      POSITION: [6.667, 12.333, 0, 240, 0, 0],
      TYPE: exports.csDestructionTriangle,
    },
    {
      POSITION: [6.667, 12.333, 0, 300, 0, 0],
      TYPE: exports.csDestructionTriangle,
    },
    {
      POSITION: [2.5, 8, 0, 30, 360, 1],
      TYPE: exports.oxyrrhexisTurret,
    },
    {
      POSITION: [2.5, 8, 0, 90, 360, 1],
      TYPE: exports.oxyrrhexisTurret,
    },
    {
      POSITION: [2.5, 8, 0, 150, 360, 1],
      TYPE: exports.oxyrrhexisTurret,
    },
    {
      POSITION: [2.5, 8, 0, 210, 360, 1],
      TYPE: exports.oxyrrhexisTurret,
    },
    {
      POSITION: [2.5, 8, 0, 270, 360, 1],
      TYPE: exports.oxyrrhexisTurret,
    },
    {
      POSITION: [2.5, 8, 0, 330, 360, 1],
      TYPE: exports.oxyrrhexisTurret,
    },
    {
      POSITION: [14, 0, 0, 0, 0, 1],
      TYPE: exports.csDestructionBody2,
    },
  ],
};
exports.multiOrthodox = {
  PARENT: [exports.miniboss],
  LABEL: "Multi-Orthodox",
  SHAPE:
    "M 0 0 A 0.25 0.25 90 0 1 0 -1 A 0.25 0.25 90 0 1 0 0 M 0 0 A 0.25 0.25 90 0 1 0 1 A 0.25 0.25 90 0 1 0 0",
  SIZE: 30,
  COLOR: 0,
  TURRETS: [
    {
      POSITION: [6, 5, 0, 90, 360, 1],
      TYPE: exports.ranger,
    },
    {
      POSITION: [6, 5, 0, 270, 360, 1],
      TYPE: exports.ranger,
    },
    {
      POSITION: [5, 4, -5, 0, 90, 0],
      TYPE: [exports.autoTankGun, { PARENT: [exports.orthodox2] }],
    },
    {
      POSITION: [5, 4, 5, 0, 90, 0],
      TYPE: [exports.autoTankGun, { PARENT: [exports.orthodox2] }],
    },
    {
      POSITION: [5, 4, -5, 180, 90, 0],
      TYPE: [exports.autoTankGun, { PARENT: [exports.orthodox2] }],
    },
    {
      POSITION: [5, 4, 5, 180, 90, 0],
      TYPE: [exports.autoTankGun, { PARENT: [exports.orthodox2] }],
    },
    {
      POSITION: [5, 9, 0, 90, 90, 0],
      TYPE: [exports.autoTankGun, { PARENT: [exports.orthodox3] }],
    },
    {
      POSITION: [5, 9, 0, 270, 90, 0],
      TYPE: [exports.autoTankGun, { PARENT: [exports.orthodox3] }],
    },
  ],
};
exports.odinTurret = createTurret(exports.odin);
exports.lsmMusketeer = createTurret(
  {
    PARENT: [exports.genericTank],
    LABEL: "Musketeer",
    GUNS: [
      {
        POSITION: [1, 4, 1, 11, 1, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun]),
          TYPE: exports.trap,
          TIMES_TO_FIRE: 3,
        },
      },
      {
        POSITION: [1, 3, 1, 13, -1, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun]),
          TYPE: exports.trap,
          TIMES_TO_FIRE: 3,
        },
      },
      {
        POSITION: [22, 4, 1, 0, -2.75, 0, 0],
      },
      {
        POSITION: [22, 4, 1, 0, 2.75, 0, 0],
      },
      {
        POSITION: [6, 11, 1.5, 20, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun, g.fake]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
    ],
  },
  [g.turret]
);
exports.lsmSubTurret = createAutoGun(exports.submachine, [g.turret]);
exports.lsmPelleterTurret = createAutoGun(exports.pelleter, [g.turret]);
exports.lsmSubduerTurret = createAutoGun(exports.subduer, [g.turret]);
exports.lsmSubUnit = makeAuto(
  {
    PARENT: [exports.genericTank],
    SHAPE: 4,
    COLOR: 5,
    MIRROR_MASTER_ANGLE: true,
    TURRETS: [
      {
        POSITION: [16, 9, 0, 0, 160, 0],
        TYPE: [
          exports.lsmMusketeer,
          {
            COLOR: 5,
            CONTROLLERS: [
              "canRepel",
              "onlyAcceptInArc",
              "mapAltToFire", //yeet
              "nearestDifferentMaster",
            ],
          },
        ],
      },
      {
        POSITION: [4, 9, -6.5, 90, 160, 0],
        TYPE: exports.autoTankGun,
      },
      {
        POSITION: [4, 9, -2.25, 90, 160, 0],
        TYPE: exports.autoTankGun,
      },
      {
        POSITION: [4, 9, 6.5, 270, 160, 0],
        TYPE: exports.autoTankGun,
      },
      {
        POSITION: [4, 9, 2.25, 270, 160, 0],
        TYPE: exports.autoTankGun,
      },
    ],
  },
  "Unit",
  {
    type: exports.lsmSubTurret,
    independent: false,
  }
);
exports.lsm = {
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  LABEL: "Legendary Submachine", //LSM
  SIZE: 64,
  FACING_TYPE: "spinSlowly",
  SHAPE: 3,
  TURRETS: [
    {
      POSITION: [3.5, 8, -11, 60, 135, 0],
      TYPE: exports.lsmSubduerTurret,
    },
    {
      POSITION: [3.5, 8, 11, 60, 135, 0],
      TYPE: exports.lsmSubduerTurret,
    },
    {
      POSITION: [3.5, 8, -7, 60, 135, 0],
      TYPE: exports.lsmPelleterTurret,
    },
    {
      POSITION: [3.5, 8, 7, 60, 135, 0],
      TYPE: exports.lsmPelleterTurret,
    },
    {
      POSITION: [3.5, 8, -11, 180, 135, 0],
      TYPE: exports.lsmSubduerTurret,
    },
    {
      POSITION: [3.5, 8, 11, 180, 135, 0],
      TYPE: exports.lsmSubduerTurret,
    },
    {
      POSITION: [3.5, 8, -7, 180, 135, 0],
      TYPE: exports.lsmPelleterTurret,
    },
    {
      POSITION: [3.5, 8, 7, 180, 135, 0],
      TYPE: exports.lsmPelleterTurret,
    },
    {
      POSITION: [3.5, 8, -11, 300, 135, 0],
      TYPE: exports.lsmSubduerTurret,
    },
    {
      POSITION: [3.5, 8, 11, 300, 135, 0],
      TYPE: exports.lsmSubduerTurret,
    },
    {
      POSITION: [3.5, 8, -7, 300, 135, 0],
      TYPE: exports.lsmPelleterTurret,
    },
    {
      POSITION: [3.5, 8, 7, 300, 135, 0],
      TYPE: exports.lsmPelleterTurret,
    },
    {
      POSITION: [10, 12.5, 0, 60, 0, 1],
      TYPE: exports.lsmSubUnit,
    },
    {
      POSITION: [10, 12.5, 0, 180, 0, 1],
      TYPE: exports.lsmSubUnit,
    },
    {
      POSITION: [10, 12.5, 0, 300, 0, 1],
      TYPE: exports.lsmSubUnit,
    },
    {
      POSITION: [8, 0, 0, 0, 360, 1],
      TYPE: exports.odinTurret,
    },
  ],
};
exports.obpProp1 = {
  SYNC_TURRET_SKILLS: true,
  LABEL: "",
  SHAPE: 3,
  COLOR: 14,
  TURRETS: [
    {
      POSITION: [12, 0, 0, 0, 360, 1],
      TYPE: exports.machineTurret,
    },
  ],
};
exports.miniTurret = createAutoGun(exports.mini);
exports.obpProp2 = {
  SYNC_TURRET_SKILLS: true,
  LABEL: "",
  SHAPE: 3,
  COLOR: 14,
  TURRETS: [
    {
      POSITION: [12, 0, 0, 0, 360, 1],
      TYPE: exports.miniTurret,
    },
  ],
  GUNS: [
    {
      POSITION: [18, 8, 1, 0, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.halfreload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.halfreload]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.obpProp3 = {
  SYNC_TURRET_SKILLS: true,
  LABEL: "",
  SHAPE: 3,
  COLOR: 14,
  TURRETS: [
    {
      POSITION: [12, 0, 0, 0, 360, 1],
      TYPE: exports.autoTankGun,
    },
  ],
  GUNS: [
    {
      POSITION: [21, 8, 1, 0, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 13, 1, 0, 0, 60, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 8, 1, 0, 0, -60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 13, 1, 0, 0, -60, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.obpProp4 = {
  SYNC_TURRET_SKILLS: true,
  LABEL: "",
  SHAPE: 3,
  COLOR: 14,
  TURRETS: [
    {
      POSITION: [12, 0, 0, 0, 360, 1],
      TYPE: exports.miniTurret,
    },
  ],
  GUNS: [
    {
      POSITION: [21, 8, 1, 0, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 12, 1, 0, 0, 60, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.preda,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 16, 1, 0, 0, 60, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.preda,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 8, 1, 0, 0, 300, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 12, 1, 0, 0, 300, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.preda,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 16, 1, 0, 0, 300, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.preda,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.obpPart1 = {
  SYNC_TURRET_SKILLS: true,
  LABEL: "",
  SHAPE: 4,
  COLOR: 14,
  TURRETS: [
    {
      POSITION: [12, 0, 0, 0, 360, 1],
      TYPE: exports.sniper3gun,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 6, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 6, -1.4, 5.5, 0, 90, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 6, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 6, -1.4, 5.5, 0, 270, 0],
    },
  ],
};
exports.obp1 = {
  PARENT: [exports.genericTank],
  LABEL: "OBP-1",
  COLOR: 14,
  SHAPE: 5,
  SIZE: 26,
  LEVEL: 60,
  VALUE: 59212,
  BODY: {
    FOV: 0.9,
    SPEED: 1.3,
    ACCELERATION: 0.6,
    HEALTH: 1000,
  },
  TURRETS: [
    {
      POSITION: [8.5, 13, 0, -108, 0, 1],
      TYPE: exports.obpProp1,
    },
    {
      POSITION: [8.5, 13, 0, 108, 0, 1],
      TYPE: exports.obpProp1,
    },
  ],
  GUNS: [
    {
      POSITION: [12, 4, 1, 0, 0, 36, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.morespeed, g.doublereload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 4, 1, 0, 0, -36, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.morespeed, g.doublereload]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.obp2 = {
  PARENT: [exports.genericTank],
  LABEL: "OBP-2",
  DANGER: 8,
  COLOR: 14,
  SHAPE: 5,
  SIZE: 30,
  LEVEL: 60,
  VALUE: 59212,
  BODY: {
    FOV: 0.9,
    SPEED: 1.15,
    ACCELERATION: 0.5,
    HEALTH: 1500,
  },
  TURRETS: [
    {
      POSITION: [8.5, 13, 0, -108, 0, 1],
      TYPE: exports.obpProp2,
    },
    {
      POSITION: [6.5, 12, 0, -180, 0, 1],
      TYPE: exports.obpProp1,
    },
    {
      POSITION: [8.5, 13, 0, 108, 0, 1],
      TYPE: exports.obpProp2,
    },
    {
      POSITION: [12.5, 0, 0, 0, 360, 1],
      TYPE: [
        exports.autoSmasherTurret,
        {
          COLOR: 14,
          CONTROLLERS: ["nearestDifferentMaster"],
        },
      ],
    },
  ],
};
exports.obp3 = {
  PARENT: [exports.genericTank],
  LABEL: "OBP-3",
  DANGER: 8,
  COLOR: 14,
  SHAPE: 5,
  SIZE: 34,
  LEVEL: 60,
  VALUE: 59212,
  BODY: {
    FOV: 0.9,
    SPEED: 1.1,
    ACCELERATION: 0.4,
    HEALTH: 2000,
  },
  FACING_TYPE: "spinSlowly",
  TURRETS: [
    {
      POSITION: [8.5, 13, 0, -108, 0, 1],
      TYPE: exports.obpProp3,
    },
    {
      POSITION: [8.5, 13, 0, 36, 0, 1],
      TYPE: exports.obpProp3,
    },
    {
      POSITION: [8.5, 13, 0, -36, 0, 1],
      TYPE: exports.obpProp3,
    },
    {
      POSITION: [8.5, 13, 0, 180, 0, 1],
      TYPE: exports.obpProp3,
    },
    {
      POSITION: [8.5, 13, 0, 108, 0, 1],
      TYPE: exports.obpProp3,
    },
    {
      POSITION: [12.5, 0, 0, 0, 360, 1],
      TYPE: [
        exports.autoSmasherTurret,
        {
          COLOR: 14,
          CONTROLLERS: ["nearestDifferentMaster"],
        },
      ],
    },
  ],
};
exports.obp1Minion = {
  PARENT: [exports.minion],
  LABEL: "OBP-1",
  COLOR: 14,
  SHAPE: 5,
  LEVEL: 60,
  VALUE: 59212,
  BODY: {
    FOV: 0.9,
    SPEED: 5,
    ACCELERATION: 0.6,
    HEALTH: 1000,
  },
  TURRETS: [
    {
      POSITION: [8.5, 13, 0, -108, 0, 1],
      TYPE: exports.obpProp1,
    },
    {
      POSITION: [8.5, 13, 0, 108, 0, 1],
      TYPE: exports.obpProp1,
    },
  ],
  GUNS: [
    {
      POSITION: [12, 4, 1, 0, 0, 36, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.morespeed, g.doublereload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 4, 1, 0, 0, -36, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.morespeed, g.doublereload]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.obp4 = {
  PARENT: [exports.genericTank],
  LABEL: "OBP-4",
  DANGER: 8,
  COLOR: 14,
  SHAPE: 5,
  SIZE: 40,
  LEVEL: 60,
  VALUE: 59212,
  BODY: {
    FOV: 0.9,
    SPEED: 1.1,
    ACCELERATION: 0.4,
    HEALTH: 5000,
  },
  TOOLTIP: "This is not a real OBP tier.",
  FACING_TYPE: "spinSlowly",
  GUNS: [
    {
      POSITION: [2.25, 11, 1.01, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.evensmaller]),
        TYPE: [exports.obp1Minion, { HITS_OWN_TYPE: "hardWithBuffer" }],
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 2,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [8.5, 13, 0, 36, 0, 0],
      TYPE: exports.obpProp4,
    },
    {
      POSITION: [8.5, 13, 0, 108, 0, 0],
      TYPE: exports.obpProp4,
    },
    {
      POSITION: [8.5, 13, 0, 180, 0, 0],
      TYPE: exports.obpProp4,
    },
    {
      POSITION: [8.5, 13, 0, 252, 0, 0],
      TYPE: exports.obpProp4,
    },
    {
      POSITION: [8.5, 13, 0, 324, 0, 0],
      TYPE: exports.obpProp4,
    },
    {
      POSITION: [2.5, 9.5, 0, 0, 360, 1],
      TYPE: [exports.autoTankGun, { COLOR: 14 }],
    },
    {
      POSITION: [2.5, 9.5, 0, 72, 360, 1],
      TYPE: [exports.autoTankGun, { COLOR: 14 }],
    },
    {
      POSITION: [2.5, 9.5, 0, 144, 360, 1],
      TYPE: [exports.autoTankGun, { COLOR: 14 }],
    },
    {
      POSITION: [2.5, 9.5, 0, 216, 360, 1],
      TYPE: [exports.autoTankGun, { COLOR: 14 }],
    },
    {
      POSITION: [2.5, 9.5, 0, 288, 360, 1],
      TYPE: [exports.autoTankGun, { COLOR: 14 }],
    },
    {
      POSITION: [12.5, 0, 0, 0, 360, 1],
      TYPE: [
        exports.autoSmasherTurret,
        {
          COLOR: 14,
          CONTROLLERS: ["nearestDifferentMaster"],
        },
      ],
    },
  ],
};
exports.obp2Minion = createMinion(exports.obp2);
exports.cerimatizerTopTurret = createTurret(exports.cerimatizer);
exports.obp5 = {
  PARENT: [exports.genericTank],
  LABEL: "OBP-5",
  DANGER: 8,
  COLOR: 14,
  SHAPE: 5,
  SIZE: 45,
  LEVEL: 60,
  VALUE: 59212,
  BODY: {
    FOV: 0.9,
    SPEED: 1.1,
    ACCELERATION: 0.4,
    HEALTH: 10000,
  },
  TOOLTIP: "This is not a real OBP tier.",
  FACING_TYPE: "spinSlowly",
  GUNS: [
    {
      POSITION: [2.25, 11, 1.01, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.evensmaller]),
        TYPE: [exports.obp2Minion, { HITS_OWN_TYPE: "hardWithBuffer" }],
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 2,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [2.5, 9.5, 0, 0, 360, 1],
      TYPE: [exports.autoSmasherTurret, { COLOR: 14 }],
    },
    {
      POSITION: [2.5, 9.5, 0, 72, 360, 1],
      TYPE: [exports.autoSmasherTurret, { COLOR: 14 }],
    },
    {
      POSITION: [2.5, 9.5, 0, 144, 360, 1],
      TYPE: [exports.autoSmasherTurret, { COLOR: 14 }],
    },
    {
      POSITION: [2.5, 9.5, 0, 216, 360, 1],
      TYPE: [exports.autoSmasherTurret, { COLOR: 14 }],
    },
    {
      POSITION: [2.5, 9.5, 0, 288, 360, 1],
      TYPE: [exports.autoSmasherTurret, { COLOR: 14 }],
    },
    {
      POSITION: [12.5, 0, 0, 0, 360, 1],
      TYPE: [
        exports.cerimatizerTopTurret,
        {
          COLOR: 14,
          CONTROLLERS: ["nearestDifferentMaster"],
        },
      ],
    },
  ],
};
for (let i = 0; i < 5; i++)
  exports.obp5.TURRETS.push(
    {
      POSITION: [9.85, 27.5, 0, 72 * i - 36, 0, 0],
      TYPE: exports.obpProp4,
    },
    {
      POSITION: [15, 16.5, 0, 72 * i - 36, 0, 0],
      TYPE: exports.obpPart1,
    }
  );
exports.magnetarThing1 = {
  SYNC_TURRET_SKILLS: true,
  LABEL: "",
  SHAPE: 3,
  COLOR: 4,
  GUNS: [
    {
      POSITION: [14, 14, -1.3, 0, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 14, -1.3, 0, 0, 300, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [12, 0, 0, 0, 360, 1],
      TYPE: exports.sniper3gun,
    },
  ],
};
exports.magnetarThing2 = {
  PARENT: [exports.genericTank],
  SYNC_TURRET_SKILLS: true,
  SHAPE: 4,
  CONTROLLERS: ["slowspin"],
  COLOR: 4,
  TURRETS: [
    {
      POSITION: [12, 6, 0, 0, 190, 0],
      TYPE: [exports.gunnerAutoTankgun, { CONTROLLERS: ["obeysMouseRot"] }],
    },
    {
      POSITION: [12, 6, 0, 90, 190, 0],
      TYPE: [exports.gunnerAutoTankgun, { CONTROLLERS: ["obeysMouseRot"] }],
    },
    {
      POSITION: [12, 6, 0, 180, 190, 0],
      TYPE: [exports.gunnerAutoTankgun, { CONTROLLERS: ["obeysMouseRot"] }],
    },
    {
      POSITION: [12, 6, 0, 270, 190, 0],
      TYPE: [exports.gunnerAutoTankgun, { CONTROLLERS: ["obeysMouseRot"] }],
    },
  ],
};
exports.anniTurret = createTurret(exports.anni);
exports.crockettTurret = createTurret(exports.crockett);
exports.magnetarThing3 = {
  PARENT: [exports.genericTank],
  SYNC_TURRET_SKILLS: true,
  SHAPE: 4,
  CONTROLLERS: ["slowspin"],
  COLOR: 4,
  TURRETS: [
    {
      POSITION: [12, 6, 0, 0, 190, 0],
      TYPE: [exports.gunnerAutoTankgun, { CONTROLLERS: ["obeysMouseRot"] }],
    },
    {
      POSITION: [12, 6, 0, 90, 190, 0],
      TYPE: [exports.gunnerAutoTankgun, { CONTROLLERS: ["obeysMouseRot"] }],
    },
    {
      POSITION: [12, 6, 0, 180, 190, 0],
      TYPE: [exports.gunnerAutoTankgun, { CONTROLLERS: ["obeysMouseRot"] }],
    },
    {
      POSITION: [12, 6, 0, 270, 190, 0],
      TYPE: [exports.gunnerAutoTankgun, { CONTROLLERS: ["obeysMouseRot"] }],
    },
    {
      POSITION: [6, 6, 0, 0, 190, 1],
      TYPE: [exports.anniTurret, { CONTROLLERS: ["obeysMouseRot"] }],
    },
    {
      POSITION: [6, 6, 0, 90, 190, 1],
      TYPE: [exports.crockettTurret, { CONTROLLERS: ["obeysMouseRot"] }],
    },
    {
      POSITION: [6, 6, 0, 180, 190, 1],
      TYPE: [exports.anniTurret, { CONTROLLERS: ["obeysMouseRot"] }],
    },
    {
      POSITION: [6, 6, 0, 270, 190, 1],
      TYPE: [exports.crockettTurret, { CONTROLLERS: ["obeysMouseRot"] }],
    },
  ],
};
exports.magnetarThing4 = {
  SYNC_TURRET_SKILLS: true,
  LABEL: "",
  SHAPE: 3,
  COLOR: 4,
  GUNS: [
    {
      POSITION: [14, 14, -1.3, 0, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 14, -1.3, 0, 0, 300, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [12, 0, 0, 0, 360, 1],
      TYPE: exports.pelleterAutoTankgun,
    },
  ],
};
exports.magnetarThing5 = {
  SYNC_TURRET_SKILLS: true,
  LABEL: "",
  SHAPE: 3,
  COLOR: 4,
  GUNS: [
    {
      POSITION: [14, 14, -1.3, 0, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 14, -1.3, 0, 0, 300, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [26, 8, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [8, 8, 2, 23, 0, 0, 0],
    },
  ],
  TURRETS: [
    {
      POSITION: [16, 33, 0, 0, 0, 1],
      TYPE: exports.atmg2,
    },
    {
      POSITION: [12, 0, 0, 0, 360, 1],
      TYPE: exports.pelleterAutoTankgun,
    },
  ],
};
exports.magnetar2 = {
  //not-so real pulsar-x series
  PARENT: [exports.genericTank],
  LABEL: "Magnetar-2",
  DANGER: 12,
  SHAPE: 4,
  COLOR: 4,
  SIZE: 28,
  VALUE: 59212,
  TURRETS: [
    {
      POSITION: [13.333, 14, 0, 90, 0, 0],
      TYPE: exports.magnetarThing1,
    },
    {
      POSITION: [13.333, 14, 0, 270, 0, 0],
      TYPE: exports.magnetarThing1,
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.pelleterAutoTankgun,
    },
  ],
};
exports.musketeerTurret = createTurret(exports.musketeer);
exports.magnetar3 = {
  //not-so real pulsar-x series
  PARENT: [exports.genericTank],
  LABEL: "Magnetar-3",
  DANGER: 12,
  SHAPE: 3,
  COLOR: 4,
  SIZE: 28,
  VALUE: 59212,
  TURRETS: [
    {
      POSITION: [5, 14, 0, 0, 0, 0],
      TYPE: exports.musketeerTurret,
    },
    {
      POSITION: [5, 14, 0, 120, 0, 0],
      TYPE: exports.musketeerTurret,
    },
    {
      POSITION: [5, 14, 0, 240, 0, 0],
      TYPE: exports.musketeerTurret,
    },
    {
      POSITION: [12, 13, 0, 60, 0, 0],
      TYPE: exports.magnetarThing1,
    },
    {
      POSITION: [12, 13, 0, 180, 0, 0],
      TYPE: exports.magnetarThing1,
    },
    {
      POSITION: [12, 13, 0, 300, 0, 0],
      TYPE: exports.magnetarThing1,
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.gunnerAutoTankgun,
    },
  ],
};
exports.wharTurret = createTurret(exports.whar);
exports.bearTrapTurret = createTurret(exports.bearTrap);
exports.magnetar4 = {
  //not-so real pulsar-x series
  PARENT: [exports.genericTank],
  LABEL: "Magnetar-4",
  DANGER: 12,
  SHAPE: 4,
  COLOR: 4,
  SIZE: 28,
  VALUE: 59212,
  TURRETS: [
    {
      POSITION: [13.333, 14, 0, 0, 0, 0],
      TYPE: exports.magnetarThing1,
    },
    {
      POSITION: [13.333, 14, 0, 90, 0, 0],
      TYPE: exports.magnetarThing1,
    },
    {
      POSITION: [13.333, 14, 0, 180, 0, 0],
      TYPE: exports.magnetarThing1,
    },
    {
      POSITION: [13.333, 14, 0, 270, 0, 0],
      TYPE: exports.magnetarThing1,
    },
    {
      POSITION: [7, 12, 0, 45, 0, 1],
      TYPE: exports.bearTrapTurret,
    },
    {
      POSITION: [7, 12, 0, 135, 0, 1],
      TYPE: exports.bearTrapTurret,
    },
    {
      POSITION: [7, 12, 0, 225, 0, 1],
      TYPE: exports.bearTrapTurret,
    },
    {
      POSITION: [7, 12, 0, 315, 0, 1],
      TYPE: exports.bearTrapTurret,
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.magnetarThing2,
    },
  ],
};
exports.magnetar5 = {
  PARENT: [exports.genericTank],
  LABEL: "Magnetar-5",
  DANGER: 12,
  SHAPE: 5,
  COLOR: 4,
  SIZE: 28,
  VALUE: 59212,
  TURRETS: [
    {
      POSITION: [8.5, 13, 0, -108, 0, 1],
      TYPE: exports.magnetarThing1,
    },
    {
      POSITION: [8.5, 13, 0, 36, 0, 1],
      TYPE: exports.magnetarThing1,
    },
    {
      POSITION: [8.5, 13, 0, -36, 0, 1],
      TYPE: exports.magnetarThing1,
    },
    {
      POSITION: [8.5, 13, 0, 180, 0, 1],
      TYPE: exports.magnetarThing1,
    },
    {
      POSITION: [8.5, 13, 0, 108, 0, 1],
      TYPE: exports.magnetarThing1,
    },
    {
      POSITION: [5, 12, 0, 0, 0, 1],
      TYPE: exports.wharTurret,
    },
    {
      POSITION: [5, 12, 0, 72, 0, 1],
      TYPE: exports.wharTurret,
    },
    {
      POSITION: [5, 12, 0, 144, 0, 1],
      TYPE: exports.wharTurret,
    },
    {
      POSITION: [5, 12, 0, 216, 0, 1],
      TYPE: exports.wharTurret,
    },
    {
      POSITION: [5, 12, 0, 288, 0, 1],
      TYPE: exports.wharTurret,
    },
    {
      POSITION: [12.5, 0, 0, 0, 360, 1],
      TYPE: exports.magnetarThing2,
    },
  ],
};
exports.magnetar6 = {
  //not-so real pulsar-x series
  PARENT: [exports.genericTank],
  LABEL: "Magnetar-6",
  DANGER: 12,
  SHAPE: 6,
  COLOR: 4,
  SIZE: 28,
  VALUE: 59212,
  TURRETS: [
    {
      POSITION: [7, 9, 0, 60, 0, 0],
      TYPE: exports.wharTurret,
    },
    {
      POSITION: [7, 9, 0, 180, 0, 0],
      TYPE: exports.wharTurret,
    },
    {
      POSITION: [7, 9, 0, 300, 0, 0],
      TYPE: exports.wharTurret,
    },
    {
      POSITION: [8, 12.888, 0, 0, 0, 0],
      TYPE: exports.magnetarThing1,
    },
    {
      POSITION: [8, 12.888, 0, 120, 0, 0],
      TYPE: exports.magnetarThing1,
    },
    {
      POSITION: [8, 12.888, 0, 240, 0, 0],
      TYPE: exports.magnetarThing1,
    },
    {
      POSITION: [14, 0, 0, 0, 360, 1],
      TYPE: exports.palisade,
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.magnetarThing3,
    },
  ],
};
let a = 360 / 7;
exports.magnetar7 = {
  //not-so real pulsar-x series
  PARENT: [exports.genericTank],
  LABEL: "Magnetar-7",
  DANGER: 12,
  SHAPE: 7,
  COLOR: 4,
  SIZE: 28,
  VALUE: 59212,
  TURRETS: [
    {
      POSITION: [7, 12.888, 0, a / 2, 0, 0],
      TYPE: exports.magnetarThing4,
    },
    {
      POSITION: [7, 12.888, 0, a * 1.5, 0, 0],
      TYPE: exports.magnetarThing4,
    },
    {
      POSITION: [7, 12.888, 0, a * 2.5, 0, 0],
      TYPE: exports.magnetarThing4,
    },
    {
      POSITION: [7, 12.888, 0, a * 3.5, 0, 0],
      TYPE: exports.magnetarThing4,
    },
    {
      POSITION: [7, 12.888, 0, a * 4.5, 0, 0],
      TYPE: exports.magnetarThing4,
    },
    {
      POSITION: [7, 12.888, 0, a * 5.5, 0, 0],
      TYPE: exports.magnetarThing4,
    },
    {
      POSITION: [7, 12.888, 0, a * 6.5, 0, 0],
      TYPE: exports.magnetarThing4,
    },
    {
      POSITION: [14, 0, 0, 0, 360, 1],
      TYPE: [exports.magnetar6, { FACING_TYPE: "autoreverse" }],
    },
  ],
};
exports.magnetar8 = {
  //not-so real pulsar-x series
  PARENT: [exports.genericTank],
  LABEL: "Magnetar-8",
  DANGER: 12,
  SHAPE: 8,
  COLOR: 4,
  SIZE: 28,
  VALUE: 59212,
  TURRETS: [
    {
      POSITION: [6, 12, 0, 0, 0, 0],
      TYPE: exports.magnetarThing4,
    },
    {
      POSITION: [6, 12, 0, 45, 0, 0],
      TYPE: exports.magnetarThing4,
    },
    {
      POSITION: [6, 12, 0, 90, 0, 0],
      TYPE: exports.magnetarThing4,
    },
    {
      POSITION: [6, 12, 0, 135, 0, 0],
      TYPE: exports.magnetarThing4,
    },
    {
      POSITION: [6, 12, 0, 180, 0, 0],
      TYPE: exports.magnetarThing4,
    },
    {
      POSITION: [6, 12, 0, 225, 0, 0],
      TYPE: exports.magnetarThing4,
    },
    {
      POSITION: [6, 12, 0, 270, 0, 0],
      TYPE: exports.magnetarThing4,
    },
    {
      POSITION: [6, 12, 0, 315, 0, 0],
      TYPE: exports.magnetarThing4,
    },
    {
      POSITION: [12, 0, 0, 0, 360, 1],
      TYPE: [exports.magnetar7, { FACING_TYPE: "autospin" }],
    },
  ],
};
exports.magnetar9 = {
  //not-so real pulsar-x series
  PARENT: [exports.genericTank],
  LABEL: "Magnetar-9",
  DANGER: 12,
  SHAPE: 9,
  COLOR: 4,
  SIZE: 28,
  VALUE: 59212,
  TURRETS: [
    {
      POSITION: [6, 9, 0, 20, 190, 0],
      TYPE: exports.gunnerAutoTankgun,
    },
    {
      POSITION: [6, 12, 0, 60, 0, 0],
      TYPE: exports.magnetarThing5,
    },
    {
      POSITION: [6, 9, 0, 100, 190, 0],
      TYPE: exports.gunnerAutoTankgun,
    },
    {
      POSITION: [6, 9, 0, 140, 190, 0],
      TYPE: exports.gunnerAutoTankgun,
    },
    {
      POSITION: [6, 12, 0, 180, 0, 0],
      TYPE: exports.magnetarThing5,
    },
    {
      POSITION: [6, 9, 0, 220, 190, 0],
      TYPE: exports.gunnerAutoTankgun,
    },
    {
      POSITION: [6, 9, 0, 260, 190, 0],
      TYPE: exports.gunnerAutoTankgun,
    },
    {
      POSITION: [6, 12, 0, 300, 0, 0],
      TYPE: exports.magnetarThing5,
    },
    {
      POSITION: [6, 9, 0, 340, 190, 0],
      TYPE: exports.gunnerAutoTankgun,
    },
    {
      POSITION: [12, 0, 0, 0, 360, 1],
      TYPE: [exports.magnetar8, { FACING_TYPE: "autoreverse" }],
    },
  ],
};
exports.lightsaberTurret = createTurret(exports.lightsaber);
let magnetar12Turrets = [];
for (let i = 0; i < 12; i++)
  magnetar12Turrets.push({
    POSITION: [6, 9, 0, i * 30, 190, 0],
    TYPE: exports.lightsaberTurret,
  });
exports.magnetar12 = {
  //not-so real pulsar-x series
  PARENT: [exports.genericTank],
  LABEL: "Magnetar-12",
  DANGER: 12,
  SHAPE: 9,
  COLOR: 4,
  SIZE: 28,
  VALUE: 59212,
  TURRETS: [
    ...magnetar12Turrets,
    {
      POSITION: [6, 9, 0, 20, 190, 0],
      TYPE: exports.gunnerAutoTankgun,
    },
    {
      POSITION: [6, 12, 0, 60, 0, 0],
      TYPE: exports.magnetarThing5,
    },
    {
      POSITION: [6, 9, 0, 100, 190, 0],
      TYPE: exports.gunnerAutoTankgun,
    },
    {
      POSITION: [6, 9, 0, 140, 190, 0],
      TYPE: exports.gunnerAutoTankgun,
    },
    {
      POSITION: [6, 12, 0, 180, 0, 0],
      TYPE: exports.magnetarThing5,
    },
    {
      POSITION: [6, 9, 0, 220, 190, 0],
      TYPE: exports.gunnerAutoTankgun,
    },
    {
      POSITION: [6, 9, 0, 260, 190, 0],
      TYPE: exports.gunnerAutoTankgun,
    },
    {
      POSITION: [6, 12, 0, 300, 0, 0],
      TYPE: exports.magnetarThing5,
    },
    {
      POSITION: [6, 9, 0, 340, 190, 0],
      TYPE: exports.gunnerAutoTankgun,
    },
    {
      POSITION: [12, 0, 0, 0, 360, 1],
      TYPE: [exports.magnetar8, { FACING_TYPE: "autoreverse" }],
    },
  ],
};
exports.flakistTurret = createAutoGun(exports.flakist);
exports.sfk1 = {
  PARENT: [exports.miniboss],
  LABEL: "SFK-1", //Litearlly remake of SFK-X
  DANGER: 12,
  SHAPE: 6,
  COLOR: 0,
  SIZE: 20,
  VALUE: 59212,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      POSITION: [10, 8, 0, 0, 190, 0],
      TYPE: [exports.flakistTurret],
    },
    {
      POSITION: [10, 8, 0, 120, 190, 0],
      TYPE: [exports.flakistTurret],
    },
    {
      POSITION: [10, 8, 0, 240, 190, 0],
      TYPE: [exports.flakistTurret],
    },
  ],
};
exports.sfk2 = {
  PARENT: [exports.miniboss],
  LABEL: "SFK-2", //Litearlly remake of SFK-X
  DANGER: 12,
  SHAPE: 6,
  COLOR: 0,
  SIZE: 20,
  VALUE: 59212,
  FACING_TYPE: "autospin",
  GUNS: [
    {
      POSITION: [4, 9, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.guardian]),
        TYPE: exports.drone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 5,
      },
    },
    {
      POSITION: [4, 9, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.guardian]),
        TYPE: exports.drone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 5,
      },
    },
    {
      POSITION: [4, 9, 1.2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.guardian]),
        TYPE: exports.drone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 5,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [10, 8, 0, 0, 190, 0],
      TYPE: [exports.flakistTurret],
    },
    {
      POSITION: [10, 8, 0, 120, 190, 0],
      TYPE: [exports.flakistTurret],
    },
    {
      POSITION: [10, 8, 0, 240, 190, 0],
      TYPE: [exports.flakistTurret],
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: [
        exports.auto3,
        { FACING_TYPE: "autoreverse", SYNC_TURRET_SKILLS: true },
      ],
    },
    {
      POSITION: [7, 0, 0, 0, 360, 1],
      TYPE: [exports.autoSmasherTurret],
    },
  ],
};
exports.sfk3 = {
  PARENT: [exports.miniboss],
  LABEL: "SFK-3", //Litearlly remake of SFK-X
  DANGER: 12,
  SHAPE: 6,
  COLOR: 0,
  SIZE: 23,
  VALUE: 59212,
  FACING_TYPE: "autospin",
  GUNS: [
    {
      POSITION: [4, 9, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.guardian]),
        TYPE: exports.drone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 5,
      },
    },
    {
      POSITION: [4, 9, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.guardian]),
        TYPE: exports.drone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 5,
      },
    },
    {
      POSITION: [4, 9, 1.2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.guardian]),
        TYPE: exports.drone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 5,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [5, 9.5, 0, 15, 190, 0],
      TYPE: [exports.autoSmasherTurret],
    },
    {
      POSITION: [5, 9.5, 0, 105, 190, 0],
      TYPE: [exports.autoSmasherTurret],
    },
    {
      POSITION: [5, 9.5, 0, 135, 190, 0],
      TYPE: [exports.autoSmasherTurret],
    },
    {
      POSITION: [5, 9.5, 0, 225, 190, 0],
      TYPE: [exports.autoSmasherTurret],
    },
    {
      POSITION: [5, 9.5, 0, 255, 190, 0],
      TYPE: [exports.autoSmasherTurret],
    },
    {
      POSITION: [5, 9.5, 0, 345, 190, 0],
      TYPE: [exports.autoSmasherTurret],
    },
    {
      POSITION: [8, 8, 0, 0, 190, 0],
      TYPE: [exports.flakistTurret],
    },
    {
      POSITION: [8, 8, 0, 120, 190, 0],
      TYPE: [exports.flakistTurret],
    },
    {
      POSITION: [8, 8, 0, 240, 190, 0],
      TYPE: [exports.flakistTurret],
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: [
        exports.auto3,
        { FACING_TYPE: "autoreverse", SYNC_TURRET_SKILLS: true },
      ],
    },
    {
      POSITION: [7, 0, 0, 0, 360, 1],
      TYPE: [exports.autoSmasherTurret],
    },
  ],
};
exports.sfk2Minion = createMinion(exports.sfk2, "autospin");
exports.sfk4 = {
  PARENT: [exports.miniboss],
  LABEL: "SFK-4", //Litearlly remake of SFK-X
  DANGER: 12,
  SHAPE: 6,
  COLOR: 0,
  SIZE: 25,
  VALUE: 59212,
  FACING_TYPE: "autospin",
  GUNS: [
    {
      POSITION: [4, 9, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.guardian]),
        TYPE: exports.sfk2Minion,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
      },
    },
    {
      POSITION: [4, 9, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.guardian]),
        TYPE: exports.sfk2Minion,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
      },
    },
    {
      POSITION: [4, 9, 1.2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.guardian]),
        TYPE: exports.sfk2Minion,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [5, 9.5, 0, 15, 190, 0],
      TYPE: [exports.flakistTurret],
    },
    {
      POSITION: [5, 9.5, 0, 105, 190, 0],
      TYPE: [exports.flakistTurret],
    },
    {
      POSITION: [5, 9.5, 0, 135, 190, 0],
      TYPE: [exports.flakistTurret],
    },
    {
      POSITION: [5, 9.5, 0, 225, 190, 0],
      TYPE: [exports.flakistTurret],
    },
    {
      POSITION: [5, 9.5, 0, 255, 190, 0],
      TYPE: [exports.flakistTurret],
    },
    {
      POSITION: [5, 9.5, 0, 345, 190, 0],
      TYPE: [exports.flakistTurret],
    },
    {
      POSITION: [8, 8, 0, 0, 190, 0],
      TYPE: [exports.oxyrrhynchium],
    },
    {
      POSITION: [8, 8, 0, 120, 190, 0],
      TYPE: [exports.oxyrrhynchium],
    },
    {
      POSITION: [8, 8, 0, 240, 190, 0],
      TYPE: [exports.oxyrrhynchium],
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: [
        exports.miniRogue,
        { FACING_TYPE: "autoreverse", SYNC_TURRET_SKILLS: true },
      ],
    },
    {
      POSITION: [7, 0, 0, 0, 360, 1],
      TYPE: [exports.autoSmasherTurret],
    },
  ],
};
exports.sfk3Minion = createMinion(exports.sfk3, "autospin");
exports.sfk5 = {
  PARENT: [exports.miniboss],
  LABEL: "SFK-5", //Litearlly remake of SFK-X
  DANGER: 12,
  SHAPE: 6,
  COLOR: 0,
  SIZE: 40,
  VALUE: 59212,
  FACING_TYPE: "autospin",
  GUNS: [
    {
      POSITION: [4, 9, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.guardian]),
        TYPE: exports.sfk3Minion,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
      },
    },
    {
      POSITION: [4, 9, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.guardian]),
        TYPE: exports.sfk3Minion,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
      },
    },
    {
      POSITION: [4, 9, 1.2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.guardian]),
        TYPE: exports.sfk3Minion,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [5, 9.5, 0, 15, 190, 0],
      TYPE: [exports.flakistTurret],
    },
    {
      POSITION: [5, 9.5, 0, 105, 190, 0],
      TYPE: [exports.flakistTurret],
    },
    {
      POSITION: [5, 9.5, 0, 135, 190, 0],
      TYPE: [exports.flakistTurret],
    },
    {
      POSITION: [5, 9.5, 0, 225, 190, 0],
      TYPE: [exports.flakistTurret],
    },
    {
      POSITION: [5, 9.5, 0, 255, 190, 0],
      TYPE: [exports.flakistTurret],
    },
    {
      POSITION: [5, 9.5, 0, 345, 190, 0],
      TYPE: [exports.flakistTurret],
    },
    {
      POSITION: [8, 8, 0, 0, 190, 0],
      TYPE: [exports.oxyrrhynchium],
    },
    {
      POSITION: [8, 8, 0, 120, 190, 0],
      TYPE: [exports.oxyrrhynchium],
    },
    {
      POSITION: [8, 8, 0, 240, 190, 0],
      TYPE: [exports.oxyrrhynchium],
    },
    {
      POSITION: [4.4, 8, 0, 0, 190, 0],
      TYPE: [exports.sentience],
    },
    {
      POSITION: [4.4, 8, 0, 120, 190, 0],
      TYPE: [exports.sentience],
    },
    {
      POSITION: [4.4, 8, 0, 240, 190, 0],
      TYPE: [exports.sentience],
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: [
        exports.wasper,
        { FACING_TYPE: "autoreverse", SYNC_TURRET_SKILLS: true },
      ],
    },
    {
      POSITION: [7, 0, 0, 0, 360, 1],
      TYPE: [exports.autoSmasherTurret],
    },
  ],
};
exports.e1var1 = {
  PARENT: [exports.miniboss],
  LABEL: "E-1a",
  COLOR: 1,
  FACING_TYPE: "toTarget",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.e1var2 = {
  PARENT: [exports.miniboss],
  LABEL: "E-1b",
  COLOR: 1,
  FACING_TYPE: "toTarget",
  GUNS: [
    {
      POSITION: [13, 5, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 5, 1.5, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.caltrop]),
        TYPE: exports.miniTrap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.e1var3 = {
  PARENT: [exports.miniboss],
  LABEL: "E-1c",
  COLOR: 1,
  FACING_TYPE: "toTarget",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 8, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.watcher, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 4,
      },
    },
  ],
};
exports.x1 = {
  PARENT: [exports.miniboss],
  LABEL: "X-1",
  COLOR: 0,
  FACING_TYPE: "toTarget",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 5, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 5, 1.5, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.caltrop]),
        TYPE: exports.miniTrap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 8, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.watcher, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 4,
      },
    },
  ],
};
exports.e6 = {
  PARENT: [exports.miniboss],
  LABEL: "E-6",
  COLOR: 32,
  SHAPE: 3,
  BODY: {
    HEALTH: 3,
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 60, 180, 0],
      TYPE: [exports.bigauto4gun],
    },
    {
      POSITION: [14, 8, 0, 180, 180, 0],
      TYPE: [exports.bigauto4gun],
    },
    {
      POSITION: [14, 8, 0, 300, 180, 0],
      TYPE: [exports.bigauto4gun],
    },
  ],
};
exports.x6 = {
  PARENT: [exports.miniboss],
  LABEL: "X-6",
  COLOR: 33,
  SHAPE: 3,
  BODY: {
    HEALTH: 3,
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 60, 180, 0],
      TYPE: [exports.bigauto4gun],
    },
    {
      POSITION: [14, 8, 0, 180, 180, 0],
      TYPE: [exports.bigauto4gun],
    },
    {
      POSITION: [14, 8, 0, 300, 180, 0],
      TYPE: [exports.bigauto4gun],
    },
    {
      POSITION: [10, 0, 0, 300, 360, 1],
      TYPE: [exports.auto3],
    },
    {
      POSITION: [7, 0, 0, 300, 360, 1],
      TYPE: [exports.autoSmasherTurret],
    },
  ],
};
exports.e9 = {
  PARENT: [exports.miniboss],
  LABEL: "E-9",
  COLOR: 32,
  SHAPE: 9,
  BODY: {
    HEALTH: 5,
  },
  FACING_TYPE: "toTarget",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [11, 1.5, 1, 0, -7, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.fast,
          g.mach,
          g.shotgun,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [11, 1.5, 1, 0, 7, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.fast,
          g.mach,
          g.shotgun,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [11, 2.5, 1, 0, -7, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.fast,
          g.mach,
          g.shotgun,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [11, 2.5, 1, 0, 7, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.fast,
          g.mach,
          g.shotgun,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [8, 3.5, 1, 0, -7, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.fast,
          g.mach,
          g.shotgun,
          g.fake,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [8, 3.5, 1, 0, 7, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.fast,
          g.mach,
          g.shotgun,
          g.fake,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 1.5, 1, 0, -3, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.fast,
          g.mach,
          g.shotgun,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [13, 1.5, 1, 0, 3, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.fast,
          g.mach,
          g.shotgun,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [13, 2.5, 1, 0, -3, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.fast,
          g.mach,
          g.shotgun,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [13, 2.5, 1, 0, 3, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.fast,
          g.mach,
          g.shotgun,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [17, 3.5, 1, 0, -3, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.fast,
          g.mach,
          g.shotgun,
          g.fake,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [17, 3.5, 1, 0, 3, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.fast,
          g.mach,
          g.shotgun,
          g.fake,
        ]),
        TYPE: exports.casing,
        TIMES_TO_FIRE: 3,
      },
    },
    {
      POSITION: [13, 3.5, -1.5, 0, -3, 0, 0.25],
    },
    {
      POSITION: [13, 3.5, -1.5, 0, 3, 0, 0.75],
    },
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 0, 0, 0, 360, 1],
      TYPE: [exports.autoSmasherTurret],
    },
  ],
};
exports.e12 = {
  PARENT: [exports.miniboss],
  LABEL: "E-12",
  COLOR: 32,
  SHAPE: 5,
  BODY: {
    HEALTH: 6,
  },
  FACING_TYPE: "autospin",
  GUNS: [
    {
      POSITION: [21, 8, 1, 0, 0, 36, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.spreadmain,
          g.spread,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 8, 1, 0, 0, 108, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.spreadmain,
          g.spread,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.spreadmain,
          g.spread,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 8, 1, 0, 0, 252, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.spreadmain,
          g.spread,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 8, 1, 0, 0, 324, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.spreadmain,
          g.spread,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.x12 = {
  PARENT: [exports.miniboss],
  LABEL: "X-12",
  COLOR: 34,
  SHAPE: 5,
  BODY: {
    HEALTH: 6,
  },
  FACING_TYPE: "autospin",
  GUNS: [
    {
      POSITION: [21, 11, 1, 0, 0, 36, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.spreadmain,
          g.spread,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 11, 1, 0, 0, 108, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.spreadmain,
          g.spread,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 11, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.spreadmain,
          g.spread,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 11, 1, 0, 0, 252, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.spreadmain,
          g.spread,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 11, 1, 0, 0, 324, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.spreadmain,
          g.spread,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.e16 = {
  PARENT: [exports.ramminiboss],
  LABEL: "E-16",
  COLOR: 31,
  SHAPE: 5,
  BODY: {
    HEALTH: 8,
    DAMAGE: 8,
  },
  FACING_TYPE: "toTarget",
  GUNS: [
    {
      POSITION: [14, 8, 1, 0, 0, 36, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.spreadmain,
          g.spread,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 8, 1, 0, 0, 324, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.spreadmain,
          g.spread,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.muchmorerecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
// UPGRADE PATHS
exports.dev.UPGRADES_TIER_0 = [
  exports.nodeBase,
  exports.baseProtector,
  exports.bosses,
  exports.quintessence,
  exports.oxyrrhombium,
  exports.deathCannon,
  exports.dominator,
  exports.necrom_en_suer,
  exports.killstreak,
  exports.beyblade0,
  exports.propsTest,
  exports.eclipticHugePentagon,
  exports.lespongler,
  exports.deadlyTorch,
  exports.dev2,
];
exports.dev2.UPGRADES_TIER_0 = [
  exports.dev,
  exports.kashmir,
  exports.richardson,
  exports.atmg,
  exports.nexusMatter,
  exports.triamax,
  exports.killstreakPhases,
  exports.antiTankRifle,
  exports.whirlwind,
  exports.materialCollider,
  exports.placeholder1,
  exports.probImmortal,
];
exports.whirlwind.UPGRADES_TIER_1 = [exports.florist];
exports.florist.UPGRADES_TIER_2 = [exports.tundra];
exports.tundra.UPGRADES_TIER_3 = [exports.maximus];
exports.killstreakPhases.UPGRADES_TIER_0 = [
  exports.killstreak,
  exports.killstreak5,
  exports.killstreak10,
  exports.killstreak25,
  exports.killstreak50,
  exports.killstreak75,
  exports.killstreak100,
  exports.killstreak250,
  exports.killstreak500,
];
exports.bosses.UPGRADES_TIER_0 = [
  exports.xkxbosses,
  exports.eBosses,
  exports.creativeBosses,
  exports.csDestruction,
  exports.mythicalCrasher,
];
exports.xkxbosses.UPGRADES_TIER_0 = [
  exports.S1,
  exports.cs1,
  exports.disp1,
  exports.obp1,
  exports.magnetar2,
  exports.sfk1,
];
exports.eBosses.UPGRADES_TIER_0 =[
  exports.e1var1,
  exports.e1var2,
  exports.e1var3,
  exports.x1,
  exports.e6,
  exports.x6,
  exports.e9,
  exports.e12,
  exports.x12,
  exports.e16
];
exports.disp1.UPGRADES_TIER_0 = [exports.disp2];
exports.disp2.UPGRADES_TIER_0 = [exports.disp3];
exports.disp3.UPGRADES_TIER_0 = [exports.disp1];
exports.creativeBosses.UPGRADES_TIER_0 = [
  exports.multiOrthodox,
  exports.elite_dropship,
  exports.rookieBasic,
  exports.rookiePelling,
  exports.rookieBlow,
  exports.guardian,
  exports.quintetCore,
  exports.quintet,
  exports.ultraWaspPlayable,
  exports.lsm,
  exports.etherealRadiolocator,
  exports.etherealRanger,
  exports.etherealCatastrophe,
  exports.wasper,
  exports.awpCore,
];
exports.S1.UPGRADES_TIER_0 = [exports.S2];
exports.S2.UPGRADES_TIER_0 = [exports.S3];
exports.S3.UPGRADES_TIER_0 = [exports.S4];
exports.S4.UPGRADES_TIER_0 = [exports.S5];
exports.S5.UPGRADES_TIER_0 = [exports.S6];
exports.S6.UPGRADES_TIER_0 = [exports.S1];
exports.cs1.UPGRADES_TIER_0 = [exports.cs2];
exports.cs2.UPGRADES_TIER_0 = [exports.cs3];
exports.cs3.UPGRADES_TIER_0 = [exports.cs4];
exports.cs4.UPGRADES_TIER_0 = [exports.cs5];
exports.cs5.UPGRADES_TIER_0 = [exports.cs1];
exports.obp1.UPGRADES_TIER_0 = [exports.obp2];
exports.obp2.UPGRADES_TIER_0 = [exports.obp3];
exports.obp3.UPGRADES_TIER_0 = [exports.obp4];
exports.obp4.UPGRADES_TIER_0 = [exports.obp5];
exports.obp5.UPGRADES_TIER_0 = [exports.obp1];
exports.magnetar2.UPGRADES_TIER_0 = [exports.magnetar3];
exports.magnetar3.UPGRADES_TIER_0 = [exports.magnetar4];
exports.magnetar4.UPGRADES_TIER_0 = [exports.magnetar5];
exports.magnetar5.UPGRADES_TIER_0 = [exports.magnetar6];
exports.magnetar6.UPGRADES_TIER_0 = [exports.magnetar7];
exports.magnetar7.UPGRADES_TIER_0 = [exports.magnetar8];
exports.magnetar8.UPGRADES_TIER_0 = [exports.magnetar9];
exports.magnetar9.UPGRADES_TIER_0 = [exports.magnetar12];
exports.sfk1.UPGRADES_TIER_0 = [exports.sfk2];
exports.sfk2.UPGRADES_TIER_0 = [exports.sfk3];
exports.sfk3.UPGRADES_TIER_0 = [exports.sfk4];
exports.sfk4.UPGRADES_TIER_0 = [exports.sfk5];
exports.nodeBase.UPGRADES_TIER_0 = [
  exports.basic,
  exports.split2,
  exports.blow,
  exports.wind,
  exports.pelling,
  exports.auto1,
  exports.caltrop,
  exports.watcher,
  exports.jouster,
];
exports.nodeBase.UPGRADES_TIER_5 = [exports.awpCore];
exports.awpCore.UPGRADES_TIER_0 = [
  exports.awpQuasar,
  exports.awpCharon,
  exports.awpMoon,
];
exports.awpQuasar.UPGRADES_TIER_0 = [exports.awpSpinner];
exports.awpCharon.UPGRADES_TIER_0 = [exports.awpAsteroid]
exports.basic.UPGRADES_TIER_1 = [
  exports.twin,
  exports.sniper,
  exports.machine,
  exports.flank,
  exports.pound,
  exports.waver,
  exports.pelleter,
  exports.electro,
  exports.subduer,
  exports.flanktrap,
  exports.minishot,
];
exports.jouster.UPGRADES_TIER_1 = [exports.lancer];
exports.lancer.UPGRADES_TIER_2 = [exports.smash, exports.flail];
/*
 */
exports.smash.UPGRADES_TIER_3 = [
  exports.megasmash,
  exports.spike,
  exports.autosmash,
];

exports.twin.UPGRADES_TIER_2 = [
  exports.double,
  exports.bent,
  exports.gunner,
  exports.hexa,
  exports.dropship,
  exports.cephalopod,
];
exports.twin.UPGRADES_TIER_3 = [exports.dual];
exports.double.UPGRADES_TIER_3 = [
  exports.tripletwin,
  exports.split,
  exports.autodouble,
  exports.bentdouble,
];
exports.tripletwin.UPGRADES_TIER_4 = [exports.aurinator];
exports.bent.UPGRADES_TIER_3 = [
  exports.penta,
  exports.spread,
  exports.benthybrid,
  exports.bentdouble,
  exports.triple,
  exports.symTriplet,
  exports.triplex,
];
exports.symTriplet.UPGRADES_TIER_4 = [exports.symQuint];
exports.triple.UPGRADES_TIER_4 = [exports.quint];
exports.gunner.UPGRADES_TIER_3 = [
  exports.autogunner,
  exports.nailgun,
  exports.auto4,
  exports.machinegunner,
  exports.duoGunner,
  exports.laserGunner,
  exports.gunnerBorer,
];
exports.gunner.UPGRADES_TIER_4 = [exports.saw];
exports.cephalopod.UPGRADES_TIER_3 = [exports.apothican];
exports.cephalopod.UPGRADES_TIER_4 = [exports.flammenwerfer];

exports.sniper.UPGRADES_TIER_2 = [
  exports.assassin,
  exports.hunter,
  exports.mini,
  exports.cannon,
  exports.builder,
  exports.inferno,
  exports.acid,
  exports.chiller,
  exports.allergen,
  exports.orthodox1,
];
exports.sniper.UPGRADES_TIER_3 = [exports.railgun];
exports.cannon.UPGRADES_TIER_3 = [exports.caster];
exports.caster.UPGRADES_TIER_3 = [exports.doomsayer, exports.flakist];
exports.railgun.UPGRADES_TIER_4 = [
  exports.purge,
  exports.cerimatizer,
  exports.critter,
];
exports.assassin.UPGRADES_TIER_3 = [
  exports.ranger,
  exports.falcon,
  exports.stalker,
  exports.autoass,
  exports.charger,
];
exports.ranger.UPGRADES_TIER_4 = [exports.vindicator];
exports.charger.UPGRADES_TIER_4 = [exports.antiMaterialRifle, exports.stacker];
exports.hunter.UPGRADES_TIER_3 = [
  exports.preda,
  exports.poach,
  exports.xHunter,
  exports.sidewind,
  exports.megaHunter,
  exports.dual,
];
exports.dual.UPGRADES_TIER_4 = [exports.concatinator]; //concat shoots
exports.preda.UPGRADES_TIER_4 = [exports.saw];
exports.builder.UPGRADES_TIER_3 = [
  exports.construct,
  exports.autobuilder,
  exports.engineer,
  exports.boomer,
  exports.conq,
  exports.dualBuilder,
  exports.orbitalstrike,
];
exports.dualBuilder.UPGRADES_TIER_4 = [exports.steampunk, exports.survivalist];
exports.inferno.UPGRADES_TIER_3 = [
  exports.twinferno,
  exports.firenado,
  exports.backburner,
  exports.arsonist,
];
exports.firenado.UPGRADES_TIER_4 = [exports.conflag];
exports.backburner.UPGRADES_TIER_4 = [exports.camper];
exports.acid.UPGRADES_TIER_3 = [
  exports.disintegrator,
  exports.twinAcid,
  exports.acidrive, //reestore
  exports.poisoner,
  exports.formaldehyde,
  exports.torch,
];
exports.acidrive.UPGRADES_TIER_4 = [exports.formaldrive];
exports.formaldehyde.UPGRADES_TIER_4 = [exports.chlorine, exports.formaldrive];
exports.chiller.UPGRADES_TIER_4 = [exports.flakist];
exports.orthodox1.UPGRADES_TIER_3 = [
  exports.orthodox2,
  exports.fragmentation,
  exports.autoOrthodox1,
  exports.initiator,
  exports.gimel1,
];
exports.orthodox2.UPGRADES_TIER_4 = [
  exports.orthodox3,
  exports.oled,
  exports.autoOrthodox2,
];
exports.fragmentation.UPGRADES_TIER_4 = [
  exports.fractal,
  exports.refragmentation,
  exports.autoFragmentation,
];
exports.initiator.UPGRADES_TIER_4 = [exports.inflictor];

exports.machine.UPGRADES_TIER_2 = [
  exports.twinMachine,
  exports.mini,
  exports.gunner,
  exports.machinist,
  exports.diesel,
  exports.blaster,
  exports.gatling,
  exports.foamer,
  exports.spray,
  exports.burner,
  exports.nature,
  exports.machWaver,
  exports.discharger,
];
exports.machinist.UPGRADES_TIER_3 = [
  exports.twinMachinist,
  exports.alternator,
  exports.duoGunner,
  exports.rapidMachinist,
  exports.contractor,
  exports.machinistWaver,
];
exports.duoGunner.UPGRADES_TIER_4 = [exports.duoLaser];
exports.mini.UPGRADES_TIER_3 = [
  exports.stream,
  exports.nailgun,
  exports.alternator,
  exports.hybridmini,
  exports.zipper,
  exports.automaton,
  exports.barricade,
  exports.lasergun,
];
exports.mini.UPGRADES_TIER_4 = [exports.padoru, exports.critter, exports.saw];
exports.lasergun.UPGRADES_TIER_4 = [exports.madhelix];
exports.stream.UPGRADES_TIER_4 = [
  exports.radiolocator,
  exports.gusher,
  exports.hybridstream,
];
exports.zipper.UPGRADES_TIER_4 = [
  exports.gusher,
  exports.fusilier,
  exports.cropZipper,
];
exports.spray.UPGRADES_TIER_3 = [
  exports.phoenix,
  exports.redist,
  exports.lava,
  exports.atomizer,
];
exports.phoenix.UPGRADES_TIER_4 = [exports.scorch];
exports.redist.UPGRADES_TIER_4 = [exports.krakatoa, exports.saw];
exports.lava.UPGRADES_TIER_4 = [
  exports.volcano,
  exports.magma /*More Upgrades Soon™*/,
  exports.vulcanGun,
];
exports.atomizer.UPGRADES_TIER_4 = [exports.krakatoa, exports.magma];
exports.burner.UPGRADES_TIER_3 = [exports.flamethrower, exports.flamegun];
exports.flamegun.UPGRADES_TIER_4 = [
  exports.welder,
  exports.cremator,
  exports.flammenwerfer,
  exports.sidethrower,
  exports.vulcanGun,
];
exports.foamer.UPGRADES_TIER_3 = [exports.widget, exports.equalizer];
exports.widget.UPGRADES_TIER_4 = [exports.systematizer, exports.diagonalizer];
exports.equalizer.UPGRADES_TIER_4 = [exports.diagonalizer];

exports.flank.UPGRADES_TIER_2 = [
  exports.hexa,
  exports.tri,
  exports.auto3,
  exports.barSpinner,
  exports.backShield,
];
exports.barSpinner.UPGRADES_TIER_3 = [exports.triad, exports.spindrive];
exports.barSpinner.UPGRADES_TIER_4 = [exports.padoru];
exports.flank.UPGRADES_TIER_3 = [];
exports.tri.UPGRADES_TIER_3 = [
  exports.fighter,
  exports.booster,
  exports.falcon,
  exports.bomber,
  exports.autotri,
  exports.brutalizer,
];
exports.booster.UPGRADES_TIER_4 = [exports.rocketBooster];
exports.hexa.UPGRADES_TIER_3 = [
  exports.octo,
  exports.cyclone,
  exports.pigeon,
  exports.hexatrap,
];
exports.auto3.UPGRADES_TIER_3 = [
  exports.auto5,
  exports.sniper3,
  exports.heavy3,
  exports.auto4,
  exports.architect,
  exports.crowbar,
  exports.apothican,
];
exports.crowbar.UPGRADES_TIER_4 = [exports.crane];
exports.architect.UPGRADES_TIER_4 = [exports.crane, exports.miniRogue];
exports.heavy3.UPGRADES_TIER_4 = [exports.menace];

exports.director.UPGRADES_TIER_2 = [
  exports.overseer,
  exports.cruiser,
  exports.underseer,
  exports.spawner,
];
exports.overseer.UPGRADES_TIER_3 = [
  exports.overlord,
  exports.overtrap,
  exports.overgunner,
  exports.commander,
  exports.overdrive,
];
exports.underseer.UPGRADES_TIER_3 = [exports.necromancer];
exports.cruiser.UPGRADES_TIER_3 = [
  exports.carrier,
  exports.battleship,
  exports.autocruiser,
  exports.wasp,
  exports.fortress,
];
exports.cruiser.UPGRADES_TIER_4 = [exports.cerimatizer];
exports.spawner.UPGRADES_TIER_3 = [
  exports.factory,
  exports.mob,
  exports.autoSpawner,
];
exports.factory.UPGRADES_TIER_4 = [exports.crowd];
exports.mob.UPGRADES_TIER_4 = [exports.crowd, exports.guidedMob];
exports.pound.UPGRADES_TIER_2 = [
  exports.destroy,
  exports.artillery,
  exports.launcher,
  exports.internal,
  exports.pulsar,
  exports.multishot,
  exports.cannon,
  exports.spikeshot,
];
exports.destroy.UPGRADES_TIER_3 = [
  exports.anni,
  exports.hybrid,
  exports.construct,
  exports.shotgun,
  exports.conq, // conq!11!1!!
  exports.laser,
  exports.megaTrapper,
  exports.oxyrrhynchium,
  exports.caster,
  exports.spikestruct,
];
exports.artillery.UPGRADES_TIER_3 = [exports.mortar, exports.spread];
exports.launcher.UPGRADES_TIER_3 = [
  exports.skimmer,
  exports.hiveshooter,
  exports.sidewind,
  exports.twister,
  exports.rocketeer,
  exports.shrapnel,
  exports.ephialtini,
];
exports.launcher.UPGRADES_TIER_4 = [exports.poisoner, exports.gilder];
exports.skimmer.UPGRADES_TIER_4 = [exports.combine];
exports.hiveshooter.UPGRADES_TIER_4 = [exports.combine];
exports.rocketeer.UPGRADES_TIER_4 = [exports.chelyabinsk];
exports.shrapnel.UPGRADES_TIER_4 = [exports.crockett, exports.clusterbomber];
exports.anni.UPGRADES_TIER_4 = [
  exports.elim,
  exports.supernova,
  exports.oxyrrhexis,
  exports.doomsayer,
  exports.banger,
];
exports.oxyrrhynchium.UPGRADES_TIER_4 = [
  exports.oxyrrhexis,
  exports.oxyrritium,
];
exports.ephialtini.UPGRADES_TIER_4 = [exports.oxyrrhexis, exports.sentience];
exports.multishot.UPGRADES_TIER_3 = [
  exports.shotgun,
  exports.birdshot,
  exports.musketeer,
  exports.dice,
  exports.overpowerer,
  exports.shortstop,
];
exports.shotgun.UPGRADES_TIER_4 = [exports.particleAccelerator];
exports.birdshot.UPGRADES_TIER_4 = [exports.catastrophe];
exports.overpowerer.UPGRADES_TIER_4 = [exports.shotgunner];
exports.multishot.UPGRADES_TIER_4 = [exports.clusterbomber];
exports.trapper.UPGRADES_TIER_2 = [exports.builder, exports.kiloTrapper];
exports.trapper.UPGRADES_TIER_3 = [exports.overtrap];
exports.kiloTrapper.UPGRADES_TIER_3 = [
  exports.megaTrapper,
  exports.buster,
  exports.musketeer,
];
exports.musketeer.UPGRADES_TIER_4 = [exports.bearTrap, exports.clasper];
exports.megaTrapper.UPGRADES_TIER_4 = [exports.ultraTrapper];
exports.waver.UPGRADES_TIER_2 = [
  exports.dropship,
  exports.machWaver,
  exports.internal,
  exports.repeater,
];
exports.dropship.UPGRADES_TIER_3 = [
  exports.triplex,
  exports.doubleDropship,
  exports.duplicator,
];
exports.dropship.UPGRADES_TIER_4 = [exports.keterDropship];
exports.internal.UPGRADES_TIER_3 = [exports.riptide, exports.escalator];
exports.riptide.UPGRADES_TIER_4 = [exports.escalator];
exports.repeater.UPGRADES_TIER_3 = [exports.multiplier, exports.duplicator];
exports.multiplier.UPGRADES_TIER_3 = [exports.iterator];
exports.duplicator.UPGRADES_TIER_3 = [exports.iterator];
exports.triplex.UPGRADES_TIER_4 = [exports.quadruplex];
exports.electro.UPGRADES_TIER_2 = [
  exports.machElectro,
  exports.pulsar,
  exports.discharger,
]; // Thanks to -_infinity for Pulsar (Note: Shoots a small laser that penentrates anything exept walls and rocks)
exports.machElectro.UPGRADES_TIER_3 = [exports.laserGunner]; // Thanks to -_infinity for Laser Gunner (Note: gunner with lasers), included LIghtsaber
exports.laserGunner.UPGRADES_TIER_4 = [exports.duoLaser];
exports.discharger.UPGRADES_TIER_3 = [exports.lightsaber, exports.lasergun];
exports.lightsaber.UPGRADES_TIER_4 = [exports.deathray, exports.madhelix];
exports.pulsar.UPGRADES_TIER_3 = [
  exports.laser,
  exports.laserGunner,
  exports.hydromaniac,
]; // Shoots a medium laser that penentrates anything exept walls and rocks, included Laser Gunner and Hydromaniac.
exports.laser.UPGRADES_TIER_4 = [exports.supernova, exports.escalator]; //shoots a HUUUUGE laser, its polygon's worst enemy. Included Escalator ???
exports.hydromaniac.UPGRADES_TIER_4 = [exports.escalator]; // Shoots a medium desmos laserbeam, I'd call it riplaser but that sounds stupid.
exports.pelleter.UPGRADES_TIER_2 = [
  exports.nature,
  exports.gunner,
  exports.borer,
  exports.sailor,
  exports.submachine,
  exports.puntgun,
  exports.macro,
];
exports.nature.UPGRADES_TIER_3 = [exports.flamegun];
exports.borer.UPGRADES_TIER_3 = [exports.gunnerBorer];
exports.sailor.UPGRADES_TIER_3 = [exports.paddler];
exports.submachine.UPGRADES_TIER_3 = [exports.vulcan, exports.odin];
exports.odin.UPGRADES_TIER_4 = [exports.redistinctor];
exports.macro.UPGRADES_TIER_3 = [exports.shortstop];
exports.shortstop.UPGRADES_TIER_4 = [exports.shotgunner, exports.superior];
exports.subduer.UPGRADES_TIER_2 = [
  exports.binary,
  exports.hunter,
  exports.spray,
  exports.flankSubduer,
  exports.mitochondrion,
];
exports.binary.UPGRADES_TIER_3 = [exports.dual];
exports.mitochondrion.UPGRADES_TIER_3 = [
  exports.preda,
  exports.redist,
  exports.cytochrome,
];
exports.cytochrome.UPGRADES_TIER_4 = [exports.translocase];
exports.serene.UPGRADES_TIER_2 = [exports.oxyres];
exports.oxyres.UPGRADES_TIER_3 = [exports.oxyrrhynchium, exports.oxysplitsy];
exports.oxysplitsy.UPGRADES_TIER_4 = [exports.oxyrritium, exports.gunnerTypeX];
exports.flanktrap.UPGRADES_TIER_2 = [exports.bushwhack, exports.pelletGuard];
exports.pelletGuard.UPGRADES_TIER_3 = [exports.velveter];
exports.split2.UPGRADES_TIER_1 = [exports.twin, exports.doubleSplit];
exports.doubleSplit.UPGRADES_TIER_2 = [exports.double];
exports.blow.UPGRADES_TIER_1 = [exports.machine, exports.draft];
exports.wind.UPGRADES_TIER_1 = [
  exports.flank,
  exports.draft,
  exports.propeller,
];
exports.pelling.UPGRADES_TIER_1 = [
  exports.pelleter,
  exports.snippett,
  exports.plasher,
];
exports.snippett.UPGRADES_TIER_2 = [exports.clicker];
exports.clicker.UPGRADES_TIER_3 = [exports.clinker, exports.clapper, exports.cookieClicker];
exports.clapper.UPGRADES_TIER_4 = [exports.striker];//restore
exports.plasher.UPGRADES_TIER_2 = [exports.nature];
exports.auto1.UPGRADES_TIER_1 = [
  exports.auto2,
  exports.mega1,
  exports.autoAuto1,
  exports.mini3,
];
exports.auto2.UPGRADES_TIER_2 = [exports.auto3, exports.swivel2];
exports.mega1.UPGRADES_TIER_2 = [exports.scather];
exports.scather.UPGRADES_TIER_3 = [exports.scourge];
exports.scourge.UPGRADES_TIER_4 = [exports.bane];
exports.mini3.UPGRADES_TIER_2 = [exports.swivel2];
exports.caltrop.UPGRADES_TIER_1 = [exports.trapper];
exports.watcher.UPGRADES_TIER_1 = [exports.director, exports.serene];

/*exports.smash.UPGRADES_TIER_3 = [exports.megasmash, exports.spike, exports.autosmash];
            
    exports.twin.UPGRADES_TIER_2 = [exports.double, exports.bent, exports.triple, exports.hexa];
        exports.double.UPGRADES_TIER_3 = [exports.tripletwin, exports.autodouble];
        exports.bent.UPGRADES_TIER_3 = [exports.penta, exports.benthybrid];
        exports.triple.UPGRADES_TIER_3 = [exports.quint];

    exports.sniper.UPGRADES_TIER_2 = [exports.assassin, exports.overseer, exports.hunter, exports.builder];
        exports.assassin.UPGRADES_TIER_3 = [exports.ranger];
        exports.overseer.UPGRADES_TIER_3 = [exports.overlord, exports.battleship
            , exports.overtrap, exports.necromancer, exports.factory, exports.fortress];
        exports.hunter.UPGRADES_TIER_3 = [exports.preda, exports.poach];
        exports.builder.UPGRADES_TIER_3 = [exports.construct, exports.autobuilder];
        
    exports.machine.UPGRADES_TIER_2 = [exports.destroy, exports.gunner, exports.artillery];
        exports.destroy.UPGRADES_TIER_3 = [exports.anni, exports.hybrid];
        exports.gunner.UPGRADES_TIER_3 = [exports.autogunner, exports.mortar, exports.stream];
        exports.artillery.UPGRADES_TIER_3 = [exports.mortar, exports.spread, exports.skimmer];
        exports.machine.UPGRADES_TIER_3 = [exports.spray];

    exports.flank.UPGRADES_TIER_2 = [exports.hexa, exports.tri, exports.auto3, exports.flanktrap];
        exports.hexa.UPGRADES_TIER_3 = [exports.octo];
        exports.tri.UPGRADES_TIER_3 = [exports.booster, exports.fighter, exports.bomber, exports.autotri];
        exports.auto3.UPGRADES_TIER_3 = [exports.auto5, exports.heavy3];
        exports.flanktrap.UPGRADES_TIER_3 = [exports.guntrap, exports.fortress, exports.bomber];*/
