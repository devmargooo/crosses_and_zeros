import { Cell, CellProps } from "./Cell";
import { FieldData, isCoords, CellData, isDefined } from "./enteties";

interface FieldProps {
    fieldState: FieldData;
}

const CellDataToCellPropsMapper:(data:CellData, index:number) => CellProps | undefined
 = (data:CellData, index:number) => {
    const coords = index + 1;
    if (isCoords(coords)) {
        return {
            cellData: data,
            coords,
        }
    }
 }

export const Field:React.FC<FieldProps> = ({ fieldState }) => {
    const items = fieldState
        .map(CellDataToCellPropsMapper)
        .filter(isDefined);

    return (
        <div className="field">
            {items.map((item) => <Cell {...item} key={item.coords}/>)}
        </div>
    )
}