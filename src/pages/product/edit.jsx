import React from 'react'
import { useLocation} from 'react-router-dom'
import { useState} from 'react'
import { Form, Button, Row, Col } from 'bootstrap-4-react'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../services/firebaseConnection'

const EditProduct = () => {

    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const location = useLocation()

    const id = location?.state?.id

    //função para editar dados do produto
    async function handleEditSave(e) {
        e.preventDefault()
        try {
            const docRef = doc(db, "topicos2", id)
            await updateDoc(docRef, {
                nome: nome,
                preco: preco
            })
                .then(() => {
                    alert('Dados Atualizados!')
                })

        } catch (error) {
            console.log(error)
        }
    }

    return (

        <div className="container" w="90">
            <form>
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

                <Button onClick={(e) => handleEditSave(e)} primary type="submit">Atualizar</Button>
            </form>
        </div>

    )
}
export default EditProduct