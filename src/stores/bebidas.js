import { ref, onMounted, reactive} from "vue";
import { defineStore } from "pinia";
import APIService from "../service/APIService";

export const  useBebidasStore = defineStore('bebidas', () => {

    const categorias = ref([])
    const busqueda = reactive({
        nombre: '',
        categoria: '',
    })
    const recetas = ref([])

    onMounted(async function() {
        const {data : {drinks}} = await APIService.obtenerCategorias()
        categorias.value = drinks
    })

    async function obternerRecetas() {
        const {data : {drinks}} = await APIService.buscarRecetas(busqueda)
        recetas.value = drinks
        console.log(recetas.value)
    }
    return {
        categorias,
        busqueda,
        obternerRecetas,
        recetas
    }
})
