function verifica (str1, str2) {
    let contido = true;

    for (let i = 0; i < str1.length; i++) {
        let carac1 = str1.charAt(i).toLowerCase();

        for(let j = 0; j < str2.length; j++){
            let carac2 = str2.charAt(j).toLowerCase();

            if(carac1 == carac2) {
                contido = true;
                break;
            } else {
                contido = false;
            }
        }
        if(!contido) {
            return contido;
        }
    }
    return contido;
 }

 console.log(verifica('abc','bac'));
 console.log(verifica('abz', 'avx'));