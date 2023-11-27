const OPERATIONS = {
    sum: '+',
    substract: '-',
    multiply: '*',
    division: '/',
    sqrt: 'sqrt',  
    pow: 'pow'     
}
function calculate({a, b, operation}) {
    let result = null;

    switch (operation) {
        case OPERATIONS.sum:
            result = sum(a, b);
            break;

        case OPERATIONS.substract:
            result = substract(a, b);
            break;

        case OPERATIONS.multiply:
            result = multiply(a, b);
            break;


        case OPERATIONS.division:
            result = division(a, b);
            break;

        case OPERATIONS.sqrt:
                result = Math.sqrt(a);
                break;
    
        case OPERATIONS.pow:
                result = Math.pow(a, b);
                break;
    
        default:
            return "Неверный оператор."
    }

    return result;
}