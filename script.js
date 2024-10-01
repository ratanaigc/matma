// Compare Arrays
function compareArrays() {
    // Get input values for array A and B
    let a = [
        parseInt(document.getElementById('a0').value),
        parseInt(document.getElementById('a1').value),
        parseInt(document.getElementById('a2').value),
        parseInt(document.getElementById('a3').value),
        parseInt(document.getElementById('a4').value)
    ];

    let b = [
        parseInt(document.getElementById('b0').value),
        parseInt(document.getElementById('b1').value),
        parseInt(document.getElementById('b2').value),
        parseInt(document.getElementById('b3').value),
        parseInt(document.getElementById('b4').value)
    ];

    let resultText = '';

    // Loop through each element of arrays a and b
    for (let i = 0; i < a.length; i++) {
        if (a[i] < b[i]) {
            a[i] += 10; // If element in a[] is less, add 10
        }
        // Subtract b[i] from a[i] and append to result text
        resultText += `(${a[i]} - ${b[i]}) = ${a[i] - b[i]}<br>`;
    }

    // Display the result
    document.getElementById('result').innerHTML = resultText;
}

// Add event listener to button
document.getElementById('compareBtn').addEventListener('click', compareArrays);
