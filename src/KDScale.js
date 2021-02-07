import { ContinuousSizeLegend } from "react-vis";

class KDScale {
    static aminoKey = {
        "I": 4.5,
        "V": 4.2,
        "L": 3.8,
        "F": 2.8,
        "C": 2.5,
        "M": 1.9,
        "A": 1.8,
        "G": -0.4,
        "T": -0.7,
        "S": -0.8,
        "W": -0.9,
        "Y": -1.3,
        "P": -1.6,
        "H": -3.2,
        "E": -3.5,
        "Q": -3.5,
        "D": -3.5,
        "N": -3.5,
        "K": -3.9,
        "R": -4.5, 
    }
    
    // calculate rolling averages, window: number, residues: string => [number]
    static calculate(res, window) {
        let data = [];
        let vals = [];
        for (let i = 0; i < res.length; i++) {
            if (KDScale.aminoKey.hasOwnProperty(res[i])) {
                vals.push(KDScale.aminoKey[res[i]]);
            }
        }
        for (let i = 0; i < vals.length - window; i++) {
            let sum = 0;
            for (let j = 0; j < window; j++) {
                sum += vals[i+j];
            }
            data.push(
                {
                    x: Math.floor(window / 2) + (window * i),
                    y: sum 
                }
                );
        }
        console.log(data);
        return data; 
    }
}

export default KDScale;