import * as C from "./styles.js"
import GridItem from "../GridItem/index.js"

const Grid = ({itens, setItens}) => {


    const onDelete = (ID) => {

        const newAray =  itens.filter((transaction) => transaction.id !== ID)

        setItens(newAray)

        localStorage.setItem("transactions", JSON.stringify(newAray))

    }


    return(
        <C.Table>

        <C.Thead>
            <C.Tr>
                <C.Th width={40}>Descricao</C.Th>
                <C.Th width={40}>Valor</C.Th>
                <C.Th width={10} alignCenter>
                    Tipo
                </C.Th>

                <C.Th width={10}></C.Th>
            </C.Tr>
        </C.Thead>

        <C.Tbody>
            {itens?.map((item, index) => (
                <GridItem key={index} item={item} onDelete={onDelete} />
            ))}
        </C.Tbody>

        </C.Table>
    )
}

export default Grid