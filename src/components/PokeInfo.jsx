import React from "react";
import { Link } from "react-router-dom";
import { MdGrass } from "react-icons/md";
import {
  GiPoisonBottle,
  GiLibertyWing,
  GiGroundSprout,
  GiStoneBlock,
  GiSpottedBug,
  GiGhost,
  GiSteelClaws,
  GiCelebrationFire,
  GiWaterSplash,
  GiElectricalCrescent,
  GiPsychicWaves,
  GiIceBolt,
  GiSpikedDragonHead,
  GiFairyWand,
  GiShadowFollower,
  GiPunchBlast,
} from "react-icons/gi";
import { RiEmotionNormalLine } from "react-icons/ri";
import { FaRegHandRock } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { BsPatchQuestionFill } from "react-icons/bs";


function PokeInfo({ poke, prevPoke, nextPoke }) {
  return (
    <>
      <img src={poke?.sprites?.other?.home?.front_default} alt={poke?.name} />

      <button onClick={prevPoke}>Previous</button>
      <button onClick={nextPoke}>Next</button>
    </>
  );
}

export default PokeInfo;
