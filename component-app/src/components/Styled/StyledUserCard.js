import styled from 'styled-components'

const StyledUserCard = styled.div`
        margin: 0 10px;
        border-radius: 10px;
        background-color: ${(props) => props.color};
        box-shadow: 0px 0px 10px #808080;
        width: 120px;
        padding: 10px;
        
        h3 {
           color: red;
           }
`

export default StyledUserCard