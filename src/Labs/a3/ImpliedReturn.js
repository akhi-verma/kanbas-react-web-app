function ImpliedReturn() {
    const multiply = (a, b) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);
    const square = a => a * a;
    const plusOne = a => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);
    return (
        <>
            <h3>Implied return</h3>
            fourTimesFive = {fourTimesFive}<br />
            multiply(4,5) = {multiply(4,5)}<br />
        </>
    )
}

export default ImpliedReturn;

