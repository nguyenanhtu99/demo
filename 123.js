
var start;
var stop;
var memory;
var output;
    $(document).ready(function(){
        $.ajaxSetup({ cache: false});
        setInterval(function() {
            $.getJSON("IO.html", function(result){
                start = result["start"];
                stops = result["stop"];
                memory = result["m200_0"];
                // output = result["q0_1"];
                if (start == 1){
                    document.getElementById('cir_start').setAttribute('fill',"#00ff00");
                }
                else{
                    document.getElementById('cir_start').setAttribute('fill',"#ff0000");
                }

                if (stops == 1){
                    document.getElementById('cir_stop').setAttribute('fill',"#00ff00");
                }
                else{
                    document.getElementById('cir_stop').setAttribute('fill',"#ff0000");
                }

                if (memory == 1){
                    document.getElementById('cir_memory').setAttribute('fill',"#00ff00");
                }
                else{
                    document.getElementById('cir_memory').setAttribute('fill',"#ff0000");
                }

                // if (output == 1){
                //     document.getElementById('cir_output').setAttribute('fill',"#00ff00");
                // }
                // else{
                //     document.getElementById('cir_output').setAttribute('fill',"#ff0000");
                // }
                //$('#Start').text("Start: " + result["start"]);
                //$('#Stop').text("Stop: " + result["stop"]);
                $('#Data1').text(" " + result["data1"]);
                $('#Data2').text(" " + result["data2"]);
                $('#Data3').text(" " + result["data3"]);
                $('#Data4').text(" " + result["data4"]);
                });
        },1000);
});

$("#Btn_Start").click(function(){
    if(start==1){
        ulr = 'IO.html';
        name = '"Data".Start';
        sdata = escape(name)+'='+0;
        $.post(ulr, sdata, function(result2){});
    }
    else{
        ulr = 'IO.html';
        name = '"Data".Start';
        sdata = escape(name)+'='+1;
        $.post(ulr, sdata, function(result2){});
    }
});

$("#Btn_Stop").click(function(){
    if(stops==1){
        ulr = 'IO.html';
        name = '"Data".Stop';
        sdata = escape(name)+'='+0;
        $.post(ulr, sdata, function(result2){});
    }
    else{
        ulr = 'IO.html';
        name = '"Data".Stop';
        sdata = escape(name)+'='+1;
        $.post(ulr, sdata, function(result2){});
    }
});

$("#Btn_Memory").click(function(){
    if(memory==1){
        ulr = 'IO.html';
        name = 'M200.0';
        sdata = escape(name)+'='+0;
        $.post(ulr, sdata, function(result2){});
    }
    else{
        ulr = 'IO.html';
        name = 'M200.0';
        sdata = escape(name)+'='+1;
        $.post(ulr, sdata, function(result2){});
    }
});

// $("#Btn_Output").click(function(){
//     if(output==1){
//         ulr = 'IO.html';
//         name = 'Q0.1';
//         sdata = escape(name)+'='+0;
//         $.post(ulr, sdata, function(result2){});
//     }
//     else{
//         ulr = 'IO.html';
//         name = 'Q0.1';
//         sdata = escape(name)+'='+1;
//         $.post(ulr, sdata, function(result2){});
//     }
// });

$("#Btn_Data5").click(function(){
    var val = document.getElementById('Data5').value;
    ulr = 'IO.html';
    name = '"Data".Data5';
    sdata = escape(name)+'='+val;
    $.post(ulr, sdata, function(result2){});
    //alert("???? G???i");
});

$("#Btn_Data6").click(function(){
    var val = document.getElementById('Data6').value;
    ulr = 'IO.html';
    name = '"Data".Data6';
    sdata = escape(name)+'='+val;
    $.post(ulr, sdata, function(result2){});
    //alert("???? G???i");
});

$("#Btn_Data7").click(function(){
    var val = document.getElementById('Data7').value;
    ulr = 'IO.html';
    name = '"Data".Data7';
    sdata = escape(name)+'='+val;
    $.post(ulr, sdata, function(result2){});
    //alert("???? G???i");
});

$(document).ready(function(){
    //document.getElementById('cir_start').setAttribute('fill',"#00ff00");
    //alert("OK");

    
});
 function BOMCOM() {
    $('.navbar a[href="#menu1"]').tab('show') 
 }
 function maycancat() {
    $('.navbar a[href="#menu2"]').tab('show') 
 }



 