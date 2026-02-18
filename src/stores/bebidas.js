import { ref, onMounted, reactive} from "vue";
import { defineStore } from "pinia";
import APIService from "../service/APIService";

export const  useBebidasStore = defineStore('bebidas', () => {

    const categorias = ref([])
    const busqueda = reactive({
        nombre: '',
        categoria: '',
    })

    onMounted(async() => {
        const {data : {drinks}} = await APIService.obtenerCategorias()
        categorias.value = drinks
    })

    function obternerRecetas() {

    }
    return {
        categorias,
        busqueda,
        obternerRecetas
    }
})
