function mostrarDiv(divId) {
    amagarDivs();
    document.getElementById(divId).style.display = 'grid';
}
    
function amagarDivs() {
    document.getElementById('pi1').style.display = 'none';
    document.getElementById('pi2').style.display = 'none';
    document.getElementById('pi3').style.display = 'none';
    document.getElementById('pi4').style.display = 'none';
}

document.getElementById("part1").addEventListener("click", function(){
    mostrarDiv("pi1");
 });
 document.getElementById("part2").addEventListener("click", function(){
    mostrarDiv("pi2");
 });
 document.getElementById("part3").addEventListener("click", function(){
    mostrarDiv("pi3");
 });
 document.getElementById("part4").addEventListener("click", function(){
    mostrarDiv("pi4");
 });
 
 
 window.onload = function() {
    amagarDivs();
    mostrarDiv('pi1');
};


