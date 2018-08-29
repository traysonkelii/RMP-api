"use strict";

const clean = (grades) => {
    let A = 0,
        B = 0,
        C = 0,
        D = 0,
        F = 0
    for (const grade of grades) {
        switch (grade) {
            case 'A+':
                A += 1;
                break;
            case 'A':
                A += 1
                break;
            case 'A-':
                A += 1
                break;
            case 'B+':
                B += 1
                break;
            case 'B':
                B += 1
                break;
            case 'B-':
                B += 1
                break;
            case 'C+':
                C += 1
                break;
            case 'C':
                C += 1
                break;
            case 'C-':
                C += 1
                break;
            case 'D+':
                D += 1
                break;
            case 'D':
                D += 1
                break;
            case 'D-':
                D += 1
                break;
            case 'F':
                F += 1
                break;

            default:
                break;
        }
    }
    const gradeObject = {
        A: A,
        B: B,
        C: C,
        D: D,
        F: F
    }
    return gradeObject

}

module.exports = {
    clean
}