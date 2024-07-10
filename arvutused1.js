
// tollid sentimeetriteks
var InchesToCm = /** @class */ (function () {
    function InchesToCm() {
    }
    InchesToCm.prototype.calculate = function (inches) {
        return inches * 2.54;
    };
    InchesToCm.prototype.inputUnit = function () {
        return "in";
    };
    InchesToCm.prototype.outputUnit = function () {
        return "cm";
    };
    return InchesToCm;
}());

 // sentimeetrid tollideks
 var CmToInches = /** @class */ (function () {
    function CmToInches() {
    }
    CmToInches.prototype.calculate = function (cm) {
        return cm / 2.54;
    };
    CmToInches.prototype.inputUnit = function () {
        return "cm";
    };
    CmToInches.prototype.outputUnit = function () {
        return "in";
    };
    return CmToInches;
}());


// kilomeetrid tunnis meetriteks sekundis
var KmhToMs = /** @class */ (function () {
    function KmhToMs() {
    }
    KmhToMs.prototype.calculate = function (kmh) {
        return kmh * (1000 / 3600);
    };
    KmhToMs.prototype.inputUnit = function () {
        return "km/h";
    };
    KmhToMs.prototype.outputUnit = function () {
        return "m/s";
    };
    return KmhToMs;
}());

// meetrid sekundis kilomeetriteks tunnis
var MsToKmh = /** @class */ (function () {
    function MsToKmh() {
    }
    MsToKmh.prototype.calculate = function (ms) {
        return ms * (3600 / 1000);
    };
    MsToKmh.prototype.inputUnit = function () {
        return "m/s";
    };
    MsToKmh.prototype.outputUnit = function () {
        return "km/h";
    };
    return MsToKmh;
}());


// Takso sõidu hinna arvutamine
var AXplusB = /** @class */ (function () {
    function AXplusB(coeficient, intercept, inputUnitType, outputUnitType) {
        this.coeficient = coeficient;
        this.intercept = intercept;
        this.inputUnitType = inputUnitType;
        this.outputUnitType = outputUnitType;
    }
    AXplusB.prototype.calculate = function (x) {
        return this.coeficient * x + this.intercept;
    };
    AXplusB.prototype.inputUnit = function () { return this.inputUnitType; };
    AXplusB.prototype.outputUnit = function () { return this.outputUnitType; };
    return AXplusB;
}());


// Celsiuse temperatuuriskaalalt Fahrenheiti skaalale
var CelsiusToFahrenheit = /** @class */ (function () {
    function CelsiusToFahrenheit() {
    }
    CelsiusToFahrenheit.prototype.calculate = function (celsius) {
        return celsius * 9 / 5 + 32;
    };
    CelsiusToFahrenheit.prototype.inputUnit = function () {
        return "°C";
    };
    CelsiusToFahrenheit.prototype.outputUnit = function () {
        return "°F";
    };
    return CelsiusToFahrenheit;
}());

// Fahrenheit skaalalt Celsiuse skaalale
var FahrenheitToCelsius = /** @class */ (function () {
    function FahrenheitToCelsius() {
    }
    FahrenheitToCelsius.prototype.calculate = function (fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    };
    FahrenheitToCelsius.prototype.inputUnit = function () {
        return "°F";
    };
    FahrenheitToCelsius.prototype.outputUnit = function () {
        return "°C";
    };
    return FahrenheitToCelsius;
}());


// Elektritarbija kalkulaator
var ElectricCalculator = /** @class */ (function () {
    function ElectricCalculator(resistance) {
        this.resistance = resistance;
    }
    ElectricCalculator.prototype.calculate = function (voltage) {
        return voltage / this.resistance;
    };

    ElectricCalculator.prototype.inputUnit = function () {
        return "U";
    }

    ElectricCalculator.prototype.outputUnit = function () {
        return "I";
    }

    return ElectricCalculator;
}
());

// Takistuse muutmise kalkulaator
var ResistanceCalculator = /** @class */ (function () {
    function ResistanceCalculator(voltage) {
        this.voltage = voltage;
    }
    ResistanceCalculator.prototype.calculate = function (current) {
        return this.voltage / current;
    };
    ResistanceCalculator.prototype.inputUnit = function () {
        return "U";
    };
    ResistanceCalculator.prototype.outputUnit = function () {
        return "R";
    };
    return ResistanceCalculator;
}());

// Elektritarbija võimsuse kalkulaator
var PowerCalculator = /** @class */ (function () {
    function PowerCalculator(resistance) {
        this.resistance = resistance;
    }
    PowerCalculator.prototype.calculate = function (voltage) {
        var current = voltage / this.resistance;
        return voltage * current;
    };
    PowerCalculator.prototype.inputUnit = function () {
        return "U";
    };
    PowerCalculator.prototype.outputUnit = function () {
        return "P";
    };
    return PowerCalculator;
}());



//Joonise koostamine kalkulaatori tulemuste põhjal
var Figure = /** @class */ (function () {
    function Figure(calculator, g) {
        this.calculator = calculator;
        this.g = g;
        this.draw();
    }
    Figure.prototype.draw = function () {
        for (var i = 0; i < 20; i += 2) {
            this.g.fillRect(10 * i, 300 - 3 * this.calculator.calculate(i), 3, 3);
            this.g.fillText(i + "", 10 * i, 300);
            this.g.fillText(this.calculator.calculate(i).toFixed(1), 0, 300 - 3 * this.calculator.calculate(i));
            
            if (i > 0) {
                this.g.beginPath();
                this.g.moveTo(10 * (i - 2), 300 - 3 * this.calculator.calculate(i - 2));
                this.g.lineTo(10 * i, 300 - 3 * this.calculator.calculate(i));
                this.g.stroke();
            }
        }
        this.g.fillText(this.calculator.inputUnit(), 10 * 20, 300);
        this.g.fillText(this.calculator.outputUnit(), 0, 300 - 3 * this.calculator.calculate(20));
    };
    return Figure;
}());




