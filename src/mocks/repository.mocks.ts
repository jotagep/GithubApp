import { Repository } from "../modals/repository.interface";
import { USER_LIST } from "./user.mocks";

const repositoryList: Repository[] = [
    {
        name: 'Ionic 3 Camera',
        description: 'Este repositorio muestra el uso de la camara en Ionic 3',
        owner: USER_LIST[0],
    },
    {
        name: 'Ionic 3 SMS',
        description: 'Este repositorio muestra el uso de los SMS en Ionic 3',
        owner: USER_LIST[0],
    },
        {
        name: 'Ionic 3 Maps' ,
        description: 'Este repositorio muestra el uso de los maps en Ionic 3',
        owner: USER_LIST[1],
    },
        {
        name: 'Ionic 3 Bluetooth' ,
        description: 'Este repositorio muestra el uso del Bluetooth en Ionic 3',
        owner: USER_LIST[1],
    },
]

export const REPOSITORY_LIST = repositoryList;