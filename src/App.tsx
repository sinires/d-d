import React from 'react';
import { DateBlock } from "./blocks/DateBlock";
import { DetailsBlock } from "./blocks/DetailsBlock";
import { DressCodeBlock } from "./blocks/DressCodeBlock";
import { PlaceBlock } from "./blocks/PlaceBlock";
import { ProgramBlock } from "./blocks/ProgramBlock";
import { WelcomeBlock } from "./blocks/WelcomeBlock";
import { TitleBlock } from './blocks/TitleBlock'
import { OrganizerContactsBlock } from './blocks/OrganizerContactsBlock'
import { FooterBlock } from './blocks/FooterBlock'
import { useMeasure } from 'react-use'
import './App.css';
import {Snowfall} from "react-snowfall";

const image = document.createElement('img')
image.src = '/star.png'

const images = [image]

const blocks = [
  <TitleBlock />,
  <WelcomeBlock />,
  <DateBlock />,
  <ProgramBlock />,
  <DressCodeBlock />,
  <DetailsBlock />,
  <PlaceBlock />,
  <OrganizerContactsBlock />,
]

function App() {
  const [ref, { height }] = useMeasure<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className="App"
    >
      <Snowfall images={images} radius={[18,  24]} speed={[0.4, 1]} snowflakeCount={40} style={{
        height: height
      }} />
      <main className='App-content'>
        {
          blocks.map(block => (
            <div key={Math.random()}>
              {block}
            </div>
          ))
        }
        <FooterBlock />
      </main>
    </div>
  );
}

export default App;
