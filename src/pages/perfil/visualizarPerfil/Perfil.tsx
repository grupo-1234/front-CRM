import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastAlerta } from '../../../utils/ToastAlert'
import { PhotoIcon, ChevronDownIcon } from '@heroicons/react/16/solid'
import { UserCircleIcon } from '@phosphor-icons/react'

function Perfil() {
    const navigate = useNavigate()

    // const { usuario } = useContext (AuthContext) 

    // useEffect (() => {
    //     if (usuario.token === "") {
    //         ToastAlerta("Você precisa logar!", 'info')
    //         navigate ('/')
    //     }
    // }, {usuario.token}) 


}

export default Perfil