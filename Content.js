let menu = document.getElementById('nav_subtabs');
if (menu) {
    let a = document.createElement('a');
    a.href = location.href.replace('etherscan.io', 'etherscan.deth.net');
    a.target = '_blank';
    a.className = "nav-link active show";
    a.style = "background-color: #3498db !important";
    a.textContent = 'dETH';
    let li = document.createElement('li');
    li.append(a);
    li.className = 'nav-item';
    menu.insertBefore(li, menu.firstElementChild);
}
