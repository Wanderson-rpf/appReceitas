import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";

function Profile() {
  return (
    <div>
      <Header />
      <Title title={ 'Dados do Usuário' } />
    </div>
  );
}

export default Profile;
