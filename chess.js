// pawn
// knight
// bishop
// rook
// queen
// king

// board
// a1
// a2
// a3
// a4
// a5
// a6
// a7
// a8
// b1
// b2
// b3
// b4
// b5
// b6
// b7
// b8 
// c1
// c2
// c3
// c4
// c5
// c6
// c7
// c8
// d1
// d2
// d3
// d4
// d5
// d6
// d7
// d8
// e1
// e2
// e3
// e4
// e5
// e6
// e7
// e8
// f1
// f2
// f3
// f4
// f5
// f6
// f7
// f8
// h1
// h2
// h3
// h4
// h5
// h6
// h7
// h8
// g1
// g2
// g3
// g4
// g5
// g6
// g7
// g8


// pieces
//rules - two pieces on the same square of the same team
// check rules
// timer?



// https://github.com/Ashfield151/maybe.js.git

div
{
border:1px solid black;
width:20px;
height:20px;
}


<script type="text/javascript">

    // create a chess table 8x8.

    var count = 0;

while (count < 64)
    {

    if (count % 2 == 0)

        {

        if (count % 8 == 0 && count !=0)
            {
            document.write('<br/><div style="background-color:#000000;float:left;">&nbsp</div>');

            }
        else    
            {
            document.write('<div style="background-color:#000000;float:left;">&nbsp</div>');    
            }
        }

    else

        {
        document.write('<div style="background-color:#FFFFFF;float:left;">&nbsp</div>');
        }
    /*  
    */          
    count++;
    }
</script>


var table = document.createElement("table");
for (var i = 1; i < 9; i++) {
    var tr = document.createElement('tr');
    for (var j = 1; j < 9; j++) {
        var td = document.createElement('td');
        if (i%2 == j%2) {
            td.className = "white";
        } else {
            td.className = "black";
        }
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
document.body.appendChild(table);
