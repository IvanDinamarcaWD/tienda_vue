<template>
        <div class="row bg-color-primario estilo-nav">
            <div class="col-2 bg-color-primario-claro text-white d-flex justify-content-center pt-2" style="border-radius: 0px 50px 50px 0px;">
                <span style="font-size:30px;">tienda.com</span>
            </div>
            <div clasS="col-2 text-white d-flex justify-content-center align-items-center">
                <i class="bi bi-list" style="font-size:30px;"></i>
                <span class="ps-1" style="font-size:25px;">Menú</span>
            </div>
            <div class="col-4 d-flex justify-content-center align-items-center">
                <input class="form-control" style="border:0;border-radius:46px 0 0 46px; height:46px;"
                type="search" placeholder="Buscar en tienda.com" aria-label="Search">
                <div class="bg-white" style="border-radius:0 46px 46px 0">
                    <div class="bg-color-secundario d-flex justify-content-center align-items-center" style="border-radius: 46px;width:46px;height:46px;">
                        <i class="bi bi-search text-white" style="font-size:30px;"></i>
                    </div>
                </div>
            </div>
            <div class="col-2 text-white pt-2">
                <span class="ps-1" style="font-size:20px;line-height: 90%;">Hola, <br>Inicia sesión</span>
                <i class="bi bi-chevron-down"></i>
            </div>
            <div class="col-1">
                Mis compras
            </div>
            <div class="col-1">
                icono carrito
            </div>
        </div>
</template>

<style>

    .estilo-nav{
        height: 70px;
    }

</style>