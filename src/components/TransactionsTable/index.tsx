import { Container } from "./styles";

export function TransactionsTable() {
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Website Development</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Development</td>
                        <td>08/02/2022</td>
                    </tr>
                    <tr>
                        <td>House Rent</td>
                        <td className="withdraw">- R$ 1.100</td>
                        <td>Home</td>
                        <td>17/02/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}