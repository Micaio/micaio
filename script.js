function verificar(){
var n1 = window.document.getElementById('iNNSC')

var stab = window.document.getElementById('seltabuada')

if(n1.value.length == 0){
    window.alert('Coloque  um  número pfv')
}else {
    var n2 = Number(n1.value)
    var x = 0
    stab.innerHTML = ''
    for(;x<=10;x++){
        var item = document.createElement('option')
        item.text = `${x} x ${n2} = ${x*n2}`
        stab.appendChild(item)
    }


}

}