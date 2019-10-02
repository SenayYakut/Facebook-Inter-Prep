function designerPdfViewer(h, word){
    let h=word.split(" ").map(Number);
    let maxHeight=1;

    for(let letter of word){  
        maxHeight = Math.max(maxHeight, h[letter.charCodeAt(0) - 97]);
        if (maxHeight === 7) break;
    }
        console.log(word.length*highest);
    }

designerPdfViewer(["1" "3" "1" "3" "1" "4" "1" "3" "2" "5" "5" "5" "5" "5" "5" "5" "5" "5" "5" "5" "5" "5" "5" "5" "5" "7"], "zaba");