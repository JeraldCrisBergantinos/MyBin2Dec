function convertBinaryToDecimal() {
    var binaryInput = document.getElementById('binaryInput').value;
    var decimalOutput = document.getElementById('decimalOutput');

    // Check if input is a valid binary number
    if (!/^[01]+$/.test(binaryInput)) {
        decimalOutput.innerText = "Invalid binary number.";
        return;
    }

    // Convert decimal to binary
    var decimal = 0;
    var power = 0;
    for (var i = binaryInput.length - 1; i >= 0; i--) {
        var digit = parseInt(binaryInput.charAt(i));
        decimal += digit * Math.pow(2, power);
        power++;
    }

    decimalOutput.innerText = "Decimal: " + decimal;
}