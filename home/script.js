function merah() {
    let val = document.getElementById('input-red').value;
    let red = document.getElementById('red-value');
    let green = document.getElementById('green-value');
    let blue = document.getElementById('blue-value');
    red.innerHTML = val;
    document.getElementById('box').style.backgroundColor = `rgba(${red.innerHTML}, ${green.innerHTML}, ${blue.innerHTML}, 100)`
}

function hijau() {
    let val = document.getElementById('input-green').value;
    let red = document.getElementById('red-value');
    let green = document.getElementById('green-value');
    let blue = document.getElementById('blue-value');
    green.innerHTML = val;
    document.getElementById('box').style.backgroundColor = `rgba(${red.innerHTML}, ${green.innerHTML}, ${blue.innerHTML}, 100)`
}

function biru() {
    let val = document.getElementById('input-blue').value;
    let red = document.getElementById('red-value');
    let green = document.getElementById('green-value');
    let blue = document.getElementById('blue-value');
    blue.innerHTML = val;
    document.getElementById('box').style.backgroundColor = `rgba(${red.innerHTML}, ${green.innerHTML}, ${blue.innerHTML}, 100)`
}

function transparansi() {
    let val = document.getElementById('input-alpha').value;
    let alpa = document.getElementById('alpha-value');
    alpa.innerHTML = val;
    document.getElementById('box').style.opacity = `${alpa.innerHTML}`
    
}

// function peringatan() {
//     window.location.href="/login";
// }