$(document).ready(function(){
    $("#kirill").keyup(function(){
        var kirillText = $(this).val().replaceAll('А','A').replaceAll('а','a').replaceAll('б','b').replaceAll('Б','B').replaceAll('В','V').replaceAll('в','v').replaceAll('Г','G').replaceAll('г','g').replaceAll('Д','D').replaceAll('д','d').replaceAll('Е','E').replaceAll('е','e').replaceAll('Ч','Ch').replaceAll('ч','ch').replaceAll('Ё','Yo').replaceAll('ё','yo').replaceAll('Ж','J').replaceAll('ж','j').replaceAll('З','Z').replaceAll('з','z').replaceAll('И','I').replaceAll('и','i').replaceAll('Й','Y').replaceAll('й','y').replaceAll('к','k').replaceAll('К','K').replaceAll('Л','L').replaceAll('л','l').replaceAll('М','M').replaceAll('м','m').replaceAll('Н','N').replaceAll('н','n').replaceAll('о','o').replaceAll('О','O').replaceAll('П','P').replaceAll('п','p').replaceAll('Р','R').replaceAll('р','r').replaceAll('С','S').replaceAll('с','s').replaceAll('Т','T').replaceAll('т','t').replaceAll('У','U').replaceAll('у','u').replaceAll('Ф','F').replaceAll('ф','f').replaceAll('Х','H').replaceAll('х','h').replaceAll('Ц','S').replaceAll('ц','s').replaceAll('Ш','Sh').replaceAll('ш','sh').replaceAll('Щ','Sh').replaceAll('щ','sh').replaceAll('Ъ','`').replaceAll('ъ','`').replaceAll('Ы','i').replaceAll('ы','i').replaceAll('Ь','').replaceAll('ь','').replaceAll('Э','E').replaceAll('э','e').replaceAll('Ю','YU').replaceAll('ю','yu').replaceAll('Я','YA').replaceAll('я','ya');

        $("#lotin").val(kirillText);
    });
});
const lan1 = document.querySelector('#language');
const lan2 = document.querySelector('#language2');
const transfer1 = document.querySelector('.textarea');
const transfer = document.querySelector('.textarea__disab');
$('.languages__change').click(function () {
    if (lan1.innerHTML == 'Kirill') {
        lan1.innerHTML = 'Lotin'
    }else{
        lan1.innerHTML = 'Kirill'
    }
    if (lan2.innerHTML === 'Lotin') {
        lan2.innerHTML = 'Kirill'
    }else{
        lan2.innerHTML = 'Lotin'
    }
    if (transfer1.getAttribute('id') == 'kirill') {
        transfer1.setAttribute('id', 'lotin')
        $(document).ready(function(){
            $("#lotin").keyup(function(){
                var lotinText = $(this).val().replaceAll('A','А').replaceAll('a','а').replaceAll('b','б').replaceAll('B','Б').replaceAll('V','В').replaceAll('v','в').replaceAll('G','Г').replaceAll('g','г').replaceAll('D','Д').replaceAll('d','д').replaceAll('EY','Е').replaceAll('ye','е').replaceAll('CH','Ч').replaceAll('Ch','Ч').replaceAll('ch','ч').replaceAll('Yo','Ё').replaceAll('YO','Ё').replaceAll('yo','ё').replaceAll('J','Ж').replaceAll('j','ж').replaceAll('Z','з').replaceAll('z','з').replaceAll('I','И').replaceAll('i','и').replaceAll('Y','Й').replaceAll('y','й').replaceAll('k','к').replaceAll('K','К').replaceAll('L','Л').replaceAll('l','л').replaceAll('M','М').replaceAll('m','м').replaceAll('N','Н').replaceAll('n','н').replaceAll('o','о').replaceAll('O','О').replaceAll('P','П').replaceAll('p','п').replaceAll('R','Р').replaceAll('r','р').replaceAll('S','С').replaceAll('s','с').replaceAll('T','Т').replaceAll('t','т').replaceAll('U','У').replaceAll('u','у').replaceAll('F','Ф').replaceAll('f','ф').replaceAll('H','Х').replaceAll('h','х').replaceAll('Sh','Ш').replaceAll('SH','Ш').replaceAll('sh','ш').replaceAll('`','ъ').replaceAll('Yu','Ю').replaceAll('YU','Ю').replaceAll('yu','ю').replaceAll('Ya','Я').replaceAll('YA','Я').replaceAll('ya','я').replaceAll('W','В').replaceAll('w','в').replaceAll('Q','К').replaceAll('q','к');

                $("#kirill").val(lotinText);
            });
        })
    }else{
        transfer1.setAttribute('id', 'kirill')
    }
    if (transfer.getAttribute('id') == 'lotin') {
        transfer.setAttribute('id', 'kirill')
        
    }else{
        transfer.setAttribute('id', 'lotin')
    }
})
$('.save').mousedown(function () {
    $(this).css({
        background: 'rgb(29, 29, 29)',
        color: 'white'
    })
})
$('.save').mouseup(function () {
    $(this).css({
        color: 'white',
        background: '#3d83fc'
    })
})
function copy() {
    var copyText = document.querySelector("textarea[readonly]");
    copyText.select();
    document.execCommand("copy");
    alert("Скопировать текст: " + copyText.value + ' ?');
}