var calculator = require("../src/calculator");


describe("Calculator Tests", ()=>{

    test("Addition of two numbers",()=>{

        var result = calculator.sum(10,20);

        expect(result).toBe(30);
    })


    test("Subtraction of two numbers",()=>{

        var result = calculator.diff(5,2);

        expect(result).toBe(3);
    })

   test("Subtraction of two numbers",()=>{

        var result = calculator.diff(1,2);

        expect(result).toBe(-1);
    })

  test("Multiplication of two numbers",()=>{

        var result = calculator.product(1,2);

        expect(result).toBe(2);
    })

 test("Multiplication of two numbers",()=>{

        var result = calculator.product(0,2);

        expect(result).toBe(0);
    })

  test("Multiplication of two numbers",()=>{

        var result = calculator.product(5,2);

        expect(result).toBe(10);
    })


  test("Division of two numbers",()=>{

        var result = calculator.divide(5,2);

        expect(Math.floor(result)).toBe(2);
    })
    

  
    

})