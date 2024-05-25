import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBar from "../components/SideBar";

const CenteredView = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.main`
  display: grid;
  grid-template-columns: 240px 1fr;
  background-color: rgb(255, 255, 255);
  width: 100%;
  max-width: 1024px;
  height: 500px;
  margin: 0px auto;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
`;

function MainLayout() {
  return (
    <CenteredView>
      <Container>
        <SideBar />
        <Outlet />
      </Container>
    </CenteredView>
  );
}

export default MainLayout;
