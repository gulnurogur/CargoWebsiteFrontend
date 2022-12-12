import {defineStore} from "pinia";
import {useLoadingState} from "@/stores/loading_state";


export const usePersonState = defineStore('kisi',
    {
        state: () => ({
            persons: [],
        }),
        actions: {
            yukle() {
                const load = useLoadingState();
                load.yuklemeyeBasla()
                setTimeout(() => {
                    this.persons = [
                        [1, "Ali Eren Ekinci"],
                        [2, "Osman Baki Ekinci"],
                        [3, "Gülnur Ögür"]
                    ];
                    load.yuklemeyiBitir()
                }, 200)

            },
            kisiBul(id) {
                for (let i = 0; i < this.persons.length; i++) {
                    if (this.persons[i][0] === id){
                        return this.persons[i][1]
                    }
                }
            },
            ekle(kisi){
                this.persons.push(kisi)

                // axios.post('kisiler/', kisi).then(response => {

                //})
            }
        }
    })