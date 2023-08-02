loopi: for (let i = 0; i < 10; i ++) {
    loopj: for (let j = 0; i < 10; j++) {
        if (j > 9) {
        break loopi;
        }

    console.info(`i: ${i}, j: ${j}`);
    }

}