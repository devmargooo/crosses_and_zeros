import { CellData, Coords } from "./enteties";

export interface CellProps {
    cellData: CellData;
    coords: Coords;
}

export const Cell:React.FC<CellProps> = ({cellData}) => (
    <span className="cell">{cellData}</span>
)