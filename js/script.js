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