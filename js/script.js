function showAllMenu(){
    $.getJSON('data/pizza.json', function(data){
        let menus = data.menu;
    
        $.each(menus, function(i, menu){
            $('#daftar-menu').append(`
                <div class="col-md-4">
                    <div class="card mb-4">
                    <img src="img/menu/${menu.gambar}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${menu.nama}</h5>
                        <p class="card-text">${menu.deskripsi}</p>
                        <h5 class="card-title">Rp. ${menu.harga},-</h5>
                        <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                    </div>
                    </div>
                </div>
            `);
        });
    });
}

// on page reload (default home UI)
showAllMenu();

$('.nav-link').on('click', function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    // get text according value nav-link in tag <a>
    let kategori = $(this).html();
    $('h1').html(kategori);

    $.getJSON('data/pizza.json', function(data){
        $('#daftar-menu').html('');
        let menus = data.menu;
        let content = '';

        if(kategori.toLowerCase() === 'all menu'){
            showAllMenu();
            return;
        }
        
        $.each(menus, function(i, menu){
            // console.log(kategori.toLowerCase(), menu.kategori);
            if(kategori.toLowerCase() === menu.kategori){
                content += `
                    <div class="col-md-4">
                        <div class="card mb-4">
                        <img src="img/menu/${menu.gambar}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${menu.nama}</h5>
                            <p class="card-text">${menu.deskripsi}</p>
                            <h5 class="card-title">Rp. ${menu.harga},-</h5>
                            <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                        </div>
                        </div>
                    </div>
                `;
            }
        });
        $('#daftar-menu').html(content);
    });
});