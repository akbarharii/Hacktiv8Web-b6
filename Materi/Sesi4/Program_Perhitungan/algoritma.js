document.getElementById("button_result").
addEventListener("click", tampilkan_hasil);

function tampilkan_hasil(){
    var nilai_1=document.getElementById("input_number_1").value;
    var nilai_2=3.14;
    document.getElementById("result_number").innerHTML=nilai_1 * nilai_2;
}

document.getElementById("button_result_2").
addEventListener("click", tampilkan_hasil_2);

function tampilkan_hasil_2(){
    var nilai_1_r=document.getElementById("input_number_2").value;
    var nilai_2_r=3.14;
    document.getElementById("result_number_2").innerHTML=nilai_2_r * (2 * nilai_1_r);
}