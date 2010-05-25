var Tests = [
    // Page references from HP-15C Owner's Handbook (November 1985)

    // p13
    ["9\r6-", 3],
    ["9\r6*", 54],
    ["9\r6/", 1.5],
    ["9\r6^", 531441],
    // p14
    ["300.51\r2*9.8/q", 7.8313, 0.0001],

    // Part I Fundamentals
    // p19
    ["123_\r", -123],
    ["1.2e3\r", 1200],
    // EEXCHS ["1.2e_3\r", 0.0012],
    // p20
    // EEXCHS ["6.6262e34_\r50*", 3.3131e-32, 0.0001],
    ["g\b", 0],
    ["12345", 12345],
    ["\b", 1234],
    ["9", 12349],
    ["q", 111.1261, 0.0001],
    ["\b", 0],
    // p22
    ["45g)", 1.6532, 0.0001],
    // p23
    ["9\r17+4-4/", 5.5],
    ["6\r7+9\r3-*", 78],
    // p24
    ["p", Math.PI],
    ["123.4567gS", 123],
    ["g\r_gS", -123],
    ["g\rfS", -0.4567, 1e-9],
    ["1.23456789_", -1.2346, 0.0001],
    ["gx", -1.2346],
    ["a", 1.2346],
    // p25
    ["25?", 0.04],
    ["8!", 40320],
    ["3.9q", 1.9748, 0.0001],
    ["12.3@", 151.29, 1e-9],
    // p26
    ["g730s", 0.5, 1e-9],
    ["gs", 30, 1e-9],
    ["60c", 0.5, 1e-9],
    ["gc", 60, 1e-9],
    ["45t", 1, 1e-9],
    ["gt", 45],
    // rad, grad
    // p27
    ["1.2345f2", 1.1404, 0.0001],
    ["g2", 1.2345, 1e-9],
    ["40.5f3", 0.7069, 0.0001],
    ["g3", 40.5],
    // p28
    ["45l", 3.8067, 0.0001],
    ["3.4012E", 30.0001, 0.0001],
    ["12.4578g)", 1.0954, 0.0001],
    ["3.1354)", 1365.8405, 1e-6],
    // hyp functions
    // p29
    ["2\r1.4^", 2.6390, 0.0001],
    ["2\r1.4_^", 0.3789, 0.0001],
    ["2_\r3^", -8],
    ["2\r3?^", 1.2599, 0.0001],
    // p30
    ["15.76\r3%+", 16.2328, 0.0001],
    ["15.76\r14.12g?", -10.4061, 0.0001],
    // p31
    ["g75\r10g1", [11.1803, 26.5651], 0.0001],
    ["30\r12f1", [10.3923, 6], 0.0001],
    // p35
    ["287\r12.9/g\r*13.9/", 20.6475, 0.0001],
    // p41
    ["1.15\r\r\r1000****", 1749.0063, 1e-7],
    // p43
    ["3S0", 3],
    ["g\b", 0],
    ["R0", 3],
    // p45
    ["8S04S+03S+024R-0", 9],
    ["R0", 15],
    ["4\r5.2-8.33*g\r7.46-0.32*/3.15\r2.75-4.3*1.71\r2.01*-/q", 4.5728, 0.0001],
    // p47
    ["5\r3f+", 60],
    // p48
    ["52\r4g+", 270725],
    // p49
    // RAN# [".5764Sf\r"],
    // p51
    ["fU4.63\r0;", 1],
    ["4.78\r20;6.61\r40;7.21\r60;7.78\r80;", 5],
    ["R3", 200],
    ["R4", 12000],
    ["R5", 31.01],
    ["R6", 200.49, 0.0001],
    ["R7", 1415],
    // p52
    ["4.78\r20g;", 4],
    ["5.78\r20;", 5],
    // p53
    ["g0", [40, 6.4], 0.001],
    // p54
    ["g.", [31.62, 1.24], 0.01],
    // p55
    ["f;", [4.86, 0.04], 0.04],
    // p57
    ["70f.", [7.56, 0.99], 0.01],
    // p58
    ["123456f74", "123456.0000"],
    ["f84", "1.2346e5"],
    // ENG ["f94", "123.46e3"],
    ["123.4567895f74", "123.4568"],
    ["f76", "123.456790"],
    ["f74", "123.4568"],
    ["f86", "1.234568e2"],
    ["f88", "1.23456790e2"],
    // p59
    [".012345f74", 0.012345],
    // ENG ["f91", "12e-3"],
    // ENG ["f93", "12.35e-3"],
    ["10*", .12345], // ENG ["10*", "123.5e-3"],
    ["f74", "0.1235"],
    // p60
    ["p", "3.1416"],
    ["f\b", "3141592653589793"],

    // Part II Programming

    // Part III Advanced Functions
    // p121
    ["2\r3I4\r5I+", new Complex(6, 8)],
    ["\b8f-\b9gq", new Complex(17, 144)],
    ["1.2\r4.7I2.7\r3.2I/q", new Complex(1.0491, 0.2406), 0.0001],
    // ["2.404gs", new Complex(1.5708, -1.5239), 0.0001],
    // p135
    ["g72\r65If1", 0.8452, 0.0001],
    ["3\r40If1", 2.2981, 0.0001],
    ["+", 3.1434, 0.0001],
    ["g1", new Complex(4.8863, 49.9612), 0.0001],
    // p136
    ["2f-", 0],
    ["8_\r", -8],
    ["6I", -8],
    ["3^", 352],
    ["*", -1872],
    ["4\r", 4],
    ["5q", 2.2361, 0.0001],
    ["2_*", -4.4721, 0.0001],
    ["I", 4],
    ["/", -295.4551, 0.0001],
    ["2\r5q", 2.2361, 0.0001],
    ["4_*", -8.9443, 0.0001],
    ["I", 2],
    ["/", new Complex(9.3982, -35.1344), 0.0001],
    // ["g58"],
    // p139
    ["2\rfsq", 2],
    ["f_1", 2],
    ["fR", function() { return User; }],
    ["3.8Sq", "A\t1,1"],
    ["7.2Sq", 7.2],
    ["1.3Sq", 1.3],
    [".9_Sq", -0.9],
    ["2\r1fsE", 1],
    ["16.5SE", 16.5],
    ["22.1_SE", -22.1],
    ["fe)", -22.1],
    ["R_E", new MatrixCheck(B, 2, 1)],
    ["R_q", new MatrixCheck(A, 2, 2)],
    /*["/", new MatrixCheck(C, 2, 1)],
    ["R)", -11.2887],
    ["R)", 8.2496],*/
    ["fR", function() { return !User; }],
    ["f_0"],
    // p142
    ["2\r", 2],
    ["3", 3],
    ["fsq", 3],
    ["R_E", new MatrixCheck(B, 0, 0)],
    ["Rsq", [3, 2]],
    // p145
    ["f_1", function() { return Reg[0] === 1 && Reg[1] === 1; }],
    ["fR", function() { return User; }],
    ["1Sq", 1],
    ["2Sq", 2],
    ["3Sq", 3],
    ["4Sq", 4],
    ["5Sq", 5],
    ["6Sq", 6],
    ["Rq", 1],
    ["Rq", 2],
    ["Rq", 3],
    ["Rq", 4],
    ["Rq", 5],
    ["Rq", 6],
    ["fR", 6],
    // p146
    ["2S0", 2],
    ["3S1", 3],
    ["9", 9],
    ["Sq", function() { return g_Matrix[0].get(2, 3) === 9; }],

    // http://en.wikipedia.org/wiki/Gamma_function#Particular_values
    ["5\r2/_1-f0", -0.945, 0.001],
    ["3\r2/_1-f0", 2.363, 0.001],
    ["1\r2/_1-f0", -3.545, 0.001],
    ["1\r2/1-f0", 1.772, 0.001],
    ["0f0", 1, 0.001],
    ["3\r2/1-f0", 0.886, 0.001],
    ["1f0", 1, 0.001],
    ["5\r2/1-f0", 1.329, 0.001],
    ["2f0", 2, 0.001],
    ["7\r2/1-f0", 3.323, 0.001],
    ["3f0", 6, 0.001],
];

function Complex(real, imag) {
    this.re = real;
    this.im = imag;

    this.toString = function() {
        return "(" + this.re + "," + this.im + ")";
    }
}

function MatrixCheck(label, rows, cols) {
    this.label = label;
    this.rows = rows;
    this.cols = cols;

    this.toString = function() {
        return "<MatrixCheck " + this.label + " " + this.rows + "," + this.cols + ">";
    };
}

function verify(test, result, resulti, expected) {
    if (expected instanceof MatrixCheck) {
        return result instanceof Descriptor
            && result.label === expected.label
            && g_Matrix[result.label].rows === expected.rows
            && g_Matrix[result.label].cols === expected.cols;
    } else if (expected instanceof Complex) {
        if (test.length >= 3) {
            return Math.abs(result / expected.re - 1) < test[2]
                && Math.abs(resulti / expected.im - 1) < test[2];
        } else {
            return result === expected.re && resulti === expected.im;
        }
    } else {
        if (test.length >= 3) {
            return Math.abs(result / expected - 1) < test[2];
        } else {
            return result === expected;
        }
    }
}

key('f'); key('7'); key('4');
var pass = true;
for (var t in Tests) {
    var test = Tests[t];
    var keys = test[0];
    for (var i = 0; i < keys.length; i++) {
        key(keys[i]);
    }
    if (test.length > 1) {
        var expected = test[1];
        if (typeof(expected) === "string") {
            if (expected !== LcdDisplay) {
                alert("fail: " + keys + "\nresult: " + LcdDisplay + "\nexpected: " + expected);
                pass = false;
            }
        } else if (typeof(expected) === "function") {
            if (!expected()) {
                alert("fail: " + keys + "\nresult: " + LcdDisplay + "\nexpected: " + expected);
                pass = false;
            }
        } else {
            if (!$.isArray(expected)) {
                expected = [expected];
            }
            for (var i in expected) {
                if (!verify(test, Stack[i], StackI[i], expected[i])) {
                    alert("fail: " + keys + "\nresult: " + Stack[i] + "\nexpected: " + expected[i] + "\ndiff: " + Math.abs(Stack[i] / expected[i] - 1));
                    pass = false;
                }
            }
        }
    }
    if (!pass) {
        break;
    }
}
if (pass) {
    alert("pass");
}
