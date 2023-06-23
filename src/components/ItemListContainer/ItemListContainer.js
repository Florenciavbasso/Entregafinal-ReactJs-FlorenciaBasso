import { useState, useEffect } from "react"
// import {getProducts, getProductsByCategory} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { Form, useParams } from 'react-router-dom'
import {getDocs, collection, query, where } from 'firebase/firestore'
import {db} from '../../services/firebase/firebaseConfig'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() =>{
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, 'charraproductos'), where ('category', '==', categoryId))
            : collection (db, 'charraproductos')

        getDocs(collectionRef)
            .then(response => {
                const porductsAdapted = response.docs.map(doc =>{
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })

            setProducts(porductsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally (() => {
                setLoading(false)
            })
        }, [categoryId])


    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer