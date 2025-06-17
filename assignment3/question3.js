const rows = 5;
for (let i = 1; i <= rows; i++) {
    let output = '';
    
    for (let j = 1; j <= rows - i; j++) {
        output += ' ';
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
        output += '*';
    }
    
    console.log(output);
}

for (let i = rows - 1; i >= 1; i--) {
    let output = '';
    
    for (let j = 1; j <= rows - i; j++) {
        output += ' ';
    }
    
    for (let k = 1; k <= 2 * i - 1; k++) {
        output += '*';
    }
    
    console.log(output);
}


