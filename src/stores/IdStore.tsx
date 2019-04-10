import {observable,action } from 'mobx';
import {persist,create} from 'mobx-persist';
 class IdStore{
    @persist @observable id : number = 0
    @action incrementId() : void{
       this.id++
    }
    }


export default IdStore