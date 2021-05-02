import styled from 'styled-components';

//styling for the navbar div
const Div = styled.div`
    background-color: rgba(40,40,40,0.3);
    padding: 2%;
`
const Button = styled.a`
    background-colour: teal;
    color: blue;
    padding: 1rem 2rem;
`

export default function Navbar(){
    return(
        <Div>
            <Button>Clicker</Button> 
        </Div>
    )
}