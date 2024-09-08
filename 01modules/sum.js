function sum (a,b){
    return a+b;
};

function mul (a,b){
    return a*b
}

// we can also export like this
// exports.sub=(a,b)=>(a+b)

module.exports = {
    sumfn:sum,
    mulfn:mul
};