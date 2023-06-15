import Thead from '../Thead';
import './table.css'

const Table = ({ month, day }) => {
    return (
        <table>
            <Thead />
            <tbody>
                {Array.from(Array(40), (e, i) => {
                    return (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{day} {month}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table;