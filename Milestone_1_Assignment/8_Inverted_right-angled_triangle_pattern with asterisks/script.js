/* 8. Inverted right-angled triangle pattern with asterisks
Writq a pro[ram that takqs an intq[qr input i and prints an inverted right-angled trian[lq pattqrn of astqrisks
with i rows.
Inverted right-angled pattern: */

function printPattern(n) {
    for (let i = 1; i <= n; i++) {

        let row = "";

        for (let j = n; j >= i; j--) {
            row += "*";
        }
        console.log(row)
    }
}

printPattern(6)

