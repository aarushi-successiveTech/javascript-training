function printPattern(row) {

    for (let i = row; i >= 1; i--) {
        let line = "";
        for (let j = 1; j <= i; j++) {
            line += j + " ";
        }
        console.log(line);
    }

    for (let i = 2; i <= row; i++) {
        let line = "";
        for (let j = 1; j <= i; j++) {
            line += j + " ";
        }
        console.log(line);
    }
}

printPattern(5);