import styled from "styled-components";

export const Section = styled.section(props=>({
    backgroundColor: props.backgroundColor,
    padding: '3rem 0',
    '@media screen and (max-width: 768px)': {
      padding: '2rem 0',
    },
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

export const Underline = styled.div(props=>({
  backgroundColor:props.backgroundColor || `var(--secondary-color)`,
  height: '3px',
  textAlign: 'center',
  width: '50px',
  margin:'2rem auto',
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

export const LeftCarousalButton = styled.button`
  position: absolute;
  top: 50%;
    left:0%;
  transform: translateY(-50%);
  background-color: white;
  border: none;
  font-size: 24px;
  color: #888888;
  cursor: pointer;
  transition: color 0.3s ease;
    z-index:99;
  &:hover {
    color: var(--primary-color);
  }
`;

export const RightCarousalButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0%;
  transform: translateY(-50%);
  background-color: white;
  border: none;
  font-size: 24px;
  color: #888888;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;