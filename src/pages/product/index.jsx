import React, { useEffect, useState } from 'react'
import { Form, Button, Row, Col } from 'bootstrap-4-react'
import { db } from "../../services/firebaseConnection"
import { addDoc, collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { useNavigate} from 'react-router-dom'

const MyProduct = () => {

    const [nome, setNome] = useState()
    const [preco, setPreco] = useState()
    const [products, setProducts] = useState([])

    const navigate = useNavigate()

    //função para pegar produtos no banco
    async function findAllProducts() {
        const productsRef = collection(db, 'topicos2')
        await getDocs(productsRef)
            .then((snapshot) => {
                let lista = []
                snapshot.forEach((doc) => {
                    lista.push({
                        id: doc.id,
                        nome: doc.data().nome,
                        preco: doc.data().preco
                    })
                })
                setProducts(lista)
            })
    }

    useEffect(() => {
        findAllProducts()
        console.log(products)
    }, [products])

    //função para registrar o produto no banco
    async function registerProduct(e) {
        e.preventDefault()

        try {

            const docRef = await addDoc(collection(db, "topicos2"), {
                nome: nome,
                preco: preco
            })
            setNome('')
            setPreco('')
            alert('Gravou!')

        } catch (error) {
            console.log(error)
        }
    }

    //função para deletar produto
    async function handleDelete(id) {
        const docRef = doc(db, 'topicos2', id)
        await deleteDoc(docRef)
            .then(() => {
                alert('Produto Deletado')
            })
            .catch((erro) => {
                alert('Erro ao Deletar!')
            })
    }

    //função para editar produto
    function handleEdit(idProduct) {
        navigate('/editProduct', { state: { id: idProduct } })
    }

    return (
        <div className="container">
            <form onSubmit={registerProduct}>
                <Form.Group>
                    <Row>
                        <Col col="sm-6">
                            <label>Nome:</label>
                            <Form.Input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row>
                        <Col col="sm-6">
                            <label>Preço:</label>
                            <Form.Input type="text" value={preco} onChange={(e) => setPreco(e.target.value)} />
                        </Col>
                    </Row>
                </Form.Group>

                <Button primary type="submit">Submit</Button>
            </form>

            <div className="container-table">
                <br />
                <h3>Lista de produtos registrados:</h3>
                <ol>
                    {
                        products.map((item) => (
                            <li className='lista' key={item.id}>
                                <b>Nome:</b> {item.nome} - 
                                <b> Preço:</b> {item.preco}

                                <button onClick={() => handleDelete(item.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                    </svg>
                                </button>

                                <button onClick={() => handleEdit(item.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                    </svg>
                                </button>
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

export default MyProduct