function countOccurrences(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            counter += 1;
        }
    }
    return counter;
}
countOccurrences("ini mini miny moe", "n");

    //1 line num 5
    //2 i used debbuger in vs code 
    //3 counter did not accumelate the value due to miswritten syntax
    //4 code fixed on line 5