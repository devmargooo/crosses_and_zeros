import { useState } from "react";
import { FieldData, GameState, Player, createCrossesPlayer } from "./enteties";
import { Field } from "./Field";

const initial_field:FieldData = [
    null, null, null,
    null, null, null,
    null, null, null,
];

const initial_player:Player = createCrossesPlayer();

export const Game:React.FC = () => {
    const [game_state, setGameState] = useState<GameState>({ type: "start" });
    const [field, setField] = useState<FieldData>(initial_field);
    const [player, setPlayer] = useState<Player>(initial_player);
    return (
        <Field fieldState={initial_field}/>
    )
}