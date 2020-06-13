import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber"; //threejsをReactで使うためのモジュール
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
const Controls = dynamic(() => import("../components/orbit"), {
  ssr: false,
});

const LoadedObject = dynamic(() => import("../components/loadgltf"), {
  ssr: false,
});
//threeのメインモジュール以外(OrbitControlsなど)を扱う場合は必ずdynamicを用いること
const ChairScene: React.FC = () => {
  return (
    <ThreePageStyle>
      <CanvasStyle>
        <Canvas camera={{ position: [0.5, 0.3, 0.5] }}>
          <ambientLight intensity={0.5} />
          <spotLight intensity={3} position={[0, 10, 0]} />
          <Suspense fallback={null}>{<LoadedObject />}</Suspense>
          <Controls isControl={true} />
        </Canvas>
      </CanvasStyle>
    </ThreePageStyle>
  );
  //Suspenseは必須、3dデータのロードを管理してくれるらしい。上手くいじるとローディング画面も作れる。
  //Canvasで囲まれてるエレメントがthreejsを表示する窓になっている。
};
const ThreePageStyle = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  position: relative;
  padding-top: 100%;
`;
const CanvasStyle = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  *:focus {
    outline: none;
  }
`;
export default ChairScene;
