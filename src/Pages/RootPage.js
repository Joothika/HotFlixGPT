import React from "react";
import { Background, RootContent } from "../utils/ExportComponents";

const RootPage = () => {
  return (
    <Background>
      <main className="h-screen bg-black/50 sm:bg-black/30">
        <RootContent />
      </main>
    </Background>
  );
};

export default RootPage;
