import { motion } from "framer-motion"
import styled from "styled-components";
import react from "react";

export default function Paragraph({
    text="text"
}){
    return (
        <Text>
            {text}
        </Text>
    )
}

const Text = styled.div`
  font-family: 'Cinzel Decorative', cursive;
  font-size: 1.5rem;
  color: #FFFDC3;
  display: flex;
  
`
