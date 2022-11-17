const R = 109736.605; //[cm^-1]
const start_n = 5;
const end_n = 30;
// const start_defect0 = 0;
// const start_defect2 = 0;
const end_defect0 = 1.34646572;
const end_defect2 = -0.59600;

// const start_defect =
//   start_defect0 + start_defect2 * (start_n - start_defect0) ** -2;
// console.log({ start_defect });
const start_defect = 3.19;
const end_defect = end_defect0 + end_defect2 * (end_n - end_defect0) ** -2;
console.log({ end_defect });

const frequency =
  R * ((start_n - start_defect) ** -2 - (end_n - end_defect) ** -2);
console.log({ frequency });

const middle_frequency = 23792.591
const wave_length = 10 ** 7 / (frequency - middle_frequency);
console.log({ wave_length });



// const quantumDefects = {
//   "5s1/2": 3.19,
//   "ns1/2" : [3.1311804, 0.1784],
//   "np1/2": [2.6548849, 0.2900],
//   "np3/2": [2.6416737, 0.2950],
//   "nd3/2": [1.34809171, -0.60286],
//   "nd5/2": [1.34646572, -0.59600],
// }
