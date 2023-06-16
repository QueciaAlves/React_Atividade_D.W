import React from 'react'
import { useLocation} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'bootstrap-4-react'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../services/firebaseConnection'

const EditClient= () => {

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [cpf, setCpf] = useState('')
    const location = useLocation()

    const id = location?.state?.id

    //função para editar dados do usuário
    async function handleEditSave(e) {
        e.preventDefault()
        try {
            const docRef = doc(db, "topicos2", id)
            await updateDoc(docRef, {
                nome: nome,
                sobrenome, sobrenome,
                cpf: cpf
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
                            <label>Sobrenome:</label>
                            <Form.Input type="text" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row>
                        <Col col="sm-6">
                            <label>CPF:</label>
                            <Form.Input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                        </Col>
                    </Row>
                </Form.Group>

                <Button onClick={(e) => handleEditSave(e)} primary type="submit">Atualizar</Button>
            </form>
        </div>

    )
}
export default EditClient