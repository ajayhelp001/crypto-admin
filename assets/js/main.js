// cripto Filter
const criptoFilter = document.querySelector('#criptoFilter');
const trendingcripto = document.querySelector('#trendingcripto')
criptoFilter.addEventListener('click', () => {
    const criptoFilterContant = document.querySelector('#criptoFilter .contant');
    const filterValue = criptoFilterContant.innerHTML;
    if (filterValue === 'top losers') {
        criptoFilterContant.innerHTML = 'top gainers';
    } else if (filterValue === 'top gainers') {
        criptoFilterContant.innerHTML = 'top losers';
    } else {
        criptoFilterContant.innerHTML = 'top losers';
    };
    
    const hasClass = trendingcripto.classList.contains('losers-cripto');
    // Toggle the 'losers-cripto' class
    if (hasClass) {
        trendingcripto.classList.remove('losers-cripto');
    } else {
        trendingcripto.classList.add('losers-cripto');
    }
});

// cripto exchange


// cripto Filter End
