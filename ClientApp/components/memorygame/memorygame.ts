import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class MemoryGameComponent extends Vue {
    currentcount: number = 0;
    numberOfPictures: number = 24;
    memoryCards: string = '';

    incrementCounter() {
        this.currentcount++;
    }

    showPictures() {
        for (let i = 0; i < this.numberOfPictures; i++) {
            this.memoryCards += '<div class="memoryCard col-md-1"></div>';
        }
    }
}
