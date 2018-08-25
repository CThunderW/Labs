const StringExtras = {
    
    repeat(a, n) {
        // this.string.repeat(n);
        let result = ""
        for (let index = 1; index <= n; index++){
            result += a
        }
        // index 1 reuslt += "a" => result = "a"
        // index 2 reulst += "a" => rusult = "aa"
        // index 3 reulst += "a" => rusult = "aaa"
        // index 4 reulst += "a" => rusult = "aaaa"
        // index 5 reulst += "a" => rusult = "aaaaa"
        return result;
    },
    leftPad(a, n) {
        let result = ""
        let pad = " "
        let diff = n - a.length
        if (diff <= 0) {
            return a;
        } else {
            for (let index = 1; index <= diff; index++){
                result += pad;
                // console.log(result);
            } 
            result += a;
            // console.log(result);
            return result;
        }
    },
    rightPad(a, n) {
        let result = `${a}`
        let pad = " "
        let diff = n - a.length
        if (diff <= 0) {
            return result;
        } else {
            for (let index =1; index <= diff; index++){
                result += pad;
            }return result;
        }

    },
    pad(a, n) {
        let result = `${a}`
        let pad = " "
        let diff = n - a.length
        let rightPad = ""
        let leftPad = ""
        if (diff <= 0) {
            return result;
        } else {
            for (let index = 1; index <= diff; index++){
                if (index%2===1){
                    leftPad += pad;
                } else if (index%2===2){
                    rightPad += pad;
                }
                
            } return `${leftPad}${result}${rightPad}`;
        }

    },
    capitalize(a){
        return a.charAt(0).toUpperCase() + a.slice(1);
    }

    // leftPad(a, n){
    //     const pad = ' ';
    //     if (n.length > a.length){
    //         return (`${pad}(n.length-a.length)a`);
    //     } else {return `${a}`}
        
    // }
}

let a = 'you';

console.log(StringExtras.capitalize(a)); // returns '    you   '

