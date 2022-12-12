import {defineStore} from "pinia";
import {useLoadingState} from "@/stores/loading_state";


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
                setTimeout(() => {
                    this.kargolar = [
                        [1, 1, 2, 13, 10, 23, 4],
                        [2, 2, 1, 100, 30, 3, 1],
                        [3, 1, 2, 70, 33, 2, 1],
                        [4, 2, 3, 30, 93, 28, 12],
                        [5, 3, 1, 60, 33, 28, 12]
                    ];
                    load.yuklemeyiBitir()
                }, 1000);
            },

        }
    });