import styled from "styled-components";

export const Section = styled.section(props=>({
    backgroundColor: props.backgroundColor,
    padding: '3rem 0',
}))

export const SectionContainer = styled.div`
text-align: center;
`;

export const SectionTitle = styled.h2(props=>({
    color:props.color || '#001a79',
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
}))

export const Button1 = styled.button`
    padding: 1rem;
    margin:0.5rem;
    border:none;
    font-size:medium;
    border-radius:3px;
    color: white;
    cursor:pointer;
    background-color:var(--primary-color);

    &:hover {
        background-color:var(--primary-color-dark);
    }

    &:active {
        transform:scale(0.89);
    }
`;