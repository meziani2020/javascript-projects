

function makeLine(size,caracter="#"){
    let line="";
    for(let i=0; i<size;i++){
        line+=caracter;
    }
    return line;
}

console.log(makeLine(5));


function makeSquare(size,caracter="#"){
    let squar="";
    
    for(let i=0; i<size;i++){
        squar+=makeLine(size,caracter)  ;
        if(i!= size-1){squar+="\n"}
        
    }
    return squar;
}


console.log(makeSquare(5));
console.log(makeSquare(5,"~"));

console.log("--------------------makeRectangle: --------------");

function makeRectangle(width, height,caracter="#"){
    let line=makeLine(width,caracter);
    let rectangle="";
    for(let i=0;i<height;i++){
        rectangle+=line;
        if(i!= height-1){rectangle+="\n"}
    }
    return rectangle;
}

console.log(makeRectangle(5, 3));





function makeDownwardStairs(height,caracter="#"){
    let triangle="";
    for(let i=1;i<=height;i++){
        triangle +=makeLine(i)+"\n";
    }
    return triangle.slice(0,-1);
}

console.log(makeDownwardStairs(5));




function makeSpaceLine(numSpaces, numChars,caracter="#"){
    let space='';
    for(let i=0;i<numSpaces;i++){
       space+=" ";
    }

    return  space+makeLine(numChars,caracter) +space;
}

console.log(makeSpaceLine(3, 5));




function makeIsoscelesTriangle(height,caracter="#"){
    let triangle="";
    for(let i=0;i<height;i++){
        triangle += (makeSpaceLine(height - i - 1, 2*i + 1,caracter) + '\n');
     }
     return  triangle.slice(0,-1);
}


console.log(makeIsoscelesTriangle(5));



function makeDiamond(height,caracter="#"){
    return makeIsoscelesTriangle(height,caracter)+"\n"+makeIsoscelesTriangle(height,caracter).split("\n").reverse().join("\n");
}

console.log(makeDiamond(5));
console.log(makeDiamond(5,"*"));