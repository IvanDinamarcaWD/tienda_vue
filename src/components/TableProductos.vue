<template>
    <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>
            <th scope="col">Precio</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="producto in productos" :key="producto.id_producto">
                <td>{{ producto.id_producto }}</td>
                <td>{{ producto.nombre_producto }}</td>
                <td>{{ producto.descripcion_producto }}</td>
                <td>{{ producto.precio }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">

    import axios from 'axios';
    import { ref } from 'vue';

    interface Producto {
        id_producto: number;
        nombre_producto: string;
        descripcion_producto: string;
        precio: number;
    }

    const productos = ref<Producto[]>([]);

    const get_productos = () =>{

        axios.get("/get_productos")
        .then((res)=>{

            console.log("res: ", res.data.data);
            if(res.data.msg == 'ok'){
                productos.value = res.data.data
            }

            console.log("productos.value: ", productos.value);

        })
        .catch((err)=>{
            console.log("err: ", err);
        });

    }

    get_productos();

</script>