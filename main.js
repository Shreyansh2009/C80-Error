var student_name_array = [];
var display_studentname_array = [];

function submit(){

    for(var i=1; i<=4; i++){
        var student_name = document.getElementById('name_of_the_student_'+i).value;
        student_name_array.push(student_name);
        console.log (student_name_array);

    }

    var length_array = student_name_array.length;
    console.log (length_array);

    for(var j=0; j<=length_array; j++){
        display_studentname_array.push(student_name_array[j]);
    }
    document.getElementById('display_name_with_commas').innerHTML = display_studentname_array;
    

    
    
}