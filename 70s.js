const quantumDefects = {
  "5s1/2": 3.19,
  "ns1/2" : [3.1311804, 0.1784],
  "np1/2": [2.6548849, 0.2900],
  "np3/2": [2.6416737, 0.2950],
  "nd3/2": [1.34809171, -0.60286],
  "nd5/2": [1.34646572, -0.59600],
}

const R = 109736.605; //[cm^-1]
// const start_n = 5;
const end_n = 30;

// const start_defect = quantumDefects["5s1/2"];
const end_defect0 = quantumDefects["nd5/2"][0];
const end_defect2 = quantumDefects["nd5/2"][1];

const end_defect = end_defect0 + end_defect2 * (end_n - end_defect0) ** -2;
console.log({ end_defect });

const frequency = 33690.81
  - R * ( (end_n - end_defect) ** -2);
console.log({ frequency });

const middle_frequency = 23792.591;
const wave_length = 10 ** 7 / (frequency - middle_frequency);
console.log({ wave_length });


