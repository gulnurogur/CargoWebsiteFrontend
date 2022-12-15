import {defineStore} from "pinia";
import {useLoadingState} from "@/stores/loading_state";
import axios from "axios";


export const useCargoState = defineStore('cargo',
    {
        state: () => ({
            kargolar: [],
            selectedCargo: null
        }),
        actions: {
            yukle() {
                const load = useLoadingState();

                load.yuklemeyeBasla();
                this.selectedCargo = null;
                axios.get('http://127.0.0.1:5000/api/v1/kargo/').then((response) => {
                    this.kargolar = response.data;
                    load.yuklemeyiBitir()
                })
            },

        }
    });