import styled from "styled-components";
import { Line } from 'react-chartjs-2';

const data = {
    labels: [
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
        'Jan',
    ],
    datasets: [],
}
const BalanceChart = () => {
    return <Wrapper>
        <Line data={data} options={options} width={400} height={}></Line>
    </Wrapper>
}

export default BalanceChart

const Wrapper = styled.div``