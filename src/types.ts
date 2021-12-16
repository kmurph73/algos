import { IterableAStar } from "./algos/IterableAStar";
import { IterableLazyDijkstra } from "./algos/IterableLazyDijkstra";
import { Grid, Tile, TileType } from "./grid/Grid";

declare global {
  interface Window {
    main: () => void;
    yar: boolean;
    App: {
      state: State;
      grid: Grid;
    };
  }
}

export type State = {
  dragging: boolean;
  currentType: TileType | null;
  allowDiagonal: boolean;
  currentAlgo?: IterableLazyDijkstra | IterableAStar;
  currentLoop?: number;
  currentVisitedTile?: Tile;
  speed: Speed;
  algo: AlgoType;
};

export type Speed = "slow" | "medium" | "fast";

export type AlgoType = "Djikstra" | "A*";
