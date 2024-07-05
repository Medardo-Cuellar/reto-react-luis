import { useRouter } from 'next/router'

export default function ProductDetail(){
    const router = useRouter();
    const {id} = router.query;
    return(
        <div>
            <h1>Este es el detalle del Producto con el id: {id} </h1>
            <a href="../">back</a>
        </div>
    )
}